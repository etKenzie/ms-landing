import { Card, CardContent } from "@/components/ui/card"
import { Utensils, Store, Truck } from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Cafés",
      description: "Ensure consistent service & food quality."
    },
    {
      icon: Store,
      title: "Retail Stores",
      description: "Monitor staff behavior & store cleanliness."
    },
    {
      icon: Truck,
      title: "Food Trucks & Pop-Ups",
      description: "Maintain hygiene & efficiency."
    }
  ]

  return (
    <section className="py-20 bg-custom-light">
      <div className="container mx-auto">
        <h2 className="text-subtitle font-playfair">How we serve YOU</h2>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <industry.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted-foreground font-light">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}