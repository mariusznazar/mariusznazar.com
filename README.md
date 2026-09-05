# mariusznazar.com

Source of [mariusznazar.com](https://mariusznazar.com), the personal site of Mariusz Nazar.

## Stack

- [Astro](https://astro.build) with content in Markdown, TypeScript (strict)
- Hand-written CSS, no UI framework, no client-side JavaScript by default
- Hosted on Cloudflare Pages, domain and DNS at Cloudflare

## Content

Timeline entries live in `src/content/timeline/*.yaml` (one file per track: work, artefacts,
education). Dates are `YYYY-MM` or `YYYY`; `end: null` means "ongoing" for work (and for an
artefact with `ongoing: true`), otherwise a one-month point. Entries in one track must not
overlap in time — the build fails and names the pair; merge them with `items` or fix the dates.
Header copy and links are in `src/data/site.ts`. Design notes live in the author's private
notes vault (spec `2026-09-05-wizytowka-strona-glowna-design.md`), not in this repo.

The timeline's current month is computed at build time; the site rebuilds only on push, so a
planned entry appears once a build runs after its start month.

## Working locally

Requires Node 22.12 or newer.

```sh
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve ./dist locally
```

## Deployment

Every push to `main` triggers a build on Cloudflare Pages (`npm run build`, output `dist`)
and publishes the result at https://mariusznazar.com. Pushes to other branches get a
preview URL. There is no separate deploy step.
