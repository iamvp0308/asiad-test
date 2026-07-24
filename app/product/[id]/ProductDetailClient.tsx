"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Minus, Plus, ShieldCheck, Truck, Check } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [color, setColor] = useState(product.colors[0]?.name);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  }

  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
      {/* GALLERY */}
      <div>
        <motion.div
          key={activeImage}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="relative aspect-square overflow-hidden rounded-sm border border-white/5 bg-base-850"
        >
          <Image
            src={product.gallery[activeImage] ?? product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div className="mt-4 flex gap-3">
          {product.gallery.map((src, i) => (
            <button
              key={src}
              onClick={() => setActiveImage(i)}
              className={`relative h-20 w-20 overflow-hidden rounded-sm border transition-colors ${
                activeImage === i ? "border-ember-500" : "border-white/10"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* INFO */}
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
          {product.category}
        </p>
        <h1 className="mt-2 font-display text-3xl font-700 sm:text-4xl">{product.name}</h1>

        <div className="mt-3 flex items-center gap-2 text-sm text-ash-400">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-ash-400/30"}
              />
            ))}
          </div>
          <span>{product.rating}</span>
          <span className="text-ash-400/60">· {product.reviews} reviews</span>
        </div>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="font-display text-3xl font-700 text-ash-100">${product.price}</span>
          {product.compareAt && (
            <span className="font-mono text-base text-ash-400 line-through">${product.compareAt}</span>
          )}
        </div>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-ash-300">{product.description}</p>

        {/* Color */}
        {product.colors.length > 0 && (
          <div className="mt-8">
            <p className="mb-3 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
              Color — <span className="text-ember-400">{color}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  aria-label={c.name}
                  className={`h-10 w-10 rounded-full border-2 transition-transform ${
                    color === c.name ? "scale-110 border-ember-500" : "border-white/20"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Qty + Add to cart */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-sm border border-white/15">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="p-3 text-ash-300 hover:text-ember-400"
              aria-label="decrease quantity"
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-mono text-sm">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="p-3 text-ash-300 hover:text-ember-400"
              aria-label="increase quantity"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={handleAdd}
            className="clip-tag flex-1 min-w-[180px] bg-ember-500 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember"
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="flex items-center justify-center gap-2"
                >
                  <Check size={16} /> Added to Cart
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="block text-center"
                >
                  Add to Cart — ${(product.price * qty).toFixed(0)}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <p className="mt-3 font-mono text-[11px] text-ash-400">
          Demo storefront — checkout is not wired to a live payment processor.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6 text-xs text-ash-400">
          <div className="flex items-center gap-2">
            <Truck size={16} className="text-ember-400" /> Ships in 1–2 days
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-ember-400" /> Fit guarantee
          </div>
        </div>

        {/* Specs */}
        <div className="mt-10">
          <h3 className="mb-4 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Specifications
          </h3>
          <dl className="divide-y divide-white/5 border-y border-white/5">
            {product.specs.map((s) => (
              <div key={s.label} className="flex justify-between py-3 text-sm">
                <dt className="text-ash-400">{s.label}</dt>
                <dd className="font-mono text-ash-100">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h3 className="mb-4 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
            Highlights
          </h3>
          <ul className="space-y-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-ash-300">
                <Check size={15} className="mt-0.5 shrink-0 text-ember-400" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
