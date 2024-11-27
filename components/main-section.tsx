"use client"; // Mark as a Client Component

import Navbar from "./navbar";
import Hero from "./hero-section";
import Mentors from "./mentors";
import Path from "./path";
import Extras from "./extras";

import Week from "./week";
import Avg from "./avgcohort";
import FAQ from "./faq";
import Footer from "./footer";
import CohortInfo from "./cohortInfo";
import usePathVisibility from "@/hooks/usePathVisibility";

export default function FS() {
  const { pathRef, refreshPath } = usePathVisibility();


  return (
    <div className="relative w-full h-[579px]">
      <video
        src="/video.mp4" // Ensure the video is in the 'public' folder
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-20"></div>
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <Navbar />
        <div>
          <Hero />
        </div>

        <div>
          <Mentors />
        </div>

        <div ref={pathRef}>
          <Path key={String(refreshPath)} />
        </div>
        <div>
          <Extras />
        </div>
        <div>
          <Week />
        </div>
        <div>
          <Avg />
        </div>
        <div>
          <CohortInfo />
        </div>
        <div>
          <FAQ />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
