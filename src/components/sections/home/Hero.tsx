"use client";
// import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
  "/carousel/5.jpg",
  "/carousel/6.jpg",
  "/carousel/7.jpg",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language].hero;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  // Transform scroll progress into scale and skew values
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  // const skewY = useTransform(scrollYProgress, [0, 1], [10, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["3rem", "3rem"]);
  // const rotate = useTransform(scrollYProgress, [0, 1], ["-10deg", "0deg"])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every second

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex flex-col bg-custom-light">
      {/* Logo Text */}
      <div className="relative z-20 py-6">
        <div className="container mx-auto">
          <div className="text-center">
            <span className="text-2xl">
              Mistery<span className="font-bold">Shopper</span>
            </span>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="relative z-20 py-40 my-40">
        <div className="container mx-auto">
          <div className="mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t.title} <br />
              <span className="font-playfair italic bg-gradient-to-r from-[#E32832] to-[#AE0C00] text-transparent bg-clip-text pb-1">
                {t.subtitle}
              </span>
            </h1>
            {/* <p className="text-xl text-gray-600 mb-8 font-light">
              {t.description}
            </p> */}
            {/* <div className="flex gap-4">
              <Button size="lg" className="button-white">
                Get a Free Demo →
              </Button>
              <Button size="lg" className="button-black">
                Learn How It Works
              </Button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div
        ref={containerRef}
        className="hidden md:block container mx-auto px-4"
      >
        <motion.div
          style={{ scale, borderRadius }}
          className="relative h-[80vh] overflow-hidden mx-20"
        >
          <Image
            fill
            className="object-cover"
            priority
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </motion.div>
      </div>
    </section>
  );
}
