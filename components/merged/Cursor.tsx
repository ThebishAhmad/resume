"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import "./styles/Cursor.css";

const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", manageMouseMove);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorElement = document.querySelector('.cursor-main') as HTMLElement;
      if (!cursorElement) return;

      if (target.closest('[data-cursor="disable"]')) {
        cursorElement.classList.add('cursor-disable');
      } else {
        cursorElement.classList.remove('cursor-disable');
      }

      // Icon logic or complex cursor logic can be re-added if needed
      // For now, keeping it simple as per original simplified logic
    };

    // Note: The original generic selector logic was aggressive. 
    // Simplified to global listener for performance, but can attach specific listeners if needed.
    // Preserving the original behavior layout:

    document.querySelectorAll("[data-cursor]").forEach((item) => {
      const element = item as HTMLElement;
      element.addEventListener("mouseover", (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const cursor = document.querySelector('.cursor-main') as HTMLElement;

        if (element.dataset.cursor === "icons" && cursor) {
          cursor.classList.add("cursor-icons");
          // For icons, we might want to snap to the element. 
          // GSAP was doing: gsap.to(cursor, { x: rect.left, y: rect.top... })
          // With useSpring, we can just set mouseX/Y to rect center/corner if we want snapping.
          // For now, let's keep the fluid follow.
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
        }
        if (element.dataset.cursor === "disable" && cursor) {
          cursor.classList.add("cursor-disable");
        }
      });
      element.addEventListener("mouseout", () => {
        const cursor = document.querySelector('.cursor-main') as HTMLElement;
        if (cursor) cursor.classList.remove("cursor-disable", "cursor-icons");
      });
    });

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="cursor-main"
      style={{
        left: smoothX,
        top: smoothY,
        x: "-50%",
        y: "-50%"
      }}
    />
  );
};

export default Cursor;
