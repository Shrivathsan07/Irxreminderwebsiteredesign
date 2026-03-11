import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

interface FloatingBadgeProps {
  icon: React.ElementType;
  text: string;
  /** "glass" for dark backgrounds, "elevated" for light */
  variant?: "glass" | "elevated";
}

export function FloatingBadge({
  icon: Icon,
  text,
  variant = "elevated",
}: FloatingBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const isGlass = variant === "glass";

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
      animate={
        prefersReducedMotion
          ? {}
          : isInView
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.9 }
      }
      transition={{ duration: 0.4, type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
        isGlass
          ? "bg-white/[0.12] backdrop-blur-md border border-white/20 text-white"
          : "bg-white border border-gray-100 text-gray-800 shadow-[0_1px_3px_rgba(8,145,178,0.06),0_4px_12px_rgba(8,145,178,0.08)]"
      }`}
    >
      <Icon className="w-4 h-4 text-[#0891b2]" />
      {text}
    </motion.div>
  );
}

/** Group of floating badges with stagger */
export function FloatingBadgeGroup({
  badges,
  variant = "elevated",
  className = "",
}: {
  badges: { icon: React.ElementType; text: string }[];
  variant?: "glass" | "elevated";
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <FloatingBadge
          key={badge.text}
          icon={badge.icon}
          text={badge.text}
          variant={variant}
        />
      ))}
    </div>
  );
}
