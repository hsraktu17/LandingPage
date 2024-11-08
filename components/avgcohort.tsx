import React from "react";

const array = [
  {
    title: "80%",
    description: "Complete the Program with a Pitch-Ready Deck",
  },
  {
    title: "40%",
    description: "Alumni Who Secured Seed Funding Within 6 Months",
  },
  {
    title: "90%",
    description: "Alumni Report Business Validation by Cohort End",
  },
  {
    title: "60%",
    description: "Launch MVPs Within 6 Weeks of Completing the Program",
  },
];

export default function Avg() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-[120px]">
      <div className="text-[36px] font-[600] mb-2 text-center">
        Average Program Benefits
      </div>
      <div className="flex flex-wrap justify-center mt-8">
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
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-5 m-4 w-[348px] h-[206px] text-left">
      {title && <div className="text-[48px] font-[600] mb-2">{title}</div>}
      <div className="text-[16px] font-[400]">{description}</div>
    </div>
  );
}
