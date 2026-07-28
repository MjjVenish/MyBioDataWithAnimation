'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

interface RevealProps {
  children: ReactNode
  className?: string
  /** Re-trigger every time the section scrolls into view instead of only once. */
  once?: boolean
}

/** Wraps a group of `RevealItem`s and staggers their fade-and-slide-up entrance. */
export function RevealGroup({ children, className, once = true }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

/** A single fade-and-slide-up child; use inside `RevealGroup` for staggered entrances. */
export function RevealItem({ children, className }: Omit<RevealProps, 'once'>) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
