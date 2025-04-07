"use client";
import { motion } from "framer-motion";
import { Check, Rocket } from "lucide-react";

const projects = [
  {
    title: "Digitizing 30,000 Unilever General Trade stores",
    description: "across Java & Bali in collaboration with Mitsui and Co. Japan",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Partnering with top brands",
    description: "to optimize service quality:",
    icon: <Check className="w-6 h-6" />
  }
];

const brands = [
  "Janji Jiwa – Enhancing café experiences",
  "Haus & Hangry - Enhancing both their physical stores and Ebike section",
  "Sekar Bumi & Bolesca – Improving Freezer service standards & operations execution"
];

export default function Impact() {
  return (
    <section className="py-20 bg-gray-300">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold mb-12 text-center"
          >
            Our Impact
          </motion.h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="text-[#E32832]">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="ml-10 space-y-4"
            >
              {brands.map((brand, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#E32832]" />
                  <span className="text-gray-600">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
  