export interface NewsArticle {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  category: "grant" | "study" | "leadership" | "accelerator" | "award" | "partnership";
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "nimh-grant-871k-ai-behavioral-health",
    date: "March 2023",
    title: "iRxReminder Receives $871K NIH Grant for AI-Powered Behavioral Health Monitoring",
    excerpt:
      "NIMH-funded grant supports TDtect\u2122 study for Tardive Dyskinesia detection and medication monitoring. Federal backing validates clinical approach and positions iRxReminder at the forefront of behavioral health technology.",
    body: [
      "iRxReminder has been awarded an $871,153 grant from the National Institute of Mental Health (NIMH) to fund the TDtect\u2122 study, a groundbreaking initiative focused on AI-powered detection of Tardive Dyskinesia (TD) and remote medication monitoring in behavioral health populations.",
      "Tardive Dyskinesia is a serious movement disorder caused by long-term use of certain psychiatric medications. Early detection is critical but challenging in outpatient settings where patients are seen infrequently. The TDtect\u2122 platform combines iRxReminder\u2019s proven medication adherence technology with AI-based video analysis to detect early signs of TD remotely.",
      "The grant validates iRxReminder\u2019s clinical approach and positions the company at the intersection of two rapidly growing fields: remote patient monitoring and AI-powered diagnostics. Federal funding from NIH undergoes rigorous peer review, confirming the scientific merit and public health significance of the research.",
      "Dr. Owen Muir, Chief Medical Officer and board-certified psychiatrist, serves as a principal investigator. The study represents a significant expansion of iRxReminder\u2019s capabilities beyond medication adherence into active diagnostic monitoring.",
    ],
    category: "grant",
    featured: true,
  },
  {
    slug: "tdtect-study-first-patients-enrolled",
    date: "August 2023",
    title: "TDtect\u2122 Study Enrolls First Patients, Advancing AI Diagnostics in Behavioral Health",
    excerpt:
      "Groundbreaking NIMH-funded study begins enrollment for Tardive Dyskinesia detection and remote monitoring. Marks iRxReminder\u2019s expansion into AI-powered diagnostics.",
    body: [
      "The TDtect\u2122 study has enrolled its first participants, marking a critical milestone in iRxReminder\u2019s NIMH-funded research into AI-powered Tardive Dyskinesia detection and remote behavioral health monitoring.",
      "Participants receive iRxReminder\u2019s medication adherence platform along with the TDtect\u2122 diagnostic module, which uses smartphone-based video capture and AI analysis to detect early signs of Tardive Dyskinesia. The study aims to demonstrate that remote, automated screening can identify TD earlier and more reliably than periodic clinical assessments alone.",
      "This enrollment represents the first real-world deployment of iRxReminder\u2019s combined adherence-plus-diagnostics platform, validating the company\u2019s vision of comprehensive remote medication management.",
    ],
    category: "study",
    featured: false,
  },
  {
    slug: "owen-muir-joins-as-cmo",
    date: "September 2022",
    title: "Owen Muir M.D. Joins as CMO, Strengthening Clinical Leadership",
    excerpt:
      "Board-certified Psychiatrist and Mayo Clinic faculty member brings behavioral health and telehealth expertise to guide clinical validation and product development.",
    body: [
      "iRxReminder has appointed Owen Muir, M.D., as Chief Medical Officer, adding significant clinical depth to the leadership team. Dr. Muir is a board-certified psychiatrist and faculty member at the Mayo Clinic, bringing extensive experience in behavioral health, telehealth, and clinical research.",
      "As CMO, Dr. Muir will guide clinical validation studies, oversee medical affairs, and help shape product development to meet the needs of healthcare providers and their patients. His appointment comes as iRxReminder prepares for expanded clinical trials and moves toward FDA Class II clearance.",
      "Dr. Muir\u2019s expertise in behavioral health is particularly relevant as iRxReminder expands its focus on psychiatric medication adherence, where non-compliance has especially severe consequences including hospitalization, incarceration, and homelessness.",
    ],
    category: "leadership",
    featured: false,
  },
  {
    slug: "william-yuan-appointed-cso",
    date: "October 2022",
    title: "William Yuan Appointed CSO to Drive Strategic Growth",
    excerpt:
      "Former CEO of nGloballink\u2009\u2014\u2009led company from inception to $310M public entity with 100x ROI exits\u2009\u2014\u2009joins to accelerate market expansion.",
    body: [
      "iRxReminder has named William Yuan as Chief Strategy Officer, adding a proven entrepreneur and capital markets leader to the executive team. Yuan previously served as CEO of nGloballink, where he led the company from inception to a $310 million publicly traded entity, delivering 100x returns to early investors.",
      "In his role as CSO, Yuan will drive strategic growth initiatives including market expansion, partnership development, and capital strategy. His track record of scaling healthcare and technology companies through strategic partnerships and capital markets makes him an ideal fit for iRxReminder\u2019s current growth phase.",
      "Yuan\u2019s appointment signals iRxReminder\u2019s transition from research-stage company to commercial-stage platform, with plans to scale distribution through strategic partnerships with health systems, pharmacy networks, and clinical research organizations.",
    ],
    category: "leadership",
    featured: false,
  },
  {
    slug: "newchip-accelerator-graduation",
    date: "2022",
    title: "iRxReminder Graduates NewChip Accelerator, Continues Investor Relations Push",
    excerpt:
      "Completed one of the nation\u2019s leading startup accelerators, building commercial momentum and strategic partnerships.",
    body: [
      "iRxReminder has successfully completed the NewChip Accelerator program, one of the most competitive startup accelerator programs in the United States. The program provided strategic mentorship, investor introductions, and business development support as iRxReminder transitions from research validation to commercial deployment.",
      "During the accelerator, iRxReminder refined its go-to-market strategy, developed relationships with potential institutional investors, and strengthened its commercial partnerships. The graduation marks another milestone in the company\u2019s progression from NIH-funded research project to venture-backed healthtech platform.",
    ],
    category: "accelerator",
    featured: false,
  },
  {
    slug: "ocean-accelerator-graduation",
    date: "2021",
    title: "OCEAN Accelerator Graduation Backed by 11 Tribes Venture Fund",
    excerpt:
      "Healthcare-focused accelerator program completed, adding institutional support to iRxReminder\u2019s growth trajectory.",
    body: [
      "iRxReminder has graduated from the OCEAN Accelerator, a Cleveland-based program backed by the 11 Tribes Venture Fund that focuses on high-growth companies in healthcare and technology. The accelerator provided mentorship, strategic guidance, and connections to institutional investors.",
      "The OCEAN program\u2019s healthcare focus made it particularly valuable for iRxReminder, connecting the company with industry leaders, hospital system executives, and pharmacy network decision-makers who represent the platform\u2019s target market.",
    ],
    category: "accelerator",
    featured: false,
  },
  {
    slug: "whatif-venture-fellowship-cohort-4",
    date: "2021",
    title: "Selected for Whatif! Venture Fellowship Cohort 4",
    excerpt:
      "Competitive fellowship program supporting high-growth healthcare startups selects iRxReminder.",
    body: [
      "iRxReminder has been selected for Cohort 4 of the Whatif! Venture Fellowship, a competitive program that provides early-stage companies with strategic mentorship, venture capital exposure, and business development resources.",
      "The fellowship\u2019s selection of iRxReminder validates the company\u2019s market opportunity and technology approach. During the program, iRxReminder worked with seasoned entrepreneurs and investors to refine its pitch, financial projections, and growth strategy.",
    ],
    category: "accelerator",
    featured: false,
  },
  {
    slug: "bia-finals-advancement",
    date: "2021",
    title: "iRxReminder Advances to BIA Finals",
    excerpt:
      "Business innovation recognized at national level, validating healthcare technology model and market opportunity.",
    body: [
      "iRxReminder has advanced to the finals of the BIA (Business Innovation Award), a national competition recognizing companies with transformative technology and strong commercial potential. The recognition places iRxReminder among the top healthcare innovation companies in the country.",
      "The BIA judges evaluated iRxReminder\u2019s technology, market opportunity, business model, and team, validating the company\u2019s approach to solving medication non-adherence through IoT-connected dispensing and real-time monitoring.",
    ],
    category: "award",
    featured: false,
  },
  {
    slug: "amia-pitchit-grand-prize",
    date: "2019",
    title: "AMIA PitchIT Grand Prize: $12,500 for Medication Adherence Innovation",
    excerpt:
      "American Medical Informatics Association\u2019s national competition awards iRxReminder the grand prize, recognizing its potential to transform how medication adherence is measured and managed.",
    body: [
      "iRxReminder has won the grand prize at the American Medical Informatics Association (AMIA) PitchIT competition, earning $12,500 and national recognition for its innovative approach to medication adherence monitoring.",
      "The AMIA PitchIT competition is one of the most prestigious healthcare informatics startup competitions in the United States. Judges include leading health IT executives, venture capitalists, and clinical informatics researchers. The grand prize recognizes iRxReminder\u2019s potential to fundamentally change how medication adherence is measured, monitored, and managed across healthcare settings.",
      "iRxReminder\u2019s winning pitch highlighted the platform\u2019s unique approach: combining pharmacist-filled smart dispensing pods with real-time data transmission to healthcare teams, creating an end-to-end system that replaces the guesswork of traditional adherence monitoring with verified dose-level data.",
    ],
    category: "award",
    featured: true,
  },
  {
    slug: "best-tech-startup-cleveland",
    date: "2019",
    title: "Named Best Tech Startup in Cleveland",
    excerpt:
      "Regional recognition validates market traction and technology innovation in the Cleveland healthcare ecosystem.",
    body: [
      "iRxReminder has been named Best Tech Startup in Cleveland, recognizing the company\u2019s technology innovation, clinical validation, and growth trajectory within one of the nation\u2019s leading healthcare innovation ecosystems.",
      "Cleveland\u2019s healthcare ecosystem includes the Cleveland Clinic, University Hospitals, MetroHealth, and a dense network of medical device and healthtech companies. Being recognized as the top tech startup in this competitive market validates iRxReminder\u2019s technology approach and commercial potential.",
    ],
    category: "award",
    featured: false,
  },
  {
    slug: "aarp-medcity-50-plus-innovation-leader",
    date: "2017",
    title: "Anthony Sterns Named AARP/MedCity \u201850+ Innovation Leader\u2019",
    excerpt:
      "National recognition for leadership in aging and technology innovation, highlighting iRxReminder\u2019s impact on older adult populations.",
    body: [
      "Dr. Anthony Sterns, founder and CEO of iRxReminder, has been named a \u201850+ Innovation Leader\u2019 by AARP and MedCity News, recognizing his contributions to technology innovation for older adults. The award highlights iRxReminder\u2019s focus on solving medication adherence challenges for aging populations.",
      "Dr. Sterns\u2019 research career has focused on gerontechnology \u2014 the intersection of aging and technology. His work on iRxReminder emerged directly from a decade of NIH-funded research into why older adults with cognitive impairments lose their independence, with medication management consistently emerging as a critical factor.",
      "The AARP/MedCity recognition connects iRxReminder to a broader national conversation about how technology can support healthy aging, a market expected to grow substantially as the older adult population doubles by 2030.",
    ],
    category: "award",
    featured: false,
  },
  {
    slug: "gsa-chpa-keynote-presentations",
    date: "2013",
    title: "Dr. Sterns Delivers Keynotes at GSA and CHPA National Summits",
    excerpt:
      "Invited keynote presentations at Gerontological Society of America and Consumer Healthcare Products Association. 100+ international presentations on medication adherence technology.",
    body: [
      "Dr. Anthony Sterns has delivered invited keynote presentations at the Gerontological Society of America (GSA) Annual Scientific Meeting and the Consumer Healthcare Products Association (CHPA) national summit, sharing research findings on medication adherence technology and gerontechnology.",
      "These presentations are part of a broader program of 100+ international presentations spanning academic conferences, industry summits, and healthcare system workshops. The research shared at these venues has been instrumental in building the scientific foundation for iRxReminder\u2019s platform.",
      "Dr. Sterns\u2019 presentations consistently emphasize the gap between medication availability and medication adherence, and the opportunity for IoT-connected dispensing technology to bridge that gap with real-time, verified adherence data.",
    ],
    category: "partnership",
    featured: false,
  },
  {
    slug: "nih-adherence-study-350-participants",
    date: "2022",
    title: "NIH Adherence Study: 48% to 80%+ Improvement Across 350+ Participants",
    excerpt:
      "Multi-site behavioral health study demonstrates dramatic adherence improvements using iRxReminder\u2019s platform. Results published in peer-reviewed journal.",
    body: [
      "The completed NIH-funded adherence improvement study across behavioral health networks has delivered remarkable results: medication adherence improved from 48% to over 80% among 350+ participants using the iRxReminder platform.",
      "The multi-site study enrolled participants across multiple behavioral health networks, making the results particularly significant. Behavioral health patients often face additional adherence challenges including cognitive side effects from medications, complex multi-drug regimens, and limited access to consistent follow-up care.",
      "The study results have been published in the Journal of Medical Internet Research (JMIR), one of the leading peer-reviewed journals in digital health. The publication adds to iRxReminder\u2019s growing evidence base and provides healthcare decision-makers with peer-reviewed data to support adoption decisions.",
      "These results represent one of the largest adherence improvements documented in a controlled study of medication monitoring technology, validating iRxReminder\u2019s approach of combining controlled dispensing with real-time monitoring and targeted interventions.",
    ],
    category: "study",
    featured: true,
  },
  {
    slug: "university-michigan-cancer-center-trial",
    date: "2022",
    title: "University of Michigan Cancer Center: 25% Fewer Clinical Trial Dropouts",
    excerpt:
      "HOPA-funded oncology study demonstrates iRxReminder\u2019s ability to reduce clinical trial attrition, saving research time and cost.",
    body: [
      "A HOPA-funded study at the University of Michigan Cancer Center has demonstrated that iRxReminder reduces clinical trial dropouts by 25% in oncology populations. The study focused on oral chemotherapy adherence, where non-compliance can invalidate trial data and compromise patient outcomes.",
      "Clinical trial dropout is one of the most expensive problems in pharmaceutical research, with each dropout costing sponsors an estimated $20,000\u2013$40,000 in sunk recruitment and enrollment costs. By providing real-time adherence monitoring, iRxReminder enables research teams to identify and support struggling participants before they disengage from the study.",
      "The University of Michigan Cancer Center is one of the top-ranked cancer research institutions in the United States. The successful collaboration validates iRxReminder\u2019s applicability in complex oncology research settings.",
    ],
    category: "study",
    featured: false,
  },
  {
    slug: "fda-class-ii-clearance-progress",
    date: "2023",
    title: "iRxReminder Advances FDA Class II Clearance Under Dr. Fred Ma\u2019s Leadership",
    excerpt:
      "COO Fred Ma, MD PhD, with 1,200+ clinical trials and 200+ FDA submissions, leads the regulatory pathway for iRxReminder\u2019s smart dispensing platform.",
    body: [
      "iRxReminder continues to advance toward FDA Class II clearance for its iLidRx smart dispensing pod, under the leadership of Chief Operating Officer Fred Ma, MD, PhD. Dr. Ma brings an extraordinary depth of regulatory experience, having overseen 1,200+ clinical trials and guided 200+ drugs and medical devices through FDA validation and clearance.",
      "The FDA clearance pathway positions iRxReminder\u2019s hardware as a regulated medical device, providing an additional layer of credibility and trust for institutional buyers. FDA clearance is particularly important for health system purchasers who require regulatory compliance for all patient-facing technology in their facilities.",
      "Dr. Ma\u2019s systematic approach to the regulatory process includes comprehensive documentation, preclinical testing, and a pre-submission engagement strategy with FDA reviewers. The timeline targets submission within 2024, with clearance expected to follow standard review timelines.",
    ],
    category: "leadership",
    featured: false,
  },
  {
    slug: "rpm-rtm-reimbursement-model-validated",
    date: "2023",
    title: "RPM/RTM Reimbursement Model Validated: 3x Cost Recovery for Health Systems",
    excerpt:
      "iRxReminder\u2019s remote monitoring platform qualifies for RPM and RTM billing codes, enabling health systems to generate reimbursable revenue that covers platform costs three times over.",
    body: [
      "iRxReminder has validated its reimbursement model through CMS RPM (Remote Patient Monitoring) and RTM (Remote Therapeutic Monitoring) billing codes, demonstrating that health systems can generate approximately 3x cost recovery when deploying the platform.",
      "The reimbursement model transforms iRxReminder from a cost center to a revenue-generating program for health systems. Using standard RPM/RTM billing codes (CPT 99453, 99454, 99457, 99458), health systems can bill for device setup, data transmission, and clinical intervention time \u2014 all of which are built into the iRxReminder workflow.",
      "For a typical deployment of 500 patients over 6 months with a reimbursement rate of $135/patient/month, health systems can expect approximately $405,000 in reimbursable revenue against approximately $150,000 in platform costs. The ROI Calculator on the iRxReminder website allows health system administrators to model their specific scenario.",
      "This financial model is particularly attractive for CFOs evaluating new technology investments, as the program generates positive ROI from the first month of billing rather than requiring a multi-year payback period.",
    ],
    category: "partnership",
    featured: false,
  },
  {
    slug: "memory-magic-program-500k-impact",
    date: "2020",
    title: "Memory Magic Program Reaches 500,000+ Older Adults Across 2,400 Facilities",
    excerpt:
      "Dr. Sterns\u2019 foundational research program on cognitive engagement for older adults scales to 7 countries, informing iRxReminder\u2019s approach to technology for aging populations.",
    body: [
      "The Memory Magic Program, created by Dr. Anthony Sterns as part of his gerontechnology research, has reached over 500,000 older adults across 2,400+ facilities in 7 countries. The program uses interactive technology to support cognitive engagement and independence in aging populations.",
      "While Memory Magic is a distinct program from iRxReminder, the research insights from deploying technology with hundreds of thousands of older adults directly informed the design of iRxReminder\u2019s platform. Key learnings include the importance of simple gestures over complex interfaces, the need for caregiver integration, and the value of real-time data for healthcare teams managing remote populations.",
      "The scale of Memory Magic\u2019s deployment demonstrates Dr. Sterns\u2019 unique understanding of how technology can support older adults at scale \u2014 a critical competitive advantage as iRxReminder targets the aging population market, which is expected to double by 2030.",
    ],
    category: "partnership",
    featured: false,
  },
  {
    slug: "12-us-patents-protecting-platform",
    date: "2023",
    title: "iRxReminder\u2019s IP Portfolio Reaches 12 U.S. Patents",
    excerpt:
      "Comprehensive patent portfolio protects core technology including smart dispensing mechanics, gesture-based activation, real-time monitoring architecture, and AI-powered diagnostics.",
    body: [
      "iRxReminder\u2019s intellectual property portfolio has grown to 12 issued U.S. patents, creating a comprehensive defensive moat around the company\u2019s core technology. The patents cover smart dispensing mechanics, the patented Hold, Place, and Tilt\u2122 gesture activation system, real-time adherence monitoring architecture, and AI-powered diagnostic capabilities.",
      "The breadth of the patent portfolio means that competitors cannot replicate iRxReminder\u2019s end-to-end approach without licensing or designing around protected innovations. This IP protection is particularly valuable as larger healthcare companies begin entering the medication adherence monitoring space.",
      "For institutional buyers, the patent portfolio signals technology maturity and long-term viability \u2014 important factors when health systems evaluate vendors for multi-year deployments involving patient data and clinical workflows.",
    ],
    category: "award",
    featured: false,
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, count: number = 3): NewsArticle[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return newsArticles.slice(0, count);

  return newsArticles
    .filter((a) => a.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, count);
}
