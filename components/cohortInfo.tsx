import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import infoIcon from "@/public/Info.svg";
import arrowRight from "@/public/Arrow Right.svg";
import Image from "next/image";
export default function CohortInfo() {
  return (
    <div
      className="flex items-center justify-center bg-[#00000066] h-[692px] cohort-main px-[120px] cohort-info"
      id="cohortInfo"
    >
      {/* Centering container */}
      <div className="flex w-[1488px] min-h-[452px] gap-[25px] cohort-container">
        {/* Left Box */}
        <div className="w-[724px] flex flex-col justify-center cohort-2-main">
          <h2 className="text-[36px] font-bold text-white cohort-text1">
            Join Cohort 2 of PDH School
          </h2>
          <p className="mt-2 text-white text-[22px] cohort-text2">
            Don’t miss out on your chance to join a community of driven
            entrepreneurs and get hands-on guidance to launch your startup!
          </p>
        </div>

        {/* Right Box */}
        <div className="w-[668px] min-h-[452px] flex flex-col justify-between bg-[#282F36]">
          <div className="w-full h-auto flex flex-col gap-8 p-8">
            <div className="text-[22px] font-medium text-white">
              Cohort 2 Starts on <br /> <span>Jan 5</span>
            </div>
            <div className="text-lg text-white">
              Cost <br />
              <div className="font-[600]">
                INR 25,000{" "}
                <span className="line-through ml-2 font-[400] text-[14px]">
                  INR 75,000
                </span>
              </div>
            </div>
            <div className="text-white w-[440px] cohort-accordion">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="flex justify-between items-center text-left">
                    <div className="flex items-center">
                      <Image src={infoIcon} alt="Info" className="h-10" />
                      <span className="ml-2 text-[18px]">
                        Price increase from 20 Nov 11:59 PM
                      </span>
                    </div>
                    {/* Replace with your arrow icon */}
                  </AccordionTrigger>
                  <AccordionContent className="text-left accordion-content flex justify-between text-xl font-bold">
                    <span>Until Nov 20</span> <span>INR 25000</span>
                  </AccordionContent>
                  <AccordionContent className="text-left accordion-content flex justify-between text-xl font-bold">
                    <span>Until Nov 30</span> <span>INR 30000</span>
                  </AccordionContent>
                  <AccordionContent className="text-left accordion-content flex justify-between text-xl font-bold">
                    <span>Until Dec 15</span> <span>INR 50000</span>
                  </AccordionContent>
                  <AccordionContent className="text-left accordion-content flex justify-between text-xl font-bold">
                    <span>Until Dec 30</span> <span>INR 75000 </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="w-full h-auto p-8 flex flex-col gap-4 bg-[#00000033]">
            <a
              href="https://pdhschool.notion.site/13de8b9ff79880cb8019e0da17497c4c?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white w-full py-4 px-4 text-black text-[19px] font-bold hover:bg-gray-200 flex justify-between items-center">
                Be an Early Bird – Apply Now
                <Image src={arrowRight} alt="Right" />
              </button>
            </a>
            <div className="text-white text-xs">
              Only 30 seats available – don’t miss out!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
