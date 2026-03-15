import { useState } from "react";
import { Link } from "react-router";
import {
  Shield,
  TrendingUp,
  DollarSign,
  ArrowRight,
  Lock,
  CheckCircle2,
  Settings,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Slider } from "../components/ui/slider";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";
import { GrainTexture } from "@/app/components/GrainTexture";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";
import { FloatingBadgeGroup } from "@/app/components/FloatingBadge";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

export function ROICalculator() {
  const prefersReducedMotion = useReducedMotion();
  const heroAnimation = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
      };

  const [patientCount, setPatientCount] = useState(500);
  const [duration, setDuration] = useState(6);
  const [reimbursementRate, setReimbursementRate] = useState(135);
  const [platformFee, setPlatformFee] = useState(50);

  const totalRevenue = patientCount * duration * reimbursementRate;
  const totalCost = patientCount * duration * platformFee;
  const netProfit = totalRevenue - totalCost;
  const roiMultiplier =
    totalCost > 0 ? (totalRevenue / totalCost).toFixed(1) : "0";
  const paybackMonths =
    reimbursementRate > platformFee
      ? Math.ceil(platformFee / (reimbursementRate - platformFee))
      : 0;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <GrainTexture opacity={0.04} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div {...heroAnimation}>
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              ROI Calculator
            </p>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Your Path to
              <br />
              <span className="text-[#0891b2]">Reimbursable Remote Care</span>
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              See how much reimbursable revenue your health system could
              generate with iRxReminder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator — Split Layout */}
      <section className="py-16 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100"
              style={{
                boxShadow:
                  "0 1px 3px rgba(30,58,138,0.06), 0 8px 24px rgba(30,58,138,0.08), 0 24px 48px rgba(30,58,138,0.06)",
              }}
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left: Input Controls */}
                <div>
                  <h2
                    className="text-2xl font-bold text-[#1e3a8a] mb-8 tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Adjust Your Parameters
                  </h2>

                  <div className="space-y-8">
                    {/* Patient Count */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label
                          htmlFor="patient-count"
                          className="text-base font-semibold"
                        >
                          Number of Patients
                        </Label>
                        <span
                          className="text-2xl font-extrabold text-[#1e3a8a] tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
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
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>10</span>
                        <span>1,000</span>
                      </div>
                    </div>

                    {/* Duration */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <Label
                          htmlFor="duration"
                          className="text-base font-semibold"
                        >
                          Monitoring Duration
                        </Label>
                        <span
                          className="text-2xl font-extrabold text-[#0891b2] tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
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
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>1 month</span>
                        <span>12 months</span>
                      </div>
                    </div>

                    {/* Reimbursement Rate */}
                    <div>
                      <Label
                        htmlFor="reimbursement"
                        className="text-base font-semibold mb-3 block"
                      >
                        Reimbursement Rate per Patient/Month
                      </Label>
                      <div className="flex items-center gap-4">
                        <div className="relative flex-1 max-w-xs">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            $
                          </span>
                          <Input
                            id="reimbursement"
                            type="number"
                            value={reimbursementRate}
                            onChange={(e) =>
                              setReimbursementRate(Number(e.target.value))
                            }
                            className="pl-7"
                          />
                        </div>
                        <p className="text-sm text-gray-500">
                          Based on typical RPM/RTM billing codes
                          ($120&ndash;$150)
                        </p>
                      </div>
                    </div>

                    {/* Platform Fee */}
                    <div>
                      <Label
                        htmlFor="platform-fee"
                        className="text-base font-semibold mb-3 block"
                      >
                        iRxReminder Fee per Patient/Month
                      </Label>
                      <div className="flex items-center gap-4">
                        <div className="relative flex-1 max-w-xs">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            $
                          </span>
                          <Input
                            id="platform-fee"
                            type="number"
                            value={platformFee}
                            onChange={(e) =>
                              setPlatformFee(Number(e.target.value))
                            }
                            className="pl-7"
                          />
                        </div>
                        <p className="text-sm text-gray-500">
                          Platform + device cost
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Live Results */}
                <div className="flex flex-col">
                  {/* Hero stat — Net Profit */}
                  <div
                    className="relative rounded-2xl p-8 overflow-hidden mb-6"
                    style={{
                      background: "linear-gradient(135deg, #0f1d3d 0%, #152c6e 50%, #1e3a8a 100%)",
                    }}
                  >
                    <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#0891b2]/15 rounded-full blur-[60px]" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#0891b2] mb-2">
                        Projected Net Profit
                      </p>
                      <p
                        className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {formatCurrency(netProfit)}
                      </p>
                      <p className="text-sm text-blue-200">
                        over {duration} month{duration > 1 ? "s" : ""} &middot; {patientCount.toLocaleString()} patients
                      </p>
                    </div>
                  </div>

                  {/* Breakdown rows */}
                  <div className="space-y-3">
                    {[
                      { label: "Reimbursable Revenue", value: formatCurrency(totalRevenue), color: "#0891b2", bgClass: "bg-[#0891b2]/5 border-[#0891b2]/10" },
                      { label: "Program Cost", value: formatCurrency(totalCost), color: "#64748b", bgClass: "bg-gray-50 border-gray-100" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center justify-between px-5 py-3.5 rounded-xl border ${item.bgClass}`}
                      >
                        <span className="text-sm font-medium text-gray-600">{item.label}</span>
                        <span
                          className="text-xl font-bold tracking-tight"
                          style={{ color: item.color, fontFamily: "var(--font-display)" }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}

                    {/* ROI + Payback row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex flex-col items-center justify-center px-4 py-4 rounded-xl bg-[#0891b2]/5 border border-[#0891b2]/10">
                        <span
                          className="text-2xl font-extrabold tracking-tight text-[#0891b2]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {roiMultiplier}&times;
                        </span>
                        <span className="text-xs font-medium text-gray-500 mt-1">ROI Multiplier</span>
                      </div>
                      <div className="flex flex-col items-center justify-center px-4 py-4 rounded-xl bg-[#059669]/5 border border-[#059669]/10">
                        <span
                          className="text-2xl font-extrabold tracking-tight text-[#059669]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {paybackMonths > 0 ? `~${paybackMonths} mo` : "Instant"}
                        </span>
                        <span className="text-xs font-medium text-gray-500 mt-1">Payback Period</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust badges */}
                  <div className="mt-6">
                    <FloatingBadgeGroup
                      badges={[
                        { icon: Shield, text: "NIH-Funded" },
                        { icon: TrendingUp, text: "80%+ Adherence" },
                        { icon: DollarSign, text: "RPM/RTM Billable" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2
              className="text-3xl font-bold text-[#1e3a8a] mb-10 text-center tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Health Systems Choose iRxReminder
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Proven Clinical Outcomes",
                desc: "NIH-funded studies demonstrate 48% to 80%+ improvement in medication adherence, reducing readmissions and improving patient safety.",
                color: "#1e3a8a",
              },
              {
                icon: Settings,
                title: "Seamless Workflow",
                desc: "100% EHR integration means care teams get real-time adherence data without changing workflows. Pharmacy-loaded pods eliminate setup complexity.",
                color: "#0891b2",
              },
              {
                icon: DollarSign,
                title: "Fully Reimbursable",
                desc: "The platform qualifies for RPM and RTM billing codes, generating revenue that covers program costs and delivers positive ROI.",
                color: "#059669",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.08}>
                <div
                  className="bg-white p-7 rounded-2xl border border-gray-100 h-full"
                  style={{
                    boxShadow:
                      "0 1px 3px rgba(30,58,138,0.04), 0 4px 12px rgba(30,58,138,0.06)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${item.color}1a` }}
                  >
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: item.color }}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white transition-colors"
              >
                <Link to="/evidence">View Clinical Validation</Link>
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0891b2]/15 rounded-full blur-[80px]" />
        <GrainTexture opacity={0.04} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Start Your Pilot Program?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Let&rsquo;s discuss how iRxReminder can deliver measurable
              outcomes for your health system
            </p>
            <FloatingBadgeGroup
              variant="glass"
              className="justify-center mb-10"
              badges={[
                // TODO: Update to "FDA 510(k) Cleared" once clearance is granted
                { icon: Shield, text: "FDA 510(k) Pathway" },
                { icon: Lock, text: "HIPAA Compliant" },
              ]}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] transition-[background-color,box-shadow]"
              >
                <Link to="/schedule-pilot">
                  Schedule a Pilot
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white transition-colors"
              >
                <Link to="/schedule-pilot">Schedule a Pilot</Link>
              </Button>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Or call us at{" "}
              <a
                href="tel:3308068675"
                className="font-semibold hover:text-white transition-colors"
              >
                330.806.8675
              </a>
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
