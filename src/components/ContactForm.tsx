import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    provincia: "",
    tipo: "privato",
    messaggio: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Richiesta Inviata!",
      description: "Ti contatteremo al più presto per fornirti un preventivo personalizzato.",
    });

    setFormData({
      nome: "",
      email: "",
      telefono: "",
      provincia: "",
      tipo: "privato",
      messaggio: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contatti" className="py-20 md:py-28 bg-primary" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <header className="text-primary-foreground text-center lg:text-left">
              <span className="inline-block text-primary-foreground/80 font-semibold mb-4 uppercase tracking-wider text-sm">
                Preventivo Recinzioni Gratuito
              </span>
              <h2 id="contact-heading" className="font-display text-3xl md:text-4xl font-bold mb-6">
                Richiedi Preventivo per Recinzioni da Giardino
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Pronto a trasformare il tuo spazio esterno con fence e staccionate personalizzabili? Contattaci per ricevere un preventivo gratuito per recinzioni modulari. 
                Ci basta conoscere la lunghezza dell'area ed eventuali tue esigenze specifiche.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70">Telefono</div>
                    <div className="font-semibold">+39 035 827107</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-primary-foreground/70">Sede</div>
                    <div className="font-semibold whitespace-nowrap text-sm md:text-base">Via Boschetta, 15 - Costa Volpino (BG)</div>
                  </div>
                </div>
              </div>
            </header>

            {/* Right - Form */}
            <div className="bg-card rounded-2xl p-8 shadow-xl">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6 whitespace-nowrap">
                Contattaci per informazioni
              </h3>
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

                <div className="grid sm:grid-cols-2 gap-4">
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
                    <label htmlFor="tipo" className="block text-sm font-medium text-foreground mb-2">
                      Sei Privato o Rivenditore?
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="w-full h-10 rounded-lg border border-input bg-background px-3 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="privato">Sono un Privato</option>
                      <option value="rivenditore">Sono un Rivenditore</option>
                    </select>
                  </div>
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
                  size="xl" 
                  className="w-full bg-brown-dark hover:bg-brown-dark/90 text-brown-dark-foreground"
                  disabled={isSubmitting}
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
