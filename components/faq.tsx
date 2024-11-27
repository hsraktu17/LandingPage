import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center text-white p-6 sm:p-8 md:p-16 lg:p-[120px] w-full" id="faq">
      <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold mb-6 text-center">
        Frequently Asked Questions
      </div>
      <div className="w-full sm:w-11/12 md:w-screen max-w-7xl mt-8 text-[16px] sm:text-[18px] md:text-[20px]">
        <Accordion type="single" collapsible className="w-[1080px] mx-auto accordian-container">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Will I get a discount?
            </AccordionTrigger>
            <AccordionContent className="text-left">
            Please contact us on email
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
            Will I have a product to be launched ready by the end of the startup?
            </AccordionTrigger>
            <AccordionContent className="text-left">
            Yes, if you are ambitious, hard-working and follow our cohort, you will have it. 
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
            What happens if I give in all my efforts and I don’t get my startup built?
            </AccordionTrigger>
            <AccordionContent className="text-left">
            You’ll get 90% of your money back by the end of one year from the start of your cohort.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
