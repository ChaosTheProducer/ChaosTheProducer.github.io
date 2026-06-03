# Homepage Content Edit Guide

Use this file as a checklist when correcting facts or updating the PRISM homepage.

## Main Files to Edit

| File | What to edit | Notes |
| --- | --- | --- |
| `content/config.toml` | Name, title, institution, email, location, links, avatar, navigation | Start here. This controls the sidebar/header identity. |
| `content/bio.md` | About text on the homepage | Keep it short: 2-3 paragraphs are enough. |
| `content/about.toml` | Research-interest tags and homepage sections | Edit tags if they overstate a field. |
| `content/publications.bib` | Papers, preprints, authors, venues, links, code links | Most important file for factual accuracy. |
| `content/projects.toml` | Selected project descriptions | Use cautious wording for ongoing work. |
| `content/news.toml` | News items | Only include dates/events you are comfortable making public. |
| `content/cv.md` | Web CV summary page | Keep consistent with `CV/Academic/cv.pdf`. |
| `public/Yingjie_Lei_CV.pdf` | Downloadable CV PDF | Replace this whenever the academic CV changes. |
| `public/profile.svg` or `public/profile.jpg` | Profile photo | Use a real photo later if desired. |

## Facts to Check First

- `content/config.toml`: whether the public title should be `Incoming M.S.E. Student in Computer Science` or something more conservative.
- `content/config.toml`: whether location should include `Baltimore, MD` before arrival.
- `content/bio.md`: whether `Fall 2026` and school names are exactly how you want them displayed.
- `content/about.toml`: whether each research-interest tag accurately reflects your current direction.
- `content/publications.bib`: author order, equal-contribution markers, venue/status wording, and links.
- `content/projects.toml`: whether ongoing work should be public before there is a draft.
- `content/news.toml`: whether each news item is public-facing and date-accurate.

## Suggested Public Wording

Use cautious public wording for work that is not yet accepted:

- Good: `Under review`
- Good: `arXiv preprint`
- Good: `Ongoing research`
- Avoid: naming a double-blind venue in public pages unless already safe
- Avoid: overclaiming unpublished ongoing work

## Common Commands

Preview locally:

```bash
npm run dev
```

Build before deployment:

```bash
npm run build
```

Search for old or template content:

```bash
rg -n "Example|Jiale|john.doe|TODO|ECCV" content public
```

## Update Workflow

1. Edit `content/config.toml`, `content/bio.md`, and `content/publications.bib` first.
2. Preview with `npm run dev`.
3. Update `content/projects.toml` and `content/news.toml`.
4. Replace `public/Yingjie_Lei_CV.pdf` if the CV has changed.
5. Run `npm run build` before deploying.
