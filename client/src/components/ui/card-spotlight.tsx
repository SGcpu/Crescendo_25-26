"use client";

import React, {
  MouseEvent as ReactMouseEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement>) {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      ref={divRef}
      className={cn(
        "group/spotlight p-10 rounded-md relative border border-neutral-800 bg-black dark:border-neutral-800 overflow-hidden",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute z-0 -inset-px rounded-md opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
          style={{
            background: `radial-gradient(${radius}px circle at ${position.x}px ${position.y}px, ${color}, transparent 80%)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%] opacity-75" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
