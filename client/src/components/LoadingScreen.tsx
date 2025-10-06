import { useEffect, useRef, useState } from "react";
import anime from "animejs";

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen = ({ onLoadComplete }: LoadingScreenProps) => {
  const logoRef = useRef<HTMLImageElement>(null);
  const svgRef = useRef<HTMLObjectElement>(null);
  const svgRef2 = useRef<HTMLObjectElement>(null); // Second Trinetra SVG
  const awakeningRef = useRef<HTMLDivElement>(null); // AWAKENING text
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadingPhase, setLoadingPhase] = useState<
    "logo" | "svg" | "awakening" | "complete"
  >("logo");

  useEffect(() => {
    // Preload all assets
    const preloadImages = async () => {
      const imageUrls = [
        "/images/Assets/stuco_logo.ico",
        "/images/Assets/Trinetra_text.svg",
        "/images/Assets/Trinetra_text_2.svg",
        "/images/Assets/layer6.png",
        // Add any other images you want to preload here
      ];

      const promises = imageUrls.map((url) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if there's an error
          img.src = url;
        });
      });

      // Wait for all images to load
      await Promise.all(promises);
    };

    // Start loading assets
    preloadImages().then(() => {
      // Set up the STUCO logo initially
      anime.set(logoRef.current, {
        opacity: 0,
        transformOrigin: "50% 50%",
        translateX: 0,
        translateY: 0,
        rotate: 0,
        scale: 1,
      });

      // Phase 1: Rotate the STUCO logo with reduced wobble
      if (logoRef.current) {
        anime({
          targets: logoRef.current,
          rotate: { value: 360, easing: "linear" },
          scale: { value: [0.95, 1], easing: "easeOutQuad" },
          opacity: { value: [0, 1, 0], easing: "easeInOutQuad" },
          duration: 1800,
          complete: () => {
            setLoadingPhase("svg");
          },
        });
      }
    });
  }, []);

  // Phase 2: Draw the Trinetra SVG directly after logo animation
  useEffect(() => {
    if (loadingPhase === "svg" && svgRef.current) {
      // Need to wait for the SVG to load in the object tag
      svgRef.current.onload = () => {
        try {
          // Access the SVG document inside the object
          const svgDoc = svgRef.current?.contentDocument;

          if (svgDoc) {
            // Try a simpler approach - animate the entire SVG object first
            const simpleSvgAnimation = () => {
              // Create a simple fade-in animation for the entire SVG object
              anime({
                targets: svgRef.current,
                opacity: [0, 1],
                duration: 1500,
                easing: "easeInOutQuad",
                complete: () => {
                  // After SVG animation completes, fade out the black background
                  if (containerRef.current) {
                    anime({
                      targets: containerRef.current,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      duration: 800,
                      easing: "easeOutQuad",
                      complete: () => {
                        setLoadingPhase("complete");
                        onLoadComplete();
                      },
                    });
                  }
                },
              });
            };

            // Try to get path elements and animate them if possible
            const pathsNodeList = svgDoc.querySelectorAll("path");

            // If no paths or very few (might be a complex SVG structure), use simple animation
            if (pathsNodeList.length === 0) {
              console.warn("No path elements found, using simple animation");
              simpleSvgAnimation();
              return;
            }

            // Convert NodeList to array for AnimeJS
            const paths = Array.from(pathsNodeList);

            try {
              // Try to set initial state for all paths
              anime.set(svgRef.current, { opacity: 1 }); // Make sure the object is visible

              // Set initial state for each path individually to avoid collection issues
              paths.forEach((path) => {
                anime.set(path, {
                  opacity: 0,
                  strokeDashoffset: anime.setDashoffset(path),
                  stroke: "#D4AF37", // Golden Noir gold color
                  fill: "transparent",
                });
              });

              // Create the animation timeline
              const timeline = anime.timeline({
                easing: "easeInOutSine",
                complete: () => {
                  // After SVG animation completes, fade out the black background
                  if (containerRef.current) {
                    anime({
                      targets: containerRef.current,
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      duration: 800,
                      easing: "easeOutQuad",
                      complete: () => {
                        setLoadingPhase("complete");
                        onLoadComplete();
                      },
                    });
                  }
                },
              });

              // Animate each path individually
              paths.forEach((path, index) => {
                timeline.add(
                  {
                    targets: path,
                    opacity: 1,
                    strokeDashoffset: 0,
                    duration: 1200,
                    easing: "easeInOutSine",
                    delay: index * 10, // Manual stagger
                  },
                  index === 0 ? 0 : "-=1150"
                ); // Overlap animations
              });
            } catch (animError) {
              console.error("Error during path animation:", animError);
              simpleSvgAnimation(); // Fallback to simple animation
            }
          } else {
            console.error("Could not access SVG document");
            // If can't access SVG doc, still need to complete the animation
            setTimeout(() => {
              // Transition to awakening phase instead of completing
              setLoadingPhase("awakening");
            }, 1500);
          }
        } catch (error) {
          console.error("SVG animation error:", error);
          // Fallback to direct completion
          setTimeout(() => {
            setLoadingPhase("awakening");
          }, 1000);
        }
      };
    }
  }, [loadingPhase, onLoadComplete]);

  // Phase 3: Awakening phase with second SVG and text
  // Force scroll to top on component mount
  useEffect(() => {
    // Immediately scroll to top when component mounts
    window.scrollTo(0, 0);

    // Prevent scroll during loading animation
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when component unmounts
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (loadingPhase === "awakening") {
      // First make sure the second SVG is loaded
      if (svgRef2.current && awakeningRef.current) {
        // Initialize both elements as invisible
        anime.set([svgRef2.current, awakeningRef.current], {
          opacity: 0,
        });

        // Create timeline for transition animation
        const timeline = anime.timeline({
          easing: "easeOutExpo",
          complete: () => {
            // After awakening animation completes, fade out the black background
            if (containerRef.current) {
              anime({
                targets: containerRef.current,
                backgroundColor: "rgba(0, 0, 0, 0)",
                duration: 800,
                easing: "easeOutQuad",
                complete: () => {
                  // Ensure we're still at the top before completing
                  window.scrollTo(0, 0);
                  setLoadingPhase("complete");
                  onLoadComplete();
                },
              });
            }
          },
        });

        // Animate the second SVG first
        timeline.add({
          targets: svgRef2.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 1200,
          easing: "easeOutCubic",
        });

        // Then animate the AWAKENING text
        timeline.add({
          targets: awakeningRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 800,
          easing: "easeOutCubic",
          delay: 200, // Small delay after SVG appears
        });
      }
    }
  }, [loadingPhase, onLoadComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, var(--noir-black), var(--noir-purple))",
        transition:
          loadingPhase === "complete"
            ? "opacity 1s ease-out, visibility 1s"
            : "none",
        opacity: loadingPhase === "complete" ? 0 : 1,
        visibility: loadingPhase === "complete" ? "hidden" : "visible",
      }}
    >
      {/* STUCO Logo positioned in the center */}
      <div className="relative flex justify-center items-center h-full w-full">
        <img
          ref={logoRef}
          src="/images/Assets/stuco_logo.ico"
          alt="STUCO Logo"
          className="w-32 h-32 absolute z-10"
          style={{
            opacity: loadingPhase === "logo" ? 1 : 0,
            transition: "opacity 0.5s",
            display: loadingPhase !== "logo" ? "none" : "block",
          }}
        />
      </div>

      {/* SVG Animation with first SVG file - positioned in center */}
      {loadingPhase === "svg" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <object
            ref={svgRef}
            type="image/svg+xml"
            data="/images/Assets/Trinetra_text.svg"
            className="w-[80vw] max-w-3xl"
            style={{
              zIndex: 10,
              opacity: 0, // Start invisible for animation
            }}
            onError={() => {
              console.error("Error loading SVG");
              // If SVG fails to load, proceed to next phase
              setTimeout(() => {
                setLoadingPhase("awakening");
              }, 500);
            }}
          />
        </div>
      )}

      {/* Awakening phase with second SVG and text */}
      {loadingPhase === "awakening" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Second Trinetra SVG */}
          <object
            ref={svgRef2}
            type="image/svg+xml"
            data="/images/Assets/Trinetra_text_2.svg"
            className="w-[80vw] max-w-3xl"
            style={{
              zIndex: 10,
              opacity: 0, // Start invisible for animation
              marginBottom: "1rem",
            }}
          />

          {/* AWAKENING text with Golden Noir theme */}
          <div
            ref={awakeningRef}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 px-4 text-center"
            style={{
              opacity: 0, // Start invisible for animation
              fontFamily: "var(--font-cinzel), serif",
              letterSpacing: "0.2rem",
              color: "var(--noir-crimson)", // Crimson for AWAKENING
              textShadow: "0 0 15px rgba(230, 57, 70, 0.6)", // Crimson glow
            }}
          >
            AWAKENING
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
