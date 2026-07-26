'use client'

import { motion, type Variants } from 'framer-motion'
import { Mail, Code2, UserCheck, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: '', email: '', message: '' })
  }

  const socials = [
    { icon: Code2, label: 'GitHub', href: '#' },
    { icon: UserCheck, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-shadow-crisp">
            Let&apos;s <span className="text-blue-400">Work Together</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto text-shadow-crisp">
            Have a project in mind? I&apos;d love to hear about it. Reach out and let&apos;s create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <motion.input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-all duration-300"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <motion.textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-foreground/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full group relative overflow-hidden px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{submitted ? 'Message Sent!' : 'Send Message'}</span>
                <Send size={18} className="relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId="submitGlow"
                />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Direct Contact */}
            <motion.div variants={itemVariants} className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Get in touch directly</h3>
              <p className="text-foreground/70 mb-6">
                Prefer a direct conversation? Here are my contact channels:
              </p>

              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      whileHover={{ x: 4 }}
                    >
                      <Icon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                      <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                        {social.label}
                      </span>
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div variants={itemVariants} className="glass-strong rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
              <p className="text-foreground/70 mb-4">
                I&apos;m currently available for new projects and freelance work. Response time is typically
                within 24 hours.
              </p>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for work</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
