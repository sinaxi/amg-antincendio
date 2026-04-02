import {
  Factory,
  Building2,
  Hotel,
  ShoppingBag,
  Hospital,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Factory,
    title: "Strutture industriali e manifatturiere",
    description:
      "Rilevazione, spegnimento e percorsi di evacuazione conformi, con manutenzione programmata per stabilimenti e linee produttive.",
  },
  {
    icon: Building2,
    title: "Uffici, centri direzionali e data center",
    description:
      "Centrali, rilevatori, segnaletica e continuità operativa: sicurezza per occupanti, visitatori e infrastrutture critiche IT.",
  },
  {
    icon: Hotel,
    title: "Strutture ricettive e alberghiere",
    description:
      "Soluzioni su misura per alberghi e hospitality: affluenza elevata, normative specifiche e assistenza dedicata.",
  },
  {
    icon: ShoppingBag,
    title: "Centri commerciali",
    description:
      "Protezione antincendio per GDO e grandi superfici: impianti, uscite di sicurezza e compliance per il pubblico.",
  },
  {
    icon: Hospital,
    title: "Ospedali e strutture sanitarie",
    description:
      "Massima affidabilità per ambienti critici: reparti, percorsi evacuazione e standard sanitari rigorosi.",
  },
  {
    icon: GraduationCap,
    title: "Scuole e università",
    description:
      "Sicurezza per studenti, docenti e visitatori: impianti e procedure adatte a istituti e campus universitari.",
  },
];

const UseCases = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary-foreground/80 font-semibold mb-4 uppercase tracking-wider text-sm">
            Che tipo di clienti trattiamo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Settori in cui operiamo con successo
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            AMG Sistemi collabora con realtà di ogni dimensione: dalla produzione al terziario, dalla GDO alla sanità e alla formazione, con servizi integrati e assistenza dedicata.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-6 rounded-xl text-center hover:bg-primary-foreground/30 hover:shadow-lg hover:shadow-primary-foreground/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <useCase.icon className="w-8 h-8 text-primary-foreground" aria-hidden />
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold mb-3 leading-snug">
                {useCase.title}
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>

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
