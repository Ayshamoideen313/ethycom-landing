
import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { Phone } from "lucide-react";

// Replace image URLs with real branch/showroom photos once available.
const branches = [
  {
    name: "Kondotty",
    area: "Muthuvallur",
    address: "Near Jumamasjid, Malappuram - 673638",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Edavanna",
    area: "Mundengara",
    address: "Malanghad, Malappuram - 676541",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Kottakkal",
    area: "Chappanangadi",
    address: "HS Padi, Malappuram - 676503",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Puthanathani",
    area: "Parakall",
    address: "Kanmanam, Malappuram - 676551",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Tirur",
    area: "Tarif Bazar",
    address: "Tirur Market Road, Malappuram - 676101",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Branches() {
  return (
    <section id="branches" className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="px-6 md:px-12 max-w-xl mb-10">
        <p className="text-sage text-md font-bold tracking-wide mb-4 ">
          Visit us
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight text-hero-dark">
          5 branches across Malappuram
        </h2>
      </div>

      {/* Horizontally scrollable on every screen size */}
      <div className="flex flex-nowrap gap-5 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-6 scrollbar-styled">
        {branches.map((branch) => (
          <div
            key={branch.name}
            className="snap-start shrink-0 w-64 sm:w-72 bg-background rounded-xl border border-border-soft overflow-hidden"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={branch.image}
                alt={`${branch.name} branch`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <p className="font-bold mb-1">{branch.name}</p>
              <p className="text-foreground/50 text-xs mb-3">{branch.area}</p>
              <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                {branch.address.replace(", Malappuram", "")}<br />Malappuram
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-1.5 bg-hero-dark text-white rounded-full px-4 py-2 text-xs font-bold hover:bg-hero-dark/80 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" strokeWidth={2} />
                  Call Now
                </a>
                <a
                  href={getWhatsAppLink(`the ${branch.name} branch`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-hero-dark text-hero-dark rounded-full px-4 py-2 text-xs font-bold hover:bg-hero-dark hover:text-white transition-colors"
                >
                  Chat →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


// / import { getWhatsAppLink } from "@/lib/whatsapp";

// const branches = [
//   {
//     name: "Kondotty",
//     area: "Muthuvallur",
//     address: "Near Jumamasjid, Malappuram - 673638",
//   },
//   {
//     name: "Edavanna",
//     area: "Mundengara",
//     address: "Malanghad, Malappuram - 676541",
//   },
//   {
//     name: "Kottakkal",
//     area: "Chappanangadi",
//     address: "HS Padi, Malappuram - 676503",
//   },
//   {
//     name: "Puthanathani",
//     area: "Parakall",
//     address: "Kanmanam, Malappuram - 676551",
//   },
//   {
//     name: "Tirur",
//     area: "Tarif Bazar",
//     address: "Tirur Market Road, Malappuram - 676101",
//   },
// ];

// export default function Branches() {
//   return (
//     <section id="branches" className="px-6 md:px-12 py-16 md:py-24 bg-card">
//       <div className="max-w-xl mb-12">
//         <p className="text-slate text-sm tracking-wide mb-4">Visit us</p>
//         <h2 className="font-display text-3xl md:text-4xl leading-tight text-hero-dark">
//           5 branches across Malappuram
//         </h2>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {branches.map((branch) => (
//           <div
//             key={branch.name}
//             className="bg-background rounded-lg p-5 border border-border-soft"
//           >
//             <p className="font-medium mb-1">{branch.name}</p>
//             <p className="text-foreground/50 text-xs mb-3">{branch.area}</p>
//             <p className="text-foreground/70 text-sm leading-relaxed mb-4">
//               {branch.address}
//             </p>
//             <a
//               href={getWhatsAppLink(`the ${branch.name} branch`)}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-sage text-sm font-medium"
//             >
//               Chat with this branch →
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
