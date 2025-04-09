"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
// import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Dalam usaha peningkatan pelayanan terhadap konsumen haus, kami berusaha mendapatkan gambaran terhadap kualitas pelayanan yang diberikan oleh crew haus!. untuk itu kami pilih program Mystery Shopper dari Toko Pandai.",
      author: "Fauzan Bermana",
      position: "Customer Experience Manager",
      company: "Haus",
    },
    {
      quote:
        "The level of detail in their mystery shopping reports is impressive. We've been able to identify and fix several operational issues that we weren't even aware of.",
      author: "Michael Chen",
      position: "Operations Director",
      company: "Hospitality Group",
    },
    {
      quote:
        "Working with MisteriShopper.id has been a game-changer for our business. Their insights have helped us improve our customer satisfaction scores by 30% in just six months.",
      author: "Lisa Rodriguez",
      position: "Marketing Director",
      company: "Fashion Retailer",
    },
  ];

  return (
    <section className="py-20 bg-custom-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white font-playfair"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" p-8 rounded-lg border-2 border-white  transition-colors"
            >
              <Quote className="w-8 h-8 text-white mb-4" />
              <p className="text-lg text-white mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                {/* <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div> */}
                <div className="w-12 h-12 rounded-full bg-[#171716] flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-200">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-gray-200">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
