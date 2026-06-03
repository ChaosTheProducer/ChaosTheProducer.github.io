# Yingjie Lei Homepage - PRISM Version

This folder adapts the PRISM academic website template for Yingjie Lei.

## Local Preview

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Static Build

```bash
npm run build
```

The static export is generated in `out/`.

## Content Files

- `content/config.toml`: site title, author profile, social links, and navigation.
- `content/bio.md`: homepage biography.
- `content/about.toml`: homepage sections and research-interest tags.
- `content/publications.bib`: publications and preprints.
- `content/projects.toml`: selected projects.
- `content/cv.md`: CV page content.
- `public/Yingjie_Lei_CV.pdf`: downloadable CV.
- `public/profile.svg`: temporary profile image placeholder.

To use a real photo, add it under `public/`, for example `public/profile.jpg`, then update `avatar` in `content/config.toml`.

## Notes

The original PRISM template is a Next.js/Tailwind/TypeScript project. It is more powerful than the lightweight static `homepage/` version, but it also has higher dependency and maintenance cost.
