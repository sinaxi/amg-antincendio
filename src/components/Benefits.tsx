import { ShieldCheck, Scale, Headphones, Target } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Affidabilità",
    description: "Sistemi testati e certificati, con anni di attività nel settore della sicurezza antincendio e centinaia di progetti completati con successo."
  },
  {
    icon: Scale,
    title: "Compliance normativa",
    description: "Aggiornamento costante agli standard di sicurezza e continua innovazione dei sistemi, nel rispetto delle normative vigenti."
  },
  {
    icon: Headphones,
    title: "Assistenza continua",
    description: "Servizio di assistenza tecnica disponibile h24 per garantire interventi tempestivi quando servono."
  },
  {
    icon: Target,
    title: "Soluzioni personalizzate",
    description: "Ogni progetto è studiato su misura in base alle specifiche esigenze del cliente e del contesto operativo."
  }
];

const Benefits = () => {
  return (
    <section id="vantaggi" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            La tua sicurezza è la nostra missione
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Protezione antincendio completa per persone e beni
          </h2>
          <p className="text-muted-foreground text-lg">
            AMG Sistemi è un&apos;azienda leader nei sistemi antincendio: soluzioni all&apos;avanguardia, team di tecnici qualificati e servizi personalizzati conformi alle normative.
          </p>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card p-6 rounded-xl card-elevated cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2" itemProp="name">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
