'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'StreetScore',
    description: 'A sports tracking app with real-time analytics and team collaboration features.',
    tags: ['React', 'Next.js', 'Socket.io', 'MongoDB'],
    gradient: 'from-blue-500 to-cyan-500',
    size: 'col-span-1 row-span-1 md:col-span-2',
  },
  {
    id: 2,
    title: 'MyChatAi',
    description: 'Real-time messaging application with AI-powered responses and sentiment analysis.',
    tags: ['Next.js', 'WebSocket', 'AI', 'Tailwind'],
    gradient: 'from-purple-500 to-pink-500',
    size: 'col-span-1 row-span-1 md:col-span-1',
  },
  {
    id: 3,
    title: 'Portfolio Site',
    description: 'Premium animated portfolio with Framer Motion and glassmorphism design.',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    gradient: 'from-green-500 to-emerald-500',
    size: 'col-span-1 row-span-1 md:col-span-1',
  },
]

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-crisp">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl text-shadow-crisp">
            A selection of projects showcasing my expertise in full-stack development and UI/UX design.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`${project.size} group relative`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-100px' }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300 blur-xl`}
              />

              {/* Card */}
              <motion.div
                className="glass-strong rounded-2xl p-8 h-full flex flex-col justify-between relative z-10 cursor-pointer overflow-hidden"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover tilt effect */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotateX: 0, rotateY: 0 }}
                  animate={
                    hoveredId === project.id
                      ? { rotateX: 5, rotateY: 5 }
                      : { rotateX: 0, rotateY: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-blue-400 font-semibold border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-2 text-blue-400 font-semibold mt-auto"
                  whileHover={{ gap: 8 }}
                >
                  <span>View Project</span>
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
