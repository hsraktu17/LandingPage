import img from "@/public/Pexels Photo by cottonbro studio.png";
import pdhschool1 from "@/public/Group 19.svg";
import linkedin from "@/public/linkedin.svg";
import Image from "next/image";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative w-full h-[500px]  footer-main">
      <Image src={img} alt="footer" className="w-full h-full object-cover" />

      {/* Overlay content */}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-[36px] font-bold mb-4">Stay Connected</h2>
        <p className="text-[20px] font-medium mb-6 footer-text">
          Join our community for the latest updates and insights.
        </p>
        <div className="flex space-x-4 mb-6">
          <a
            href="https://pdhschool.notion.site/13de8b9ff79880cb8019e0da17497c4c?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white py-[12px] md:py-[16px] px-[20px] md:px-[24px] text-black">
              Apply Now
            </button>
          </a>
          <button
            className="bg-transparent border-t border-b border-white text-white hover:bg-white hover:text-black transition font-semibold py-2 px-4"
            onClick={() =>
              (window.location.href = "mailto:team@projejectdark.horse")
            }
          >
            Contact Us
          </button>
        </div>
      </div>
      <div className="mt-20 footer-bottom w-full px-4 sm:px-10">
        <div className="flex justify-between items-center mb-4 space-y-4 lg:space-y-0 footer-section">
          <Image src={pdhschool1} alt="Logo" className="w-auto h-12 sm:h-16" />

          <div className="flex space-x-4 items-center footer-icons">
          <a
              href="https://www.youtube.com/@PDHSchool"
              target="_blank"
            >
              {" "}
              <FaYoutube size={34} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/pdhschool/profilecard/?igsh=MW93Y21udXE2eW9vdw=="
              target="_blank"
            >
              {" "}
              <FaInstagram size={30} className="text-white" />
            </a>
            {/* <Image src={twitter} alt="twitter" className="h-12 w-12" /> */}
            <a
              href="https://www.linkedin.com/company/project-dark-horse-school/"
              target="_blank"
            >
              <Image src={linkedin} alt="linkedin" className="" />
            </a>
          </div>
        </div>

        {/* Privacy Policy and Terms of Use */}
        <div className="flex flex-col lg:flex-row justify-center text-white lg:justify-end gap-4 mt-1 text-center lg:text-left footer-section-2">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms of Use</p>
        </div>

        {/* Footer Text */}
        <div className="pb-10">
          {/* Horizontal Line */}

          <div className="border-t border-l-indigo-100 opacity-30 mt-20 footer-bottom-1"></div>

          <p className="text-white text-center mt-4">
            &copy; 2024 PDH School. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
