import { Link } from "react-router";
import {
  Shield,
  ArrowRight,
  Activity,
  Zap,
  Award,
  FileCheck,
  FlaskConical,
  Pill,
  Building2,
  AlertTriangle,
  Eye,
  Settings,
  Radio,
  Quote,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { FadeUp, Section, CountUp } from "@/app/components/animations";
import { LogoTicker } from "@/app/components/LogoTicker";
import { GrainTexture } from "@/app/components/GrainTexture";
import { SplitHero } from "@/app/components/SplitHero";
import { StatCard } from "@/app/components/StatCard";
import { BentoGrid } from "@/app/components/BentoGrid";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";
import { SectionDivider } from "@/app/components/SectionDivider";
import { ComparisonChart } from "@/app/components/ComparisonChart";
import { TimelineTrack } from "@/app/components/TimelineTrack";

/** Product visual for hero */
function DeviceMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-[#0891b2]/10 rounded-3xl blur-[60px]" />
      <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        <img
          src="/images/product/with-phone.jpg"
          alt="iRxReminder pod and mobile app showing real-time medication monitoring"
          className="w-full h-auto"
          loading="eager"
        />
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ======= SECTION 1: HERO — SplitHero ======= */}
      <SplitHero
        label="Real-Time Medication Monitoring"
        headline={
          <>
            Know when your patients
            <br />
            take their medications.
            <br />
            <span className="text-[#0891b2]">Act when they don&rsquo;t.</span>
          </>
        }
        subtitle="iRxReminder connects healthcare teams to their patients' daily medication behavior through smart dispensing, real-time monitoring, and targeted intervention."
        primaryCta={{ label: "Schedule a Pilot", to: "/schedule-pilot" }}
        secondaryCta={{ label: "See the Research", to: "/evidence" }}
        trustItems={[
          { icon: Shield, text: "NIH-Funded Research" },
          { icon: Award, text: "12 US Patents" },
          { icon: FileCheck, text: "Clinically Validated" },
        ]}
        visual={<DeviceMockup />}
      />

      {/* Trust logos bar */}
      <Section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
              Research &amp; Institutional Partners
            </p>
            <LogoTicker variant="light" />
          </div>
        </div>
      </Section>

      {/* ======= SECTION 2: THE STAKES — Bento Problem Grid ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Crisis
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Healthcare&rsquo;s Most Expensive
              <br className="hidden md:block" /> Unsolved Problem
            </h2>
          </FadeUp>

          {/* Lead stat */}
          <FadeUp delay={0.05}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e3a8a]/5 to-[#0891b2]/5 px-6 py-3 rounded-full border border-[#1e3a8a]/10 mb-8">
                <AlertTriangle className="w-5 h-5 text-[#1e3a8a]" />
                <span className="text-lg font-bold text-[#1e3a8a]">
                  <CountUp end={300} prefix="$" suffix="B+" className="font-extrabold" /> lost annually to medication non-adherence
                </span>
              </div>
            </div>
          </FadeUp>

          {/* Bento problem/solution grid */}
          <BentoGrid
            items={[
              {
                stat: "700K",
                title: "ER Visits Per Year",
                description: "Preventable emergency room visits caused by patients not taking medications as prescribed.",
                span: "large",
                color: "#1e3a8a",
                icon: AlertTriangle,
              },
              {
                stat: "125K",
                title: "Deaths Annually",
                description: "Lives lost each year due to medication non-adherence — more than car accidents.",
                color: "#0891b2",
                icon: Activity,
              },
              {
                title: "Current Tools Fail",
                description: "Pill organizers cause sorting errors. Bottle caps count openings, not doses. Text reminders get ignored within weeks.",
                color: "#1e3a8a",
                icon: Zap,
              },
              {
                title: "iRxReminder Is Different",
                description: "Controlled dispensing. Real-time monitoring. Automatic dose recording. The only platform that verifies what was taken, not just what was opened.",
                color: "#0891b2",
                icon: Shield,
              },
              {
                stat: "83%",
                title: "Validated Adherence",
                description: "Clinically proven across 350+ participants in NIH-funded behavioral health trials.",
                color: "#0891b2",
                icon: FileCheck,
              },
            ]}
          />

          {/* AMA Blockquote */}
          <FadeUp delay={0.2}>
            <div className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-8 md:p-12 rounded-2xl border border-[#1e3a8a]/10 mt-12">
              <Quote className="w-8 h-8 text-[#1e3a8a]/10 absolute top-6 left-8" />
              <blockquote className="relative text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 pl-4 md:pl-8">
                &ldquo;Poor medication adherence takes the lives of 125,000 Americans
                annually, and costs the healthcare system as much as $300
                billion a year.&rdquo;
              </blockquote>
              <div className="pl-4 md:pl-8 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#0891b2]" />
                <span className="text-[#1e3a8a] font-semibold">American Medical Association</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="right" />

      {/* ======= SECTION 3: THE GUIDE — Research credibility ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Answer
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built on a Decade of NIH-Funded Research
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              iRxReminder is the only platform that controls dispensing,
              monitors adherence, and connects the healthcare team&nbsp;&mdash;
              all in real time.
            </p>
          </FadeUp>

          {/* Trust badges */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <FloatingBadgeGroup
                badges={[
                  { icon: Shield, text: "NIH-Funded" },
                  { icon: FileCheck, text: "Clinically Validated" },
                  { icon: Award, text: "12 US Patents" },
                ]}
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="text-center">
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-6">
                Research &amp; Institutional Partners
              </p>
              <LogoTicker variant="light" />
            </div>
          </FadeUp>
        </div>
      </Section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="left" />

      {/* ======= SECTION 4: HOW IT WORKS — Horizontal Timeline ======= */}
      <Section id="how-it-works" className="py-24 md:py-32 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              How It Works
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three Steps to Real-Time Visibility
            </h2>
          </FadeUp>

          <TimelineTrack
            orientation="horizontal"
            items={[
              {
                label: "Step 1",
                title: "Configure",
                description: "Set up regimens, schedules, and patient education in the Control Center. We configure the platform for your use case.",
                icon: Settings,
                color: "#1e3a8a",
              },
              {
                label: "Step 2",
                title: "Deploy",
                description: "Pharmacy loads medications into pods. Patients use the Hold, Place, and Tilt\u2122 gesture to dispense. No sorting. No nagging.",
                icon: Radio,
                color: "#0891b2",
              },
              {
                label: "Step 3",
                title: "Monitor",
                description: "Every dose taken or missed is reported in real time. See who\u2019s on track, who needs help, and intervene before a crisis.",
                icon: Eye,
                color: "#1e3a8a",
              },
            ]}
          />

          <FadeUp delay={0.4} className="text-center mt-12">
            <Link
              to="/platform"
              className="inline-flex items-center gap-2 text-[#0891b2] font-semibold hover:gap-3 transition-[gap] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 focus-visible:ring-offset-2 rounded-sm"
            >
              See the full platform <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>
        </div>
      </Section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="right" />

      {/* ======= SECTION 5: WHO IT'S FOR — Solution area cards ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Who It&rsquo;s For
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One Platform. Four Use Cases.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: FlaskConical,
                title: "Clinical Research",
                problem: "Participant dropout costs studies 30% more than planned.",
                outcome: "iRxReminder gives researchers real-time compliance data\u2009\u2014\u2009so you finish on schedule with clean data.",
                to: "/solutions",
                color: "#1e3a8a",
                stat: "25% fewer dropouts",
              },
              {
                icon: Activity,
                title: "Behavioral Health",
                problem: "Clients leave inpatient care stabilized. Many stop taking medications within weeks.",
                outcome: "Real-time dose tracking lets your team see non-adherence the day it starts, not the day the patient ends up in the ER.",
                to: "/solutions#mental-health",
                color: "#0891b2",
                stat: "48% → 80%+ adherence",
              },
              {
                icon: Pill,
                title: "Pharmacies",
                problem: "You fill prescriptions but have no visibility once the patient leaves.",
                outcome: "Build lasting relationships through shared adherence data and a service your competitors can\u2019t match.",
                to: "/solutions",
                color: "#1e3a8a",
                stat: "90-day pod fills",
              },
              {
                icon: Building2,
                title: "Health Systems",
                problem: "Readmissions erode bundled payment margins. Post-discharge visibility is near zero.",
                outcome: "Track medication behavior after discharge. Reduce readmissions. Increase bundled payment margins.",
                to: "/solutions#aging",
                color: "#0891b2",
                stat: "3× ROI via RPM/RTM",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={0.1 + i * 0.08}>
                <Link
                  to={card.to}
                  className="group block bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${card.color}10` }}
                    >
                      <card.icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: card.color }} />
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${card.color}08`, color: card.color }}
                    >
                      {card.stat}
                    </span>
                  </div>
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

      {/* ======= SECTION 6: OUTCOMES — Dark stat band with StatCards ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#0891b2]/12 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#0891b2]/8 rounded-full blur-[100px]" />
        <GrainTexture opacity={0.04} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Proven Results
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Clinically Validated. Federally Funded.
            </h2>
            <p className="text-xl text-blue-200 text-center mb-4 max-w-2xl mx-auto">
              Participants using iRxReminder achieved high adherence&nbsp;&mdash;
              even those with cognitive impairments.
            </p>
          </FadeUp>

          {/* Trust badges */}
          <FadeUp delay={0.05}>
            <div className="flex justify-center mb-12">
              <FloatingBadgeGroup
                variant="glass"
                badges={[
                  { icon: Shield, text: "NIH-Funded" },
                  { icon: Award, text: "12 US Patents" },
                ]}
              />
            </div>
          </FadeUp>

          {/* Stats grid with glass morphism */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { end: 83, suffix: "%", label: "Adherence Rate", description: "In clinical trials", color: "#0891b2" },
              { end: 25, suffix: "%", label: "Fewer Dropouts", description: "Clinical trial retention", color: "#ffffff" },
              { end: 871, prefix: "$", suffix: "K", label: "NIH Grant", description: "SBIR funding", color: "#0891b2" },
              { end: 12, label: "US Patents", description: "Protecting technology", color: "#ffffff" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                <StatCard {...item} variant="glass" />
              </FadeUp>
            ))}
          </div>

          {/* Research partners */}
          <FadeUp delay={0.3}>
            <div className="text-center">
              <p className="text-blue-200 text-sm uppercase tracking-widest mb-6">
                Research Partners
              </p>
              <LogoTicker variant="dark" />
              <Link
                to="/evidence"
                className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-8 hover:gap-3 transition-[gap] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152c6e] rounded-sm"
              >
                Read the evidence <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 7: SOCIAL PROOF — Testimonial ======= */}
      <Section className="py-24 md:py-28 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              What Partners Say
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative bg-white p-10 md:p-14 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <Quote className="w-10 h-10 text-[#0891b2]/15 absolute top-8 left-8" />
              <blockquote className="relative text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 pl-4 md:pl-8 italic">
                &ldquo;iRxReminder gave us something we&rsquo;ve never had before: real-time
                visibility into whether our patients are actually taking their
                medications. That changes everything about how we intervene.&rdquo;
              </blockquote>
              <div className="pl-4 md:pl-8 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-[#0891b2]" />
                <div>
                  <span className="text-[#1e3a8a] font-semibold block">Clinical Research Partner</span>
                  <span className="text-gray-500 text-sm">University Medical Center</span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Section>

      {/* ======= SECTION 8: ROI TEASER — ComparisonChart ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1a3070]" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px]" />
        <GrainTexture opacity={0.05} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <FadeUp>
                <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
                  ROI
                </p>
                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Outcomes You
                  <br />
                  Can <span className="text-[#0891b2]">Measure</span>
                </h2>
                <p className="text-lg text-blue-200 leading-relaxed mb-8">
                  See the dramatic difference in medication adherence and clinical
                  trial retention with iRxReminder vs. traditional methods.
                </p>
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

            <FadeUp delay={0.15}>
              <div className="bg-white/[0.12] backdrop-blur-md border border-white/15 rounded-2xl p-8">
                <ComparisonChart
                  variant="glass"
                  metrics={[
                    {
                      label: "Medication Adherence",
                      without: 48,
                      withIrx: 83,
                      format: "percentage",
                    },
                    {
                      label: "Clinical Trial Retention",
                      without: 70,
                      withIrx: 95,
                      format: "percentage",
                    },
                  ]}
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </Section>

      {/* ======= SECTION 9: STAKES REMINDER ======= */}
      <Section className="py-16 md:py-20 bg-white">
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

      {/* ======= SECTION 10: FINAL CTA ======= */}
      <SectionDivider fromColor="#ffffff" toColor="#0f1d3d" direction="right" height={60} />
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/12 rounded-full blur-[120px]" />
        <GrainTexture opacity={0.04} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to see what real-time
              <br />
              medication monitoring <span className="text-[#0891b2]">looks like?</span>
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex justify-center mb-8">
              <FloatingBadgeGroup
                variant="glass"
                badges={[
                  { icon: Shield, text: "NIH-Funded" },
                  { icon: FileCheck, text: "Clinically Validated" },
                  { icon: Award, text: "12 US Patents" },
                ]}
              />
            </div>
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white text-lg px-8 py-6 transition-colors"
              >
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
            <p className="text-blue-200 text-sm">
              Not ready to talk?{" "}
              <Link to="/evidence" className="text-[#0891b2] hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 rounded-sm">
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
