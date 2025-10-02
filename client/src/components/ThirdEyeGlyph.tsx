interface ThirdEyeGlyphProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animated?: boolean;
}

export default function ThirdEyeGlyph({
  size = "md",
  className = "",
  animated = true,
}: ThirdEyeGlyphProps) {
  const sizes = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  };

  const iconSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  };

  return (
    <div
      className={`${
        sizes[size]
      } bg-noir-black rounded-full flex items-center justify-center relative ${
        animated ? "animate-float force-animate" : ""
      } ${className}`}
      data-testid="third-eye-glyph"
      style={{
        boxShadow: "0 0 25px 5px rgba(212, 175, 55, 0.3)", // Golden glow
      }}
    >
      <i className={`fas fa-eye text-[#D4AF37] ${iconSizes[size]}`} />

      {/* Rotating rings around the eye - using Golden Noir theme */}
      {animated && (
        <>
          <div
            className="absolute inset-0 border-2 border-[#D4AF37]/50 rounded-full animate-spin force-animate"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute inset-2 border border-[#E63946]/30 rounded-full animate-spin force-animate"
            style={{
              animationDuration: "12s",
              animationDirection: "reverse",
            }}
          />
          <div
            className="absolute inset-4 border border-[#D4AF37]/20 rounded-full animate-spin force-animate"
            style={{
              animationDuration: "15s",
            }}
          />
        </>
      )}
    </div>
  );
}
