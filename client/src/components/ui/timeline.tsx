"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  image?: string; // Path to the image to show instead of emoji
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-[var(--noir-black)] font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl mb-6 text-[var(--noir-gold)] font-cinzel font-bold max-w-4xl">
          Crescendo Timeline
        </h2>
        <p className="text-[var(--noir-text)] text-lg max-w-4xl leading-relaxed">
          "Tracing our journey of evolution from a spark of ideas to a legacy of innovation in Crescendo"
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-20 w-20 absolute left-0 md:left-0 rounded-full bg-[var(--noir-black)] flex items-center justify-center border-2 border-[var(--noir-gold)] overflow-hidden shadow-lg shadow-[var(--noir-gold)]/20">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title} icon`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-4 w-4 rounded-full bg-[var(--noir-gold)] border border-[var(--noir-gold-light)] p-2" />
                )}
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-[var(--noir-gold)] font-cinzel">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-[var(--noir-gold)] font-cinzel">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[var(--noir-gold-dark)] to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[var(--noir-crimson)] via-[var(--noir-gold)] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
