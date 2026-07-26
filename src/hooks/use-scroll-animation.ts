'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const useScrollAnimation = () => {
  const { scrollY } = useScroll()
  
  // Opacity based on scroll
  const opacity = useTransform(scrollY, [0, 200], [0, 1])
  const scale = useTransform(scrollY, [0, 200], [0.8, 1])
  
  return { opacity, scale }
}

// For individual elements
export const createScrollVariants = (
  offset = 100,
  delay = 0
) => ({
  hidden: {
    opacity: 0,
    y: offset,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut',
    },
  },
})
