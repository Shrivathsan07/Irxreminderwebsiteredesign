import { Link } from "react-router";
import {
  Shield,
  ArrowRight,
  Activity,
  Users,
  Zap,
  Award,
  FileCheck,
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
      {/* ======= SECTION 1: MISSION HERO ======= */}
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
                Safe. Connected. Reimbursable.
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Monitor. Remind.
                <br />
                <span className="text-[#0891b2]">Connect.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed mb-10 max-w-2xl">
                iRxReminder is a smart medication management system designed to
                improve adherence, reduce hospitalizations, and support
                independent living — for patients who need it most.
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
                variant="outline"
                className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
              >
                <a href="#how-it-works">
                  See How It Works
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
              >
                <Link to="/platform">Explore the Platform</Link>
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
                NIH-Funded
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

      {/* ======= SECTION 2: THE PROBLEM (AMA BLOCKQUOTE) ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Problem
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              A Crisis Hiding in Plain Sight
            </h2>
          </FadeUp>

          {/* AMA Blockquote */}
          <FadeUp delay={0.1}>
            <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10">
              <div className="absolute top-6 left-8 text-[#1e3a8a]/10 text-8xl font-serif leading-none">&ldquo;</div>
              <blockquote className="relative text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 pl-4 md:pl-8">
                Medication non-adherence causes approximately 125,000 deaths and
                costs the U.S. healthcare system up to $300 billion annually.
              </blockquote>
              <div className="pl-4 md:pl-8 text-gray-500 font-medium">
                — American Medical Association
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 3: WHO WE SERVE ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Who We Serve
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Designed for Those Who Need It Most
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mental & Behavioral Health */}
            <FadeUp delay={0.1}>
              <Link
                to="/solutions#mental-health"
                className="group block bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1"
              >
                <Activity className="w-10 h-10 text-[#1e3a8a] mb-5" />
                <div className="text-5xl font-extrabold text-[#1e3a8a] mb-3 tracking-tight">
                  19M+
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Mental &amp; Behavioral Health
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Americans with serious mental illness. Medication adherence is
                  critical for stability — missed doses can trigger crises, ER
                  visits, and readmissions.
                </p>
                <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </FadeUp>

            {/* Aging & Chronic Care */}
            <FadeUp delay={0.2}>
              <Link
                to="/solutions#aging"
                className="group block bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1"
              >
                <Users className="w-10 h-10 text-[#0891b2] mb-5" />
                <div className="text-5xl font-extrabold text-[#0891b2] mb-3 tracking-tight">
                  65M+
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Aging &amp; Chronic Care
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Older adults managing multiple medications. Polypharmacy,
                  cognitive decline, and care coordination gaps make adherence a
                  daily challenge.
                </p>
                <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ======= SECTION 4: HOW IT WORKS ======= */}
      <Section id="how-it-works" className="py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Solution
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-4 tracking-tight">
              One Integrated Platform
            </h2>
            <p className="text-xl text-gray-600 text-center mb-6 max-w-3xl mx-auto leading-relaxed">
              The only system that combines physical medication control with
              digital monitoring and real-time provider alerts.
            </p>
          </FadeUp>

          {/* Differentiator callout */}
          <FadeUp delay={0.1}>
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <div className="inline-flex items-center gap-2 bg-[#0891b2]/10 text-[#0891b2] px-4 py-2 rounded-full text-sm font-semibold">
                <Zap className="w-4 h-4" />
                No other system physically controls medication access
              </div>
            </div>
          </FadeUp>

          {/* How it works steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                title: "Pharmacy Fills the Pod",
                desc: "Pharmacist loads up to 90 days of a single medication. Zero sorting errors.",
                color: "#1e3a8a",
              },
              {
                num: "2",
                title: "Patient Dispenses at Home",
                desc: "Hold, Place, and Tilt\u2122 gesture ensures the right dose at the right time.",
                color: "#0891b2",
              },
              {
                num: "3",
                title: "Data Flows in Real Time",
                desc: "Every dose is automatically recorded and shared with the care team.",
                color: "#1e3a8a",
              },
              {
                num: "4",
                title: "Care Team Intervenes",
                desc: "Clinicians see real-time dashboards and act before problems escalate.",
                color: "#0891b2",
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={0.1 + i * 0.1}>
                <div className="text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      {/* ======= SECTION 5: PROVEN RESULTS ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight">
              Clinically Validated. Federally Funded.
            </h2>
          </FadeUp>

          {/* Central stat */}
          <FadeUp delay={0.1}>
            <div className="text-center mb-16">
              <div className="text-7xl md:text-8xl font-extrabold text-white tracking-tight mb-4">
                83<span className="text-[#0891b2]">%</span>
              </div>
              <p className="text-xl text-blue-200">
                adherence rate achieved in clinical trials — up from 48%
              </p>
            </div>
          </FadeUp>

          {/* Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: Shield, label: "NIH-Funded", sub: "$871K SBIR Grant" },
              { icon: Award, label: "12 US Patents", sub: "Defensive IP Moat" },
              { icon: FileCheck, label: "Clinically Validated", sub: "350+ Trial Participants" },
            ].map((badge, i) => (
              <FadeUp key={badge.label} delay={0.15 + i * 0.1}>
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <badge.icon className="w-8 h-8 text-[#0891b2] mx-auto mb-3" />
                  <div className="text-white font-bold text-lg mb-1">
                    {badge.label}
                  </div>
                  <div className="text-blue-200/70 text-sm">{badge.sub}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* University partners */}
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
                See the full evidence <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 6: THE BUSINESS CASE ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Business Case
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Measurable Outcomes That Matter
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                stat: "3×",
                label: "ROI",
                desc: "Return on investment via RPM/RTM billing codes for health systems",
                color: "#0891b2",
              },
              {
                stat: "83%",
                label: "Adherence",
                desc: "Medication adherence rate validated across multiple clinical trials",
                color: "#1e3a8a",
              },
              {
                stat: "25%",
                label: "Fewer Dropouts",
                desc: "Reduction in clinical trial dropouts demonstrated at University of Michigan",
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

      {/* ======= SECTION 7: IMPACT CLOSE ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              We&rsquo;re not just saving costs —
              <br />
              we&rsquo;re <span className="text-[#0891b2]">saving lives</span>.
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              iRxReminder helps reduce ER visits, prevent decline, and keep
              people functioning independently. This creates real value for
              healthcare systems, healthcare providers, and society.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </Section>
    </div>
  );
}
