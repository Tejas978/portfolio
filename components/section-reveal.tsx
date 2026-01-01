"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface Props {
  id?: string
  title?: string
  children: React.ReactNode
  className?: string
}

export default function SectionReveal({ id, title, children, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} className={cn("scroll-mt-24 py-12 md:py-16", className)}>
      {title ? (
        <header className="mb-6">
          <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        </header>
      ) : null}

      <div
        ref={ref}
        className={cn(
          "transform-gpu transition-all duration-700",
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        )}
      >
        {children}
      </div>
    </section>
  )
}
