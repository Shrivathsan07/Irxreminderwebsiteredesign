import { Link } from "react-router";
import {
  Activity,
  Users,
  FlaskConical,
  Pill,
  Shield,
  TrendingUp,
  DollarSign,
  Workflow,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  FileCheck,
  Beaker,
  Clock,
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

export function Solutions() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ======= HERO ======= */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[#0891b2]/20 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 300, damping: 30 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-6">
              Solutions
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Built for the Teams That
              <br />
              <span className="text-[#0891b2]">Keep Patients Safe</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Tailored solutions for health systems, behavioral health agencies,
              clinical researchers, and pharmacies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
            >
              <a href="#mental-health">
                Explore Use Cases
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 text-lg px-8 py-6 transition-colors"
            >
              <Link to="/schedule-pilot">Schedule a Pilot</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ======= SECTION 1: PRIMARY TARGET POPULATIONS ======= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Primary Populations
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight">
              Primary Target Populations
            </h2>
            <p className="text-xl text-gray-600 text-center mb-20 max-w-3xl mx-auto leading-relaxed">
              Two patient populations where medication adherence is most critical
              and the consequences of missed doses are most severe
            </p>
          </FadeUp>

          {/* ---- Mental Health ---- */}
          <div id="mental-health" className="scroll-mt-32 mb-28">
            <FadeUp>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left: stat & description */}
                <div>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                    <Activity className="w-7 h-7 text-[#1e3a8a]" />
                  </div>
                  <div className="text-6xl md:text-7xl font-extrabold text-[#1e3a8a] mb-3 tracking-tight">
                    19M
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    Mental Health Patients
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Americans struggle with behavioral health conditions where
                    missed doses of essential medications can result in
                    hospitalization, homelessness, or worse.
                  </p>
                </div>

                {/* Right: challenge / solution / evidence cards */}
                <div className="space-y-5">
                  <FadeUp delay={0.1}>
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                          <AlertTriangle className="w-4.5 h-4.5 text-red-500" />
                        </div>
                        <h4 className="font-bold text-gray-900">The Challenge</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Patients with schizophrenia, bipolar disorder, and other
                        serious mental illnesses often forget doses or stop taking
                        medications when they feel better, leading to relapse,
                        crisis, and readmission.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.15}>
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                          <Lightbulb className="w-4.5 h-4.5 text-[#0891b2]" />
                        </div>
                        <h4 className="font-bold text-gray-900">The iRxReminder Solution</h4>
                      </div>
                      <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>83% adherence rate for psychiatric medications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Real-time alerts when patients miss doses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Proactive intervention before crisis escalation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>3x ROI via RPM/RTM billing for behavioral health agencies</span>
                        </li>
                      </ul>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.2}>
                    <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-7 rounded-2xl border border-[#1e3a8a]/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                          <FileCheck className="w-4.5 h-4.5 text-[#1e3a8a]" />
                        </div>
                        <h4 className="font-bold text-gray-900">Clinical Evidence</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        NIH-funded trial across 350+ participants in behavioral
                        health networks:{" "}
                        <strong className="text-[#1e3a8a]">
                          48% &rarr; 80%+ adherence improvement
                        </strong>
                      </p>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-28" />

          {/* ---- Aging Population ---- */}
          <div id="aging" className="scroll-mt-32">
            <FadeUp>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                {/* Left: challenge / solution / evidence cards */}
                <div className="order-2 lg:order-1 space-y-5">
                  <FadeUp delay={0.1}>
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                          <AlertTriangle className="w-4.5 h-4.5 text-red-500" />
                        </div>
                        <h4 className="font-bold text-gray-900">The Challenge</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Seniors managing multiple chronic conditions often forget
                        doses, confuse medications, or accidentally double-dose.
                        This leads to preventable ER visits, hospital
                        readmissions, and loss of independence.
                      </p>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.15}>
                    <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[#0891b2]/10 flex items-center justify-center">
                          <Lightbulb className="w-4.5 h-4.5 text-[#0891b2]" />
                        </div>
                        <h4 className="font-bold text-gray-900">The iRxReminder Solution</h4>
                      </div>
                      <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Pharmacist-filled pods eliminate sorting errors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Smart LED system guides dosing windows</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Overdose prevention — can't "catch up" on missed doses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                          <span>Reduces readmission penalties for health systems</span>
                        </li>
                      </ul>
                    </div>
                  </FadeUp>

                  <FadeUp delay={0.2}>
                    <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-7 rounded-2xl border border-[#1e3a8a]/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                          <Shield className="w-4.5 h-4.5 text-[#1e3a8a]" />
                        </div>
                        <h4 className="font-bold text-gray-900">Post-Discharge Continuity</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Health systems use iRxReminder for safe post-discharge
                        medication management, keeping seniors connected to care
                        teams and preventing deterioration at home.
                      </p>
                    </div>
                  </FadeUp>
                </div>

                {/* Right: stat & description */}
                <div className="order-1 lg:order-2">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                    <Users className="w-7 h-7 text-[#0891b2]" />
                  </div>
                  <div className="text-6xl md:text-7xl font-extrabold text-[#0891b2] mb-3 tracking-tight">
                    65M+
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                    Aging Population
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Seniors rely on medications to maintain independence and
                    quality of life, but often forget doses or make dangerous
                    medication errors.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= SECTION 2: ADDITIONAL USE CASES ======= */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Expanded Applications
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-6 tracking-tight">
              Additional Use Cases
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Beyond primary populations, iRxReminder supports clinical research
              integrity and pharmacy revenue growth
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Clinical Research & Trials */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <FlaskConical className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  Clinical Research &amp; Trials
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Empower researchers and study participants to complete and
                  monitor study tasks with 25% fewer clinical trial dropouts.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-3">
                      The Challenge
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Clinical trials suffer from poor medication adherence,
                      leading to invalid data, expensive participant dropouts,
                      and failed studies. Researchers lack real-time visibility
                      into whether patients are taking study medications
                      correctly.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-3">
                      The Solution
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-2.5">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>25% fewer dropouts</strong> (University of Michigan study)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>Real-time adherence data for principal investigators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>Remote regimen modifications without repackaging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>Cannot game compliance — automatic dose recording</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>ESmCapture surveys for patient-reported outcomes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-5 rounded-xl border border-[#1e3a8a]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Beaker className="w-4 h-4 text-[#1e3a8a]" />
                      <h4 className="font-semibold text-gray-900 text-sm">Featured Study</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      HOPA-funded oncology study at University of Michigan Cancer
                      Center demonstrated significant reduction in trial dropouts
                      using iRxReminder platform.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Pharmacies */}
            <FadeUp delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Pill className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  Pharmacies
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Build brand loyalty, capture and monetize daily medication use
                  data, and increase prescription revenue.
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-3">
                      The Opportunity
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pharmacies that fill iRxReminder pods create sticky
                      customer relationships, generate new revenue streams, and
                      differentiate their services in a competitive market.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-3">
                      Value Proposition
                    </h4>
                    <ul className="text-gray-600 text-sm space-y-2.5">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Patient retention:</strong> Pods require 90-day fills at your pharmacy
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Service revenue:</strong> Charge for pod-filling services
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Data insights:</strong> Real medication use data (not just fills)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Care coordination:</strong> Partner with local health systems
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                        <span>
                          <strong>Competitive edge:</strong> Offer technology-enabled adherence programs
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#f0fdfa] to-[#e0f7fa] p-5 rounded-xl border border-[#0891b2]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[#0891b2]" />
                      <h4 className="font-semibold text-gray-900 text-sm">Workflow Integration</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Simple pod-filling process integrates into existing
                      pharmacy workflows. Training takes less than 1 hour per
                      pharmacist.
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= SECTION 3: BUYER PERSONAS ======= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Decision Makers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-4 tracking-tight">
              Built for Healthcare Decision Makers
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Outcome-focused solutions for the people who make care decisions
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Chief Medical Officer",
                role: "Clinical Decision Maker",
                desc: "83% adherence improvement, fewer readmissions, better patient outcomes",
                color: "#1e3a8a",
                to: "/platform",
              },
              {
                icon: DollarSign,
                title: "Chief Financial Officer",
                role: "Financial Decision Maker",
                desc: "3x cost recovery via RPM/RTM codes, reduced readmission penalties",
                color: "#0891b2",
                to: "/roi-calculator",
              },
              {
                icon: Workflow,
                title: "Case Management Lead",
                role: "Operational Decision Maker",
                desc: "Reliable discharge support, simple reporting dashboards",
                color: "#1e3a8a",
                to: "/platform#dashboard",
              },
              {
                icon: TrendingUp,
                title: "Pharmacy Director",
                role: "Integration Decision Maker",
                desc: "100% seamless EHR integration, 25% fewer trial dropouts",
                color: "#0891b2",
                to: "/platform#integration",
              },
            ].map((persona, i) => (
              <FadeUp key={persona.title} delay={0.1 + i * 0.08}>
                <Link
                  to={persona.to}
                  className="group block bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${persona.color}10` }}
                  >
                    <persona.icon
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                      style={{ color: persona.color }}
                    />
                  </div>
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {persona.title}
                  </div>
                  <div className="text-sm text-gray-400 mb-4">{persona.role}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {persona.desc}
                  </p>
                  <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ======= CTA ======= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Find the Right Solution for
              <br />
              <span className="text-[#0891b2]">Your Organization</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Schedule a pilot to see how iRxReminder fits your use case
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
                <Link to="/evidence">See the Evidence</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
