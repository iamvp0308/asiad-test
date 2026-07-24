"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/configurator", label: "Configurator" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-base-950/85 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ember-500 text-base-950 group-hover:bg-ember-400 transition-colors">
            <Zap size={16} strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl font-700 tracking-wide">
            ASIAD
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`font-display text-sm font-600 uppercase tracking-[0.12em] transition-colors ${
                    active ? "text-ember-400" : "text-ash-300 hover:text-ash-100"
                  }`}
                >
                  {l.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full bg-ember-500"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/configurator"
            className="clip-tag inline-flex items-center bg-ember-500 px-5 py-2.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-colors hover:bg-ember-400"
          >
            Build Yours
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-ash-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/5 bg-base-950 lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block py-3 font-display text-lg font-600 uppercase tracking-wide ${
                      pathname === l.href ? "text-ember-400" : "text-ash-300"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
