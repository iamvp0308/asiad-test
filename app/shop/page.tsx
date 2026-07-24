import { Suspense } from "react";
import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop — ASIAD",
  description: "Browse ASIAD's full catalog of premium motorcycle accessories.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-ash-400">Loading catalog…</div>}>
      <ShopClient />
    </Suspense>
  );
}
