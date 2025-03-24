import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          fill
          className="object-cover opacity-100"
          priority
          src="/hero-bg.jpg" 
          alt="Background" 
  
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight mb-6 text-white">
          Experience Audits Redefined
          </h1>
          <p className="text-xl text-foreground mb-8 text-white">
          See What Your Customers See. Feel What They Feel.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="border border-white text-white">
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