"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./styles/TiltedCard.css";

interface TiltedCardProps {
    imageSrc?: string;
    altText?: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
    showMobileWarning?: boolean;
    showTooltip?: boolean;
    displayOverlayContent?: boolean;
    overlayContent?: React.ReactNode;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
    imageSrc = "https://placehold.co/600x400/png",
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "400px",
    containerWidth = "100%",
    imageHeight = "100%",
    imageWidth = "100%",
    rotateAmplitude = 12, // Increased for sexy physics
    scaleOnHover = 1.05,
    showMobileWarning = false,
    showTooltip = true,
    displayOverlayContent = false,
    overlayContent = null,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for that premium tactile feel
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]), {
        stiffness: 150,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]), {
        stiffness: 150,
        damping: 30,
    });

    // Glare effect
    const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

    const scale = useSpring(1, { stiffness: 150, damping: 30 });
    const opacity = useSpring(0);
    const rotateFigcaption = useSpring(0);

    function handleMouse(e: MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        opacity.set(1);
        scale.set(scaleOnHover);
        rotateFigcaption.set(-xPct * rotateAmplitude * 2); // Counter-rotation for text
    }

    function handleMouseLeave() {
        opacity.set(0);
        scale.set(1);
        x.set(0);
        y.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="tilted-card-figure"
            style={{
                height: containerHeight,
                width: containerWidth,
            }}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            {showMobileWarning && (
                <div className="mobile-warning">
                    This effect is best viewed on desktop
                </div>
            )}

            <motion.div
                className="tilted-card-inner"
                style={{
                    width: "100%",
                    height: "100%",
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                <motion.div
                    className="tilted-card-glare"
                    style={{
                        opacity: useTransform(opacity, [0, 1], [0, 0.4]), // Adjust glare intensity
                        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8), transparent 50%)`
                    }}
                />

                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-image"
                    style={{
                        height: imageHeight,
                        width: imageWidth,
                    }}
                />

                {displayOverlayContent && (
                    <motion.div className="tilted-card-overlay">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {showTooltip && (
                <motion.figcaption
                    className="tilted-card-caption"
                    style={{
                        x,
                        y,
                        rotate: rotateFigcaption,
                        opacity,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
};

export default TiltedCard;
