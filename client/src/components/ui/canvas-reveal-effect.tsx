"use client";
import { cn } from "@/lib/utils";
import React from "react";

// This is a simplified placeholder component that replaces the 3D canvas version
// to avoid the runtime error: Cannot read properties of undefined (reading 'S')
export const CanvasRevealEffect = ({
  containerClassName,
  colors = [[0, 255, 255]],
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  // Create gradient colors based on provided colors
  const gradientColor1 = `rgb(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})`;
  const gradientColor2 =
    colors.length > 1
      ? `rgb(${colors[1][0]}, ${colors[1][1]}, ${colors[1][2]})`
      : gradientColor1;

  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `linear-gradient(135deg, ${gradientColor1} 0%, ${gradientColor2} 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
    </div>
  );
};
