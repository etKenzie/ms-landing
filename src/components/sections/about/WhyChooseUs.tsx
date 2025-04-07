"use client";
import { motion } from "framer-motion";
import { Shield, Target, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Proven Track Record",
    description: "Years of experience working with leading brands across various industries"
  },
  {
    icon: Target,
    title: "Comprehensive Solutions",
    description: "End-to-end mystery shopping and retail audit services tailored to your needs"
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick and efficient service delivery with actionable insights"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl font-bold mb-12 text-center"
        >
          Why Choose MisteryShopper.id?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-300 p-8 rounded-none hover:bg-white transition-colors"
            >
              <div className="flex flex-col items-center text-center">
                <reason.icon className="w-12 h-12 text-[#171716] mb-4" />
                <h3 className="text-xl font-bold text-[#171716] mb-2">{reason.title}</h3>
                <p className="text-gray-800">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  