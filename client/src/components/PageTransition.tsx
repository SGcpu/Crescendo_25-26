import { useEffect, useRef, useState, ReactNode } from "react";
import anime from "animejs";

interface PageTransitionProps {
  children: ReactNode;
  transitionType?: "fade" | "slide" | "scale" | "reveal" | "wipe";
  duration?: number;
  delay?: number;
  easing?: string;
  direction?: "left" | "right" | "up" | "down";
}

export const PageTransition = ({
  children,
  transitionType = "fade",
  duration = 800,
  delay = 0,
  easing = "easeOutExpo",
  direction = "left",
}: PageTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Set initial state
    const initialStyles: Record<string, any> = {
      opacity: 0,
    };

    // Apply specific transition setup
    switch (transitionType) {
      case "fade":
        initialStyles.opacity = 0;
        break;

      case "slide":
        initialStyles.opacity = 0;
        if (direction === "left") {
          initialStyles.translateX = "100%";
        } else if (direction === "right") {
          initialStyles.translateX = "-100%";
        } else if (direction === "up") {
          initialStyles.translateY = "100%";
        } else if (direction === "down") {
          initialStyles.translateY = "-100%";
        }
        break;

      case "scale":
        initialStyles.opacity = 0;
        initialStyles.scale = 0.8;
        break;

      case "reveal":
        // For reveal, we'll use a pseudo element as a covering layer
        container.style.position = "relative";

        const revealer = document.createElement("div");
        revealer.className = "absolute inset-0 z-10";

        if (direction === "left" || direction === "right") {
          revealer.style.transformOrigin =
            direction === "left" ? "left" : "right";
        } else {
          revealer.style.transformOrigin =
            direction === "up" ? "bottom" : "top";
        }

        // Set background color based on the direction with Golden Noir theme
        const colors = {
          left: "#D4AF37",
          right: "#1A001F",
          up: "#E63946",
          down: "#0D0D0D",
        };
        revealer.style.backgroundColor = colors[direction];

        container.appendChild(revealer);
        break;

      case "wipe":
        // For wipe, we'll use a pseudo element as a covering layer that wipes away
        container.style.position = "relative";

        const wiper = document.createElement("div");
        wiper.className = "absolute inset-0 z-10";

        if (direction === "left" || direction === "right") {
          wiper.style.transform = "scaleX(1)";
          wiper.style.transformOrigin = direction === "left" ? "right" : "left";
        } else {
          wiper.style.transform = "scaleY(1)";
          wiper.style.transformOrigin = direction === "up" ? "top" : "bottom";
        }

        const wipeColors = {
          left: "#D4AF37",
          right: "#1A001F",
          up: "#E63946",
          down: "#0D0D0D",
        };
        wiper.style.backgroundColor = wipeColors[direction];

        container.appendChild(wiper);
        break;
    }

    // Apply initial styles to container
    Object.keys(initialStyles).forEach((key) => {
      if (key === "opacity") {
        container.style.opacity = initialStyles[key];
      } else {
        container.style.transform = `${key}(${initialStyles[key]})`;
      }
    });

    // Animate entry
    setTimeout(() => {
      switch (transitionType) {
        case "fade":
          anime({
            targets: container,
            opacity: [0, 1],
            duration,
            easing,
            begin: () => setIsVisible(true),
          });
          break;

        case "slide":
          anime({
            targets: container,
            translateX:
              direction === "left" || direction === "right"
                ? [initialStyles.translateX, "0%"]
                : 0,
            translateY:
              direction === "up" || direction === "down"
                ? [initialStyles.translateY, "0%"]
                : 0,
            opacity: [0, 1],
            duration,
            easing,
            begin: () => setIsVisible(true),
          });
          break;

        case "scale":
          anime({
            targets: container,
            scale: [initialStyles.scale, 1],
            opacity: [0, 1],
            duration,
            easing,
            begin: () => setIsVisible(true),
          });
          break;

        case "reveal":
          const revealer = container.querySelector("div");
          if (!revealer) return;

          // First make the content visible behind the revealer
          container.style.opacity = "1";

          // Then animate the revealer away
          if (direction === "left" || direction === "right") {
            anime({
              targets: revealer,
              scaleX: [1, 0],
              duration,
              easing,
              begin: () => setIsVisible(true),
            });
          } else {
            anime({
              targets: revealer,
              scaleY: [1, 0],
              duration,
              easing,
              begin: () => setIsVisible(true),
            });
          }
          break;

        case "wipe":
          const wiper = container.querySelector("div");
          if (!wiper) return;

          // First make the content visible behind the wiper
          container.style.opacity = "1";

          // Then animate the wiper away
          if (direction === "left" || direction === "right") {
            anime({
              targets: wiper,
              scaleX: [1, 0],
              duration,
              easing,
              begin: () => setIsVisible(true),
            });
          } else {
            anime({
              targets: wiper,
              scaleY: [1, 0],
              duration,
              easing,
              begin: () => setIsVisible(true),
            });
          }
          break;
      }
    }, delay);
  }, [transitionType, duration, delay, easing, direction]);

  return (
    <div ref={containerRef} className="page-transition">
      {children}
    </div>
  );
};

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  animation?: "fadeIn" | "slideIn" | "zoomIn" | "bounceIn" | "flipIn";
  direction?: "left" | "right" | "up" | "down";
  triggerOnce?: boolean;
  className?: string;
}

export const AnimatedItem = ({
  children,
  delay = 0,
  duration = 800,
  animation = "fadeIn",
  direction = "up",
  triggerOnce = true,
  className = "",
}: AnimatedItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!itemRef.current) return;

    const item = itemRef.current;

    // Set initial styles based on animation type
    switch (animation) {
      case "fadeIn":
        item.style.opacity = "0";
        break;

      case "slideIn":
        item.style.opacity = "0";
        switch (direction) {
          case "left":
            item.style.transform = "translateX(50px)";
            break;
          case "right":
            item.style.transform = "translateX(-50px)";
            break;
          case "up":
            item.style.transform = "translateY(50px)";
            break;
          case "down":
            item.style.transform = "translateY(-50px)";
            break;
        }
        break;

      case "zoomIn":
        item.style.opacity = "0";
        item.style.transform = "scale(0.5)";
        break;

      case "bounceIn":
        item.style.opacity = "0";
        item.style.transform = "scale(0.3)";
        break;

      case "flipIn":
        item.style.opacity = "0";
        switch (direction) {
          case "left":
            item.style.transform = "perspective(400px) rotateY(90deg)";
            break;
          case "right":
            item.style.transform = "perspective(400px) rotateY(-90deg)";
            break;
          case "up":
            item.style.transform = "perspective(400px) rotateX(-90deg)";
            break;
          case "down":
            item.style.transform = "perspective(400px) rotateX(90deg)";
            break;
        }
        break;
    }

    // Create IntersectionObserver to detect when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);

            switch (animation) {
              case "fadeIn":
                anime({
                  targets: item,
                  opacity: [0, 1],
                  duration,
                  easing: "easeOutExpo",
                  delay,
                });
                break;

              case "slideIn":
                anime({
                  targets: item,
                  opacity: [0, 1],
                  translateX:
                    direction === "left" || direction === "right"
                      ? [direction === "left" ? 50 : -50, 0]
                      : 0,
                  translateY:
                    direction === "up" || direction === "down"
                      ? [direction === "up" ? 50 : -50, 0]
                      : 0,
                  duration,
                  easing: "easeOutExpo",
                  delay,
                });
                break;

              case "zoomIn":
                anime({
                  targets: item,
                  opacity: [0, 1],
                  scale: [0.5, 1],
                  duration,
                  easing: "easeOutExpo",
                  delay,
                });
                break;

              case "bounceIn":
                anime({
                  targets: item,
                  opacity: [0, 1],
                  scale: [
                    { value: 0.3, duration: 0, delay },
                    {
                      value: 1.1,
                      duration: duration * 0.5,
                      easing: "easeOutQuad",
                    },
                    {
                      value: 0.9,
                      duration: duration * 0.25,
                      easing: "easeInQuad",
                    },
                    {
                      value: 1.03,
                      duration: duration * 0.125,
                      easing: "easeOutQuad",
                    },
                    {
                      value: 1,
                      duration: duration * 0.125,
                      easing: "easeInOutQuad",
                    },
                  ],
                });
                break;

              case "flipIn":
                anime({
                  targets: item,
                  opacity: [0, 1],
                  rotateX:
                    direction === "up" || direction === "down"
                      ? [direction === "up" ? -90 : 90, 0]
                      : 0,
                  rotateY:
                    direction === "left" || direction === "right"
                      ? [direction === "left" ? 90 : -90, 0]
                      : 0,
                  duration,
                  easing: "easeOutExpo",
                  delay,
                });
                break;
            }

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(item);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, direction, duration, isVisible, triggerOnce]);

  return (
    <div ref={itemRef} className={`animated-item ${className}`}>
      {children}
    </div>
  );
};
