import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Don't Let Inconsistent Service Damage Your Brand!
        </h2>
        <p className="text-xl mb-8">
          Schedule a free demo and receive a complimentary branch audit report.
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="secondary" size="lg">
            Book a Free Consultation →
          </Button>
          <Button size="lg" className="border border-white text-white">
            Chat with Our Expert
          </Button>
        </div>
      </div>
    </section>
  )
}