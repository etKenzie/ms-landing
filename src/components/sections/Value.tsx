import Image from "next/image"

export default function ValueProps() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2 relative h-[400px]">
          <Image 
            src="/hero-bg2.jpg" 
            alt="Business Insights" 
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-right">
          <h2 className="text-subtitle font-playfair">
            Why Choose MisteriShopper.id?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Gain AI-powered, real-time insights to enhance service quality, optimize operations,  
            and monitor multiple business channels effortlessly—whether in restaurants, retail stores,  
            food trucks, or pop-up locations.
          </p>
        </div>
      </div>
    </section>
  );
}
