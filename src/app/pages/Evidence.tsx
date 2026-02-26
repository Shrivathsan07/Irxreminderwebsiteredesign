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
} from "lucide-react";
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

export function Evidence() {
  return (
    <div className="bg-white">
      {/* ======= HERO ======= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Clinical Evidence
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Clinically Validated.
              <br />
              Peer-Reviewed. <span className="text-[#0891b2]">Patent-Protected.</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              Tested in NIH-funded studies. Deployed at university medical
              centers. Proven to drive high adherence&nbsp;&mdash; even in
              patients with cognitive impairments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ======= STICKY SUB-NAVIGATION ======= */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#problem", label: "The Crisis" },
              { href: "#trials", label: "Clinical Trials" },
              { href: "#grants", label: "NIH Grants" },
              { href: "#partners", label: "Partners" },
              { href: "#publications", label: "Publications" },
              { href: "#awards", label: "Awards" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-500 hover:text-[#0891b2] whitespace-nowrap transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ======= CENTRAL STAT ======= */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#0891b2]/10 text-[#0891b2] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <TrendingUp className="w-4 h-4" />
              NIH-Funded Clinical Outcome
            </div>
            <div className="mb-6">
              <span className="text-6xl md:text-8xl font-extrabold text-[#1e3a8a] tracking-tight">48%</span>
              <span className="text-4xl md:text-6xl font-bold text-[#0891b2] mx-3">&rarr;</span>
              <span className="text-6xl md:text-8xl font-extrabold text-[#0891b2] tracking-tight">80%+</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Adherence improvement across 350+ participants in behavioral health
              networks. Validated in NIH-funded clinical trials.
            </p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              The Numbers Don&rsquo;t Lie
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl">
              Medication non-adherence is one of healthcare&rsquo;s most
              expensive unsolved problems. The human and financial toll is
              massive&nbsp;&mdash; and growing.
            </p>
          </FadeUp>

          {/* Crisis Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { stat: "700K", label: "ER visits per year", color: "#1e3a8a" },
              { stat: "341K", label: "Hospitalizations per year", color: "#0891b2" },
              { stat: "125K", label: "Deaths per year", color: "#1e3a8a" },
              { stat: "$300B+", label: "In avoidable costs", color: "#0891b2" },
            ].map((item, i) => (
              <FadeUp key={item.stat} delay={i * 0.08}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] text-center">
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: item.color }}>
                    {item.stat}
                  </div>
                  <div className="text-gray-500 font-medium">{item.label}</div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* AMA Blockquote */}
          <FadeUp>
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] mb-16 relative">
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

          {/* Why Existing Solutions Fail */}
          <FadeUp>
            <h3 className="text-3xl font-bold text-[#1e3a8a] mb-8 tracking-tight">
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
              <FadeUp key={item.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400 mb-5">{item.subtitle}</p>
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

      {/* ======= CLINICAL TRIALS ======= */}
      <section id="trials" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Clinical Trials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
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
                  <span className="text-xs text-gray-400 font-medium">NIMH-Funded</span>
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
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{detail.label}</div>
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
                  <span className="text-xs text-gray-400 font-medium">350+ Participants</span>
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
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{detail.label}</div>
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
                  <span className="text-xs text-gray-400 font-medium">HOPA-Funded</span>
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
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{detail.label}</div>
                      <div className="text-sm font-bold text-gray-900">{detail.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* 83% Callout */}
            <FadeUp delay={0.2}>
              <div className="relative bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a] p-8 md:p-10 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
                <div className="relative flex flex-col md:flex-row items-center gap-6">
                  <div className="text-6xl md:text-7xl font-extrabold text-[#0891b2] tracking-tight">83%</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Consistent Adherence Rate</h3>
                    <p className="text-blue-100/80 max-w-xl">
                      Across multiple studies and diverse populations, iRxReminder
                      consistently achieves 83% medication adherence&nbsp;&mdash;
                      far exceeding industry benchmarks.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= NIH & FEDERAL GRANTS ======= */}
      <section id="grants" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Federal Funding
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              NIH &amp; Federal Grants
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Peer-reviewed federal grants validating scientific merit and public health impact
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NIMH AI Telehealth Grant</h3>
                <div className="text-3xl font-extrabold text-[#1e3a8a] mb-4 tracking-tight">$871,153</div>
                <p className="text-sm text-gray-500 mb-4">
                  <strong className="text-gray-700">Awarded:</strong> March 2023
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Funding for TDtect&trade; study&nbsp;&mdash; AI-powered Tardive
                  Dyskinesia detection and medication monitoring in behavioral
                  health populations.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 flex items-center justify-center mb-5">
                  <Award className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">NIH Grant No. 1R43AG033500</h3>
                <p className="text-sm text-gray-500 mb-4">
                  <strong className="text-gray-700">Focus:</strong> Stroke Recovery &amp; Aging
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Pilot study validating medication adherence technology for
                  stroke recovery patients. Demonstrated platform potential and
                  paved the way for larger trials.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
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

      {/* ======= UNIVERSITY PARTNERS ======= */}
      <section id="partners" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Research Network
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              University &amp; Research Partners
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Collaborating with leading institutions to validate and advance the platform
            </p>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: "Harvard University", color: "#1e3a8a" },
              { name: "MetroHealth", color: "#0891b2" },
              { name: "University of Michigan", color: "#1e3a8a" },
              { name: "Kent State University", color: "#0891b2" },
              { name: "Brown University", color: "#1e3a8a" },
              { name: "Butler Hospital", color: "#0891b2" },
            ].map((partner, i) => (
              <FadeUp key={partner.name} delay={i * 0.06}>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] text-center hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: `${partner.color}10` }}>
                    <GraduationCap className="w-6 h-6" style={{ color: partner.color }} />
                  </div>
                  <div className="font-bold text-gray-900">{partner.name}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======= PUBLICATIONS ======= */}
      <section id="publications" className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Research
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              Publications &amp; Studies
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-2xl">
              Peer-reviewed research documenting platform outcomes
            </p>
          </FadeUp>

          <div className="space-y-6 mb-10">
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
                description: "100+ international presentations including keynotes at Gerontological Society of America and Consumer Healthcare Products Association.",
                color: "#1e3a8a",
              },
            ].map((pub, i) => (
              <FadeUp key={pub.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
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
                  { stat: "33", label: "Publications", color: "#1e3a8a" },
                  { stat: "100+", label: "International presentations", color: "#0891b2" },
                  { stat: "12", label: "U.S. patents", color: "#1e3a8a" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-extrabold mb-1 tracking-tight" style={{ color: item.color }}>
                      {item.stat}
                    </div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ======= AWARDS ======= */}
      <section id="awards" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Recognition
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-16 tracking-tight">
              Awards &amp; Recognition
            </h2>
          </FadeUp>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#0891b2]/40 via-[#1e3a8a]/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  year: "2023",
                  title: "$871K NIMH Grant for AI Telehealth Research",
                  description: "Federal funding for TDtect\u2122 study",
                  color: "#0891b2",
                  featured: false,
                },
                {
                  year: "2023",
                  title: "First Patients Enrolled in TDtect\u2122 Study",
                  description: "NIMH-funded diagnostic study begins enrollment",
                  color: "#1e3a8a",
                  featured: false,
                },
                {
                  year: "2019",
                  title: "AMIA PitchIT Grand Prize \u2014 $12,500",
                  description: "American Medical Informatics Association national competition. Recognized for potential to transform medication adherence.",
                  color: "#0891b2",
                  featured: true,
                },
                {
                  year: "2019",
                  title: "Best Tech Startup in Cleveland",
                  description: "Recognized as the leading technology startup in the region",
                  color: "#1e3a8a",
                  featured: false,
                },
                {
                  year: "2017",
                  title: "AARP/MedCity \u201850+ Innovation Leader\u2019",
                  description: "Dr. Anthony Sterns recognized for leadership in aging and technology",
                  color: "#0891b2",
                  featured: false,
                },
              ].map((award, i) => (
                <FadeUp key={`${award.year}-${i}`} delay={i * 0.08}>
                  <div className="flex items-start gap-5 md:gap-6">
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${award.color}10` }}
                      >
                        {award.featured ? (
                          <Trophy className="w-5 h-5" style={{ color: award.color }} />
                        ) : (
                          <Award className="w-5 h-5" style={{ color: award.color }} />
                        )}
                      </div>
                    </div>
                    <div className={`flex-1 ${award.featured ? "bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]" : "pt-1"}`}>
                      <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">{award.year}</div>
                      <h3 className={`font-bold text-gray-900 mb-1.5 ${award.featured ? "text-xl" : "text-lg"}`}>
                        {award.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{award.description}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              The Evidence Speaks for Itself
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              See how clinically validated technology can transform adherence for your patients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/roi-calculator">Calculate Your ROI</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
