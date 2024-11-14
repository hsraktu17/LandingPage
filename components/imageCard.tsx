"use client";

import img1 from "@/public/mayank.svg";
import img2 from "@/public/manoj.svg";
import img3 from "@/public/harsh.svg";
import img5 from "@/public/image.svg";
import img6 from "@/public/image (1).svg";
// import img7 from "@/public/image (2).svg";
// import img8 from "@/public/Pexels Photo by Italo Melo.svg";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const imageArray = [
  {
    image: img1,
    name: "Mayank Rajani",
    description: "Founder, PDH",
    comingSoon: false,
  },
  {
    image: img2,
    name: "Manoj S",
    description: "Founder, CogniMuse",
    comingSoon: false,
  },
  {
    image: img3,
    name: "Harsh Joshi",
    description: "Founder, DAO Studio",
    comingSoon: false,
  },
  {
    image: img5,
    name: "Name 4",
    description: "Description 4",
    comingSoon: true,
  },
  {
    image: img6,
    name: "Name 5",
    description: "Description 5",
    comingSoon: true,
  },
];

export default function ImageCard() {
  return (
    <div className="w-full mt-8 mb-8  overflow-x-auto">
      <div className="grid grid-flow-col gap-[15px] mentor-card">
        {imageArray.map((item, index) => (
          <DirectionAwareHover
            key={index}
            imageUrl={item.image.src}
            comingSoon={item.comingSoon}
          >
            <div className="relative w-[200px] h-[280px] rounded-lg overflow-hidden">
              {item.comingSoon ? (
                <div className="absolute inset-0 flex items-start justify-center bg-opacity-70 text-white text-2xl font-bold mt-20">
                  Revealing Soon
                </div>
              ) : (
                <div className="absolute bottom-4 left-4 w-full ">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white font-semibold text-lg">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </DirectionAwareHover>
        ))}
      </div>
    </div>
  );
}
