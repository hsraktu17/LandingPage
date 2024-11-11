import img from "@/public/Pexels Photo by cottonbro studio.png";
import pdhschool1 from "@/public/Group 4.png";
import twitter from "@/public/x.svg";
import linkedin from "@/public/linkedin.svg";
import facebook from "@/public/facebook.svg";
import Image from "next/image";

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
          <button className="bg-white py-[12px] md:py-[16px] px-[20px] md:px-[24px] text-black">
            Apply Now
          </button>
          <button className="bg-transparent border-t border-b border-white text-white hover:bg-white hover:text-black transition font-semibold py-2 px-4 ">
            Contact Us
          </button>
        </div>
      </div>
      <div className="mt-20 footer-bottom w-full px-4 sm:px-10 lg:px-64">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4 space-y-4 lg:space-y-0">
          <Image src={pdhschool1} alt="Logo" className="w-auto h-12 sm:h-16" />

          <div className="flex space-x-4">
            <Image src={facebook} alt="facebook" className="h-12 w-12" />
            <Image src={twitter} alt="twitter" className="h-12 w-12" />
            <Image src={linkedin} alt="linkedin" className="h-12 w-12" />
          </div>
        </div>

        {/* Privacy Policy and Terms of Use */}
        <div className="flex flex-col lg:flex-row justify-center text-white lg:justify-end gap-4 mt-1 text-center lg:text-left">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
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
