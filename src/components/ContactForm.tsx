import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Factory, MapPin } from "lucide-react";
import { getSupabase, isSupabaseConfigured } from "@/integrations/supabase/client";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    provincia: "",
    messaggio: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getClientIp = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch {
      return "unknown";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const supabase = getSupabase();
      if (!supabase) {
        toast({
          title: "Invio non disponibile",
          description:
            "Il modulo online non è configurato su questo ambiente. Contattaci a info@amgsistemi.it o al 334 293 3220.",
          variant: "destructive",
        });
        return;
      }

      const clientIp = await getClientIp();

      const { error } = await supabase.functions.invoke("submit-contact", {
        body: {
          name: formData.nome,
          email: formData.email,
          phone: formData.telefono,
          province: formData.provincia,
          userType: "Non indicato",
          fenceLength: "",
          message: formData.messaggio,
          pageUrl: window.location.href,
          clientIp: clientIp,
        },
      });

      if (error) throw error;

      toast({
        title: "Richiesta Inviata!",
        description: "Ti contatteremo al più presto per fornirti un preventivo personalizzato.",
      });

      setFormData({
        nome: "",
        email: "",
        telefono: "",
        provincia: "",
        messaggio: ""
      });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Errore",
        description: "Si è verificato un errore nell'invio. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contatti" className="py-20 md:py-28 bg-primary" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <header className="text-primary-foreground text-center lg:text-left">
              <span className="inline-block text-primary-foreground/80 font-semibold mb-4 uppercase tracking-wider text-sm">
                Consulenza e preventivo gratuito
              </span>
              <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold mb-6">
                Contattaci per le tue Soluzioni Antincendio Professionali
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Siamo pronti a offrirvi una consulenza gratuita per valutare le esigenze di protezione antincendio. 
                Per un sopralluogo o un preventivo personalizzato sulla vostra attività, scriveteci o chiamateci: vi ricontatteremo al più presto.
              </p>

              {/* Contact Info */}
              <div className="space-y-6 flex flex-col items-center lg:items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70 mb-1">AMG sistemi S.r.l.</div>
                    <div className="font-semibold text-sm md:text-base">
                      Via Manifattura V. Olcese, 58<br />
                      25047 – Darfo Boario Terme (BS)<br />
                      <a href="tel:+393342933220" className="underline underline-offset-2 hover:opacity-90">Tel. 334 293 3220</a><br />
                      <a href="mailto:info@amgsistemi.it" className="underline underline-offset-2 hover:opacity-90">info@amgsistemi.it</a><br />
                      <a href="https://www.amgsistemi.it" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-90">www.amgsistemi.it</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70 mb-1">Dove siamo</div>
                    <div className="font-semibold text-sm md:text-base">
                      Darfo Boario Terme (BS)<br />
                      Sopralluoghi su territorio regionale e nazionale su accordi
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* Right - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 whitespace-nowrap">
                Contattaci per informazioni
              </h3>
              {!isSupabaseConfigured() && (
                <p className="text-sm text-muted-foreground bg-muted/80 rounded-lg px-4 py-3 mb-5 border border-border">
                  L&apos;invio dal sito sarà attivo quando sono configurate le variabili Supabase sul server. Puoi scrivere a{" "}
                  <a href="mailto:info@amgsistemi.it" className="text-primary font-medium underline underline-offset-2">
                    info@amgsistemi.it
                  </a>{" "}
                  o chiamare il{" "}
                  <a href="tel:+393342933220" className="text-primary font-medium underline underline-offset-2">
                    334 293 3220
                  </a>
                  .
                </p>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                    Nome e Cognome *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Mario Rossi"
                    className="bg-background"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Indirizzo Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@esempio.it"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                      Telefono *
                    </label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+39 333 1234567"
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="provincia" className="block text-sm font-medium text-foreground mb-2">
                    Provincia *
                  </label>
                  <Input
                    id="provincia"
                    name="provincia"
                    type="text"
                    required
                    value={formData.provincia}
                    onChange={handleChange}
                    placeholder="Es. Milano"
                    className="bg-background"
                  />
                </div>

                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-foreground mb-2">
                    Messaggio
                  </label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Descrivi brevemente le tue esigenze..."
                    rows={4}
                    className="bg-background resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    required
                    className="mt-1 w-4 h-4 rounded border-input"
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Confermo di aver letto ed accettato l'Informativa sulla Privacy *
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting || !isSupabaseConfigured()}
                >
                  {isSubmitting ? (
                    "Invio in corso..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Invia Richiesta
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
