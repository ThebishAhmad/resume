"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/HorizontalWork.css";

gsap.registerPlugin(ScrollTrigger);

interface WorkItem {
    title: string;
    description: string;
    content: React.ReactNode;
}

export const HorizontalScrollWork = ({ content }: { content: WorkItem[] }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const trigger = triggerRef.current;

        if (!section || !trigger) return;

        // Calculate total width of all cards plus gaps
        // We can assume each card is e.g., 80vw or fixed width.
        // Let's rely on scrollWidth for dynamic sizing.

        let ctx = gsap.context(() => {
            gsap.to(section, {
                x: () => {
                    const scrollWidth = section.scrollWidth;
                    const windowWidth = window.innerWidth;
                    // Increase buffer significantly to ensure last card is fully visible
                    // Make it responsive: ensure we scroll enough to show the end plus some padding
                    return -(scrollWidth - windowWidth + 500);
                },
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    pin: true,
                    scrub: 1,
                    // Adjust end based on scroll width for natural feel
                    end: () => "+=" + (section.scrollWidth),
                    invalidateOnRefresh: true,
                }
            });
        }, triggerRef);

        return () => ctx.revert();
    }, [content]);

    return (
        <div className="h-scroll-outer" ref={triggerRef}>
            <div className="h-scroll-inner" ref={sectionRef}>
                {content.map((item, index) => (
                    <div key={index} className="h-scroll-card">
                        <div className="h-scroll-content">
                            <div className="h-scroll-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="h-scroll-visual">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
