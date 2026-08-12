"""Suaviza o serrilhado da silhueta no PNG do hero (feather no alpha)."""
from pathlib import Path
from PIL import Image, ImageFilter

src = Path('public/deyvison.png')
backup = Path('public/deyvison.before-soften.png')
out = Path('public/deyvison.png')

img = Image.open(src).convert('RGBA')
backup.write_bytes(src.read_bytes())

r_ch, g_ch, b_ch, a_ch = img.split()

# Máscara dura a partir do alpha atual
hard = a_ch.point(lambda p: 255 if p >= 128 else 0)

# Feather: blur mais generoso na borda
soft = hard.filter(ImageFilter.GaussianBlur(radius=2.4))

# Interior seguro (encolhido) permanece 100% opaco
interior = hard.filter(ImageFilter.MinFilter(size=5))

a0 = hard.load()
a_soft = soft.load()
a_in = interior.load()
a_out = Image.new('L', img.size)
ao = a_out.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        if a_in[x, y] >= 250:
            ao[x, y] = 255
        elif a0[x, y] == 0 and a_soft[x, y] < 8:
            ao[x, y] = 0
        else:
            # mistura para anti-alias suave sem halo forte
            ao[x, y] = int(a_soft[x, y] * 0.85 + (a0[x, y] * 0.15))

result = Image.merge('RGBA', (r_ch, g_ch, b_ch, a_out))
result.save(out, optimize=True)
print('saved', out, 'backup', backup)
