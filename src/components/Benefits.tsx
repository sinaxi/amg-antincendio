import { 
  Wrench, 
  Palette, 
  Droplets, 
  Sun, 
  Shield, 
  ThermometerSun,
  Volume2,
  Bug
} from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Facile Installazione",
    description: "Sistema modulare fai-da-te, installazione rapida senza bisogno di professionisti"
  },
  {
    icon: Palette,
    title: "3 Colori Disponibili",
    description: "Marrone, Smoke Grey e Verde per personalizzare il tuo spazio esterno"
  },
  {
    icon: Droplets,
    title: "Resistente all'Umidità",
    description: "Il WPC resiste a pioggia e umidità senza deformarsi o deteriorarsi"
  },
  {
    icon: Sun,
    title: "Resistente ai Raggi UV",
    description: "Colore stabile nel tempo, non sbiadisce con l'esposizione al sole"
  },
  {
    icon: Shield,
    title: "Zero Manutenzione",
    description: "Nessuna verniciatura richiesta, mantiene l'aspetto originale per anni"
  },
  {
    icon: ThermometerSun,
    title: "Isolante Termico",
    description: "Proprietà isolanti che proteggono dalle temperature estreme"
  },
  {
    icon: Volume2,
    title: "Isolante Acustico",
    description: "Riduce i rumori esterni per creare un'oasi di tranquillità"
  },
  {
    icon: Bug,
    title: "Resistente a Insetti",
    description: "Immune a tarli, muffe e insetti a differenza del legno naturale"
  }
];

const Benefits = () => {
  return (
    <section id="vantaggi" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Vantaggi recinzioni WPC
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Recinzioni e fence personalizzabili per ogni esigenza
          </h2>
          <p className="text-muted-foreground text-lg">
            Staccionate e pannelli modulari per giardino e casa, estremamente resistenti e disponibili in 3 colori per personalizzare i tuoi spazi esterni
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
