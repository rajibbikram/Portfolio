import React from 'react'
import { motion } from 'framer-motion'

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  external = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-primary'
  
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white hover:scale-105 hover:shadow-glow',
    secondary: 'glass hover:bg-white/20 text-white hover:scale-105',
    outline: 'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
    ghost: 'text-dark-muted hover:text-white hover:bg-white/10'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  }
  
  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }
  
  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
