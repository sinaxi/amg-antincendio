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
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={fence1} 
              alt="Recinzione WPC giardino marrone" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated"
            />
            <img 
              src={fence2} 
              alt="Pannello recinzione WPC design moderno" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated mt-8"
            />
            <img 
              src={fence3} 
              alt="Fence WPC per privacy giardino" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated"
            />
            <img 
              src={fence4} 
              alt="Recinzione modulare WPC esterno" 
              className="rounded-xl shadow-lg w-full h-48 object-cover card-elevated mt-8"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <span className="inline-block text-accent font-semibold mb-4 uppercase tracking-wider text-sm">
              Design & Qualità
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Recinzioni dal Design Moderno Adatte ad Ogni Spazio
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Trasforma il tuo giardino con una recinzione in WPC DAGEM di <strong className="text-foreground">RecinzioniPro</strong>. 
              Crea uno spazio privato e protetto, lontano dagli sguardi curiosi.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Recinzioni eleganti e destinate a durare in eterno, in grado di resistere a vento, sole e intemperie, 
              <strong className="text-foreground"> senza bisogno di manutenzione</strong>. Facile da installare, personalizzabile 
              e resistente, è la soluzione perfetta per aggiungere stile e privacy al tuo giardino.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Modulare su misura</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Personalizzabile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Privacy totale</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent text-lg">✓</span>
                </div>
                <span className="text-foreground font-medium">Duratura nel tempo</span>
              </div>
            </div>

            <Button variant="cta" size="xl" onClick={scrollToContact}>
              Richiedi Preventivo Gratuito
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
