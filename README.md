# mariusznazar.com

Source of [mariusznazar.com](https://mariusznazar.com), the personal site of Mariusz Nazar.

## Stack

- [Astro](https://astro.build) with content in Markdown, TypeScript (strict)
- Hand-written CSS, no UI framework, no client-side JavaScript by default
- Hosted on Cloudflare Pages, domain and DNS at Cloudflare

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
