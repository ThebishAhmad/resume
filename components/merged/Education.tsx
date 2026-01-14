"use client";
import React from "react";
import SpotlightCard from "./SpotlightCard";
import "./styles/Education.css";

const Education = () => {
    return (
        <section className="education-section" id="education">

            {/* Education Block */}
            <h2 className="section-title">My <span>Education</span></h2>
            <div className="bento-grid">

                {/* Main Uni Card */}
                <SpotlightCard className="bento-item main-edu">
                    <div className="edu-content">
                        <div className="edu-badge">2023 - 2027</div>
                        <h3>National Institute of Technology, Jalandhar</h3>
                        <p className="degree">B.Tech Computer Science & Engineering</p>
                        <p className="desc">Focusing on Data Structures and Algorithms, AI/ML and Core Engineering.</p>
                    </div>
                </SpotlightCard>

                {/* High School Cards */}
                <SpotlightCard className="bento-item sub-edu">
                    <div className="edu-content">
                        <div className="edu-badge">2021 - 2022</div>
                        <h3>International Indian School</h3>
                        <p className="location">Dammam, Saudi Arabia</p>
                        <p className="desc">Class XII (CBSE)</p>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="bento-item sub-edu">
                    <div className="edu-content">
                        <div className="edu-badge">2019 - 2020</div>
                        <h3>International Indian School</h3>
                        <p className="location">Dammam, Saudi Arabia</p>
                        <p className="desc">Class X (CBSE)</p>
                    </div>
                </SpotlightCard>
            </div>

            {/* Leadership Block */}
            <h2 className="section-title por-title">Positions of <span>Responsibility</span></h2>
            <div className="por-grid">

                <SpotlightCard className="por-card" spotlightColor="rgba(100, 200, 255, 0.2)">
                    <div className="por-icon">🛡️</div>
                    <div className="por-details">
                        <h3>President</h3>
                        <p>FSociety Cybersecurity Club</p>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="por-card" spotlightColor="rgba(255, 200, 100, 0.2)">
                    <div className="por-icon">📢</div>
                    <div className="por-details">
                        <h3>Class Representative</h3>
                        <p>Computer Science & Engineering</p>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="por-card" spotlightColor="rgba(100, 255, 150, 0.2)">
                    <div className="por-icon">📝</div>
                    <div className="por-details">
                        <h3>Member</h3>
                        <p>Student Feedback Council</p>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="por-card" spotlightColor="rgba(255, 100, 100, 0.2)">
                    <div className="por-icon">🎭</div>
                    <div className="por-details">
                        <h3>Cultural Secretary</h3>
                        <p>Hostel Committee</p>
                    </div>
                </SpotlightCard>

            </div>
        </section>
    );
};

export default Education;
