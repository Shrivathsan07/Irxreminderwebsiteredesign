import { useReducedMotion } from "@/app/hooks/useReducedMotion";

const partners = [
  "University of Michigan",
  "Harvard University",
  "Brown University",
  "Kent State University",
  "MetroHealth",
  "Butler Hospital",
  "NIH / NIA / NIMH",
];

/**
 * Horizontal scrolling ticker of partner names.
 * CSS-animated with gradient edge fades, pauses on hover.
 * Falls back to static layout when prefers-reduced-motion is set.
 */
export function LogoTicker({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const prefersReducedMotion = useReducedMotion();

  const textColor = variant === "dark" ? "text-blue-200/80" : "text-gray-500";
  const separatorColor = variant === "dark" ? "bg-blue-200/30" : "bg-gray-300";
  const fadeFrom = variant === "dark" ? "from-[#0f1d3d]" : "from-white";
  const fadeTo = variant === "dark" ? "to-[#0f1d3d]/0" : "to-white/0";

  // Static fallback for reduced motion
  if (prefersReducedMotion) {
    return (
      <div className={`flex flex-wrap justify-center items-center gap-x-8 gap-y-4 ${textColor} font-medium`}>
        {partners.map((name) => (
          <span key={name} className="text-sm whitespace-nowrap">
            {name}
          </span>
        ))}
      </div>
    );
  }

  // Double the list so the scroll loops seamlessly
  const doubled = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden group">
      {/* Gradient edge fades */}
      <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r ${fadeFrom} ${fadeTo} z-10 pointer-events-none`} />
      <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l ${fadeFrom} ${fadeTo} z-10 pointer-events-none`} />

      <div
        className="flex items-center gap-8 animate-scroll-x group-hover:[animation-play-state:paused]"
        style={{ width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center gap-8">
            <span className={`text-sm font-medium whitespace-nowrap ${textColor}`}>
              {name}
            </span>
            {i < doubled.length - 1 && (
              <span className={`w-1 h-1 rounded-full ${separatorColor} flex-shrink-0`} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
