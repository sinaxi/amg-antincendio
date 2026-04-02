import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import TargetAudience from "@/components/TargetAudience";
import Gallery from "@/components/Gallery";
import UseCases from "@/components/UseCases";
import WhyWPC from "@/components/WhyWPC";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import MapLocation from "@/components/MapLocation";
import Footer from "@/components/Footer";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <ProductShowcase />
      <TargetAudience />
      <Gallery />
      <UseCases />
      <WhyWPC />
      <FAQ />
      <ContactForm />
      <MapLocation />
      <Footer />
      <StickyFooter />
    </main>
  );
};

export default Index;
