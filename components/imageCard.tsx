"use client";

import img1 from "@/public/image.svg";
import img2 from "@/public/image (1).svg";
import img3 from "@/public/image (2).svg";
import img4 from "@/public/Pexels Photo by Italo Melo.svg";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const imageArray = [
  {
    image: img4,
    name: "Name 1",
    description: "Description 1",
  },
  {
    image: img1,
    name: "Name 2",
    description: "Description 2",
  },
  {
    image: img2,
    name: "Name 3",
    description: "Description 3",
  },
  {
    image: img3,
    name: "Name 4",
    description: "Description 4",
  },
  {
    image: img4,
    name: "Name 5",
    description: "Description 5",
  },
  {
    image: img1,
    name: "Name 6",
    description: "Description 6",
  },
];

export default function ImageCard() {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-8 mb-8 h-[500px] overflow-y-auto">
      {imageArray.map((item, index) => (
        <DirectionAwareHover key={index} imageUrl={item.image.src}>
          <div className="relative w-[200px] h-[280px] rounded-lg overflow-hidden">
            <div className="absolute bottom-4 left-4 w-full p-4">
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.name}
              </h3>
              <p className="text-white text-xs font-light">
                {item.description}
              </p>
            </div>
          </div>
        </DirectionAwareHover>
      ))}
    </div>
  );
}
