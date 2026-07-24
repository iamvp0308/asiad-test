import Link from "next/link";
import { Instagram, Youtube, Twitter, Zap } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Seat Covers", href: "/shop?category=Seat+Covers" },
      { label: "Crash Guards", href: "/shop?category=Crash+Guards" },
      { label: "Mounts", href: "/shop?category=Mounts" },
      { label: "Carbon Trim", href: "/shop?category=Carbon+Trim" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About ASIAD", href: "/about" },
      { label: "Configurator", href: "/configurator" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "/contact" },
      { label: "Warranty", href: "/contact" },
      { label: "Install Guides", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ember-500 text-base-950">
                <Zap size={16} strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-700 tracking-wide">ASIAD</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-ash-400">
              Engineered motorcycle accessories for riders who take the long way.
              Designed in the garage, tested on the road.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ash-300 transition-colors hover:border-ember-500 hover:text-ember-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm font-700 uppercase tracking-[0.14em] text-ash-100">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ash-400 transition-colors hover:text-ember-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-ash-400 md:flex-row">
          <p>© {new Date().getFullYear()} ASIAD Motorcycle Co. All rights reserved.</p>
          <p className="font-mono">Demo storefront — no real transactions occur.</p>
        </div>
      </div>
    </footer>
  );
}
