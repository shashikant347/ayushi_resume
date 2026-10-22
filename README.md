# Ayushi Verma – Digital Marketing Portfolio (React)

Vite + React version of the original single-file HTML portfolio.

## Run
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
npm run preview  # preview the build
```

## Structure
- `src/data.js` – all text/data (skills, roles, links, categories). Edit here to update content.
- `src/items.json` – gallery items (title, client, category, media path).
- `public/media/` – gallery images and videos (extracted from the original base64).
- `src/components/` – Nav, Hero, About, Experience, Work (+ WorkCard, Lightbox), ProjectLinks, Contact, Footer, CursorGlow, FireCanvas.
- `src/index.css` – original styles, unchanged.

To add a gallery piece: drop the file in `public/media/` and add an entry to `src/items.json`.
