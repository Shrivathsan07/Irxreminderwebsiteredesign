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
  Cpu,
  Eye,
  Settings,
  Radio,
  Quote,
  DollarSign,
  Users,
  BarChart3,
  Receipt,
  CheckCircle2,
  XCircle,
  Minus,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
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
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

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
function DeviceMockup() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* Glow behind device */}
      <div className="absolute -inset-8 bg-[#0891b2]/10 rounded-3xl blur-[60px]" />

      {/* Device frame */}
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Dashboard card */}
        <div className="relative bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="ml-auto text-xs text-white/70 font-mono">iRxControl Center</div>
          </div>
          {/* Mini stat row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Adherence", value: "83%", color: "#0891b2" },
              { label: "Patients", value: "247", color: "#ffffff" },
              { label: "Alerts", value: "3", color: "#f59e0b" },
            ].map((s) => (
              <div key={s.label} className="bg-white/[0.06] rounded-lg p-3 text-center">
                <div className="text-lg font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[10px] text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          {/* Mini chart bars */}
          <div className="space-y-2">
            {[85, 72, 91, 68, 88].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-16 text-[10px] text-white/70 truncate">Patient {i + 1}</div>
                <div className="flex-1 h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${w}%`,
                      background: w > 80 ? "linear-gradient(90deg, #0891b2, #06a7ce)" : w > 70 ? "#f59e0b" : "#ef4444",
                    }}
                  />
                </div>
                <div className="w-8 text-[10px] text-white/80 text-right">{w}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating pod card (offset) */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -bottom-6 -left-8 bg-white/[0.1] backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0891b2]/20 flex items-center justify-center">
              <Cpu className="w-4 h-4 text-[#0891b2]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">iLidRx Pod</div>
              <div className="text-[10px] text-green-400">Dose dispensed</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="bg-white">
      {/* ======= SECTION 1: HERO — SplitHero ======= */}
      {/* TODO: William requested slide 2 imagery (iLidRx pod + doctor/patient photo).
          Replace DeviceMockup with actual product photography when provided. */}
      <SplitHero
        label="AI Clinical Intelligence Platform"
        headline={
          <>
            Saving Lives. Reducing
            <br />
            Healthcare Costs.
          </>
        }
        tagline="Connect. Monitor. Interact."
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

      {/* ======= SECTION 3: THREE-STAKEHOLDER VALUE ======= */}
      <Section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Solution
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Three Stakeholders. One Platform.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "For Patients",
                tagline: "Engaged",
                icon: Pill,
                color: "#0891b2",
                copy: "Hold, Place, and Tilt\u2122 dispensing makes taking medication simple and intuitive. Adherence improved from 48% to over 80% in NIH-funded trials. No sorting. No nagging. Just support when it matters.",
              },
              {
                label: "For Healthcare Providers",
                tagline: "Connected",
                icon: Activity,
                color: "#1e3a8a",
                copy: "Real-time dose data flows to your dashboard the moment a patient takes\u2009\u2014\u2009or misses\u2009\u2014\u2009a dose. Smart alerts let your team intervene early, not after the ER visit.",
              },
              {
                label: "For Healthcare Organizations",
                tagline: "Doing More Good",
                icon: Building2,
                color: "#0891b2",
                copy: "RPM/RTM billing codes generate 3\u00d7 cost recovery. Reduce readmission penalties. Automate compliance documentation. Turn medication monitoring into a revenue-generating program.",
              },
            ].map((card, i) => (
              <FadeUp key={card.label} delay={0.1 + i * 0.08}>
                <div
                  className="bg-white p-8 rounded-2xl border border-gray-100 h-full hover:-translate-y-1 transition-[box-shadow,transform] duration-300"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${card.color}10` }}
                  >
                    <card.icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: card.color }}>
                    {card.label}
                  </p>
                  <h3
                    className="text-2xl font-bold text-[#1e3a8a] mb-4 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {card.tagline}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{card.copy}</p>
                </div>
              </FadeUp>
            ))}
          </div>
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

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="left" />

      {/* ======= SECTION 5B: COMPETITIVE COMPARISON ======= */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Why iRxReminder
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Not All Adherence Tools Are Equal
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              See how iRxReminder compares to the alternatives
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4 pr-4 w-[200px]">
                      Capability
                    </th>
                    <th className="text-center text-sm font-bold text-white uppercase tracking-wider pb-4 px-3 bg-[#0891b2] rounded-t-xl w-[120px]">
                      iRxReminder
                    </th>
                    <th className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Pill Packing
                    </th>
                    <th className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Smart Caps
                    </th>
                    <th className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Text Reminders
                    </th>
                    <th className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider pb-4 px-3 w-[100px]">
                      Organizers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Controlled Dispensing", irx: true, pillPack: false, smartCaps: false, text: false, organizers: false },
                    { feature: "Real-Time Monitoring", irx: true, pillPack: false, smartCaps: "partial", text: false, organizers: false },
                    { feature: "Dose Verification", irx: true, pillPack: false, smartCaps: false, text: false, organizers: false },
                    { feature: "Prevents Double-Dosing", irx: true, pillPack: false, smartCaps: false, text: false, organizers: false },
                    { feature: "RPM/RTM Billable", irx: true, pillPack: false, smartCaps: "partial", text: false, organizers: false },
                    { feature: "Provider Dashboard", irx: true, pillPack: false, smartCaps: "partial", text: false, organizers: false },
                    { feature: "No Patient Sorting", irx: true, pillPack: true, smartCaps: true, text: true, organizers: false },
                    { feature: "AI Clinical Intelligence", irx: true, pillPack: false, smartCaps: false, text: false, organizers: false },
                  ].map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"}>
                      <td className="text-sm font-medium text-gray-700 py-3.5 pr-4 pl-3 rounded-l-lg">{row.feature}</td>
                      {[row.irx, row.pillPack, row.smartCaps, row.text, row.organizers].map((val, j) => (
                        <td key={j} className={`text-center py-3.5 px-3 ${j === 0 ? "bg-[#0891b2]/5" : ""} ${j === 4 ? "rounded-r-lg" : ""}`}>
                          {val === true ? (
                            <CheckCircle2 className={`w-5 h-5 mx-auto ${j === 0 ? "text-[#0891b2]" : "text-green-500"}`} />
                          ) : val === "partial" ? (
                            <Minus className="w-5 h-5 mx-auto text-yellow-500" />
                          ) : (
                            <XCircle className="w-5 h-5 mx-auto text-gray-300" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </Section>

      <SectionDivider fromColor="#ffffff" toColor="#0f1d3d" direction="left" height={60} />

      {/* ======= SECTION 5C: BUSINESS CASE ======= */}
      <Section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#0891b2]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/8 rounded-full blur-[100px]" />
        <GrainTexture opacity={0.04} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              The Business Case
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Organizations Are Moving Now
            </h2>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: DollarSign,
                title: "Prevent 33% Revenue Loss",
                copy: "Pharmacies lose one-third of potential revenue to non-adherence-related prescription abandonment. iRxReminder keeps patients on therapy.",
              },
              {
                icon: Users,
                title: "Reduce Staff Burden",
                copy: "Automated dose tracking replaces manual follow-up calls and paper-based medication administration records.",
              },
              {
                icon: BarChart3,
                title: "Automate Workflows",
                copy: "Real-time data flows into your existing EHR. No duplicate entry. No extra steps for your care team.",
              },
              {
                icon: Receipt,
                title: "Unlock RPM Revenue",
                copy: "Remote Patient Monitoring and Remote Therapeutic Monitoring billing codes generate 3\u00d7 cost recovery on the platform.",
              },
            ].map((card, i) => (
              <FadeUp key={card.title} delay={0.1 + i * 0.08}>
                <div className="bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl p-7 h-full hover:-translate-y-1 transition-[box-shadow,transform] duration-300">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-[#0891b2]/20">
                    <card.icon className="w-5 h-5 text-[#0891b2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed">{card.copy}</p>
                </div>
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
                  { icon: Shield, text: "$2.8M NIH Funded" },
                  { icon: Award, text: "US Patented" },
                ]}
              />
            </div>
          </FadeUp>

          {/* Stats grid with glass morphism */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {[
              { end: 2.8, prefix: "$", suffix: "M", label: "NIH Grants", description: "Phase I & II awards", color: "#0891b2" },
              { end: 350, suffix: "+", label: "Clinical Subjects", description: "Across multiple studies", color: "#ffffff" },
              { end: 80, suffix: "%+", label: "Adherence", description: "Validated in NIH trials", color: "#0891b2" },
              { end: 16, label: "Letters of Intent", description: "From institutional partners", color: "#ffffff" },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={0.1 + i * 0.08}>
                <StatCard {...item} variant="glass" />
              </FadeUp>
            ))}
          </div>

          {/* Research partners */}
          <FadeUp delay={0.3}>
            <div className="text-center">
              <p className="text-blue-200/60 text-sm mt-8">
                Validated across 7+ university research partners including Harvard, Michigan, and Case Western Reserve
              </p>
              <Link
                to="/evidence"
                className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-6 hover:gap-3 transition-[gap] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#152c6e] rounded-sm"
              >
                Read the evidence <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </Section>

      <SectionDivider fromColor="#1e3a8a" toColor="#f8fafc" direction="right" />

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

      <SectionDivider fromColor="#f8fafc" toColor="#0f1d3d" direction="left" height={60} />

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

      <SectionDivider fromColor="#1e3a8a" toColor="#ffffff" direction="right" />

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
                  { icon: Shield, text: "$2.8M NIH Funded" },
                  { icon: FileCheck, text: "350+ Subjects Studied" },
                  { icon: Award, text: "FDA 510(k) Pathway" },
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
