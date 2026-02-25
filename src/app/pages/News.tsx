import { Link } from "react-router";
import { Button } from "../components/ui/button";
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
    title: "iRxReminder Receives $871,153 NIH Grant for AI Telehealth Research",
    excerpt:
      "NIMH-funded grant to advance medication monitoring technology and AI-powered Tardive Dyskinesia detection for behavioral health applications. This federal funding validates iRxReminder\u2019s clinical approach and research methodology.",
    featured: true,
  },
  {
    date: "August 2023",
    title: "First Patients Enrolled in NIMH-funded TDtect\u2122 Diagnostic Study",
    excerpt:
      "Groundbreaking study for Tardive Dyskinesia detection and monitoring begins enrollment. TDtect\u2122 represents iRxReminder\u2019s expansion into AI-powered diagnostic tools for behavioral health.",
  },
  {
    date: "September 2022",
    title: "Owen Muir M.D. Joins as Chief Medical Officer",
    excerpt:
      "Board-certified Psychiatrist and Mayo Clinic faculty member brings expertise in behavioral health and telehealth to leadership team.",
  },
  {
    date: "October 2022",
    title: "William Yuan Appointed Chief Strategy Officer",
    excerpt:
      "Former CEO of nGloballink joins leadership team. Led previous company from inception to $310M public company with successful IPO and acquisitions delivering 100x ROI.",
  },
  {
    date: "2022",
    title: "NewChip Accelerator Graduation",
    excerpt:
      "iRxReminder successfully completes NewChip Accelerator program, one of the nation\u2019s leading startup accelerators.",
  },
  {
    date: "2021",
    title: "OCEAN Accelerator Graduation",
    excerpt:
      "Completed OCEAN Accelerator program backed by 11 Tribes venture fund, focused on healthcare innovation.",
  },
  {
    date: "2021",
    title: "Whatif! Venture Fellowship Cohort 4",
    excerpt:
      "Selected for prestigious Whatif! Fellowship program supporting high-growth healthcare startups.",
  },
  {
    date: "2021",
    title: "BIA Finals Selection",
    excerpt:
      "Advanced to BIA Finals, recognizing innovation in healthcare technology and business model.",
  },
  {
    date: "2019",
    title: "Winner: AMIA PitchIT 2019 \u2014 $12,500 Prize",
    excerpt:
      "iRxReminder wins American Medical Informatics Association\u2019s national PitchIT competition, receiving $12,500 grand prize. This prestigious award recognizes iRxReminder\u2019s potential to transform medication adherence through technology innovation.",
    featured: true,
  },
  {
    date: "2019",
    title: "Named Best Tech Startup in Cleveland 2020",
    excerpt:
      "Recognized as the leading technology startup in Cleveland, validating market traction and innovation.",
  },
  {
    date: "2017",
    title: "AARP/MedCity News Names Anthony Sterns '50+ Innovation Leader'",
    excerpt:
      "Founder and CEO Dr. Anthony Sterns recognized nationally for leadership in aging and technology innovation.",
  },
  {
    date: "2013",
    title: "Dr. Sterns Keynotes GSA and CHPA National Summit",
    excerpt:
      "Invited as keynote speaker to Gerontological Society of America and Consumer Healthcare Products Association national conferences.",
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
              Key achievements, awards, and announcements from iRxReminder
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
              Ready to See iRxReminder in Action?
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Learn how our clinically validated platform can transform medication adherence for your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/platform">Explore the Platform</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
