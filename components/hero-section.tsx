import Cards from "./card";
import ArrowDown from '../public/Arrow Download.svg'
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-white px-4 sm:px-6 md:px-[60px] lg:px-[120px] py-6 md:py-10 lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-[64px]" id="hero">
      <div className="space-y-4 md:space-y-6 lg:space-y-[32px] text-center md:text-left">
        <div className="font-semibold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] max-w-full md:max-w-[800px] lg:max-w-[1150px] mx-auto md:mx-0">
          Your 6-week launch pad to startup success
        </div>
        <div className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-normal max-w-full md:max-w-[700px] mx-auto md:mx-0">
          Build, Validate, and Launch Your Dream Startup with India’s Top
          Mentors
        </div>
      </div>
      <div className="text-center flex flex-wrap md:text-left hero-buttons">
      <a href="https://pdhschool.notion.site/13de8b9ff79880cb8019e0da17497c4c?pvs=105" target="_blank" rel="noopener noreferrer">
        <button className="bg-white py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 text-black w-full sm:w-96 font-medium hover:bg-gray-200 transition">
          Apply Now
        </button>
        </a>
        <a href="/PDH School _ Brochure [Cohort 2].pdf" download>
        <button className=" ml-20 py-3 flex sm:py-3.5 md:py-4 px-6 sm:px-8 md:px-10 border-t border-b border-white text-white hover:bg-white hover:text-black transition w-full sm:w-96 download-carriculam">
          Download  Detailed Curriculum  <Image src={ArrowDown} alt="Arrow Down" className="ml-2 "  />
        </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8 justify-center md:justify-start">
        <Cards />
      </div>
    </div>
  );
}
