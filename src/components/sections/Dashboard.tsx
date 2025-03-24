import { Button } from "@/components/ui/button"
import { BarChart, Brain, Bell } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  const features = [
    {
      icon: BarChart,
      title: "Real-time reports & branch benchmarking"
    },
    {
      icon: Brain,
      title: "AI-driven recommendations"
    },
    {
      icon: Bell,
      title: "Instant alerts for urgent issues"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Advanced Analytics Dashboard</h2>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>
            <Button className="mt-8">
              Explore Dashboard Features →
            </Button>
          </div>
          <div className="relative">
            <Image 
              src="/dashboard-preview.png" 
              alt="Dashboard Preview" 
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}