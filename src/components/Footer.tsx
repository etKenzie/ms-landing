import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "./ui/button"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p>📞 +62 123 4567 8900</p>
            <p>✉ hello@misterishopper.id</p>
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
              <a href="#"><Facebook className="h-5 w-5" /></a>
              <a href="#"><Twitter className="h-5 w-5" /></a>
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
                className="w-full p-2 rounded bg-slate-800"
              />
              <Button className="w-full">Subscribe</Button>
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