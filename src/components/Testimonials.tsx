import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michele Rivadossi",
    location: "Milano",
    text: "Non sono molto esperto di \"fai da te\" ma installare questa recinzione è davvero molto semplice. Una volta installata si presenta molto robusta e solida.",
    rating: 5
  },
  {
    name: "Laura Cadei",
    location: "Genova",
    text: "Io e mio marito abbiamo scelto questa soluzione per coprire un lato della piscina e creare un po' di privacy rispetto alle case vicine. In poche ore abbiamo montato tutta la recinzione senza alcuna difficoltà.",
    rating: 5
  },
  {
    name: "Francesco Anastasi",
    location: "Bari",
    text: "Ho acquistato la recinzione DAGEM per delimitare il mio giardino. L'installazione è stata veloce e molto semplice seguendo le istruzioni inserite nella confezione.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
            Testimonianze
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-muted-foreground text-lg">
            Valutazione media 4.94 su 5 basata su oltre 2.783 recensioni verificate
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl card-elevated relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote className="w-12 h-12" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
