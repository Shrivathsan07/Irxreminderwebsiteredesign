import { useState } from "react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Phone, Mail, MapPin, ArrowRight, Shield, TrendingUp } from "lucide-react";
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
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    title: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will contact you soon!");
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
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Let&rsquo;s Talk About Better
              <br />
              <span className="text-[#0891b2]">Medication Outcomes</span>
            </h1>
            <p className="text-xl text-blue-100/80">
              Get in touch with our team to learn more about iRxReminder
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-2">
              <FadeUp>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization">
                        Organization / Health System *
                      </Label>
                      <Input
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Role / Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        className="mt-1.5"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-1.5"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inquiry-type">Inquiry Type *</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, inquiryType: value })
                        }
                      >
                        <SelectTrigger className="mt-1.5">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pilot">
                            Schedule a Pilot
                          </SelectItem>
                          <SelectItem value="demo">Request a Demo</SelectItem>
                          <SelectItem value="partnership">
                            Partnership Inquiry
                          </SelectItem>
                          <SelectItem value="research">
                            Research Collaboration
                          </SelectItem>
                          <SelectItem value="general">
                            General Question
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="mt-1.5"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0891b2] hover:bg-[#0e7490] text-white shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
                  >
                    Submit
                  </Button>
                </form>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#0891b2] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Phone
                        </div>
                        <a
                          href="tel:3308068675"
                          className="text-sm text-gray-500 hover:text-[#0891b2] transition-colors"
                        >
                          330.806.8675
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#0891b2] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          General Inquiries
                        </div>
                        <a
                          href="mailto:info@irxreminder.com"
                          className="text-sm text-gray-500 hover:text-[#0891b2] transition-colors"
                        >
                          info@irxreminder.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#0891b2] mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Address
                        </div>
                        <address className="text-sm text-gray-500 not-italic">
                          1768 E 25th St #308
                          <br />
                          Cleveland, OH 44114
                        </address>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.15}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Direct Contacts
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">
                        Sales &amp; Partnerships
                      </div>
                      <a
                        href="mailto:ltusick@irxreminder.com"
                        className="text-[#0891b2] hover:text-[#0e7490] transition-colors"
                      >
                        Larry Tusick, CBO
                        <br />
                        ltusick@irxreminder.com
                      </a>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="font-medium text-gray-900">
                        Management / Investment
                      </div>
                      <a
                        href="mailto:asterns@irxreminder.com"
                        className="text-[#0891b2] hover:text-[#0e7490] transition-colors"
                      >
                        Anthony Sterns, PhD, CEO
                        <br />
                        asterns@irxreminder.com
                      </a>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="font-medium text-gray-900">
                        Operations / FDA
                      </div>
                      <a
                        href="mailto:fma@irxreminder.com"
                        className="text-[#0891b2] hover:text-[#0e7490] transition-colors"
                      >
                        Fred Ma, MD PhD, COO
                        <br />
                        fma@irxreminder.com
                      </a>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Business Hours
                  </h3>
                  <p className="text-sm text-gray-500">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                </div>
              </FadeUp>

              {/* Alternative CTAs */}
              <FadeUp delay={0.25}>
                <div className="space-y-3">
                  <Link
                    to="/schedule-pilot"
                    className="flex items-center justify-between p-4 bg-[#0891b2]/5 rounded-xl border border-[#0891b2]/10 hover:border-[#0891b2]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-[#0891b2]" />
                      <span className="font-medium text-gray-900 text-sm">
                        Schedule a Pilot
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#0891b2] group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/roi-calculator"
                    className="flex items-center justify-between p-4 bg-[#1e3a8a]/5 rounded-xl border border-[#1e3a8a]/10 hover:border-[#1e3a8a]/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-[#1e3a8a]" />
                      <span className="font-medium text-gray-900 text-sm">
                        Calculate Your ROI
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#1e3a8a] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
