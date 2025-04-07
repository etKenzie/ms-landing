import Hero from "@/components/sections/about/Hero";
import Expertise from "@/components/sections/about/Expertise";
import Impact from "@/components/sections/about/Impact";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import Mission from "@/components/sections/about/Mission";
import Footer from "@/components/Footer";

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
