"use client";

import Image from "next/image";

import img1 from "@/public/hands_on_learning.svg";
import img2 from "@/public/feedback.svg";
import img3 from "@/public/Layer_1 (2).svg";
import img4 from "@/public/Layer_1 (3).svg";
import useHoverPosition from "@/hooks/useHoverPosition";

const array = [
  {
    img: img1,
    title: "Hands-on Learning",
    description:
      "Apply theories and build your startup in real-time through practical challenges.",
  },
  {
    img: img2,
    title: "Immediate Feedback",
    description:
      "Receive personalized mentorship and refine your product with actionable insights.",
  },
  {
    img: img3,
    title: "Community Driven Success",
    description:
      "Connect with entrepreneurs, fostering partnerships and support.",
  },
  {
    img: img4,
    title: "Launch Ready Outcome",
    description:
      "Graduate with a validated product, pitch deck, and growth roadmap.",
  },
];

export default function Extras() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-[120px] extra-page">
      <div className="px-6  text-center common-container">
        <div className="text-[28px] lg:text-[36px] font-[600]">
          More Than Just a Cohort
        </div>
        <div className="text-[18px] lg:text-[22px] font-[400]">
          Experience real-world startup success through hands-on learning
        </div>
      </div>
      <div className="flex mt-8 justify-center cohort-card">
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

function Card({ img, title, description }: cardProps) {
  const { hoverPosition, handleMouseMove, resetHoverPosition } = useHoverPosition();

  return (
    <div className="bg-gray-800 rounded-sm shadow-lg p-8 m-4 w-[300px] card-section"   onMouseMove={handleMouseMove}
    onMouseLeave={resetHoverPosition}
    style={{
      background: hoverPosition
        ? `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(55, 65, 81, 0.9), rgba(55, 65, 81, 0.5))`
        : "rgba(55, 65, 81, 0.5)",
    }}>
      <div className="flex items-center justify-left w-full h-48 mb-4">
        <Image
          src={img}
          alt={title || "Card Image"}
          width={157}
          height={151}
          className="rounded"
        />
      </div>
      {title && (
        <div className="text-[20px] lg:text-[24px] font-[600] mb-2 text-left">
          {title}
        </div>
      )}
      <div className="text-[14px] lg:text-[16px] font-[400] text-left">
        {description}
      </div>
    </div>
  );
}
