"use client";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <header className="fixed top-4 left-0 right-0 z-50 text-sm">
      <div className="flex justify-between px-4 md:px-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-[#d3cccb] backdrop-blur-sm rounded-full p-2 shadow-lg right-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block bg-[#d3cccb] backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
          <div className="flex items-center gap-8">
            <Link href="/" className="transition-colors hover:font-bold">
              {t.home}
            </Link>
            <Link href="/about" className="transition-colors hover:font-bold">
              {t.about}
            </Link>
            <button
              onClick={toggleLanguage}
              className="transition-colors hover:font-bold"
            >
              {language === "en" ? "EN" : "ID"}
            </button>
          </div>
        </nav>

        {/* Contact Button Island */}
        <div className="bg-[#171716] text-white backdrop-blur-sm rounded-full px-6 py-2 shadow-lg hidden md:block">
          <Link href="/contact" className="transition-colors hover:font-bold">
            {t.contact}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#d3cccb] backdrop-blur-sm rounded-b-lg shadow-lg mt-2">
          <div className="flex flex-col gap-4 p-4">
            <Link
              href="/"
              className="transition-colors hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.home}
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.about}
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.contact}
            </Link>
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="transition-colors hover:font-bold text-left"
            >
              {language === "en" ? "ID" : "EN"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
