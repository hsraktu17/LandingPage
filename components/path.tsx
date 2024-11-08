// Path.tsx
"use client";

import { useState } from "react";
import CourseCards from "./courseCards";

const businessCentricCourses = [
  {
    week: "Week 1",
    title: "Ideation and Validation",
    topics: ["Idea Generation", "Market Research", "Customer Discovery"],
    workshops: ["Design Thinking", "Lean Startup", "MVP Creation"],
    assignments: ["Conduct user interviews", "Craft a value proposition"],
  },
  {
    week: "Week 2",
    title: "Business Model Development",
    topics: ["Value Proposition", "Revenue Streams", "Cost Structure"],
    workshops: ["Business Model Canvas", "Revenue Planning", "Cost Analysis"],
    assignments: ["Create a business model", "Identify key revenue streams"],
  },
  {
    week: "Week 3",
    title: "Market Strategy",
    topics: ["Target Market", "Competitor Analysis", "Marketing Channels"],
    workshops: [
      "Market Research Techniques",
      "Competitor Mapping",
      "Marketing Strategies",
    ],
    assignments: ["Develop a market strategy", "Identify competitors"],
  },
  {
    week: "Week 4",
    title: "Product Development",
    topics: ["Prototyping", "User Feedback", "Iteration"],
    workshops: ["Product Prototyping", "User Testing", "Iteration Techniques"],
    assignments: ["Create a product prototype", "Collect user feedback"],
  },
  {
    week: "Week 5",
    title: "Financial Planning",
    topics: ["Budgeting", "Financial Forecasting", "Break-even Analysis"],
    workshops: [
      "Financial Planning",
      "Budget Management",
      "Investment Analysis",
    ],
    assignments: ["Draft a financial plan", "Perform break-even analysis"],
  },
  {
    week: "Week 6",
    title: "Pitch Preparation",
    topics: ["Creating a Pitch", "Storytelling", "Investor Q&A"],
    workshops: ["Pitch Deck Creation", "Public Speaking", "Investor Handling"],
    assignments: ["Prepare a pitch deck", "Practice investor Q&A"],
  },
];

const techCentricCourses = [
  {
    week: "Week 1",
    title: "Technical Foundations",
    topics: [
      "Introduction to Programming",
      "Basic Algorithms",
      "Data Structures",
    ],
    workshops: [
      "Hands-on Coding",
      "Algorithm Design",
      "Data Structure Implementation",
    ],
    assignments: ["Solve coding exercises", "Build a simple project"],
  },
  {
    week: "Week 2",
    title: "Advanced Algorithms",
    topics: [
      "Sorting and Searching",
      "Dynamic Programming",
      "Graph Algorithms",
    ],
    workshops: [
      "Advanced Problem Solving",
      "Dynamic Programming Techniques",
      "Graph Theory",
    ],
    assignments: [
      "Complete advanced algorithm problems",
      "Optimize solutions for efficiency",
    ],
  },
  {
    week: "Week 3",
    title: "System Design",
    topics: ["High-Level Design", "Scalability", "Microservices"],
    workshops: [
      "System Design Principles",
      "Scalability Workshops",
      "Microservice Architecture",
    ],
    assignments: [
      "Design a scalable system",
      "Create a system architecture diagram",
    ],
  },
  {
    week: "Week 4",
    title: "Database Management",
    topics: ["SQL vs NoSQL", "Database Optimization", "Data Modeling"],
    workshops: [
      "Database Query Optimization",
      "NoSQL Use Cases",
      "Data Modeling Techniques",
    ],
    assignments: [
      "Optimize a database schema",
      "Compare SQL and NoSQL solutions",
    ],
  },
  {
    week: "Week 5",
    title: "Cloud Computing",
    topics: ["AWS Overview", "Azure Services", "Cloud Architecture"],
    workshops: [
      "AWS Hands-on Lab",
      "Azure Cloud Setup",
      "Cloud Service Integration",
    ],
    assignments: ["Set up a cloud service", "Deploy an application on AWS"],
  },
  {
    week: "Week 6",
    title: "DevOps and Deployment",
    topics: [
      "CI/CD Pipelines",
      "Docker and Kubernetes",
      "Deployment Strategies",
    ],
    workshops: [
      "CI/CD Implementation",
      "Containerization with Docker",
      "Kubernetes Basics",
    ],
    assignments: ["Create a CI/CD pipeline", "Deploy a containerized app"],
  },
];

export default function Path() {
  const [isBusinessCentric, setIsBusinessCentric] = useState(true);

  return (
    <div className="text-white py-[38px] px-[120px] flex flex-col items-center justify-center ">
      <div className="text-[36px] font-[600] max-w-4xl text-center mb-8">
        Choose the path that best aligns with your goals
      </div>
      <div className="flex">
        <button
          className={`h-[120px] w-[346px] ${isBusinessCentric ? "bg-white text-black" : "bg-transparent text-white"}`}
          onClick={() => setIsBusinessCentric(true)}
        >
          <div className="text-[24px] font-bold">Business-Centric</div>
          <div className="text-[16px] font-normal">
            For aspiring entrepreneurs
          </div>
        </button>
        <button
          className={`h-[120px] w-[346px] ${!isBusinessCentric ? "bg-white text-black" : "bg-transparent text-white"}`}
          onClick={() => setIsBusinessCentric(false)}
        >
          <div className="text-[24px] font-bold">Tech-Centric</div>
          <div className="text-[16px] font-normal">
            For aspiring tech experts
          </div>
        </button>
      </div>
      <div className="mt-8 text-center">
        {isBusinessCentric ? (
          <>
            <div className="text-[28px] font-bold mb-4">
              Course Curriculum: Business-Centric Path
            </div>
            <div className="text-[18px] font-normal mb-8">
              Learn the fundamentals of entrepreneurship and business strategy
            </div>
          </>
        ) : (
          <>
            <div className="text-[28px] font-bold mb-4">
              Course Curriculum: Tech-Centric Path
            </div>
            <div className="text-[18px] font-normal mb-8">
              Develop your technical skills and explore advanced engineering
              concepts
            </div>
          </>
        )}
      </div>
      {isBusinessCentric ? (
        <div className="mt-8 grid grid-cols-2 gap-x-[72px] gap-y-[32px]">
          {businessCentricCourses.map((course, index) => (
            <CourseCards
              key={index}
              week={course.week}
              title={course.title}
              topics={course.topics}
              workshops={course.workshops}
              assignments={course.assignments}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-[72px] gap-y-[32px]">
          {techCentricCourses.map((course, index) => (
            <CourseCards
              key={index}
              week={course.week}
              title={course.title}
              topics={course.topics}
              workshops={course.workshops}
              assignments={course.assignments}
            />
          ))}
        </div>
      )}
    </div>
  );
}
