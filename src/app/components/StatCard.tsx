import { CountUp } from "@/app/components/animations";

interface StatCardProps {
  end: number;
  prefix?: string;
  suffix?: string;
  /** Number of decimal places to display */
  decimals?: number;
  label: string;
  description?: string;
  /** "glass" for dark backgrounds, "elevated" for light */
  variant?: "glass" | "elevated";
  color?: string;
}

export function StatCard({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  description,
  variant = "elevated",
  color = "#0891b2",
}: StatCardProps) {
  const isGlass = variant === "glass";

  return (
    <div
      className={`group relative p-6 md:p-8 rounded-2xl text-center overflow-hidden min-w-0 transition-[box-shadow,transform] duration-300 hover:-translate-y-1 ${
        isGlass
          ? "bg-white/[0.12] backdrop-blur-md border border-white/15 hover:bg-white/[0.16] hover:border-white/25"
          : "bg-white border border-gray-100 shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)] hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)]"
      }`}
    >
      <CountUp
        end={end}
        prefix={prefix}
        suffix={suffix}
        decimals={decimals}
        className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight block"
        style={{ color, fontFamily: "var(--font-display)" }}
      />
      <div
        className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
          isGlass ? "text-blue-200" : "text-gray-500"
        }`}
      >
        {label}
      </div>
      {description && (
        <p
          className={`text-sm leading-relaxed ${
            isGlass ? "text-blue-100/80" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
