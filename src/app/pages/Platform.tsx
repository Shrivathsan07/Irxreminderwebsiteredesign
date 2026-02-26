import { Link } from "react-router";
import {
  CheckCircle2,
  ArrowRight,
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

export function Platform() {
  return (
    <div className="bg-white">
      {/* Hero */}
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
              Platform
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              One Platform. Three Components.
              <br />
              <span className="text-[#0891b2]">Complete Visibility.</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              See exactly what&rsquo;s happening with your patients&rsquo;
              medication behavior&nbsp;&mdash; from dispensing to adherence to intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-6 text-sm font-medium scrollbar-hide">
            {[
              { href: "#pod", label: "iLidRx Pod" },
              { href: "#app", label: "iRxCapture App" },
              { href: "#dashboard", label: "iRxControl Center" },
              { href: "#integration", label: "EHR Integration" },
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

      {/* ======= iLidRx Pod — Problem → Solution → Outcome ======= */}
      <section id="pod" className="py-24 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Smart Dispensing
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iLidRx Pod
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Pill organizers cause sorting errors that send patients to the ER.
              Bottle caps count openings but can&rsquo;t verify dosing. The iLidRx pod
              dispenses the right medication, at the right time, one dose at a time.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1}>
              <div className="space-y-5">
                {[
                  { title: "90-Day Supply Per Pod", desc: "Pharmacist fills the pod. Patient never sorts pills. Zero sorting errors." },
                  { title: "Hold, Place, and Tilt\u2122 Dispensing", desc: "Gesture-based activation ensures intentional dosing. Patients can\u2019t accidentally double-dose or \u201ccatch up\u201d on missed doses." },
                  { title: "Real-Time Dose Recording", desc: "Every dispensing event is automatically reported to your team. Compliance data can\u2019t be gamed." },
                  { title: "Inductive Charging", desc: "Place the pod on its stand to charge. No cables. Portable during the day." },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* LED System */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06)]">
                <h3 className="text-xl font-bold text-gray-900 mb-6">LED Color System</h3>
                <div className="space-y-4">
                  {[
                    { color: "bg-green-500", label: "Green: Window Open", desc: "Dosing window is active. Patient can dispense." },
                    { color: "bg-yellow-400", label: "Yellow: Mid-Window", desc: "Gentle reminder. Dosing window is halfway through." },
                    { color: "bg-red-500", label: "Red: Window Closing", desc: "Final alert before the window closes." },
                  ].map((led) => (
                    <div key={led.label} className="flex items-start gap-4">
                      <div className={`w-8 h-8 ${led.color} rounded-full flex-shrink-0 mt-0.5`} />
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{led.label}</div>
                        <div className="text-sm text-gray-500">{led.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm text-[#1e3a8a] font-semibold">
                    Patients take the right dose. Period.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ======= iRxCapture App — Problem → Solution → Outcome ======= */}
      <section id="app" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Patient App
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iRxCapture App
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Most reminders nag. Patients tune them out within weeks.
              iRxCapture only alerts when a patient actually forgets&nbsp;&mdash;
              turning reminders from annoying to meaningful.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Smart, Not Nagging", desc: "Only alerts when the patient truly forgets. No alert fatigue." },
                { title: "Study Mode", desc: "Enter study ID and participant ID. Auto-loads medications, education, and regimen schedules." },
                { title: "Symptom Reporting", desc: "Patients log symptoms directly in the app. Data flows to the care team." },
                { title: "Patient Education", desc: "Medication-specific information delivered at the right moment." },
                { title: "Adherence Visualization", desc: "Patients see their own progress. Autonomy, not surveillance." },
                { title: "ESmCapture Surveys", desc: "Customizable ecological momentary assessments for health behavior and symptom tracking." },
              ].map((feature, i) => (
                <div key={i} className="bg-[#f8fafc] p-6 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0891b2] mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-10 text-[#1e3a8a] font-semibold text-center">
              Adherence through support, not nagging.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ======= iRxControl Center — Problem → Solution → Outcome ======= */}
      <section id="dashboard" className="py-24 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Provider Dashboard
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iRxControl Center
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              You can&rsquo;t manage what you can&rsquo;t see. The iRxControl
              Center shows every dose&nbsp;&mdash; taken or missed&nbsp;&mdash;
              across your entire patient population, in real time.
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-4">
              {[
                { title: "Deploy Regimens Remotely", desc: "Set up and modify dosing schedules without patient visits or physical repackaging." },
                { title: "Real-Time Adherence Data", desc: "Summary views and individual medication adherence for every patient. No waiting for clinic visits." },
                { title: "Calendar View for Pattern Recognition", desc: "Spot patterns of missed doses by day and time. Intervene proactively, not reactively." },
                { title: "Missed-Dose Alerts", desc: "Your team gets notified the moment a patient misses a dose. Act before problems escalate." },
                { title: "Role-Based Access", desc: "Assign team roles. Researchers, clinicians, and coordinators each see what they need." },
              ].map((cap, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{cap.title}</h4>
                    <p className="text-sm text-gray-500 mt-0.5">{cap.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-10 text-[#1e3a8a] font-semibold text-center">
              Intervene early. Not after the ER visit.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ======= EHR Integration ======= */}
      <section id="integration" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Integration
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              Works with Your EHR
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
              Medication orders flow from the EHR. Adherence data flows back.
              No manual data entry. No workflow disruption.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Integration</h3>
                {[
                  { title: "HL7 FHIR Compatible", desc: "Industry-standard data exchange for maximum interoperability." },
                  { title: "Bi-Directional Data Flow", desc: "Orders in. Adherence data out. Automated." },
                  { title: "Zero Manual Entry", desc: "Automated workflows eliminate duplicate data entry for your staff." },
                  { title: "Epic, Cerner, Allscripts Ready", desc: "Pre-built connectors for major EHR platforms." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Security &amp; Compliance</h3>
                {[
                  { title: "HIPAA Compliant", desc: "Full compliance with healthcare data privacy regulations." },
                  { title: "End-to-End Encryption", desc: "All patient data encrypted in transit and at rest." },
                  { title: "SOC 2 Type II Certified", desc: "Third-party audited security controls." },
                  { title: "FDA Class II Clearance Pathway", desc: "Led by Dr. Fred Ma, MD PhD\u2009\u2014\u20091,200+ clinical trials and 200+ drugs/devices through FDA clearance." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <div className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-6">Implementation Timeline</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { week: "Week 1\u20132", task: "Technical planning and EHR mapping", color: "#1e3a8a" },
                  { week: "Week 3\u20134", task: "Development and sandbox testing", color: "#0891b2" },
                  { week: "Week 5\u20136", task: "User acceptance testing", color: "#1e3a8a" },
                  { week: "Week 7", task: "Production launch and monitoring", color: "#0891b2" },
                ].map((item) => (
                  <div key={item.week}>
                    <div className="text-lg font-bold mb-1" style={{ color: item.color }}>{item.week}</div>
                    <p className="text-sm text-gray-500">{item.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              See What Real-Time Monitoring Looks Like
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Calculate your potential ROI or schedule a personalized pilot
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
