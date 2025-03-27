import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Pengiriman barang dan stock selalu tersedia dan tepat waktu. Sangat membantu pasokan bahan makanan restoran kami. Sip sekali",
      author: "Helmy Satriya Anugrah",
      position: "Purchasing of LocaaHands Group",
      image: "/testimonials/helmy.png",
    },
    {
      quote:
        "Pelayanan tim Tokopandai sangat fast respond. Kami dibantu untuk pemenuhan freezer dengan storage stock dari produk Juragan Beku. Dari segi harga juga lebih ok dibandingkan dengan supplier lainnya.",
      author: "Ainur Rofiq",
      position: "PT. Nawasaka Wisesa (The Southern Hotel)",
      image: "/testimonials/ainur.png",
    },
    // {
    //   quote:
    //     "Dalam usaha peningkatan pelayanan terhadap konsumen Haus, kami berusaha mendapatkan gambaran terhadap kualitas pelayanan yang diberikan oleh crew Haus!. Untuk itu kami pilih program Mystery Shopper dari Toko Pandai. Kami puas dengan pelayanan yang diberikan, tidak hanya dalam pengumpulan data, namun juga dalam pelaporan yang kami terima. Tentunya menjadi insight penting secara objektif atas penilaian pelayanan oleh crew kami. Terima Kasih Toko Pandai.",
    //   author: "Fauzan Bermana",
    //   position: "HAUS!",
    //   image: "/testimonials/fauzan.png",
    // }
  ];
  

  return (
    <section className="py-20 bg-custom-accent">
      <div className="container mx-auto">
        <h2 className="text-subtitle font-playfair justify-left">Success Stories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <p className="text-muted-foreground">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}