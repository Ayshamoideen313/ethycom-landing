"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Products", href: "#products" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scrolled || open;

  return (
    <div className="fixed top-4 inset-x-4 md:top-6 md:inset-x-8 z-50">
      <nav
        className={`rounded-2xl overflow-hidden backdrop-blur-md border transition-all duration-300 ${
          dark
            ? "bg-white/50 border-white/40 shadow-lg"
            : "bg-white/10 border-white/20"
        }`}
      >
        <div className="px-5 md:px-7 flex items-center justify-between h-14 md:h-16">
          <Image
            src="/logo-ethycom.webp"
            alt="Ethycom"
            width={110}
            height={30}
            className="object-contain rounded"
          />

          <div className="hidden md:flex items-center gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative group transition-colors ${
                  dark
                    ? "text-hero-dark hover:text-sage"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    dark ? "bg-sage" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block text-sm rounded-full px-5 py-2 border transition-colors ${
              dark
                ? "bg-hero-dark text-white border-hero-dark hover:bg-hero-dark/80"
                : "bg-white/15 text-white border-white/30 hover:bg-white/25"
            }`}
          >
            Chat with us
          </a>

          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {open ? (
              <X className={dark ? "text-hero-dark" : "text-white"} size={20} />
            ) : (
              <Menu className={dark ? "text-hero-dark" : "text-white"} size={20} />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-64" : "max-h-0"
          }`}
        >
          <div
            className={`px-5 py-4 flex flex-col gap-3.5 border-t ${
              dark ? "border-white/40" : "border-white/20"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors ${
                  dark
                    ? "text-hero-dark hover:text-sage"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-block text-center bg-hero-dark text-white rounded-full px-4 py-2.5 text-md font-bold"
            >
              Chat with us
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
