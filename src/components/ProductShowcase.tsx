import { Button } from "@/components/ui/button";
import fence1 from "@/assets/fence-gallery-1.webp";
import fence2 from "@/assets/fence-gallery-2.webp";
import fence3 from "@/assets/fence-gallery-3.webp";
import fence4 from "@/assets/fence-gallery-4.webp";

const ProductShowcase = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="prodotti" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Grid */}
          <figure className="grid grid-cols-2 gap-4">
            <img 
              src={fence1} 
              alt="Recinzione modulare WPC marrone per giardino privato - installazione fai da te" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated"
              loading="lazy"
            />
            <img 
              src={fence2} 
              alt="Pannelli fence WPC design moderno per staccionata personalizzabile" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated mt-8"
              loading="lazy"
            />
            <img 
              src={fence3} 
              alt="Fence WPC per privacy giardino e divisorio esterno casa" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated"
              loading="lazy"
            />
            <img 
              src={fence4} 
              alt="Recinzione modulare WPC resistente per delimitazione spazi esterni" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated mt-8"
              loading="lazy"
            />
          </figure>

          {/* Right Side - Content */}
          <article>
            <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
              Design & Qualità Recinzioni
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Staccionate e Recinzioni Giardino dal Design Moderno
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Trasforma il tuo giardino con una recinzione modulare in WPC DAGEM di <strong className="text-foreground">RecinzioniPro</strong>. 
              Crea uno spazio privato e protetto con fence personalizzabili, lontano dagli sguardi curiosi.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Recinzioni casa eleganti e destinate a durare in eterno, in grado di resistere a vento, sole e intemperie, 
              <strong className="text-foreground"> senza bisogno di manutenzione</strong>. Facile da installare, personalizzabile 
              e resistente, è la soluzione perfetta per aggiungere stile e privacy al tuo giardino.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Modulare su misura</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Personalizzabile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Privacy totale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Duratura nel tempo</span>
              </div>
            </div>

            <Button variant="hero" size="xl" onClick={scrollToContact} aria-label="Richiedi preventivo gratuito per recinzioni giardino">
              Richiedi Preventivo Gratuito
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
