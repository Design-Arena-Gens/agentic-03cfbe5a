const snippets = [
  {
    title: "Fashion / Lifestyle Outreach",
    body:
      "Saw the momentum around your latest drop. We mocked a 15s cinematic cut exploring how Nodi Verse merges AI previs + handcrafted motion to extend that world into paid + retail screens. Sharing a 3-slide signal deck — quick 20m to walk you through?"
  },
  {
    title: "Tech / Wearables Outreach",
    body:
      "Noticed your community asking for richer product explainers post-launch. We developed a kinetic data-visual story that dramatizes your biometric insights without losing design minimalism. Let’s jam for 20m on how we can deliver this in under 3 weeks."
  },
  {
    title: "F&B / Functional Beverage Outreach",
    body:
      "Your recent flavor drop nails the copy, but the feed lacks that cinematic ritual moment. We ideated an AI-assisted hero film tying mood states to pour visuals + retail projections. Happy to ship a spec cut and talk rollout this week."
  }
];

export function ContactSnippets() {
  return (
    <section className="container-section" id="contact-snippets">
      <div className="section-title">Messaging</div>
      <h2 className="section-heading">High-impact outreach snippets</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {snippets.map((snippet) => (
          <article key={snippet.title} className="section-card space-y-4">
            <div className="text-sm font-semibold text-white">{snippet.title}</div>
            <p className="text-sm text-white/70">{snippet.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
