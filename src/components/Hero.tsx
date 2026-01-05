import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-fence.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-3 md:px-4 py-2 mb-6 mt-16 md:mt-0 animate-fade-in">
            <span className="text-primary-foreground/90 text-sm md:text-sm font-bold whitespace-nowrap">
              economica • personalizzabile • veloce da installare
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-bold text-primary-foreground mb-4 animate-fade-in-up opacity-0 animation-delay-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <span className="block text-4xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">RECINZIONI DA GIARDINO</span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-primary-foreground/90 mt-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">AL MIGLIOR PREZZO DEL MERCATO</span>
          </h1>

          <p className="inline-block font-display text-xl md:text-3xl text-primary-foreground font-semibold mb-8 animate-fade-in-up opacity-0 animation-delay-200 bg-foreground/40 backdrop-blur-sm px-6 py-3 rounded-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            Modulari e Personalizzabili
          </p>

          {/* Features List */}
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 animate-fade-in-up opacity-0 animation-delay-300">
            {[
              "Facile da installare",
              "Design moderno ed esclusivo",
              "3 differenti colori",
              "Nessuna manutenzione"
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-2 bg-foreground/30 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-accent rounded-full" />
                <span className="font-bold text-primary-foreground text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-400">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToContact}
              className="btn-glow"
            >
              Richiedi Preventivo Gratuito
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById("prodotti")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary-foreground/10 backdrop-blur-sm"
            >
              Scopri i Prodotti
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-up opacity-0 animation-delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">4.94/5</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Valutazione</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">2.783+</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Clienti</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">20+</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Anni</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => document.getElementById("vantaggi")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
