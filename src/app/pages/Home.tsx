import { Link } from "react-router";
import {
  Shield,
  ArrowRight,
  Activity,
  Users,
  Zap,
  Award,
  FileCheck,
  FlaskConical,
  Pill,
  Building2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";

function Section({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

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

export function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ======= SECTION 1: HERO — What the hero gets ======= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        {/* Single radial accent */}
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 300, damping: 30 }}
            >
              <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-6">
                Real-Time Medication Monitoring
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Know when your patients
                <br />
                take their medications.
                <br />
                <span className="text-[#0891b2]">Act when they don&rsquo;t.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-10 max-w-2xl">
                iRxReminder connects healthcare teams to their patients' daily
                medication behavior through smart dispensing, real-time monitoring,
                and targeted intervention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
              >
                <Link to="/evidence">See the Research</Link>
              </Button>
            </motion.div>

            {/* Trust mini-bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center gap-6 text-sm text-blue-200/70"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#0891b2]" />
                NIH-Funded Research
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0891b2]" />
                12 US Patents
              </span>
              <span className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#0891b2]" />
                Clinically Validated
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======= SECTION 2: THE STAKES — The problem ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Crisis
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-8 tracking-tight">
              Healthcare&rsquo;s Most Expensive
              <br className="hidden md:block" /> Unsolved Problem
            </h2>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="text-center mb-12">
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
                700,000 ER visits. 125,000 deaths. $300 billion in avoidable
                costs. Every year. Medication non-adherence isn&rsquo;t a minor
                inconvenience&nbsp;&mdash; it&rsquo;s a systemic failure.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Current tools either nag patients into ignoring them or count
                bottle openings without knowing if the right dose was taken.
              </p>
            </div>
          </FadeUp>

          {/* AMA Blockquote */}
          <FadeUp delay={0.15}>
            <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10">
              <div className="absolute top-6 left-8 text-[#1e3a8a]/10 text-8xl font-serif leading-none">&ldquo;</div>
              <blockquote className="relative text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 pl-4 md:pl-8">
                Poor medication adherence takes the lives of 125,000 Americans
                annually, and costs the healthcare system as much as $300
                billion a year.
              </blockquote>
              <div className="pl-4 md:pl-8 text-gray-500 font-medium">
                &mdash; American Medical Association
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 3: THE GUIDE — Position iRx as the answer ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Answer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight">
              Built on a Decade of NIH-Funded Research
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              iRxReminder is the only platform that controls dispensing,
              monitors adherence, and connects the healthcare team&nbsp;&mdash;
              all in real time.
            </p>
          </FadeUp>

          {/* Trust signal logos */}
          <FadeUp delay={0.1}>
            <div className="text-center">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-6">
                Research &amp; Institutional Partners
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-500 font-medium">
                {[
                  "University of Michigan",
                  "Harvard University",
                  "Brown University",
                  "Kent State University",
                  "MetroHealth",
                  "NIH / NIA / NIMH",
                ].map((name) => (
                  <span key={name} className="text-sm whitespace-nowrap">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 4: THE PLAN — 3 steps ======= */}
      <Section id="how-it-works" className="py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Three Steps to Real-Time Visibility
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                num: "1",
                title: "Configure",
                desc: "Set up regimens, schedules, and patient education in the Control Center. We configure the platform for your use case.",
                color: "#1e3a8a",
              },
              {
                num: "2",
                title: "Deploy",
                desc: "Pharmacy loads medications into pods. Patients use the Hold, Place, and Tilt\u2122 gesture to dispense. No sorting. No nagging.",
                color: "#0891b2",
              },
              {
                num: "3",
                title: "Monitor",
                desc: "Every dose taken or missed is reported in real time. See who\u2019s on track, who needs help, and intervene before a crisis\u2009\u2014\u2009not after.",
                color: "#1e3a8a",
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={0.1 + i * 0.1}>
                <div className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-bold text-xl"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-[#0891b2] font-semibold hover:gap-3 transition-[gap]"
            >
              See the full platform <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 5: WHO IT'S FOR — Solution area cards ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Who It&rsquo;s For
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              One Platform. Four Use Cases.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: FlaskConical,
                title: "Clinical Research",
                problem: "Participant dropout costs studies 30% more than planned.",
                outcome: "iRxReminder gives researchers real-time compliance data\u2009\u2014\u2009so you finish on schedule with clean data.",
                to: "/solutions",
                color: "#1e3a8a",
              },
              {
                icon: Activity,
                title: "Behavioral Health",
                problem: "Clients leave inpatient care stabilized. Many stop taking medications within weeks.",
                outcome: "Real-time dose tracking lets your team see non-adherence the day it starts, not the day the patient ends up in the ER.",
                to: "/solutions#mental-health",
                color: "#0891b2",
              },
              {
                icon: Pill,
                title: "Pharmacies",
                problem: "You fill prescriptions but have no visibility once the patient leaves.",
                outcome: "Build lasting relationships through shared adherence data and a service your competitors can\u2019t match.",
                to: "/solutions",
                color: "#1e3a8a",
              },
              {
                icon: Building2,
                title: "Health Systems",
                problem: "Readmissions erode bundled payment margins. Post-discharge visibility is near zero.",
                outcome: "Track medication behavior after discharge. Reduce readmissions. Increase bundled payment margins.",
                to: "/solutions#aging",
                color: "#0891b2",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={0.1 + i * 0.08}>
                <Link
                  to={card.to}
                  className="group block bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1"
                >
                  <card.icon className="w-8 h-8 mb-5" style={{ color: card.color }} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 mb-3">{card.problem}</p>
                  <p className="text-gray-700 font-medium leading-relaxed mb-6">
                    {card.outcome}
                  </p>
                  <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= SECTION 6: EVIDENCE — Social proof ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight">
              Clinically Validated. Federally Funded.
            </h2>
            <p className="text-xl text-blue-100/80 text-center mb-16 max-w-2xl mx-auto">
              Participants using iRxReminder achieved high adherence&nbsp;&mdash;
              even those with cognitive impairments.
            </p>
          </FadeUp>

          {/* Stats grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "83%", label: "Adherence rate in clinical trials", color: "#0891b2" },
              { stat: "25%", label: "Fewer clinical trial dropouts", color: "#ffffff" },
              { stat: "$871K", label: "NIH SBIR Grant", color: "#0891b2" },
              { stat: "12", label: "US patents protecting the technology", color: "#ffffff" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div
                    className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-blue-200/70 text-sm">{item.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Research partners */}
          <FadeUp delay={0.3}>
            <div className="text-center">
              <p className="text-blue-200/60 text-sm uppercase tracking-widest mb-6">
                Research Partners
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-blue-200/80 font-medium">
                {[
                  "Harvard University",
                  "MetroHealth",
                  "University of Michigan",
                  "Kent State",
                  "Brown University",
                  "Butler Hospital",
                ].map((name) => (
                  <span key={name} className="text-sm whitespace-nowrap">
                    {name}
                  </span>
                ))}
              </div>
              <Link
                to="/evidence"
                className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-8 hover:gap-3 transition-[gap]"
              >
                Read the evidence <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 7: THE BUSINESS CASE ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              ROI
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Outcomes You Can Measure
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                stat: "3\u00d7",
                label: "Cost Recovery",
                desc: "Return via RPM/RTM billing codes for health systems",
                color: "#0891b2",
              },
              {
                stat: "83%",
                label: "Adherence",
                desc: "Validated across multiple clinical trials and patient populations",
                color: "#1e3a8a",
              },
              {
                stat: "25%",
                label: "Fewer Dropouts",
                desc: "Reduction in clinical trial dropouts at University of Michigan",
                color: "#0891b2",
              },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.1}>
                <div className="text-center p-8 md:p-10 rounded-2xl bg-[#f8fafc] border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                  <div
                    className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight"
                    style={{ color: item.color }}
                  >
                    {item.stat}
                  </div>
                  <div className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    {item.label}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
            >
              <Link to="/roi-calculator">
                Calculate Your ROI
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 8: STAKES REMINDER ======= */}
      <Section className="py-16 md:py-20 bg-[#f8fafc]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              The population of older adults is doubling by 2030.
              The adherence problem isn&rsquo;t going away. The question is
              whether your organization has the tools to manage it.
            </p>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 9: FINAL CTA ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready to see what real-time
              <br />
              medication monitoring <span className="text-[#0891b2]">looks like?</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            <p className="text-blue-200/60 text-sm">
              Not ready to talk?{" "}
              <Link to="/evidence" className="text-[#0891b2] hover:underline font-medium">
                Download our research brief
              </Link>{" "}
              for your team.
            </p>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
