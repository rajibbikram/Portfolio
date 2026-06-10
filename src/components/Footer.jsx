'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Instagram, Heart, ArrowUp } from 'lucide-react'
import { Button } from './Button'
import { personalData, socialsData } from '@/data'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getIconComponent = (iconName) => {
    const icons = {
      Github,
      Linkedin,
      Twitter,
      Mail,
      Instagram
    }
    return icons[iconName] || Github
  }

  return (
    <footer className="relative border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-secondary/50" />
      
      <div className="relative section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-4">About</h3>
            <p className="text-muted mb-4">
              {personalData.bio}
            </p>
            <div className="flex space-x-4">
              {socialsData.map((social) => {
                const IconComponent = getIconComponent(social.icon)
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-dark-muted hover:text-white transition-colors duration-300 ${social.color}`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="heading-sm mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-500" />
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-muted hover:text-white transition-colors duration-300"
                >
                  {personalData.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 text-primary-500 flex items-center justify-center text-xs">
                  📍
                </div>
                <span className="text-muted">{personalData.location}</span>
              </div>
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  href={personalData.resume}
                  external
                  className="w-full"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-muted">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by {personalData.name}</span>
          </div>
          
          <div className="text-muted">
            © {currentYear} {personalData.name}. All rights reserved.
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="flex items-center space-x-2"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
