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
      <div className="w-[750px] h-[360px] flex">
        <div className="bg-[#282F36] p-[32px] w-[330px] text-left flex flex-col justify-between">
          <div>
            <div className="text-[24px] font-[600] mb-8">{week}</div>
          </div>
          <div className="text-[32px] font-[700] mb-4">
            {title}
            <ul className="list-disc ml-5 font-[400] text-[18px]">
              {topics.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-grow bg-[#1F2429] p-[32px] gap-8 text-left">
          <div>
            <div className="text-[16px] font-[400] mb-4">WORKSHOPS</div>
            <ul className="list-disc ml-5">
              {workshops.map((workshop, index) => (
                <li key={index}>{workshop}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div>
            <div className="text-[16px] font-[400] mb-4">ASSIGNMENT</div>
            <ul className="list-disc ml-5">
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
