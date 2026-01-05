import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Cos'è il WPC e perché è migliore del legno tradizionale?",
    answer: "Il WPC (Wood Plastic Composite) è un materiale innovativo composto da fibre di legno e polimeri. Rispetto al legno tradizionale, non richiede manutenzione, non marcisce, non viene attaccato da insetti e mantiene il suo aspetto nel tempo senza necessità di verniciatura."
  },
  {
    question: "Quanto dura una recinzione in WPC?",
    answer: "Le nostre recinzioni in WPC hanno una durata media di 25-30 anni senza necessità di manutenzione significativa. Sono resistenti agli agenti atmosferici, ai raggi UV e non si deformano con il tempo."
  },
  {
    question: "Posso installare la recinzione da solo?",
    answer: "Assolutamente sì! Le nostre recinzioni modulari sono progettate per un'installazione fai-da-te semplice e veloce. Forniamo istruzioni dettagliate e supporto telefonico. In media, un pannello si installa in 15-20 minuti."
  },
  {
    question: "Quali colori sono disponibili?",
    answer: "Offriamo 3 colorazioni eleganti: marrone naturale, antracite e grigio chiaro. Tutti i colori sono resistenti allo sbiadimento grazie al trattamento anti-UV integrato nel materiale."
  },
  {
    question: "Come si pulisce una recinzione WPC?",
    answer: "La pulizia è semplicissima: basta acqua e sapone neutro. Non servono trattamenti speciali, vernici o impregnanti. Una pulizia occasionale è sufficiente per mantenere l'aspetto come nuovo."
  },
  {
    question: "Offrite consegna e montaggio?",
    answer: "Sì, effettuiamo consegne in tutta Italia. Per quanto riguarda il montaggio, offriamo sia l'opzione fai-da-te con kit completo sia il servizio di installazione professionale tramite i nostri partner certificati nella tua zona."
  },
  {
    question: "Qual è la garanzia sui vostri prodotti?",
    answer: "Tutti i nostri prodotti sono coperti da garanzia di 10 anni contro difetti di fabbricazione e deterioramento del materiale. La garanzia copre anche lo sbiadimento del colore oltre i limiti normali."
  },
  {
    question: "Come richiedo un preventivo?",
    answer: "Puoi richiedere un preventivo gratuito compilando il modulo in fondo alla pagina, chiamandoci al +39 035 827107 o inviando un'email. Ti risponderemo entro 24 ore con un preventivo dettagliato e personalizzato."
  }
];

const FAQ = () => {
  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-background">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-bold mb-4 uppercase tracking-wider text-base">
              Domande Frequenti
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Hai delle domande?
            </h2>
            <p className="text-muted-foreground text-lg">
              Trova le risposte alle domande più comuni sulle nostre recinzioni in WPC
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 card-elevated"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
