import { useEffect, useMemo } from "react";

interface Particle {
  id: number;
  initialTop: number;
  initialLeft: number;
  delay: number;
}

interface ParticleBackgroundProps {
  density?: "light" | "medium" | "heavy";
  className?: string;
}

export default function ParticleBackground({
  density = "medium",
  className = "",
}: ParticleBackgroundProps) {
  const particleCount = {
    light: 5,
    medium: 10,
    heavy: 15,
  };

  const particles: Particle[] = useMemo(() => {
    return Array.from({ length: particleCount[density] }, (_, i) => ({
      id: i,
      initialTop: Math.random() * 100,
      initialLeft: Math.random() * 100,
      delay: Math.random() * 4,
    }));
  }, [density]);

  // Respect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particles = document.querySelectorAll(".particle");

    const updateAnimation = () => {
      particles.forEach((particle) => {
        if (mediaQuery.matches) {
          (particle as HTMLElement).style.animation = "none";
        } else {
          (particle as HTMLElement).style.animation = "";
        }
      });
    };

    updateAnimation();
    mediaQuery.addEventListener("change", updateAnimation);

    return () => mediaQuery.removeEventListener("change", updateAnimation);
  }, []);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
    >
      {particles.map((particle) => {
        // Assign different particle colors based on Trinetra scheme
        const colors = [
          "bg-[var(--lavender-gray)] opacity-30",
          "bg-[var(--wild-blue-yonder)] opacity-40",
          "bg-[var(--butterfly-bush)] opacity-30",
          "bg-[var(--strikemaster)] opacity-20",
        ];
        const colorClass = colors[Math.floor(Math.random() * colors.length)];

        return (
          <div
            key={particle.id}
            className={`particle animate-particle-float ${colorClass}`}
            style={{
              top: `${particle.initialTop}%`,
              left: `${particle.initialLeft}%`,
              animationDelay: `${particle.delay}s`,
              boxShadow: "0 0 15px 2px rgba(170, 140, 200, 0.3)", // Mystical glow
            }}
          />
        );
      })}
    </div>
  );
}
