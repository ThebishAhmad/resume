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

        // Check if device is mobile (screen width less than 1024px)
        const isMobile = window.innerWidth < 1024;

        // Only enable horizontal scroll on desktop
        if (isMobile) return;

        let ctx = gsap.context(() => {
            gsap.to(section, {
                x: () => {
                    const scrollWidth = section.scrollWidth;
                    const windowWidth = window.innerWidth;
                    return -(scrollWidth - windowWidth + 500);
                },
                ease: "none",
                scrollTrigger: {
                    trigger: trigger,
                    pin: true,
                    scrub: 1,
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
