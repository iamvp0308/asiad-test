import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="font-display text-8xl font-700 text-stroke">404</p>
      <h1 className="mt-4 font-display text-2xl font-700">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-ash-400">
        Looks like this part fell off. Let&apos;s get you back on the road.
      </p>
      <Link
        href="/"
        className="clip-tag mt-8 inline-flex items-center gap-2 bg-ember-500 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-colors hover:bg-ember-400"
      >
        <ArrowLeft size={16} /> Back to home
      </Link>
    </div>
  );
}
