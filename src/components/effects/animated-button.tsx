'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: ReactNode
}

/**
 * Button with a soft expanding glow and slight lift on hover, plus a
 * light-sweep shimmer across the surface. Lift/scale use transform,
 * the glow uses box-shadow, and the sweep uses a translated gradient layer.
 */
export function AnimatedButton({ className, children, ...props }: AnimatedButtonProps) {
  return (
    <motion.button
      className={cn(
        'group relative overflow-hidden rounded-full bg-linear-to-r from-blue-500 to-purple-500 px-6 py-3 font-semibold text-white shadow-[0_0_0_0_rgba(96,165,250,0)] transition-shadow duration-300 hover:shadow-[0_0_30px_4px_rgba(96,165,250,0.45)]',
        className,
      )}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
    </motion.button>
  )
}
