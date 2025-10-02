import { Link } from "wouter";

export const AnimationDemoNav = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-gray-800/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-700 flex gap-4">
        <Link href="/anime-demo">
          <a className="text-indigo-300 hover:text-white transition-colors">
            Basic Demos
          </a>
        </Link>
        <Link href="/text-animations">
          <a className="text-indigo-300 hover:text-white transition-colors">
            Text Effects
          </a>
        </Link>
        <Link href="/page-transitions">
          <a className="text-indigo-300 hover:text-white transition-colors">
            Page Transitions
          </a>
        </Link>
        <Link href="/">
          <a className="text-red-300 hover:text-white transition-colors">
            Back to Site
          </a>
        </Link>
      </div>
    </nav>
  );
};
