import { leads } from "@/data/leads";

const industryDescriptions: Record<string, string> = {
  Fashion:
    "Athleisure and sustainable fashion labels demanding standout motion systems for capsule drops and retail activations.",
  Tech: "Design-led hardware and mobility brands requiring cinematic explainers and data storytelling.",
  "F&B": "Functional beverage and premium F&B brands seeking sensorial storytelling for launches and retail.",
  Lifestyle:
    "Interior, fragrance, and fitness accessory brands favouring minimal, premium aesthetics and ritual-driven narratives.",
  Beauty:
    "Biotech-forward beauty/oral care brands needing education-first visuals with futuristic polish.",
  Entertainment:
    "Experience-led creators and studios exploring hybrid physical/digital activations (whitespace to pursue)."
};

export function FocusIndustries() {
  const grouped = leads.reduce<Record<string, number>>((acc, lead) => {
    acc[lead.industry] = (acc[lead.industry] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section className="container-section" id="focus-industries">
      <div className="section-title">Portfolio Fit</div>
      <h2 className="section-heading">Where Nodi Verse wins fastest</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        {Object.entries(industryDescriptions).map(([industry, description]) => (
          <article key={industry} className="section-card space-y-4">
            <div className="flex items-center justify-between text-sm font-semibold text-white">
              <span>{industry}</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">
                {grouped[industry] ?? 0} leads
              </span>
            </div>
            <p className="text-sm text-white/60">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
