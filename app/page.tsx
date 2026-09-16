import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductShowcase from "@/components/ProductShowcase";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <About />
      <StatsBar />
      <WhyChooseUs />
      <ProductShowcase />
      <Branches />
      <Footer />
    </main>
  );
}
