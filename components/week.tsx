import Image from "next/image";
import React from "react";

import img1 from "@/public/image 1.svg";
import img2 from "@/public/image 2.svg";
import img3 from "@/public/image 3.svg";

const array = [
  {
    img: img1,
    title: "Ongoing Mentorship",
    description: "Continued guidance as you navigate early-stage challenges.",
  },
  {
    img: img2,
    title: "Exclusive Resources",
    description:
      "Access to templates, tools, and a network of fellow founders.",
  },
  {
    img: img3,
    title: "Alumni Community",
    description:
      "Join a growing community of PDH School alumni dedicated to mutual support and growth.",
  },
];

export default function Week() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-[120px]">
      <div className="text-[36px] font-[600] mb-2 text-center">
        Beyond the 6-Week Program
      </div>
      <div className="text-[22px] font-[400] text-center">
        PDH School’s commitment doesn’t end at graduation
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {array.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

interface cardProps {
  img: any;
  title?: string;
  description: string;
}

export function Card({ img, title, description }: cardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 m-4 max-w-sm">
      <div className="flex items-center justify-center w-full h-48 mb-4">
        <Image src={img} alt={title || "Card Image"} className="rounded" />
      </div>
      {title && (
        <div className="text-[24px] font-[600] mb-2 text-center">{title}</div>
      )}
      <div className="text-[16px] font-[400] text-center">{description}</div>
    </div>
  );
}
