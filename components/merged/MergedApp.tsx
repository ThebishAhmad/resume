"use client";

import { Suspense } from "react";
import "./App.css";
import "./index.css"; // Ensure global styles are applied
import dynamic from "next/dynamic";

const Character = dynamic(() => import("./Character"), { ssr: false });
const MainContainer = dynamic(() => import("./MainContainer"), { ssr: false });
const Loading = dynamic(() => import("./Loading"), { ssr: false });
const WorkImage = dynamic(() => import("./WorkImage"), { ssr: false });
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense fallback={null}>
          <MainContainer>
            <Suspense fallback={null}>
              <Character />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
