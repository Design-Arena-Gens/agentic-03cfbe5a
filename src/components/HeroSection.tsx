import Link from "next/link";

interface HeroSectionProps {
  leadCount: number;
}

export function HeroSection({ leadCount }: HeroSectionProps) {
  return (
    <section className="container-section gap-14 pt-24">
      <div className="badge w-fit">Lead Intelligence Report</div>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Nodi Verse <span className="text-nodi-red">Premium Collaboration Radar</span>
          </h1>
          <p className="max-w-2xl text-lg text-white/70">
            Curated intelligence on high-affinity fashion, tech, lifestyle, beauty and beverage brands
            operating across India, UAE, UK and USA. Designed to accelerate cinematic campaigns, AI-driven
            storytelling, and strategic partnerships for Nodi Verse.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#lead-explorer"
              className="rounded-full bg-nodi-red px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-nodi-dark"
            >
              Explore {leadCount}+ live leads
            </Link>
            <Link
              href="#activation-playbook"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
            >
              Activation roadmap
            </Link>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="text-sm uppercase tracking-[0.35em] text-white/50">Opportunity Pulse</div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-4xl font-semibold text-white">{leadCount}</div>
              <p className="text-sm text-white/60">Qualified premium brand leads prioritised for cinematic storytelling</p>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">4</div>
              <p className="text-sm text-white/60">Geographies aligned with distribution goals: India, UAE, UK, USA</p>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">6</div>
              <p className="text-sm text-white/60">Core industries primed for design-first collaborations</p>
            </div>
            <div>
              <div className="text-4xl font-semibold text-white">72h</div>
              <p className="text-sm text-white/60">Recommended sprint to produce spec concepts per lead</p>
            </div>
          </div>
          <div className="gradient-divider" />
          <p className="text-sm leading-relaxed text-white/60">
            Each profile blends qualitative research, brand behaviour signals, and activation pathways that can
            be directly translated into Nodi Verse cinematic pitch decks, vertical video campaigns, and
            immersive web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
