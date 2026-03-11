import { FadeUp } from "@/app/components/animations";

interface BentoItem {
  icon?: React.ElementType;
  title: string;
  description: string;
  /** Span config for asymmetric layouts */
  span?: "large" | "medium" | "default";
  color?: string;
  /** Optional stat to display prominently */
  stat?: string;
}

interface BentoGridProps {
  items: BentoItem[];
  className?: string;
}

export function BentoGrid({ items, className = "" }: BentoGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ${className}`}>
      {items.map((item, i) => {
        const spanClass =
          item.span === "large"
            ? "md:col-span-2 lg:col-span-2"
            : item.span === "medium"
              ? "md:col-span-1 lg:col-span-1"
              : "";

        const color = item.color || "#0891b2";

        return (
          <FadeUp key={item.title} delay={0.05 + i * 0.06}>
            <div
              className={`group relative h-full p-7 md:p-8 rounded-2xl border border-gray-100 bg-white transition-[box-shadow,transform] duration-300 hover:-translate-y-1 cursor-default
                shadow-[0_1px_3px_rgba(8,145,178,0.04),0_4px_12px_rgba(8,145,178,0.06),0_16px_40px_rgba(30,58,138,0.06)]
                hover:shadow-[0_1px_3px_rgba(8,145,178,0.06),0_8px_20px_rgba(8,145,178,0.1),0_24px_48px_rgba(30,58,138,0.1)]
                ${spanClass}`}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: color }}
              />

              {item.stat && (
                <div
                  className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
                  style={{ color, fontFamily: "var(--font-display)" }}
                >
                  {item.stat}
                </div>
              )}

              {item.icon && (
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}1a` }}
                >
                  <item.icon
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ color }}
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {item.description}
              </p>
            </div>
          </FadeUp>
        );
      })}
    </div>
  );
}
