import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileText,
  GraduationCap,
  Quote,
  ShieldCheck,
  TrendingUp,
  Trophy,
  XCircle,
  Shield,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "motion/react";
import { FadeUp, CountUp } from "@/app/components/animations";
import { GrainTexture } from "@/app/components/GrainTexture";
import { StatCard } from "@/app/components/StatCard";
import { ComparisonChart } from "@/app/components/ComparisonChart";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";
import { SectionDivider } from "@/app/components/SectionDivider";
import { TimelineTrack } from "@/app/components/TimelineTrack";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

const evidenceSections = ["problem", "trials", "comparison", "timeline", "grants", "partners", "publications", "awards"];

export function Evidence() {
  const prefersReducedMotion = useReducedMotion();
  const activeSection = useSectionObserver(evidenceSections);
  const heroAnimation = prefersReducedMotion ? {} : { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, type: "spring", stiffness: 200, damping: 25 } };
  const heroSubAnim = prefersReducedMotion ? {} : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.4 } };

  return (
    <div className="bg-white">
      {/* ======= HERO — Animated massive stat ======= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d3d] to-[#152c6e]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0891b2]/10 rounded-full blur-[150px]" />
        <div className="absolute top-[20%] right-[10%] w-40 h-40 border border-white/[0.03] rounded-full" />
        <div className="absolute bottom-[20%] left-[8%] w-24 h-24 border border-white/[0.04] rounded-full" />
        <GrainTexture opacity={0.05} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 text-center">
          <motion.div {...heroAnimation}>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-8">
              Clinical Evidence
            </p>
            {/* Massive animated number */}
            <div className="mb-6">
              <CountUp
                end={83}
                suffix="%"
                className="text-8xl md:text-[10rem] font-extrabold tracking-tighter leading-none"
                style={{ color: "#0891b2", fontFamily: "var(--font-display)" }}
              />
            </div>
          </motion.div>
          <motion.div {...heroSubAnim}>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4 tracking-tight">
              Medication Adherence Rate
            </p>
            <p className="text-lg text-blue-200 max-w-xl mx-auto leading-relaxed">
              Validated across 350+ participants in NIH-funded clinical trials.
              Peer-reviewed. Patent-protected. FDA clearance pathway underway.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======= STICKY SUB-NAVIGATION ======= */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#problem", id: "problem", label: "The Crisis" },
              { href: "#trials", id: "trials", label: "Clinical Trials" },
              { href: "#comparison", id: "comparison", label: "Comparison" },
              { href: "#timeline", id: "timeline", label: "Timeline" },
              { href: "#grants", id: "grants", label: "NIH Grants" },
              { href: "#partners", id: "partners", label: "Partners" },
              { href: "#publications", id: "publications", label: "Publications" },
              { href: "#awards", id: "awards", label: "Awards" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition-colors pb-2 border-b-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891b2]/40 rounded-sm ${
                  activeSection === item.id
                    ? "text-[#0891b2] border-[#0891b2] font-semibold"
                    : "text-gray-500 hover:text-[#0891b2] border-transparent"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ======= CENTRAL STAT BAND ======= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { end: 700, suffix: "K", label: "ER Visits/Year", color: "#1e3a8a" },
                { end: 341, suffix: "K", label: "Hospitalizations", color: "#0891b2" },
                { end: 125, suffix: "K", label: "Deaths/Year", color: "#1e3a8a" },
                { end: 300, prefix: "$", suffix: "B+", label: "Avoidable Costs", color: "#0891b2" },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.08}>
                  <StatCard {...item} variant="elevated" />
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= THE NON-ADHERENCE CRISIS ======= */}
      <section id="problem" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              The Crisis
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              The Numbers Don&rsquo;t Lie
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl">
              Medication non-adherence is one of healthcare&rsquo;s most
              expensive unsolved problems.
            </p>
          </FadeUp>

          {/* AMA Blockquote */}
          <FadeUp delay={0.1}>
            <div className="relative bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] mb-16">
              <Quote className="w-10 h-10 text-[#0891b2]/20 absolute top-6 left-6" />
              <div className="pl-8 md:pl-12">
                <blockquote className="text-xl md:text-2xl text-gray-800 italic leading-relaxed mb-4">
                  &ldquo;Poor medication adherence takes the lives of 125,000
                  Americans annually, and costs the healthcare system as much
                  as $300 billion a year.&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-[#0891b2]" />
                  <span className="text-[#1e3a8a] font-semibold">American Medical Association</span>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Research Banner */}
          <FadeUp delay={0.12}>
            <div className="mb-16 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(30,58,138,0.12)]">
              <img
                src="/images/banners/irx_banner_research.jpg"
                alt="iRxReminder clinical research and medication adherence studies"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </FadeUp>

          {/* Why Existing Solutions Fail */}
          <FadeUp delay={0.15}>
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Why Current Tools Fail
            </h3>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pill Packing",
                subtitle: "PillPak, ExactCare",
                problem: "Skip a day, take a double dose. Regimen changes require complete repackaging.",
                solution: "Flexible dosing windows. Real-time regimen adjustments. No repackaging.",
              },
              {
                title: "Wireless Pill Bottles",
                subtitle: "MEMSCaps, GlowCaps, AdhereTech",
                problem: "Count openings, not doses. Patients can take any amount. Passive alerts get ignored.",
                solution: "Controlled dispensing. Gesture activation. Can\u2019t overdose or game data.",
              },
              {
                title: "Smart Organizers",
                subtitle: "Consumer devices",
                problem: "Patient sorts pills (error-prone). No real-time data. Easy to game.",
                solution: "Pharmacist-filled. Automatic dose recording. Tamper-proof data.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={0.15 + i * 0.08}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full flex flex-col hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 mb-5">{item.subtitle}</p>
                  <div className="flex items-start gap-2.5 mb-4">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Problem</span>
                      <p className="text-sm text-gray-600 mt-1">{item.problem}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 mt-auto pt-4 border-t border-gray-50">
                    <CheckCircle2 className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#0891b2]">iRxReminder</span>
                      <p className="text-sm text-gray-600 mt-1">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="left" />

      {/* ======= CLINICAL TRIALS ======= */}
      <section id="trials" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Clinical Trials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Rigorous Studies. Real-World Results.
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Multi-site studies validating adherence outcomes in diverse patient populations
            </p>
          </FadeUp>

          <div className="space-y-6">
            {/* TDtect Study */}
            <FadeUp>
              <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-[#0891b2]/30 shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    Active
                  </span>
                  <span className="text-xs text-gray-500 font-medium">NIMH-Funded</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">TDtect&trade; Diagnostic Study</h3>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  NIMH-funded study for Tardive Dyskinesia detection and remote
                  monitoring in behavioral health populations. First patients
                  enrolled August 2023.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Funding", value: "NIMH (March 2023)" },
                    { label: "Focus", value: "Behavioral Health" },
                    { label: "Grant Amount", value: "$871,153" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#f8fafc] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* NIH Adherence Study */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                  <span className="text-xs text-gray-500 font-medium">350+ Participants</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">NIH Adherence Improvement Study</h3>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  Multi-site study across behavioral health networks.
                  Result: <strong className="text-gray-900">48% to 80%+ medication adherence improvement</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Participants", value: "350+" },
                    { label: "Outcome", value: "48% \u2192 80%+ adherence" },
                    { label: "Networks", value: "Behavioral health" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#f8fafc] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* UMich Cancer Center */}
            <FadeUp delay={0.15}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#1e3a8a] px-3 py-1 rounded-full text-xs font-semibold">
                    Completed
                  </span>
                  <span className="text-xs text-gray-500 font-medium">HOPA-Funded</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">University of Michigan Cancer Center</h3>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  Oncology adherence study.
                  Result: <strong className="text-gray-900">25% reduction in clinical trial dropouts</strong>.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Funding", value: "HOPA" },
                    { label: "Outcome", value: "25% fewer dropouts" },
                    { label: "Focus", value: "Oncology adherence" },
                  ].map((detail) => (
                    <div key={detail.label} className="bg-[#f8fafc] px-5 py-4 rounded-xl">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* 83% Callout */}
            <FadeUp delay={0.2}>
              <div className="relative bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a] p-8 md:p-10 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
                <GrainTexture opacity={0.04} />
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <CountUp end={83} suffix="%" className="text-6xl md:text-7xl font-extrabold text-[#0891b2] tracking-tight" style={{ fontFamily: "var(--font-display)" }} />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Consistent Adherence Rate</h3>
                    <p className="text-blue-200 max-w-xl">
                      Across multiple studies and diverse populations, iRxReminder
                      consistently achieves 83% medication adherence&nbsp;&mdash;
                      far exceeding industry benchmarks.
                    </p>
                  </div>
                  <div className="ml-auto hidden md:block">
                    <FloatingBadgeGroup
                      variant="glass"
                      badges={[
                        { icon: Shield, text: "NIH-Funded" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= COMPARISON VISUALIZATION ======= */}
      <section id="comparison" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Side-by-Side
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Without vs. With iRxReminder
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              See the measurable difference across key clinical outcomes
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <ComparisonChart
                metrics={[
                  { label: "Medication Adherence", without: 48, withIrx: 83, format: "percentage" },
                  { label: "Clinical Trial Retention", without: 70, withIrx: 95, format: "percentage" },
                  { label: "Dose Verification Accuracy", without: 35, withIrx: 100, format: "percentage" },
                ]}
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="right" />

      {/* ======= RESEARCH TIMELINE ======= */}
      <section id="timeline" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Research Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              15 Years of Clinical Validation
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              From NIH pilot grants to multi-site clinical trials
            </p>
          </FadeUp>

          <TimelineTrack
            orientation="vertical"
            items={[
              { label: "2010", title: "NIH Pilot Grant Awarded", description: "Grant No. 1R43AG033500 — First federal funding validates iRxReminder concept for stroke recovery and aging populations.", color: "#1e3a8a" },
              { label: "2013", title: "FDA 510(k) Clearance", description: "iRxReminder receives FDA clearance as a Class II medical device — one of the first IoT medication management systems to achieve this milestone.", color: "#0891b2" },
              { label: "2015–2018", title: "University Research Partnerships", description: "Clinical collaborations established with Harvard, University of Michigan, Kent State, Brown, MetroHealth, and Butler Hospital.", color: "#1e3a8a" },
              { label: "2018–2020", title: "Multi-Site Adherence Trials", description: "NIH-funded study across behavioral health networks enrolls 350+ participants. Outcome: adherence improves from 48% to 80%+.", color: "#0891b2" },
              { label: "2022", title: "Oncology Trial at U of Michigan", description: "HOPA-funded study at the University of Michigan Cancer Center demonstrates 25% reduction in clinical trial dropouts.", color: "#1e3a8a" },
              { label: "2023", title: "NIMH AI Telehealth Grant", description: "$871,153 awarded for TDtect\u2122 study — AI-powered Tardive Dyskinesia detection and medication monitoring in behavioral health.", color: "#0891b2" },
              { label: "Present", title: "TDtect\u2122 Study Enrolling", description: "First patients enrolled. Active NIMH-funded diagnostic study combining AI telehealth with real-time medication monitoring.", color: "#1e3a8a" },
            ]}
          />
        </div>
      </section>

      {/* ======= FDA CLEARANCE — Prominent section ======= */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0891b2]/10 rounded-full blur-[120px]" />
        <GrainTexture opacity={0.04} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-10 md:p-14">
              <div className="flex justify-center mb-6">
                <FloatingBadgeGroup
                  variant="glass"
                  badges={[
                    { icon: ShieldCheck, text: "FDA 510(k) Cleared" },
                    { icon: Shield, text: "HIPAA Compliant" },
                    { icon: Award, text: "Class II Medical Device" },
                  ]}
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                FDA-Cleared Medical Device
              </h3>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
                iRxReminder is one of the first IoT medication management systems
                to receive FDA 510(k) clearance as a Class II medical device.
                This isn&rsquo;t a wellness app. It&rsquo;s a regulated medical platform.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= NIH & FEDERAL GRANTS ======= */}
      <section id="grants" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Federal Funding
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              NIH &amp; Federal Grants
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Peer-reviewed federal grants validating scientific merit
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NIMH AI Telehealth Grant</h3>
                <div className="text-3xl font-extrabold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>$871,153</div>
                <p className="text-sm text-gray-500 mb-4">
                  <strong className="text-gray-700">Awarded:</strong> March 2023
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Funding for TDtect&trade; study&nbsp;&mdash; AI-powered Tardive
                  Dyskinesia detection and medication monitoring.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NIH Grant No. 1R43AG033500</h3>
                <p className="text-sm text-gray-500 mb-4">
                  <strong className="text-gray-700">Focus:</strong> Stroke Recovery &amp; Aging
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pilot study validating medication adherence technology for
                  stroke recovery patients. Demonstrated platform potential.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-8 rounded-2xl border border-[#1e3a8a]/10">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What NIH Funding Means</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    NIH grants undergo rigorous peer review for scientific merit,
                    innovation, and public health impact. Federal funding validates
                    iRxReminder&rsquo;s clinical approach and research methodology.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="left" />

      {/* ======= UNIVERSITY PARTNERS ======= */}
      <section id="partners" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Research Network
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              University &amp; Research Partners
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Collaborating with leading institutions
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Harvard University", description: "Gerontechnology research — aging population medication management and cognitive impairment studies.", color: "#1e3a8a" },
              { name: "MetroHealth", description: "Cleveland's safety-net health system — real-world deployment in underserved populations.", color: "#0891b2" },
              { name: "University of Michigan", description: "Cancer Center oncology adherence study — 25% reduction in clinical trial dropouts.", color: "#1e3a8a" },
              { name: "Kent State University", description: "College of Nursing research — behavioral health population studies.", color: "#0891b2" },
              { name: "Brown University", description: "Psychiatry and Human Behavior — behavioral health medication adherence research.", color: "#1e3a8a" },
              { name: "Butler Hospital", description: "Brown-affiliated psychiatric hospital — clinical site for adherence trials with 350+ participants.", color: "#0891b2" },
            ].map((partner, i) => (
              <FadeUp key={partner.name} delay={i * 0.06}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${partner.color}10` }}>
                    <GraduationCap className="w-6 h-6" style={{ color: partner.color }} />
                  </div>
                  <div className="font-bold text-gray-900 text-center mb-2">{partner.name}</div>
                  <p className="text-xs text-gray-500 text-center leading-relaxed">{partner.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======= PUBLICATIONS ======= */}
      <section id="publications" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Research
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Publications &amp; Studies
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Peer-reviewed research documenting platform outcomes
            </p>
          </FadeUp>

          <div className="space-y-5 mb-10">
            {[
              {
                title: "Medication Adherence Technology for Behavioral Health Populations",
                journal: "Journal of Medical Internet Research (JMIR)",
                date: "2023",
                description: "48% \u2192 80%+ adherence improvement in NIH-funded trial across behavioral health networks.",
                color: "#1e3a8a",
              },
              {
                title: "Reducing Clinical Trial Dropouts Through IoT Medication Monitoring",
                journal: "Journal of Clinical Oncology",
                date: "2022",
                description: "University of Michigan Cancer Center: 25% reduction in trial dropouts.",
                color: "#0891b2",
              },
              {
                title: "Gerontechnology and Medication Management for Aging Populations",
                journal: "Multiple conference presentations",
                date: "2015\u20132020",
                description: "100+ international presentations including keynotes at GSA and CHPA.",
                color: "#1e3a8a",
              },
            ].map((pub, i) => (
              <FadeUp key={pub.title} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-2xl border-l-4 border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5" style={{ borderLeftColor: pub.color }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${pub.color}10` }}>
                      <FileText className="w-5 h-5" style={{ color: pub.color }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{pub.title}</h3>
                      <p className="text-sm text-[#0891b2] font-medium mb-3">{pub.journal} &bull; {pub.date}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{pub.description}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Research Impact */}
          <FadeUp delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
              <h4 className="font-bold text-gray-900 mb-6">Research Impact</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { end: 33, label: "Publications", color: "#1e3a8a" },
                  { end: 100, suffix: "+", label: "International presentations", color: "#0891b2" },
                  { end: 12, label: "U.S. patents", color: "#1e3a8a" },
                ].map((item) => (
                  <div key={item.label}>
                    <CountUp
                      end={item.end}
                      suffix={item.suffix}
                      className="text-3xl font-extrabold mb-1 tracking-tight"
                      style={{ color: item.color, fontFamily: "var(--font-display)" }}
                    />
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="right" />

      {/* ======= AWARDS ======= */}
      <section id="awards" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-16 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              Awards &amp; Recognition
            </h2>
          </FadeUp>

          <TimelineTrack
            orientation="vertical"
            items={[
              { label: "2023", title: "$871K NIMH Grant for AI Telehealth Research", description: "Federal funding for TDtect\u2122 study", icon: Award, color: "#0891b2" },
              { label: "2023", title: "First Patients Enrolled in TDtect\u2122 Study", description: "NIMH-funded diagnostic study begins enrollment", icon: TrendingUp, color: "#1e3a8a" },
              { label: "2019", title: "AMIA PitchIT Grand Prize \u2014 $12,500", description: "American Medical Informatics Association national competition. Recognized for potential to transform medication adherence.", icon: Trophy, color: "#0891b2" },
              { label: "2019", title: "Best Tech Startup in Cleveland", description: "Recognized as the leading technology startup in the region", icon: Award, color: "#1e3a8a" },
              { label: "2017", title: "AARP/MedCity \u201850+ Innovation Leader\u2019", description: "Dr. Anthony Sterns recognized for leadership in aging and technology", icon: Award, color: "#0891b2" },
            ]}
          />
        </div>
      </section>

      {/* ======= CTA ======= */}
      <SectionDivider fromColor="#f8fafc" toColor="#0f1d3d" direction="left" height={60} />
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/12 rounded-full blur-[100px]" />
        <GrainTexture opacity={0.04} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
              The Evidence Speaks for Itself
            </h2>
            <p className="text-xl text-blue-200 mb-6">
              See how clinically validated technology can transform adherence for your patients
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="flex justify-center mb-8">
              <FloatingBadgeGroup
                variant="glass"
                badges={[
                  { icon: Shield, text: "FDA-Cleared" },
                  { icon: Award, text: "NIH-Funded" },
                ]}
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white transition-colors">
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
