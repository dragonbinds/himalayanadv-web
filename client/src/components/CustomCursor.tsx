import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Cursor follows immediately
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0,
      });

      // Follower trails behind
      gsap.to(follower, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(follower, {
          scale: 2,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseOut = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.classList.contains('interactive')) {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(follower, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-red-500 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-red-500/50 rounded-full pointer-events-none z-[9998] mix-blend-screen"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
