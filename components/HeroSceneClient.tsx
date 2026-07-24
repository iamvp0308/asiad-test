"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-mono text-xs uppercase tracking-widest text-ash-400">
        Loading…
      </span>
    </div>
  ),
});

export default function HeroSceneClient() {
  return <HeroScene />;
}
