"use client";

import { useEffect, useRef, useState } from "react";

interface Slide {
  src: string;
  tag: string;
  color: "sage" | "slate";
}

const slides: Slide[] = [
    {
    src: "/ethycom-logo-tagline.png",
    tag: "What we Offers",
    color: "slate",
  },
  {
    src: "/electronics.png",
    tag: "Electronics Available",
    color: "slate",
  },
    {
    src: "/taglineslide.png",
    tag: "What we Offers",
    color: "slate",
  },

  
  {
    src: "/furnitures.png",
    tag: "Furniture Available",
    color: "sage",
  },
  
  
  {
    src: "/modern-furniture.png",
    tag: "New Arrivals",
    color: "sage",
  },
  {
    src: "/ethycom-logo-tagline.png",
    tag: "What we Offers",
    color: "slate",
  },
  {
    src: "/taglineslide.png",
    tag: "What we Offers",
    color: "slate",
  },
  
  
];

export default function ImageSlideshow() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(() => {
            setActive((prev) => (prev + 1) % slides.length);
          }, 5000);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(timer);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative aspect-4/5 rounded-xl overflow-hidden bg-background">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.tag}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Tag overlay */}
      <div
        className={`absolute bottom-5 left-5 px-4 py-2 rounded-full backdrop-blur-sm text-xs md:text-sm font-semibold text-white transition-colors duration-500 ${
          slides[active].color === "sage" ? "bg-sage/85" : "bg-slate/85"
        }`}
      >
        {slides[active].tag}
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-5 right-5 flex gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
