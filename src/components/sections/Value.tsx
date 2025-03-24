import { CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ValueProps() {
  const benefits = [
    {
      title: "Actionable Insights",
      description: "Identify service gaps before they hurt your brand."
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Restaurants, retail, food trucks, pop-ups, and more."
    },
    {
      title: "Real-Time Analytics",
      description: "Make faster, smarter decisions with AI-powered reports."
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MisteriShopper.id?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
