import React from 'react'
import { Menu, X, FileText, Settings, HelpCircle } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-end p-4">
      <div className="pointer-events-auto relative">
        <button
          aria-label="Open Menu"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/50 shadow-lg shadow-indigo-200/30 backdrop-blur-md transition hover:bg-white/70"
        >
          {open ? (
            <X className="h-5 w-5 text-slate-700" />
          ) : (
            <Menu className="h-5 w-5 text-slate-700" />
          )}
        </button>
        {open && (
          <nav
            aria-label="Secondary"
            className="absolute right-0 mt-3 w-56 overflow-hidden rounded-2xl border border-white/40 bg-white/70 p-2 shadow-xl shadow-indigo-200/30 backdrop-blur-xl"
          >
            <a href="#" className="flex items-center gap-3 rounded-xl p-3 text-sm text-slate-700 transition hover:bg-white/80">
              <FileText className="h-4 w-4" />
              My Documents
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl p-3 text-sm text-slate-700 transition hover:bg-white/80">
              <Settings className="h-4 w-4" />
              Preferences
            </a>
            <a href="#" className="flex items-center gap-3 rounded-xl p-3 text-sm text-slate-700 transition hover:bg-white/80">
              <HelpCircle className="h-4 w-4" />
              Help & Support
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
