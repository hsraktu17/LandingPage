import img from "@/public/Pexels Photo by cottonbro studio.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative w-full h-[500px]">
      <Image src={img} alt={"footer"} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h2 className="text-[36px] font-bold mb-4">Stay Connected</h2>
        <p className="text-[20px] font-medium mb-6">
          Join our community for the latest updates and insights.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white py-[12px] md:py-[16px] px-[20px] md:px-[24px] text-black">
            Apply Now
          </button>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
