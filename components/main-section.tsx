"use client";

import Image from "next/image";
import img1 from "@/public/Pexels Photo by cottonbro studio.png";
import Navbar from "./navbar";
import Hero from "./hero-section";

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
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-white text-center">
            <Hero />
          </div>
        </div>
      </div>
    </div>
  );
}
