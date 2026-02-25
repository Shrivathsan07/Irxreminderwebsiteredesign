# Claude Code Prompt: iRxReminder Website Revamp

Copy and paste everything below into Claude Code.

---

## TASK

You are revamping the iRxReminder website (https://www.irxreminder.com/). The current site is a React app. Your job is to completely redesign and restructure the site to be a modern, high-quality B2B healthtech website that looks and feels on par with the best in the industry. You can build off the code in this repo, as it is a Figma demo that has already implemented some changes to the original site.

Before making any changes, fetch and study these real websites for design inspiration — pay close attention to their layout patterns, typography, whitespace, color usage, hero sections, scroll animations, and how they present complex products simply:

1. **AdhereTech** (https://adheretech.com) — Direct competitor. Clean 4-item nav, outcomes-first messaging. Closest model for iRx.
2. **Wellth** (https://www.wellthapp.com) — Behavioral health competitor. Excellent storytelling, clean design, strong brand identity.
3. **Hinge Health** (https://www.hingehealth.com) — Gold standard healthtech IPO site. Audience-first organization, trust bars, polished animations.
4. **Omada Health** (https://www.omadahealth.com) — Another IPO-grade healthtech site. Excellent use of data visualization and social proof.
5. **Athelas** (https://athelas.com) — Remote patient monitoring. Minimal, elegant, hardware+software presentation.
6. **Linear** (https://linear.app) — Not healthtech, but best-in-class SaaS design. Study their typography, spacing, micro-interactions, and how they make a complex product feel simple.
7. **Vercel** (https://vercel.com) — Another top-tier SaaS site for design quality reference.

Study these sites carefully. The redesigned iRx site should feel like it belongs in the same tier as these — professional, trustworthy, modern, and conversion-optimized.

---

## SITE ARCHITECTURE: SIMPLIFY EVERYTHING

The current site has 24+ pages and 6 nav categories with deep dropdowns. This is way too complex. Consolidate to this structure:

### New Navigation (5 items + 2 CTA buttons, NO dropdowns):
```
[iRxReminder logo]   Platform   Solutions   Evidence   About   Contact   [ROI Calculator btn]  [Schedule Pilot btn]
```

### New Page Structure (10 pages total):

| New Page | Consolidates From |
|----------|------------------|
| **HOME** | Complete rewrite (see below) |
| **PLATFORM** | All 7 product pages → one scrollable page with anchor sections (Pod, App, Control Center, EHR Integration, How It Works) |
| **SOLUTIONS** | All 5 service pages → one page with two audience sections (Health Systems/Behavioral Health and Clinical Research/Pharmacies) |
| **EVIDENCE** | All 6 research pages + "The Problem" → one powerful proof page |
| **ABOUT** | About + Leadership merged into one page |
| **CONTACT** | Keep, simplify form fields |
| **ROI Calculator** | Keep (this is a rare competitive advantage — no competitor has a public one) |
| **Schedule a Pilot** | Keep |
| **News** | Move to footer link only, not in primary nav |
| **Privacy/Terms** | Footer only |

---

## HOMEPAGE SPECIFICATION

The homepage must follow a mission-first narrative flow (NOT financial-first). Here is the exact section order and content:

### Section 1: Mission Hero
- Headline: "Monitor. Remind. Connect."
- Subtext: "iRxReminder is a smart medication management system designed to improve adherence, reduce hospitalizations, and support independent living — for patients who need it most."
- CTA buttons: "Schedule a Pilot" (primary) + "See How It Works" (secondary, scrolls to Section 4)
- Background: Clean, modern. Consider a subtle product image or abstract healthcare visual. NO stock photos of smiling nurses.

### Section 2: The Problem (with AMA blockquote)
- Lead with emotional/statistical hook
- Blockquote: "Medication non-adherence causes approximately 125,000 deaths and costs the U.S. healthcare system up to $300 billion annually." — American Medical Association
- Supporting stats: 50% of medications not taken as prescribed, $300B+ annual cost

### Section 3: Who We Serve (Population-Focused)
- Two population cards:
  - **Mental & Behavioral Health**: 19M+ Americans with serious mental illness. Medication adherence is critical for stability — missed doses can trigger crises, ER visits, and readmissions.
  - **Aging & Chronic Care**: 65M+ older adults managing multiple medications. Polypharmacy, cognitive decline, and care coordination gaps make adherence a daily challenge.
- NOTE: This replaces the old buyer-persona targeting. Audience-specific details go on the Solutions page.

### Section 4: The Solution — How It Works
- Show the three-component system as ONE integrated platform visual:
  1. **iLidRx Pod** — Pharmacy-filled smart medication pods that physically control access to medications. Not just a reminder — actual medication control. (THIS IS THE #1 UNIQUE DIFFERENTIATOR — no competitor has this)
  2. **iRxCapture App** — Patient-facing mobile app for reminders, tracking, and caregiver connection
  3. **iRxControl Center** — Provider dashboard for remote monitoring, alerts, and intervention
- Emphasize: "The only system that combines physical medication control with digital monitoring and real-time provider alerts."

### Section 5: Trust Bar / Social Proof
- Logos or badges: NIH-funded, 12 US Patents, Clinically Validated
- Key stat: "83% adherence rate achieved in clinical trials — up from 48%"
- University partners if available

### Section 6: Value Pillars (The Economics Case)
- 3-4 cards showing measurable outcomes:
  - Reduced ER visits & hospitalizations
  - Improved medication adherence (48% → 83%)
  - Insurance reimbursable (CPT codes for RPM)
  - ROI for health systems
- CTA: Link to ROI Calculator

### Section 7: Traction / Credibility
- "Clinically validated and fully developed technology"
- "Protected by 12 US patents"
- "Positioned for rapid market entry"
- NIH grant ($871K SBIR funding)

### Section 8: Impact Close
- "We're not just saving costs — we're saving lives."
- "iRxReminder helps reduce ER visits, prevent decline, and keep people functioning independently. This creates real value for healthcare systems, healthcare providers, and society."
- Final CTA: "Schedule a Pilot" + "Calculate Your ROI"

---

## COMPETITIVE ADVANTAGES TO HAMMER THROUGHOUT THE SITE

These are iRx's genuine differentiators that should be woven into every relevant page — not just listed once:

1. **Physical medication control** — The Pod doesn't just remind, it physically controls access to medication. No other competitor does this. AdhereTech's bottle knows when it's opened but can't prevent wrong doses. MedMinder requires manual filling. iRx pods are pharmacy-filled and eliminate sorting errors entirely. Make this the defining brand concept (the way "behavioral economics" defines Wellth).

2. **Three-component integrated system** — Pod + App + Dashboard. Most competitors offer either a device OR software, not both integrated. This should be a visual centerpiece.

3. **NIH-funded clinical validation** — $871K NIH SBIR grant, 83% adherence rate (up from 48%). This is on par with or better than any competitor's evidence. Display it prominently.

4. **ROI Calculator** — Of 7 analyzed competitors, NONE have a public ROI calculator. This is a massive conversion advantage. Keep it prominent in nav as a button.

5. **Multiple-medication management** — Designed for patients on 8+ medications. Pod-per-medication model with remote schedule changes is uniquely suited for complex regimens (transplant recovery, behavioral health, geriatric polypharmacy).

6. **"Schedule a Pilot" CTA** — More specific and lower-risk than generic "Contact Us" or "Book a Demo." Keep this — it maps to how healthcare organizations actually evaluate technology.

7. **12 US Patents** — Defensive moat that competitors can't replicate. Feature on Evidence page.

---

## DESIGN REQUIREMENTS

### Visual Quality Standards (study the reference sites above):
- **Typography**: Use a modern, clean sans-serif font pairing (e.g., Inter, DM Sans, or similar). Clear hierarchy with generous line-height.
- **Whitespace**: Be generous. The current site feels cramped. Let sections breathe. Look at how Linear and Vercel use whitespace.
- **Color palette**: Professional healthcare palette — blues, teals, clean whites. Add a bold accent color for CTAs. Avoid looking like every other generic healthcare site though — take design cues from the premium SaaS sites.
- **No stock photos of smiling doctors/nurses**. Use product imagery, abstract graphics, data visualizations, or clean illustrations instead.
- **Animations**: Subtle scroll-triggered animations (fade-in, slide-up) for sections. Nothing flashy — just polished. Look at how Hinge Health and Linear handle scroll animations.
- **Cards and components**: Use consistent card styles with subtle shadows, rounded corners, and hover states.
- **Mobile-first responsive design** — must look great on all devices.
- **Trust signals everywhere**: Logos, stats, patent badges, NIH funding badge should appear on multiple pages, not just once.

### Accessibility (required for healthcare):
- All color combinations must meet WCAG AA contrast ratios
- All images need meaningful alt text
- Proper form labels and error states
- Keyboard navigable

### Technical Notes:
- Maintain the React codebase
- Use Tailwind CSS for styling (or whatever the current CSS approach is — keep it consistent)
- Smooth scroll behavior for anchor links
- Lazy load images
- Ensure fast page load times (< 3s)

---

## PAGES BEYOND HOMEPAGE

### PLATFORM page:
- One long scrollable page replacing 7 separate product pages
- Anchor sections for: iLidRx Pod, iRxCapture App, iRxControl Center, EHR Integration, How It Works
- Lead with the integrated system visual, then drill into each component
- Emphasize physical medication control as the hero differentiator
- Include technical specs where relevant

### SOLUTIONS page:
- Organized by AUDIENCE, not by product (this is what winning competitors do)
- Two main sections:
  - **For Health Systems & Behavioral Health**: Focus on reducing readmissions, RPM reimbursement, complex medication management
  - **For Clinical Research & Pharmacies**: Focus on adherence tracking, data capture, compliance
- Each section: Problem → How iRx solves it → Key metrics → CTA

### EVIDENCE page:
- This is a massive opportunity — every competitor is weak here and iRx has the strongest proof
- Consolidate into one powerful page with sections:
  - Clinical trial results (83% adherence, 48→80% improvement)
  - NIH SBIR Grant ($871K)
  - 12 US Patents
  - University partners
  - Publications
  - The medication non-adherence crisis (stats and context)

### ABOUT page:
- Merge About + Leadership into one page
- Company mission and story
- Leadership team with photos and bios
- Advisory board if applicable

### CONTACT page:
- Simplify form fields
- Include "Schedule a Pilot" and "Calculate ROI" as alternative CTAs
- Add office location/info if available

---

## WHAT SUCCESS LOOKS LIKE

When you're done, this site should:
1. Look like it belongs alongside Hinge Health, Wellth, and Athelas — not like a generic WordPress healthtech template
2. Communicate iRx's mission within 5 seconds of landing on the homepage
3. Make the physical medication control differentiator impossible to miss
4. Convert visitors through clear, specific CTAs (Schedule a Pilot, ROI Calculator)
5. Build trust through evidence, stats, and institutional credibility on every page
6. Feel simple and intuitive — 5 nav items, no confusion about where to go
7. Load fast, look great on mobile, and meet accessibility standards

Take your time, study the reference sites, and build something genuinely impressive.
