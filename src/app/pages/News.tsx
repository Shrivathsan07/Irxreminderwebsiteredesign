import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, type: "spring", stiffness: 300, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const newsItems = [
  {
    date: "March 2023",
    title: "iRxReminder Receives $871K NIH Grant for AI-Powered Behavioral Health Monitoring",
    excerpt:
      "NIMH-funded grant supports TDtect\u2122 study for Tardive Dyskinesia detection and medication monitoring. Federal backing validates clinical approach and positions iRxReminder at the forefront of behavioral health technology.",
    featured: true,
  },
  {
    date: "August 2023",
    title: "TDtect\u2122 Study Enrolls First Patients, Advancing AI Diagnostics in Behavioral Health",
    excerpt:
      "Groundbreaking NIMH-funded study begins enrollment for Tardive Dyskinesia detection and remote monitoring. Marks iRxReminder\u2019s expansion into AI-powered diagnostics.",
  },
  {
    date: "September 2022",
    title: "Owen Muir M.D. Joins as CMO, Strengthening Clinical Leadership",
    excerpt:
      "Board-certified Psychiatrist and Mayo Clinic faculty member brings behavioral health and telehealth expertise to guide clinical validation and product development.",
  },
  {
    date: "October 2022",
    title: "William Yuan Appointed CSO to Drive Strategic Growth",
    excerpt:
      "Former CEO of nGloballink\u2009\u2014\u2009led company from inception to $310M public entity with 100x ROI exits\u2009\u2014\u2009joins to accelerate market expansion.",
  },
  {
    date: "2022",
    title: "iRxReminder Graduates NewChip Accelerator, Continues Investor Relations Push",
    excerpt:
      "Completed one of the nation\u2019s leading startup accelerators, building commercial momentum and strategic partnerships.",
  },
  {
    date: "2021",
    title: "OCEAN Accelerator Graduation Backed by 11 Tribes Venture Fund",
    excerpt:
      "Healthcare-focused accelerator program completed, adding institutional support to iRxReminder\u2019s growth trajectory.",
  },
  {
    date: "2021",
    title: "Selected for Whatif! Venture Fellowship Cohort 4",
    excerpt:
      "Competitive fellowship program supporting high-growth healthcare startups selects iRxReminder.",
  },
  {
    date: "2021",
    title: "iRxReminder Advances to BIA Finals",
    excerpt:
      "Business innovation recognized at national level, validating healthcare technology model and market opportunity.",
  },
  {
    date: "2019",
    title: "AMIA PitchIT Grand Prize: $12,500 for Medication Adherence Innovation",
    excerpt:
      "American Medical Informatics Association\u2019s national competition awards iRxReminder the grand prize, recognizing its potential to transform how medication adherence is measured and managed.",
    featured: true,
  },
  {
    date: "2019",
    title: "Named Best Tech Startup in Cleveland",
    excerpt:
      "Regional recognition validates market traction and technology innovation in the Cleveland healthcare ecosystem.",
  },
  {
    date: "2017",
    title: "Anthony Sterns Named AARP/MedCity \u201850+ Innovation Leader\u2019",
    excerpt:
      "National recognition for leadership in aging and technology innovation, highlighting iRxReminder\u2019s impact on older adult populations.",
  },
  {
    date: "2013",
    title: "Dr. Sterns Delivers Keynotes at GSA and CHPA National Summits",
    excerpt:
      "Invited keynote presentations at Gerontological Society of America and Consumer Healthcare Products Association. 100+ international presentations on medication adherence technology.",
  },
];

export function News() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Updates
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              News &amp; Milestones
            </h1>
            <p className="text-xl text-blue-100/80">
              Grants, studies, partnerships, and recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Items */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <FadeUp key={index} delay={index * 0.05}>
                <article
                  className={`p-8 rounded-2xl border transition-[box-shadow] ${
                    item.featured
                      ? "bg-[#0891b2]/5 border-[#0891b2]/20 shadow-[0_1px_3px_rgba(8,145,178,0.06),0_4px_12px_rgba(8,145,178,0.08)]"
                      : "bg-white border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.04)] hover:shadow-[0_1px_3px_rgba(30,58,138,0.06),0_8px_20px_rgba(30,58,138,0.08)]"
                  }`}
                >
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    {item.date}
                  </div>
                  <h2
                    className={`text-xl font-bold mb-3 tracking-tight ${
                      item.featured ? "text-[#1e3a8a]" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">{item.excerpt}</p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Schedule a pilot configured for your specific use case
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/platform">Explore the Platform</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
