"use client";

import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { Check, RotateCcw, ShieldCheck, Smartphone, Armchair, Loader2 } from "lucide-react";
import BikeModel, {
  type SeatColor,
  type SeatMaterial,
  type Stitching,
  type Accessories,
} from "@/components/BikeModel";

const seatColors: { id: SeatColor; label: string; hex: string }[] = [
  { id: "black", label: "Black", hex: "#161616" },
  { id: "brown", label: "Brown", hex: "#6b4028" },
  { id: "red", label: "Red", hex: "#8c1f1f" },
];

const seatMaterials: { id: SeatMaterial; label: string; price: number; blurb: string }[] = [
  { id: "leather", label: "Leather", price: 89, blurb: "Full-grain, weatherproof" },
  { id: "suede", label: "Suede", price: 74, blurb: "Soft grip, cushioned" },
  { id: "carbon", label: "Carbon", price: 129, blurb: "Woven, race-spec" },
];

const stitchOptions: { id: Stitching; label: string }[] = [
  { id: "diamond", label: "Diamond" },
  { id: "straight", label: "Straight" },
];

const accessoryList: {
  id: keyof Accessories;
  label: string;
  price: number;
  icon: typeof ShieldCheck;
}[] = [
  { id: "crashGuard", label: "Crash Guard", price: 149, icon: ShieldCheck },
  { id: "phoneHolder", label: "Phone Holder", price: 39, icon: Smartphone },
  { id: "backrest", label: "Backrest", price: 119, icon: Armchair },
];

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-ash-300">
        <Loader2 className="animate-spin text-ember-500" size={26} />
        <span className="font-mono text-xs uppercase tracking-widest">Loading build…</span>
      </div>
    </Html>
  );
}

export default function ConfiguratorClient() {
  const [seatColor, setSeatColor] = useState<SeatColor>("black");
  const [seatMaterial, setSeatMaterial] = useState<SeatMaterial>("leather");
  const [stitching, setStitching] = useState<Stitching>("diamond");
  const [accessories, setAccessories] = useState<Accessories>({
    crashGuard: true,
    phoneHolder: false,
    backrest: false,
  });

  const materialPrice = seatMaterials.find((m) => m.id === seatMaterial)?.price ?? 0;

  const total = useMemo(() => {
    let sum = materialPrice;
    accessoryList.forEach((a) => {
      if (accessories[a.id]) sum += a.price;
    });
    return sum;
  }, [materialPrice, accessories]);

  function toggleAccessory(id: keyof Accessories) {
    setAccessories((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function resetBuild() {
    setSeatColor("black");
    setSeatMaterial("leather");
    setStitching("diamond");
    setAccessories({ crashGuard: true, phoneHolder: false, backrest: false });
  }

  return (
    <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_400px]">
      {/* 3D VIEWPORT */}
      <div className="relative h-[420px] border-b border-white/5 bg-gradient-to-b from-base-900 to-base-950 lg:h-[calc(100vh-88px)] lg:border-b-0 lg:border-r">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <Canvas shadows camera={{ position: [3.4, 1.6, 4.2], fov: 42 }} className="relative">
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.55} />
            <directionalLight
              position={[4, 6, 3]}
              intensity={1.6}
              color="#ffe1bd"
              castShadow
              shadow-mapSize={[1024, 1024]}
            />
            <pointLight position={[-4, 2, -3]} intensity={0.5} color="#ff5a1f" />
            <pointLight position={[3, -2, 4]} intensity={0.4} color="#ffffff" />
            <BikeModel
              seatColor={seatColor}
              seatMaterial={seatMaterial}
              stitching={stitching}
              accessories={accessories}
            />
            <ContactShadows position={[0, -0.82, 0]} opacity={0.55} scale={8} blur={2.2} far={2} />
            <OrbitControls
              enablePan={false}
              minDistance={2.8}
              maxDistance={7}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 1.9}
            />
          </Suspense>
        </Canvas>

        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-widest text-ash-400">
          Drag to rotate · Scroll to zoom
        </div>
      </div>

      {/* CONTROL PANEL */}
      <div className="max-h-[calc(100vh-88px)] overflow-y-auto px-6 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              Build Your Own
            </p>
            <h1 className="mt-1 font-display text-2xl font-700">Configurator</h1>
          </div>
          <button
            onClick={resetBuild}
            className="flex items-center gap-1.5 rounded-sm border border-white/10 px-3 py-2 font-mono text-xs text-ash-300 transition-colors hover:border-ember-500 hover:text-ember-400"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>

        {/* Seat Color */}
        <section className="mb-8">
          <h3 className="mb-3 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Seat Cover Color
          </h3>
          <div className="flex gap-3">
            {seatColors.map((c) => (
              <button
                key={c.id}
                onClick={() => setSeatColor(c.id)}
                className="flex flex-col items-center gap-2"
              >
                <span
                  className={`h-11 w-11 rounded-full border-2 transition-transform ${
                    seatColor === c.id ? "scale-110 border-ember-500" : "border-white/20"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
                <span
                  className={`font-mono text-[11px] ${
                    seatColor === c.id ? "text-ember-400" : "text-ash-400"
                  }`}
                >
                  {c.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* Material */}
        <section className="mb-8">
          <h3 className="mb-3 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Material
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {seatMaterials.map((m) => (
              <button
                key={m.id}
                onClick={() => setSeatMaterial(m.id)}
                className={`clip-panel rounded-sm border p-3 text-left transition-colors ${
                  seatMaterial === m.id
                    ? "border-ember-500 bg-ember-500/10"
                    : "border-white/10 bg-base-850 hover:border-white/25"
                }`}
              >
                <p
                  className={`font-display text-sm font-700 ${
                    seatMaterial === m.id ? "text-ember-400" : "text-ash-100"
                  }`}
                >
                  {m.label}
                </p>
                <p className="mt-1 font-mono text-[10px] text-ash-400">{m.blurb}</p>
                <p className="mt-2 font-mono text-xs text-ash-300">${m.price}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Stitching */}
        <section className="mb-8">
          <h3 className="mb-3 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Stitching Pattern
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {stitchOptions.map((s) => (
              <button
                key={s.id}
                onClick={() => setStitching(s.id)}
                className={`rounded-sm border px-4 py-3 font-display text-sm font-700 transition-colors ${
                  stitching === s.id
                    ? "border-ember-500 bg-ember-500/10 text-ember-400"
                    : "border-white/10 bg-base-850 text-ash-100 hover:border-white/25"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </section>

        {/* Accessories */}
        <section className="mb-8">
          <h3 className="mb-3 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Accessories
          </h3>
          <div className="space-y-2">
            {accessoryList.map((a) => {
              const active = accessories[a.id];
              return (
                <button
                  key={a.id}
                  onClick={() => toggleAccessory(a.id)}
                  className={`flex w-full items-center justify-between rounded-sm border px-4 py-3 transition-colors ${
                    active
                      ? "border-ember-500 bg-ember-500/10"
                      : "border-white/10 bg-base-850 hover:border-white/25"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <a.icon size={17} className={active ? "text-ember-400" : "text-ash-400"} />
                    <span
                      className={`font-display text-sm font-600 ${
                        active ? "text-ember-400" : "text-ash-100"
                      }`}
                    >
                      {a.label}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-ash-400">+${a.price}</span>
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-sm border ${
                        active ? "border-ember-500 bg-ember-500" : "border-white/20"
                      }`}
                    >
                      {active && <Check size={13} className="text-base-950" />}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Summary */}
        <motion.div
          layout
          className="clip-panel sticky bottom-0 border border-white/10 bg-base-850 p-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-ash-400">
              Build Total
            </span>
            <motion.span
              key={total}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-2xl font-700 text-ash-100"
            >
              ${total}
            </motion.span>
          </div>
          <button className="clip-tag mt-4 w-full bg-ember-500 px-6 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember">
            Add Build to Cart
          </button>
          <p className="mt-2 text-center font-mono text-[10px] text-ash-400">
            Demo tool — pricing reflects sample data only.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
