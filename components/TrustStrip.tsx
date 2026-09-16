"use client";

import { useEffect, useRef, useState } from "react";
import {
  Percent,
  ShieldCheck,
  Truck,
  PackageCheck,
  Headset,
  LayoutGrid,
  Plus,
  Phone,
  LucideIcon,
} from "lucide-react";
import ImageSlideshow from "./ImageSlideshow";

type Accent = "sage" | "slate";

interface TrustItem {
  title: string;
  titleMl: string;
  icon: LucideIcon;
  color: Accent;
  detail: string;
  malayalam: string;
  phone?: string;
  teaser?: string;
}

const items: TrustItem[] = [
  {
    title: "0% Interest EMI",
    titleMl: "പലിശയില്ലാത്ത EMI , ഞങ്ങളുടെ പ്രത്യേകത !",
    icon: Percent,
    color: "sage",
    detail:
      "Flexible weekly or monthly installments, no hidden charges. No interest will be charged even in the event of a missed installment.",
    malayalam:
      "EMI ഓരോ ആഴ്ചയിലോ മാസത്തിലോ അടയ്ക്കാം. 6 മാസം വരെ തവണകളായി അടക്കാവുന്നതാണ്. EMI ഞങ്ങളുടെ ഏജൻറ് വീട്ടിൽ വന്ന് കളക്ട് ചെയ്യുന്നു.",
  },
  {
    title: "Zero Late Fees",
    titleMl: "അടവ് തെറ്റിപ്പോയാലും പലിശ ഇല്ല !",
    icon: ShieldCheck,
    color: "slate",
    detail: "Miss a payment? We simply adjust your due date.",
    malayalam:
      "തിരിച്ചടവ് തെറ്റിപ്പോയാൽ EMI Date മാറ്റിത്തരുന്നതാണ്. പലിശയോ മറ്റു സർവീസ് ചാർജുകളോ ഒന്നും ഇല്ല.",
  },
  {
    title: "Free Delivery",
    titleMl: "മലപ്പുറം ജില്ല മുഴുവനും സമീപ ജില്ലകളിലും ഡെലിവറി ചെയ്യുന്നതാണ് ! ",
    icon: Truck,
    color: "sage",
    detail: "Doorstep delivery across Malappuram district. Office timing: 9 AM to 9 PM.",
    malayalam: "മലപ്പുറം ജില്ല മുഴുവനും സമീപ ജില്ലകളിലും ഡെലിവറി ചെയ്യുന്നതാണ്.",
  },
  {
    title: "Fast & Safe Shipping",
    titleMl: "സുരക്ഷിതമായ വേഗ ഡെലിവറി",
    icon: PackageCheck,
    color: "slate",
    detail: "Professional setup, delivered safely and on time.",
    malayalam: "സാധനങ്ങൾ സുരക്ഷിതമായി നിങ്ങളുടെ വീട്ടിൽ എത്തിക്കുന്നു.",
  },
  {
    title: "Expert Support (24/7)",
    titleMl: "മികച്ച സേവനം",
    icon: Headset,
    color: "sage",
    phone: "+91 92072 86777",
    teaser: "We are here to help you.",
    detail:
      "Our team is ready to help with any questions, call/WhatsApp: +91 92072 86777.",
    malayalam: "ഏത് സംശയങ്ങൾക്കും ഞങ്ങളുടെ ടീം നിങ്ങളെ സഹായിക്കാൻ സന്നദ്ധരാണ്.",
  },
  {
    title: "Wide Range",
    titleMl: "വിപുലമായ ശേഖരം",
    icon: LayoutGrid,
    color: "slate",
    detail: "Find furniture and electronics that fit your lifestyle and home decor.",
    malayalam:
      "നിങ്ങളുടെ അഭിരുചിക്കിണങ്ങിയ ഏറ്റവും പുതിയ മോഡലുകൾ ഷോറൂമുകളിൽ ലഭ്യമാണ്.",
  },
];

export default function TrustStrip() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24 bg-card">
      <div className="max-w-xl mb-12 md:mb-16 font-semibold">
        <p className="text-sage text-md tracking-wide mb-4 font-semibold">
          Why Choose Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight text-hero-dark">
          Everything your home needs, on your terms
          {/* Ethycom
The Choice of Ethical Installment
|
തവണകളായി(EMI) അടച്ച് ഗൃഹോപകരണങ്ങളും ഫർണിച്ചറുകളും സ്വന്തമാക്കാം */}
        </h2>
      </div>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 lg:gap-16">
        {/* Left: image, sticky on desktop */}
        <div className="lg:sticky lg:top-10 lg:self-start">
          <ImageSlideshow />
        </div>

        {/* Right: divided feature list */}
        <div className="flex flex-col">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;
            const accent = item.color;
            const isLast = index === items.length - 1;

            return (
              <button
                key={item.title}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  transitionDelay: visible ? `${index * 220}ms` : "0ms",
                }}
                className={`text-left py-6 md:py-7 transition-all duration-700 ease-out ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                } ${!isLast ? "border-b border-border-soft" : ""} ${
                  isOpen
                    ? accent === "sage"
                      ? "border-l-2 border-l-sage pl-4 -ml-4"
                      : "border-l-2 border-l-slate pl-4 -ml-4"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold w-5 shrink-0 ${
                        accent === "sage" ? "text-sage" : "text-slate"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className={`w-4.5 h-4.5 shrink-0 ${
                        accent === "sage" ? "text-sage" : "text-slate"
                      }`}
                      strokeWidth={1.75}
                    />
                    <p
                      className={`font-semibold text-sm md:text-base ${
                        accent === "sage" ? "text-sage" : "text-slate"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                  <Plus
                    className={`w-4 h-4 text-foreground/40 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </div>

                <p className="font-malayalam font-semibold text-slate text-xs md:text-sm pl-14">
                  {item.titleMl}
                </p>

                {item.phone && (
                  <a
                    href={`tel:${item.phone.replace(/\s/g, "")}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 pl-14 mt-2 text-xs md:text-sm text-sage font-semibold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                    {item.phone}
                  </a>
                )}

                {item.teaser && (
                  <p className="text-foreground/75 text-xs md:text-sm pl-14 mt-2 font-semibold">
                    {item.teaser}
                  </p>
                )}

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden pl-14">
                    <p className="text-foreground text-xs md:text-sm leading-relaxed mb-2">
                      {item.detail}
                    </p>
                    <p className="font-malayalam text-foreground text-xs leading-relaxed">
                      {item.malayalam}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}







// cards-asthetic simple

// "use client";

// import { useState } from "react";
// import {
//   Percent,
//   ShieldCheck,
//   Truck,
//   PackageCheck,
//   Headset,
//   LayoutGrid,
//   Plus,
//   Phone,
// } from "lucide-react";

// const items = [
//   {
//     title: "0% Interest EMI",
//     titleMl: "പലിശയില്ലാത്ത EMI , ഞങ്ങളുടെ പ്രത്യേകത !",
//     icon: Percent,
//     detail:
//       "Flexible weekly or monthly installments, no hidden charges. No interest will be charged even in the event of a missed installment.",
//     malayalam:
//       "EMI ഓരോ ആഴ്ചയിലോ മാസത്തിലോ അടയ്ക്കാം. 6 മാസം വരെ തവണകളായി അടക്കാവുന്നതാണ്. EMI ഞങ്ങളുടെ ഏജൻറ് വീട്ടിൽ വന്ന് കളക്ട് ചെയ്യുന്നു.",
//   },
//   {
//     title: "Zero Late Fees",
//     titleMl: "അടവ് തെറ്റിപ്പോയാലും പലിശ ഇല്ല !",
//     icon: ShieldCheck,
//     detail: "Miss a payment? We simply adjust your due date.",
//     malayalam:
//       "തിരിച്ചടവ് തെറ്റിപ്പോയാൽ EMI Date മാറ്റിത്തരുന്നതാണ്. പലിശയോ മറ്റു സർവീസ് ചാർജുകളോ ഒന്നും ഇല്ല.",
//   },
//   {
//     title: "Free Delivery",
//     titleMl: "മലപ്പുറം ജില്ല മുഴുവനും സമീപ ജില്ലകളിലും ഡെലിവറി ചെയ്യുന്നതാണ് ! ",
//     icon: Truck,
//     detail: "Doorstep delivery across Malappuram district. Office timing: 9 AM to 9 PM.",
//     malayalam: "മലപ്പുറം ജില്ല മുഴുവനും സമീപ ജില്ലകളിലും ഡെലിവറി ചെയ്യുന്നതാണ്.",
//   },
//   {
//     title: "Fast & Safe Shipping",
//     titleMl: "സുരക്ഷിതമായ വേഗ ഡെലിവറി",
//     icon: PackageCheck,
//     detail: "Professional setup, delivered safely and on time.",
//     malayalam: "സാധനങ്ങൾ സുരക്ഷിതമായി നിങ്ങളുടെ വീട്ടിൽ എത്തിക്കുന്നു.",
//   },
//   {
//     title: "Expert Support (24/7)",
//     titleMl: "മികച്ച സേവനം",
//     icon: Headset,
//     phone: "+91 92072 86777",
//     teaser: "We are here to help you.",
//     detail:
//       "Our team is ready to help with any questions, call/WhatsApp: +91 92072 86777.",
//     malayalam: "ഏത് സംശയങ്ങൾക്കും ഞങ്ങളുടെ ടീം നിങ്ങളെ സഹായിക്കാൻ സന്നദ്ധരാണ്.",
//   },
//   {
//     title: "Wide Range",
//     titleMl: "വിപുലമായ ശേഖരം",
//     icon: LayoutGrid,
//     detail: "Find furniture and electronics that fit your lifestyle and home decor.",
//     malayalam:
//       "നിങ്ങളുടെ അഭിരുചിക്കിണങ്ങിയ ഏറ്റവും പുതിയ മോഡലുകൾ ഷോറൂമുകളിൽ ലഭ്യമാണ്.",
//   },
// ];

// export default function TrustStrip() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section className="px-6 md:px-12 py-14 md:py-20 bg-card">
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {items.map((item, index) => {
//           const Icon = item.icon;
//           const isOpen = openIndex === index;

//           return (
//             <button
//               key={item.title}
//               onClick={() => setOpenIndex(isOpen ? null : index)}
//               className={`text-left rounded-xl border p-5 md:p-6 transition-all duration-300 ${
//                 isOpen
//                   ? "bg-background border-sage/40 shadow-sm"
//                   : "bg-background border-border-soft hover:border-sage/40 hover:shadow-sm hover:-translate-y-0.5"
//               }`}
//             >
//               <div className="flex items-center justify-between mb-2.5">
//                 <div className="flex items-center gap-3">
//                   <div className="w-9 h-9 shrink-0 rounded-full bg-sage/10 flex items-center justify-center">
//                     <Icon className="w-4.5 h-4.5 text-sage" strokeWidth={1.75} />
//                   </div>
//                   <p className="font-semibold text-sm md:text-base text-sage">
//                     {item.title}
//                   </p>
//                 </div>
//                 <Plus
//                   className={`w-4 h-4 text-foreground/40 shrink-0 transition-transform duration-300 ${
//                     isOpen ? "rotate-45" : ""
//                   }`}
//                 />
//               </div>

//               <p className="font-malayalam text-slate text-xs md:text-sm pl-12 font-semibold">
//                 {item.titleMl}
//               </p>

//               {(item as any).phone && (
//                 <a
//                   href={`tel:${(item as any).phone.replace(/\s/g, "")}`}
//                   onClick={(e) => e.stopPropagation()}
//                   className="flex items-center gap-1.5 pl-12 mt-2 text-xs md:text-sm text-sage font-semibold hover:underline"
//                 >
//                   <Phone className="w-3.5 h-3.5" strokeWidth={2} />
//                   {(item as any).phone}
//                 </a>
//               )}

//               {(item as any).teaser && (
//                 <p className="text-foreground/75 text-xs md:text-sm pl-12 mt-2 font-semibold">
//                   {(item as any).teaser}
//                 </p>
//               )}

//               <div
//                 className={`grid transition-all duration-300 ease-in-out ${
//                   isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
//                 }`}
//               >
//                 <div className="overflow-hidden pl-12">
//                   <p className="text-foreground text-xs md:text-sm leading-relaxed mb-2">
//                     {item.detail}
//                   </p>
//                   <p className="font-malayalam text-foreground text-xs leading-relaxed">
//                     {item.malayalam}
//                   </p>
//                 </div>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// ATTRACTIVE-cars only

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Percent,
//   ShieldCheck,
//   Truck,
//   PackageCheck,
//   Headset,
//   LayoutGrid,
//   Plus,
//   Phone,
// } from "lucide-react";

// const items = [
//   {
//     title: "0% Interest EMI",
//     titleMl: "പലിശയില്ലാത്ത EMI",
//     icon: Percent,
//     color: "sage" as const,
//     detail:
//       "Flexible weekly or monthly installments, no hidden charges. No interest will be charged even in the event of a missed installment.",
//     malayalam:
//       "EMI ഓരോ ആഴ്ചയിലോ മാസത്തിലോ അടയ്ക്കാം. 6 മാസം വരെ തവണകളായി അടക്കാവുന്നതാണ്. EMI ഞങ്ങളുടെ ഏജൻറ് വീട്ടിൽ വന്ന് കളക്ട് ചെയ്യുന്നു.",
//   },
//   {
//     title: "Zero Late Fees",
//     titleMl: "വൈകിയാലും പലിശയില്ല",
//     icon: ShieldCheck,
//     color: "slate" as const,
//     detail: "Miss a payment? We simply adjust your due date.",
//     malayalam:
//       "തിരിച്ചടവ് തെറ്റിപ്പോയാൽ EMI Date മാറ്റിത്തരുന്നതാണ്. പലിശയോ മറ്റു സർവീസ് ചാർജുകളോ ഒന്നും ഇല്ല.",
//   },
//   {
//     title: "Free Delivery",
//     titleMl: "സൗജന്യ ഡെലിവറി",
//     icon: Truck,
//     color: "sage" as const,
//     detail: "Doorstep delivery across Malappuram district. Office timing: 9 AM to 9 PM.",
//     malayalam: "മലപ്പുറം ജില്ല മുഴുവനും സമീപ ജില്ലകളിലും ഡെലിവറി ചെയ്യുന്നതാണ്.",
//   },
//   {
//     title: "Fast & Safe Shipping",
//     titleMl: "സുരക്ഷിതമായ വേഗ ഡെലിവറി",
//     icon: PackageCheck,
//     color: "slate" as const,
//     detail: "Professional setup, delivered safely and on time.",
//     malayalam: "സാധനങ്ങൾ സുരക്ഷിതമായി നിങ്ങളുടെ വീട്ടിൽ എത്തിക്കുന്നു.",
//   },
//   {
//     title: "Expert Support (24/7)",
//     titleMl: "മികച്ച സേവനം",
//     icon: Headset,
//     color: "sage" as const,
//     phone: "+91 92072 86777",
//     teaser: "We are here to help you.",
//     detail:
//       "Our team is ready to help with any questions, call/WhatsApp: +91 92072 86777.",
//     malayalam: "ഏത് സംശയങ്ങൾക്കും ഞങ്ങളുടെ ടീം നിങ്ങളെ സഹായിക്കാൻ സന്നദ്ധരാണ്.",
//   },
//   {
//     title: "Wide Range",
//     titleMl: "വിപുലമായ ശേഖരം",
//     icon: LayoutGrid,
//     color: "slate" as const,
//     detail: "Find furniture and electronics that fit your lifestyle and home decor.",
//     malayalam:
//       "നിങ്ങളുടെ അഭിരുചിക്കിണങ്ങിയ ഏറ്റവും പുതിയ മോഡലുകൾ ഷോറൂമുകളിൽ ലഭ്യമാണ്.",
//   },
// ];

// export default function TrustStrip() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.15 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="px-6 md:px-12 py-14 md:py-20 bg-card"
//     >
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {items.map((item, index) => {
//           const Icon = item.icon;
//           const isOpen = openIndex === index;
//           const accent = item.color === "sage" ? "sage" : "slate";

//           return (
//             <button
//               key={item.title}
//               onClick={() => setOpenIndex(isOpen ? null : index)}
//               style={{
//                 transitionDelay: visible ? `${index * 80}ms` : "0ms",
//               }}
//               className={`text-left rounded-xl border-t-4 border-x border-b p-5 md:p-6 transition-all duration-500 ease-out ${
//                 visible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               } ${accent === "sage" ? "border-t-sage" : "border-t-slate"} ${
//                 isOpen
//                   ? accent === "sage"
//                     ? "bg-background border-x-sage/40 border-b-sage/40 border-l-4 shadow-sm"
//                     : "bg-background border-x-slate/40 border-b-slate/40 border-l-4 shadow-sm"
//                   : "bg-background border-x-border-soft border-b-border-soft hover:shadow-sm hover:-translate-y-0.5"
//               }`}
//             >
//               <div className="flex items-center justify-between mb-2.5">
//                 <div className="flex items-center gap-3">
//                   <div
//                     className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${
//                       accent === "sage" ? "bg-sage/10" : "bg-slate/10"
//                     }`}
//                   >
//                     <Icon
//                       className={`w-4.5 h-4.5 ${
//                         accent === "sage" ? "text-sage" : "text-slate"
//                       }`}
//                       strokeWidth={1.75}
//                     />
//                   </div>
//                   <p
//                     className={`font-semibold text-sm md:text-base ${
//                       accent === "sage" ? "text-sage" : "text-slate"
//                     }`}
//                   >
//                     {item.title}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2 shrink-0">
//                   <span className="text-[11px] text-foreground/35 font-medium">
//                     {String(index + 1).padStart(2, "0")}
//                   </span>
//                   <Plus
//                     className={`w-4 h-4 text-foreground/40 transition-transform duration-300 ${
//                       isOpen ? "rotate-45" : ""
//                     }`}
//                   />
//                 </div>
//               </div>

//               <p className="font-malayalam font-semibold text-slate text-xs md:text-sm pl-12">
//                 {item.titleMl}
//               </p>

//               {item.phone && (
//                 <a
//                   href={`tel:${item.phone.replace(/\s/g, "")}`}
//                   onClick={(e) => e.stopPropagation()}
//                   className="flex items-center gap-1.5 pl-12 mt-2 text-xs md:text-sm text-sage font-medium hover:underline"
//                 >
//                   <Phone className="w-3.5 h-3.5" strokeWidth={2} />
//                   {item.phone}
//                 </a>
//               )}

//               {item.teaser && (
//                 <p className="text-foreground/75 text-xs md:text-sm pl-12 mt-2">
//                   {item.teaser}
//                 </p>
//               )}

//               <div
//                 className={`grid transition-all duration-300 ease-in-out ${
//                   isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
//                 }`}
//               >
//                 <div className="overflow-hidden pl-12">
//                   <p className="text-foreground text-xs md:text-sm leading-relaxed mb-2">
//                     {item.detail}
//                   </p>
//                   <p className="font-malayalam text-foreground text-xs leading-relaxed">
//                     {item.malayalam}
//                   </p>
//                 </div>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </section>
//   );
// }