import anime from 'animejs';

// Re-export the default export for easier imports
export default anime;

// Helper functions for common animations
export const fadeIn = (
  target: string | HTMLElement | NodeList,
  duration = 800,
  delay = 0,
  easing = 'easeOutExpo'
) => {
  return anime({
    targets: target,
    opacity: [0, 1],
    duration,
    delay,
    easing,
  });
};

export const fadeOut = (
  target: string | HTMLElement | NodeList,
  duration = 800,
  delay = 0,
  easing = 'easeOutExpo'
) => {
  return anime({
    targets: target,
    opacity: [1, 0],
    duration,
    delay,
    easing,
  });
};

export const slideIn = (
  target: string | HTMLElement | NodeList,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  distance = '100%',
  duration = 800,
  delay = 0,
  easing = 'easeOutExpo'
) => {
  const translateProp = 
    direction === 'left' || direction === 'right' ? 'translateX' : 'translateY';
  const fromValue = direction === 'left' || direction === 'top' ? 
    `-${distance}` : distance;

  return anime({
    targets: target,
    [translateProp]: [fromValue, '0%'],
    opacity: [0, 1],
    duration,
    delay,
    easing,
  });
};

export const staggerAnimation = (
  target: string | HTMLElement | NodeList,
  animation: (targets: string | HTMLElement | NodeList) => anime.AnimeInstance,
  staggerDelay = 100
) => {
  const baseAnimation = animation(target).animations[0];
  return anime({
    targets: target,
    ...baseAnimation,
    delay: anime.stagger(staggerDelay),
  });
};

// Simple timeline creation wrapper
export const createTimeline = (params?: anime.AnimeParams) => {
  return anime.timeline(params);
};

// Utility for creating animations that play when elements enter viewport
export const createScrollAnimation = (
  targetSelector: string,
  animation: (target: HTMLElement) => anime.AnimeInstance,
  options = { 
    rootMargin: '0px', 
    threshold: 0.2,
    once: true 
  }
) => {
  if (typeof window === 'undefined') return;

  const targets = document.querySelectorAll(targetSelector);
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animation(entry.target as HTMLElement);
        if (options.once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, options);

  targets.forEach((target) => observer.observe(target));

  return () => observer.disconnect();
};