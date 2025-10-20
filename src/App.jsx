import React from 'react'
import Navbar from './components/Navbar'
import HeroUpload from './components/HeroUpload'
import ParallaxInfo from './components/ParallaxInfo'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-rose-50 text-slate-800 antialiased selection:bg-indigo-200/60 selection:text-indigo-900">
      <Navbar />
      <main className="relative">
        <HeroUpload />
        <ParallaxInfo />
      </main>
      <Footer />
    </div>
  )
}
