import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useReducedMotion } from "@/app/hooks/useReducedMotion";

export function CountUp({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 2,
  className = "",
  style,
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  /** Number of decimal places to display */
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      setDisplayValue(end);
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;
    const factor = Math.pow(10, decimals);

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * end * factor) / factor);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimals, prefersReducedMotion]);

  const formatted = decimals > 0
    ? displayValue.toFixed(decimals)
    : end >= 1000 && !suffix
      ? displayValue.toLocaleString()
      : displayValue.toString();

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
