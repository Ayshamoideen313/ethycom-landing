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

export default function Hero() {
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
    <section className="relative overflow-hidden min-h-[600px] md:min-h-screen flex flex-col">
      <Image
        src="/hero-blue-yellow.png"
        alt=""
        fill
        priority
        className="object-cover object-top -z-10"
      />
      <div className="absolute inset-0 bg-black/35 -z-10" />

      {/* Sticky navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          dark
            ? "bg-background/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
          <div
            className={`border rounded-lg p-0.5 overflow-hidden transition-colors ${
              dark ? "border-border-soft" : "border-white/80"
            }`}
          >
            <Image
              src="/logo-ethycom.webp"
              alt="Ethycom"
              width={120}
              height={34}
              className="object-contain rounded"
            />
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  dark
                    ? "text-foreground/80 hover:text-sage"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden md:inline-block text-sm border rounded-md px-6 py-3 transition-colors ${
              dark
                ? "border-sage text-sage hover:bg-sage hover:text-background"
                : "border-white/80 text-white hover:border-white hover:bg-white/10"
            }`}
          >
            Chat with us
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {open ? (
              <X className={dark ? "text-hero-dark" : "text-white"} size={22} />
            ) : (
              <Menu className={dark ? "text-hero-dark" : "text-white"} size={22} />
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-background ${
            open ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="px-6 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 text-sm hover:text-sage transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-block text-center bg-sage text-background rounded-md px-4 py-2.5 text-sm font-bold"
            >
              Chat with us
            </a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-12 pt-28 md:pt-14 pb-16 md:pb-24 flex flex-col flex-1">
        <div className="max-w-3xl font-semibold my-auto">
          <p className="text-white/80 text-sm font-bold tracking-wide mb-4">
            Smart living, on your terms
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] mb-6 text-white">
            Furniture and electronics for your modern home
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl mb-16">
            0% interest in-house EMI, no hidden charges, and doorstep delivery
            across 5 branches in Malappuram.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm border border-white/80 text-white rounded-md px-6 py-3 hover:border-white hover:bg-white/10 transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
