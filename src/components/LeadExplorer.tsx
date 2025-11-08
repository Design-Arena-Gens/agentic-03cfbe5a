"use client";

import { useMemo, useState } from "react";
import { clsx } from "clsx";
import { Lead, Industry, Region, Platform } from "@/data/leads";
import { LeadCard } from "./LeadCard";

interface LeadExplorerProps {
  leads: Lead[];
}

const industries: Industry[] = ["Fashion", "Tech", "F&B", "Lifestyle", "Beauty", "Entertainment"];
const regions: Region[] = ["India", "UAE", "UK", "USA"];
const platforms: Platform[] = ["Instagram", "YouTube", "Website", "TikTok", "LinkedIn"];

export function LeadExplorer({ leads }: LeadExplorerProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | "All">("All");
  const [selectedRegion, setSelectedRegion] = useState<Region | "All">("All");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>(["Instagram"]);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesIndustry = selectedIndustry === "All" || lead.industry === selectedIndustry;
      const matchesRegion = selectedRegion === "All" || lead.location === selectedRegion;
      const matchesPlatform = selectedPlatforms.every((platform) => lead.platforms.includes(platform));
      const haystack = [
        lead.name,
        lead.summary,
        lead.visualLanguage,
        lead.audience,
        lead.coreNeeds.join(" "),
        lead.opportunityAngles.join(" "),
        lead.collaborationIdeas.join(" "),
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch = haystack.includes(search.trim().toLowerCase());
      return matchesIndustry && matchesRegion && matchesPlatform && matchesSearch;
    });
  }, [leads, search, selectedIndustry, selectedRegion, selectedPlatforms]);

  return (
    <section id="lead-explorer" className="container-section">
      <div className="space-y-5">
        <div className="section-title">Lead Intelligence</div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="section-heading">Interactive lead explorer</h2>
          <p className="max-w-xl text-sm text-white/60">
            Filter by industry, region, and priority platforms to surface the best-aligned opportunities for Nodi
            Verse&apos;s cinematic and AI-driven storytelling services.
          </p>
        </div>
        <div className="section-card">
          <div className="grid gap-6 xl:grid-cols-[2fr,3fr]">
            <div className="space-y-6">
              <FilterGroup
                label="Industry"
                value={selectedIndustry}
                onChange={(value) => setSelectedIndustry(value as Industry | "All")}
                options={["All", ...industries]}
              />
              <FilterGroup
                label="Region"
                value={selectedRegion}
                onChange={(value) => setSelectedRegion(value as Region | "All")}
                options={["All", ...regions]}
              />
              <PlatformGroup
                value={selectedPlatforms}
                onChange={(newPlatforms) => setSelectedPlatforms(newPlatforms)}
              />
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Keyword focus</label>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by brand narrative, campaign angle, or collaboration idea"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-nodi-red focus:outline-none focus:ring-2 focus:ring-nodi-red/40"
                  type="text"
                />
              </div>
              <div className="text-xs text-white/40">
                Tip: pair filters (e.g. <span className="text-white/60">F&B + Instagram + India</span>) to surface
                fast-conversion opportunities for spec work.
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Qualified leads</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  {filtered.length} match{filtered.length === 1 ? "" : "es"}
                </span>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {filtered.map((lead) => (
                  <div key={lead.name} className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-white/60">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-white">{lead.name}</div>
                      <span className="rounded-full bg-nodi-red/20 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-nodi-red">
                        {lead.industry}
                      </span>
                    </div>
                    <p className="mt-2 text-white/60">{lead.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {lead.collaborationIdeas.slice(0, 2).map((idea) => (
                        <span key={idea} className="chip">
                          {idea}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-2xl border border-dashed border-white/10 bg-black/20 p-8 text-center text-sm text-white/50">
                    No leads match that combination yet. Clear a filter to widen the radar.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((lead) => (
          <LeadCard key={lead.name} lead={lead} />
        ))}
      </div>
    </section>
  );
}

interface FilterGroupProps {
  label: string;
  options: (Industry | Region | "All")[];
  value: Industry | Region | "All";
  onChange: (value: string) => void;
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-[0.3em] text-white/40">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition",
              value === option
                ? "border-nodi-red bg-nodi-red/20 text-white"
                : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

interface PlatformGroupProps {
  value: Platform[];
  onChange: (platforms: Platform[]) => void;
}

function PlatformGroup({ value, onChange }: PlatformGroupProps) {
  function toggle(platform: Platform) {
    if (value.includes(platform)) {
      onChange(value.filter((item) => item !== platform));
    } else {
      onChange([...value, platform]);
    }
  }

  return (
    <div className="space-y-2">
      <div className="text-xs uppercase tracking-[0.3em] text-white/40">Priority Platforms</div>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => toggle(platform)}
            className={clsx(
              "rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition",
              value.includes(platform)
                ? "border-nodi-red bg-nodi-red/20 text-white"
                : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
            )}
          >
            {platform}
          </button>
        ))}
      </div>
      <div className="text-xs text-white/40">
        Pre-select platforms that Nodi Verse will lead with; results highlight brands already investing there.
      </div>
    </div>
  );
}
