"use client";

interface CardProps {
  heading: string;
  subHeading: string;
}

function Card({ heading, subHeading }: CardProps) {
  return (
    <div className="p-6 bg-gray-800 text-white shadow-md w-full md:w-[300px] lg:w-[348px] h-auto md:h-[150px] lg:h-[150px] mb-4 md:mb-0">
      <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold mb-2">
        {heading}
      </h2>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-lg font-normal">
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
    <div className="flex flex-wrap space-x-20 justify-center md:justify-start">
      {cardContent.map((card, index) => (
        <Card key={index} heading={card.heading} subHeading={card.subHeading} />
      ))}
    </div>
  );
}
