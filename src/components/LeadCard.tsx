import { ArrowUpRight } from "lucide-react";
import { Lead } from "@/data/leads";

interface LeadCardProps {
  lead: Lead;
}

export function LeadCard({ lead }: LeadCardProps) {
  return (
    <article className="lead-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="tag">
            <span className="tag-dot" aria-hidden />
            {lead.industry} · {lead.location}
          </div>
          <h3 className="mt-3 text-xl font-semibold text-white">{lead.name}</h3>
        </div>
        <div className="flex gap-2">
          {lead.instagram && (
            <a
              href={lead.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition hover:border-white/20 hover:text-white"
            >
              <span className="sr-only">Instagram</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {lead.website && (
            <a
              href={lead.website}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-2 text-white/60 transition hover:border-white/20 hover:text-white"
            >
              <span className="sr-only">Website</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-white/70">{lead.summary}</p>
      <div className="space-y-3 text-sm">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">Visual Language</div>
          <p className="text-white/70">{lead.visualLanguage}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">Audience</div>
          <p className="text-white/70">{lead.audience}</p>
        </div>
      </div>
      <div className="gradient-divider" />
      <div className="grid gap-3 text-sm text-white/80">
        <ListBlock title="Core needs" items={lead.coreNeeds} />
        <ListBlock title="Opportunity angles" items={lead.opportunityAngles} />
        <ListBlock title="Collaboration ideas" items={lead.collaborationIdeas} />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {lead.platforms.map((platform) => (
          <span key={platform} className="chip">
            {platform}
          </span>
        ))}
      </div>
    </article>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-[0.25em] text-white/45">{title}</div>
      <ul className="checklist">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
