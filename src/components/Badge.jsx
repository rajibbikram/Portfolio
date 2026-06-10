import React from 'react'
import { motion } from 'framer-motion'

export const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const variants = {
    default: 'bg-primary-500/20 text-primary-300 border border-primary-500/30',
    secondary: 'bg-dark-accent/50 text-dark-muted border border-dark-border',
    success: 'bg-green-500/20 text-green-300 border border-green-500/30',
    warning: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
    error: 'bg-red-500/20 text-red-300 border border-red-500/30',
    gradient: 'bg-gradient-to-r from-primary-500/20 to-purple-500/20 text-white border border-white/20'
  }
  
  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  }
  
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-all duration-300'
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.span>
  )
}
