import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { GrainTexture } from "./GrainTexture";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface SplitHeroProps {
  label: string;
  headline: React.ReactNode;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  trustItems?: { icon: React.ElementType; text: string }[];
  /** Visual element on the right side */
  visual?: React.ReactNode;
  /** Light variant: white bg with teal accents instead of dark navy */
  variant?: "dark" | "light";
}

export function SplitHero({
  label,
  headline,
  subtitle,
  primaryCta,
  secondaryCta,
  trustItems,
  visual,
  variant = "dark",
}: SplitHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const heroAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, type: "spring", stiffness: 300, damping: 30 },
      };
  const delayedAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.3 },
      };
  const fadeAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, delay: 0.6 },
      };
  const visualAnim = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, x: 40, scale: 0.95 },
        animate: { opacity: 1, x: 0, scale: 1 },
        transition: { duration: 0.8, delay: 0.2, type: "spring", stiffness: 200, damping: 25 },
      };

  const isDark = variant === "dark";

  return (
    <section className={`relative min-h-[90vh] flex items-center overflow-hidden ${isDark ? "" : "bg-white"}`}>
      {isDark && (
        <>
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#152c6e] to-[#1e3a8a]" />
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#0891b2]/8 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#0891b2]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1e3a8a]/30 rounded-full blur-[100px]" />
          {/* Decorative geometric accents */}
          <div className="absolute top-[20%] left-[8%] w-32 h-32 border border-white/[0.04] rounded-full" />
          <div className="absolute bottom-[15%] left-[12%] w-20 h-20 border border-white/[0.06] rounded-full" />
          <div className="absolute top-[60%] right-[5%] w-2 h-2 bg-[#0891b2]/40 rounded-full" />
          <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-[#0891b2]/30 rounded-full" />
          <GrainTexture opacity={0.04} />
        </>
      )}
      {!isDark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-white to-[#eef5ff]" />
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#0891b2]/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1e3a8a]/4 rounded-full blur-[100px]" />
          <div className="absolute top-[20%] left-[5%] w-24 h-24 border border-[#1e3a8a]/[0.06] rounded-full" />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div {...heroAnim}>
              <p className="font-semibold text-sm tracking-widest uppercase mb-6 text-[#0891b2]">
                {label}
              </p>
              <h1
                className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6 ${isDark ? "text-white" : "text-[#1e3a8a]"}`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {headline}
              </h1>
              <p className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-xl ${isDark ? "text-blue-200" : "text-gray-600"}`}>
                {subtitle}
              </p>
            </motion.div>

            {(primaryCta || secondaryCta) && (
              <motion.div {...delayedAnim} className="flex flex-col sm:flex-row gap-4">
                {primaryCta && (
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#0891b2] hover:bg-[#0e7490] text-white text-lg px-8 py-6 shadow-[0_1px_3px_rgba(8,145,178,0.3),0_6px_20px_rgba(8,145,178,0.25)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.4),0_8px_28px_rgba(8,145,178,0.3)] transition-[background-color,box-shadow]"
                  >
                    <Link to={primaryCta.to}>
                      {primaryCta.label}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className={
                      isDark
                        ? "border-white/80 bg-white/5 hover:border-white hover:bg-white/15 text-white text-lg px-8 py-6 transition-colors"
                        : "border-[#1e3a8a]/20 text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white text-lg px-8 py-6 transition-colors"
                    }
                  >
                    <Link to={secondaryCta.to}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </motion.div>
            )}

            {trustItems && trustItems.length > 0 && (
              <motion.div
                {...fadeAnim}
                className={`mt-14 flex flex-wrap items-center gap-6 text-sm ${isDark ? "text-blue-200" : "text-gray-500"}`}
              >
                {trustItems.map((item, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#0891b2]" />
                    {item.text}
                  </span>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right: Visual */}
          {visual && (
            <motion.div {...visualAnim} className="hidden lg:block">
              {visual}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
