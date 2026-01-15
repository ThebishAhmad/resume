"use client";

import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import About from "./About";
import Career from "./Career";
import Achievements from "./Achievements";
import Education from "./Education";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";


const TechMarquee = dynamic(() => import("./TechMarquee"), { ssr: false });

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(true); // Default to desktop or false, hydration mismatch might occur if not handled carefully.
  // Better: use useEffect to set it.

  useEffect(() => {
    setIsDesktopView(window.innerWidth > 1024);
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <Career />
            <Work />
            <Achievements />
            <Education />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechMarquee />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
