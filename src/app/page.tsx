import Hero from '@/components/sections/home/Hero'
import Value from '@/components/sections/home/Value'
import Solutions from '@/components/sections/home/Solutions'
// import Dashboard from "@/components/sections/home/Dashboard";
import Testimonials from '@/components/sections/home/Testimonials'
import Industries from '@/components/sections/home/Industries'
// import Closing from '@/components/sections/home/Closing'
import Footer from '@/components/Footer'
import Clients from '@/components/sections/home/Clients';
import FAQ from '@/components/sections/home/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <Value />
      <Industries />
      <Solutions />
      {/* <Dashboard /> */}
      
      <Testimonials />
      
      {/* <Closing /> */}
      <Clients />
      <FAQ />
      <Footer />
    </main>
  );
}