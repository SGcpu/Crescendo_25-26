import { useEffect, useState } from "react";
import {
  TextReveal,
  TextTyping,
  ShuffleText,
  GlitchText,
} from "../components/TextAnimations";
import anime from "../lib/anime";
import { AnimationDemoNav } from "./AnimationDemoNav";

export const TextAnimationsDemo = () => {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Animate containers on page load
    anime({
      targets: ".section",
      translateY: [50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 800,
      delay: anime.stagger(200),
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <AnimationDemoNav />
      <div className="max-w-5xl mx-auto space-y-24">
        <header className="text-center py-12">
          <TextReveal
            text="Anime.js Text Animation Components"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            highlightWords={["Anime.js", "Animation"]}
            highlightColor="#6366F1"
            delay={300}
          />

          <div className="mt-6 h-8">
            {!typingComplete ? (
              <TextTyping
                text="Beautiful, high-performance text animations for your React application."
                className="text-lg sm:text-xl text-gray-300"
                delay={1800}
                speed={30}
                onComplete={() => setTypingComplete(true)}
              />
            ) : (
              <p className="text-lg sm:text-xl text-gray-300">
                Beautiful, high-performance text animations for your React
                application.
              </p>
            )}
          </div>
        </header>

        <section className="section bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Text Reveal Animation
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <TextReveal
                text="Words appear sequentially with beautiful motion"
                className="text-2xl font-medium"
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <TextReveal
                text="Highlight important keywords in your text"
                className="text-2xl font-medium"
                highlightWords={["important", "keywords"]}
                highlightColor="#10B981"
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <TextReveal
                text="Control animation delay and duration"
                className="text-2xl font-medium"
                delay={500}
                duration={2000}
                highlightWords={["delay", "duration"]}
                highlightColor="#F59E0B"
              />
            </div>
          </div>
        </section>

        <section className="section bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Text Typing Animation
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <TextTyping
                text="This text is typed out character by character..."
                className="text-2xl font-medium"
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <TextTyping
                text="Control the typing speed for different effects"
                className="text-2xl font-medium"
                speed={100}
                delay={500}
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <TextTyping
                text="You can hide the cursor if you prefer"
                className="text-2xl font-medium"
                cursor={false}
                delay={1000}
              />
            </div>
          </div>
        </section>

        <section className="section bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Text Shuffle Animation
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg text-gray-400 mb-4">
                Random character scramble effect:
              </h3>
              <ShuffleText
                finalText="Text gradually unscrambles from random characters"
                className="text-2xl font-medium"
                iterations={30}
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg text-gray-400 mb-4">
                Faster unscrambling:
              </h3>
              <ShuffleText
                finalText="This text unscrambles much faster"
                className="text-2xl font-medium"
                duration={1000}
                iterations={15}
                delay={500}
              />
            </div>
          </div>
        </section>

        <section className="section bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-400">
            Glitch Text Animation
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg flex justify-center">
              <GlitchText
                text="GLITCH EFFECT"
                className="text-4xl font-bold tracking-wider"
                glitchDelay={2000}
              />
            </div>

            <div className="bg-gray-900 p-6 rounded-lg flex justify-center">
              <GlitchText
                text="MORE FREQUENT GLITCHES"
                className="text-3xl font-bold tracking-wide"
                glitchDelay={1000}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
