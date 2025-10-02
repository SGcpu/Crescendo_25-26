import { useState } from "react";
import { PageTransition, AnimatedItem } from "./PageTransition";
import { AnimationDemoNav } from "./AnimationDemoNav";

export const PageTransitionsDemo = () => {
  const [currentTransition, setCurrentTransition] = useState<{
    type: "fade" | "slide" | "scale" | "reveal" | "wipe";
    direction?: "left" | "right" | "up" | "down";
  }>({
    type: "fade",
  });

  const [contentKey, setContentKey] = useState(0);

  const applyTransition = (
    type: "fade" | "slide" | "scale" | "reveal" | "wipe",
    direction?: "left" | "right" | "up" | "down"
  ) => {
    setCurrentTransition({ type, direction });
    setContentKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 text-white">
      <AnimationDemoNav />
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Page Transitions & Animated Items
          </h1>
          <p className="text-xl text-gray-300">
            Smooth, beautiful transitions powered by anime.js
          </p>
        </header>

        <div className="mb-12 bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Page Transitions
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            <button
              onClick={() => applyTransition("fade")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Fade
            </button>

            <button
              onClick={() => applyTransition("slide", "left")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Slide Left
            </button>

            <button
              onClick={() => applyTransition("slide", "right")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Slide Right
            </button>

            <button
              onClick={() => applyTransition("scale")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Scale
            </button>

            <button
              onClick={() => applyTransition("reveal", "left")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Reveal Left
            </button>

            <button
              onClick={() => applyTransition("reveal", "right")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Reveal Right
            </button>

            <button
              onClick={() => applyTransition("wipe", "left")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Wipe Left
            </button>

            <button
              onClick={() => applyTransition("wipe", "right")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Wipe Right
            </button>

            <button
              onClick={() => applyTransition("slide", "up")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Slide Up
            </button>

            <button
              onClick={() => applyTransition("slide", "down")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Slide Down
            </button>
          </div>

          <div className="bg-gray-900 rounded-lg overflow-hidden h-64 relative">
            <PageTransition
              key={contentKey}
              transitionType={currentTransition.type}
              direction={currentTransition.direction}
              duration={1000}
            >
              <div className="p-6 h-full flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {currentTransition.type.charAt(0).toUpperCase() +
                      currentTransition.type.slice(1)}
                    {currentTransition.direction
                      ? ` ${currentTransition.direction}`
                      : ""}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    This content transitions using the {currentTransition.type}{" "}
                    effect
                    {currentTransition.direction
                      ? ` from the ${currentTransition.direction}`
                      : ""}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="w-12 h-12 bg-indigo-500 rounded-lg"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg"></div>
                    <div className="w-12 h-12 bg-red-500 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </PageTransition>
          </div>
        </div>

        <div className="mb-12 bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-8 text-indigo-400">
            Animated Items (Scroll Down)
          </h2>

          <div className="space-y-24 pb-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Fade In Animation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[0, 1, 2, 3].map((i) => (
                  <AnimatedItem
                    key={i}
                    animation="fadeIn"
                    delay={i * 200}
                    className="bg-gray-900 p-6 rounded-lg aspect-square flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold">{i + 1}</span>
                      </div>
                      <h4 className="font-medium">Fade In Item</h4>
                      <p className="text-sm text-gray-400">
                        Delay: {i * 200}ms
                      </p>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Slide In Animation</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                <AnimatedItem
                  animation="slideIn"
                  direction="left"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">From Right</h4>
                    <p className="text-sm text-gray-400">direction="left"</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="slideIn"
                  direction="right"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">From Left</h4>
                    <p className="text-sm text-gray-400">direction="right"</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="slideIn"
                  direction="up"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">From Bottom</h4>
                    <p className="text-sm text-gray-400">direction="up"</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="slideIn"
                  direction="down"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">From Top</h4>
                    <p className="text-sm text-gray-400">direction="down"</p>
                  </div>
                </AnimatedItem>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">
                Zoom & Bounce Animations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AnimatedItem
                  animation="zoomIn"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-medium mb-2">Zoom In Effect</h4>
                    <p className="text-gray-400">
                      Scales from small to full size
                    </p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="bounceIn"
                  className="bg-gray-900 p-6 rounded-lg aspect-video flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="text-xl font-medium mb-2">
                      Bounce In Effect
                    </h4>
                    <p className="text-gray-400">
                      Bounces as it scales into view
                    </p>
                  </div>
                </AnimatedItem>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Flip Animations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <AnimatedItem
                  animation="flipIn"
                  direction="left"
                  className="bg-gray-900 p-6 rounded-lg aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">Flip From Right</h4>
                    <p className="text-sm text-gray-400">rotateY(90deg) → 0</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="flipIn"
                  direction="right"
                  className="bg-gray-900 p-6 rounded-lg aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">Flip From Left</h4>
                    <p className="text-sm text-gray-400">rotateY(-90deg) → 0</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="flipIn"
                  direction="up"
                  className="bg-gray-900 p-6 rounded-lg aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">Flip From Bottom</h4>
                    <p className="text-sm text-gray-400">rotateX(-90deg) → 0</p>
                  </div>
                </AnimatedItem>

                <AnimatedItem
                  animation="flipIn"
                  direction="down"
                  className="bg-gray-900 p-6 rounded-lg aspect-square flex items-center justify-center"
                >
                  <div className="text-center">
                    <h4 className="font-medium">Flip From Top</h4>
                    <p className="text-sm text-gray-400">rotateX(90deg) → 0</p>
                  </div>
                </AnimatedItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
