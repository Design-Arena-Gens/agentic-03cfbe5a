interface OpportunityColumn {
  label: string;
  description: string;
  activations: string[];
  outcomes: string;
}

const opportunityColumns: OpportunityColumn[] = [
  {
    label: "Cinematic Launch Systems",
    description:
      "High-impact hero films and drop campaigns for brands craving premium reveal moments that merge AI, 3D and live action.",
    activations: [
      "60s flagship reveal with AI-augmented transitions",
      "Spec deck pairing cinematic stills + campaign timeline",
      "Vertical cutdowns optimised for Reels & TikTok"
    ],
    outcomes: "Boost launch recall, increase paid performance CTR, and create signature brand recall systems."
  },
  {
    label: "Immersive Retail & B2B",
    description:
      "Motion systems for experiential retail, trade shows, and partner pitches that translate design craft into conversion.",
    activations: [
      "Loopable projection packs for pop-ups and stores",
      "Interactive microsite for wholesale buyers",
      "Investor-ready cinematic narrative decks"
    ],
    outcomes: "Accelerate offline conversion and premium shelf placement conversations."
  },
  {
    label: "Always-on Social Storyworlds",
    description:
      "Modular content engines blending AI world-building, quick-turn storytelling, and community-first narratives.",
    activations: [
      "Weekly reel series with procedural animation motifs",
      "UGC remixes using branded motion templates",
      "Data-driven storytelling dashboards for founders"
    ],
    outcomes: "Deliver consistent brand presence and defensible visual IP across social ecosystems."
  }
];

export function OpportunityMatrix() {
  return (
    <section className="container-section" id="opportunity-matrix">
      <div className="section-title">Strategic Focus</div>
      <h2 className="section-heading">High-conversion opportunity matrix</h2>
      <p className="max-w-3xl text-sm text-white/60">
        These thematic lanes align with Nodi Verse capabilities and the behavioural signals from the shortlisted
        brands. Use them to anchor outbound messaging, spec concepts, and proposal structures.
      </p>
      <div className="grid gap-6 lg:grid-cols-3">
        {opportunityColumns.map((column) => (
          <article key={column.label} className="section-card-alt space-y-5">
            <div className="text-sm font-semibold text-white">{column.label}</div>
            <p className="text-sm text-white/60">{column.description}</p>
            <ul className="checklist">
              {column.activations.map((activation) => (
                <li key={activation}>{activation}</li>
              ))}
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/40">
              Outcome · <span className="text-white/70 normal-case tracking-normal">{column.outcomes}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
