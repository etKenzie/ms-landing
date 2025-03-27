import { Button } from "@/components/ui/button";
import { BarChart, Brain, Bell } from "lucide-react";
// import Image from "next/image";

export default function Dashboard() {
  const features = [
    {
      icon: BarChart,
      title: "Real-time reports & branch benchmarking",
    },
    {
      icon: Brain,
      title: "AI-driven recommendations",
    },
    {
      icon: Bell,
      title: "Instant alerts for urgent issues",
    },
  ];

  return (
    <section className="py-20 bg-custom-light text-white flex justify-center">
      <div className="container mx-auto flex justify-center">
          {/* Inner Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center bg-custom-dark p-14 md:p-16 rounded-3xl shadow-xl w-full">
            {/* Text & Features Section */}
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
                Advanced Analytics Dashboard
              </h2>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <feature.icon className="h-8 w-8" />
                    <span className="text-lg font-light">{feature.title}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-10 bg-white text-red-600 hover:bg-white/90 text-lg px-6 py-3">
                Explore Dashboard Features →
              </Button>
            </div>

            {/* Image Section */}
            {/* <div className="relative">
              <Image
                src="/db.jpg"
                alt="Dashboard Preview"
                width={700}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div> */}
          </div>
       
      </div>
    </section>
  );
}
