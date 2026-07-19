# AR Holz- & Bautenschutz

Statische Unternehmenswebsite auf Basis von [Astro](https://astro.build/) für `www.ar-dach.de`.

## Lokal entwickeln

```bash
pnpm install
pnpm dev
```

## Für GitHub Pages bauen

```bash
pnpm build
```

Astro erzeugt zunächst die statische Ausgabe in `dist/`. Anschließend kopiert das Build-Skript diese Ausgabe nach `docs/`. GitHub Pages veröffentlicht direkt aus `main:/docs`; ein eigener GitHub-Actions-Workflow ist nicht nötig.

Nach jeder inhaltlichen Änderung:

```bash
pnpm check
pnpm build
git add src public scripts docs package.json pnpm-lock.yaml pnpm-workspace.yaml astro.config.mjs
git commit -m "Website aktualisieren"
git push
```

`public/CNAME` und `public/.nojekyll` müssen erhalten bleiben. Sie werden beim Build automatisch in die veröffentlichte Ausgabe übernommen.

## Inhalte

- Hauptseite: `src/pages/index.astro`
- Impressum: `src/pages/impressum.astro`
- Datenschutz: `src/pages/datenschutz.astro`
- Gestaltung: `src/styles/global.css`
- Originalfotos: lokal unter `fotos/` (bewusst nicht versioniert)
- Für die Website ausgewählte Bilder: `src/assets/`
