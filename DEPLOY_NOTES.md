# Deployment and Maintenance Notes

## Recommended Setup

Use a separate repository for the public website:

```text
ChaosTheProducer.github.io
```

This gives the site the clean URL:

```text
https://ChaosTheProducer.github.io
```

Because this is a user-level GitHub Pages repository, no `basePath` or `assetPrefix` is needed in `next.config.ts`.

## Local Node Environment

PRISM requires Node.js 22 or later. The repository includes `.nvmrc` with:

```text
22
```

Recommended local setup:

```bash
cd homepage_prism
nvm install
nvm use
npm install
npm run dev
```

Do not commit `node_modules/`, `.next/`, or `out/`. They are generated locally and already ignored by `.gitignore`.

## Daily Maintenance

Most updates only require editing content files:

- `content/config.toml`: profile, links, navigation, avatar.
- `content/bio.md`: homepage biography.
- `content/about.toml`: homepage research-interest tags and sections.
- `content/publications.bib`: papers and preprints.
- `content/projects.toml`: selected projects.
- `content/news.toml`: news items.
- `content/cv.md`: CV page text.
- `public/Yingjie_Lei_CV.pdf`: latest CV PDF.

For a real profile photo, add it to `public/`, for example:

```text
public/profile.jpg
```

Then update:

```toml
avatar = "/profile.jpg"
```

in `content/config.toml`.

## Build Check

Before deployment:

```bash
npm run build
```

This generates a static site in `out/`.

## GitHub Pages Deployment

Recommended method: GitHub Actions.

1. Push the PRISM project files to `ChaosTheProducer.github.io`.
2. In GitHub repository settings, go to `Pages`.
3. Set source to `GitHub Actions`.
4. Enable the included PRISM deployment workflow under `.github/workflows/deploy.yml`.
5. Run the workflow manually once, or enable automatic deployment on push.

Alternative manual method:

1. Run `npm run build`.
2. Upload everything inside `out/` to the GitHub Pages repository.
3. Add an empty `.nojekyll` file.

The Actions method is better because the source files remain version controlled and the site rebuilds automatically.

## Maintenance Cost

PRISM is more powerful than a pure HTML page, but it has a heavier Node/Next.js dependency stack. Routine content updates are simple, but the project should occasionally be checked with:

```bash
npm outdated
npm audit
npm run build
```

Avoid running `npm audit fix --force` casually because it may introduce breaking dependency upgrades.
