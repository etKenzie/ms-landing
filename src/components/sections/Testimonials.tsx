import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote: "MisteriShopper.id helped us improve service speed by 30% and boost customer satisfaction!",
      author: "[Brand Name], Restaurant Chain"
    },
    {
      quote: "Their mystery shoppers gave us insights we never knew we needed!",
      author: "[Brand Name], Retail Store"
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <p className="text-muted-foreground">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}