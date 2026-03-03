import { Button } from "@/components/ui/button";
import showcase1 from "@/assets/showcase-1.jpg";
import showcase2 from "@/assets/showcase-2.jpg";
import showcase3 from "@/assets/showcase-3.jpg";
import showcase4 from "@/assets/showcase-4.jpg";

const showcaseImages = [
  { src: showcase1, alt: "Recinzione WPC grigia lungo giardino residenziale con prato e oleandri" },
  { src: showcase2, alt: "Recinzione WPC marrone in giardino toscano con ulivi e vigneto" },
  { src: showcase3, alt: "Recinzione WPC grigia con casa toscana, lavanda e ulivi" },
  { src: showcase4, alt: "Recinzione WPC effetto legno naturale lungo viale con cipressi" },
];

const ProductShowcase = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="prodotti" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Top - Image Grid */}
        <div className="mb-12 text-center">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Recinzioni fence modulari
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluzioni personalizzabili e modulari
          </h2>
          {/* Desktop: 4 col grid / Mobile: horizontal scroll */}
          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {showcaseImages.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className="rounded-xl shadow-lg w-[75vw] min-w-[75vw] md:w-full md:min-w-0 h-56 md:h-80 object-cover card-elevated snap-center"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Bottom - Content */}
        <article className="text-center bg-secondary/50 rounded-3xl py-16 px-6 md:px-12 mt-8">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Design & qualità recinzioni
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Staccionate e recinzioni giardino dal design moderno
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-4xl mx-auto">
            Trasforma il tuo giardino con una recinzione modulare in WPC DAGEM di <strong className="text-foreground">RecinzioniPro</strong>. 
            Crea uno spazio privato e protetto con fence personalizzabili, lontano dagli sguardi curiosi. 
            Recinzioni casa eleganti e destinate a durare in eterno, in grado di resistere a vento, sole e intemperie, 
            <strong className="text-foreground"> senza bisogno di manutenzione</strong>. Facile da installare, personalizzabile 
            e resistente, è la soluzione perfetta per aggiungere stile e privacy al tuo giardino.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-items-center">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Modulare su misura</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Personalizzabile</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Privacy totale</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Duratura nel tempo</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="hero" size="xl" onClick={scrollToContact} aria-label="Richiedi preventivo gratuito per recinzioni giardino">
              Richiedi Preventivo Gratuito
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductShowcase;
