import React from 'react'
import { motion } from 'framer-motion'

export const Card = ({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'glass',
    dark: 'glass-dark',
    gradient: 'bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur-md border border-white/20'
  }
  
  const baseClasses = 'rounded-xl p-6 transition-all duration-300'
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-glow' : ''
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      className={classes}
      whileHover={hover ? { scale: 1.05, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
