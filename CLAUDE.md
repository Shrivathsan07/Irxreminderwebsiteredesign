# CLAUDE.md — iRxReminder Website

> **B2B healthtech marketing site for an FDA-cleared IoT medication management platform.**
> Target audience: institutional decision-makers — CMOs, CFOs, pharmacy directors, clinical ops leads.
> Stack: React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · shadcn/ui · Motion · React Router 7

---

## 0. Always Do First

Before writing **any** frontend code each session:
1. Read the `frontend-design` skill: this is non-negotiable, every session.
2. Read this file in full.
3. Check `brand_assets/` for logos, color guides, typography, and reference images — use real assets, never placeholders where real assets exist.

---

## 1. Design Philosophy — Healthtech B2B Premium

This is not a consumer app. Every design decision must signal **clinical authority + enterprise trust + modern precision**. The audience is busy, skeptical institutional buyers evaluating a compliance-sensitive IoT platform. They respond to:

- **Clarity over cleverness** — value proposition legible in under 5 seconds
- **Evidence-first** — data, outcomes, and trust signals are design elements, not afterthoughts
- **Refined restraint** — luxury/refined aesthetic, not playful or maximalist
- **Depth and layering** — surfaces, elevations, and subtle texture that read as "premium medical-grade"

### Aesthetic Direction
Commit to this specific aesthetic: **Clinical Precision meets Quiet Luxury**
- Clean, airy layouts with intentional negative space
- Deep navy + warm teal palette (see §4 Brand Colors) — never default Tailwind blues
- Sharp typographic hierarchy with a strong serif or high-contrast sans for headings
- Subtle glass morphism for elevated cards (frosted, not garish)
- Data visualization as visual storytelling (charts are design elements)
- Zero decorative clutter — every element earns its place

### What This Site Must Communicate
On every page, the visitor should feel:
1. *"This company understands my operational pain points."*
2. *"This platform is real, proven, and FDA-cleared — not vaporware."*
3. *"I can confidently take this to my C-suite."*

---

## 2. Commands

```bash
npm i                # Install dependencies
npm run dev          # Dev server via Vite with HMR (http://localhost:5173 by default)
npm run build        # Production build
```

No test, lint, or format scripts are configured.

---

## 3. Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + TypeScript (all `.tsx`) |
| Build | Vite 6 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` (**not** PostCSS) |
| Routing | React Router 7 with `createBrowserRouter` |
| Components | shadcn/ui (50+ in `src/app/components/ui/`) on Radix UI |
| Secondary UI | Material UI (use sparingly; shadcn/ui is preferred) |
| Animation | Motion (framer-motion successor) |
| Charts | Recharts (ROI calculator) |
| Forms | React Hook Form |

---

## 4. Brand Colors & Tokens

> **Hard rule:** Never use default Tailwind palette colors (indigo-500, blue-600, etc.) as primary colors.

### Core Palette
```css
/* Hardcoded in page components — keep these exact values */
--color-navy:        #1e3a8a;   /* Primary — headings, nav, footers */
--color-teal:        #0891b2;   /* Accent — CTAs, links, highlights */

/* Derive the full scale from these — do not invent new brand colors */
--color-navy-light:  #2d4fa6;
--color-navy-dark:   #152c6e;
--color-teal-light:  #06a7ce;
--color-teal-dark:   #0679a0;
--color-surface:     #f8fafc;   /* Near-white, slight blue tint */
--color-elevated:    #ffffff;
--color-border:      rgba(30, 58, 138, 0.10);
```

### Color Usage Rules
- Navy on white backgrounds for authority headings
- Teal for all primary CTAs, active states, and key metric callouts
- Never use a third brand color without explicit instruction
- Data charts: use teal family with 30–70% opacity steps

---

## 5. Typography Rules

**Never use the same font for headings and body.** Never use Inter, Roboto, Arial, or system fonts as the display face.

```css
/* fonts.css — already configured */
/* Heading: a high-contrast serif or editorial sans (check fonts.css) */
/* Body: clean, highly-legible modern sans */

/* Application rules */
h1, h2:  font-family: [display]; tracking: -0.03em; line-height: 1.1;
h3, h4:  font-family: [display]; tracking: -0.02em; line-height: 1.2;
body:    font-family: [body]; line-height: 1.7; font-size: 16–18px;
labels:  font-family: [body]; tracking: 0.08em; text-transform: uppercase; font-size: 12px;
```

### Typographic Hierarchy for B2B Healthcare
- **Hero headline:** 56–72px, display font, navy, tight tracking
- **Section titles:** 36–48px, display font, high contrast
- **Subheadings:** 20–24px, body font semi-bold, teal or navy
- **Body copy:** 16–18px, comfortable line-height — decision-makers read on mobile
- **Data callouts:** large numerals (64–80px) in teal with small descriptive labels

---

## 6. Architecture

### Path Alias
`@` → `/src` (configured in `vite.config.ts`). Always use `@/app/components/ui/...` for imports.

### Routing (`src/app/routes.tsx`)
All pages nest under `RootLayout` → `Navigation` + `<Outlet>` + `Footer`.

| Route | Page |
|---|---|
| `/` | Home |
| `/platform` | Platform |
| `/solutions` | Solutions |
| `/evidence` | Evidence (clinical outcomes) |
| `/about` | About |
| `/contact` | Contact |
| `/news` | News |
| `/roi-calculator` | ROI Calculator |
| `/schedule-pilot` | Schedule Pilot |

Legacy redirects: `/research` → `/evidence`, `/products` → `/platform`, `/services` → `/solutions`. 404 → `/`.

### Layout Structure
`RootLayout` (`src/app/components/RootLayout.tsx`):
- `Navigation` — sticky, scroll-shadow, mobile hamburger, brand logo, CTA buttons
- `Footer` — 4-column grid: links, contact, social

### Pages (`src/app/pages/`)
Self-contained components. No Redux/Context — local `useState` only.

### UI Components (`src/app/components/ui/`)
shadcn/ui with `cn()` utility (`clsx` + `tailwind-merge`) from `src/app/components/ui/utils.ts`.
Components use `class-variance-authority` for variants.

### Styling (`src/styles/`)
- `theme.css` — CSS custom properties (OKLch), light/dark mode via `.dark` class
- `tailwind.css` — Tailwind v4 import + tw-animate-css
- `fonts.css` — web font imports

### Image Handling
`ImageWithFallback` (`src/app/components/figma/ImageWithFallback.tsx`) — SVG placeholder fallback for broken Unsplash URLs.

### Container Pattern
```tsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```

---

## 7. Component Conventions

- Named exports only (no default exports)
- Tailwind utility classes directly; responsive: `sm:` `md:` `lg:`
- SVG and CSV files: raw asset imports via Vite
- shadcn/ui always preferred over MUI for new components

---

## 8. Visual Design Guardrails

### Shadows — Never flat `shadow-md`
Use layered, color-tinted shadows:
```css
/* Example card shadow — teal-tinted, multi-layer */
box-shadow:
  0 1px 3px rgba(8, 145, 178, 0.04),
  0 4px 12px rgba(8, 145, 178, 0.08),
  0 16px 40px rgba(30, 58, 138, 0.10);
```

### Gradients & Texture
- Layer multiple radial gradients for depth
- Add grain/texture via SVG noise filter (`feTurbulence`) for premium feel
- Hero sections: diagonal gradient from navy-dark to navy with teal radial accent
- Never flat solid backgrounds on hero or feature sections

### Surface Elevation System
Every element must sit on a defined z-plane. Never all surfaces at the same level:
```
Base (bg-surface)       → Page background
Elevated (bg-white)     → Cards, panels
Floating (bg-white)     → Modals, dropdowns, tooltips — with stronger shadow
```

### Glass Morphism (for elevated cards on gradient backgrounds)
```css
background: rgba(255, 255, 255, 0.08);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.15);
```
Use sparingly — only on hero overlays and stats cards on dark backgrounds.

### Images & Media
- Always add gradient overlay: `bg-gradient-to-t from-black/60`
- Apply color treatment layer with `mix-blend-multiply` for brand cohesion
- Clinical photos: cool-temperature treatment, not warm filters

---

## 9. Animation Rules

### What to Animate
- **Only** `transform` and `opacity` — never `transition-all`
- Use Motion library (not CSS transitions) for page-level elements
- Spring-style easing: `{ type: "spring", stiffness: 300, damping: 30 }`

### Patterns
```tsx
// Staggered section reveal — the standard for this site
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

// Scroll-triggered — use Motion's useInView
const { ref, inView } = useInView({ triggerOnce: true, margin: "-100px" })
```

### Rules
- One well-orchestrated entrance per section — not scattered micro-animations
- Scroll-trigger all below-fold animations
- Every clickable element: hover + focus-visible + active states — no exceptions
- Navigation: smooth scroll, sticky with `box-shadow` appearing on scroll past 60px
- Never animate layout properties (width, height, padding)
- Respect `prefers-reduced-motion` — wrap all Motion components appropriately

---

## 10. Conversion & UX — B2B Healthcare Specifics

### Decision-Maker UX Principles
1. **Value prop above the fold, always** — CMO/CFO skims in 5 seconds
2. **Social proof near every CTA** — logos, quotes, outcome stats, FDA clearance badge
3. **Reduce cognitive load** — no walls of text; scannable sections with clear hierarchy
4. **Multi-stakeholder paths** — navigation or landing sections that speak distinctly to clinical, financial, and operational roles
5. **Zero dead ends** — every page has a clear next action (demo, pilot, evidence)

### CTAs
- Primary: "Schedule a Pilot" or "Book a Demo" — teal, prominent
- Secondary: "Explore the Platform" — navy outline
- Never more than two CTAs competing in the same viewport
- Always pair CTAs with a trust signal (logo, stat, or short quote)

### Trust Architecture (must appear on every page)
- FDA clearance badge / callout
- Customer logos (hospital systems, pharmacy networks)
- Outcome statistics (e.g., "94% medication adherence improvement")
- HIPAA compliance mention in footer or platform section
- Clinical evidence citations linked to `/evidence`

### Navigation
- Desktop: horizontal nav, max 6 items, no mega-menus
- Mobile: hamburger → full-screen overlay, large touch targets (min 44px)
- Active route: teal underline or fill, never just bold
- Sticky header: transparent → white + shadow on scroll

### Forms
- React Hook Form for all form state
- Inline validation, not on-submit-only
- Healthcare buyers distrust long forms — ask for minimum viable info
- "Schedule Pilot" form: name, title, organization, email, phone — 5 fields max

---

## 11. Page-Specific Guidance

### Home (`/`)
Structure:
1. **Hero** — Headline + sub + dual CTA + device/dashboard visual + trust logos
2. **Problem/Solution** — 3-column pain points → platform response
3. **How It Works** — 3–4 step visual flow (animated sequence)
4. **Outcomes** — Large-number statistics in teal
5. **Social Proof** — Customer quotes + logos
6. **ROI Teaser** — Link to calculator with a compelling headline stat
7. **CTA Banner** — Full-width navy/teal gradient + primary CTA

### Evidence (`/evidence`)
- Lead with clinical outcomes in large, confident numerals
- Link to published studies or white papers
- FDA clearance as a centrepiece element, not footnote
- Use Recharts for outcome data visualizations

### ROI Calculator (`/roi-calculator`)
- Recharts for all visualizations
- Live-updating output as user adjusts inputs
- Results framed as "annual savings" and "payback period"
- Output section: teal callout with "Schedule a Pilot" CTA

### Platform (`/platform`)
- Feature sections: alternating image-left / image-right layouts
- Each feature: headline → benefit statement → how it works → relevant metric
- IoT hardware visuals alongside software screenshots

---

## 12. Accessibility

- WCAG 2.1 AA minimum — this is a healthcare platform, compliance matters
- Radix UI primitives (via shadcn/ui) handle most ARIA automatically — use them
- Color contrast: all text must pass AA (4.5:1 normal, 3:1 large)
- Navy `#1e3a8a` on white: ✅ passes AAA
- Teal `#0891b2` on white: check contrast, may need darkened variant for small text
- Focus-visible rings on all interactive elements — never `outline: none` without replacement
- All images: descriptive `alt` text (medical/clinical context matters)
- Form fields: proper `label` association, error messages linked via `aria-describedby`

---

## 13. Performance

- Lazy-load below-fold images (`loading="lazy"`)
- `ImageWithFallback` for all images (already configured)
- Code-split pages via React Router — each route is already a chunk
- Vite handles tree-shaking — no manual optimization needed
- Target: LCP < 2.5s, CLS < 0.1, FID < 100ms (Core Web Vitals)
- Recharts and Motion are heavy — import only what's needed

---

## 14. Reference Images

- **If a reference image is provided:** match layout, spacing, typography, and color exactly. Swap in placeholder content (`https://placehold.co/WIDTHxHEIGHT`). Do not improve or add to the design.
- **If no reference image:** apply §1–§11 from scratch with full design craft.
- Screenshot output → compare against reference → fix mismatches → re-screenshot. Minimum 2 comparison rounds. Stop only when no visible differences remain or user says to stop.

### Screenshot Workflow (if local screenshots are configured)
- Serve on localhost — never screenshot `file:///` URLs
- Dev server: `npm run dev`
- After screenshotting, read the PNG and analyze with specificity:
  *"Heading is 32px but reference shows ~24px"*, *"Card gap is 16px but should be 24px"*
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

---

## 15. Hard Rules — No Exceptions

| ❌ Never | ✅ Always |
|---|---|
| `transition-all` | Animate only `transform` and `opacity` |
| Default Tailwind blue/indigo as primary | Use `#1e3a8a` navy + `#0891b2` teal |
| Flat `shadow-md` | Layered, color-tinted multi-stop shadows |
| Same font for heading + body | Paired display + body font |
| Add sections not in the reference | Match reference exactly |
| "Improve" a reference design | Match it |
| Stop after one screenshot pass | Minimum 2 comparison rounds |
| MUI for new components | shadcn/ui first |
| Hard-coded strings for clinical claims | Use real data or clearly marked placeholder |
| `outline: none` without replacement | Always provide focus-visible ring |
| Generic AI aesthetics (purple gradients, Space Grotesk) | Context-specific, intentional choices |

---

## 16. Anti-Generic Checklist

Before calling any design done, verify:

- [ ] No default Tailwind palette colors used as primary brand colors
- [ ] Heading and body fonts are different — display + body pairing
- [ ] Large headings have tight tracking (`-0.03em`)
- [ ] Every shadow is layered and color-tinted, not flat
- [ ] Hero/section backgrounds have gradient or texture, not flat solid color
- [ ] All clickable elements have hover + focus-visible + active states
- [ ] Images have gradient overlay (`from-black/60`) and color treatment
- [ ] Spacing is consistent and intentional — not random Tailwind steps
- [ ] Surfaces use the 3-layer elevation system (base → elevated → floating)
- [ ] Animations are scroll-triggered, staggered, and spring-eased
- [ ] Trust signals (FDA badge, stats, logos) appear near every CTA
- [ ] Value proposition is above the fold on every landing page
- [ ] WCAG AA contrast verified for all text on backgrounds
- [ ] `prefers-reduced-motion` respected in Motion animations