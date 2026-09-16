import { getWhatsAppLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Phone } from "lucide-react";

const YOUTUBE_URL = "https://www.youtube.com/@ethycom.furnish";
const INSTAGRAM_URL = "https://www.instagram.com/ethycom.furnish/";
const FACEBOOK_URL = "https://www.facebook.com/ethycom.furnish/";

const socialLinks = [
  { icon: FaInstagram, url: INSTAGRAM_URL, label: "Instagram", color: "#E1306C" },
  { icon: FaFacebookF, url: FACEBOOK_URL, label: "Facebook", color: "#1877F2" },
  { icon: FaYoutube, url: YOUTUBE_URL, label: "YouTube", color: "#FF0000" },
  { icon: FaWhatsapp, url: getWhatsAppLink(), label: "WhatsApp", color: "#25D366" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#footer" },
];

// TODO: replace these two with real Google review links from the client
const reviewLinks = [
  { branch: "Kondotty", url: "https://g.page/r/CSjZ0z0KztasEBM/review" },
  { branch: "Edavanna", url: "https://g.page/r/Cc9iLVKV6mU7EBM/review" },
  { branch: "Kottakkal", url: "https://g.page/r/CWopHrmtS5YKEBM/review" },
  { branch: "Puthanathani", url: "https://ethycom.com/" },
  { branch: "Tirur", url: "https://ethycom.com/" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-hero-dark px-6 md:px-12 py-14 md:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
        {/* Brand + social */}
        <div>
          <img
            src="/logo-ethycom.webp"
            alt="Ethycom"
            width={120}
            height={40}
            className="object-contain mb-4 rounded-lg p-1.5 bg-white"
          />
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            13/391 Near Muthuvallur Town, Jumamasjid, Muthuvallur, Malappuram,
            Kerala – 673641
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50 hover:scale-110 transition-all"
                >
                  <Icon
                    className="w-4 h-4"
                    style={{ color: social.color }}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-bold text-sm mb-4 text-white">Quick Links</p>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Shop hours */}
        <div>
          <p className="font-bold text-sm mb-4 text-white">Shop Hours</p>
          <p className="text-white/60 text-sm leading-relaxed">
            Mon – Sun
            <br />
            9:00 AM – 9:00 PM
          </p>
        </div>

        {/* Get in touch */}
        <div>
          <p className="font-bold text-sm mb-4 text-white">Get in Touch</p>
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 text-white/60 text-sm mb-4 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" strokeWidth={2} />
            +91 92072 86777
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sage text-background rounded-md px-5 py-2.5 text-sm font-bold hover:bg-sage-dark transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Rate us on Google, per branch */}
      <div className="mb-10">
        <p className="font-bold text-sm mb-4 text-white">
          Rate Us on Google
        </p>
        <div className="flex flex-wrap gap-3">
          {reviewLinks.map((review) =>
            review.url ? (
              <a
                key={review.branch}
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs text-white/70 hover:border-white/50 hover:text-white transition-colors"
              >
                <FcGoogle className="w-3 h-3" />
                {review.branch}
              </a>
            ) : (
              <span
                key={review.branch}
                className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-xs text-white/30 cursor-not-allowed"
                title="Review link not available yet"
              >
                <FcGoogle className="w-3 h-3" />
                {review.branch}
              </span>
            )
          )}
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/40">
        <span>© 2025–2026 Ethycom. All rights reserved.</span>
        <span>GST: 32AALFC3960E1ZP</span>

      </div>
    </footer>
  );
}


// import { getWhatsAppLink } from "@/lib/whatsapp";
// import { MessageCircle } from "lucide-react";
// import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

// // TODO: replace with Ethycom's real YouTube channel URL
// const YOUTUBE_URL = "https://www.youtube.com/@ethycom";
// const INSTAGRAM_URL = "https://www.instagram.com/ethycom.furnish/";
// const FACEBOOK_URL = "https://www.facebook.com/ethycom.furnish/";

// const socialLinks = [
//   { icon: FaInstagram, url: INSTAGRAM_URL, label: "Instagram", color: "#E1306C" },
//   { icon: FaFacebookF, url: FACEBOOK_URL, label: "Facebook", color: "#1877F2" },
//   { icon: FaYoutube, url: YOUTUBE_URL, label: "YouTube", color: "#FF0000" },
//   { icon: FaWhatsapp, url: getWhatsAppLink(), label: "WhatsApp", color: "#25D366" },
// ];

// export default function Footer() {
//   return (
//     <footer id="footer" className="px-6 md:px-12 py-14 md:py-16">
//       <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
//         <div>
//           <img
//             src="/logo-ethycom.webp"
//             alt="Ethycom"
//             width={120}
//             height={40}
//             className="object-contain mb-4"
//           />
//           <p className="text-foreground/60 text-sm leading-relaxed mb-5">
//             13/391 Near Muthuvallur Town, Jumamasjid, Muthuvallur, Malappuram,
//             Kerala – 673641
//           </p>
//           <div className="flex items-center gap-3">
//             {socialLinks.map((social) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={social.label}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="w-9 h-9 rounded-full border border-border-soft flex items-center justify-center hover:border-sage hover:text-sage transition-colors"
//                 >
//                   <Icon className="w-4 h-4" style={{ color: social.color }} strokeWidth={1.75} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         <div>
//           <p className="font-medium text-sm mb-4">Shop hours</p>
//           <p className="text-foreground/60 text-sm leading-relaxed">
//             Mon – Sun: 9:00 AM – 9:00 PM
//           </p>
//         </div>

//         <div>
//           <p className="font-medium text-sm mb-4">Get in touch</p>
//           <a
//             href={getWhatsAppLink()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-sage text-background rounded-md px-5 py-2.5 text-sm hover:bg-sage-dark transition-colors"
//           >
//             Chat on WhatsApp
//           </a>
//         </div>
//       </div>

//       <div className="border-t border-border-soft pt-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-foreground/50">
//         <span>© 2025–2026 Ethycom. All rights reserved.</span>
//         <span>GST: 32AALFC3960E1ZP</span>
//       </div>
//     </footer>
//   );
// }
