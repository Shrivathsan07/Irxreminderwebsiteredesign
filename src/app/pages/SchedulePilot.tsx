import { useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Shield, TrendingUp, Award } from "lucide-react";
import { motion } from "motion/react";
import { FadeUp } from "@/app/components/animations";

interface PilotFormData {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
}

export function SchedulePilot() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PilotFormData>();

  const onSubmit = (data: PilotFormData) => {
    console.log("Pilot request submitted:", data);
    alert(
      "Thank you! We will contact you within 24 hours to discuss your pilot program."
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#152c6e] to-[#1e3a8a]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0891b2]/15 rounded-full blur-[100px]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0891b2] font-semibold text-sm tracking-widest uppercase mb-4">
              Get Started
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Schedule a <span className="text-[#0891b2]">Pilot Program</span>
            </h1>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
              See firsthand how iRxReminder improves medication adherence,
              reduces readmissions, and generates reimbursable revenue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeUp>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_1px_3px_rgba(30,58,138,0.04),0_8px_24px_rgba(30,58,138,0.06)]"
                >
                  <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6 tracking-tight">
                    Pilot Program Information
                  </h2>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          {...register("name", { required: "Name is required" })}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="title">Title *</Label>
                        <Input
                          id="title"
                          {...register("title", { required: "Title is required" })}
                          aria-describedby={errors.title ? "title-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.title && (
                          <p id="title-error" className="text-sm text-red-500 mt-1">{errors.title.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        {...register("organization", { required: "Organization is required" })}
                        aria-describedby={errors.organization ? "organization-error" : undefined}
                        className="mt-1.5"
                      />
                      {errors.organization && (
                        <p id="organization-error" className="text-sm text-red-500 mt-1">{errors.organization.message}</p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Enter a valid email address",
                            },
                          })}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone", { required: "Phone is required" })}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className="mt-1.5"
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
                    >
                      Submit Pilot Request
                    </Button>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Why Pilot with iRxReminder?
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, label: "83% Adherence", sub: "Clinically validated improvement", color: "#1e3a8a" },
                      { icon: TrendingUp, label: "3\u00d7 ROI", sub: "Via RPM/RTM billing", color: "#0891b2" },
                      { icon: Award, label: "NIH-Funded", sub: "Federally validated research", color: "#1e3a8a" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {item.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.sub}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">Trusted By</h3>
                  <div className="space-y-1.5 text-sm text-gray-500">
                    {[
                      "Harvard University",
                      "MetroHealth",
                      "University of Michigan",
                      "Kent State University",
                      "Brown University",
                      "Butler Hospital",
                    ].map((name) => (
                      <div key={name}>{name}</div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Our team is here to help
                  </p>
                  <a
                    href="tel:3308068675"
                    className="text-[#0891b2] font-semibold hover:text-[#0e7490] transition-colors"
                  >
                    330.806.8675
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
