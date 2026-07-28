import type { ComponentType } from 'react'

import { cn } from '@/lib/utils'

interface AccentIconProps {
  icon: ComponentType<{ className?: string }>
  className?: string
}

/**
 * Highlight icon with three layered effects, all transform/opacity driven:
 * a slowly rotating conic shimmer ring, a soft pulsing glow behind the icon,
 * and a gentle up/down float on the icon itself.
 */
export function AccentIcon({ icon: Icon, className }: AccentIconProps) {
  return (
    <div className={cn('relative flex size-14 items-center justify-center', className)}>
      {/* Rotating shimmer ring */}
      <div
        className="absolute inset-0 animate-spin-slow rounded-full opacity-70"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0%, #60a5fa 25%, transparent 50%, #a78bfa 75%, transparent 100%)',
          mask: 'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
          WebkitMask:
            'radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))',
        }}
      />

      {/* Soft pulsing glow */}
      <div className="absolute inset-1.5 animate-pulse-glow rounded-full bg-blue-400/30 blur-md" />

      {/* Floating icon */}
      <div className="glass relative flex size-10 animate-float items-center justify-center rounded-full">
        <Icon className="size-5 text-blue-300" />
      </div>
    </div>
  )
}
