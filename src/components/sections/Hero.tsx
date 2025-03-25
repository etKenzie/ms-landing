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
          <h1 className="font-playfair text-6xl font-bold leading-tight mb-6 text-white leading-none">
            Experience Audits <br />
            <span className="font-playfair italic bg-gradient-to-r from-[#E32832] to-[#AE0C00] text-transparent bg-clip-text pb-1" >
              Redefined
            </span>
          </h1>
          <p className="text-xl text-white mb-8 font-light">
            See What Your Customers See. Feel What They Feel.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="border border-white hover:bg-white/90 hover:text-black">
              Get a Free Demo →
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-black/90 hover:text-white">
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 