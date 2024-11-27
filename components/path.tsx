
import CourseCards from "./courseCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useCoursePath from '../hooks/useCoursePath'

gsap.registerPlugin(ScrollTrigger);

const businessCentricCourses = [
  {
    week: "Week 1",
    title: "Spark the Vision",
    topics: ["Brand Identity", "Market Research", "Value Proposition"],
    workshops: ["Brand Storytelling", "Logo Design", "Messaging Framework"],
    assignments: [
      "Conduct market research",
      "Craft your brand story",
      "Develop brand guidelines",
    ],
  },
  {
    week: "Week 2",
    title: "Build Your Online Home",
    topics: ["Online Presence", "Landing Page Optimization", "SEO Essentials"],
    workshops: ["Website Design", "Content Creation", "Keyword Research"],
    assignments: [
      "Create a landing page",
      "Structure your website",
      "Apply SEO strategies",
    ],
  },
  {
    week: "Week 3",
    title: "Ignite Your Sales Engine",
    topics: ["Sales Fundamentals", "Lead Generation", "Negotiation Skills"],
    workshops: ["Sales Pitches", "Lead Nurturing", "Social Media Strategies"],
    assignments: [
      "Develop marketing campaigns",
      "Craft a sales pitch",
      "Launch a lead-generation initiative",
    ],
  },
  {
    week: "Week 4",
    title: "Delivering Value",
    topics: ["Customer Experience", "Workflow Optimization", "Relationship Management"],
    workshops: [
      "Customer Support Strategies",
      "Loyalty Program Design",
      "Operations Efficiency",
    ],
    assignments: [
      "Streamline workflows",
      "Resolve customer issues",
      "Build a loyalty program",
    ],
  },
  {
    week: "Week 5",
    title: "Fueling Growth",
    topics: ["Financial Metrics", "Data-Driven Decisions", "Team Leadership"],
    workshops: ["KPI Tracking", "Financial Modeling", "Collaborative Tools"],
    assignments: [
      "Track key metrics",
      "Develop financial projections",
      "Outline team-building strategies",
    ],
  },
  {
    week: "Week 6",
    title: "Scaling Your Vision",
    topics: ["Growth Hacking", "Business Diversification", "Strategic Planning"],
    workshops: ["Viral Marketing", "Expansion Strategies", "Revenue Stream Innovation"],
    assignments: [
      "Plan growth initiatives",
      "Identify new opportunities",
      "Craft a long-term vision",
    ],
  },
];


const techCentricCourses = [
  {
    week: "Week 1",
    title: "Spark the Innovation",
    topics: ["Product Vision", "Development Environment", "Prototyping Basics"],
    workshops: ["Ideation", "Market Research", "Tech Stack Selection"],
    assignments: [
      "Define your product roadmap",
      "Set up tools",
      "Build MVP features",
    ],
  },
  {
    week: "Week 2",
    title: "Engineer the Foundation",
    topics: ["AI Integration", "API Utilization", "Security Practices"],
    workshops: ["AI/ML Exploration", "API Integration", "Data Protection"],
    assignments: [
      "Integrate AI functionalities",
      "Connect APIs",
      "Implement security measures",
    ],
  },
  {
    week: "Week 3",
    title: "Engage Early Adopters",
    topics: ["Beta Testing", "User Feedback", "Data Analysis"],
    workshops: ["Onboarding", "Survey Design", "A/B Testing"],
    assignments: [
      "Launch beta version",
      "Collect feedback",
      "Iterate product features",
    ],
  },
  {
    week: "Week 4",
    title: "Refine and Optimize",
    topics: ["Code Quality", "Performance Tuning", "UX Enhancements"],
    workshops: ["Code Refactoring", "Speed Optimization", "Usability Testing"],
    assignments: [
      "Refactor codebase",
      "Optimize performance",
      "Implement UX improvements",
    ],
  },
  {
    week: "Week 5",
    title: "Automate & Streamline",
    topics: ["CI/CD Pipelines", "Agile Methodologies", "Automated Testing"],
    workshops: ["Pipeline Configuration", "Testing Frameworks", "Sprint Planning"],
    assignments: [
      "Set up CI/CD",
      "Automate tests",
      "Adopt agile sprints",
    ],
  },
  {
    week: "Week 6",
    title: "Prepare for Launch",
    topics: ["Deployment Strategies", "Community Building", "Monitoring Tools"],
    workshops: ["Launch Planning", "Marketing Initiatives", "Error Tracking"],
    assignments: [
      "Deploy final product",
      "Execute launch plan",
      "Engage user community",
    ],
  },
];

export default function Path() {
  
  const { isBusinessCentric, setIsBusinessCentric, pathCohortInfo } = useCoursePath();
  

  return (
    <div
      className="text-white py-[38px] px-[120px] pt-48 sm:px-[10px] flex flex-col items-center justify-center main-container"
      id="curriculum"
    >
      <div className="text-[36px] font-[600] max-w-4xl text-center mb-8">
        Choose the path that best aligns with your goals
      </div>
      <div className="business-centric-button ">
        <button
          className={`h-[100px] sm:h-[120px]  w-[346px] border-button ${
            isBusinessCentric
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } p-2 sm:p-4`}
          onClick={() => setIsBusinessCentric(true)}
        >
          <div className="text-[18px] sm:text-[24px]  font-bold">
            Business-Centric
          </div>
          <div className="text-[10px] sm:text-[16px] font-normal">
            Idea to Impact
          </div>
        </button>
        <button
          className={`h-[100px] sm:h-[120px]  w-[346px] choose-path-button ${
            !isBusinessCentric
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } p-2 sm:p-4`}
          onClick={() => setIsBusinessCentric(false)}
        >
          <div className="text-[18px] sm:text-[24px] font-bold">
            Tech-Centric
          </div>
          <div className="text-[10px] sm:text-[16px] font-normal">
            Code to Reality
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
      <div
        ref={pathCohortInfo}
        className="mt-8 flex overflow-x-auto w-full gap-4 sm:gap-[72px] pl-[120px] business-card "
      >
        {isBusinessCentric
          ? businessCentricCourses.map((course, index) => (
              <CourseCards
                key={index}
                week={course.week}
                title={course.title}
                topics={course.topics}
                workshops={course.workshops}
                assignments={course.assignments}
              />
            ))
          : techCentricCourses.map((course, index) => (
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
      <button className="ml-20 py-3 items-center flex mt-5 sm:py-3.5 md:py-4 pl-16 bg-white text-black border-button transition w-full sm:w-96 download-carriculam2">
        <a
          href="https://pdhschool.notion.site/School-of-Project-Dark-Horse-13ee8b9ff7988058bf65c189d5bd114d"
          target="_blank"
          className="text-xl"
        >
          Link To Detailed Curriculum
        </a>
      </button>
    </div>
  );
}
