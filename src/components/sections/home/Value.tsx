"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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
      className="text-6xl font-black text-muted-foreground mx-2 tracking-wider leading-snug"
    >
      {word}
    </motion.span>
  );
}

export default function ValueProps() {
  const text =
    "Gain AI-powered, real-time insights to enhance service quality, optimize operations, and monitor multiple business channels effortlessly.";

  // Group words in pairs
  const words = text.split(" ");

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
