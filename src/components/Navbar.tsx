import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItemsDesktop = [
  { label: "Vantaggi", href: "#vantaggi" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Perché WPC", href: "#wpc" },
];

const navItemsMobile = [
  { label: "Vantaggi", href: "#vantaggi" },
  { label: "Prodotti", href: "#prodotti" },
  { label: "Perché WPC", href: "#wpc" },
  { label: "Galleria", href: "#galleria" },
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'w-[95%] max-w-5xl' : 'w-[90%] max-w-4xl'}`}>
        <div className="bg-primary/70 backdrop-blur-md rounded-full px-4 py-3 border border-primary-foreground/10 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="font-display text-xl md:text-lg text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <span className="font-bold">Recinzioni</span><span className="font-light">Pro</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItemsDesktop.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-2 text-base font-bold text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-all duration-200"
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
                Richiedi Preventivo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-[100] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-foreground/90 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="p-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6">
            {navItemsMobile.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-3xl font-display font-bold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="secondary"
              size="xl"
              onClick={() => scrollToSection("#contatti")}
              className="mt-6 rounded-full font-semibold"
            >
              Richiedi Preventivo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
