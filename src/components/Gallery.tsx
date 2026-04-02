const images = [
  {
    src: "/gallery-amg-soluzioni-antincendio-1.jpg",
    alt: "AMG Sistemi — soluzione antincendio su impianto e contesto strutturale",
  },
  {
    src: "/gallery-amg-soluzioni-antincendio-2.jpg",
    alt: "AMG Sistemi — progetto sicurezza e conformità normativa",
  },
  {
    src: "/gallery-amg-soluzioni-antincendio-3.jpg",
    alt: "AMG Sistemi — installazione componenti rilevazione e protezione",
  },
  {
    src: "/gallery-amg-soluzioni-antincendio-4.jpg",
    alt: "AMG Sistemi — intervento su struttura con esigenze antincendio",
  },
  {
    src: "/gallery-amg-soluzioni-antincendio-5.jpg",
    alt: "AMG Sistemi — dettaglio impianto in ambiente commerciale o produttivo",
  },
  {
    src: "/gallery-amg-soluzioni-antincendio-6.jpeg",
    alt: "AMG Sistemi — manutenzione, verifica e assistenza su sistemi di sicurezza",
  },
];

const Gallery = () => {
  return (
    <section id="galleria" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Progetti su misura
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Esperienza sul tutto il territorio
          </h2>
          <p className="text-muted-foreground text-lg">
            Alcuni ambiti in cui AMG Sistemi affianca clienti con impianti, manutenzione e assistenza continua — dalla
            rilevazione allo spegnimento, fino a porte tagliafuoco e uscite di sicurezza.
          </p>
        </header>

        {/* Griglia 3+3: 2 colonne su mobile, 3 su md+ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-square">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
