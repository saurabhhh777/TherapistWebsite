'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but I provide a superbill after each session that you can submit to your insurance company for possible out-of-network reimbursement.",
      icon: "💳"
    },
    {
      question: "Are online sessions available?",
      answer: "Yes, I offer virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. In-person sessions are available on Tuesdays and Thursdays at my Maplewood Drive office.",
      icon: "💻"
    },
    {
      question: "What is your cancellation policy?",
      answer: "I require 24-hour notice for cancellations. Appointments canceled with less than 24-hour notice will be charged the full session fee. This policy helps ensure availability for all clients.",
      icon: "⏱️"
    },
    {
      question: "How long are therapy sessions?",
      answer: "Individual sessions are 50 minutes, and couples sessions are 60 minutes. The initial consultation is typically 15-20 minutes to ensure we're a good fit.",
      icon: "⏳"
    },
    {
      question: "What therapeutic approaches do you use?",
      answer: "I blend evidence-based approaches including Cognitive Behavioral Therapy (CBT), mindfulness techniques, and trauma-informed care. My approach is tailored to each client's unique needs and goals.",
      icon: "🧠"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Common questions about therapy, scheduling, and my approach
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="flex items-start text-left p-6 hover:no-underline group">
                  <div className="mr-4 text-2xl">{faq.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <svg 
                    className="w-5 h-5 text-teal-500 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 mt-1"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-slate-600 bg-slate-50">
                  <div className="pl-10 border-l-2 border-teal-200">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          {/* Additional CTA */}
          <div className="mt-16 bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
              <p className="text-slate-600 mb-8">
                I'm here to help. Reach out and I'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="py-5 px-8 bg-teal-600 hover:bg-teal-700 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Button>
                <Button className="py-5 px-8 bg-white text-teal-600 border border-teal-600 hover:bg-teal-50 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-current text-white w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}