import { Check } from "lucide-react";

const advantages = [
  "Materiale di nuova generazione con performance superiori",
  "Non richiede manutenzione, a differenza del legno naturale",
  "Resistente agli agenti atmosferici e alle intemperie",
  "Non necessita di verniciatura periodica",
  "Mantiene integrità e aspetto nel tempo",
  "Ecologico e riciclabile al 100%",
  "Resistente a muffe, insetti e umidità",
  "Facile da pulire con acqua e sapone"
];

const WhyWPC = () => {
  return (
    <section id="wpc" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Il Materiale
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perché Scegliere il WPC?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Il WPC (Wood Plastic Composite) è un materiale composito che unisce la bellezza naturale del legno 
            con la durabilità e praticità dei polimeri moderni.
          </p>

          {/* Advantages Grid */}
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-12">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 bg-card p-4 rounded-lg card-elevated"
              >
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{advantage}</span>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Oltre 2.783 Clienti in Italia
            </h3>
            <p className="text-primary-foreground/80 mb-8">
              Hanno già scelto le nostre recinzioni e pannelli personalizzati per giardino e outdoor
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">98%</div>
                <div className="text-primary-foreground/70 text-sm">Tasso Soddisfazione</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">20+</div>
                <div className="text-primary-foreground/70 text-sm">Anni Esperienza</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">5★</div>
                <div className="text-primary-foreground/70 text-sm">Recensioni</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWPC;
