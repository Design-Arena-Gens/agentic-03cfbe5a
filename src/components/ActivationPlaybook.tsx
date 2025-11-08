const phases = [
  {
    title: "Phase 01 · Signal & Spec",
    timeframe: "Week 1",
    focus:
      "Rapid signal validation, moodboarding, and spec concept production tailored to each priority lead.",
    tasks: [
      "Mine each lead's recent social/content behaviour using Highlight + Notion board",
      "Produce 15-second spec teaser per lead leveraging existing Nodi Verse assets",
      "Draft personalised outreach scripts with insight hooks"
    ],
    deliverables: [
      "AI-accelerated moodboard decks",
      "Spec teaser motion renders",
      "Lead-specific outreach doc"
    ],
    successMetric: "Secure 4+ warm conversations / creative reviews."
  },
  {
    title: "Phase 02 · Co-create & Convert",
    timeframe: "Weeks 2-3",
    focus:
      "Host collaborative workshops, lock paid pilots, and translate cinematic visual systems into campaign pipelines.",
    tasks: [
      "Run 45-minute co-creation sprint showcasing AI + human workflow",
      "Prototype hero film storyboard & motion tests",
      "Define multi-format asset calendar for launch"
    ],
    deliverables: [
      "Workshop highlight reel",
      "Pilot scope + budget sheet",
      "Asset delivery timeline aligned to launch milestones"
    ],
    successMetric: "Close 2 pilot engagements with >$25k value each."
  },
  {
    title: "Phase 03 · Scale & Amplify",
    timeframe: "Weeks 4-8",
    focus:
      "Expand into retainer model, produce evergreen content engine, and amplify through PR + paid distribution.",
    tasks: [
      "Deploy launch assets across owned + paid with analytics guardrails",
      "Design evergreen content system with AI-powered variation engine",
      "Package success stories into PR-ready case films"
    ],
    deliverables: [
      "Launch asset library",
      "Always-on content automation flow",
      "Case film & testimonial toolkit"
    ],
    successMetric: "Secure 1 long-term retainer + 2 case-study ready launches."
  }
];

export function ActivationPlaybook() {
  return (
    <section id="activation-playbook" className="container-section">
      <div className="section-title">Execution Blueprint</div>
      <h2 className="section-heading">Activation playbook for the next 60 days</h2>
      <p className="max-w-3xl text-sm text-white/60">
        A structured operating system to take the curated leads from first contact to retained cinematic partnerships.
        Each phase pairs tangible deliverables with measurable success indicators.
      </p>
      <div className="space-y-4">
        {phases.map((phase) => (
          <article key={phase.title} className="section-card space-y-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="text-sm font-semibold text-white">{phase.title}</div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">{phase.timeframe}</div>
              </div>
              <p className="max-w-2xl text-sm text-white/60">{phase.focus}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoBlock title="Key Tasks" items={phase.tasks} />
              <InfoBlock title="Deliverables" items={phase.deliverables} />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <div className="text-xs uppercase tracking-[0.3em] text-white/40">Success Metric</div>
                <p className="mt-3 font-medium text-white">{phase.successMetric}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-xs uppercase tracking-[0.3em] text-white/40">{title}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-nodi-red" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
