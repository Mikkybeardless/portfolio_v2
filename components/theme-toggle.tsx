"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
        <div className="w-[18px] h-[18px]" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:border-primary/50 transition-all group"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
      ) : (
        <Sun className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
      )}
    </button>
  )
}
