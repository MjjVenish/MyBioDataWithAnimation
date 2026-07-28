'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
}

/**
 * Card with a shimmering gradient border that sweeps on hover, a soft
 * expanding glow, and a slight lift — all via transform/opacity/background-position
 * so hover interactions stay on the compositor.
 */
export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      className={cn(
        'group relative rounded-2xl bg-[length:200%_100%] bg-[position:0%_0%] p-px transition-[background-position] duration-700 ease-out hover:bg-[position:100%_0%]',
        className,
      )}
      style={{
        backgroundImage:
          'linear-gradient(120deg, transparent 30%, rgba(96,165,250,0.7) 50%, transparent 70%)',
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative h-full rounded-2xl border border-border bg-card/80 p-6 backdrop-blur-md transition-shadow duration-300 group-hover:shadow-[0_0_40px_-8px_rgba(96,165,250,0.45)]">
        {children}
      </div>
    </motion.div>
  )
}
