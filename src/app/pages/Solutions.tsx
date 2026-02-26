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
              Your patients. Your data.
              <br />
              <span className="text-[#0891b2]">Your peace of mind.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto mb-10">
              Whether you run clinical trials, manage behavioral health clients,
              fill prescriptions, or lead a health system&nbsp;&mdash; iRxReminder
              is configured for your use case.
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
              <a href="#research">Explore Use Cases</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ======= SECTION 1: CLINICAL RESEARCH ======= */}
      <section id="research" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Hero's goal */}
            <FadeUp>
              <div>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <FlaskConical className="w-7 h-7 text-[#1e3a8a]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight">
                  Finish Studies on Time, on Budget, with Data You Can Trust
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  You&rsquo;ve designed a clean protocol. But 30% of participants
                  drop out unannounced. The ones who stay may not be taking their
                  medication on schedule. You&rsquo;re collecting data that
                  doesn&rsquo;t reflect what actually happened.
                </p>
                <div className="text-5xl md:text-6xl font-extrabold text-[#0891b2] tracking-tight">
                  25%
                </div>
                <p className="text-gray-500 font-medium mt-1">
                  fewer clinical trial dropouts (University of Michigan)
                </p>
              </div>
            </FadeUp>

            {/* Right: Solution + evidence */}
            <div className="space-y-5">
              <FadeUp delay={0.1}>
                <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                  <h4 className="font-bold text-gray-900 mb-4">How iRxReminder Helps</h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Track every dose event in real time. See exactly who&rsquo;s following protocol.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Intervene with the 20% who need help instead of bothering the 80% who don&rsquo;t.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Automatic dose recording. Participants can&rsquo;t game compliance data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>ESmCapture surveys for patient-reported outcomes.</span>
                    </li>
                  </ul>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-7 rounded-2xl border border-[#1e3a8a]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Beaker className="w-4 h-4 text-[#1e3a8a]" />
                    <h4 className="font-semibold text-gray-900 text-sm">Featured Study</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HOPA-funded oncology study at University of Michigan Cancer Center:
                    25% reduction in trial dropouts using iRxReminder.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100" />
      </div>

      {/* ======= SECTION 2: BEHAVIORAL HEALTH ======= */}
      <section id="mental-health" className="py-24 md:py-32 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Solution + evidence */}
            <div className="order-2 lg:order-1 space-y-5">
              <FadeUp delay={0.1}>
                <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center">
                      <AlertTriangle className="w-4.5 h-4.5 text-red-500" />
                    </div>
                    <h4 className="font-bold text-gray-900">The Reality</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Your clients leave inpatient care stabilized. Within weeks,
                    many stop taking medications. You find out when they&rsquo;re
                    back in crisis&nbsp;&mdash; not before.
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]">
                  <h4 className="font-bold text-gray-900 mb-4">How iRxReminder Helps</h4>
                  <ul className="text-gray-600 space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Real-time dose tracking. See non-adherence the day it starts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Intervene early. Avoid the crisis. Keep staff focused on care.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>Telepsychiatry support with medication review and monitoring.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-1" />
                      <span>3x ROI via RPM/RTM billing codes. Patient monitoring is a billable event.</span>
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

            {/* Right: Hero's goal */}
            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Activity className="w-7 h-7 text-[#0891b2]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 tracking-tight">
                  Keep Clients Stable. Reduce Crisis. Lower Staff Burnout.
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Non-compliant patients are more likely to require
                  hospitalization, incarceration, or crisis support. Your staff
                  burns out managing emergencies that could have been prevented.
                </p>
                <div className="text-5xl md:text-6xl font-extrabold text-[#0891b2] tracking-tight">
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

      {/* ======= SECTION 3: PHARMACIES & HEALTH SYSTEMS ======= */}
      <section className="py-24 md:py-32 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              More Use Cases
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-16 tracking-tight">
              Growth Opportunities for Pharmacies &amp; Health Systems
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pharmacies */}
            <FadeUp delay={0.1}>
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#0891b2]/10">
                  <Pill className="w-6 h-6 text-[#0891b2]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  Differentiate with Technology Your Competitors Can&rsquo;t Match
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  You fill prescriptions, but what happens after the patient
                  leaves? You have no visibility. iRxReminder changes that.
                </p>
                <ul className="text-gray-600 text-sm space-y-2.5 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Patient retention:</strong> Pods require 90-day fills at your pharmacy.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Real medication use data</strong>&nbsp;&mdash; not just fill data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Customer intimacy</strong> through shared adherence data and tailored service.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Reduced liability</strong> from consumer sorting errors.</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-br from-[#f0fdfa] to-[#e0f7fa] p-5 rounded-xl border border-[#0891b2]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#0891b2]" />
                    <h4 className="font-semibold text-gray-900 text-sm">Simple Integration</h4>
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
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1e3a8a]/10">
                  <Building2 className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  Reduce Readmissions. Increase Bundled Payment Margins.
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Patients are discharged, and you have almost no visibility into
                  whether they&rsquo;re taking medications. Readmissions erode
                  margins. Post-discharge non-adherence is the silent driver.
                </p>
                <ul className="text-gray-600 text-sm space-y-2.5 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Post-discharge monitoring:</strong> Track medication behavior at home in real time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>Reduce readmission penalties</strong> with proactive intervention.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>3x cost recovery</strong> via RPM/RTM billing codes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span><strong>100% EHR integration</strong>&nbsp;&mdash; no workflow disruption.</span>
                  </li>
                </ul>
                <div className="bg-gradient-to-br from-[#f8fafc] to-[#eef5ff] p-5 rounded-xl border border-[#1e3a8a]/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-[#1e3a8a]" />
                    <h4 className="font-semibold text-gray-900 text-sm">Compliance</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HIPAA compliant. SOC 2 certified. FDA Class II clearance pathway.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= SECTION 4: BUYER PERSONAS ======= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4 text-center">
              Decision Makers
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] text-center mb-4 tracking-tight">
              Speak to Your C-Suite
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              Different stakeholders need different answers. Here&rsquo;s what each one hears.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "CMO",
                outcome: "83% adherence. Fewer readmissions. Better patient outcomes across populations.",
                color: "#1e3a8a",
                to: "/platform",
              },
              {
                icon: DollarSign,
                title: "CFO",
                outcome: "3x cost recovery via RPM/RTM codes. Reduced readmission penalties. Measurable ROI.",
                color: "#0891b2",
                to: "/roi-calculator",
              },
              {
                icon: Workflow,
                title: "Case Management",
                outcome: "Simple dashboards. Reliable post-discharge data. Intervene before crisis.",
                color: "#1e3a8a",
                to: "/platform#dashboard",
              },
              {
                icon: Pill,
                title: "Pharmacy Director",
                outcome: "New revenue stream. Patient retention via 90-day pod fills. Real medication use data.",
                color: "#0891b2",
                to: "/platform",
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
                  <div className="font-bold text-lg text-gray-900 mb-3">
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

      {/* ======= CTA ======= */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[100px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              See how iRxReminder fits
              <br />
              <span className="text-[#0891b2]">your use case</span>
            </h2>
            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              We&rsquo;ll configure a pilot around your specific needs&nbsp;&mdash;
              research, behavioral health, pharmacy, or health system.
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
