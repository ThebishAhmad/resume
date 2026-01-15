"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Remove static import
// const ScrollSmoother = (await import("gsap/ScrollSmoother")).default;
import HoverLinks from "./HoverLinks";
import gsap from "gsap";
import "./styles/Navbar.css";

// 🔥 REQUIRED: disables legacy trial warning in modern builds
gsap.config({
  trialWarn: false,
} as any);

gsap.registerPlugin(ScrollTrigger);



const Navbar = () => {
  useEffect(() => {
    (async () => {
      try {
        // Refilling link listeners 
        let links = document.querySelectorAll(".header a[data-href]");
        links.forEach((elem) => {
          let element = elem as HTMLAnchorElement;
          element.addEventListener("click", (e) => {
            if (window.innerWidth > 1024) {
              e.preventDefault();
              let elem = e.currentTarget as HTMLAnchorElement;
              let sectionId = elem.getAttribute("data-href");
              if (sectionId) {
                const targetSection = document.querySelector(sectionId);
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
                }
              }
            }
          });
        });

      } catch (error) {
        console.error("Failed to initialize navbar links:", error);
      }
    })();

    return () => {
      // Cleanup if needed
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <path
              d="M25 5L5 15V35L25 45L45 35V15L25 5Z"
              fill="rgba(255, 255, 255, 0.1)"
              stroke="white"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M25 15V35M15 15H35"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </a>
        <a
          href="mailto:tabishahmaddd@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          Let's Connect
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#achievements" href="#achievements">
              <HoverLinks text="ACHIEVEMENTS" />
            </a>
          </li>
          <li>
            <a data-href="#education" href="#education">
              <HoverLinks text="EDUCATION" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
