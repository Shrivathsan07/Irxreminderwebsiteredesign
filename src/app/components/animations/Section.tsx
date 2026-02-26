import { motion } from "motion/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export function Section({
  children,
  className = "",
  id,
  ...props
}: React.HTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <section id={id} className={className} {...props}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}
