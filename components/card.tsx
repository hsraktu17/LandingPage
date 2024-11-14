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
    heading: "Sessions",
    subHeading: "With experienced founders, investors, & mentors",
  },
  {
    heading: "Hybrid",
    subHeading: "5 days a week online sessions with a destination graduation",
  },
  {
    heading: "Success Partner",
    subHeading: "A buddy for course and after the course",
  },
  {
    heading: "Community",
    subHeading: "of future partners, investors, and successful alumni",
  },
  {
    heading: "AI toolkit",
    subHeading: "with a collection of new-gen no-code tools",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 card-content">
      {cardContent.map((card, index) => (
        <Card key={index} heading={card.heading} subHeading={card.subHeading} />
      ))}
    </div>
  );
}
