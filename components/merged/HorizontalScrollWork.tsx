"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./styles/HorizontalWork.css";

interface WorkItem {
    title: string;
    description: string;
    content: React.ReactNode;
}

export const HorizontalScrollWork = ({ content }: { content: WorkItem[] }) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Map vertical scroll progress to horizontal movement.
    // "1%" to "-95%" is a safe heuristic for a standard list of items. 
    // For precise width, we'd need to measure refs, but this is usually sufficient and responsive.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="h-[300vh] relative">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-[4vw] px-[4vw]">
                    {content.map((item, index) => (
                        <div key={index} className="h-scroll-card-wrapper">
                            <div className="h-scroll-card">
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
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

