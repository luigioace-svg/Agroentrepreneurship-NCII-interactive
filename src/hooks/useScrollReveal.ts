import { useEffect, useRef, type RefObject } from 'react';

export function useScrollReveal<T extends HTMLElement>(options?: IntersectionObserverInit): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.reveal-item');
    if (children.length === 0) {
      el.classList.add('reveal-item');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        ...options,
      }
    );

    const items = el.querySelectorAll('.reveal-item');
    items.forEach((item, i) => {
      const el = item as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
