"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const banks = [
  "Citibank",
  "HSBC",
  "DBS",
  "Standard Chartered Bank",
  "BCA, BRI, and more"
];

export default function Expertise() {
  return (
    <section className="py-20 bg-gray-400">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold mb-12 text-center"
          >
            Our Expertise
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-12 leading-relaxed"
          >
            Backed by Valdo Inc.&apos;s two decades of experience in customer experience research and service audits, we bring a proven track record of delivering high-quality, data-driven evaluations. Our expertise extends to working with leading financial institutions, including:
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {banks.map((bank, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#E32832]" />
                <span className="text-lg text-gray-700">{bank}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  