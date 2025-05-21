"use client";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedWordProps {
  word: string;
  index: number;
  totalWords: number;
  scrollYProgress: MotionValue<number>;
}

function AnimatedWord({
  word,
  index,
  totalWords,
  scrollYProgress,
}: AnimatedWordProps) {
  const step = 0.8 / totalWords; // Faster transition by reducing step size

  const opacity = useTransform(
    scrollYProgress,
    [index * step, (index + 1) * step],
    [0, 1]
  );
  const y = useTransform(
    scrollYProgress,
    [index * step, (index + 1) * step],
    [20, 0]
  );

  return (
    <motion.span
      style={{ opacity, y }}
      className="text-5xl md:text-6xl lg:text-7xl font-black text-muted-foreground mx-2 tracking-wider leading-snug"
    >
      {word}
    </motion.span>
  );
}

export default function ValueProps() {
  const { language } = useLanguage();
  const t = translations[language].value;

  // Group words in pairs
  const words = t.text.split(" ");

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 50%"], // 🔥 Words appear around 3/4 down the page
  });

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-custom-light px-4 md:px-6 lg:px-8 gap-4 md:gap-6 lg:gap-8">
      <div
        ref={containerRef}
        className="container mx-auto flex flex-col md:flex-row justify-center"
      >
        <div className="max-w-[700px] text-center">
          <div className="flex flex-wrap justify-center">
            {words.map((word, index) => (
              <AnimatedWord
                key={index}
                word={word}
                index={index}
                totalWords={words.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
