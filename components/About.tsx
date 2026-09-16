// export default function About() {
//   return (
//     <section className="px-6 md:px-12 py-16 md:py-24">
//       <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
//         <div className="aspect-4/3 rounded-lg bg-card overflow-hidden">
//           {/* Replace with a real showroom or lifestyle photo */}
//           <img
//             src="/ethycom-tirur.png"
//             alt="Modern living room interior"
//             className="w-full h-full object-cover"
//           />
//         </div>
//         <div>
//           <p className="text-slate text-sm tracking-wide mb-4">Our story</p>
//           <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5 text-hero-dark">
//             A small start in Muthuvallur, now trusted across Malappuram
//           </h2>
//           <p className="text-foreground/70 leading-relaxed">
//             Since 2015, Ethycom has grown from a single shop into 5 branches,
//             helping families and expatriates furnish their dream homes
//             without falling into interest traps. No middlemen, no hidden
//             charges — just direct, honest service.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div
          className={`transition-all duration-700 ease-out ${
            visible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="group aspect-4/3 rounded-lg bg-card overflow-hidden">
            <img
              src="ethycom-tirur-2.png"
              alt="Modern living room interior"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <p className="text-sage text-md tracking-wide mb-4 font-semibold">
            Our story
          </p>
          <h2 className="font-display font-bold  text-3xl md:text-4xl leading-tight mb-5 text-hero-dark">
            A small start in Muthuvallur, now trusted across Malappuram
          </h2>
          <p className=" text-black leading-relaxed mb-4">
            Since <span className="font-bold">2015</span> , Ethycom has grown from a single shop into 5 branches,
            helping families and expatriates furnish their dream homes
            without falling into interest traps. No middlemen, no hidden
            charges — just direct, honest service.
          </p>
          <p className="font-malayalam text-black text-sm leading-relaxed">
            2015-ൽ മലപ്പുറം ജില്ലയിലെ മുതുവല്ലൂരിൽ ഒരു ചെറിയ കാൽവെപ്പായി
            തുടങ്ങിയതാണ് Ethycom. ഇന്ന് ജില്ലയിലുടനീളം 5 ബ്രാഞ്ചുകളുമായി
            വിശ്വസ്തതയുടെ പര്യായമായി ഞങ്ങൾ വളർന്നു. ഞങ്ങളുടെ ലക്ഷ്യം
            (Mission): സാധാരണക്കാർക്കും പ്രവാസികൾക്കും ഭാരമില്ലാതെ,
            പലിശയുടെ കെണികളിൽ പെടാതെ തങ്ങളുടെ സ്വപ്ന ഭവനം മികച്ച
            ഫർണിച്ചറുകളും ഗൃഹോപകരണങ്ങളും കൊണ്ട് അലങ്കരിക്കാൻ സഹായിക്കുക
            എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം. ഇടനിലക്കാരില്ലാതെ, നേരിട്ടുള്ള
            സേവനത്തിലൂടെ ഓരോ കുടുംബത്തിനും മികച്ച ജീവിതനിലവാരം
            ഉറപ്പാക്കാൻ ഞങ്ങൾ പ്രതിജ്ഞാബദ്ധരാണ്.
          </p>
        </div>
      </div>
    </section>
  );
}