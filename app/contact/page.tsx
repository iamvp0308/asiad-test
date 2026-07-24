import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — ASIAD",
  description: "Get in touch with the ASIAD team for support, orders, or wholesale inquiries.",
};

const info = [
  { icon: Mail, label: "Email", value: "support@asiad-moto.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 019-2831" },
  { icon: MapPin, label: "Workshop", value: "412 Foundry Rd, Austin, TX" },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-widest text-ember-400">Get In Touch</p>
        <h1 className="mt-3 font-display text-4xl font-700 sm:text-5xl">Contact ASIAD</h1>
        <p className="mt-4 max-w-lg text-sm text-ash-400">
          Questions about fit, orders, or a custom build? Send us a message
          and we&apos;ll get back to you.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
        <Reveal delay={0.05}>
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex items-start gap-4 border-b border-white/5 pb-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-ember-500/10 text-ember-400">
                  <i.icon size={18} />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ash-400">
                    {i.label}
                  </p>
                  <p className="mt-1 text-sm text-ash-100">{i.value}</p>
                </div>
              </div>
            ))}

            <div className="clip-panel border border-white/5 bg-base-850 p-6">
              <h3 className="font-display text-sm font-700 uppercase tracking-widest text-ash-100">
                Support Hours
              </h3>
              <p className="mt-3 text-sm text-ash-400">Mon – Fri: 9am – 6pm CST</p>
              <p className="text-sm text-ash-400">Sat: 10am – 3pm CST</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="clip-panel border border-white/5 bg-base-850 p-6 sm:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
