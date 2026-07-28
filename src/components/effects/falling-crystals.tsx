'use client'

import { useEffect, useState, type ComponentType, type CSSProperties } from 'react'
import { Gem, Sparkle, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'

type IconComponent = ComponentType<{ className?: string; style?: CSSProperties }>

const ICONS: IconComponent[] = [Gem, Sparkle, Sparkles]
const COLORS = ['#60a5fa', '#a78bfa', '#22d3ee', '#f472b6']

type Particle = {
  id: number
  Icon: IconComponent
  left: number
  size: number
  opacity: number
  blur: number
  duration: number
  delay: number
  drift: number
  color: string
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    // depth in [0, 1]: 0 = far (small, dim, blurry, slow), 1 = near (large, bright, sharp, fast)
    const depth = Math.random()
    return {
      id,
      Icon: ICONS[Math.floor(Math.random() * ICONS.length)],
      left: Math.random() * 100,
      size: 8 + depth * 22,
      opacity: 0.15 + depth * 0.45,
      blur: (1 - depth) * 3,
      duration: 14 - depth * 8,
      delay: -Math.random() * 14,
      drift: (Math.random() - 0.5) * 60,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }
  })
}

interface FallingCrystalsProps {
  /** Number of particles to render. */
  count?: number
  className?: string
}

export default function FallingCrystals({ count = 40, className }: FallingCrystalsProps) {
  // Particles are generated client-side only (after mount) so randomized values
  // never mismatch between server and client render.
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return
    // Randomized layout must not run during the SSR/first-client-render pass,
    // or hydration will mismatch — this effect is the one-time client-only trigger.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(generateParticles(count))
  }, [count])

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-0 -z-10 overflow-hidden',
        className,
      )}
    >
      {particles.map((p) => (
        <p.Icon
          key={p.id}
          className="absolute top-[-10%] animate-crystal-fall will-change-transform"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              color: p.color,
              filter: `blur(${p.blur}px) drop-shadow(0 0 6px ${p.color}80)`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              '--drift': `${p.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
