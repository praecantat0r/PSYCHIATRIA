# Centrum u Velických — web

Vizitková/portfóliová stránka psychiatrickej ambulancie v Banskej Bystrici.
React + Vite + Framer Motion, jednostránkový layout v sýtych zelených tónoch.

## Príkazy

```bash
npm install     # raz na začiatku
npm run dev     # lokálny vývoj (http://localhost:5173)
npm run build   # produkčný build do dist/
```

## Štruktúra

- `src/components/` — sekcie stránky (Hero, About, Team, Gallery, Contact…)
- `src/index.css` — celý dizajn systém (farby sú CSS premenné v `:root`)
- `old/` — pôvodný statický HTML draft (archív)

## Poznámky

- Fotky sú zatiaľ Unsplash placeholdery — stačí vymeniť URL v komponentoch.
- Deploy: `vercel` v koreňovom adresári (rovnako ako NÓARE).
- Texty: kontakt, hodiny a tím sú reálne údaje z pôvodného draftu.
