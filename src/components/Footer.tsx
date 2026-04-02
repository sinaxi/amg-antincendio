const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-700 text-zinc-100 py-16">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12 text-center lg:text-left">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <h3 className="font-display text-2xl mb-4"><span className="font-bold">AMG</span><span className="font-light"> Sistemi</span></h3>
            <div className="text-zinc-300 leading-relaxed space-y-3">
              <p>
                AMG Sistemi è un&apos;azienda leader nel settore dei sistemi antincendio, dedicata a fornire soluzioni complete e all&apos;avanguardia per la protezione di persone e beni.
              </p>
              <p>
                Con anni di esperienza e un team di tecnici altamente qualificati, offriamo servizi personalizzati che rispettano le normative vigenti e garantiscono i più alti standard di sicurezza.
              </p>
            </div>
          </div>

          {/* Sede */}
          <div>
            <h4 className="font-semibold text-lg md:text-lg mb-4 text-zinc-50">Sede</h4>
            <address className="not-italic text-zinc-300 space-y-1 text-base md:text-sm">
              <p className="font-semibold text-zinc-50">AMG sistemi S.r.l.</p>
              <p>Via Manifattura V. Olcese, 58</p>
              <p>25047 – Darfo Boario Terme (BS)</p>
            </address>
          </div>

          {/* Assistenza */}
          <div>
            <h4 className="font-semibold text-lg md:text-lg mb-4 text-zinc-50">Assistenza</h4>
            <address className="not-italic text-zinc-300 space-y-1 text-base md:text-sm">
              <p>Assistenza tecnica h24 per interventi tempestivi.</p>
              <p>Consulenza gratuita e preventivi personalizzati tramite il modulo contatti in questa pagina.</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-600 pt-8 pb-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs md:text-sm whitespace-nowrap">
            © {currentYear} <span className="font-semibold text-zinc-200">AMG Sistemi</span> — AMG sistemi S.r.l. Tutti i diritti riservati.
          </p>
          <div className="flex gap-2 md:gap-6 text-xs md:text-sm whitespace-nowrap">
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Privacy Policy
            </a>
            <span className="text-zinc-600 md:hidden">-</span>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Cookie Policy
            </a>
            <span className="text-zinc-600 md:hidden">-</span>
            <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
