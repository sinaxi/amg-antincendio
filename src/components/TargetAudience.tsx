import { Button } from "@/components/ui/button";
import { Briefcase, User } from "lucide-react";

const TargetAudience = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* For Professionals */}
          <div className="bg-secondary p-6 md:p-10 rounded-2xl card-elevated group hover:bg-primary transition-all duration-500 overflow-hidden">
            <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6 transition-colors">
              <Briefcase className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              Sei un Professionista?
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 leading-relaxed transition-colors">
              Unisciti alla nostra rete di professionisti e offri ai tuoi clienti prodotti di alta qualità per la privacy 
              e la protezione del giardino. Con la nostra recinzione innovativa, potrai soddisfare le richieste di una 
              clientela sempre più attenta al design e alla durata.
            </p>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="group-hover:border-primary-foreground group-hover:text-primary-foreground group-hover:hover:bg-primary-foreground/10 transition-colors"
            >
              Diventa Rivenditore o Installatore
            </Button>
          </div>

          {/* For Private */}
          <div className="bg-secondary p-6 md:p-10 rounded-2xl card-elevated group hover:bg-primary transition-all duration-500 overflow-hidden">
            <div className="w-16 h-16 bg-primary/10 group-hover:bg-primary-foreground/20 rounded-full flex items-center justify-center mb-6 transition-colors">
              <User className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary-foreground mb-4 transition-colors">
              Sei un Privato?
            </h3>
            <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-6 leading-relaxed transition-colors">
              Richiedi il nostro catalogo e scopri i prezzi più bassi del mercato! Offriamo prodotti di alta qualità 
              destinati a durare nel tempo, con una vasta gamma di colori per ogni esigenza. Se cerchi soluzioni 
              resistenti e stilose per il tuo giardino, contattaci!
            </p>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="group-hover:border-primary-foreground group-hover:text-primary-foreground group-hover:hover:bg-primary-foreground/10 transition-colors"
            >
              Richiedi il Catalogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
