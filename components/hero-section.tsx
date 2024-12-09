"use client"
import Cards from "./card";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div
      className="text-white px-4 sm:px-6 md:px-[60px] lg:px-[120px] py-6 md:py-10 lg:py-[60px] space-y-6 md:space-y-8 lg:space-y-[64px]"
      id="hero"
    >
      <div className="space-y-4 md:space-y-6 lg:space-y-[32px] text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.8 }}
          className="font-semibold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] max-w-full md:max-w-[800px] lg:max-w-[1150px] mx-auto md:mx-0"
        >
          Your 6-week launch pad to startup success
        </motion.div>
        <div
          className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-normal max-w-full md:max-w-[700px] mx-auto md:mx-0"
        >
           {Array.from("Build, Validate, and Launch Your Dream Startup with India’s Top Mentors").map((char, index) => (
            <motion.span
              key={index}
              initial={{ x: Math.random() * 100 - 50, opacity: 0 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: index * 0.03,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </div>
      <div className="text-center flex flex-wrap md:text-left hero-buttons">
        <a
          href="https://pdhschool.notion.site/13de8b9ff79880cb8019e0da17497c4c?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white py-3 px-5 text-black w-full sm:w-56 font-medium hover:bg-gray-200 transition button-hero-apply">
            Apply Now
          </button>
        </a>
        <a
          href="https://pdhschool.notion.site/School-of-Project-Dark-Horse-13ee8b9ff7988058bf65c189d5bd114d"
          target="_blank"button-hero-apply
        >
          <button className=" button ml-20   border-t border-b border-white text-white hover:bg-white hover:text-black font-medium transition py-3 px-7 text-center download-carriculam">
            Link To Detailed Curriculum
          </button>
        </a>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8 justify-center md:justify-start">
        <Cards />
      </div>
    </div>
  );
}
