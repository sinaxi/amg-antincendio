import { Button } from "@/components/ui/button";

const StickyFooter = () => {
  const scrollToContact = () => {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <div className="bg-zinc-200/94 backdrop-blur-md border-t border-zinc-400/55 py-3 px-4">
        <div className="container mx-auto flex justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={scrollToContact}
            className="rounded-full font-bold text-base px-8"
          >
            Richiedi un Preventivo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
