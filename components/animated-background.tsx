"use client";

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let frameId = 0
    let hue = 0; // Initialize hue for color cycling
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    type Particle = { x: number; y: number; vx: number; vy: number; r: number }
    let particles: Particle[] = []

    const sizes = { w: 0, h: 0 }

    function resize() {
      const { innerWidth, innerHeight } = window
      sizes.w = innerWidth
      sizes.h = innerHeight
      canvas.width = Math.floor(innerWidth * dpr)
      canvas.height = Math.floor(innerHeight * dpr)
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    function spawn() {
      const count = prefersReduced ? 40 : Math.floor((sizes.w * sizes.h) / 22000)
      particles = new Array(count).fill(0).map(() => ({
        x: Math.random() * sizes.w,
        y: Math.random() * sizes.h,
        vx: (Math.random() - 0.5) * (prefersReduced ? 0.1 : 0.4), // Slightly slower movement
        vy: (Math.random() - 0.5) * (prefersReduced ? 0.1 : 0.4),
        r: Math.random() * 1.5 + 0.5, // Slightly smaller particles
      }))
    }

    function step() {
      hue += 0.5; // Increment hue on each frame to shift colors
      ctx.clearRect(0, 0, sizes.w, sizes.h)

      // Animate particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // soft wrap edges
        if (p.x < -20) p.x = sizes.w + 20
        if (p.x > sizes.w + 20) p.x = -20
        if (p.y < -20) p.y = sizes.h + 20
        if (p.y > sizes.h + 20) p.y = -20

        // Draw particle with cycling color
        ctx.beginPath()
        // Use HSL color that cycles with the hue variable
        ctx.fillStyle = `hsl(${(hue + p.x / 5) % 360}, 80%, 70%)`
        ctx.globalAlpha = 0.8
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw connective lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          const maxDist2 = prefersReduced ? 60 * 60 : 110 * 110
          if (dist2 < maxDist2) {
            ctx.beginPath() // Corrected typo from leginPath to beginPath
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            
            // Set line color based on cycling hue and fade with distance
            const lineHue = (hue + (a.x + b.x) / 10) % 360;
            ctx.strokeStyle = `hsl(${lineHue}, 80%, 60%)`;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = 1 - (dist2 / maxDist2) * 0.7; // Fade out as distance increases
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1; // Reset global alpha

      if (!prefersReduced) {
        frameId = requestAnimationFrame(step)
      }
    }

    window.addEventListener("resize", resize)

    resize()
    if (prefersReduced) {
      step()
    } else {
      frameId = requestAnimationFrame(step)
    }

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}

