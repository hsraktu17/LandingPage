import { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import pdhschool from "@/public/Group 3.png";
import pdhschool1 from "@/public/Group 4.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-[38px] px-[120px] flex items-center justify-between bg-transparent  border-gray-600">
      <div className="flex items-center space-x-80">
        <Image src={pdhschool} alt="logo" className="w-auto h-10" />
        <Image src={pdhschool1} alt="" className="w-auto h-10" />
      </div>
      <div
        className="lg:hidden text-white text-2xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-center absolute lg:relative top-full left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent p-6 lg:p-0 z-50`}
      >
        <p className="text-white cursor-pointer hover:text-gray-300">
          Overview
        </p>
        <p className="text-white cursor-pointer hover:text-gray-300">
          Instructors & Mentors
        </p>
        <p className="text-white cursor-pointer hover:text-gray-300">
          Curriculum
        </p>
        <p className="text-white cursor-pointer hover:text-gray-300">
          Admission Process
        </p>
        <p className="text-white cursor-pointer hover:text-gray-300">FAQs</p>
        <button className="ml-4 px-6 py-2 border-t border-b border-white text-white hover:bg-white hover:text-black transition w-full lg:w-auto mt-4 lg:mt-0">
          Register Now
        </button>
      </div>
    </div>
  );
}
