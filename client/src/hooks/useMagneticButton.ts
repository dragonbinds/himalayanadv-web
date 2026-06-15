import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useMagneticButton = () => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  useEffect(() => {
    const button = ref.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      // Magnetic attraction within 100px
      if (distance < 100) {
        const magnetX = (distX / distance) * 30;
        const magnetY = (distY / distance) * 30;

        gsap.to(button, {
          x: magnetX,
          y: magnetY,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export const useGlassHover = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(element, {
        '--glass-x': `${x}px`,
        '--glass-y': `${y}px`,
        duration: 0.3,
        ease: 'power2.out',
      } as any);
    };

    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
};

export const useFloatingAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: -20,
      duration: 3,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, []);

  return ref;
};
