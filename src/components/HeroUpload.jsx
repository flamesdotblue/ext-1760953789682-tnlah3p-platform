import React from 'react'
import { Upload, Loader2, CheckCircle2, Globe, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const VIDEO_URL =
  'https://videos.pexels.com/video-files/4868370/4868370-uhd_2732_1440_24fps.mp4'

export default function HeroUpload() {
  const [dragOver, setDragOver] = React.useState(false)
  const [file, setFile] = React.useState(null)
  const [progress, setProgress] = React.useState(0)
  const [translating, setTranslating] = React.useState(false)
  const [done, setDone] = React.useState(false)
  const [language, setLanguage] = React.useState('Spanish')

  const onDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files?.[0]
    if (f && f.type === 'application/pdf') {
      setFile(f)
      setDone(false)
      setProgress(0)
    }
  }

  const onSelect = (e) => {
    const f = e.target.files?.[0]
    if (f && f.type === 'application/pdf') {
      setFile(f)
      setDone(false)
      setProgress(0)
    }
  }

  const startTranslation = () => {
    if (!file) return
    setTranslating(true)
    setDone(false)
    setProgress(0)
    let p = 0
    const timer = setInterval(() => {
      p += Math.random() * 18 + 6
      if (p >= 100) {
        p = 100
        clearInterval(timer)
        setTranslating(false)
        setDone(true)
      }
      setProgress(Math.min(100, Math.floor(p)))
    }, 500)
  }

  return (
    <section className="relative isolate flex min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Gradient and noise overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/80" />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(1200px 600px at 20% -10%, rgba(167, 204, 255, 0.35), transparent), radial-gradient(1000px 500px at 90% 10%, rgba(215, 187, 255, 0.35), transparent), radial-gradient(800px 400px at 30% 80%, rgba(255, 197, 182, 0.35), transparent)' }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAPUlEQVR4nO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwF4m6AAH3oWrdAAAAAElFTkSuQmCC')" }} />

      {/* Floating gentle shapes */}
      <motion.div
        className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-12 bottom-10 h-72 w-72 rounded-full bg-rose-200/50 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-manrope text-4xl font-semibold tracking-tight text-slate-800 md:text-6xl">
            Translate PDFs with calm clarity
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
            Drag and drop your document to begin. Minimal steps, maximum focus.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-4">
          {/* Upload area */}
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setDragOver(true)
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`group relative w-full cursor-pointer rounded-3xl border bg-white/70 p-6 shadow-xl shadow-indigo-200/30 backdrop-blur-xl transition ${
              dragOver ? 'border-indigo-300' : 'border-white/60'
            }`}
          >
            <input
              id="file"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={onSelect}
            />
            <label htmlFor="file" className="block">
              <div className="flex flex-col items-center justify-center gap-4 py-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 ring-1 ring-inset ring-indigo-200">
                  <Upload className="h-8 w-8" />
                </div>
                <div className="text-center">
                  <p className="text-lg font-medium text-slate-800">
                    Drag & drop your PDF here
                  </p>
                  <p className="text-sm text-slate-500">
                    or click to browse your files
                  </p>
                </div>
              </div>
            </label>

            {/* Selected file and actions */}
            <AnimatePresence>
              {file && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-2 rounded-2xl border border-slate-200/60 bg-white/70 p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-800">
                        {file.name}
                      </p>
                      <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB • PDF</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/80 px-3 py-2 text-sm text-slate-700">
                        <Globe className="h-4 w-4 text-slate-500" />
                        <select
                          className="bg-transparent outline-none"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                        >
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                          <option>Japanese</option>
                          <option>Portuguese</option>
                        </select>
                      </div>
                      <button
                        onClick={startTranslation}
                        disabled={translating}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-300/40 transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {translating ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Translating
                          </>
                        ) : (
                          <>
                            Start Translation
                            <ChevronRight className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Progress */}
                  <AnimatePresence>
                    {(translating || progress > 0) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-3"
                      >
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-300 transition-[width]"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                          <span>Processing…</span>
                          <span>{progress}%</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Done state */}
                  <AnimatePresence>
                    {done && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-50/70 p-3 text-emerald-700 ring-1 ring-inset ring-emerald-200/60"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        Your PDF has been translated to {language}. Download is ready.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="max-w-xl text-center text-xs text-slate-500">
            Files are processed securely. We never store your content.
          </p>
        </div>
      </div>
    </section>
  )
}
