import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quali servizi antincendio offre AMG Sistemi?",
    answer: "Offriamo impianti di rilevazione incendi (fumo, calore, centrali avanzate, rilevatori ottici, termici e multicriterio), sistemi di allarme acustico e visivo e integrazione con altri sistemi di sicurezza. Inoltre estintori e sistemi di spegnimento (schiuma, polvere, CO2, gas inerti, rete idrica), manutenzione programmata con reportistica, porte tagliafuoco, uscite di sicurezza, porte industriali, porte rapide e tende tagliafuoco con posa, riparazione e assistenza."
  },
  {
    question: "Siete in regola con le normative vigenti?",
    answer: "Sì. Lavoriamo nel rispetto delle normative di sicurezza con aggiornamento costante agli standard, controlli periodici, revisione e collaudo degli impianti, sostituzione di componenti usurati e aggiornamento tecnologico dove necessario."
  },
  {
    question: "Offrite assistenza fuori orario?",
    answer: "Forniamo un servizio di assistenza tecnica h24 per garantire interventi tempestivi quando necessario, come indicato nella nostra offerta di assistenza continua."
  },
  {
    question: "Cosa include la manutenzione programmata?",
    answer: "Controlli periodici conformi alla normativa, revisione e collaudo degli impianti, sostituzione componenti usurati, aggiornamento tecnologico dei sistemi e reportistica dettagliata degli interventi effettuati."
  },
  {
    question: "Lavorate solo con grandi aziende?",
    answer: "Collaboriamo con strutture di ogni dimensione: industria e manifatturiero, uffici e centri direzionali, ricettività e commercio, sanità, scuole e data center. Offriamo anche consulenza e preventivi a privati e condomini."
  },
  {
    question: "Come funziona la consulenza gratuita?",
    answer: "Siamo disponibili per una consulenza gratuita per valutare le esigenze di protezione antincendio. Su richiesta organizziamo sopralluogo e preventivo personalizzato per la vostra attività."
  },
  {
    question: "Fornite solo i materiali o anche installazione?",
    answer: "Ci occupiamo di posa e installazione, oltre a riparazione e manutenzione, per un servizio completo sulle soluzioni antincendio e sulla chiusura tagliafuoco."
  },
  {
    question: "Come richiedo un preventivo?",
    answer: "Compila il modulo contatti in questa pagina: è l’unico canale per le richieste. Ti ricontatteremo per fissare sopralluogo e inviarti un preventivo personalizzato."
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
              Trova le risposte alle domande più comuni sui sistemi antincendio e sui servizi AMG Sistemi
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
