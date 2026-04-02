const MapLocation = () => {
  const address = "Via Manifattura V. Olcese, 58, Darfo Boario Terme, BS, Italy";
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-2 md:px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dove siamo
          </h2>
          <p className="text-muted-foreground">
            Via Manifattura V. Olcese, 58 — 25047 Darfo Boario Terme (BS)
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AMG sistemi S.r.l. — Sede Darfo Boario Terme"
          />
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
