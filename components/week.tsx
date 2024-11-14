import Image from "next/image";
import React from "react";
import img4 from "@/public/Layer_1_.svg";
import img1 from "@/public/Group 7.svg";
import img2 from "@/public/Group 8.svg";
import img3 from "@/public/Group 9.svg";

const array = [
  {
    img: img1,
    title: "Incubation at PDH Ventures",
    description:
      "Get your start-up incubated at PDH Ventures as Alumni at no-cost.",
  },
  {
    img: img2,
    title: "Regular Advisory",
    description: "Continued guidance as you navigate early-stage challenges.",
  },
  {
    img: img3,
    title: "Startup Management System  ",
    description: "Access to our all-purpose work operating system.",
  },
  {
    img: img4,
    title: "Alumni Partnerships ",
    description:
      "Join a growing community of PDH School alumni dedicated to mutual support and growth.",
  },
];

export default function Week() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-[120px] common-container px-[120px]">
      <div className="text-[36px] font-[600] mb-2 text-center">
        Beyond the 6-Week Program
      </div>
      <div className="text-[22px] font-[400] text-center">
        PDH School’s commitment doesn’t end at graduation
      </div>
      <div className="flex justify-center mt-8 week-card">
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
  img: string;
  title?: string;
  description: string;
}

export function Card({ img, title, description }: cardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 m-4 w-[300px] card-section">
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
