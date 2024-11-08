"use client";

import Image from "next/image";
import img1 from "@/public/Pexels Photo by cottonbro studio.png";
import Navbar from "./navbar";
import Hero from "./hero-section";
import Mentors from "./mentors";
import Path from "./path";
import Extras from "./extras";
import Week from "./week";
import Avg from "./avgcohort";
import FAQ from "./faq";
import Footer from "./footer";

export default function FS() {
  return (
    <div className="relative w-full h-[579px]">
      <Image
        src={img1}
        alt=""
        className="w-full h-full object-cover"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Navbar />
        <div>
          <div>
            <Hero />
          </div>
          <div>
            <Mentors />
          </div>
          <div>
            <Path />
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
            <FAQ />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
