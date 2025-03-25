import Hero from '@/components/sections/Hero'
import Value from '@/components/sections/Value'
import Solutions from '@/components/sections/Solutions'
import Dashboard from "@/components/sections/Dashboard";
import Testimonials from '@/components/sections/Testimonials'
import Industries from '@/components/sections/Industries'
import Closing from '@/components/sections/Closing'
import Footer from '@/components/Footer'
import Clients from '@/components/sections/Clients';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Clients />
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