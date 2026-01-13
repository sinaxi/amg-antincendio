const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 mb-12 text-center lg:text-left">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <h3 className="font-display text-2xl mb-4"><span className="font-bold">Recinzioni</span><span className="font-light">Pro</span></h3>
            <p className="text-background/70 leading-relaxed">
              <strong className="text-background">DAGEM OUTDOOR SOLUTIONS</strong><br />
              Da oltre vent'anni nel settore delle soluzioni per l'outdoor. 
              Specializzati nella commercializzazione di pavimenti e recinzioni in WPC.
            </p>
          </div>

          {/* Sede Legale */}
          <div>
            <h4 className="font-semibold text-lg md:text-lg mb-4">Sede legale</h4>
            <address className="not-italic text-background/70 space-y-1 text-base md:text-sm">
              <p className="font-semibold text-background">DAGEM S.R.L.</p>
              <p>Via Boschetta, 15</p>
              <p>24062 – Costa Volpino (BG)</p>
              <p>P.IVA 04123980163</p>
            </address>
          </div>

          {/* Sede Operativa */}
          <div>
            <h4 className="font-semibold text-lg md:text-lg mb-4">Sede operativa</h4>
            <address className="not-italic text-background/70 space-y-1 text-base md:text-sm">
              <p>Via Valle delle Fontane, 74</p>
              <p>Località Pertegalli</p>
              <p>24060 – Endine Gaiano (BG)</p>
              <p>Tel. +39 035 827107</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 pb-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-xs md:text-sm whitespace-nowrap">
            © {currentYear} <span className="font-semibold">Recinzioni</span><span className="font-light">Pro</span> - DAGEM S.r.l. Tutti i diritti riservati.
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
