import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TaglineStrip from "@/components/TaglineStrip";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductShowcase from "@/components/ProductShowcase";
import Branches from "@/components/Branches";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TaglineStrip />
        <TrustStrip />
        <About />
        <StatsBar />
        <WhyChooseUs />
        <ProductShowcase />
        <Branches />
        <Footer />
      </main>
    </>
  );
}
