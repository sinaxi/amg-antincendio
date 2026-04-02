import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const heroBackgroundUrl = "/soluzioni-professionali-antincendio.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden md:pt-24 lg:pt-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-neutral-950 bg-center bg-no-repeat bg-contain md:bg-cover"
        style={{ backgroundImage: `url(${heroBackgroundUrl})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 md:px-4 text-center pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-display font-bold text-primary-foreground mb-4 mt-28 md:mt-16 lg:mt-20 animate-fade-in-up opacity-0 animation-delay-100 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] leading-[1.1] md:leading-tight">
              <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                SOLUZIONI ANTINCENDIO{" "}
              </span>
              <span className="font-light tracking-[0.1em] text-4xl sm:text-5xl md:text-5xl lg:text-6xl">
                PROFESSIONALI
              </span>
            </span>
          </h1>

          <p className="block w-full max-w-xl mx-auto font-display text-base sm:text-lg md:text-2xl lg:text-[1.6875rem] text-primary-foreground font-medium tracking-tight mb-8 animate-fade-in-up opacity-0 animation-delay-200 bg-foreground/40 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-2xl md:rounded-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] text-balance leading-snug">
            Progetti su misura, conformi alle normative vigenti
          </p>

          {/* Features List: 2×2 su mobile, una riga su md+ */}
          <ul className="grid grid-cols-2 gap-3 md:flex md:flex-nowrap md:justify-center md:gap-4 mb-10 animate-fade-in-up opacity-0 animation-delay-300 w-full max-w-md md:max-w-none mx-auto">
            {["Sistemi testati e certificati", "Compliance normativa", "Assistenza tecnica h24"].map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 bg-foreground/30 backdrop-blur-sm px-3 py-2 rounded-xl md:items-center md:rounded-full md:px-4 min-w-0"
              >
                <span className="w-2 h-2 bg-accent rounded-full shrink-0 mt-1.5 md:mt-0" aria-hidden />
                <span className="font-bold text-primary-foreground text-xs sm:text-sm md:text-base leading-snug md:leading-normal md:whitespace-nowrap text-left">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-400">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToContact}
              className="btn-glow hidden md:inline-flex"
            >
              Richiedi Preventivo Gratuito
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() =>
                document.getElementById("servizi")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="bg-primary-foreground/10 backdrop-blur-sm w-full sm:w-auto"
            >
              Scopri i Servizi
            </Button>
          </div>

          {/* Stats (solo tablet/desktop) */}
          <div className="hidden md:grid grid-cols-3 gap-8 mt-12 pt-8 pb-14 lg:pb-16 mb-10 md:mb-12 border-t border-primary-foreground/20 animate-fade-in-up opacity-0 animation-delay-500">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">100+</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Progetti</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">h24</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Assistenza</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-primary-foreground whitespace-nowrap">20+</div>
              <div className="text-primary-foreground/70 text-xs md:text-sm">Anni</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={() => document.getElementById("vantaggi")?.scrollIntoView({
      behavior: "smooth"
    })} className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-float">
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>;
};
export default Hero;
