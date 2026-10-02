# Keyur Pumbhadiya — Portfolio

Personal portfolio, live at **https://kpdev52.github.io**.

React 19 + TypeScript + Vite, with GSAP/ScrollTrigger for scroll reveals and Lenis
for smooth scrolling. No UI framework — plain CSS with custom-property theming and
CSS Modules per component.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Where things live

| Path | What it holds |
|---|---|
| `src/data/resume.ts` | **All content.** Profile, pillars, projects, jobs, education, skills. Edit here, not in components. |
| `src/styles/tokens.css` | Colour, type and geometry tokens; dark default plus the `[data-theme="light"]` overrides. |
| `src/styles/base.css` | Reset, layout primitives, buttons, chips, cards, reduced-motion rules. |
| `src/components/` | One component + CSS Module per section. |
| `src/hooks/useMotion.ts` | Smooth scroll, scroll reveals, hero intro, scroll progress, active-section tracking. |
| `src/hooks/useTheme.ts` | Theme state, `localStorage` persistence, `theme-color` sync. |
| `public/assets/` | Resume PDF, profile photo, project screenshots. |

## Adding your images

Drop files into `public/assets/` using these names and they appear automatically:

- `profile.jpg` — hero portrait and the `og:image` (square, 800×800 or larger).
  Until it exists the hero shows an initials tile instead of a broken image.
- Project screenshots — add the filename to the matching project's `image` field
  in `src/data/resume.ts`; without one the card renders a wireframe placeholder.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages. In repo **Settings → Pages**, set *Source* to
**GitHub Actions**.
