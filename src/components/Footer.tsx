"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Instagram, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="bg-custom-bg py-12">
      <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">{t.contact.title}</h3>
            <p>📞 {t.contact.phone}</p>
            <p>✉ {t.contact.email}</p>
            <p>🌐 {t.contact.website}</p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.quickLinks.title}</h3>
            <ul className="space-y-2">
              {/* <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/case-studies">Case Studies</a>
              </li> */}
              <li>
                <a href="/about">{t.quickLinks.about}</a>
              </li>
              <li>
                <a href="/contact">{t.quickLinks.contact}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.social.title}</h3>
            <div className="flex gap-4">
              {/* <a href="#"><Facebook className="h-5 w-5" /></a>
              <a href="#"><Twitter className="h-5 w-5" /></a> */}
              <a href="https://www.instagram.com/misterishopper.id/">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t.newsletter.title}</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="w-full p-2 rounded border border-white"
              />
              <Button className="w-full border border-white hover:bg-white hover:text-black">
                {t.newsletter.button}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
