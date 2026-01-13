import { useEffect, useRef } from "react";
import iconUmidita from "@/assets/icon-umidita.webp";
import iconUv from "@/assets/icon-uv.webp";
import iconPulire from "@/assets/icon-pulire.webp";
import iconPioggia from "@/assets/icon-pioggia.webp";
import iconInsetti from "@/assets/icon-insetti.webp";
import iconTermico from "@/assets/icon-termico.webp";
import iconAcustico from "@/assets/icon-acustico.webp";

const features = [
  { icon: iconUmidita, title: "Resistente all'umidità" },
  { icon: iconUv, title: "Resistente ai raggi UV" },
  { icon: iconPulire, title: "Facile da pulire" },
  { icon: iconPioggia, title: "Resistente alla pioggia" },
  { icon: iconInsetti, title: "Inattaccabile da insetti e muffe" },
  { icon: iconTermico, title: "Isolante termico" },
  { icon: iconAcustico, title: "Isolante acustico" },
];

const FeaturesSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPosition += speed;
      
      // Reset when we've scrolled through half the content (since content is duplicated)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Duplicate features for seamless infinite scroll
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="py-12 md:py-16 bg-muted overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 md:w-56 bg-card border-2 border-primary/30 rounded-2xl p-6 flex flex-col items-center text-center"
          >
            <img 
              src={feature.icon} 
              alt={feature.title}
              className="w-20 h-20 md:w-24 md:h-24 object-contain mb-4"
              loading="lazy"
            />
            <span className="text-primary font-semibold text-sm md:text-base">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSlider;
