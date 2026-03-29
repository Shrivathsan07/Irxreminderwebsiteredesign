# iRxReminder Website — Content Update Plan for Claude Code
## Based on Revised Business Deck (2024) — Mapped to Actual Codebase

---

## CONTEXT
The company has an updated investor deck that reflects a strategic repositioning. This plan updates the website content to match, fixes repetition issues, and adds conversion-focused elements. **Keep the existing visual style, components, and animations.** This is a content and conversion upgrade, not a redesign.

Tech stack: React + TypeScript + Tailwind CSS + motion/react (Framer Motion) + shadcn/ui + React Router. All pages in `src/app/pages/`. Shared components in `src/app/components/`.

---

## PRIORITY 1: FIX REPETITION (Do First)

### 1A. LogoTicker appears 3 times on Homepage — reduce to 1

**File:** `src/app/pages/Home.tsx`

LogoTicker currently appears at:
- Line ~145 (after hero, labeled "Research & Institutional Partners") 
- Line ~276 (inside Section 3 "The Guide", labeled "Research & Institutional Partners")
- Line ~487 (inside Section 6 dark stat band, labeled "Research Partners")

**Action:** 
- KEEP the one at line ~145 (right after hero — best placement for trust signals)
- REMOVE the one at line ~276 (Section 3). Delete the entire `<FadeUp delay={0.15}>` block containing "Research & Institutional Partners" text and `<LogoTicker>`.
- REMOVE the one at line ~487 (Section 6 dark band). Replace with: `<p className="text-blue-200/60 text-sm text-center mt-8">Validated across 7+ university research partners including Harvard, Michigan, and Case Western Reserve</p>`

### 1B. FloatingBadgeGroup appears 4 times — reduce to 3

**File:** `src/app/pages/Home.tsx`

Currently at lines ~131 (hero), ~261 (Section 3), ~457 (Section 6), ~624 (Section 10 CTA).

**Action:** Remove ONLY the Section 3 instance (~line 261). Delete the `<FadeUp delay={0.1}>` block containing the FloatingBadgeGroup. The hero, dark band, and final CTA instances serve distinct visual contexts — keep those.

### 1C. Section 3 ("The Guide") — repurpose after cleanup

After removing LogoTicker and FloatingBadgeGroup, Section 3 is too thin (just a headline and one paragraph). **Replace its content entirely** with the new Three-Stakeholder Value section (see Priority 3A below).

---

## PRIORITY 2: UPDATE STATS AND DATA GLOBALLY

### 2A. NIH Grant: $871K → $2.8M (total)

**File:** `src/app/pages/Home.tsx` line ~472:
```
// CHANGE FROM:
{ end: 871, prefix: "$", suffix: "K", label: "NIH Grant", description: "SBIR funding", color: "#0891b2" }
// CHANGE TO:
{ end: 2.8, prefix: "$", suffix: "M", label: "NIH Grants", description: "Phase I & II Awards", color: "#0891b2" }
```

**File:** `src/app/pages/Evidence.tsx` — The $871K for the specific NIMH/TDtect grant is CORRECT for that grant. Keep it. But ADD a new prominent lead stat near the top: `$2.8M` / `Total NIH Phase I & II Grant Awards` with note `Phase IIB pending`.

### 2B. Update partner lists

**File:** `src/app/components/LogoTicker.tsx` lines 3-11. Replace the partners array:
```typescript
const partners = [
  "University of Michigan",
  "Harvard University",
  "Case Western Reserve University",
  "Kent State University",
  "Summa Health",
  "MetroHealth",
  "University Hospitals",
  "Brown University",
  "NIH / NIA / NIMH",
];
```
(Added: Case Western Reserve, Summa Health, University Hospitals. Removed Butler Hospital from ticker — keep on About page only.)

**File:** `src/app/pages/About.tsx` lines 76-85. Update universityPartners to include all:
```typescript
const universityPartners = [
  "Harvard University",
  "University of Michigan",
  "Case Western Reserve University",
  "Brown University",
  "Kent State University",
  "Summa Health",
  "MetroHealth",
  "University Hospitals",
  "Butler Hospital",
  "George Mason University",
];
```

### 2C. Update team bios to match deck

**File:** `src/app/pages/About.tsx` lines 34-74

Update these bios:

**Fred Ma** (line ~45): Change to: `"Industry executive and FDA expert. 1,200+ clinical trials. 200+ drugs and medical devices through FDA validation. Formerly at Johnson & Johnson and Merck. Leading iRxReminder's FDA 510(k) Class II clearance."`

**Owen Muir** (line ~52): Change to: `"Board-certified Psychiatrist specializing in mental health and behavioral health. Formerly at MindMed and Osmind. Principal investigator guiding clinical validation."`

**Larry Tusick** (line ~64): Change to: `"25+ years healthcare sales experience. Former director at Baxter and American HomePatient. Leads partnership development, commercial growth, and enterprise sales."`

**Josh Smith** (line ~69-73): Add a code comment above: `// TODO: Confirm with leadership — Josh Smith not in current investor deck. Keep or remove?`

Leave Anthony Sterns and William Yuan bios as-is (they're already good/more detailed than the deck).

---

## PRIORITY 3: HOMEPAGE CONTENT UPDATES

### 3A. Replace Section 3 with Three-Stakeholder Value Section

**File:** `src/app/pages/Home.tsx`

Replace the entire Section 3 block (between the SectionDividers, lines ~236-282) with a new section. Keep the surrounding SectionDividers.

New content:
```
Label: "The Solution"  
Headline: "Three Stakeholders. One Platform."
```

Three cards in a `grid md:grid-cols-3 gap-6` layout, using the existing card styling pattern (white bg, rounded-2xl, border, shadow, hover lift):

Card 1:
- Icon: Pill (already imported)
- Eyebrow: "For Patients"
- Title: "Engaged" (large, bold)
- Body: "Intelligent pill dispensing improves adherence from 48% to over 80%. Patients are reminded only when they actually forget — and protected from overdose through controlled, single-dose dispensing."

Card 2:
- Icon: Activity (already imported)
- Eyebrow: "For Healthcare Providers"  
- Title: "Connected"
- Body: "Smart alerts trigger proactive interventions. Real-time dose tracking gives your clinical team early detection and rapid response — not after-the-fact chart review."

Card 3:
- Icon: Building2 (already imported)
- Eyebrow: "For Healthcare Organizations"
- Title: "Doing More Good"
- Body: "Prevent 33% revenue loss from patient disengagement. Reduce staff burden with automated monitoring. Unlock new revenue through RPM reimbursement codes."

### 3B. Update Hero SplitHero label

**File:** `src/app/pages/Home.tsx` line ~117

Change `label` from `"Real-Time Medication Monitoring"` to `"AI Clinical Intelligence Platform"`

### 3C. Update Hero trust items

**File:** `src/app/pages/Home.tsx` lines ~131-133

Change to:
```typescript
{ icon: Shield, text: "$2.8M NIH Funded" },
{ icon: Award, text: "12 US Patents" },
{ icon: FileCheck, text: "350+ Clinical Subjects" },
```

### 3D. Update dark stat band numbers (Section 6)

**File:** `src/app/pages/Home.tsx` lines ~468-478

Replace the 4 stat cards:
```typescript
{ end: 2.8, prefix: "$", suffix: "M", label: "NIH Grants", description: "Phase I & II Awards", color: "#0891b2" },
{ end: 350, suffix: "+", label: "Clinical Subjects", description: "Across 20 projects", color: "#ffffff" },
{ end: 80, suffix: "%+", label: "Adherence Achieved", description: "Up from 48% baseline", color: "#0891b2" },
{ end: 16, label: "Letters of Intent", description: "From clinics & customers", color: "#ffffff" },
```

### 3E. Update Section 6 FloatingBadgeGroup

**File:** `src/app/pages/Home.tsx` lines ~459-461

Change to:
```typescript
{ icon: Shield, text: "$2.8M NIH Funded" },
{ icon: Award, text: "US Patented" },
```

### 3F. Update Section 10 (Final CTA) FloatingBadgeGroup

**File:** `src/app/pages/Home.tsx` lines ~627-629

Change to:
```typescript
{ icon: Shield, text: "$2.8M NIH Funded" },
{ icon: FileCheck, text: "350+ Subjects Studied" },
{ icon: Award, text: "FDA 510(k) Pathway" },
```

---

## PRIORITY 4: ADD NEW HOMEPAGE SECTIONS

### 4A. Add Competitive Comparison Table

**File:** `src/app/pages/Home.tsx`

Insert a NEW section between Section 5 ("Who It's For", ends ~line 427) and the existing Section 6 (dark stat band). Place it before the SectionDivider that transitions to dark.

Build an inline responsive comparison table (or use/extend the existing ComparisonChart component if suitable). If ComparisonChart only supports bar charts, build a new simple table component inline.

```
Section background: bg-white
Label: "Why It's Different"  
Headline: "The Only Platform With Complete Dosage Control"
Sub-headline: "Every alternative allows overdose. iRxReminder is the only system with single-dose dispensing, pharmacy-filled pods, and real-time care team connectivity."
```

Table:
| Capability | iRxReminder | Wireless Bottle Caps | Automated Dispensers | Pill Packing | Connected Pillboxes |
|---|---|---|---|---|---|
| Dosage Control | ✓ | ⚠ Overdose Possible | ⚠ Overdose Possible | ⚠ Overdose Possible | ✓ |
| Pharmacy Filled | ✓ | — | — | ✓ | ✓ |
| Behavior Reinforcing | ✓ | — | — | — | — |
| Care Team Connected | ✓ | — | — | — | — |
| Reimbursement Ready | ✓ | — | — | — | ✓ |

Styling:
- iRxReminder column: highlighted bg (light teal, e.g., `bg-[#0891b2]/5` with left border `border-l-4 border-[#0891b2]`)
- ✓ cells: green-600 text or green check icon
- "⚠ Overdose Possible" cells: amber-600 text with AlertTriangle icon (already imported), bold
- — cells: gray-300 text
- Mobile: horizontal scroll wrapper with `overflow-x-auto`, or restructure as "iRx vs. Category" stacked cards
- Match existing card shadow and border patterns

Below table: `<p className="text-center text-gray-600 mt-8 text-lg">iRxReminder is the only platform that prevents overdose — not just tracks it.</p>`

CTA button: `Schedule a Pilot` linking to `/schedule-pilot`

### 4B. Add Business Case Section

**File:** `src/app/pages/Home.tsx`

Insert ANOTHER new section between the comparison table (4A) and the dark stat band (Section 6). Use a dark gradient background (copy the pattern from Section 6 or Section 8: `bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]` with GrainTexture).

```
Label: "The Business Case"
Headline: "Better Outcomes. Better Economics."
```

Four cards in `grid grid-cols-2 lg:grid-cols-4 gap-5`. Use glass-morphism card style (matches Section 6 stat cards): `bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-xl p-6`.

Import additional icons as needed: `DollarSign, Users, BarChart3, Receipt` from lucide-react.

Card 1: DollarSign icon / `Prevent 33% Revenue Loss` / `Behavioral health agencies lose a third of revenue when patients disengage from care.`
Card 2: Users icon / `Reduce Staff Burden` / `Automated monitoring replaces manual check-ins. Your team focuses on care, not compliance tracking.`  
Card 3: BarChart3 icon / `Automate Workflows` / `Real-time adherence data replaces unreliable self-reports and manual documentation.`
Card 4: Receipt icon / `Unlock RPM Revenue` / `Remote Patient Monitoring codes create incremental revenue. iRxReminder qualifies for RPM/RTM billing.`

---

## PRIORITY 5: PLATFORM PAGE — ADD AI SECTION

### 5A. Add AI Clinical Intelligence section

**File:** `src/app/pages/Platform.tsx`

Add after existing product sections, before the final CTA. Use the existing section patterns (FadeUp animations, consistent heading styles).

```
Label: "Clinical Intelligence"
Headline: "Not a Commodity Dispenser."
Subhead in teal: "A Clinical Intelligence Platform."
Body: "iRxReminder's AI layer analyzes patient behavior to predict risk and trigger interventions — turning reactive care into proactive prevention."
```

Five cards (grid md:grid-cols-2 lg:grid-cols-3, last card spanning full width or centered):

1. Brain icon / `Predictive Non-Adherence Risk` / `Identifies patients likely to stop taking medication before they do, based on behavioral pattern analysis.`
2. GitBranch icon / `Intervention Pathways` / `Routes alerts to the right care team member with recommended actions based on patient history.`
3. AlertTriangle icon / `Withdrawal Detection` / `Monitors medication patterns for behavioral health and OUD patients to flag withdrawal risk early.`
4. MessageCircle icon / `Patient Engagement` / `Adaptive communication that adjusts frequency and channel based on what works for each patient.`
5. BarChart3 icon / `Data Analysis` / `Population-level adherence analytics. See trends across your entire patient base in real time.`

Import needed icons from lucide-react.

Below cards: `<p className="text-center text-gray-500 text-sm mt-8">Protected by US Patent 10,464,659 and 11 additional patents.</p>`

**Add TODO comment:** `// TODO: Confirm with leadership which AI capabilities are live vs. in development. Update copy accordingly.`

### 5B. Add FDA badge

**File:** `src/app/pages/Platform.tsx`

In the hero or product overview area, add a FloatingBadge or similar:
```
{ icon: Shield, text: "FDA 510(k) Pathway" }
```
With supporting text nearby: `Designed to meet FDA Class II standards for clinical deployment.`

`// TODO: Update to "FDA 510(k) Cleared" when clearance is granted.`

---

## PRIORITY 6: SOLUTIONS PAGE UPDATES

### 6A. Behavioral Health → Behavioral Health & Relapse Prevention

**File:** `src/app/pages/Solutions.tsx`

Find the Behavioral Health section (~line 177). Update:
- Title: `"Behavioral Health"` → `"Behavioral Health & Relapse Prevention"`
- Add to description content: `"Purpose-built for opioid use disorder and serious mental illness. Withdrawal detection and overdose prevention through controlled single-dose dispensing."`
- Add market stats where appropriate: `$9.1B US Behavioral Health Market` / `2,500+ mental health agencies` / `14,000+ drug treatment centers`

### 6B. Senior Living stats

Find the aging/senior living section. Add: `15,000+ aging communities` / `62M US aging population`

---

## PRIORITY 7: EVIDENCE PAGE UPDATES

### 7A. Add lead stat block

**File:** `src/app/pages/Evidence.tsx`

Near the top, add a prominent stat: `$2.8M` / `Total NIH Phase I & II Grant Awards` / `Phase IIB pending`

### 7B. Add traction metrics strip

Add a horizontal stat row:
`20` Projects / `350` Clinical Subjects / `200` AI-Enabled Evaluations / `16` Letters of Intent / `5` Communities Awaiting Delivery

### 7C. Add accelerators list

Add AMIA, I-Corps at NIH, OCEAN, Whatif Ventures, OHTec, Village Capital, MedStartr, TiE, Conscious Venture Lab, NewChip, BioEnterprise — either as a logo ticker or a simple text list in an "Accelerators & Recognition" section.

---

## PRIORITY 8: GLOBAL CTA AUDIT

Search all `.tsx` files for CTA buttons. Ensure:
- Primary CTA text: `"Schedule a Pilot"` → `/schedule-pilot`
- Secondary CTA: `"See the Evidence"` or `"Calculate Your ROI"` → `/evidence` or `/roi-calculator`
- Replace any "Learn More", "Get Started", or generic "Contact Us" (except on the Contact page itself)

---

## IMPLEMENTATION ORDER

1. Priority 1 (fix repetition) — 30 min
2. Priority 2 (global data updates) — 45 min  
3. Priority 3 (homepage content) — 1 hr
4. Priority 4 (new homepage sections) — 1.5 hrs
5. Priority 5 (platform AI) — 1 hr
6. Priority 6 (solutions) — 30 min
7. Priority 7 (evidence) — 45 min
8. Priority 8 (CTA audit) — 20 min

Test responsive at 375px, 768px, 1024px, 1440px after each priority.

---

## DO NOT CHANGE
- Navigation structure or routing (`routes.tsx`)
- Color scheme (navy `#1e3a8a`, teal `#0891b2`)  
- Font system or CSS custom properties
- Animation library, patterns, or timing
- Component APIs (SplitHero, BentoGrid, TimelineTrack, ComparisonChart, StatCard, FloatingBadge, etc.)
- GrainTexture or SectionDivider usage patterns
- Any page content not explicitly mentioned in this plan
