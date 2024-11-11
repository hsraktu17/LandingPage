import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center text-white p-6 sm:p-8 md:p-16 lg:p-[120px] w-full">
      <div className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold mb-6 text-center">
        Frequently Asked Questions
      </div>
      <div className="w-full sm:w-11/12 md:w-screen max-w-7xl mt-8 text-[16px] sm:text-[18px] md:text-[20px]">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Frequently Asked Questions 1
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Frequently Asked Questions 2
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It comes with default styles that match the other components
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Frequently Asked Questions 3
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It@apos; s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
