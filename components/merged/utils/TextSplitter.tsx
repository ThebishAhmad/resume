"use client";

import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface TextSplitterProps extends HTMLMotionProps<"div"> {
    text: string;
    word?: boolean; // If true, split by words. Default is chars.
    stagger?: number;
    delay?: number;
}

export const TextSplitter = ({
    text,
    word = false,
    stagger = 0.05,
    delay = 0,
    className,
    ...props
}: TextSplitterProps) => {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(5px)",
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    if (word) {
        return (
            <motion.div
                style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.25em" }}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={className}
                {...props}
            >
                {words.map((word, index) => (
                    <motion.span variants={child} key={index}>
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    return (
        <motion.div
            style={{ overflow: "hidden", display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
            {...props}
        >
            {text.split("").map((char, index) => (
                <motion.span variants={child} key={index}>
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    );
};
