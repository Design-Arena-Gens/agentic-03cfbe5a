import { HeroSection } from "@/components/HeroSection";
import { LeadExplorer } from "@/components/LeadExplorer";
import { OpportunityMatrix } from "@/components/OpportunityMatrix";
import { ActivationPlaybook } from "@/components/ActivationPlaybook";
import { SignalRadar } from "@/components/SignalRadar";
import { OutboundToolkit } from "@/components/OutboundToolkit";
import { ContactSnippets } from "@/components/ContactSnippets";
import { FocusIndustries } from "@/components/FocusIndustries";
import { SynthesisSummary } from "@/components/SynthesisSummary";
import { leads } from "@/data/leads";

const hotLeads = leads.slice(0, 4);

export default function Page() {
  return (
    <main className="flex flex-col gap-10 pb-20">
      <HeroSection leadCount={leads.length} />
      <HotLeadStrip />
      <FocusIndustries />
      <LeadExplorer leads={leads} />
      <OpportunityMatrix />
      <SignalRadar />
      <ActivationPlaybook />
      <OutboundToolkit />
      <ContactSnippets />
      <SynthesisSummary />
      <footer className="container-section pb-24 text-center text-xs text-white/40">
        Built for the Nodi Verse leadership team · Updated {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </footer>
    </main>
  );
}

function HotLeadStrip() {
  return (
    <section className="container-section">
      <div className="section-card flex flex-col gap-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="section-title">Priority Wave</div>
            <h2 className="section-heading">4 leads ready for immediate outreach</h2>
          </div>
          <p className="max-w-xl text-sm text-white/60">
            Selected for brand heat, visual maturity, and appetite for cinematic storytelling. Pair each with a
            rapid spec asset to book an alignment call this week.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {hotLeads.map((lead) => (
            <article key={lead.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-[0.3em] text-white/40">{lead.industry}</div>
              <div className="mt-3 text-lg font-semibold text-white">{lead.name}</div>
              <p className="mt-3 text-sm text-white/60">{lead.summary}</p>
              <div className="mt-4 space-y-2 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-nodi-red" aria-hidden />
                  {lead.coreNeeds[0]}
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-nodi-red" aria-hidden />
                  {lead.opportunityAngles[0]}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
