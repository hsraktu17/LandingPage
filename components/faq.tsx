import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col items-center text-white p-8 md:p-16 lg:p-[120px]">
      <div className="text-[28px] md:text-[32px] lg:text-[36px] font-[600] mb-6 text-center">
        Frequently Asked Questions
      </div>
      <div className="w-screen max-w-7xl mt-8 text-[32px]">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It comes with default styles that match the other components'
              aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent className="text-left">
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
