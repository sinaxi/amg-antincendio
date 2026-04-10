import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getLeadAttribution } from "@/lib/leadAttribution";
import { isGoogleSheetLeadConfigured, submitLeadToSheet } from "@/lib/submitLeadToSheet";
import { Send, Factory, MapPin } from "lucide-react";

const CONTACT_EMAIL = "info@amgsistemi.it";

const ContactForm = () => {
  const { toast } = useToast();
  const sheetEnabled = isGoogleSheetLeadConfigured();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    azienda: "",
    settore: "",
    email: "",
    telefono: "",
    provincia: "",
    messaggio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (sheetEnabled) {
        const attr = getLeadAttribution(window.location.href, document.referrer || "");
        const { ok } = await submitLeadToSheet({
          nome: formData.nome.trim(),
          azienda: formData.azienda.trim(),
          settore: formData.settore.trim(),
          provincia: formData.provincia.trim(),
          email: formData.email.trim(),
          telefono: formData.telefono.trim(),
          messaggio: formData.messaggio.trim(),
          data: new Date().toISOString(),
          sorgente: attr.sorgente,
          campagna: attr.campagna,
          adset: attr.adset,
          ad: attr.ad,
          pageUrl: attr.pageUrl,
        });

        if (!ok) {
          toast({
            title: "Errore di invio",
            description: "Non è stato possibile registrare la richiesta. Riprova tra qualche istante.",
            variant: "destructive",
          });
          return;
        }

        toast({
          title: "Richiesta inviata",
          description: "Grazie: abbiamo registrato i tuoi dati e ti ricontatteremo al più presto.",
        });
      } else {
        const subject = encodeURIComponent("Richiesta contatto — sito AMG Sistemi");
        const lines = [
          `Nome: ${formData.nome}`,
          `Azienda: ${formData.azienda.trim() || "—"}`,
          `Settore: ${formData.settore.trim() || "—"}`,
          `Email: ${formData.email}`,
          `Telefono: ${formData.telefono}`,
          `Provincia: ${formData.provincia}`,
          "",
          formData.messaggio.trim() || "(nessun messaggio aggiuntivo)",
          "",
          `— Pagina: ${window.location.href}`,
        ];
        let bodyText = lines.join("\n");
        const maxLen = 1800;
        if (bodyText.length > maxLen) {
          bodyText = `${bodyText.slice(0, maxLen - 3)}...`;
        }
        const body = encodeURIComponent(bodyText);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

        toast({
          title: "Apri il tuo programma email",
          description:
            "Dovrebbe aprirsi la posta con il messaggio già compilato. Invia l’email per completare la richiesta.",
        });
      }

      setFormData({
        nome: "",
        azienda: "",
        settore: "",
        email: "",
        telefono: "",
        provincia: "",
        messaggio: "",
      });
    } catch (error) {
      console.error("Contact submit error:", error);
      toast({
        title: "Errore",
        description: "Non è stato possibile completare l’invio. Riprova tra qualche istante.",
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
                Per un sopralluogo o un preventivo personalizzato sulla vostra attività utilizza il modulo qui accanto:
                ti ricontatteremo al più presto.
              </p>

              {/* Contact Info: allineati a sinistra anche su mobile */}
              <div className="space-y-6 flex flex-col items-stretch w-full text-left">
                <div className="flex items-start gap-4 w-full justify-start">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70 mb-1">AMG sistemi S.r.l.</div>
                    <div className="font-semibold text-sm md:text-base">
                      Via Manifattura V. Olcese, 58<br />
                      25047 – Darfo Boario Terme (BS)
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 w-full justify-start">
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
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 whitespace-nowrap">
                Contattaci per informazioni
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {sheetEnabled ? (
                  <>
                    Compila i campi e premi Invia: la richiesta viene registrata in modo sicuro; ti ricontatteremo al
                    più presto.
                  </>
                ) : (
                  <>
                    Compila i campi e premi Invia: si aprirà la tua app di posta con il messaggio già compilato. Invia
                    l&apos;email per trasmettere la richiesta ad AMG Sistemi.
                  </>
                )}
              </p>
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

                <div>
                  <label htmlFor="azienda" className="block text-sm font-medium text-foreground mb-2">
                    Azienda
                  </label>
                  <Input
                    id="azienda"
                    name="azienda"
                    type="text"
                    value={formData.azienda}
                    onChange={handleChange}
                    placeholder="Ragione sociale"
                    className="bg-background"
                    autoComplete="organization"
                  />
                </div>

                <div>
                  <label htmlFor="settore" className="block text-sm font-medium text-foreground mb-2">
                    Settore
                  </label>
                  <Input
                    id="settore"
                    name="settore"
                    type="text"
                    value={formData.settore}
                    onChange={handleChange}
                    placeholder="Es. Industria, commercio, sanità, ufficio…"
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

                <Button type="submit" variant="default" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    sheetEnabled ? "Invio in corso..." : "Apertura in corso..."
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
