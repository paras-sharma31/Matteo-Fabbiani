import { useEffect, useRef } from 'react';

export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealChildren = el.querySelectorAll('.reveal-up');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (el.classList.contains('reveal-up')) {
            el.classList.add('visible');
          }
          revealChildren.forEach((child) => {
            child.classList.add('visible');
          });
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
