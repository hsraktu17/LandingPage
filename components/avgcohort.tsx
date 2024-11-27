import useHoverPosition from "@/hooks/useHoverPosition";
import React from "react";

const array = [
  {
    title: "20%",
    description: "Students receive need-based scholarship",
  },
  {
    title: "40%",
    description: "Are female entrepreneurs",
  },
  {
    title: "60%",
    description: "Hail from Tier 2 and below cities",
  },
  {
    title: "80%",
    description: "Startups successfully launch within 6 weeks",
  },
  {
    title: "100%",
    description: "Startups get extended support of PDH-verse",
  },
];

export default function Avg() {
  return (
    <div className="flex flex-col items-center justify-center text-white py-[120px] px-[192px] common-container">
      <div className="text-[36px] font-[600] mb-2 text-center">
        Average Program Benefits
      </div>
      <div className="grid grid-cols-1 program-container lg:grid-cols-5 gap-4 mt-8 px-24">
        {array.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

interface cardProps {
  title?: string;
  description: string;
}

export function Card({ title, description }: cardProps) {
  const { hoverPosition, handleMouseMove, resetHoverPosition } = useHoverPosition();

  return (
    <div className="bg-gray-800 program-container-card shadow-lg p-5 m-4 text-left"  onMouseMove={handleMouseMove}
    onMouseLeave={resetHoverPosition}
    style={{
      background: hoverPosition
        ? `radial-gradient(circle at ${hoverPosition.x}px ${hoverPosition.y}px, rgba(55, 65, 81, 0.9), rgba(55, 65, 81, 0.5))`
        : "rgba(55, 65, 81, 0.5)",
    }}>
      {title && <div className="text-[48px] font-[600] mb-2">{title}</div>}
      <div className="text-[16px] font-[400]">{description}</div>
    </div>
  );
}
