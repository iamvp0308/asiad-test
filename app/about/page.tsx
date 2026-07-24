import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Users, Hammer } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — ASIAD",
  description: "The story, process, and people behind ASIAD motorcycle accessories.",
};

const timeline = [
  {
    year: "2017",
    title: "First stitch",
    body: "Founded in a two-bay garage, ASIAD shipped its first hand-cut leather seat cover to a local riding club.",
  },
  {
    year: "2019",
    title: "In-house tooling",
    body: "Brought CNC steelwork in-house to start producing crash guards to our own impact-tested spec.",
  },
  {
    year: "2022",
    title: "Carbon line launch",
    body: "Introduced autoclave-cured carbon trim, cutting weight across the fender and tank-grip lineup.",
  },
  {
    year: "2025",
    title: "3D configurator",
    body: "Launched a live 3D build tool so riders can preview seat, guard, and accessory combinations before ordering.",
  },
];

const values = [
  {
    icon: Target,
    title: "Fit First",
    body: "Every part is designed against factory mount points. If it doesn't bolt on clean, it doesn't ship.",
  },
  {
    icon: Hammer,
    title: "Tested, Not Assumed",
    body: "Guards are drop-tested, covers are weathered, stitching is pull-tested — before any part reaches you.",
  },
  {
    icon: Users,
    title: "Built With Riders",
    body: "Our product roadmap comes from ride-along feedback, not boardroom guesswork.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              Our Story
            </p>
            <h1 className="mt-4 font-display text-4xl font-700 sm:text-6xl">
              Gear made by people who actually ride.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ash-300 sm:text-base">
              ASIAD started because we couldn&apos;t find accessories that fit
              right, lasted, and looked like they belonged on the bike. So we
              started making our own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/5">
              <Image
                src="https://picsum.photos/seed/asiad-workshop/900/700"
                alt="ASIAD workshop"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              The Workshop
            </p>
            <h2 className="mt-3 font-display text-3xl font-700 sm:text-4xl">
              Small batches. Real quality control.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ash-300">
              We keep production runs small enough that every seat cover gets
              hand-inspected and every guard gets a physical fit-check before
              it&apos;s boxed. It&apos;s slower — and it&apos;s why the reorder
              rate is what it is.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/5 bg-base-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              What We Stand On
            </p>
            <h2 className="mt-3 font-display text-3xl font-700 sm:text-4xl">Core values</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="clip-panel h-full border border-white/5 bg-base-850 p-7">
                  <v.icon className="text-ember-400" size={26} strokeWidth={1.6} />
                  <h3 className="mt-5 font-display text-lg font-700">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash-400">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-ember-400">Timeline</p>
          <h2 className="mt-3 font-display text-3xl font-700 sm:text-4xl">How we got here</h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.08}>
              <div className="flex gap-6 border-l border-white/10 pb-12 pl-8 last:pb-0">
                <div className="relative">
                  <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-ember-500 ring-4 ring-base-950" />
                </div>
                <div>
                  <p className="font-mono text-sm text-ember-400">{t.year}</p>
                  <h3 className="mt-1 font-display text-xl font-700">{t.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ash-400">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-base-900 py-20">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
          <h2 className="font-display text-3xl font-700 sm:text-4xl">
            Come build your ride with us.
          </h2>
          <Link
            href="/configurator"
            className="clip-tag mt-8 inline-flex items-center gap-2 bg-ember-500 px-8 py-4 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember"
          >
            Open Configurator <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
