# William's Requests + Additional Updates — Claude Code Instructions
## Execute alongside or after the main update plan priorities.

---

## UPDATE A: Add Message Box to Schedule Pilot Form

**File:** `src/app/pages/SchedulePilot.tsx`

### Step 1: Update the form interface (line ~12-18)

Change:
```typescript
interface PilotFormData {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
}
```
To:
```typescript
interface PilotFormData {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  message: string;
}
```

### Step 2: Add a Textarea component

The site uses shadcn/ui. Check if `src/app/components/ui/textarea.tsx` exists. If not, create it following the shadcn/ui Textarea pattern:

```typescript
// src/app/components/ui/textarea.tsx
import * as React from "react";
import { cn } from "./utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
```

### Step 3: Add the message field to the form

In `SchedulePilot.tsx`, add the import at the top:
```typescript
import { Textarea } from "../components/ui/textarea";
```

Then add the message field AFTER the phone/email row (after line ~148, before the Submit button at line ~150):

```tsx
<div>
  <Label htmlFor="message">Message (Optional)</Label>
  <Textarea
    id="message"
    placeholder="Tell us about your organization, patient population, or what you're hoping to achieve with a pilot program."
    {...register("message")}
    className="mt-1.5 min-h-[120px]"
  />
</div>
```

Note: This field is NOT required (no validation rules). The placeholder text guides the user without making them feel obligated.

### Step 4: Also update the FDA badge on this page

While you're in this file, at line ~160, change:
```typescript
{ icon: Shield, text: "FDA Cleared" },
```
To:
```typescript
{ icon: Shield, text: "FDA 510(k) Pathway" },
```

---

## UPDATE B: Homepage Hero — Use Deck Slide 2

**File:** `src/app/pages/Home.tsx` lines ~116-136

William wanted the SECOND slide from the investor deck as the hero. Slide 2 says:
- "AI digital health technologies"
- "saving lives, reducing healthcare costs"
- "connect, monitor, interact"
- "empowering patients to achieve and thrive in independence"
- Shows the iLidRx pod and a doctor with patients

**This supersedes any hero changes in the main plan or earlier versions of this document.**

Update the SplitHero props:

```tsx
<SplitHero
  label="AI Clinical Intelligence Platform"
  headline={
    <>
      Saving Lives.
      <br />
      Reducing Healthcare Costs.
      <br />
      <span className="text-[#0891b2]">Connect. Monitor. Interact.</span>
    </>
  }
  subtitle="AI digital health technologies empowering patients to achieve and thrive in independence — improving medication adherence from 48% to over 80%."
  primaryCta={{ label: "Schedule a Pilot", to: "/schedule-pilot" }}
  secondaryCta={{ label: "See the Research", to: "/evidence" }}
  trustItems={[
    { icon: Shield, text: "$2.8M NIH Funded" },
    { icon: Award, text: "12 US Patents" },
    { icon: FileCheck, text: "350+ Clinical Subjects" },
  ]}
  visual={<DeviceMockup />}
/>
```

The DeviceMockup (dashboard visualization) stays as-is until William provides actual product photography. When product images arrive, replace with the pod + doctor image from slide 2.

Add comment above DeviceMockup:
```typescript
// TODO: William requested slide 2 imagery (iLidRx pod + doctor/patient photo).
// Replace DeviceMockup with actual product photography when provided.
```

---

## UPDATE C: Add Product Images and Logo from Deck Slides (Placeholders)

William wants the actual product imagery from the deck on the website. The deck shows: the iLidRx pod (white device with green light), the app on a phone screen, the control center dashboard on a laptop, team photos, and the iRx logo.

### Step 1: Create placeholder image structure

Create these directories:

```
public/images/product/         — product photography
public/images/brand/           — logos and brand assets
```

### Step 2: Create an image checklist

Create `public/images/IMAGES_NEEDED.md`:
```markdown
# Images Needed from William / Marketing Team

## Product Photography (high-res, transparent background preferred)
- [ ] iLidRx pod — front angle (the white device with green sensor light)
- [ ] iLidRx pod — being held/dispensing (hand interaction shot)
- [ ] iLidRx pod on charging stand
- [ ] iRxCapture app — phone screen showing adherence dashboard
- [ ] iRxControl Center — laptop/desktop showing the monitoring dashboard
- [ ] Three-component system — pod + phone + laptop together

## Brand Assets
- [ ] iRx logo — SVG format (the blue square with "iRx" circle)
- [ ] iRx logo — PNG with transparent background (for dark/light contexts)
- [ ] iRx wordmark — "iRxReminder" text logo if it exists

## Team Photos (already have these in /images/team/)
- [x] Anthony Sterns
- [x] Fred Ma
- [x] Owen Muir
- [x] William Yuan
- [x] Larry Tusick
- [ ] Josh Smith (need if keeping on site)

## Partner/Accelerator Logos (for Evidence page)
- [ ] University of Michigan logo
- [ ] Harvard University logo
- [ ] Case Western Reserve logo
- [ ] NIH logo
- [ ] AMIA logo
- [ ] I-Corps logo
- [ ] OCEAN logo
- [ ] NewChip logo
- [ ] Village Capital logo
- [ ] Other accelerator logos from deck slide 3

Place files in the appropriate folder and update image references in code.
```

### Step 3: Add TODO comments in code for image placement

**File:** `src/app/pages/Home.tsx` — Add above the DeviceMockup function:
```typescript
/** 
 * Placeholder device mockup visual for hero.
 * TODO: Replace with actual product imagery when available.
 * William has requested product photos from the investor deck be used.
 * When images are ready, replace this entire component with:
 * 
 * function DeviceMockup() {
 *   return (
 *     <div className="relative">
 *       <img 
 *         src="/images/product/irx-system-hero.png" 
 *         alt="iRxReminder platform: iLidRx pod, mobile app, and Control Center dashboard"
 *         className="w-full max-w-lg mx-auto"
 *       />
 *     </div>
 *   );
 * }
 */
```

**File:** `src/app/components/Navigation.tsx` — Add TODO for logo:
```typescript
// TODO: Replace text logo with image when brand assets are provided:
// <img src="/images/brand/irx-logo.svg" alt="iRxReminder" className="h-8 w-auto" />
```

**File:** `src/app/pages/Platform.tsx` — Add near each product section:
```typescript
// TODO: Add product image when available
// <img src="/images/product/ilidrx-pod.png" alt="iLidRx intelligent medication dispensing pod" />
```

---

## UPDATE D: Replace Fake Publications with Real Studies + Clickable Links

**File:** `src/app/pages/Evidence.tsx` lines ~560-598

**IMPORTANT:** The three publications currently on the site have FAKE titles that were generated as placeholders during the original build ("Medication Adherence Technology for Behavioral Health Populations", "Reducing Clinical Trial Dropouts Through IoT Medication Monitoring", "Gerontechnology and Medication Management for Aging Populations"). These do not correspond to real papers. Replace them with the actual verified iRxReminder studies below.

### Replace the publications array (lines ~561-582) with:

```typescript
{[
  {
    title: "Randomized Controlled Feasibility Trial of Two Telemedicine Medication Reminder Systems for Older Adults with Heart Failure",
    journal: "Journal of Telemedicine and Telecare",
    date: "2014",
    authors: "Goldstein, Gathright, Dolansky, Gunstad, Sterns, Redle, Josephson, Hughes",
    description: "NIH-funded randomized controlled trial (N=60) across Kent State, Case Western Reserve, and Summa Health. Tested iRxReminder smartphone app vs. electronic pillbox for heart failure medication adherence. Demonstrated 78-80% adherence with telemedicine monitoring.",
    color: "#1e3a8a",
    url: "https://pubmed.ncbi.nlm.nih.gov/24958355/",
  },
  {
    title: "Adherence to Antidepressant Medications: A Randomized Controlled Trial of Medication Reminding in College Students",
    journal: "Journal of American College Health",
    date: "2015",
    authors: "Hammonds, Rickert, Goldstein, Gathright, Gilmore, Derflinger, Bennett, Sterns, Drew, Hughes",
    description: "RCT (N=57) demonstrating smartphone medication reminder apps show strong trend toward improving antidepressant adherence. Identified health beliefs and professional care type as key adherence factors.",
    color: "#0891b2",
    url: "https://pubmed.ncbi.nlm.nih.gov/25338175/",
  },
  {
    title: "Smart Home Technologies as Cognitive Prosthetics to Extend Older Adult Independence",
    journal: "Gerontechnology — International Society for Gerontechnology Conference",
    date: "2018",
    authors: "Sterns, Smith, Hughes",
    description: "Presented iRxReminder platform results: 83% medication adherence across clinical participants using IoT dispensing + smartphone app. Demonstrated value of real-time accurate data vs. unreliable patient self-reports.",
    color: "#1e3a8a",
    url: "https://irxreminder.com/news/article/isg-2018/236",
  },
  {
    title: "HOPA-Funded Oral Chemotherapy Adherence Study — University of Michigan Cancer Center",
    journal: "Hematology Oncology Pharmacy Association",
    date: "2017",
    authors: "Kraft, Sterns, Dorsch",
    description: "First clinical deployment of iLidRx pod in oncology. Tested medication adherence for oral chemotherapy patients at U-M Cancer Center. Validated the complete 3-component platform in a real clinical setting.",
    color: "#0891b2",
    url: null,
  },
  {
    title: "NIMH AI Telehealth Grant — TDtect™ Tardive Dyskinesia Detection and Monitoring",
    journal: "NIH / NIMH — $871,153 Grant Award",
    date: "2023 — Ongoing",
    authors: "Sterns et al. (Kent State, Brown University, Butler Hospital, Videra Health)",
    description: "AI-powered detection of Tardive Dyskinesia and remote medication monitoring in behavioral health populations. Collaboration across 5 institutions. Study in progress.",
    color: "#1e3a8a",
    url: null,
  },
].map((pub, i) => (
```

### Update the card component to handle clickable vs. non-clickable:

When `pub.url` exists, render as `<a>` with hover effects. When null, render as static `<div>`:

```tsx
<FadeUp key={pub.title} delay={i * 0.08}>
  {pub.url ? (
    <a
      href={pub.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-8 rounded-2xl border-l-4 border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 cursor-pointer group"
      style={{ borderLeftColor: pub.color }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pub.color}10` }}>
          <FileText className="w-5 h-5" style={{ color: pub.color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#0891b2] transition-colors">{pub.title}</h3>
          <p className="text-sm text-[#0891b2] font-medium mb-1">{pub.authors}</p>
          <p className="text-sm text-gray-500 mb-3">{pub.journal} &bull; {pub.date}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{pub.description}</p>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#0891b2] transition-colors flex-shrink-0 mt-1" />
      </div>
    </a>
  ) : (
    <div
      className="bg-white p-8 rounded-2xl border-l-4 border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]"
      style={{ borderLeftColor: pub.color }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pub.color}10` }}>
          <FileText className="w-5 h-5" style={{ color: pub.color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">{pub.title}</h3>
          <p className="text-sm text-[#0891b2] font-medium mb-1">{pub.authors}</p>
          <p className="text-sm text-gray-500 mb-3">{pub.journal} &bull; {pub.date}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{pub.description}</p>
        </div>
      </div>
    </div>
  )}
</FadeUp>
```

Make sure `ArrowRight` is imported (it already is at the top of Evidence.tsx).

### Add Google Scholar link at bottom of publications section:

```tsx
<p className="text-center text-sm text-gray-500 mt-8">
  Dr. Sterns has authored 33 publications across gerontechnology, medication adherence, and health behavior.{" "}
  <a
    href="https://scholar.google.com/citations?hl=en&user=dkBa8G8AAAAJ"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0891b2] hover:underline font-medium"
  >
    View full publication list on Google Scholar →
  </a>
</p>
```

### TODO for the team:

```tsx
{/* TODO: Ask William/Dr. Sterns for the complete list of iRxReminder-specific publications.
    Dr. Sterns has 33 total publications. There may be additional iRxReminder papers
    not found through public search. The HOPA/Michigan study and TDtect study
    may have conference presentations or preprints available.
    Google Scholar profile: https://scholar.google.com/citations?hl=en&user=dkBa8G8AAAAJ */}
```

**Question for William:** "The Evidence page had placeholder publication titles that weren't real papers. I've replaced them with the two verified PubMed studies and the ISG 2018 conference presentation. Can you or Dr. Sterns send me the full list of iRxReminder-specific publications? Specifically: (1) Was the HOPA/Michigan Cancer Center study published or only presented at conferences? (2) Are there other iRxReminder papers from the 48%→80% behavioral health trial? (3) Any preprints or interim results from the TDtect NIMH study?"

---

## UPDATE E: ROI Calculator — Email Report Button

**File:** `src/app/pages/ROICalculator.tsx`

### What to build:

Add an "Email This Report" button in the results section (after the ROI Multiplier / Payback Period row, around line ~294). When clicked, it opens the user's email client with the report pre-filled.

### Step 1: Add the email function

Add inside the `ROICalculator` component (after the state declarations, around line ~53):

```typescript
const generateReportEmail = () => {
  const subject = encodeURIComponent("iRxReminder ROI Report");
  const body = encodeURIComponent(
`iRxReminder ROI Calculator Report
===================================

Configuration:
- Patients: ${patientCount.toLocaleString()}
- Duration: ${duration} months
- RPM Reimbursement Rate: ${formatCurrency(reimbursementRate)}/patient/month
- iRxReminder Platform Fee: ${formatCurrency(platformFee)}/patient/month

Projected Results:
- Reimbursable Revenue: ${formatCurrency(totalRevenue)}
- Program Cost: ${formatCurrency(totalCost)}
- Net Profit: ${formatCurrency(netProfit)}
- ROI Multiplier: ${roiMultiplier}x
- Payback Period: ${paybackMonths > 0 ? `~${paybackMonths} month(s)` : "Immediate"}

---
Generated by iRxReminder ROI Calculator
https://irxreminderwebsiteredesign.vercel.app/roi-calculator

Ready to see these results in your organization?
Schedule a pilot: https://irxreminderwebsiteredesign.vercel.app/schedule-pilot
`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
};
```

### Step 2: Add the buttons to the UI

After the trust badges section (around line ~306), add:

```tsx
<div className="mt-4 flex gap-3">
  <Button
    onClick={generateReportEmail}
    variant="outline"
    className="flex-1 border-gray-200 hover:border-[#0891b2] hover:bg-[#0891b2]/5 text-gray-700 hover:text-[#0891b2] transition-colors"
  >
    <Mail className="w-4 h-4 mr-2" />
    Email This Report
  </Button>
  <Button
    asChild
    className="flex-1 bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
  >
    <Link to="/schedule-pilot">
      Schedule a Pilot
      <ArrowRight className="w-4 h-4 ml-2" />
    </Link>
  </Button>
</div>
```

Import `Mail` from lucide-react at the top of the file:
```typescript
import { ..., Mail } from "lucide-react";
```

Also import `Link` from react-router if not already imported.

### Why mailto instead of a form:
- No backend needed
- Works on every device (opens default email client with report pre-filled)
- User sends it to themselves — no privacy concerns, no email collection
- The report body includes CTAs back to the site (schedule-pilot link) — the real conversion play is when they forward it to their CFO

### Optional upgrade (if backend exists later):
`// TODO: When backend is available, replace mailto with API call to send formatted HTML email via SendGrid/Resend`

---

## SUMMARY

| Update | What to do now | Blocked on |
|--------|---------------|-----------|
| A: Message box on pilot form | Build it now, fully functional | Nothing |
| B: Hero → deck slide 2 | Update hero text now | Real product photo for DeviceMockup later |
| C: Product images/logo | Create folder structure + IMAGES_NEEDED.md + TODO comments | Need actual files from William |
| D: Real publication links | Replace fake titles, add PubMed links, make cards clickable | Full publication list from Dr. Sterns (nice-to-have, not blocking) |
| E: ROI email button | Build it now, fully functional | Nothing |
