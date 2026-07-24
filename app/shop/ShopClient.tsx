"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { products, type Product } from "@/lib/products";

const categories = [
  "All",
  "Seat Covers",
  "Crash Guards",
  "Mounts",
  "Backrests",
  "Carbon Trim",
];

const sorts = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];

export default function ShopClient() {
  const params = useSearchParams();
  const router = useRouter();
  const initialCategory = params.get("category") || "All";

  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(200);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list: Product[] = products.filter((p) => p.price <= maxPrice);
    if (category !== "All") list = list.filter((p) => p.category === category);

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
    }
    return list;
  }, [category, sort, maxPrice]);

  function selectCategory(c: string) {
    setCategory(c);
    const url = c === "All" ? "/shop" : `/shop?category=${encodeURIComponent(c)}`;
    router.replace(url, { scroll: false });
  }

  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
          Category
        </h3>
        <div className="flex flex-col gap-1">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => selectCategory(c)}
              className={`flex items-center justify-between rounded-sm px-3 py-2 text-left text-sm transition-colors ${
                category === c
                  ? "bg-ember-500/10 text-ember-400"
                  : "text-ash-400 hover:bg-white/5 hover:text-ash-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-display text-sm font-700 uppercase tracking-widest text-ash-100">
          Max Price
        </h3>
        <input
          type="range"
          min={30}
          max={200}
          step={5}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-ember-500"
        />
        <p className="mt-2 font-mono text-sm text-ash-300">Up to ${maxPrice}</p>
      </div>
    </div>
  );

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
          Full Catalog
        </p>
        <h1 className="mt-3 font-display text-4xl font-700 sm:text-5xl">Shop ASIAD</h1>
        <p className="mt-4 max-w-lg text-sm text-ash-400">
          {filtered.length} products engineered for fit, durability, and a
          finish that won&apos;t quit before you do.
        </p>
      </Reveal>

      <div className="mt-10 flex items-center justify-between gap-4 border-y border-white/5 py-4 lg:hidden">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="flex items-center gap-2 font-display text-sm font-700 uppercase tracking-widest text-ash-100"
        >
          <SlidersHorizontal size={16} /> Filters
        </button>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-transparent font-mono text-sm text-ash-300"
        >
          {sorts.map((s) => (
            <option className="bg-base-900" key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28">{FilterPanel}</div>
        </aside>

        <div>
          <div className="mb-8 hidden items-center justify-between lg:flex">
            <p className="font-mono text-xs text-ash-400">
              Showing {filtered.length} of {products.length} products
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-sm border border-white/10 bg-base-900 px-3 py-2 font-mono text-sm text-ash-300"
            >
              {sorts.map((s) => (
                <option className="bg-base-900" key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {filtered.length ? (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {filtered.map((p, i) => (
                <ProductCard product={p} key={p.id} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-white/10 py-24 text-center">
              <p className="font-display text-lg text-ash-300">No products match these filters.</p>
              <button
                onClick={() => {
                  setCategory("All");
                  setMaxPrice(200);
                }}
                className="mt-4 font-mono text-sm text-ember-400 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex lg:hidden"
        >
          <div
            className="absolute inset-0 bg-base-950/80 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="relative ml-auto h-full w-[80%] max-w-xs overflow-y-auto bg-base-900 p-6"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-display text-lg font-700">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <X size={20} />
              </button>
            </div>
            {FilterPanel}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
