# Growza — marketing site

The public website for [Growza](https://growzacorp.netlify.app), a two-sided
marketplace connecting businesses with verified marketers.

- **Businesses** browse verified marketers, compare fixed scopes and prices, and
  pay only when they accept the delivered work.
- **Marketers** publish services at their own price, get matched to briefs that
  fit, and get paid on acceptance.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Home — the business-facing marketplace front |
| `why-growza.html` | The guarantees, the alternatives, the two-lane flow |
| `pricing.html` | Business plans (Starter / Growth / Scale) |
| `expertise.html`, `faq.html`, `story.html` | Supporting pages |
| `hire/` | City landing pages (Chennai is live) |
| `blog/` | Guides for people hiring marketers |
| `marketers/` | The marketer side: overview, how it works, plans, resources |
| `assets/` | Logo, favicons and photography |
| `vendor/fonts/` | Inter, self-hosted |

## Running it

No build step, no dependencies. Serve the folder over HTTP:

```bash
python3 -m http.server 8765
```

Then open <http://localhost:8765>.

Opening the files directly with `file://` also works — every internal link is
relative, so the site runs unchanged from a domain root, a subdirectory
(GitHub Pages project sites) or the filesystem.

## Fonts and images

Inter is self-hosted in `vendor/fonts/` rather than loaded from a CDN, so the
site works offline and on a bad connection. Photography is from Pexels, marked
"Free to use"; per-file sources are listed in `assets/site/SOURCES.md`.
