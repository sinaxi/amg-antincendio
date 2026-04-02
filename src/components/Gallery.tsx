import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";

const images = [
  { src: gallery1, alt: "Realizzazione impiantistica — contesto strutturale e supervisione" },
  { src: gallery2, alt: "Progetto di sicurezza in ambiente residenziale e direzionale" },
  { src: gallery3, alt: "Installazione componenti per percorsi e delimitazioni sicure" },
  { src: gallery4, alt: "Intervento su struttura con esigenze di protezione e conformità" },
  { src: gallery5, alt: "Dettaglio impianto e ambienti commerciali" },
  { src: gallery6, alt: "Manutenzione e verifica in contesto edilizio" },
  { src: gallery7, alt: "Cantiere e allestimento sistemi di sicurezza" },
  { src: gallery8, alt: "Controllo accessi e sicurezza attiva sull'area" },
];

const Gallery = () => {
  return (
    <section id="galleria" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Le nostre realizzazioni
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Esperienza sul tutto il territorio
          </h2>
          <p className="text-muted-foreground text-lg">
            Alcuni ambiti in cui AMG Sistemi affianca clienti con impianti, manutenzione e assistenza continua — dalla rilevazione allo spegnimento, fino a porte tagliafuoco e uscite di sicurezza.
          </p>
        </header>

        {/* Gallery Grid - 2 cols mobile, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
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
