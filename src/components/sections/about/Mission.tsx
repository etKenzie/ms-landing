"use client";
import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className=" p-8 rounded-none"
          >
            <h2 className="font-playfair text-4xl font-bold mb-12 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              To empower businesses with actionable insights that drive customer experience excellence and operational efficiency.
            </p>
            <p className="text-lg text-gray-800">
              We are committed to helping our clients achieve their business goals through comprehensive mystery shopping and retail audit solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
  