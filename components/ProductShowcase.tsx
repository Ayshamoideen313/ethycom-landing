import { getWhatsAppLink } from "@/lib/whatsapp";

// Replace image URLs with real product photos once the client shares them.
const products = [
  {
    name: "Living room sofas",
    image:"https://www.lakdi.com/cdn/shop/files/111822116_3S_new_onee_1.png?v=1788773824&width=2000"
    ,// "https://ii1.pepperfry.com/media/catalog/product/f/r/494x544/frejol-velvet-3-seater-sofa-in-cream-colour-frejol-velvet-3-seater-sofa-in-cream-colour-fplkj3.jpg"
    color: "sage" as const,
  },
  {
    name: "Bedroom sets",
    image:"https://images.woodenstreet.de/image/data%2FLooks%2Fdone.jpg",
    color: "slate" as const,
  },
  {
    name: "Dining sets",
    image:"https://www.storieshomes.com/cdn/shop/files/TRFUDIDTST11889.jpg",
    // "https://krishnafurniture.com/cdn/shop/files/1_01673411-1268-48bc-8f1b-47f9a016168f.jpg?v=1772783659&width=1400",

     
    color: "sage" as const,
  },
  {
    name: "Home electronics",
    image:"https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg",
      // "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400&auto=format&fit=crop",
    color: "slate" as const,
  },
  {
    name: "Wardrobes & storage",
    image:"https://imagecdn.99acres.com//microsite/wp-content/blogs.dir/6161/files/2023/08/Wall-to-wall-wardrobe-with-inbuilt-dressing-table.jpg",
      // "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop",
    color: "sage" as const,
  },
  {
    name: "Kitchen appliances",
    image:"https://www.milton.in/cdn/shop/files/81a3pK0NVWL._SL1500.jpg?v=1757744403&width=1500",
      // "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
    color: "slate" as const,
  },
  {
    name: "Home appliances",
    image:"https://4.imimg.com/data4/FF/WR/MY-20761761/home-appliances.jpg",
      // "https://images.unsplash.com/photo-1630699144306-e5af29b5c236?q=80&w=400&auto=format&fit=crop",
    color: "sage" as const,
  },
  {
    name: "Curtains",
    image:"https://cdn.shopify.com/s/files/1/0726/7182/2131/files/A_bright_modern_American_living_room_showcasing_the_elegance_of_minimalist_curtain_styling._Large_windows_are_dressed_with_sleek_floor-length_curtain_panels_in_a_soft_neutral_fabric_h.png?v=1777113373",
      // "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=400&auto=format&fit=crop",
    color: "sage" as const,
  },
  {
    name: "Inverters & batteries",
    image:"https://5.imimg.com/data5/TB/AU/MY-1815770/luminous-inverters-and-batteries.jpg",
      // "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=400&auto=format&fit=crop",
    color: "slate" as const,
  },
  {
    name: "Pump sets",
    image:"https://pilottools.in/cdn/shop/files/pilot27jan_62-resized_1051x700.png?v=1758525591",
      // "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=400&auto=format&fit=crop",
    color: "sage" as const,
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-xl mb-12">
        <p className="text-sage text-md  tracking-wide mb-4 font-bold">
          Our range
        </p>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4 text-hero-dark">
          Tap a category to enquire
        </h2>
        <p className="text-foreground/60 text-sm leading-relaxed">
          From individual pieces to complete room setups — every category
          opens a WhatsApp chat with our team for prices, availability, or
          EMI terms.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
        {products.map((product) => (
          <a
            key={product.name}
            href={getWhatsAppLink(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden ring-2 ring-offset-4 ring-offset-background transition-all mb-3 ${
                product.color === "sage"
                  ? "ring-sage/30 group-hover:ring-sage"
                  : "ring-slate/30 group-hover:ring-slate"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-bold text-xs md:text-sm leading-snug">
              {product.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
// import { getWhatsAppLink } from "@/lib/whatsapp";

// // Replace image URLs with real product photos once the client shares them.
// // Keep the same shape: name, category, image.
// const products = [
//   {
//     name: "Living room sofas",
//     image:
//       "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Bedroom sets",
//     image:
//       "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Dining sets",
//     image:
//       "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Home electronics",
//     image:
//       "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Wardrobes & storage",
//     image:
//       "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//     name: "Kitchen appliances",
//     image:
//       "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop",
//   },
//   {
//   name: "Curtains",
//   image:
//     "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
// },
// {
//   name: "Inverters & batteries",
//   image:
//     "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800&auto=format&fit=crop",
// },
// {
//   name: "Pump sets",
//   image:
//     "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop",
// },
// ];

// export default function ProductShowcase() {
//   return (
//     <section id="products" className="px-6 md:px-12 py-16 md:py-24">
//       <div className="max-w-xl mb-12">
//         <p className="text-slate  font-bold text-md tracking-wide mb-4">What we offer</p>
//         <h2 className="font-display text-3xl font-bold  md:text-4xl leading-tight mb-4 text-hero-dark">
//           Tap a category to enquire
//         </h2>
//         <p className="text-foreground/60 text-sm leading-relaxed">
//           Every image opens a WhatsApp chat with our team — ask about prices,
//           availability, or EMI terms directly.
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
//         {products.map((product) => (
//           <a
//             key={product.name}
//             href={getWhatsAppLink(product.name)}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group block"
//           >
//             <div className="aspect-[4/5] rounded-lg overflow-hidden bg-card mb-3">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <span className="font-medium text-sm">{product.name}</span>
//               <span className="text-xs text-sage">Enquire →</span>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }
