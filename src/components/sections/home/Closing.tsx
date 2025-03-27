import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-custom-light text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-subtitle font-playfair mb-4">
          Do not Let Inconsistent Service Damage Your Brand!
        </h2>
        <p className="text-xl mb-8 font-light">
          Schedule a free demo and receive a complimentary branch audit report.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="button-black" size="lg">
            Book a Free Consultation →
          </Button>
          <Button size="lg" className="button-white">
            Chat with Our Expert
          </Button>
        </div>
      </div>
    </section>
  )
}