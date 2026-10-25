# Chiranth Nagendra — Portfolio

Personal portfolio of **Chiranth Nagendra**, a Computer Science & Business Systems undergraduate at JSS Science and Technology University building applied AI systems across vision, NLP, speech, and fraud detection.

Fully static (prerendered) site built with Nuxt, designed for a PhD-admissions and recruiter audience.

## Stack

| Layer     | Tooling                                                                                             |
| --------- | --------------------------------------------------------------------------------------------------- |
| Framework | [Nuxt 4](https://nuxt.com) + Vue 3, TypeScript (strict), `<script setup lang="ts">`                 |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) with design tokens in `app/assets/css/main.css`          |
| Content   | [@nuxt/content](https://content.nuxt.com) — one Markdown file per project, Zod-validated            |
| Icons     | [@iconify/tailwind4](https://iconify.design/docs/usage/css/tailwind/tailwind4/) — pure CSS, zero JS |
| Fonts     | [@nuxt/fonts](https://fonts.nuxt.com) with self-hosted Inter, Space Grotesk, JetBrains Mono         |
| SEO       | [@nuxtjs/seo](https://nuxtseo.com) — sitemap, robots, canonical URLs, Schema.org `Person`           |
| Utilities | [@vueuse/core](https://vueuse.org) (clipboard, scroll lock, media queries)                          |
| Images    | [@nuxt/image](https://image.nuxt.com) (ready for a profile photo)                                   |
| Analytics | Vercel Web Analytics + Speed Insights                                                               |
| Quality   | ESLint (`@nuxt/eslint`), Prettier, `vue-tsc`                                                        |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install        # install dependencies
npm run dev        # dev server on http://localhost:3000
npm run generate   # static build into .output/public
npm run preview    # preview the production build
```

Quality checks:

```bash
npm run typecheck  # vue-tsc
npm run lint       # eslint
npm run format     # prettier --write
```

## Project structure

```
app/
├─ app.config.ts          ← name, email, socials, CV path — single source of truth
├─ data/profile.ts        ← highlights, research interests, timeline, achievements, skills
├─ pages/                 ← index · about · projects/index · projects/[slug]
├─ components/
│  ├─ layout/             ← SiteHeader · MobileDrawer · SiteFooter
│  ├─ home/               ← one component per home-page section
│  ├─ project/            ← ProjectTile · ProjectCover · CaseStudyHeader · MetricStrip · NextMoveButton · ProjectFilters
│  ├─ content/            ← components usable inside Markdown (PipelineDiagram)
│  └─ ui/                 ← PillButton · SectionHeading · Tag · Icon · CopyEmail · KnightMark …
├─ composables/           ← usePageSeo · useProjects
└─ plugins/               ← v-reveal scroll-reveal directive
content/projects/*.md     ← case studies
content.config.ts         ← project frontmatter schema
public/                   ← cv.pdf, og.png, favicon, covers/*.svg, fonts/
```

## Updating content

- **Contact details** (email, GitHub, LinkedIn, CV): edit `app/app.config.ts`. Every page reads from it.
- **Profile photo:** add the image to `public/images/` and set `photo: '/images/your-file.jpg'` in `app/app.config.ts`.
- **CV:** replace `public/cv.pdf` (the published version omits the phone number on purpose).
- **Home-page sections:** edit `app/data/profile.ts`.
- **Icons:** use a literal class such as `<Icon name="icon-[lucide--trophy]" />`. Any icon from the installed [Lucide](https://lucide.dev/icons) and [Simple Icons](https://simpleicons.org) sets works; the class must appear verbatim in source so Tailwind can generate it.

### Adding a project

Create `content/projects/my-project.md`. The page appears at `/projects/my-project`, in the projects grid, in the sitemap, and in the NEXT MOVE chain automatically.

```markdown
---
title: My Project
description: One or two sentences for search engines and link previews.
order: 6 # position in listings and the NEXT MOVE chain
summary: One sentence shown on the project tile.
badge: Winner · Some Hackathon # optional
context: Research project
categories: [Vision, NLP] # Vision | NLP | Speech | Fraud | Full-stack
stack: [Python, PyTorch]
metrics: # optional, up to 4 — only numbers you can back up
  - value: '92%'
    label: Accuracy on test set
cover: caption # graph | caption | wave | text | bars
featured: true # show on the home page
links:
  - label: GitHub repository
    href: https://github.com/ChiranthN23/my-project
---

## Problem

## Approach & Architecture

::pipeline-diagram
---

steps:

- title: Input
  detail: What goes in
- title: Model
  detail: What happens

---

::

## Data & Evaluation

## Results

## What I'd Do Next
```

The schema in `content.config.ts` validates every field at build time. Markdown in `content/` is deliberately excluded from Prettier, which would otherwise reformat the YAML inside `::pipeline-diagram` blocks.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Vercel detects **Nuxt** automatically — keep the defaults and click **Deploy**. `npm run build` runs `nuxt generate`, and Nitro picks its `vercel-static` preset, so the site deploys as plain static files with long-term caching for hashed assets. Node.js 22.5 or newer is required (Vercel's default Node 22 works).
4. Enable **Analytics** and **Speed Insights** in the Vercel project dashboard.

The site URL used for canonical links, the sitemap, and Open Graph tags defaults to `https://chiranth-resume.vercel.app`. If the deployment uses a different domain, set the environment variable `NUXT_SITE_URL` (e.g. `https://chiranth.dev`) in Vercel and redeploy.

## Credits

- Fonts: [Inter](https://rsms.me/inter/), [Space Grotesk](https://github.com/floriankarsten/space-grotesk), and [JetBrains Mono](https://www.jetbrains.com/lp/mono/), all under the SIL Open Font License, via Fontsource.
- Icons: [Lucide](https://lucide.dev) (ISC) and [Simple Icons](https://simpleicons.org) (CC0).
- Knight mark, cover artwork, and design: original to this project.

## License

[MIT](./LICENSE)
