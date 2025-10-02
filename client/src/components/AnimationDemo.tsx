import { useEffect, useRef, useState } from "react";
import anime, {
  fadeIn,
  slideIn,
  createTimeline,
  createScrollAnimation,
} from "../lib/anime";
import { AnimationDemoNav } from "./AnimationDemoNav";

export const AnimationDemo = () => {
  const boxesRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const staggerBoxesRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initial animations when component mounts
    fadeIn(".demo-title", 1000, 300);
    slideIn(".demo-subtitle", "bottom", "30px", 800, 500);

    // Set up scroll animations
    const cleanup = createScrollAnimation(".scroll-reveal", (target) => {
      return anime({
        targets: target,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
      });
    });

    return () => cleanup && cleanup();
  }, []);

  const playCircleAnimation = () => {
    setIsAnimating(true);

    anime({
      targets: circleRef.current,
      translateX: [
        { value: 250, duration: 1000, delay: 500 },
        { value: 0, duration: 1000, delay: 500 },
      ],
      translateY: [
        { value: -100, duration: 500, delay: 0 },
        { value: 0, duration: 500, delay: 1000 },
      ],
      scale: [
        { value: 1.4, duration: 500, delay: 0 },
        { value: 1, duration: 500, delay: 1000 },
      ],
      backgroundColor: [
        { value: "#FF0000", duration: 500, delay: 0 },
        { value: "#0000FF", duration: 500, delay: 1000 },
        { value: "#6366F1", duration: 500, delay: 1500 },
      ],
      easing: "easeInOutQuad",
      complete: () => setIsAnimating(false),
    });
  };

  const playBoxAnimation = () => {
    setIsAnimating(true);

    const timeline = createTimeline({
      easing: "easeOutExpo",
      complete: () => setIsAnimating(false),
    });

    const boxes = boxesRef.current?.querySelectorAll(".box");

    timeline
      .add({
        targets: boxes,
        translateY: [-40, 0],
        backgroundColor: (el: HTMLElement, i: number) => {
          const colors = ["#FF4136", "#0074D9", "#2ECC40", "#FFDC00"];
          return colors[i % colors.length];
        },
        delay: anime.stagger(100),
        duration: 500,
      })
      .add({
        targets: boxes,
        rotate: (el: HTMLElement, i: number) => [0, (i + 1) * 90],
        duration: 800,
      })
      .add({
        targets: boxes,
        scale: [1, 0.8, 1],
        duration: 1000,
      });
  };

  const playStaggerAnimation = () => {
    setIsAnimating(true);

    anime({
      targets: staggerBoxesRef.current?.querySelectorAll(".stagger-box"),
      translateX: function (el: HTMLElement, i: number) {
        return anime.random(-200, 200);
      },
      translateY: function (el: HTMLElement, i: number) {
        return anime.random(-200, 200);
      },
      scale: function (el: HTMLElement, i: number) {
        return anime.random(0.2, 2);
      },
      duration: 1500,
      delay: anime.stagger(80),
      complete: function (anim) {
        // Reset after animation
        setTimeout(() => {
          anime({
            targets: staggerBoxesRef.current?.querySelectorAll(".stagger-box"),
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 1000,
            complete: () => setIsAnimating(false),
          });
        }, 1000);
      },
    });
  };

  const animateButton = () => {
    anime({
      targets: buttonRef.current,
      scale: [1, 0.9, 1],
      duration: 300,
      easing: "easeInOutSine",
    });
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <AnimationDemoNav />
      <h1 className="demo-title text-5xl font-bold mb-4 opacity-0 text-center">
        Anime.js Demo
      </h1>
      <p className="demo-subtitle text-xl mb-12 opacity-0 text-center">
        A powerful JavaScript animation library
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg scroll-reveal">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Circle Animation
          </h2>
          <div className="flex flex-col items-center">
            <div
              ref={circleRef}
              className="w-20 h-20 rounded-full bg-indigo-500 mb-8"
            ></div>
            <button
              onClick={playCircleAnimation}
              disabled={isAnimating}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
            >
              Animate Circle
            </button>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg scroll-reveal">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Timeline Animation
          </h2>
          <div className="flex flex-col items-center">
            <div ref={boxesRef} className="flex space-x-2 mb-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="box w-12 h-12 bg-gray-600 rounded-md"
                ></div>
              ))}
            </div>
            <button
              onClick={playBoxAnimation}
              disabled={isAnimating}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
            >
              Animate Boxes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-12 mb-20">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg scroll-reveal">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Stagger Animation
          </h2>
          <div className="flex flex-col items-center">
            <div ref={staggerBoxesRef} className="grid grid-cols-8 gap-2 mb-8">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className="stagger-box w-6 h-6 bg-indigo-500 rounded-md"
                ></div>
              ))}
            </div>
            <button
              onClick={playStaggerAnimation}
              disabled={isAnimating}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"
            >
              Stagger Animation
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <button
          ref={buttonRef}
          onClick={animateButton}
          onMouseEnter={animateButton}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg text-lg font-medium hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Interactive Button
        </button>
      </div>
    </div>
  );
};
