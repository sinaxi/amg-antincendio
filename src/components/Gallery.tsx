import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Recinzione WPC grigia con giardino e casa toscana sullo sfondo" },
  { src: gallery2, alt: "Recinzione WPC grigia lungo giardino con paesaggio collinare toscano" },
  { src: gallery3, alt: "Recinzione WPC a doghe grigie su strada residenziale italiana" },
  { src: gallery4, alt: "Recinzione WPC effetto legno naturale con casale in pietra" },
  { src: gallery5, alt: "Recinzione WPC antracite su abitazione con piante e vasi in terracotta" },
  { src: gallery6, alt: "Recinzione WPC effetto legno con giardino fiorito e casale rustico" },
];

const Gallery = () => {
  return (
    <section id="galleria" className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Galleria recinzioni
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Lasciati ispirare dalle nostre recinzioni
          </h2>
          <p className="text-muted-foreground text-lg">
            Scopri le nostre realizzazioni di fence e staccionate per giardino e trova ispirazione per trasformare il tuo spazio esterno
          </p>
        </header>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
