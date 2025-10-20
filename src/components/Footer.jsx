import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} SoftLingo PDF Translator</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
