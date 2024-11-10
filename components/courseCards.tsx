"use client";

interface CourseCardsProps {
  week: string;
  title: string;
  topics: string[];
  workshops: string[];
  assignments: string[];
}

export default function CourseCards({
  week,
  title,
  topics,
  workshops,
  assignments,
}: CourseCardsProps) {
  return (
    <div className="text-white">
      <div className=" course-card max-w-[750px] h-auto flex flex-col md:flex-row bg-[#282F36] rounded-lg overflow-hidden mb-6">
        {/* Left section */}
        <div className="bg-[#282F36] p-[16px] md:p-[32px] w-full md:w-[330px] text-left flex flex-col justify-between">
          <div className="text-[20px] md:text-[24px] font-[600] mb-4">{week}</div>
          <div className="text-[24px] md:text-[32px] font-[700] mb-4">{title}</div>
          <ul className="list-disc ml-5 font-[400] text-[14px] md:text-[18px]">
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Right section */}
        <div className="flex flex-col flex-grow bg-[#1F2429] p-[16px] md:p-[32px] gap-6 md:gap-8 text-left">
          <div>
            <div className="text-[14px] md:text-[16px] font-[400] mb-4">WORKSHOPS</div>
            <ul className="list-disc ml-5 text-[12px] md:text-[16px]">
              {workshops.map((workshop, index) => (
                <li key={index}>{workshop}</li>
              ))}
            </ul>
          </div>
          <hr className="border-[#333333]" />
          <div>
            <div className="text-[14px] md:text-[16px] font-[400] mb-4">ASSIGNMENTS</div>
            <ul className="list-disc ml-5 text-[12px] md:text-[16px]">
              {assignments.map((assignment, index) => (
                <li key={index}>{assignment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
