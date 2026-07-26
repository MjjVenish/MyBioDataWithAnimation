'use client'

import { motion, type Variants } from 'framer-motion'
import { MapPin, Briefcase, GraduationCap, Code2 } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Faster Page Loads', value: '35%' },
  { label: 'Faster API Response', value: '25%' },
]

const facts = [
  { icon: MapPin, text: 'Tirunelveli, Tamil Nadu' },
  { icon: Briefcase, text: 'Full-Stack Developer at BM e-Solutions' },
  { icon: GraduationCap, text: 'B.E. Mechanical Engineering' },
  { icon: Code2, text: 'React.js · Next.js · Node.js' },
]

export default function Profile() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section id="profile" className="py-24 px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Photo */}
          <motion.div variants={itemVariants} className="mx-auto md:mx-0">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-3 bg-linear-to-br from-blue-400/30 via-purple-400/20 to-pink-400/30 rounded-3xl blur-2xl -z-10" />
              <div className="relative w-full h-full glass-strong rounded-3xl p-2 overflow-hidden">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/ProfilePhoto.png"
                    alt="Profile photo"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 glass-strong px-4 py-2 rounded-full flex items-center gap-2 border border-green-500/30"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-green-400">Available</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bio & details */}
          <div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-crisp">
              Get to <span className="text-blue-400">Know Me</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-foreground/70 text-lg leading-relaxed mb-6 text-shadow-crisp">
              I&apos;m Venish, a full-stack developer with 2+ years of production experience building
              and scaling e-commerce platforms using React.js, Next.js, and Node.js. I&apos;ve
              delivered measurable outcomes—including a 35% reduction in page load time, 25% faster
              API responses, and a 20% lift in customer satisfaction—and I&apos;m comfortable owning
              features end-to-end, from UI to API to database.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-4 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Quick facts */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-3">
              {facts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.text} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                    <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm text-foreground/70">{fact.text}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
