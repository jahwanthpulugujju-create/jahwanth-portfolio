const items = [
  "BRAND IDENTITY",
  "CONTENT STRATEGY",
  "REELS CREATION",
  "VISUAL SYSTEMS",
  "SOCIAL GROWTH",
  "NARICO NATURALS",
  "TOASTMASTERS CAMPAIGN",
];

export default function MarqueeSection() {
  return (
    <section className="jp-marquee" aria-hidden="true">
      <div className="jp-marquee-track">
        {[...Array(4)].map((_, k) => (
          <div className="jp-marquee-row" key={k}>
            {items.map((m, i) => (
              <span key={i}>, {m}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
