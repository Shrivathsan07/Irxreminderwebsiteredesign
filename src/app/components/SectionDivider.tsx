interface SectionDividerProps {
  /** Background color of the section ABOVE the divider */
  fromColor?: string;
  /** Background color of the section BELOW the divider */
  toColor?: string;
  /** Direction of the angle */
  direction?: "left" | "right";
  /** Height of the divider */
  height?: number;
}

export function SectionDivider({
  fromColor = "#ffffff",
  toColor = "#f8fafc",
  direction = "right",
  height = 80,
}: SectionDividerProps) {
  const points =
    direction === "right"
      ? `0,0 100,${height} 0,${height}`
      : `0,0 100,0 100,${height}`;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: `${height}px`, backgroundColor: toColor }}
      aria-hidden="true"
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        fill={fromColor}
      >
        <polygon points={points} />
      </svg>
    </div>
  );
}
