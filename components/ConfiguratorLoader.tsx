"use client";

import dynamic from "next/dynamic";

const ConfiguratorClient = dynamic(() => import("@/components/ConfiguratorClient"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[70vh] items-center justify-center">
      <p className="font-mono text-sm uppercase tracking-widest text-ash-400">
        Loading configurator…
      </p>
    </div>
  ),
});

export default function ConfiguratorLoader() {
  return <ConfiguratorClient />;
}
