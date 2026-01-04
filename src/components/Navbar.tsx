import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Vantaggi", href: "#vantaggi" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Galleria", href: "#galleria" },
  { label: "Perché WPC", href: "#wpc" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-4xl'}`}>
      <div className="bg-primary/70 backdrop-blur-md rounded-full px-4 py-3 border border-primary-foreground/10 shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="font-display text-lg font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            RecinzioniPro
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => scrollToSection("#contatti")}
              className="rounded-full font-semibold"
            >
              Preventivo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("#contatti")}
                className="mt-3 rounded-full font-semibold"
              >
                Richiedi Preventivo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
