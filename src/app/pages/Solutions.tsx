import { Link } from "react-router";
import {
  Activity,
  Users,
  FlaskConical,
  Pill,
  Shield,
  DollarSign,
  Workflow,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  FileCheck,
  Beaker,
  Clock,
  Building2,
  Heart,
  BarChart3,
  Lock,
} from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import { FadeUp } from "@/app/components/animations";
import { GrainTexture } from "@/app/components/GrainTexture";
import { SplitHero } from "@/app/components/SplitHero";
import { BentoGrid } from "@/app/components/BentoGrid";
import { SectionDivider } from "@/app/components/SectionDivider";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";

/* ─── Use Case Visual for Light Hero ─── */
function UseCaseVisual() {
  return (
    <div className="relative">
      <div
        className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8"
        style={{
          boxShadow:
            "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.08), 0 16px 40px rgba(30,58,138,0.10)",
        }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
          Configured For
        </div>
        <div className="space-y-3">
          {[
            {
              icon: FlaskConical,
              label: "Clinical Research",
              color: "#1e3a8a",
              stat: "25% fewer dropouts",
            },
            {
              icon: Activity,
              label: "Behavioral Health",
              color: "#0891b2",
              stat: "83% adherence",
            },
            {
              icon: Pill,
              label: "Pharmacies",
              color: "#0891b2",
              stat: "90-day retention",
            },
            {
              icon: Building2,
              label: "Health Systems",
              color: "#1e3a8a",
              stat: "3x cost recovery",
            },
            {
              icon: Heart,
              label: "Senior Living",
              color: "#0891b2",
              stat: "Zero sorting errors",
            },
            {
              icon: BarChart3,
              label: "Health Plans",
              color: "#1e3a8a",
              stat: "Verified data",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-3 rounded-xl bg-[#f8fafc] border border-gray-100"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">
                  {item.label}
                </div>
              </div>
              <div
                className="text-xs font-bold"
                style={{ color: item.color }}
              >
                {item.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Solutions() {
  return (
    <div className="bg-white overflow-hidden">
      {/* ═══ Hero — Light Variant ═══ */}
      <SplitHero
        label="Solutions"
        headline={
          <>
            Your patients. Your data.
            <br />
            <span className="text-[#0891b2]">Your peace of mind.</span>
          </>
        }
        subtitle="Whether you run clinical trials, manage behavioral health clients, fill prescriptions, or lead a health system — iRxReminder is configured for your use case."
        primaryCta={{ label: "Schedule a Pilot", to: "/schedule-pilot" }}
        secondaryCta={{ label: "See the Evidence", to: "/evidence" }}
        trustItems={[
          { icon: Shield, text: "FDA Cleared" },
          { icon: Lock, text: "HIPAA Compliant" },
          { icon: Activity, text: "Real-Time Data" },
        ]}
        visual={<UseCaseVisual />}
        variant="light"
      />

      {/* ═══ Use Case Overview — BentoGrid ═══ */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
                Use Cases
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#1e3a8a] tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                One Platform, Multiple Applications
              </h2>
              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                Every deployment is configured for your specific operational
                context.
              </p>
            </div>
          </FadeUp>

          <BentoGrid
            items={[
              {
                icon: FlaskConical,
                title: "Clinical Research",
                description:
                  "Track every dose event in real time. Reduce participant dropouts by 25%. Export compliance data for regulatory submissions.",
                span: "large",
                stat: "25%",
                color: "#1e3a8a",
                href: "#research",
              },
              {
                icon: Activity,
                title: "Behavioral Health",
                description:
                  "See non-adherence the day it starts. Intervene before crisis. Achieve 83% adherence for psychiatric medications.",
                stat: "83%",
                color: "#0891b2",
                href: "#mental-health",
              },
              {
                icon: Pill,
                title: "Pharmacies",
                description:
                  "Patient retention via 90-day pod fills. Real medication use data, not just fill data. Technology competitors can't match.",
                color: "#0891b2",
              },
              {
                icon: Building2,
                title: "Health Systems",
                description:
                  "Post-discharge monitoring in real time. Reduce readmission penalties. 3x cost recovery via RPM/RTM billing codes.",
                color: "#1e3a8a",
              },
              {
                icon: Heart,
                title: "Senior Living & Home Health",
                description:
                  "Eliminate staff sorting errors. Replace paper MAR sheets with verified digital documentation. Protect your license.",
                color: "#0891b2",
                href: "#senior-living",
              },
              {
                icon: BarChart3,
                title: "Health Plans & Payers",
                description:
                  "Verified adherence data replaces unreliable self-reports. Better risk models. $300B+ annual non-adherence cost opportunity.",
                stat: "$300B+",
                color: "#1e3a8a",
                href: "#underwriters",
              },
            ]}
          />
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="right" />

      {/* ═══ SECTION 1: CLINICAL RESEARCH ═══ */}
      <section
        id="research"
        className="py-24 md:py-32 bg-white scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <FlaskConical className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Finish Studies on Time, on Budget, with Data You Can Trust
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  You&rsquo;ve designed a clean protocol. But 30% of
                  participants drop out unannounced. The ones who stay may not
                  be taking their medication on schedule. You&rsquo;re
                  collecting data that doesn&rsquo;t reflect what actually
                  happened.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#0891b2] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  25%
                </div>
                <p className="text-gray-500 font-medium mt-1">
                  fewer clinical trial dropouts (University of Michigan)
                </p>
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <h4 className="font-bold text-gray-900 mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    {[
                      "Track every dose event in real time. See exactly who\u2019s following protocol.",
                      "Intervene with the 20% who need help instead of bothering the 80% who don\u2019t.",
                      "Automatic dose recording. Participants can\u2019t game compliance data.",
                      "ESmCapture surveys for patient-reported outcomes.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-7 rounded-2xl border border-[#1e3a8a]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Beaker className="w-4 h-4 text-[#1e3a8a]" />
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Featured Study
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HOPA-funded oncology study at University of Michigan Cancer
                    Center: 25% reduction in trial dropouts using iRxReminder.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="research-protocol">
                      <AccordionTrigger>
                        Protocol Integration Details
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Study Mode auto-configures from protocol ID &mdash;
                            no manual setup per participant
                          </li>
                          <li>
                            Supports complex multi-drug regimens with different
                            dosing schedules
                          </li>
                          <li>
                            ESmCapture ecological momentary assessments triggered
                            by dose events or time intervals
                          </li>
                          <li>
                            Exportable compliance data in formats compatible with
                            major CTMS platforms
                          </li>
                          <li>
                            Real-time protocol deviation alerts for study
                            coordinators
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="research-roi">
                      <AccordionTrigger>
                        Financial Impact for Sponsors
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Each dropout costs $20K&ndash;$40K in sunk
                            recruitment costs
                          </li>
                          <li>
                            25% dropout reduction at 100 participants =
                            $500K&ndash;$1M saved per trial
                          </li>
                          <li>
                            Cleaner adherence data reduces need for per-protocol
                            analysis adjustments
                          </li>
                          <li>
                            Faster enrollment-to-completion timelines through
                            better retention
                          </li>
                        </ul>
                        <Link
                          to="/roi-calculator"
                          className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Calculate your ROI{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="left" />

      {/* ═══ SECTION 2: BEHAVIORAL HEALTH ═══ */}
      <section
        id="mental-health"
        className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <h4 className="font-bold text-gray-900">The Reality</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Your clients leave inpatient care stabilized. Within weeks,
                    many stop taking medications. You find out when
                    they&rsquo;re back in crisis&nbsp;&mdash; not before.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <h4 className="font-bold text-gray-900 mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    {[
                      "Real-time dose tracking. See non-adherence the day it starts.",
                      "Intervene early. Avoid the crisis. Keep staff focused on care.",
                      "Telepsychiatry support with medication review and monitoring.",
                      "3x ROI via RPM/RTM billing codes. Patient monitoring is a billable event.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-7 rounded-2xl border border-[#1e3a8a]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#1e3a8a]/10 flex items-center justify-center">
                      <FileCheck className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                    <h4 className="font-bold text-gray-900">
                      Clinical Evidence
                    </h4>
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

            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Activity className="w-7 h-7 text-[#0891b2]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Keep Clients Stable. Reduce Crisis. Lower Staff Burnout.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Non-compliant patients are more likely to require
                  hospitalization, incarceration, or crisis support. Your staff
                  burns out managing emergencies that could have been prevented.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#0891b2] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  83%
                </div>
                <p className="text-gray-500 font-medium mt-1">
                  adherence rate for psychiatric medications
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="right" />

      {/* ═══ SECTION 3: PHARMACIES & HEALTH SYSTEMS ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              More Use Cases
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Growth Opportunities for Pharmacies &amp; Health Systems
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pharmacies */}
            <FadeUp delay={0.1}>
              <div
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 h-full"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Pill className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Differentiate with Technology Your Competitors Can&rsquo;t
                  Match
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You fill prescriptions, but what happens after the patient
                  leaves? You have no visibility. iRxReminder changes that.
                </p>
                <ul className="text-gray-600 text-sm space-y-2.5 mb-6">
                  {[
                    {
                      bold: "Patient retention:",
                      text: "Pods require 90-day fills at your pharmacy.",
                    },
                    {
                      bold: "Real medication use data",
                      text: "\u2009\u2014 not just fill data.",
                    },
                    {
                      bold: "Customer intimacy",
                      text: " through shared adherence data and tailored service.",
                    },
                    {
                      bold: "Reduced liability",
                      text: " from consumer sorting errors.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.bold}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-br from-[#f0fdfa] to-[#e0f7fa] p-5 rounded-xl border border-[#0891b2]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#0891b2]" />
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Simple Integration
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Pod-filling fits into existing pharmacy workflows. Training
                    takes less than 1 hour per pharmacist.
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Health Systems */}
            <FadeUp delay={0.2}>
              <div
                className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 h-full"
                style={{
                  boxShadow:
                    "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <Building2 className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Reduce Readmissions. Increase Bundled Payment Margins.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Patients are discharged, and you have almost no visibility
                  into whether they&rsquo;re taking medications. Readmissions
                  erode margins. Post-discharge non-adherence is the silent
                  driver.
                </p>
                <ul className="text-gray-600 text-sm space-y-2.5 mb-6">
                  {[
                    {
                      bold: "Post-discharge monitoring:",
                      text: " Track medication behavior at home in real time.",
                    },
                    {
                      bold: "Reduce readmission penalties",
                      text: " with proactive intervention.",
                    },
                    {
                      bold: "3x cost recovery",
                      text: " via RPM/RTM billing codes.",
                    },
                    {
                      bold: "100% EHR integration",
                      text: "\u2009\u2014 no workflow disruption.",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{item.bold}</strong>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-5 rounded-xl border border-[#1e3a8a]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-[#1e3a8a]" />
                    <h4 className="font-semibold text-gray-900 text-sm">
                      Compliance
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HIPAA compliant. SOC 2 certified. FDA Class II clearance
                    pathway.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#ffffff" toColor="#f8fafc" direction="left" />

      {/* ═══ SECTION 4: SENIOR LIVING & HOME HEALTH ═══ */}
      <section
        id="senior-living"
        className="py-24 md:py-32 bg-[#f8fafc] scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Heart className="w-7 h-7 text-[#0891b2]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Keep Residents Safe. Reduce Med Errors. Protect Your License.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Assisted living and home health agencies manage dozens of
                  medication regimens daily. Manual administration tracking
                  leads to errors, omissions, and liability. iRxReminder
                  automates the hard part.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#0891b2] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  2&times;
                </div>
                <p className="text-gray-500 font-medium mt-1">
                  Older adult population growth by 2030
                </p>
              </div>
            </FadeUp>

            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <h4 className="font-bold text-gray-900 mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    {[
                      "Pharmacist-filled pods eliminate staff sorting errors and med pass complexity.",
                      "Real-time records replace paper MAR sheets with verified digital documentation.",
                      "Remote monitoring for home health patients between visits.",
                      "Family member visibility reduces anxiety and support calls.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="senior-regulatory">
                      <AccordionTrigger>
                        Regulatory &amp; Compliance Benefits
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Digital MAR documentation for state survey readiness
                          </li>
                          <li>
                            Automated incident reporting for missed medications
                          </li>
                          <li>
                            Reduces medication error liability exposure
                          </li>
                          <li>
                            Supports Quality Measures reporting for CMS Star
                            Ratings
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="senior-staffing">
                      <AccordionTrigger>
                        Staffing &amp; Operational Impact
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Reduces med pass time by eliminating manual sorting
                            and counting
                          </li>
                          <li>
                            Frees nursing staff for higher-value clinical tasks
                          </li>
                          <li>
                            Supports independent living goals &mdash; residents
                            self-administer with safety guardrails
                          </li>
                          <li>
                            RPM/RTM billing generates revenue to offset platform
                            costs
                          </li>
                        </ul>
                        <Link
                          to="/schedule-pilot"
                          className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Schedule a pilot{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider fromColor="#f8fafc" toColor="#ffffff" direction="right" />

      {/* ═══ SECTION 5: HEALTHCARE UNDERWRITERS ═══ */}
      <section
        id="underwriters"
        className="py-24 md:py-32 bg-white scroll-mt-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
                >
                  <h4 className="font-bold text-gray-900 mb-4">
                    How iRxReminder Helps
                  </h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    {[
                      "Verified adherence data replaces self-reported compliance claims.",
                      "Risk stratification based on real-time medication behavior patterns.",
                      "Early intervention prevents costly hospitalizations and ER visits.",
                      "Population health analytics for covered lives.",
                    ].map((text, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06)",
                  }}
                >
                  <Accordion type="multiple">
                    <AccordionItem value="underwriter-data">
                      <AccordionTrigger>
                        Data &amp; Analytics Capabilities
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            Aggregate adherence rates across covered populations
                          </li>
                          <li>
                            Identify high-risk members before adverse events
                            occur
                          </li>
                          <li>
                            Track intervention effectiveness with before/after
                            adherence metrics
                          </li>
                          <li>
                            Integration with claims data for total cost-of-care
                            analysis
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="underwriter-roi">
                      <AccordionTrigger>
                        Financial Impact for Payers
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            $300B+ annual cost of non-adherence &mdash; even
                            small improvements drive significant savings
                          </li>
                          <li>
                            Reduced hospitalization and ER utilization for
                            adherent members
                          </li>
                          <li>
                            Supports value-based care contract performance
                            metrics
                          </li>
                          <li>
                            Member satisfaction improvements from proactive
                            medication support
                          </li>
                        </ul>
                        <Link
                          to="/roi-calculator"
                          className="inline-flex items-center gap-2 text-[#0891b2] font-semibold text-sm mt-4 hover:gap-3 transition-[gap]"
                        >
                          Calculate your ROI{" "}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </FadeUp>
            </div>

            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <BarChart3 className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Better Data. Better Risk Models. Lower Claims.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Payers and underwriters rely on self-reported adherence data
                  that is notoriously unreliable. iRxReminder provides
                  verified, dose-level medication behavior data that transforms
                  risk assessment and population health management.
                </p>
                <div
                  className="text-5xl md:text-6xl font-extrabold text-[#1e3a8a] tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  $300B+
                </div>
                <p className="text-gray-500 font-medium mt-1">
                  Annual cost of medication non-adherence in the U.S.
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PERSONA PATHS ═══ */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Decision Makers
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Speak to Your C-Suite
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Different stakeholders need different answers. Here&rsquo;s what
              each one hears.
            </p>
          </FadeUp>

          {/* Horizontal scroll on mobile, grid on desktop */}
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:pb-0">
            {[
              {
                icon: Shield,
                title: "CMO",
                outcome:
                  "83% adherence. Fewer readmissions. Better patient outcomes across populations.",
                color: "#1e3a8a",
                to: "/platform",
              },
              {
                icon: DollarSign,
                title: "CFO",
                outcome:
                  "3x cost recovery via RPM/RTM codes. Reduced readmission penalties. Measurable ROI.",
                color: "#0891b2",
                to: "/roi-calculator",
              },
              {
                icon: Workflow,
                title: "Case Management",
                outcome:
                  "Simple dashboards. Reliable post-discharge data. Intervene before crisis.",
                color: "#1e3a8a",
                to: "/platform#dashboard",
              },
              {
                icon: Pill,
                title: "Pharmacy Director",
                outcome:
                  "New revenue stream. Patient retention via 90-day pod fills. Real medication use data.",
                color: "#0891b2",
                to: "/platform",
              },
            ].map((persona, i) => (
              <FadeUp key={persona.title} delay={0.1 + i * 0.08}>
                <Link
                  to={persona.to}
                  className="group block min-w-[260px] snap-start bg-white p-7 rounded-2xl border border-gray-100 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 h-full"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(8,145,178,0.04), 0 4px 12px rgba(8,145,178,0.06), 0 16px 40px rgba(30,58,138,0.06)",
                  }}
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
                  <div
                    className="font-bold text-lg text-gray-900 mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {persona.title}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {persona.outcome}
                  </p>
                  <span className="inline-flex items-center text-[#0891b2] font-semibold text-sm group-hover:gap-3 gap-2 transition-[gap]">
                    See details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <GrainTexture opacity={0.04} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See how iRxReminder fits
              <br />
              <span className="text-[#0891b2]">your use case</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              We&rsquo;ll configure a pilot around your specific
              needs&nbsp;&mdash; research, behavioral health, pharmacy, or
              health system.
            </p>
            <FloatingBadgeGroup
              variant="glass"
              className="justify-center mb-10"
              badges={[
                { icon: Shield, text: "FDA Cleared" },
                { icon: Lock, text: "HIPAA Compliant" },
                { icon: CheckCircle2, text: "SOC 2 Type II" },
              ]}
            />
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
                className="border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white text-lg px-8 py-6 transition-colors"
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
