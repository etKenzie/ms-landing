"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { motion } from "framer-motion";
import { ClipboardCheck, LayoutGrid, ShoppingBag, Thermometer, Truck, Wrench } from "lucide-react";
import { useState } from "react";

export default function Solutions() {
  const { language } = useLanguage();
  const t = translations[language].solutions;

  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>(
    // Initialize all cards as expanded
    Array.from({ length: 6 }, (_, i) => i).reduce((acc, index) => {
      acc[index] = true;
      return acc;
    }, {} as Record<number, boolean>)
  );

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const solutions = [
    {
      title: t.mysteryShopping.title,
      icon: ShoppingBag,
      features: t.mysteryShopping.features,
      cta: t.mysteryShopping.cta
    },
    {
      title: t.riderCheck.title,
      icon: Truck,
      features: t.riderCheck.features,
      cta: t.riderCheck.cta
    },
    {
      title: t.freezer.title,
      icon: Thermometer,
      features: t.freezer.features,
      cta: t.freezer.cta
    },
    {
      title: t.planogram.title,
      icon: LayoutGrid,
      features: t.planogram.features,
      cta: t.planogram.cta
    },
    {
      title: t.surveys.title,
      icon: ClipboardCheck,
      features: t.surveys.features,
      cta: t.surveys.cta
    },
    {
      title: t.maintenance.title,
      icon: Wrench,
      features: t.maintenance.features,
      cta: t.maintenance.cta
    },
  ]

  return (
    <section className="py-20 bg-custom-light">
      <div className="container mx-auto">
        <h2 className="text-subtitle font-playfair">{t.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              onClick={() => toggleCard(index)}
              className={`cursor-pointer transition-all duration-300 ${
                expandedCards[index] 
                  ? "bg-[#171716] text-white" 
                  : "bg-white text-[#171716] hover:bg-neutral-300"
              }`}
            >
              <Card className="border-0 h-full rounded-none">
                <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                  <solution.icon className={`h-12 w-12 mb-4 transition-colors duration-300 ${
                    expandedCards[index] ? "text-white" : "text-[#171716]"
                  }`} />
                  <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                    expandedCards[index] ? "text-white" : "text-[#171716]"
                  }`}>{solution.title}</h3>
                  
                  {expandedCards[index] && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 w-full text-left text-white"
                    >
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span>✔</span>
                          {feature}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 