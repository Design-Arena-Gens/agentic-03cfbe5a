const signals = [
  {
    title: "Speculative Cinematic Worlds",
    description:
      "Brands are hungry for distinctive world-building but lack in-house motion expertise. Rapid AI + CG prototyping unlocks brand-owned cinematic universes for launches and retail."
  },
  {
    title: "Retail-as-Media",
    description:
      "Concept stores and pop-ups (Nicobar, The Giving Movement) treat screens as storytelling canvases. Immersive loops and responsive visuals are now purchase drivers."
  },
  {
    title: "Founder-Led Storytelling",
    description:
      "Founders (Perfora, Kin Euphorics) show up on camera but want elevated formats. Premium founder films humanise tech/functional narratives without losing cinematic polish."
  },
  {
    title: "Functional Wellness, Premium Feel",
    description:
      "Tech and F&B brands emphasise science. Translating data and ingredients into emotive, cinematic visuals becomes a defendable differentiation."
  }
];

export function SignalRadar() {
  return (
    <section className="container-section" id="signal-radar">
      <div className="section-title">Market Signals</div>
      <h2 className="section-heading">Why these brands are primed for Nodi Verse</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {signals.map((signal) => (
          <article key={signal.title} className="section-card">
            <div className="text-sm font-semibold text-white">{signal.title}</div>
            <p className="mt-4 text-sm text-white/60">{signal.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
