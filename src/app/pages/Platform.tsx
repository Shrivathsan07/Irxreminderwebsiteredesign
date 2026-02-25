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
              One Intelligent Platform for
              <br />
              <span className="text-[#0891b2]">Medication Management</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
              A complete system combining IoT hardware, mobile apps, and cloud dashboards to ensure medication adherence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Sub-Navigation — 4 links */}
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

      {/* iLidRx Pod — trimmed to 4 features */}
      <section id="pod" className="py-24 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Hardware
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iLidRx Pod
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              Patent-pending IoT dispensing device with Hold, Place, and Tilt&trade; gesture-based activation and smart LED alerting
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeUp delay={0.1}>
              <div className="space-y-5">
                {[
                  { title: "Hold, Place, and Tilt\u2122 Dispensing", desc: "Patent-pending gesture-based activation ensures intentional medication taking and prevents accidental dispensing" },
                  { title: "Smart LED Alerting System", desc: "Green \u2192 Yellow \u2192 Red progression guides dosing windows intuitively" },
                  { title: "Real-Time Dose Recording", desc: "Every dispensing event automatically sent to app and dashboard \u2014 cannot game compliance data" },
                  { title: "Overdose Prevention", desc: "Only dispenses correct amount at correct time \u2014 patients cannot double-dose" },
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
                    { color: "bg-green-500", label: "Green: Window Open", desc: "Dosing window is open. Patient can dispense." },
                    { color: "bg-yellow-400", label: "Yellow: Mid-Window Alert", desc: "Reminder that dosing window is halfway through." },
                    { color: "bg-red-500", label: "Red: Window Closing", desc: "Final alert to ensure adherence before window closes." },
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
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* iRxCapture App — includes ESmCapture as a bullet */}
      <section id="app" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Mobile App
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iRxCapture App
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              Patient-facing mobile application for medication reminders, education, and symptom tracking
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Medication Reminders", desc: "Push notifications and in-app alerts ensure patients never miss a dose" },
                { title: "Educational Content", desc: "Medication-specific information and side effect guidance" },
                { title: "Symptom Tracking", desc: "Patients log symptoms and share with care team in real time" },
                { title: "Pod Connectivity", desc: "Seamless Bluetooth connection to iLidRx Pod for real-time sync" },
                { title: "Adherence Visualization", desc: "Patients see their own progress and adherence patterns" },
                { title: "ESmCapture Surveys", desc: "Customizable ecological momentary assessment surveys for health behavior and symptom tracking" },
              ].map((feature, i) => (
                <div key={i} className="bg-[#f8fafc] p-6 rounded-xl border border-gray-100">
                  <CheckCircle2 className="w-5 h-5 text-[#0891b2] mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* iRxControl Center — without Study/Participant Management cards */}
      <section id="dashboard" className="py-24 bg-[#f8fafc] scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Provider Dashboard
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              iRxControl Center
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              Cloud-based hub for healthcare professionals — deploy regimens remotely and receive real-time adherence data
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-4">
              {[
                { title: "Deploy Medication Regimens Remotely", desc: "Set up and modify dosing schedules without requiring patient visits or physical repackaging" },
                { title: "Real-Time Adherence Data", desc: "See overall summaries and individual medication adherence for each patient in real-time" },
                { title: "Calendar View for Pattern Recognition", desc: "Identify patterns of missed doses by day and time to intervene proactively" },
                { title: "Alert Care Team on Missed Doses", desc: "Automatic notifications enable timely intervention before problems escalate" },
                { title: "EHR/EDC System Integration", desc: "Interface with Electronic Health Records for seamless workflows" },
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
        </div>
      </section>

      {/* EHR Integration — includes FDA Class II badge */}
      <section id="integration" className="py-24 bg-white scroll-mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Integration
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4 tracking-tight">
              EHR &amp; Device Integration
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl">
              100% seamless integration with electronic health records and existing hospital systems
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FadeUp delay={0.1}>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">Integration Capabilities</h3>
                {[
                  { title: "HL7 FHIR Compatibility", desc: "Industry-standard data exchange protocols for maximum interoperability" },
                  { title: "Bi-Directional Data Flow", desc: "Medication orders flow from EHR; adherence data flows back to patient record" },
                  { title: "No Manual Data Entry", desc: "Automated workflows eliminate duplicate entry and reduce staff burden" },
                  { title: "Epic, Cerner, Allscripts Ready", desc: "Pre-built connectors for major EHR platforms" },
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
                  { title: "HIPAA Compliant", desc: "Full compliance with healthcare data privacy regulations" },
                  { title: "End-to-End Encryption", desc: "All patient data encrypted in transit and at rest" },
                  { title: "SOC 2 Type II Certified", desc: "Third-party audited security controls and practices" },
                  { title: "FDA Class II Clearance Pathway", desc: "Led by Dr. Fred Ma, MD PhD — 1,200+ clinical trials and 200+ drugs/devices through FDA clearance" },
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
                  { week: "Week 1-2", task: "Technical planning and EHR mapping", color: "#1e3a8a" },
                  { week: "Week 3-4", task: "Development and testing in sandbox", color: "#0891b2" },
                  { week: "Week 5-6", task: "User acceptance testing", color: "#1e3a8a" },
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

      {/* CTA — updated per Phase 4: Platform = Evaluation stage */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Ready to See the Platform in Action?
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Calculate your potential ROI or schedule a personalized pilot program
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/roi-calculator">
                  Calculate Your ROI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/schedule-pilot">Schedule a Pilot</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
