"use client";

interface CardProps {
  heading: string;
  subHeading: string;
}

function Card({ heading, subHeading }: CardProps) {
  return (
    <div className="p-6 bg-gray-800 text-white shadow-md w-full h-auto mb-4">
      <h2 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold mb-2">
        {heading}
      </h2>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal">
        {subHeading}
      </p>
    </div>
  );
}

const cardContent = [
  {
    heading: "Hybrid",
    subHeading: "1 day in-person in Bangalore & 5 days online",
  },
  {
    heading: "1-on-1 Sessions",
    subHeading: "With experienced founders, investors, & mentors",
  },
  {
    heading: "Community",
    subHeading: "of future partners, investors, and successful alumni",
  },
  {
    heading: "1 Year",
    subHeading: "of support to ensure continued progress",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 card-content">
      {cardContent.map((card, index) => (
        <Card key={index} heading={card.heading} subHeading={card.subHeading} />
      ))}
    </div>
  );
}
