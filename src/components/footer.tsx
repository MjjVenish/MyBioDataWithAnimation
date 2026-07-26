'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 text-shadow-crisp">{'<V />'}</h3>
            <p className="text-foreground/60 text-shadow-crisp">
              Full-stack developer crafting beautiful digital experiences.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 text-shadow-crisp">Quick Links</h4>
            <ul className="space-y-2">
              {['Work', 'About', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4 text-shadow-crisp">Follow</h4>
            <ul className="space-y-2">
              {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map((platform) => (
                <li key={platform}>
                  <a href="#" className="text-foreground/60 hover:text-blue-400 transition-colors text-sm">
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/50 text-sm text-shadow-crisp">
            © {currentYear} All rights reserved. Built with{' '}
            <span className="inline-flex items-center gap-1">
              <Heart size={14} className="text-red-500" />
              Next.js & React
            </span>
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <div className="w-1 h-1 bg-foreground/30 rounded-full" />
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
