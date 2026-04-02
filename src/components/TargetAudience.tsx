import { Wrench, DoorOpen, Warehouse, Check } from "lucide-react";

const programmazioneItems = [
  "Controlli periodici secondo normativa",
  "Revisione e collaudo degli impianti",
  "Sostituzione componenti usurati",
  "Aggiornamento tecnologico dei sistemi",
  "Reportistica dettagliata degli interventi",
];

const industrialItems = [
  "Posa e installazione, riparazione e manutenzione",
  "Assistenza",
];

const TargetAudience = () => {
  return (
    <section id="servizi" className="scroll-mt-28 md:scroll-mt-32 pt-4 md:pt-6 pb-12 md:pb-20 bg-background" aria-labelledby="servizi-heading">
      <div className="container mx-auto px-4">
        <header className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 id="servizi-heading" className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-wide uppercase">
            I Nostri servizi
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Manutenzione programmata */}
          <article className="bg-secondary p-6 md:p-8 rounded-2xl card-elevated h-full flex flex-col">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Wrench className="w-7 h-7 text-primary" aria-hidden />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">Manutenzione</span>
              <span className="block">programmata</span>
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
              {programmazioneItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Porte tagliafuoco e uscite */}
          <article className="bg-secondary p-6 md:p-8 rounded-2xl card-elevated h-full flex flex-col">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <DoorOpen className="w-7 h-7 text-primary" aria-hidden />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 leading-tight">
              <span className="block">Porte tagliafuoco</span>
              <span className="block">e uscite di sicurezza</span>
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
              {programmazioneItems.map((item, i) => (
                <li key={`porte-${i}`} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Porte industriali, rapide, tende */}
          <article className="bg-secondary p-6 md:p-8 rounded-2xl card-elevated h-full flex flex-col">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <Warehouse className="w-7 h-7 text-primary" aria-hidden />
            </div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
              Porte industriali, Porte Rapide e Tende Tagliafuoco
            </h3>
            <p className="text-foreground font-semibold text-sm md:text-base mb-4">
              Il servizio include:
            </p>
            <ul className="space-y-3 text-muted-foreground text-sm md:text-base leading-relaxed flex-1">
              {industrialItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
