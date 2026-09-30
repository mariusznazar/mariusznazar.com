# mariusznazar.com

Source of [mariusznazar.com](https://mariusznazar.com), the personal site of Mariusz Nazar.

## Stack

- [Astro](https://astro.build) with content in Markdown, TypeScript (strict)
- Hand-written CSS, no UI framework; Astro ClientRouter keeps the shared header in place during page navigation
- Hosted on Cloudflare Pages, domain and DNS at Cloudflare

## Content

Timeline entries live in `src/content/timeline/*.yaml` (one file per track: work, artefacts,
education). Dates are `YYYY-MM` or `YYYY`; `end: null` means "ongoing" for work (and for an
artefact with `ongoing: true`), otherwise a one-month point. Entries in one track must not
overlap in time — the build fails and names the pair; merge them with `items` or fix the dates.
Header copy and links are in `src/data/site.ts`. Design notes live in the author's private
notes vault (spec `2026-09-05-wizytowka-strona-glowna-design.md`), not in this repo.

The site has Polish pages at `/`, `/bio/`, and `/materialy/`, and English pages at
`/en/`, `/en/bio/`, and `/en/articles/`.
Both languages share the same timeline dates and links. English entry text is keyed by entry
ID in `src/data/timeline.en.ts`; a missing translation fails the build. The language switch
on each page points to its counterpart. Site copy for both languages is in `src/data/site.ts`.

Articles live as paired Markdown files in `src/content/articles/pl/` and
`src/content/articles/en/`. Their frontmatter shares a `key` between languages and
sets a localized title, summary, topic, and display order. Higher order values
appear first. The build requires a translation for every article. Polish articles
appear under `/materialy/`; English articles under `/en/articles/`. Each language
switch points to the matching article.

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
