import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.jpg" 
          alt="Background" 
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Uncover Hidden Gaps & Deliver Flawless Customer Experiences
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Mystery shopping, real-time surveys, and mobile audits to ensure brand consistency, 
            boost loyalty, and drive revenue.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Get a Free Demo →
            </Button>
            <Button variant="outline" size="lg">
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 