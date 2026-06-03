# Yingjie Lei's Academic Homepage

This repository contains the source code for my personal academic homepage:

https://ChaosTheProducer.github.io/

The site is built with Next.js and adapted from the open-source [PRISM](https://github.com/xyjoey/PRISM) academic website template. It is deployed to GitHub Pages through GitHub Actions.

This repository is public because it serves a public academic homepage. The content is intended for academic presentation, including my bio, publications, projects, CV, and selected public materials.

## Editing

Most homepage text can be updated from `content/`:

- `content/bio.md`: homepage bio
- `content/config.toml`: site metadata, navigation, social links, and last updated date
- `content/education.toml`: education section
- `content/news.toml`: news entries
- `content/publications.bib`: publications and preprints
- `content/projects.toml`: selected projects

Static files such as the CV PDF, profile photo, and preview images live in `public/`.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to preview the site locally.

## Build

```bash
npm run build
```

The project uses static export, so production files are generated in `out/`.

## Deployment

Pushing to the `main` branch triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds and deploys the site to GitHub Pages.

## Acknowledgement

This site is based on the open-source [PRISM](https://github.com/xyjoey/PRISM) template.
