'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but I provide a superbill after each session that you can submit to your insurance company for possible out-of-network reimbursement."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. Appointments canceled with less than 24-hour notice will be charged the full session fee."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-bold text-slate-900 p-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}