"use client";

import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import TextPressure from './TextPressure';
import RotatingText from './RotatingText';

import { TextSplitter } from "./utils/TextSplitter";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <TextSplitter text="Hello! I'm" className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4" word={true} />
            <div style={{ position: 'relative', height: '300px', width: '100%' }}>
              <TextPressure
                text="TABISH"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
          </div>
          <div className="landing-info">
            <TextSplitter text="I am a Creative" className="text-xl sm:text-2xl text-gray-300 mb-2" word={true} delay={0.5} />
            <div style={{ display: 'flex', alignItems: 'center', height: '60px', overflow: 'hidden' }}>
              <RotatingText
                texts={['DEVELOPER', 'DESIGNER', 'STUDENT', 'ENGINEER']}
                mainClassName="text-white text-4xl sm:text-5xl md:text-6xl font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-start rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>

          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
