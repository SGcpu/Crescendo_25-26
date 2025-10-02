import { useEffect, useRef } from "react";
import anime from "animejs";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
  highlightColor?: string;
  highlightWords?: string[];
}

export const TextReveal = ({
  text,
  className = "",
  delay = 0,
  duration = 1200,
  color = "currentColor",
  highlightColor = "#6366F1", // Indigo color from Tailwind
  highlightWords = [],
}: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into words and create elements
    const words = text.split(" ");
    const container = containerRef.current;
    container.innerHTML = "";

    words.forEach((word, i) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block overflow-hidden mx-1";

      const innerSpan = document.createElement("span");
      innerSpan.className = "inline-block translate-y-full opacity-0";
      innerSpan.style.color = highlightWords.includes(word)
        ? highlightColor
        : color;
      innerSpan.textContent = word;

      wordSpan.appendChild(innerSpan);
      container.appendChild(wordSpan);
    });

    // Animate each word
    anime({
      targets: container.querySelectorAll("span > span"),
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: duration,
      delay: (el, i) => delay + i * 30,
    });
  }, [text, delay, duration, color, highlightColor, highlightWords]);

  return (
    <div ref={containerRef} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mx-1">
          <span
            className="inline-block translate-y-full opacity-0"
            style={{
              color: highlightWords.includes(word) ? highlightColor : color,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
};

interface TextTypingProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  onComplete?: () => void;
}

export const TextTyping = ({
  text,
  className = "",
  delay = 0,
  speed = 50,
  cursor = true,
  onComplete,
}: TextTypingProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const textElement = textRef.current;
    textElement.textContent = "";

    const characters = text.split("");

    setTimeout(() => {
      let i = 0;

      const typeInterval = setInterval(() => {
        if (i < characters.length) {
          textElement.textContent += characters[i];
          i++;
        } else {
          clearInterval(typeInterval);
          if (onComplete) onComplete();

          // Blink cursor after typing is complete
          if (cursor && cursorRef.current) {
            anime({
              targets: cursorRef.current,
              opacity: [1, 0],
              easing: "steps(1)",
              duration: 800,
              loop: true,
            });
          }
        }
      }, speed);
    }, delay);

    return () => {
      // Clean up if component unmounts before animation completes
    };
  }, [text, delay, speed, cursor, onComplete]);

  return (
    <div ref={containerRef} className={className}>
      <span ref={textRef}></span>
      {cursor && (
        <span
          ref={cursorRef}
          className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
        ></span>
      )}
    </div>
  );
};

interface ShuffleTextProps {
  finalText: string;
  className?: string;
  delay?: number;
  duration?: number;
  iterations?: number;
}

export const ShuffleText = ({
  finalText,
  className = "",
  delay = 0,
  duration = 2000,
  iterations = 20,
}: ShuffleTextProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const originalText = finalText;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    setTimeout(() => {
      let frame = 0;

      const randomizeText = () => {
        let currentText = "";
        const progress = frame / iterations;

        // For each character in the target text
        for (let i = 0; i < originalText.length; i++) {
          // Determine if this character should now be fixed
          if (i < Math.floor(progress * originalText.length)) {
            currentText += originalText[i];
          } else if (originalText[i] === " ") {
            // Keep spaces as spaces
            currentText += " ";
          } else {
            // Random character
            currentText += characters.charAt(
              Math.floor(Math.random() * characters.length)
            );
          }
        }

        element.textContent = currentText;

        frame++;

        if (frame <= iterations) {
          // Schedule the next frame
          const timeout = duration / iterations;
          setTimeout(randomizeText, timeout);
        } else {
          // Ensure the final text is correct
          element.textContent = originalText;
        }
      };

      // Start the animation
      randomizeText();
    }, delay);
  }, [finalText, delay, duration, iterations]);

  return (
    <span ref={textRef} className={className}>
      {finalText}
    </span>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
  glitchDelay?: number;
}

export const GlitchText = ({
  text,
  className = "",
  glitchIntensity = 20,
  glitchDelay = 3000,
}: GlitchTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const container = textRef.current;

    // Create before and after pseudo elements with text for glitching effect
    const before = document.createElement("span");
    before.className = "absolute top-0 left-0 w-full h-full";
    before.setAttribute("aria-hidden", "true");
    before.textContent = text;

    const after = document.createElement("span");
    after.className = "absolute top-0 left-0 w-full h-full";
    after.setAttribute("aria-hidden", "true");
    after.textContent = text;

    container.appendChild(before);
    container.appendChild(after);

    const glitchInterval = setInterval(() => {
      // Random glitch effect duration between 50-500ms
      const duration = 50 + Math.random() * 450;

      // Random glitch properties
      anime({
        targets: before,
        translateX: () => anime.random(-5, 5),
        translateY: () => anime.random(-5, 5),
        color: () =>
          ["#00ff00", "#ff0000", "#0000ff"][Math.floor(Math.random() * 3)],
        opacity: () => anime.random(0.8, 1),
        easing: "easeInOutQuad",
        duration: duration,
      });

      anime({
        targets: after,
        translateX: () => anime.random(-5, 5),
        translateY: () => anime.random(-5, 5),
        color: () =>
          ["#ff00ff", "#ffff00", "#00ffff"][Math.floor(Math.random() * 3)],
        opacity: () => anime.random(0.8, 1),
        easing: "easeInOutQuad",
        duration: duration,
      });

      // Reset after glitch
      setTimeout(() => {
        anime({
          targets: [before, after],
          translateX: 0,
          translateY: 0,
          opacity: 1,
          color: "currentColor",
          duration: 100,
        });
      }, duration);
    }, glitchDelay);

    return () => {
      clearInterval(glitchInterval);
    };
  }, [text, glitchIntensity, glitchDelay]);

  return (
    <div ref={textRef} className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
    </div>
  );
};
