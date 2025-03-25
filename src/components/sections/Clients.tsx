"use client"
import Image from "next/image"

const clients = [
  { name: "Jiwa", logo: "/clients/jiwa.png" },
  { name: "Haus", logo: "/clients/haus.png" },
  { name: "Hangry", logo: "/clients/hangry.png" },
  { name: "Darimi", logo: "/clients/darmi.png" },
  { name: "Roempi", logo: "/clients/roempi.png" },
  { name: "SKB", logo: "/clients/skb.png" },
  { name: "Unilever", logo: "/clients/unilever.png" },
]

// Duplicate the list for seamless looping
const infiniteClients = [...clients, ...clients];

export default function Clients() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-playfair text-3xl font-bold text-center mb-12">
          Trusted by Industry Leaders
        </h2>

        {/* Logo Marquee */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max whitespace-nowrap animate-marquee">
            {infiniteClients.map((client, index) => (
              <div key={index} className="flex items-center justify-center px-8">
                <div className="relative w-[150px] h-[100px]">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
