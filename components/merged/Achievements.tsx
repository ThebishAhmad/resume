"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import "./styles/Achievements.css"; // We'll need to define this or reuse existing

const Achievements = () => {
    return (
        <div className="achievements-section" id="achievements">
            <h2 className="achievements-title">My <span>Achievements</span></h2>
            <div className="scroll-stack-container">
                <ScrollStack
                    itemDistance={50}
                    itemScale={0.05}
                    itemStackDistance={40}
                    stackPosition="15%"
                >
                    {/* Card 1: Hackathons */}
                    <ScrollStackItem itemClassName="achievement-card glass-card">
                        <div className="card-content">
                            <div className="card-icon">🏆</div>
                            <div className="card-text">
                                <h3>Ethical Hacker Certification</h3>
                                <p className="card-highlight">
                                    <a
                                        href="https://www.credly.com/badges/b64e872d-ab49-4e8f-b318-fc8fcca99ad8/linked_in?t=t87ri6"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}
                                    >
                                        Certified Ethical Hacker by CISCO
                                    </a>
                                </p>
                                <p className="card-desc">
                                    Proficiency in the art of scoping, executing, reporting vulnerability assessments, and recommending mitigation strategies
                                </p>
                            </div>
                        </div>
                    </ScrollStackItem>

                    {/* Card 2: Certifications */}
                    <ScrollStackItem itemClassName="achievement-card glass-card">
                        <div className="card-content">
                            <div className="card-icon">📜</div>
                            <div className="card-text">
                                <h3>2nd runner up in CYDO’s Hack CTF</h3>
                                <p className="card-highlight">Capture The Flag event</p>
                                <p className="card-desc">
                                    Conducted by CyberDojo-The school of Cyberdefense on 11th April 2025
                                </p>
                            </div>
                        </div>
                    </ScrollStackItem>

                    {/* Card 3: Open Source */}
                    <ScrollStackItem itemClassName="achievement-card glass-card">
                        <div className="card-content">
                            <div className="card-icon">🤝</div>
                            <div className="card-text">
                                <h3>Runner Up in HackOn with Amazon</h3>
                                <p className="card-highlight">Amazon's National Hackathon</p>
                                <p className="card-desc">
                                    Reached the final stage of Amazon Hackathon
                                </p>
                            </div>
                        </div>
                    </ScrollStackItem>

                    {/* Card 4: Research */}
                    <ScrollStackItem itemClassName="achievement-card glass-card">
                        <div className="card-content">
                            <div className="card-icon">🔬</div>
                            <div className="card-text">
                                <h3>Published Research Paper</h3>
                                <p className="card-highlight">IEEE Conference 2026 (Working on it)</p>
                                <p className="card-desc">
                                    Pixel-Perfect Detecting Phishing via Uncertainty-Triggered Discrepancy Modeling
                                </p>
                            </div>
                        </div>
                    </ScrollStackItem>

                </ScrollStack>
            </div>
        </div>
    );
};

export default Achievements;
