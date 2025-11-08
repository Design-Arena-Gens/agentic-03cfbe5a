const assets = [
  {
    title: "Cinematic Signal Deck",
    description:
      "6-slide Notion + PDF deck blending lead profile, key insight, and spec frames. Use as pre-read before outreach call.",
    checklist: [
      "Slide 01: Brand Snapshot + behaviour signal",
      "Slide 02-03: Cinematic moodframes & AI previs stills",
      "Slide 04: Campaign architecture + rollout timeline",
      "Slide 05: About Nodi Verse (hybrid AI + human pipeline)",
      "Slide 06: Call to action with calendly link"
    ]
  },
  {
    title: "Outreach Script System",
    description:
      "Personalised outreach scripts linking brand behaviour to Nodi Verse capability stack."
        + " Delivered as editable Google Doc templates for SDRs / founders.",
    checklist: [
      "Hook: Reference a recent content move or launch",
      "Problem: Highlight visual storytelling gap",
      "Solution: Introduce cinematic + AI hybrid concept",
      "Social proof: Mention aligned casework",
      "CTA: Invite to 20-minute creative alignment call"
    ]
  },
  {
    title: "Spec Drop Engine",
    description:
      "Templated After Effects / Runway Gen-3 pipeline to generate 10-second spec teasers per lead within 48 hours.",
    checklist: [
      "Lead-specific storyboard template",
      "Motion design toolkit with typography & transitions",
      "AI footage prompt bank",
      "Color grading LUTs aligned to Nodi palette",
      "Delivery checklist for export, compression, thumbnail"
    ]
  }
];

export function OutboundToolkit() {
  return (
    <section className="container-section" id="outbound-toolkit">
      <div className="section-title">Enablement</div>
      <h2 className="section-heading">Outbound toolkit for immediate deployment</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {assets.map((asset) => (
          <article key={asset.title} className="section-card space-y-4">
            <div className="text-sm font-semibold text-white">{asset.title}</div>
            <p className="text-sm text-white/60">{asset.description}</p>
            <ul className="checklist">
              {asset.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
