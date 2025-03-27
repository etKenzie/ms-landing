import { Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="bg-slate-900 bg-custom-bg py-12">
      <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p>📞 +62 811 1931 5000</p>
            <p>✉ info@tokopandai.id</p>
            <p>🌐 www.misterishopper.id</p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* <a href="#"><Facebook className="h-5 w-5" /></a>
              <a href="#"><Twitter className="h-5 w-5" /></a> */}
              <a href="#"><Instagram className="h-5 w-5" /></a>
              <a href="#"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-2 rounded border border-white"
              />
              <Button className="w-full border border-white hover:bg-white hover:text-black">Subscribe</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} MisteriShopper.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}