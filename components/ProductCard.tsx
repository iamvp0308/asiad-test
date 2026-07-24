"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-sm border border-white/5 bg-base-850">
          {product.tag && (
            <span className="absolute left-3 top-3 z-10 clip-tag bg-ember-500 px-3 py-1 font-display text-[11px] font-700 uppercase tracking-wider text-base-950">
              {product.tag}
            </span>
          )}
          <div className="relative aspect-square w-full overflow-hidden bg-base-800">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>

        <div className="mt-4 flex items-start justify-between gap-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-ash-400">
              {product.category}
            </p>
            <h3 className="mt-1 font-display text-lg font-600 text-ash-100 transition-colors group-hover:text-ember-400">
              {product.name}
            </h3>
            <div className="mt-1 flex items-center gap-1 text-xs text-ash-400">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-ash-400/60">({product.reviews})</span>
            </div>
          </div>
          <div className="text-right">
            <p className="font-display text-lg font-700 text-ash-100">${product.price}</p>
            {product.compareAt && (
              <p className="font-mono text-xs text-ash-400 line-through">${product.compareAt}</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
