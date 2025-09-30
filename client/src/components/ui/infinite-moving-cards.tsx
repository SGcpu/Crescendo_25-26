"use client";
 
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
 
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    logo?: string;
    name: string;
    description?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
 
  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
 
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
 
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[250px] max-w-full shrink-0 rounded-2xl border border-border border-opacity-50 bg-card/30 backdrop-blur-sm px-6 py-8 transition-all hover:border-accent/50 hover:shadow-md dark:border-neutral-700"
            key={`${item.name}-${idx}`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              {item.logo ? (
                <div className="mb-4 flex items-center justify-center h-16 w-16">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <div className="mb-4 flex items-center justify-center h-16 w-16 bg-primary/10 rounded-full">
                  <span className="text-primary text-xl font-bold">{item.name.charAt(0)}</span>
                </div>
              )}
              <h3 className="text-center font-medium text-foreground">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-center mt-2 text-muted-foreground">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};