"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, ClipboardCheck, Wrench, Truck, Thermometer, LayoutGrid } from "lucide-react"

export default function Solutions() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const solutions = [
    {
      title: "Mystery Shopping & Retail Audits",
      icon: ShoppingBag,
      features: [
        "Simulate real customer interactions to assess service speed and staff behavior.",
        "Monitor SOP compliance, product presentation, and overall customer journey.",
        "Identify operational gaps before they escalate into complaints or negative reviews."
      ],
      cta: "See Sample Report →"
    },
    {
      title: "Rider Check – Food Truck & Pop-Up Stores",
      icon: Truck,
      features: [
        "Verify cleanliness, hygiene practices, and safety protocols across mobile units.",
        "Assess order accuracy, service timing, and customer interaction quality.",
        "Track high-performing locations and analyze real-time sales and foot traffic data."
      ],
      cta: "Audit Your Mobile Business →"
    },
    {
      title: "Freezer & Product Storage Audit",
      icon: Thermometer,
      features: [
        "24/7 temperature monitoring with smart IoT sensors to prevent spoilage.",
        "Receive instant alerts for temperature anomalies and product expiration risks.",
        "Ensure regulatory compliance with BPOM, HACCP, and internal food safety protocols."
      ],
      cta: "Monitor Your Storage →"
    },
    {
      title: "Product Display & Planogram Compliance Audit",
      icon: LayoutGrid,
      features: [
        "Leverage AI-driven image recognition to audit shelf layout and product visibility.",
        "Detect stockouts, pricing errors, and promotional misplacements in real time.",
        "Improve planogram compliance and optimize product placement to boost sales."
      ],
      cta: "Optimize Your Store Layout →"
    },
    {
      title: "Real-Time Customer Experience Surveys",
      icon: ClipboardCheck,
      features: [
        "Collect immediate customer feedback via QR codes, tablets, or kiosks.",
        "Analyze satisfaction trends by branch, time, and staff performance.",
        "Take rapid action on negative experiences and identify recurring service issues."
      ],
      cta: "Try a Free Survey →"
    },
    {
      title: "Proactive Branch Maintenance",
      icon: Wrench,
      features: [
        "Regular inspections covering lighting, air conditioning, signage, and more.",
        "On-site minor repairs performed promptly by certified technicians.",
        "Escalate major issues to specialist teams with guaranteed 24-hour resolution and live tracking."
      ],
      cta: "Improve Your Branch Maintenance →"
    },
  ]

  return (
    <section className="py-20 bg-custom-light">
      <div className="container mx-auto">
        <h2 className="text-subtitle font-playfair">Our Solutions</h2>
        
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