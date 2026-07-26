'use client'

import { motion } from 'framer-motion'

const techs = [
  'Next.js',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'Framer Motion',
  'Supabase',
  'PostgreSQL',
  'Vercel',
]

export default function TechMarquee() {
  return (
    <section className="py-20 px-6 bg-linear-to-b from-transparent to-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-center text-2xl font-semibold text-foreground/80 mb-12 text-shadow-crisp"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>

        <div className="marquee-container">
          <motion.div
            className="marquee"
            animate={{ x: [0, -100 * (techs.length + 1)] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...techs, ...techs].map((tech, i) => (
              <motion.div
                key={i}
                className="glass px-6 py-3 rounded-full text-sm font-semibold text-blue-400 whitespace-nowrap hover:glow-accent transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient fade effect */}
        <div className="absolute top-0 left-0 w-20 h-full bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-20 h-full bg-linear-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
