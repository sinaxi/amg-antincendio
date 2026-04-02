import { Check } from "lucide-react";

const advantages = [
  "Azienda leader nel settore dei sistemi antincendio con soluzioni complete e all'avanguardia",
  "Team di tecnici altamente qualificati per progettazione, installazione e manutenzione",
  "Servizi personalizzati che rispettano le normative vigenti e i più alti standard di sicurezza",
  "Impianti di rilevazione: fumo, calore, centrali, rilevatori ottici, termici e multicriterio",
  "Allarme acustico e visivo e integrazione con altri sistemi di sicurezza",
  "Estintori, impianti a schiuma, polvere, CO2, gas inerti e reti idriche antincendio",
  "Manutenzione programmata: controlli, collaudi, sostituzione componenti e reportistica",
  "Porte tagliafuoco, uscite di sicurezza, porte industriali, porte rapide e tende tagliafuoco"
];

const WhyWPC = () => {
  return (
    <section id="wpc" className="pt-28 md:pt-36 pb-20 md:pb-28 bg-muted">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Chi siamo
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Perché scegliere AMG Sistemi?
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Proteggere le vostre attività con sistemi antincendio avanzati, progettati su misura e conformi alle normative di sicurezza, 
            garantendo affidabilità, compliance e assistenza continua.
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
          <aside className="bg-primary rounded-2xl p-8 md:p-12">
            <p className="text-primary-foreground/80 mb-8 text-lg md:text-xl leading-relaxed">
              Siamo pronti a offrirvi una consulenza gratuita per valutare le esigenze di protezione antincendio, con sopralluoghi e preventivi personalizzati sulla vostra attività.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">100+</div>
                <div className="text-primary-foreground/70 text-sm">Progetti completati</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">h24</div>
                <div className="text-primary-foreground/70 text-sm">Assistenza tecnica</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-foreground">20+</div>
                <div className="text-primary-foreground/70 text-sm">Anni nel settore</div>
              </div>
            </div>
          </aside>
        </article>
      </div>
    </section>
  );
};

export default WhyWPC;
