import { Home, Building2, Eye, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Home,
    title: "Per Privati",
    description: "Ideale per recintare piccoli spazi privati come giardini, piscine, caseggiati, villette e tanto altro"
  },
  {
    icon: Building2,
    title: "Per Aziende",
    description: "Per recintare con eleganza aziende di produzione, industrie, sedi operative, parchi auto e parcheggi"
  },
  {
    icon: Eye,
    title: "Privacy",
    description: "Ideale per creare zone di privacy nei confini con i vicini o con strade limitrofe"
  },
  {
    icon: Trees,
    title: "Ambienti",
    description: "Crea zone operative o aree delimitate nel tuo giardino o nel tuo cortile"
  }
];

const UseCases = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-foreground/80 font-semibold mb-4 uppercase tracking-wider text-sm">
            Applicazioni Recinzioni Modulari
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Recinzioni e Fence Personalizzabili per Ogni Esigenza
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Staccionate e pannelli modulari su misura con doghe in WPC per giardino, casa e azienda - privacy totale garantita
          </p>
        </header>

        {/* Use Cases Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-6 rounded-xl text-center hover:bg-primary-foreground/30 hover:shadow-lg hover:shadow-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {useCase.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToContact}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Contattaci per Informazioni
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
