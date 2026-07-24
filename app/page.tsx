import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Wrench, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import HeroSceneClient from "@/components/HeroSceneClient";
import { products } from "@/lib/products";

const stats = [
  { value: "48K+", label: "Riders Equipped" },
  { value: "3.2M", label: "Miles Ridden In Gear" },
  { value: "4.8/5", label: "Average Rating" },
  { value: "5 YR", label: "Guard Warranty" },
];

const specTicker = [
  "AIRCRAFT-GRADE STEEL",
  "FULL-GRAIN LEATHER",
  "3K WOVEN CARBON",
  "IMPACT TESTED",
  "TOOL-FREE INSTALL",
  "MADE FOR THE LONG WAY",
];

const perks = [
  {
    icon: Wrench,
    title: "Bolt-On Fit",
    body: "Factory mount points, zero drilling. Most installs finish in under 20 minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Impact Tested",
    body: "Every guard is drop-tested to MIL-STD spec before it ships out the door.",
  },
  {
    icon: Truck,
    title: "Fast Dispatch",
    body: "In-stock orders leave the warehouse within 24 hours, tracked door to door.",
  },
  {
    icon: Sparkles,
    title: "Built to Last",
    body: "UV-stable materials and reinforced stitching backed by up to 5 years.",
  },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute inset-0 bg-radial-fade" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 clip-tag border border-ember-500/40 bg-ember-500/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ember-400">
                Engineered for the long way
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display text-5xl font-700 leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                RIDE GEAR
                <br />
                THAT MEANS
                <br />
                <span className="text-ember-500">BUSINESS.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ash-300">
                Seat covers, crash guards, and carbon trim engineered in-house
                and tested on real roads. Configure your build in 3D before it
                ever touches your bike.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/configurator"
                  className="clip-tag inline-flex items-center gap-2 bg-ember-500 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember"
                >
                  Launch Configurator <ArrowRight size={16} />
                </Link>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-ash-100 transition-colors hover:border-ember-500 hover:text-ember-400"
                >
                  Shop All Gear
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative h-[340px] sm:h-[420px] lg:h-[500px]">
            <div className="absolute inset-0 h-full w-full">
              <HeroSceneClient />
            </div>
          </Reveal>
        </div>

        {/* stat strip */}
        <Reveal delay={0.3}>
          <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-6 border-t border-white/5 px-6 pt-10 sm:grid-cols-4 lg:px-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-700 text-ember-400 sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ash-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-white/5 bg-base-900 py-4">
        <div className="flex w-max animate-marquee gap-10">
          {[...specTicker, ...specTicker].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-display text-sm font-600 uppercase tracking-[0.2em] text-ash-400"
            >
              {t}
              <span className="text-ember-500">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* PERKS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
            Why ASIAD
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-700 sm:text-4xl">
            Built by riders, tested where it counts.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="clip-panel h-full border border-white/5 bg-base-850 p-7 transition-colors hover:border-ember-500/40">
                <p.icon className="text-ember-400" size={26} strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-lg font-700">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ash-400">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="border-t border-white/5 bg-base-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
                Best Sellers
              </p>
              <h2 className="mt-3 font-display text-3xl font-700 sm:text-4xl">
                Rider-approved essentials
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 font-display text-sm font-700 uppercase tracking-widest text-ash-100 transition-colors hover:text-ember-400"
            >
              View all gear <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {featured.map((p, i) => (
              <ProductCard product={p} key={p.id} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATOR TEASER */}
      <section className="relative overflow-hidden border-t border-white/5 py-28">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
          <Reveal>
            <div className="relative aspect-video overflow-hidden rounded-sm border border-white/5">
              <Image
                src="https://picsum.photos/seed/asiad-configurator/1000/700"
                alt="3D bike configurator preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-base-950/10 to-transparent" />
              <span className="absolute bottom-5 left-5 clip-tag bg-ember-500 px-4 py-1.5 font-display text-xs font-700 uppercase tracking-widest text-base-950">
                Live 3D Preview
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              Configure in real time
            </p>
            <h2 className="mt-3 font-display text-3xl font-700 sm:text-4xl">
              See it on your bike before you buy it.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ash-300">
              Pick your seat color, material, and stitching, then toggle crash
              guards, phone mounts, and backrests — all rendered live in 3D so
              there are no surprises at install.
            </p>
            <Link
              href="/configurator"
              className="clip-tag mt-8 inline-flex items-center gap-2 bg-ember-500 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember"
            >
              Open Configurator <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-base-900 py-20">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h2 className="font-display text-3xl font-700 sm:text-4xl">
            Your bike is waiting for an upgrade.
          </h2>
          <p className="mt-4 max-w-md text-sm text-ash-400">
            Free shipping on orders over $75. Every build backed by our fit
            guarantee.
          </p>
          <Link
            href="/shop"
            className="clip-tag mt-8 inline-flex items-center gap-2 bg-ember-500 px-8 py-4 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember"
          >
            Shop the Collection <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
