"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-32 bg-custom-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-5xl font-bold mb-8"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
            MisteriShopper.id is Indonesia premier Mystery Shopping & Experience Assurance service, dedicated to helping businesses elevate customer experience, ensure brand consistency, and enhance operational excellence.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 leading-relaxed mt-6"
          >
            We leverage advanced technology, AI-driven insights, and expert evaluations to optimize retail and service performance.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
