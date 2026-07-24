import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { products, getProduct, getRelated } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: `${product.name} — ASIAD`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const related = getRelated(product.id, product.category);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
      <Link
        href="/shop"
        className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-ash-400 transition-colors hover:text-ember-400"
      >
        <ArrowLeft size={15} /> Back to shop
      </Link>

      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="mt-24 border-t border-white/5 pt-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-ember-400">
              You Might Also Like
            </p>
            <h2 className="mt-3 font-display text-3xl font-700">Complete the build</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard product={p} key={p.id} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
