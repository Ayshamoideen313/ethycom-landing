"use client";

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Smile, Briefcase } from "lucide-react";

const stats = [
  { value: "2015", label: "Since", color: "sage" as const, icon: Calendar },
  { value: "5", label: "Branches", color: "slate" as const, icon: MapPin },
  { value: "1000+", label: "Happy Customers", color: "sage" as const, icon: Smile },
  { value: "50+", label: "Staff", color: "slate" as const, icon: Briefcase },
];

export default function StatsBar() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 py-10 md:py-14 bg-hero-dark"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto text-center">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
              className={`transition-all duration-700 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Icon
                className="w-6 h-6 mx-auto mb-3 text-sage"
                strokeWidth={1.75}
              />
              <p className="font-display text-3xl md:text-4xl mb-2 text-white">
                {stat.value}
              </p>
              <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
// "use client";

// import { useEffect, useRef, useState } from "react";

// const stats = [
//   { value: "2015", label: "Since" },
//   { value: "5", label: "Branches" },
//   { value: "1000+", label: "Happy Customers" },
//   { value: "50+", label: "Staff" },
// ];

// export default function StatsBar() {
//   const [visible, setVisible] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => setVisible(entry.isIntersecting),
//       { threshold: 0.3 }
//     );

//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="px-6 md:px-12 py-10 md:py-14 bg-hero-dark"
//     >
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto text-center">
//         {stats.map((stat, index) => (
//           <div
//             key={stat.label}
//             style={{ transitionDelay: visible ? `${index * 100}ms` : "0ms" }}
//             className={`transition-all duration-700 ease-out ${
//               visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//             }`}
//           >
//             <p className="font-display text-4xl md:text-5xl mb-2 text-white">
//               {stat.value}
//             </p>
//             <p className="text-white/60 text-xs md:text-sm">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

