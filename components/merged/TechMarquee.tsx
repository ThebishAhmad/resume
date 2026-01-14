"use client";

import "./styles/TechMarquee.css";
import React from "react";
import Image from "next/image";

// Define tech items with name and optional icon path (assuming you have icons)
// If validation fails for images, I'll allow fallback to text only or placeholder
const techRows = [
    // Row 1: Languages (Fast, LTR)
    [
        { name: "JavaScript", icon: "/images/javascript.webp" },
        { name: "TypeScript", icon: "/images/typescript.webp" },
        { name: "Python", icon: "/images/python.webp" }, // Assuming this exists or using generic
        { name: "C++", icon: "/images/cpp.webp" },       // Assuming this exists
        { name: "Java", icon: "/images/java.webp" },     // Assuming this exists
        { name: "HTML5", icon: "/images/html.webp" },    // Assuming this exists
        { name: "CSS3", icon: "/images/css.webp" },      // Assuming this exists
    ],
    // Row 2: Frameworks (Medium, RTL)
    [
        { name: "React", icon: "/images/react2.webp" },
        { name: "Next.js", icon: "/images/next2.webp" },
        { name: "Node.js", icon: "/images/node2.webp" },
        { name: "Express", icon: "/images/express.webp" },
        { name: "Tailwind", icon: "/images/tailwind.webp" }, // Assuming this exists
        { name: "GSAP", icon: "/images/gsap.webp" },         // Assuming this exists
        { name: "Redux", icon: "/images/redux.webp" },       // Assuming this exists
    ],
    // Row 3: Tools & DB (Slow, LTR)
    [
        { name: "MongoDB", icon: "/images/mongo.webp" },
        { name: "MySQL", icon: "/images/mysql.webp" },
        { name: "Git", icon: "/images/git.webp" },           // Assuming this exists
        { name: "Docker", icon: "/images/docker.webp" },     // Assuming this exists
        { name: "AWS", icon: "/images/aws.webp" },           // Assuming this exists
        { name: "Figma", icon: "/images/figma.webp" },       // Assuming this exists
        { name: "Linux", icon: "/images/linux.webp" },       // Assuming this exists
    ]
];

// Helper to duplicate items for seamless loop
const MarqueeRow = ({ items, direction = "normal", speed = 20 }: { items: any[], direction?: "normal" | "reverse", speed?: number }) => {
    // Triple the items to ensure coverage before reset
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="marquee-row" style={{ "--duration": `${speed}s`, "--direction": direction } as React.CSSProperties}>
            <div className="marquee-content">
                {repeatedItems.map((item, index) => (
                    <div className="tech-card" key={`${item.name}-${index}`}>
                        {/* Fallback to text if image fails or just show both */}
                        {/* Using simple text for now to be safe, can uncomment image if verified */}
                        <div className="tech-icon-placeholder">{item.name.charAt(0)}</div>
                        <span className="tech-name">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TechMarquee = () => {
    return (
        <div className="tech-marquee-section">
            <h2 className="tech-heading">My <span>Tech Stack</span></h2>
            <div className="marquee-container">
                <MarqueeRow items={techRows[0]} speed={25} direction="normal" />
                <MarqueeRow items={techRows[1]} speed={35} direction="reverse" />
                <MarqueeRow items={techRows[2]} speed={45} direction="normal" />
            </div>
        </div>
    );
};

export default TechMarquee;
