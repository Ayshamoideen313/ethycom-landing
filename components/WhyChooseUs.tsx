"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Wallet, FileCheck, CalendarClock } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Enquire & Choose",
    titleMl: "അന്വേഷിച്ച് തിരഞ്ഞെടുക്കുക",
    detail: "Visit a branch or message us on WhatsApp to pick your furniture or electronics.",
    color: "sage" as const,
  },
  {
    icon: Wallet,
    title: "Pay a Down Payment",
    titleMl: "ഡൗൺ പേയ്‌മെന്റ് അടയ്ക്കുക",
    detail: "Just 1/3rd of the bill upfront — 1/2 for bills over ₹1,00,000.",
    color: "slate" as const,
  },
  {
    icon: FileCheck,
    title: "Simple Paperwork",
    titleMl: "ലളിതമായ രേഖകൾ",
    detail: "No CIBIL check, no bank involved. Only 2 blank cheque leaves for high-value bills.",
    color: "sage" as const,
  },
  {
    icon: CalendarClock,
    title: "Pay in Easy EMIs",
    titleMl: "എളുപ്പമുള്ള EMI അടയ്ക്കുക",
    detail: "0% interest, no late fees — even if a payment date is missed.",
    color: "slate" as const,
  },
];

export default function WhyChooseUs() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-xl mb-14 md:mb-16">
        <p className="text-sage font-bold text-md tracking-wide mb-4 ">
          How it works
        </p>
        <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight text-hero-dark">
          Own your furniture or electronics in 4 simple steps
        </h2>
      </div>

      <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
        {/* Connecting line, desktop only */}
        <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border-soft" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              style={{
                transitionDelay: visible ? `${index * 120}ms` : "0ms",
              }}
              className={`relative transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div
                className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-background border-2 ${
                  step.color === "sage" ? "border-sage" : "border-slate"
                }`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    step.color === "sage" ? "text-sage" : "text-slate"
                  }`}
                  strokeWidth={1.75}
                />
              </div>
              <p
                className={`font-semibold text-sm md:text-base mb-1 ${
                  step.color === "sage" ? "text-sage" : "text-slate"
                }`}
              >
                {String(index + 1).padStart(2, "0")} · {step.title}
              </p>
              <p className="font-malayalam font-semibold text-foreground/50 text-xs mb-2">
                {step.titleMl}
              </p>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {step.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// const reasons = [
//   {
//     title: "Zero late fees",
//     detail:
//       "Miss an installment and we simply move your due date — no interest, no penalty.",
//   },
//   {
//     title: "Fast, safe delivery",
//     detail:
//       "Professional setup at your doorstep, delivered safely and on time.",
//   },
//   {
//     title: "Expert support",
//     detail:
//       "Our team is on hand over WhatsApp or in-branch for any questions.",
//   },
//   {
//     title: "Wide range",
//     detail:
//       "The latest furniture and electronics models, in showrooms near you.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <section className="px-6 md:px-12 py-16 md:py-24 bg-card">
//       <div className="max-w-xl mb-12">
//         <p className="text-slate text-sm tracking-wide mb-4">Why choose us</p>
//         <h2 className="font-display text-3xl md:text-4xl leading-tight text-hero-dark">
//           Furnishing your home, made simple
//         </h2>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//         {reasons.map((reason) => (
//           <div key={reason.title}>
//             <div className="w-9 h-9 rounded-full bg-sage/15 mb-4" />
//             <p className="font-medium mb-2">{reason.title}</p>
//             <p className="text-foreground/60 text-sm leading-relaxed">
//               {reason.detail}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
