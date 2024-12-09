"use client"; // Add this line at the top

import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import pdhschool from "@/public/Group 3.png";
import { Link } from "react-scroll";
// import pdhschool1 from "@/public/Group 4.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-10 px-6 sm:px-10 lg:px-[120px] flex items-center justify-between bg-transparent border-gray-600 relative">
      <div className="flex items-center space-x-4 sm:space-x-10 lg:space-x-80">
       <a href="/">
       <Image src={pdhschool} alt="logo" className="w-auto h-8 sm:h-10" />
       </a>
        {/* <Image
          src={pdhschool1}
          alt=""
          className="w-auto h-8 sm:h-10 hidden sm:block"
        /> */}
      </div>
      <div
        className="lg:hidden text-white text-2xl cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-center absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-6 lg:p-0 z-40 transition-all duration-300`}
      >
        <Link to="" spy={true} smooth={true} offset={50} duration={500}>
          {" "}
          <p className="text-white cursor-pointer hover:text-gray-300">
            Overview
          </p>
        </Link>
        <Link to="mentors" spy={true} smooth={true} offset={50} duration={500}>
          <p className="text-white cursor-pointer hover:text-gray-300">
            Instructors & Mentors
          </p>
        </Link>
        <Link
          to="curriculum"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p className="text-white cursor-pointer hover:text-gray-300">
            Curriculum
          </p>
        </Link>
        <Link
          to="cohortInfo"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <p className="text-white cursor-pointer hover:text-gray-300">
            Admission Process
          </p>
        </Link>
        <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
          <p className="text-white cursor-pointer hover:text-gray-300">FAQs</p>{" "}
        </Link>
      
        <a href="/blog" >
          <p className="text-white cursor-pointer hover:text-gray-300">
           Blog
          </p>
        </a>
        <a
          href="https://pdhschool.notion.site/13de8b9ff79880cb8019e0da17497c4c?pvs=105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="ml-0 lg:ml-4 px-6 py-2 border-t border-b border-white text-white hover:bg-white hover:text-black transition w-full lg:w-auto mt-4 lg:mt-0 border-button">
            Register Now
          </button>
        </a>
      </div>
    </div>
  );
}
