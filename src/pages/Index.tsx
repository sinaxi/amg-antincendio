import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import TargetAudience from "@/components/TargetAudience";
import Gallery from "@/components/Gallery";
import UseCases from "@/components/UseCases";
import WhyWPC from "@/components/WhyWPC";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <ProductShowcase />
      <TargetAudience />
      <Gallery />
      <UseCases />
      <WhyWPC />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
