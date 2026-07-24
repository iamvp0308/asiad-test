"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-sm border border-ember-500/30 bg-ember-500/5 px-8 py-16 text-center"
      >
        <CheckCircle2 className="text-ember-400" size={40} />
        <h3 className="mt-4 font-display text-2xl font-700">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ash-400">
          Thanks for reaching out — this is a demo form, so nothing was sent
          to a live inbox, but in production you&apos;d hear back within one
          business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-mono text-sm text-ember-400 underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ash-400">
            Name
          </label>
          <input
            required
            type="text"
            placeholder="Jordan Rivera"
            className="w-full rounded-sm border border-white/10 bg-base-900 px-4 py-3 text-sm text-ash-100 outline-none transition-colors focus:border-ember-500"
          />
        </div>
        <div>
          <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ash-400">
            Email
          </label>
          <input
            required
            type="email"
            placeholder="jordan@email.com"
            className="w-full rounded-sm border border-white/10 bg-base-900 px-4 py-3 text-sm text-ash-100 outline-none transition-colors focus:border-ember-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ash-400">
          Subject
        </label>
        <select className="w-full rounded-sm border border-white/10 bg-base-900 px-4 py-3 text-sm text-ash-100 outline-none transition-colors focus:border-ember-500">
          <option className="bg-base-900">General inquiry</option>
          <option className="bg-base-900">Order support</option>
          <option className="bg-base-900">Warranty claim</option>
          <option className="bg-base-900">Wholesale / dealer</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-ash-400">
          Message
        </label>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your bike and what you're looking for..."
          className="w-full resize-none rounded-sm border border-white/10 bg-base-900 px-4 py-3 text-sm text-ash-100 outline-none transition-colors focus:border-ember-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="clip-tag inline-flex w-full items-center justify-center gap-2 bg-ember-500 px-7 py-3.5 font-display text-sm font-700 uppercase tracking-[0.1em] text-base-950 transition-all hover:bg-ember-400 hover:shadow-ember disabled:opacity-60 sm:w-auto"
      >
        <AnimatePresence mode="wait" initial={false}>
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              Sending…
            </motion.span>
          ) : (
            <motion.span
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              Send Message <Send size={15} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </form>
  );
}
