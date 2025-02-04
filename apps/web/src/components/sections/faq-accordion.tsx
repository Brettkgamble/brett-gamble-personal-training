import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion";
import { Badge } from "@workspace/ui/components/badge";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";

import type { PagebuilderType } from "@/types";

import { RichText } from "../richtext";

type FaqAccordionProps = PagebuilderType<"faqAccordion">;

export function FaqAccordion({
  eyebrow,
  title,
  subtitle,
  faqs,
}: FaqAccordionProps) {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:text-center">
            <Badge variant="secondary">{eyebrow}</Badge>
            <h2 className="text-3xl font-semibold md:text-5xl capitalize">
              {title}
            </h2>
            <h3 className="text-lg font-normal text-[#374151]">{subtitle}</h3>
          </div>
        </div>
        <div className="my-16 max-w-xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="3"
          >
            {faqs?.map((faq, index) => (
              <AccordionItem
                value={faq?._id}
                key={`AccordionItem-${faq?._id}-${index}`}
                className="py-2"
              >
                <AccordionTrigger className="py-2 text-[15px] leading-6 hover:no-underline group">
                  {faq?.title}
                  {/* <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-45" /> */}
                </AccordionTrigger>
                <AccordionContent className="pb-2 text-muted-foreground">
                  <RichText
                    richText={faq?.richText ?? []}
                    className="text-sm md:text-base"
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="w-full py-6">
            <p className="mb-1 text-xs">More questions? </p>
            <Link href="/contact" className="flex items-center gap-2">
              <p className="text-[15px] font-[500] leading-6">
                Get in touch with sales
              </p>
              <span className="rounded-full border p-1">
                <ArrowUpRight size={16} className="text-[#374151]" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
