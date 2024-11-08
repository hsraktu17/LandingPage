import Cards from "./card";

export default function Hero() {
  return (
    <div className="text-white px-6 md:px-[60px] lg:px-[120px] py-[30px] md:py-[60px] space-y-[32px] md:space-y-[64px]">
      <div className="space-y-[16px] md:space-y-[32px]">
        <div className="font-semibold text-[28px] md:text-[36px] lg:text-[48px] w-full md:w-[800px] lg:w-[1150px]">
          Your 6-week launch pad to startup success
        </div>
        <div className="text-[16px] md:text-[20px] lg:text-[22px] font-normal">
          Build, Validate, and Launch Your Dream Startup with India’s Top
          Mentors
        </div>
      </div>
      <div>
        <button className="bg-white py-[12px] md:py-[16px] px-[20px] md:px-[24px] text-black">
          Apply Now
        </button>
      </div>
      <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
        <Cards />
      </div>
    </div>
  );
}
