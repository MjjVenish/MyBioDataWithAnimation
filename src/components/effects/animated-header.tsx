import { Gem } from 'lucide-react'

import { AccentIcon } from './accent-icon'
import { AnimatedButton } from './animated-button'
import { AnimatedCard } from './animated-card'
import { RevealGroup, RevealItem } from './reveal'

/**
 * Example section demonstrating the micro-interaction set together:
 * staggered fade-and-slide-up entrance, a floating/pulsing/shimmering
 * accent icon, an animated card, and an animated button.
 */
export function AnimatedHeaderDemo() {
  return (
    <RevealGroup className="mx-auto max-w-4xl px-6 py-24 text-center">
      <RevealItem className="mx-auto mb-6 w-fit">
        <AccentIcon icon={Gem} />
      </RevealItem>

      <RevealItem>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
          A modern, high-end feel
        </h1>
      </RevealItem>

      <RevealItem>
        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          Subtle motion, layered depth, and glow accents — built for 60fps.
        </p>
      </RevealItem>

      <RevealItem className="mb-12 flex justify-center">
        <AnimatedButton>Get started</AnimatedButton>
      </RevealItem>

      <RevealItem className="grid gap-6 text-left sm:grid-cols-3">
        {['Fast', 'Smooth', 'Delightful'].map((title) => (
          <AnimatedCard key={title}>
            <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">
              Hover to see the glow, lift, and shimmer border in action.
            </p>
          </AnimatedCard>
        ))}
      </RevealItem>
    </RevealGroup>
  )
}
