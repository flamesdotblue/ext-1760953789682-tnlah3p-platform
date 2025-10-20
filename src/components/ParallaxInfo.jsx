import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ShieldCheck, Sparkles, Feather } from 'lucide-react'

export default function ParallaxInfo() {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20])

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-white/80 py-24">
      {/* Parallax layers */}
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -left-10 top-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-rose-200/40 blur-3xl" />
      <motion.div style={{ y: y3 }} className="pointer-events-none absolute -bottom-10 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-manrope text-3xl font-semibold text-slate-800 md:text-4xl">
            A serene space for effortless translation
          </h2>
          <p className="mt-3 text-slate-600">
            Designed with calm, clarity, and craft. Focus on the words—let the interface fade into the background.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card
            icon={<Feather className="h-5 w-5 text-indigo-500" />}
            title="Airy and minimalist"
            desc="Pastel palettes, balanced whitespace, and soft lighting create a distraction-free flow."
          />
          <Card
            icon={<ShieldCheck className="h-5 w-5 text-rose-500" />}
            title="Private by default"
            desc="Secure processing with no retention. Your documents remain yours only."
          />
          <Card
            icon={<Sparkles className="h-5 w-5 text-violet-500" />}
            title="Smart and clear"
            desc="Clean typography and precise layout keep instructions and results perfectly legible."
          />
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 ring-1 ring-inset ring-slate-200/70">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-slate-600">{desc}</p>
    </motion.div>
  )
}
