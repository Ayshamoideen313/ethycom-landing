import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden min-h-[620px] md:min-h-screen flex flex-col bg-hero-dark">
      {/* Mobile image */}
      <Image
        src="/ethycom-hero-mobile.png"
        alt=""
        fill
        priority
        className="object-cover object-center z-0 md:hidden"
      />
      {/* Desktop image */}
      <Image
        src="/hero-blue-yellow.png"
        alt=""
        fill
        priority
        className="object-cover object-center z-0 hidden md:block"
      />
      <div className="absolute inset-0 bg-black/35 z-0" />

      <div className="relative z-10 px-6 md:px-12 pt-28 md:pt-14 pb-16 md:pb-24 flex flex-col flex-1">
        <div className="max-w-3xl font-semibold my-auto">
          <p className="text-white/80 text-sm font-bold tracking-wide mb-4">
            Smart living, on your terms
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.1] mb-6 text-white">
            Furniture and electronics for your modern home
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-xl mb-8 md:mb-16">
            0% interest in-house EMI, no hidden charges, and doorstep delivery
            across 5 branches in Malappuram.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm bg-white/15 text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/25 transition-colors"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
