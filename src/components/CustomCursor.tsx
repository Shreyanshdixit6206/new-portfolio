"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = () => setIsHovering(true);
    const resetHoverState = () => setIsHovering(false);

    window.addEventListener("mousemove", updatePosition);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", updateHoverState);
      el.addEventListener("mouseleave", resetHoverState);
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", updateHoverState);
        el.removeEventListener("mouseleave", resetHoverState);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-accent-orange pointer-events-none z-50 mix-blend-difference rounded-full transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 0 : 1})`,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-10 h-10 border border-offwhite pointer-events-none z-50 mix-blend-difference rounded-full transition-transform duration-300 ease-out flex items-center justify-center"
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 0})`,
          opacity: isHovering ? 1 : 0
        }}
      />
    </>
  );
}
