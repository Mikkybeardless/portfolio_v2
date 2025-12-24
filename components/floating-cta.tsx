"use client"

import { ArrowRight } from "lucide-react"

export default function FloatingCTA() {
  return (
    <a
      href="#contact"
      className="fixed right-6 bottom-6 z-40 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 py-3 rounded-full shadow-lg shadow-primary/25 transition-all duration-300 flex items-center gap-2 group"
    >
      Get in touch
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  )
}
