const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12 text-center lg:text-left">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <h3 className="font-display text-2xl font-bold mb-4">RecinzioniPro</h3>
            <p className="text-background/70 leading-relaxed">
              DAGEM OUTDOOR SOLUTIONS - Da oltre vent'anni nel settore delle soluzioni per l'outdoor. 
              Specializzati nella commercializzazione di pavimenti e recinzioni in WPC.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#vantaggi" className="text-background/70 hover:text-background transition-colors">
                  Vantaggi
                </a>
              </li>
              <li>
                <a href="#prodotti" className="text-background/70 hover:text-background transition-colors">
                  Prodotti
                </a>
              </li>
              <li>
                <a href="#contatti" className="text-background/70 hover:text-background transition-colors">
                  Contattaci
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">DAGEM S.r.l.</h4>
            <address className="not-italic text-background/70 space-y-2">
              <p>Via Boschetta, 15</p>
              <p>Costa Volpino (BG)</p>
              <p>Partita IVA: 04123980163</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 pb-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-xs md:text-sm whitespace-nowrap">
            © {currentYear} RecinzioniPro - DAGEM S.r.l. Tutti i diritti riservati.
          </p>
          <div className="flex gap-2 md:gap-6 text-xs md:text-sm whitespace-nowrap">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <span className="text-background/40 md:hidden">-</span>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Cookie Policy
            </a>
            <span className="text-background/40 md:hidden">-</span>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Termini e Condizioni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
