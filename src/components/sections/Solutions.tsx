import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingBag, ClipboardCheck, Wrench } from "lucide-react"

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
      cta: "Audit Your Mobile Business →"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        
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
                <Button variant="outline" className="w-full">
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