# jgeorge.com

This is the repository for my personal website, [jgeorge.dev](https://www.jgeorge.dev). This site serves as a showcase for my experiences, projects, blog posts, and more about my journey.

## Technologies Used

- [Astro](https://astro.build) — static site generator, with [MDX](https://mdxjs.com) for posts
- [React](https://reactjs.org) and [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Pagefind](https://pagefind.app) — search index, built after every production build
- [Satori](https://github.com/vercel/satori) — generates the OG images
- [PostHog](https://posthog.com) — analytics and session replay, loaded only after cookie consent

## Development

This repo pins its package manager in `package.json` (`pnpm@8.6.1`), so the simplest way to get the right version is Corepack, which ships with Node:

```bash
corepack enable
```

Installing pnpm globally instead (`npm install -g pnpm`) will give you a newer major version than the one the lockfile was written with. Node 18 or later, matching CI.

To install the dependencies, run:

```bash
pnpm install
```

To start the development server, run:

```
pnpm dev
```

To build the production site, run:

```
pnpm build
```

`.npmrc` sets `enable-pre-post-scripts=true`, so this also runs `postbuild` and generates the Pagefind search index. There is no need to run it separately.

To preview the production site, run:

```
pnpm preview
```

To type-check, run:

```
pnpm check
```

This runs `astro check`, which CI requires to pass along with the build.

## Environment variables

Copy `.example.env` to `.env` and fill in the values:

| Variable              | Purpose                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `WEBMENTION_API_KEY`  | Reads webmentions from [webmention.io](https://webmention.io). Without it the webmention fetch fails.                                                                    |
| `PUBLIC_POSTHOG_KEY`  | PostHog project key. Public and write-only by design — it ships in the page.                                                                                             |
| `PUBLIC_POSTHOG_HOST` | Either `https://us.i.posthog.com` to reach PostHog directly, or `/relay` to go through the reverse proxy described below. A path is resolved against the current origin. |

Analytics only renders in production builds, so a missing PostHog key does not affect `pnpm dev`.

In production these are set in the Cloudflare Pages dashboard rather than from a file. They are `PUBLIC_`/build-time variables, which Astro compiles into the generated HTML — **changing one in the dashboard does nothing until you redeploy.**

## Deployment

Hosted on **Cloudflare Pages** (project `jgeorge`), connected to this repository. Pushes to `main` deploy to production automatically; pull requests get a preview deployment.

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| Build command     | `pnpm build && pnpm postbuild` |
| Build output      | `dist`                         |
| Production branch | `main`                         |

### `functions/`

Cloudflare Pages picks up this directory automatically and deploys it as [Pages Functions](https://developers.cloudflare.com/pages/functions/) — it is not part of the Astro build.

It currently holds one file, a reverse proxy that serves PostHog from `/relay/` on this domain. PostHog's own domains are on ad blocker lists, so requests to them are dropped in the browser and visitors who accepted cookies go uncounted. Routing them through this origin makes them first-party, leaving no third-party hostname to match. It only ever carries traffic for visitors who accepted — the SDK does not load otherwise.

## Automation

`.github/workflows/update-metrics.yml` scrapes the Chrome Web Store nightly and writes `src/data/extension-metrics.json`, which `site.config.ts` imports. **Edit the workflow, not the JSON** — hand-edited numbers are overwritten on the next run.

## Acknowledgement

This site was inspired by [astro-theme-cactus](https://github.com/chrismwilliams/astro-theme-cactus).
