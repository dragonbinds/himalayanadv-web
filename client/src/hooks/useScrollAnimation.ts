import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (selector: string, options?: any) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);
    
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false,
          },
          ...options,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, options]);

  return ref;
};

export const useParallax = (selector: string, depth: number = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current.querySelector(selector);
    if (!element) return;

    gsap.to(element, {
      scrollTrigger: {
        trigger: ref.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
      y: depth,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, depth]);

  return ref;
};

export const useTextReveal = (selector: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = ref.current.querySelectorAll(selector);

    elements.forEach((el) => {
      const text = el.textContent || '';
      const chars = text.split('').map((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        return span;
      });

      el.innerHTML = '';
      chars.forEach((char) => el.appendChild(char));

      gsap.to(chars, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.05,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector]);

  return ref;
};
