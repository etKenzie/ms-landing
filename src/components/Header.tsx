"use client";
import Link from "next/link"
// import Image from "next/image"

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 text-xs">
      <div className="flex justify-between px-8">
        {/* Navigation Island */}
        <nav className="bg-[#d3cccb] backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className=" transition-colors hover:font-bold" 
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="transition-colors hover:font-bold"
            >
              About
            </Link>
          </div>
        </nav>

        {/* Contact Button Island */}
        <div className="bg-[#171716] text-white  backdrop-blur-sm rounded-full px-6 py-2 shadow-lg  ">
        <Link 
              href="/about" 
              className="transition-colors hover:font-bold"
            >
              Contact Us
            </Link>
            
        
        </div>
      </div>
    </header>
  )
} 