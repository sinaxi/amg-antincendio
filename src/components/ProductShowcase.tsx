import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const showcaseImages = [
  {
    src: "/soluzioni-personalizzate-antincendio-1.png",
    alt: "AMG Sistemi — soluzioni antincendio personalizzate (1)",
  },
  {
    src: "/soluzioni-personalizzate-antincendio-2.jpg",
    alt: "AMG Sistemi — soluzioni antincendio personalizzate (2)",
  },
  {
    src: "/soluzioni-personalizzate-antincendio-3.jpg",
    alt: "AMG Sistemi — soluzioni antincendio personalizzate (3)",
  },
  {
    src: "/soluzioni-personalizzate-antincendio-4.jpg",
    alt: "AMG Sistemi — soluzioni antincendio personalizzate (4)",
  },
];

const AUTO_SCROLL_MS = 4200;
const MD_BREAKPOINT = 768;

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const slideIndexRef = useRef(0);

  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const isMobile = () => window.innerWidth < MD_BREAKPOINT;

    let sectionVisible = false;
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        sectionVisible = Boolean(e?.isIntersecting && e.intersectionRatio > 0.12);
      },
      { threshold: [0, 0.12, 0.25, 0.5, 1] }
    );
    io.observe(el);

    const scrollCarouselToIndex = (container: HTMLDivElement, index: number) => {
      const slides = container.querySelectorAll<HTMLElement>("[data-showcase-slide]");
      const slide = slides[index];
      if (!slide) return;

      const cRect = container.getBoundingClientRect();
      const sRect = slide.getBoundingClientRect();
      const slideCenter = sRect.left + sRect.width / 2;
      const containerCenter = cRect.left + cRect.width / 2;
      const delta = slideCenter - containerCenter;
      const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth);
      const nextLeft = Math.max(0, Math.min(container.scrollLeft + delta, maxScroll));
      container.scrollTo({ left: nextLeft, behavior: "smooth" });
    };

    const tick = () => {
      if (!isMobile() || !sectionVisible) return;
      const slides = el.querySelectorAll<HTMLElement>("[data-showcase-slide]");
      if (slides.length === 0) return;
      slideIndexRef.current = (slideIndexRef.current + 1) % slides.length;
      scrollCarouselToIndex(el, slideIndexRef.current);
    };

    const id = window.setInterval(tick, AUTO_SCROLL_MS);
    return () => {
      io.disconnect();
      window.clearInterval(id);
    };
  }, []);

  return (
    <section id="prodotti" className="pt-20 md:pt-28 pb-10 md:pb-14 bg-background">
      <div className="container mx-auto px-4">
        {/* Top - Image Grid */}
        <div className="mb-12 text-center">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            La tua sicurezza è la nostra missione
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluzioni personalizzate su misura
          </h2>
          {/* Desktop: 4 col grid / Mobile: horizontal scroll */}
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scroll-smooth"
          >
            {showcaseImages.map((image, index) => (
              <div
                key={index}
                data-showcase-slide
                className="group rounded-xl overflow-hidden border border-foreground/12 shadow-lg snap-center snap-always w-[75vw] min-w-[75vw] md:w-full md:min-w-0 transition-all duration-300 ease-out hover:border-foreground/22 hover:shadow-2xl hover:shadow-black/20 md:hover:-translate-y-0.5"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-56 md:h-80 w-full object-cover transition-all duration-300 ease-out group-hover:brightness-[1.08] group-hover:contrast-[1.03]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom - Content */}
        <article className="text-center bg-secondary/50 rounded-3xl py-16 px-6 md:px-12 mt-8">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Perché AMG Sistemi
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Sistemi avanzati conformi alle normative di sicurezza
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-4xl mx-auto">
            Proteggiamo le vostre attività con impianti antincendio progettati su misura: dalla <strong className="text-foreground">rilevazione</strong> allo 
            <strong className="text-foreground">spegnimento</strong>, dalla <strong className="text-foreground">manutenzione programmata</strong> a porte tagliafuoco e 
            uscite di sicurezza. <strong className="text-foreground">AMG Sistemi</strong> è il partner unico per consulenza, installazione e assistenza.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8 justify-items-center">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Progetti su misura</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Normative aggiornate</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Assistenza h24</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">✓</span>
              </div>
              <span className="text-foreground font-medium">Report e tracciabilità</span>
            </div>
          </div>

          <div className="flex justify-center">
            <Button variant="hero" size="xl" onClick={scrollToContact} aria-label="Richiedi preventivo gratuito per soluzioni antincendio">
              Richiedi Preventivo Gratuito
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ProductShowcase;
