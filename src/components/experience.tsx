'use client'

import { motion, type Variants } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Co.',
    period: '2023 - Present',
    description:
      'Led development of scalable web applications using Next.js and React. Mentored junior developers and established best practices for the team.',
    highlights: [
      'Architected microservices using Node.js and PostgreSQL',
      'Improved performance by 45% through optimization',
      'Led team of 5 developers',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2021 - 2023',
    description:
      'Built and maintained multiple client projects using React, Node.js, and AWS. Implemented CI/CD pipelines and improved deployment efficiency.',
    highlights: [
      'Built 10+ production applications',
      'Implemented automated testing suite',
      'Reduced deployment time by 60%',
    ],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Creative Web Studio',
    period: '2020 - 2021',
    description:
      'Created responsive and interactive user interfaces using React and modern CSS. Collaborated closely with UX/UI designers.',
    highlights: [
      'Developed responsive designs for 5+ clients',
      'Achieved 98% lighthouse score',
      'Won best UX award',
    ],
  },
]

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-crisp">
            Experience & <span className="text-blue-400">Background</span>
          </h2>
          <p className="text-foreground/60 text-lg text-shadow-crisp">
            A timeline of my professional journey and key achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-purple-500 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="md:pl-32 relative">
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 top-2 w-16 h-16 glass rounded-full items-center justify-center border border-blue-400/30 hidden md:flex"
                whileInView={{
                  boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)',
                }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                className="glass-strong rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-foreground/50 text-sm font-semibold whitespace-nowrap ml-4">
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-foreground/70">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
