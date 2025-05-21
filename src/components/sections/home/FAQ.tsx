"use client";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

// interface FAQItem {
//   question: string;
//   answer: string | string[];
// }

// const faqData: FAQItem[] = [
//   {
//     question: "What is MisteriShopper.id?",
//     answer: "An AI-powered evaluation service for retail and F&B businesses to ensure service quality and customer satisfaction."
//   },
//   {
//     question: "Why do businesses need it?",
//     answer: "Helps identify service issues, improve operational compliance, and enhance customer experience with AI-based data."
//   },
//   {
//     question: "How does Mystery Shopper work?",
//     answer: "Evaluators act as customers and assess service, cleanliness, and operational compliance, generating AI-based reports."
//   },
//   {
//     question: "How does Rider Check help businesses?",
//     answer: "Evaluates efficiency and service standards of mobile businesses using geo-tracking and operational audits."
//   },
//   {
//     question: "What are the benefits of freezer and storage audits?",
//     answer: "Ensures compliance with food safety standards through real-time temperature sensors to prevent stock damage."
//   },
//   {
//     question: "What technology is used?",
//     answer: [
//       "AI Mystery Shopper: Data-driven analysis",
//       "IoT Monitoring: Equipment temperature tracking",
//       "Geo-Tracking: Performance evaluation for mobile businesses",
//       "Analytics Dashboard: Real-time reports"
//     ]
//   },
//   {
//     question: "How much does it cost?",
//     answer: "Flexible pay-per-visit pricing model tailored to business needs."
//   }
// ];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language].faq;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-custom-light">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12">
          {t.title}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {t.items.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between cursor-pointer transition-colors"
              >
                <span className="font-semibold text-lg text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4">
                      {Array.isArray(faq.answer) ? (
                        <ul className="list-disc list-inside space-y-2">
                          {faq.answer.map((item, i) => (
                            <li key={i} className="text-gray-600">
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{faq.answer}</p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 