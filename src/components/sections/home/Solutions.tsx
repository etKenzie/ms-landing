import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, } from "@/components/ui/card"
import { ShoppingBag, ClipboardCheck, Wrench, Truck, Thermometer, LayoutGrid } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      title: "Mystery Shopping & Retail Audits",
      icon: ShoppingBag,
      features: [
        "Test service speed, SOP compliance, and product quality.",
        "Prevent complaints with proactive risk detection."
      ],
      cta: "See Sample Report →"
    },
    {
      title: "Rider Check – Food Truck & Pop-Up Stores",
      icon: Truck,
      features: [
        "Ensure cleanliness, safety, and compliance with operational standards.",
        "Evaluate service speed and order accuracy.",
        "Analyze strategic locations and sales performance based on data."
      ],
      cta: "Audit Your Mobile Business →"
    },
    {
      title: "Freezer & Product Storage Audit",
      icon: Thermometer,
      features: [
        "Automated temperature monitoring with IoT sensors.",
        "Receive alerts for products nearing expiration.",
        "Ensure compliance with food safety standards (BPOM & HACCP)."
      ],
      cta: "Monitor Your Storage →"
    },
    
    {
      title: "Product Display & Planogram Compliance Audit",
      icon: LayoutGrid,
      features: [
        "AI-based image recognition to check product display and shelf organization.",
        "Out-of-stock alerts and validation of pricing/promotions.",
        "Optimize product placement to boost sales."
      ],
      cta: "Optimize Your Store Layout →"
    },
    {
      title: "Real-Time Customer Experience Surveys",
      icon: ClipboardCheck,
      features: [
        "Instant feedback via digital surveys at your locations.",
        "Track satisfaction trends and improve weak points."
      ],
      cta: "Try a Free Survey →"
    },
    {
      title: "Proactive Branch Maintenance",
      icon: Wrench,
      features: [
        "Routine monitoring: Lighting, AC, fixtures, and operational equipment.",
        "On-site minor repairs by certified technicians.", "Specialist escalation: Major issues handled within 24 hours with live tracking."
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
            <Card key={index} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <solution.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full hover:bg-custom-bg hover:text-white">
                  {solution.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 