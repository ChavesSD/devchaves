from collections import deque
from pathlib import Path
from PIL import Image, ImageFilter

original = Path('public/deyvison.original.png')
out_path = Path('public/deyvison.png')

img = Image.open(original if original.exists() else out_path).convert('RGBA')
w, h = img.size
px = img.load()

# 1) Semente do sujeito: pixels opacos que NAO sao fundo quase preto
subject = [[False] * w for _ in range(h)]
q = deque()

for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if a < 200:
            continue
        lum = (r + g + b) / 3
        # pele, cabelo, detalhes: luminosidade ou canal mais alto
        if lum >= 28 or max(r, g, b) >= 34:
            subject[y][x] = True
            q.append((x, y))

print('subject_seeds', len(q))

# 2) Expande para pixels opacos vizinhos (preenche camisa/mao sem sair para o void)
while q:
    x, y = q.popleft()
    for nx, ny in ((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)):
        if not (0 <= nx < w and 0 <= ny < h) or subject[ny][nx]:
            continue
        r, g, b, a = px[nx, ny]
        if a < 180:
            continue
        subject[ny][nx] = True
        q.append((nx, ny))

subject_count = sum(1 for y in range(h) for x in range(w) if subject[y][x])
print('subject_pixels', subject_count)

# 3) Remove residual: opaco escuro fora do sujeito
removed = 0
for y in range(h):
    for x in range(w):
        if subject[y][x]:
            continue
        r, g, b, a = px[x, y]
        if a < 8:
            continue
        # fora do corpo: qualquer residual vira transparente
        px[x, y] = (0, 0, 0, 0)
        removed += 1

print('removed_outside_subject', removed)

# 4) Despill leve so na borda translucida (nao toca corpo opaco)
for y in range(h):
    for x in range(w):
        r, g, b, a = px[x, y]
        if 1 <= a <= 200:
            lum = (r + g + b) / 3
            if lum > 100:
                factor = a / 255.0
                target = 12
                r = int(r * factor * 0.35 + target * (1 - factor * 0.35))
                g = int(g * factor * 0.35 + target * (1 - factor * 0.35))
                b = int(b * factor * 0.35 + target * (1 - factor * 0.35))
                a = max(0, int(a * 0.85))
                px[x, y] = (r, g, b, a)

# 5) Suaviza apenas alpha da borda (mantem interiores em 255)
r_ch, g_ch, b_ch, a_ch = img.split()
a_soft = a_ch.filter(ImageFilter.GaussianBlur(radius=0.8))
a0 = a_ch.load()
a1 = a_soft.load()
a_out = Image.new('L', (w, h))
ao = a_out.load()
for y in range(h):
    for x in range(w):
        v0 = a0[x, y]
        v1 = a1[x, y]
        if v0 >= 250:
            ao[x, y] = 255  # corpo totalmente opaco
        elif v0 <= 5:
            ao[x, y] = 0
        else:
            ao[x, y] = int(v1 * 0.7 + v0 * 0.3)

Image.merge('RGBA', (r_ch, g_ch, b_ch, a_out)).save(out_path, optimize=True)

# verify shirt
check = Image.open(out_path).convert('RGBA')
for pt in [(448, 700), (448, 750), (500, 680), (550, 720)]:
    print('check', pt, check.getpixel(pt))
print('saved', out_path)
