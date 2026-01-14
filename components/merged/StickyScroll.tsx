"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import "./styles/StickyScroll.css";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // target: ref,
        container: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--slate-900)",
        "var(--black)",
        "var(--neutral-900)",
    ];

    // Neon accent colors corresponding to each card
    const linearGradients = [
        "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))", // Phishing
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))", // NeuroLink
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))", // Quantum
        "linear-gradient(to bottom right, var(--white), var(--slate-500))", // Portfolio
    ];

    return (
        <motion.div
            className="sticky-scroll-container"
            ref={ref}
        >
            <div className="sticky-scroll-content">
                <div className="sticky-scroll-text-wrapper">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="sticky-scroll-card">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="sticky-scroll-title"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="sticky-scroll-description"
                            >
                                {item.description}
                            </motion.p>

                            {/* Mobile View Content */}
                            <div className="sticky-scroll-mobile-content">
                                {item.content}
                            </div>

                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>
            <div
                style={{ background: linearGradients[activeCard % linearGradients.length] }}
                className={`sticky-scroll-image-wrapper ${contentClassName}`}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
