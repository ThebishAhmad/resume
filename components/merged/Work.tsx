"use client";
import React from "react";
import { HorizontalScrollWork } from "./HorizontalScrollWork";
import "./styles/Work.css";

const Work = () => {
  const content = [
    {
      title: "Detecting Phishing via Uncertainty-Triggered Discrepancy Modeling",
      description:
        "A dual-layer security system that uses lightweight filters for speed and heavy-duty AI only when it’s confused, specifically designed to catch \"perfect\" fake websites by spotting the hidden mismatch between how they look and where they are hosted.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
          <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800" alt="Phishing Detection" className="h-full w-full object-cover" />
        </div>
      ),
    },
    {
      title: "RapGym - Freestyle trainer",
      description:
        "Created an interactive freestyle rap “gym” that trains timing, flow, and rhyme control using real-time microphone input, beat-synchronized visuals, and pressure-based game modes without relying on stored user data or theory lessons.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))]">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="NeuroLink" className="h-full w-full object-cover" />
        </div>
      ),
    },
    {
      title: "Birthday Website Template",
      description:
        "Need me to unlock it for you",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-black overflow-hidden relative">
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://imgur.com/a/IsoWUgF/embed?pub=true"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      ),
    },
    {
      title: "Portfolio V2",
      description:
        "The immersive experience you are navigating right now. Built with Next.js 14, GSAP, and Framer Motion. Features advanced physics-based interactions, smooth scrolling, and a unique 3D design language.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--white),var(--slate-500))]">
          <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" alt="Portfolio V2" className="h-full w-full object-cover" />
        </div>
      ),
    },
  ];

  return (
    <div className="work-section-sticky" id="work">
      <h2 className="work-sticky-title">My <span>Work</span></h2>
      <HorizontalScrollWork content={content} />
    </div>
  );
};

export default Work;
