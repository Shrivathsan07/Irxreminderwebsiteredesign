import { useState } from "react";
import { Link } from "react-router";
import { Shield, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
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

export function ROICalculator() {
  const [patientCount, setPatientCount] = useState(500);
  const [duration, setDuration] = useState(6);
  const [reimbursementRate, setReimbursementRate] = useState(135);
  const [platformFee, setPlatformFee] = useState(50);

  const totalRevenue = patientCount * duration * reimbursementRate;
  const totalCost = patientCount * duration * platformFee;
  const netProfit = totalRevenue - totalCost;
  const roiMultiplier = totalCost > 0 ? (totalRevenue / totalCost).toFixed(1) : 0;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              ROI Calculator
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Your Path to
              <br />
              <span className="text-[#0891b2]">Reimbursable Remote Care</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              See how much reimbursable revenue your health system could generate with iRxReminder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 -mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="bg-white rounded-2xl shadow-[0_1px_3px_rgba(30,58,138,0.06),0_8px_24px_rgba(30,58,138,0.08),0_24px_48px_rgba(30,58,138,0.06)] p-8 md:p-12 border border-gray-100">
              {/* Input Controls */}
              <div className="mb-12 space-y-8">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 tracking-tight">
                  Adjust Your Parameters
                </h2>

                {/* Patient Count */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label htmlFor="patient-count" className="text-base font-semibold">
                      Number of Patients
                    </Label>
                    <span className="text-2xl font-extrabold text-[#1e3a8a] tracking-tight">
                      {patientCount.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    id="patient-count"
                    min={10}
                    max={1000}
                    step={10}
                    value={[patientCount]}
                    onValueChange={(value) => setPatientCount(value[0])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>10</span>
                    <span>1,000</span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <Label htmlFor="duration" className="text-base font-semibold">
                      Monitoring Duration
                    </Label>
                    <span className="text-2xl font-extrabold text-[#0891b2] tracking-tight">
                      {duration} {duration === 1 ? "month" : "months"}
                    </span>
                  </div>
                  <Slider
                    id="duration"
                    min={1}
                    max={12}
                    step={1}
                    value={[duration]}
                    onValueChange={(value) => setDuration(value[0])}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1 month</span>
                    <span>12 months</span>
                  </div>
                </div>

                {/* Reimbursement Rate */}
                <div>
                  <Label htmlFor="reimbursement" className="text-base font-semibold mb-3 block">
                    Reimbursement Rate per Patient/Month
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-xs">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <Input
                        id="reimbursement"
                        type="number"
                        value={reimbursementRate}
                        onChange={(e) => setReimbursementRate(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Based on typical RPM/RTM billing codes ($120\u2013$150)</p>
                  </div>
                </div>

                {/* Platform Fee */}
                <div>
                  <Label htmlFor="platform-fee" className="text-base font-semibold mb-3 block">
                    iRxReminder Fee per Patient/Month
                  </Label>
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-xs">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <Input
                        id="platform-fee"
                        type="number"
                        value={platformFee}
                        onChange={(e) => setPlatformFee(Number(e.target.value))}
                        className="pl-7"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Platform + device cost</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="border-t border-gray-100 pt-12">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-8 text-center tracking-tight">
                  Your Financial Outcomes
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Reimbursable Revenue</div>
                    <div className="text-2xl font-extrabold text-[#1e3a8a] tracking-tight">{formatCurrency(totalRevenue)}</div>
                    <div className="text-xs text-gray-400 mt-1">From RPM/RTM reimbursements</div>
                  </div>
                  <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-100">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Program Cost</div>
                    <div className="text-2xl font-extrabold text-gray-600 tracking-tight">{formatCurrency(totalCost)}</div>
                    <div className="text-xs text-gray-400 mt-1">Total platform + device cost</div>
                  </div>
                  <div className="bg-[#f8fafc] p-6 rounded-xl border border-green-100">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Net Profit</div>
                    <div className="text-2xl font-extrabold text-green-600 tracking-tight">{formatCurrency(netProfit)}</div>
                    <div className="text-xs text-gray-400 mt-1">{patientCount} patients over {duration} months</div>
                  </div>
                  <div className="bg-[#0891b2]/5 p-6 rounded-xl border border-[#0891b2]/10">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">ROI Multiplier</div>
                    <div className="text-2xl font-extrabold text-[#0891b2] tracking-tight">{roiMultiplier}\u00d7</div>
                    <div className="text-xs text-gray-400 mt-1">Return on investment</div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid md:grid-cols-3 gap-4 mb-8 pt-8 border-t border-gray-100">
                  {[
                    { icon: Shield, label: "NIH-Funded", sub: "Clinical Validation", color: "#1e3a8a" },
                    { icon: TrendingUp, label: "48% \u2192 80%+", sub: "Adherence Improvement", color: "#0891b2" },
                    { icon: DollarSign, label: "RPM/RTM", sub: "Reimbursable Program", color: "#059669" },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3">
                      <badge.icon className="w-8 h-8" style={{ color: badge.color }} />
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{badge.label}</div>
                        <div className="text-xs text-gray-400">{badge.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mb-8 text-center">
                  * Based on typical RPM reimbursement rates. Actual results may vary by payer and implementation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]"
                  >
                    Email Me My ROI Report
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors">
                    <Link to="/schedule-pilot">
                      Schedule a Pilot <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8 text-center tracking-tight">
              Why Health Systems Choose iRxReminder
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {[
              { title: "Proven Clinical Outcomes", desc: "NIH-funded studies demonstrate 48% to 80%+ improvement in medication adherence across multiple patient populations, reducing readmissions and improving patient safety." },
              { title: "Seamless Workflow Integration", desc: "100% EHR integration means your care teams get real-time adherence data without changing their workflows. Pharmacy-loaded pods eliminate patient setup complexity." },
              { title: "Fully Reimbursable Program", desc: "The platform qualifies for RPM and RTM billing codes, generating revenue that covers program costs and delivers positive ROI." },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_4px_12px_rgba(30,58,138,0.06)]">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors">
              <Link to="/evidence">View Clinical Validation</Link>
            </Button>
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
              Ready to Start Your Pilot Program?
            </h2>
            <p className="text-xl text-blue-100/80 mb-10">
              Let&rsquo;s discuss how iRxReminder can deliver measurable outcomes for your health system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]">
                <Link to="/schedule-pilot">Schedule a Pilot</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/60 hover:border-white/80 text-white hover:bg-white/10 transition-colors">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <p className="mt-6 text-blue-200/60 text-sm">
              Or call us at{" "}
              <a href="tel:3308068675" className="font-semibold hover:text-white transition-colors">
                330.806.8675
              </a>
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
