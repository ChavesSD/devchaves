# Portfólio — Deyvison Chaves

Portfólio profissional em React (Vite) com design **Tech Minimal Dark**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` (ou a porta configurada em `vite.config.js`).

**Se no Windows aparecer erro do Rollup** (`@rollup/rollup-win32-x64-msvc` ou “não é um aplicativo Win32 válido”), reinstale as dependências:

```bash
Remove-Item -Recurse node_modules; Remove-Item package-lock.json; npm install
```

## Estrutura do projeto

```
src/
  components/     → Button, Nav, SectionTitle, TechMarquee (reutilizáveis)
  data/           → siteContent.js (todo o conteúdo editável)
  sections/       → Hero, SobreDiferenciais, TechShowcase, ExperienciaContato, Testimonial, Footer
  utils/          → techIcons.js (ícones do stack)
  App.jsx         → Ordem das seções
  index.css       → Tailwind + variáveis + neon + fundos por seção
```

## Como alterar o conteúdo

Todo o texto, links e projetos ficam em **`src/data/siteContent.js`**:

- **hero** — Nome, título, subtítulo, trust line, CTAs, stats, tech stack do marquee
- **about** — Sobre Mim, parágrafos, atuação, chips, prova social
- **diferenciais** — Lista e bloco Compromisso
- **skills** — Referência do stack por categoria (opcional)
- **techStackShowcase** — Lista plana de techs (usada na seção Stack & Projetos)
- **projects** — Projetos com nome, descrição, features, tech, result, URLs
- **experience** — Trajetória e highlights
- **contact** — Headline, CTA, garantias, botões (WhatsApp, E-mail, LinkedIn)
- **footer** — Ano, nome, tagline, links, “Disponível para projetos”
- **testimonial** — Ative com `testimonial.enabled: true` para exibir a seção

Não é necessário mexer nos componentes para mudar textos ou links.

## Fundos por seção

Os fundos são definidos em **`src/index.css`**:

- **Hero** — Aurora (`.aurora-bg`) com animação; respeita `prefers-reduced-motion`
- **Sobre** — Noise + gradiente (`.section-bg-sobre`)
- **Stack & Projetos** — Grid tech (`.section-bg-grid`)
- **Experiência & Contato** — Aurora suave (`.aurora-bg-soft`)

## Antes de publicar

1. **Contato** em `siteContent.js`: preencha `value` e `href` em `contact.channels` e `contact.primaryButtons`; ajuste `footer.links`.
2. **Favicon**: troque `public/vite.svg` pelo seu ícone.

## Build para produção

```bash
npm run build
```

A saída fica em `dist/`. Pode publicar em Vercel, Netlify ou qualquer hospedagem estática.

## Tecnologias

- React 19 + Vite 7
- Tailwind CSS
- Framer Motion (animações e scroll reveal)
