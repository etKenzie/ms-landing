import Footer from "@/components/Footer";
import Expertise from "@/components/sections/about/Expertise";
import Hero from "@/components/sections/about/Hero";
import Impact from "@/components/sections/about/Impact";
import Mission from "@/components/sections/about/Mission";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";

export default function About() {
  return (
    <main className="bg-custom-light">
      <Hero />
      <Expertise />
      <Impact />
      <Mission />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
