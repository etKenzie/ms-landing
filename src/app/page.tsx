import Image from "next/image";
import Hero from '@/components/sections/Hero'
import Value from '@/components/sections/Value'
import Solutions from '@/components/sections/Solutions'
import Dashboard from "@/components/sections/Dashboard";
import Testimonials from '@/components/sections/Testimonials'
import Industries from '@/components/sections/Industries'
import Closing from '@/components/sections/Closing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Value />
      <Dashboard />
      <Solutions />
      <Testimonials />
      <Industries />
      <Closing />
      <Footer />
    </main>
  );
}
