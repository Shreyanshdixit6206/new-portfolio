"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ScrambleText({ value }: { value: number | string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    const targetString = value.toString();
    const length = targetString.length;
    let iterations = 0;
    const maxIterations = 20;
    
    const interval = setInterval(() => {
      setDisplayValue((prev) => {
        return targetString
          .split("")
          .map((char, index) => {
            if (index < iterations / maxIterations * length) {
              return targetString[index];
            }
            return Math.floor(Math.random() * 10).toString();
          })
          .join("");
      });

      iterations++;
      
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayValue(targetString);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}
