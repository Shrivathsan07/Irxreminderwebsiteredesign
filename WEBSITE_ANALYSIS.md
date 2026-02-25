# iRxReminder Website - Complete Technical & Content Analysis

## Executive Summary

iRxReminder is a comprehensive B2B healthcare website for an FDA-cleared IoT medication management platform. The website targets institutional decision-makers (CMOs, CFOs, case management leads, pharmacy directors) with an enterprise-grade health-tech aesthetic, emphasizing clinical validation, financial ROI, and reimbursability under the tagline "Safe. Connected. Reimbursable."

---

## 1. TECHNICAL ARCHITECTURE

### 1.1 Technology Stack
- **Framework**: React 18.3.1 with TypeScript
- **Routing**: React Router 7.13.0 (Data mode with createBrowserRouter)
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 6.3.5
- **UI Components**: Radix UI primitives + custom shadcn/ui components
- **Icons**: Lucide React 0.487.0
- **Additional Libraries**:
  - Motion (12.23.24) for animations
  - Recharts (2.15.2) for charts
  - React Hook Form (7.55.0) for forms
  - Sonner for toast notifications
  - Material UI (@mui/material 7.3.5) with dependencies

### 1.2 File Structure
```
/src/
├── app/
│   ├── App.tsx (RouterProvider wrapper)
│   ├── routes.tsx (Route configuration)
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── RootLayout.tsx
│   │   ├── figma/ImageWithFallback.tsx
│   │   └── ui/ (shadcn/ui components)
│   └── pages/
│       ├── Home.tsx
│       ├── ROICalculator.tsx
│       ├── SchedulePilot.tsx
│       ├── Contact.tsx
│       ├── News.tsx
│       ├── services/ (5 pages)
│       ├── products/ (6 pages)
│       ├── research/ (5 pages)
│       └── company/ (3 pages)
├── styles/
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
```

### 1.3 Routing Structure
All routes use React Router with nested routing under RootLayout:

**Main Routes:**
- `/` - Home
- `/roi-calculator` - ROI Calculator
- `/schedule-pilot` - Schedule Pilot Form
- `/contact` - Contact Form
- `/news` - News & Milestones

**Services Routes:**
- `/services` - Services Overview
- `/services/health-systems`
- `/services/behavioral-health`
- `/services/clinical-research`
- `/services/pharmacies`

**Products Routes:**
- `/products` - Platform Overview
- `/products/ilidRx-pod`
- `/products/iRxCapture-app`
- `/products/iRxControl-center`
- `/products/esmcapture`
- `/products/how-it-works`
- `/products/ehr-integration`

**Research Routes:**
- `/research` - Research Overview
- `/research/clinical-trials`
- `/research/nih-grants`
- `/research/university-partners`
- `/research/publications`
- `/research/federal-grants`

**Company Routes:**
- `/about` - About iRxReminder
- `/leadership` - Leadership Team
- `/the-problem` - The Problem We Solve

---

## 2. DESIGN SYSTEM & BRAND IDENTITY

### 2.1 Color Palette
**Primary Colors:**
- Navy Blue: `#1e3a8a` (primary institutional color)
- Teal/Cyan: `#0891b2` (secondary accent color)
- Darker Teal: `#0e7490` (hover states)

**Semantic Colors:**
- White: `#ffffff` (backgrounds)
- Gray Scale: Various grays for text and borders
- Green: `#10b981` and variants (success states)
- Red: `#d4183d` and `#dc2626` (destructive/warning states)
- Yellow: `#fbbf24` (alerts)

**Gradients:**
- Hero backgrounds: `bg-gradient-to-br from-blue-900 to-cyan-700`
- Card backgrounds: `bg-gradient-to-r from-blue-50 to-cyan-50`
- Pillar cards: `from-blue-50 to-blue-100`, `from-cyan-50 to-cyan-100`

### 2.2 Typography
- Font Size: Base 16px
- Headings use medium font weight (500)
- Body text uses normal weight (400)
- No custom fonts specified (system fonts)

**Heading Hierarchy:**
- H1: Large, bold, used for page titles (text-4xl to text-5xl)
- H2: Section headers (text-2xl to text-3xl)
- H3: Subsection headers (text-lg to text-xl)
- Body: text-base to text-xl depending on emphasis

### 2.3 Common UI Patterns
- **Cards**: White background, rounded corners, shadow-lg, border border-gray-200
- **CTAs**: Teal buttons with hover states
- **Hero Sections**: Full-width gradient backgrounds with centered white text
- **Stats Display**: Large bold numbers with smaller descriptive text below
- **Icon Badges**: Circular colored backgrounds with icons

---

## 3. GLOBAL COMPONENTS

### 3.1 Navigation (Sticky Header)
**Structure:**
- Sticky top navigation with shadow on scroll
- Logo: "iRx" (navy) + "Reminder" (teal)
- Height: 80px (h-20)
- Background: White with shadow on scroll

**Desktop Menu Items (left to right):**
1. HOME (link)
2. SERVICES (dropdown)
   - Overview
   - Health Systems & Hospitals
   - Behavioral Health Agencies
   - Clinical Research & Trials
   - Pharmacies
3. PRODUCTS (dropdown)
   - Platform Overview
   - iLidRx Pod
   - iRxCapture App
   - iRxControl Center
   - ESmCapture
   - How It Works
   - EHR & Device Integration
4. RESEARCH VALIDATION (dropdown)
   - Overview
   - Clinical Trials
   - NIH Grants
   - University Partners
   - Publications & Studies
   - Federal Grant Awards
5. NEWS (link)
6. COMPANY (dropdown)
   - About iRxReminder
   - Leadership Team
   - The Problem We Solve
7. CONTACT (link)

**Right Side Actions:**
- Phone: 330.806.8675 (with phone icon)
- "Schedule a Pilot" button (teal, prominent CTA)

**Mobile Menu:**
- Hamburger menu icon
- Accordion-style dropdowns
- Full-width layout
- Phone and CTA at bottom

### 3.2 Footer
**4-Column Layout:**

**Column 1: Brand**
- iRxReminder logo
- Tagline: "Safe. Connected. Reimbursable."
- Address: 1768 E 25th St #308, Cleveland, OH 44114

**Column 2: Quick Links**
- Home, Services, Products, Research Validation, About Us, Leadership, News, Contact

**Column 3: Products**
- iLidRx Pod
- iRxCapture App
- iRxControl Center
- ROI Calculator

**Column 4: Connect**
- Phone: 330.806.8675
- Email: info@irxreminder.com
- LinkedIn: linkedin.com/company/irxreminder-llc
- App Store link
- Google Play link

**Bottom Bar:**
- Copyright: © 2026 iRxReminder LLC
- Privacy Policy link
- Terms of Use link

---

## 4. HOME PAGE - DETAILED BREAKDOWN

### 4.1 Hero Section
**Layout:** Grid with 2 columns (text left, image right)
**Background:** `bg-gradient-to-br from-gray-50 to-white`
**Padding:** py-20

**Content:**
- **Headline (H1):** "Essential-Medication Monitoring That Pays for Itself"
- **Subheadline:** "FDA-cleared pod + platform that helps health systems keep patients safe, connected, and billable."
- **CTAs:**
  1. "Schedule a Pilot" (teal button, large)
  2. "See the Reimbursement Calculator" (outline button, large)
- **Hero Image:** Unsplash medical technology image (rounded-lg shadow-2xl)

### 4.2 Trust Bar Section
**Background:** White with top and bottom borders
**Padding:** py-12

**Headline:** "Trusted by leading institutions and validated through federally funded research"
**Subtitle:** "NIH-Funded · University-Validated · Clinically Proven"

**4 Key Statistics (Grid):**
1. **NIH** - $871K Federal Grant
2. **83%** - Adherence Rate Achieved
3. **FDA Class II** - Clearance Pending
4. **3× ROI** - Via RPM/RTM Billing

**Partner Logos (Text):**
- Harvard University
- MetroHealth
- U of Michigan
- Kent State
- Brown University
- Butler Hospital

**Research Spotlight Card:**
- Gradient background: `from-blue-50 to-cyan-50`
- **Title:** "NIH Trial: 48% → 80%+ Adherence Improvement"
- **Description:** "Validated across 350+ participants in behavioral health networks."
- **CTA:** "View Full Study" → /research/clinical-trials

### 4.3 Three Value Pillars
**Background:** bg-gray-50
**Padding:** py-20
**Layout:** 3-column grid

**Pillar 1: Clinical Validation**
- Link to: /research
- Icon: Shield (Lucide)
- Stat: "48% → 80%+"
- Background: `from-blue-50 to-blue-100`
- Text: "NIH-funded, university-validated clinical outcomes across multiple populations."

**Pillar 2: Workflow Integration**
- Link to: /products
- Icon: Workflow (Lucide)
- Stat: "One System"
- Background: `from-cyan-50 to-cyan-100`
- Text: "Pharmacy-loaded pods, real-time dashboards, and 100% seamless EHR integration."

**Pillar 3: Financial ROI**
- Link to: /roi-calculator
- Icon: DollarSign (Lucide)
- Stat: "3× ROI"
- Background: `from-blue-50 to-cyan-100`
- Text: "Fully reimbursable via RPM/RTM billing codes. The program pays for itself."

### 4.4 How It Works Section
**Background:** White
**Padding:** py-20
**Layout:** 4-column grid with numbered steps

**Headline:** "How iRxReminder Works"

**Step 1: Pharmacy Fills the Pod**
- Number badge: Blue circle with "1"
- Text: "Pharmacist loads up to 90 days of a single medication into the iLidRx pod."

**Step 2: Patient Dispenses at Home**
- Number badge: Cyan circle with "2"
- Text: "Smart alerting and Hold, Place, and Tilt™ gesture ensures the right dose at the right time."

**Step 3: Data Flows in Real Time**
- Number badge: Blue circle with "3"
- Text: "Every dose is automatically recorded and shared with the care team via iRxControl Center."

**Step 4: Care Team Intervenes**
- Number badge: Cyan circle with "4"
- Text: "Clinicians see real-time dashboards and intervene for at-risk patients before problems escalate."

**CTA:** "See the Full Platform Demo" → /products/how-it-works

### 4.5 Who We Serve (Persona Cards)
**Background:** bg-gray-50
**Padding:** py-20
**Layout:** 4-column grid

**Headline:** "Built for the People Who Make Care Decisions"
**Subtitle:** "Outcome-focused solutions for healthcare leaders"

**Card 1: Chief Medical Officer**
- Link to: /services/health-systems
- Subtitle: "Clinical Decision Maker"
- Value: "80% adherence improvement, fewer readmissions"

**Card 2: Chief Financial Officer**
- Link to: /roi-calculator
- Subtitle: "Financial Decision Maker"
- Value: "3× cost recovery via RPM/RTM codes, reduced readmission penalties"

**Card 3: Case Management Lead**
- Link to: /products
- Subtitle: "Operational Decision Maker"
- Value: "Reliable discharge support, simple reporting dashboards"

**Card 4: Pharmacy Director**
- Link to: /products/ehr-integration
- Subtitle: "Integration Decision Maker"
- Value: "100% seamless EHR integration, 25% fewer trial dropouts"

### 4.6 ROI Calculator Teaser
**Background:** White
**Padding:** py-20
**Layout:** Centered, max-width 5xl

**Headline:** "Calculate Your Path to Reimbursable Remote Care"
**Subtitle:** "See how much reimbursable revenue your health system could generate with iRxReminder"

**Example Calculation Display:**
- Background: Gradient `from-blue-50 to-cyan-50`
- 3 white cards showing:
  1. Patient Count: 500
  2. Monitoring Duration: 6 months
  3. Your Net Profit: $255,000 (green)
- **CTA:** "Open the ROI Calculator" → /roi-calculator

### 4.7 Video Demo Section
**Background:** bg-gray-50
**Padding:** py-20
**Layout:** Centered, max-width 5xl

**Headline:** "See iRxReminder in Action"
**Subtitle:** "Watch a 3-minute walkthrough of how the iLidRx pod, iRxCapture app, and iRxControl Center work together"

**Video Placeholder:**
- Aspect ratio: 16:9
- Background: Dark gray with image overlay (opacity-60)
- Play button: Large white circle in center with play icon
- Image: Unsplash medical dashboard image

**CTA:** "Request a Live Demo" → /contact

### 4.8 News Preview
**Background:** White
**Padding:** py-20
**Layout:** 3-column grid

**Headline:** "Latest News"

**News Card 1:**
- Date: March 2023
- Title: "iRxReminder Receives NIH Grant for AI Telehealth Research"
- Excerpt: "NIMH-funded grant to advance medication monitoring technology for behavioral health applications."

**News Card 2:**
- Date: August 2023
- Title: "First Patients Enrolled in TDtect™ Study"
- Excerpt: "Groundbreaking NIMH-funded study for Tardive Dyskinesia detection and monitoring begins enrollment."

**News Card 3:**
- Date: September 2022
- Title: "Dr. Owen Muir Joins as Chief Medical Officer"
- Excerpt: "Renowned physician brings expertise in behavioral health and telehealth to leadership team."

**CTA:** "View All News" → /news

### 4.9 Final CTA Banner
**Background:** Navy blue (#1e3a8a)
**Padding:** py-16
**Layout:** Centered, max-width 4xl

**Headline (White):** "Ready to See How Reimbursable Medication Monitoring Works?"
**Subtitle (Blue-100):** "Call us at 330.806.8675 or schedule a pilot program today"

**CTAs:**
1. "Schedule a Pilot" (teal button)
2. "Contact Us" (white outline button)

---

## 5. ROI CALCULATOR PAGE - DETAILED BREAKDOWN

### 5.1 Hero Section
**Background:** Gradient `from-blue-900 to-cyan-700`
**Padding:** py-20
**Text Color:** White

**Headline:** "Your Path to Reimbursable Remote Care"
**Subtitle:** "Calculate your potential return on investment with our interactive ROI calculator"

### 5.2 Calculator Section
**Layout:** Centered card, max-width 5xl, -mt-12 (overlaps hero)
**Card:** White background, rounded-xl, shadow-2xl, p-8 to p-12

**Section Title:** "Adjust Your Parameters"

**Input 1: Number of Patients**
- **Input Type:** Slider
- **Range:** 10 to 1,000 patients
- **Step:** 10
- **Default Value:** 500
- **Display:** Large blue number on right

**Input 2: Monitoring Duration**
- **Input Type:** Slider
- **Range:** 1 to 12 months
- **Step:** 1
- **Default Value:** 6 months
- **Display:** Large teal number with "month/months"

**Input 3: Monthly Reimbursement Rate**
- **Input Type:** Number input field
- **Default Value:** $135
- **Label:** "RPM/RTM billing rate per patient per month"

**Input 4: Monthly Platform Fee**
- **Input Type:** Number input field
- **Default Value:** $50
- **Label:** "iRxReminder service cost per patient per month"

### 5.3 Output Display
**4 Result Cards (Grid):**

**Card 1: Total Revenue**
- **Calculation:** patientCount × duration × reimbursementRate
- **Display:** Large blue number with dollar sign
- **Example:** $405,000

**Card 2: Total Cost**
- **Calculation:** patientCount × duration × platformFee
- **Display:** Large red number with dollar sign
- **Example:** $150,000

**Card 3: Net Profit**
- **Calculation:** Total Revenue - Total Cost
- **Display:** Large green number with dollar sign
- **Example:** $255,000

**Card 4: ROI Multiplier**
- **Calculation:** Total Revenue ÷ Total Cost
- **Display:** Large teal number with "×"
- **Example:** 2.7×

### 5.4 Explanation Section
**Headline:** "Understanding Your ROI"

**Content includes:**
- RPM/RTM billing code explanations
- Medicare reimbursement rates
- Assumptions used in calculations
- Link to schedule consultation

**CTA:** "Schedule a Pilot to Discuss Your Custom ROI" → /schedule-pilot

---

## 6. SERVICES PAGES

### 6.1 Services Overview
**Hero:**
- Title: "Service Sectors"
- Subtitle: "Why Partner with iRxReminder"

**4 Service Cards (2×2 Grid):**

**Card 1: Health Systems & Hospitals**
- Icon: Building2
- Stat: "80% adherence improvement"
- Description: "Enable safe, compliant post-discharge medication management and reduce readmission penalties."
- Link: /services/health-systems

**Card 2: Behavioral Health Agencies**
- Icon: Brain
- Stat: "3× ROI via RPM billing"
- Description: "Stabilize patients through better adherence, increase agency revenue, and lower staff stress and turnover."
- Link: /services/behavioral-health

**Card 3: Clinical Research & Trials**
- Icon: FlaskConical
- Stat: "25% fewer dropouts"
- Description: "Empower researchers and study participants to complete and monitor study tasks — with 25% fewer clinical trial dropouts."
- Link: /services/clinical-research

**Card 4: Pharmacies**
- Icon: Pill
- Stat: "Enhanced patient loyalty"
- Description: "Build brand loyalty, capture and monetize daily use data, and increase prescription revenue."
- Link: /services/pharmacies

### 6.2 Health Systems Page

**Hero Section:**
- Title: "Essential-Medication Monitoring for Health Systems"
- Subtitle: "Reduce readmissions, improve patient safety, and generate reimbursable revenue with FDA-cleared medication management technology"
- CTA: "Schedule a Pilot for Your Health System"

**The Non-Adherence Crisis Section:**
- Background: bg-gray-50

**3 Crisis Statistics:**
1. 700K - ER visits annually
2. 341K - Hospitalizations annually
3. 125K - Deaths annually

**Central Stat:**
- $320B+ in avoidable healthcare costs from medication non-adherence

**The Solution Section:**
- 3 component cards explaining iLidRx Pod, iRxCapture App, iRxControl Center

**Clinical Evidence Section:**
- NIH trial results
- University partnerships
- Published outcomes

**Financial ROI Section:**
- RPM/RTM billing breakdown
- Sample calculations
- Link to ROI Calculator

**Implementation Section:**
- Onboarding process
- Training requirements
- Timeline expectations

### 6.3-6.5 Other Service Pages
Similar structure to Health Systems but tailored to:
- Behavioral Health (focus on stabilization, care coordination)
- Clinical Research (focus on adherence monitoring, data quality)
- Pharmacies (focus on patient retention, data monetization)

---

## 7. PRODUCTS PAGES

### 7.1 Products Overview
**Hero:**
- Title: "The iRxReminder Platform"
- Subtitle: "A complete, FDA-cleared system for medication management, adherence monitoring, and reimbursable remote care"

**Platform Image:**
- Full-width image showing pod, app, dashboard
- Caption: "Pod + App + Dashboard working together seamlessly"

**3 Main Product Cards:**

**Card 1: iRxControl Center**
- Icon: MonitorDot
- Description: "Deploy regimens and receive real-time adherence data"
- Link: /products/iRxControl-center

**Card 2: iRxCapture App**
- Icon: Smartphone
- Description: "Patient-facing medication support and education"
- Link: /products/iRxCapture-app

**Card 3: iLidRx Pod**
- Icon: Package
- Description: "IoT dispensing with smart alerting and gesture-based dispensing"
- Link: /products/ilidRx-pod

**2 Additional Features:**
- ESmCapture: Customizable surveys
- EHR & Device Integration: 100% seamless integration

### 7.2 iLidRx Pod Page

**Hero:**
- Title: "iLidRx Pod"
- Subtitle: "Patent-pending IoT dispensing device with Hold, Place, and Tilt™ gesture-based activation and smart LED alerting system"

**Key Features (7 items with checkmarks):**

1. **Hold, Place, and Tilt™ Dispensing**
   - Patent-pending gesture-based activation ensures intentional medication taking and prevents accidental dispensing

2. **Smart LED Alerting System**
   - Green (window open) → Yellow (mid-window alert) → Red (closing) progression guides dosing windows

3. **90-Day Capacity**
   - Holds up to 90 days of a single essential medication — one medication per pod for safety and remote dosing changes

4. **Pharmacist-Filled for Zero Sorting Errors**
   - Pharmacy loads the pod — patients never sort pills, eliminating medication errors

5. **Real-Time Dose Recording**
   - Every dispensing event automatically sent to iRxCapture app and iRxControl Center — cannot game compliance data

6. **Inductive Charging**
   - Charged wirelessly on stand for continuous operation

7. **Overdose Prevention**
   - Only dispenses correct amount at correct time — patients cannot "catch up" or double-dose

**LED Color System Explanation (3 cards):**
- **Green:** Window Open - Dosing window is open. Patient can dispense medication without alert.
- **Yellow:** Mid-Window Alert - Gentle reminder that dosing window is halfway through.
- **Red:** Window Closing - Dosing window is closing soon. Final alert to ensure adherence.

**Manufacturing & Regulatory Status:**
- **Manufacturing Partners:**
  - Parallel Design Inc. (Wooster, OH) — Pod manufacturing and industrial design
  - LogiSync (Avon Lake, OH) — Electronics manufacturing and assembly
- **Regulatory Status:** FDA Class II clearance pending
  - Led by Dr. Fred Ma, MD PhD, COO — conducted 1,200+ clinical trials and taken 200+ drugs/devices through FDA validation and clearance

### 7.3 iRxCapture App Page
(Patient-facing mobile app details)

### 7.4 iRxControl Center Page

**Hero:**
- Title: "iRxControl Center"
- Subtitle: "Cloud-based hub for healthcare professionals — deploy regimens remotely and receive real-time adherence data"

**Dashboard Image:**
- Screenshot of clinical dashboard

**Core Capabilities (5 items with checkmarks):**

1. **Deploy Medication Regimens Remotely**
   - Set up and modify dosing schedules without requiring patient visits or physical repackaging

2. **Real-Time Adherence Data**
   - See overall summaries and individual medication adherence for each patient in real-time

3. **Calendar View for Pattern Recognition**
   - Identify patterns of missed doses by day and time to intervene proactively

4. **Alert Research Team on Missed Doses**
   - Automatic notifications enable timely intervention before problems escalate

5. **EHR/EDC System Integration**
   - Can interface with Electronic Health Records and Electronic Data Capture systems for seamless workflows

**Dashboard Capabilities (2 cards):**

**Study Management:**
- Open studies and add research teams
- Assign roles and permissions
- Set up materials, conditions, and regimens
- Remote regimen modification without repackaging

**Participant Management:**
- Recruit and add participants
- Create customizable dosing schedules
- Remote schedule modification
- Track enrollment and participation status

### 7.5 ESmCapture Page
(Customizable surveys and symptom tracking)

### 7.6 How It Works Page
(Detailed workflow explanation)

### 7.7 EHR Integration Page
(Technical integration details)

---

## 8. RESEARCH VALIDATION PAGES

### 8.1 Research Overview

**Hero:**
- Title: "Evidence-Based. Clinically Validated. Federally Funded."
- Subtitle: "iRxReminder's platform is backed by nationally recognized research institutions and multi-year federal grant awards"

**Central Stat:**
- "48% → 80%+" - Adherence improvement validated through NIH-funded clinical trials

**5 Research Categories (Grid):**

1. **Clinical Trials** (Shield icon)
   - "Active and completed trials demonstrating clinical efficacy"
   - Link: /research/clinical-trials

2. **NIH Grants** (Award icon)
   - "Federal funding supporting evidence-based research"
   - Link: /research/nih-grants

3. **University Partners** (University icon)
   - "Collaborations with leading academic institutions"
   - Link: /research/university-partners

4. **Publications & Studies** (FileText icon)
   - "Peer-reviewed research and conference presentations"
   - Link: /research/publications

5. **Federal Grant Awards** (TrendingUp icon)
   - "Recognition and funding from federal agencies"
   - Link: /research/federal-grants

**Institutional Partners Section:**
- Harvard University
- MetroHealth
- University of Michigan
- Kent State University
- Brown University
- Butler Hospital

### 8.2 Clinical Trials Page

**3 Trial Cards:**

**Trial 1: TDtect™ Diagnostic Study**
- Status: Active (green badge)
- Description: NIMH-funded study for Tardive Dyskinesia detection and remote monitoring in behavioral health populations. First patients enrolled August 2023.
- Funding: NIMH (March 2023)
- Focus: Behavioral Health

**Trial 2: University of Michigan Cancer Center Study**
- Status: Completed (blue badge)
- Description: HOPA-funded study monitoring medication adherence in oncology patients, demonstrating 25% reduction in clinical trial dropouts.
- Funding: HOPA
- Outcome: 25% fewer dropouts

**Trial 3: NIH Adherence Improvement Study**
- Status: Completed (blue badge)
- Description: Multi-site study across 350+ participants in behavioral health networks demonstrating 48% to 80%+ improvement in medication adherence.
- Participants: 350+
- Outcome: 48% → 80%+ adherence

### 8.3 NIH Grants Page

**2 Grant Listings:**

1. **NIH Grant No. 1R43AG033500**
   - Stroke recovery pilot study validating medication adherence technology

2. **NIMH AI Telehealth Research Grant (March 2023)**
   - $871,153 award
   - Advanced research in AI-powered telehealth monitoring for behavioral health

### 8.4 University Partners Page
(Details on academic collaborations)

### 8.5 Publications Page
(List of peer-reviewed publications and presentations)

### 8.6 Federal Grants Page
(Complete list of government funding)

---

## 9. COMPANY PAGES

### 9.1 About iRxReminder

**Hero:**
- Title: "About iRxReminder"
- Subtitle: "Transforming medication management through innovation and evidence-based technology"

**Our Mission Section:**
- Headline: "Our Mission"
- Mission Statement: "Empower patients and healthcare professionals to manage medications together."
- Description: "iRxReminder enables health systems to safely manage essential-medication patients after discharge — keeping them safe, connected, and reimbursable. Our cloud-app-IoT medication management platform transforms medication adherence for 19 customers across clinical and intervention studies."

**Our Origin Story (Gradient card):**
- Founded by Anthony Sterns, PhD
- Background: 10 years of research on dementia care
- Memory Magic Program: 500,000+ older adults, 2,400+ facilities, 7 countries
- Problem context: $320 billion+ annual costs, 700,000 ER visits, 341,000 hospitalizations, 125,000 deaths

**Safe. Connected. Reimbursable. (3 cards):**

1. **Safe**
   - FDA-cleared technology with 83% adherence rates proven in NIH-funded trials
   - Pharmacist-filled pods eliminate sorting errors

2. **Connected**
   - Real-time data flow from patient to care team enables proactive intervention before problems escalate

3. **Reimbursable**
   - RPM/RTM billing codes generate 3× ROI, making the program financially sustainable for health systems

**Key Milestones & Awards (Timeline):**

- **2023:** $871,153 NIH Grant for AI Telehealth Research
- **2023:** First Patients Enrolled in TDtect™ Study
- **2022:** Leadership Expansion (Dr. Owen Muir CMO, William Yuan CSO)
- **2019:** 🏆 Winner: AMIA PitchIT 2019 — $12,500 Prize
- **2019:** Named Best Tech Startup in Cleveland 2020
- **2017:** AARP/MedCity News Names Anthony Sterns '50+ Innovation Leader'

### 9.2 Leadership Team

**Hero:**
- Title: "Leadership Team"
- Subtitle: "Experienced leaders in healthcare technology, clinical medicine, regulatory affairs, and product innovation"

**6 Executive Profiles (Alternating left/right layout):**

**1. Anthony Sterns, PhD - Founder & Chief Executive Officer**
- Image: Professional headshot
- Bio: BS Engineering (University of Michigan), PhD Organizational Psychology (University of Akron). Pioneer in gerontechnology with 12 US patents, 33 publications, and 100+ international presentations. Created Memory Magic Program impacting 500K+ older adults across 2,400+ facilities in 7 countries. Secretary General, International Society for Gerontechnology. Led iRxReminder through 10 years of dementia care research to FDA-cleared IoT platform.
- Email: asterns@irxreminder.com

**2. Fred Ma, MD, PhD - Chief Operating Officer**
- Bio: Conducted 1,200+ clinical trials and taken 200+ drugs and medical devices through FDA validation and clearance processes. Leading iRxReminder's FDA Class II clearance submission. Brings unparalleled regulatory expertise to ensure product safety, efficacy, and compliance.
- Email: fma@irxreminder.com

**3. Owen Muir, M.D. - Chief Medical Officer**
- Bio: Board-certified Psychiatrist and Mayo Clinic faculty member, specializing in child and adolescent psychology. Experienced principal investigator with deep expertise in behavioral health and telehealth. Joined September 2022 to guide clinical validation and product development strategy.

**4. William Yuan - Chief Strategy Officer**
- Bio: Former CEO of nGloballink and media G3. Led early-stage company from inception to $310M public company. Track record of successful exits including IPO and acquisitions with 100x ROI. Joined October 2022 to drive strategic growth and market expansion.

**5. Larry Tusick - Chief Business Officer / VP Sales**
- Bio: 25+ years of healthcare experience. Former director at Baxter and Care USA. University of Alabama graduate. Leads partnership development, market expansion strategies, and commercial growth initiatives.
- Email: ltusick@irxreminder.com

**6. Josh Smith, MBA - Chief Technology Officer**
- Bio: Former IBM and IBM Watson engineer. Agile practitioner with full software lifecycle experience in online media and mobile products. Leads technology development and platform architecture for iRxReminder's cloud-app-IoT ecosystem.

**Strategic Partners Section:**

**Manufacturing Partners:**
- Parallel Design Inc. (Wooster, OH) — Pod manufacturing
- LogiSync (Avon Lake, OH) — Electronics manufacturing

**Development & Support:**
- InterSystems — Development partner
- BioEnterprise — Portfolio company
- MAGNET Incubator (Cleveland, OH)
- Burton Morton Mentoring (JumpStart)

### 9.3 The Problem We Solve

**Hero:**
- Title: "The Problem We Solve"
- Subtitle: "The medication non-adherence crisis and why existing solutions fall short"

**The Non-Adherence Crisis (4 stats):**
1. 700K - ER visits annually
2. 341K - Hospitalizations annually
3. 125K - Deaths annually
4. $320B+ - Avoidable healthcare costs

**Additional Context:**
- Aging Population Doubles by 2030
- Increasing burden of chronic disease management

**Why Existing Solutions Fall Short (3 sections):**

**1. Pill Packing (PillPak, ExactCare)**
- Problem: Dangerous when days are skipped. If a patient misses a day, they may take double doses. Regimen changes require complete repackaging.
- iRxReminder Solution: Flexible dosing windows and real-time regimen adjustments without physical repackaging.

**2. Wireless Pill Bottles (MEMSCaps, GlowCaps, AdhereTech)**
- Problem: Cannot prevent overdosing. Patients can open the bottle and take any amount. Alerts are passive or nagging, leading to alert fatigue.
- iRxReminder Solution: Controlled dispensing with gesture activation, preventing overdose and gaming.

**3. Smart Pill Organizers**
- Problem: Patient still sorts pills (error-prone). No real-time data. Easy to game by opening without taking medication.
- iRxReminder Solution: Pharmacist-filled, automated dose recording, tamper-proof data.

---

## 10. NEWS PAGE

**Hero:**
- Title: "News & Milestones"
- Subtitle: "Key achievements, awards, and announcements from iRxReminder"

**12 News Items (Chronological):**

**Featured Items (highlighted with gradient background):**

1. **March 2023:** iRxReminder Receives $871,153 NIH Grant for AI Telehealth Research
   - NIMH-funded grant to advance medication monitoring technology and AI-powered Tardive Dyskinesia detection for behavioral health applications. This federal funding validates iRxReminder's clinical approach and research methodology.

2. **2019:** 🏆 Winner: AMIA PitchIT 2019 — $12,500 Prize
   - iRxReminder wins American Medical Informatics Association's national PitchIT competition, receiving $12,500 grand prize. This prestigious award recognizes iRxReminder's potential to transform medication adherence through technology innovation.

**Standard Items:**

3. **August 2023:** First Patients Enrolled in NIMH-funded TDtect™ Diagnostic Study
4. **September 2022:** Owen Muir M.D. Joins as Chief Medical Officer
5. **October 2022:** William Yuan Appointed Chief Strategy Officer
6. **2022:** NewChip Accelerator Graduation
7. **2021:** OCEAN Accelerator Graduation
8. **2021:** Whatif! Venture Fellowship Cohort 4
9. **2021:** BIA Finals Selection
10. **2019:** Named Best Tech Startup in Cleveland 2020
11. **2017:** AARP/MedCity News Names Anthony Sterns '50+ Innovation Leader'
12. **2013:** Dr. Sterns Keynotes GSA and CHPA National Summit

---

## 11. CONTACT PAGE

**Hero:**
- Title: "Let's Talk About Better Medication Outcomes"
- Subtitle: "Get in touch with our team to learn more about iRxReminder"

**Contact Form (Left - 2/3 width):**

**Fields:**
1. Name * (text input)
2. Email * (email input)
3. Organization / Health System * (text input)
4. Role / Title (text input)
5. Phone (optional) (tel input)
6. Inquiry Type * (select dropdown)
   - Schedule a Pilot
   - General Inquiry
   - Product Demo
   - Partnership Opportunity
   - Research Collaboration
   - Press/Media
7. Message * (textarea)

**Submit Button:** "Send Message"

**Contact Information Sidebar (Right - 1/3 width):**

**Contact Methods:**
- **Phone:** 330.806.8675
- **Email:** info@irxreminder.com
- **Address:** 1768 E 25th St #308, Cleveland, OH 44114

**Key Contacts:**
- **CEO:** asterns@irxreminder.com
- **COO:** fma@irxreminder.com
- **Sales:** ltusick@irxreminder.com

**Social:**
- LinkedIn: linkedin.com/company/irxreminder-llc

---

## 12. SCHEDULE PILOT PAGE

**Hero:**
- Title: "Schedule a Pilot Program"
- Subtitle: "See firsthand how iRxReminder improves medication adherence, reduces readmissions, and generates reimbursable revenue for your health system"

**Pilot Form (Left - 2/3 width):**

**Fields:**
1. Name * (text input)
2. Title * (text input)
3. Organization * (text input)
4. Email * (email input)
5. Phone * (tel input)
6. Organization Type * (select)
   - Health System/Hospital
   - Behavioral Health Agency
   - Research Institution
   - Pharmacy
   - Other
7. Estimated Patient Volume * (select)
   - Under 100 patients
   - 100-500 patients
   - 500-1,000 patients
   - 1,000+ patients
8. Desired Timeline * (select)
   - Within 1 month
   - 1-3 months
   - 3-6 months
   - 6+ months
9. Additional Notes (textarea)

**Submit Button:** "Submit Pilot Request"

**What to Expect Sidebar (Right - 1/3 width):**

**3 Benefit Cards:**

1. **Clinical Validation** (Shield icon)
   - See 80%+ adherence rates in your own patient population

2. **Financial ROI** (TrendingUp icon)
   - Calculate exact RPM/RTM reimbursement for your system

3. **Award-Winning** (Award icon)
   - AMIA PitchIT 2019 winner, NIH-funded research

**Process Timeline:**
- **Day 1:** We'll contact you within 24 hours
- **Week 1:** Initial consultation and needs assessment
- **Week 2-3:** Pilot program design and approval
- **Week 4:** Pilot launch with training and support

---

## 13. KEY STATISTICS & DATA POINTS

### Clinical Outcomes
- **83% adherence rate** achieved in clinical studies
- **48% → 80%+ improvement** in medication adherence (NIH trial)
- **350+ participants** in behavioral health networks
- **25% fewer clinical trial dropouts** (University of Michigan study)

### Financial/ROI
- **3× ROI** via RPM/RTM billing codes
- **$320 billion+** annual U.S. healthcare costs from non-adherence
- **$871,153** NIH grant for AI telehealth research (March 2023)
- **$12,500** AMIA PitchIT 2019 prize

### Impact/Scale
- **700,000** ER visits annually due to non-adherence
- **341,000** hospitalizations annually
- **125,000** deaths annually
- **500,000+** older adults impacted by Memory Magic Program
- **2,400+** facilities in 7 countries

### Technical Specs
- **90-day capacity** per pod
- **FDA Class II clearance** pending
- **100% seamless** EHR integration
- **12 US patents** (Dr. Sterns)
- **1,200+ clinical trials** conducted (Dr. Ma)
- **200+ drugs/devices** through FDA (Dr. Ma)

### Institutional Partners
- Harvard University
- MetroHealth
- University of Michigan
- Kent State University
- Brown University
- Butler Hospital

### Awards & Recognition
- AMIA PitchIT 2019 Winner
- Best Tech Startup in Cleveland 2020
- AARP/MedCity News 50+ Innovation Leader (2017)
- NewChip Accelerator Graduate
- OCEAN Accelerator Graduate
- Whatif! Venture Fellowship Cohort 4

---

## 14. CONTENT TONE & MESSAGING

### Voice & Tone
- **Professional and authoritative** - B2B enterprise focus
- **Evidence-based** - Heavy emphasis on clinical validation and data
- **Outcome-focused** - Results, ROI, and measurable improvements
- **Institutional** - Speaks to CMOs, CFOs, and decision-makers
- **Clinical credibility** - FDA clearance, NIH funding, university partnerships

### Key Messaging Themes
1. **Safety** - FDA-cleared, pharmacist-filled, overdose prevention
2. **Clinical Validation** - NIH-funded trials, 83% adherence, university partnerships
3. **Financial Viability** - 3× ROI, RPM/RTM billing, reimbursable
4. **Integration** - Seamless EHR integration, minimal workflow disruption
5. **Innovation** - Patent-pending technology, award-winning platform

### Repeated Phrases/Taglines
- "Safe. Connected. Reimbursable."
- "Essential-Medication Monitoring That Pays for Itself"
- "FDA-cleared IoT medication management platform"
- "48% → 80%+ adherence improvement"
- "Hold, Place, and Tilt™" (patented gesture)
- "NIH-funded, university-validated"

---

## 15. RESPONSIVE DESIGN NOTES

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations
- Navigation: Hamburger menu with accordion dropdowns
- Grid layouts: Stack to single column
- Hero sections: Stack text above images
- Font sizes: Reduce from text-5xl to text-4xl on mobile
- CTAs: Full-width buttons on mobile

### Container Widths
- Max width: 7xl (1280px) for most sections
- Max width: 6xl (1152px) for products/services
- Max width: 5xl (1024px) for ROI calculator, video
- Max width: 4xl (896px) for hero text, centered content

---

## 16. INTERACTIVE ELEMENTS

### Forms
- Real-time validation
- Required field indicators (*)
- Submit confirmation alerts
- Styled inputs with focus states

### ROI Calculator
- Real-time calculations as sliders move
- Formatted currency display
- Color-coded outputs (blue/teal/green/red)
- Range inputs with visual feedback

### Navigation
- Sticky header with scroll detection
- Dropdown menus on hover (desktop)
- Click to expand (mobile)
- Active route highlighting
- Smooth transitions

### Cards & Links
- Hover effects: shadow enlargement
- Icon animations: scale on hover
- Color transitions on text
- Gradient backgrounds on feature cards

---

## 17. IMAGE STRATEGY

All images use Unsplash placeholder images via ImageWithFallback component:
- Medical technology/healthcare settings
- Clinical dashboards
- Professional headshots for leadership
- Medical devices and equipment

**Image URLs follow pattern:**
`https://images.unsplash.com/photo-[ID]?w=[width]&h=[height]&fit=crop`

---

## 18. COMPONENT REUSABILITY PATTERNS

### Repeated Patterns
1. **Hero Sections:** Gradient background, centered text, CTA buttons
2. **Stat Cards:** Large number + small description
3. **Feature Lists:** Icon + heading + description with checkmarks
4. **3-Column Grids:** Value propositions, services, products
5. **Alternating Content:** Image left/text right, then flip
6. **Timeline Layouts:** Border-left accent with date + content
7. **Gradient Cards:** Blue-to-cyan backgrounds for highlights

### Common CTAs
- "Schedule a Pilot"
- "Contact Us"
- "View Full Study"
- "Learn More"
- "Open the ROI Calculator"
- "Request a Live Demo"

---

## RECREATION INSTRUCTIONS

To recreate this website exactly:

1. **Set up React Router** with the exact route structure in section 1.3
2. **Implement the Design System** using the color palette in section 2.1
3. **Build the Navigation component** matching section 3.1 specifications
4. **Build the Footer component** matching section 3.2 specifications
5. **Create each page component** following the detailed breakdowns in sections 4-12
6. **Use the exact statistics** listed in section 13
7. **Match the content tone** described in section 14
8. **Implement responsive layouts** per section 15
9. **Add interactive features** per section 16
10. **Use placeholder images** per section 17

Every section, statistic, headline, and layout has been documented. The color codes, spacing values, component structures, and content are specified to enable exact recreation.
