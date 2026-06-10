'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Rocket, Users, Zap } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { personalData } from '@/data'

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    },
    {
      icon: Database,
      title: "Data Driven",
      description: "Making informed decisions based on data and analytics"
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Building applications that work for diverse audiences"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adapting to new technologies and frameworks rapidly"
    }
  ]

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "10+", label: "Happy Clients" },
    { number: "5+", label: "Technologies" }
  ]

  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">About Me</Badge>
          <h2 className="heading-lg mb-4">Get To Know Me</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through innovative web solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="heading-md mb-4">Who I Am</h3>
              <p className="text-muted mb-4">
                I'm a passionate full-stack developer based in {personalData.location} with a love for creating 
                elegant solutions to complex problems. My journey in web development started {new Date().getFullYear() - 2020} years ago, 
                and I've been hooked ever since.
              </p>
              <p className="text-muted mb-4">
                I specialize in building modern web applications using cutting-edge technologies like React, 
                Next.js, and Node.js. I believe in writing clean, maintainable code and creating user experiences 
                that are both beautiful and functional.
              </p>
              <p className="text-muted">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="dark" className="text-center p-4">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-muted">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card variant="dark" className="p-6 text-center hover-lift">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary-400" />
                        </div>
                      </div>
                      <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted text-sm">{highlight.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="heading-md mb-4">Technologies I Work With</h3>
            <p className="text-muted">Modern tools and frameworks for building amazing applications</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git", "Docker", "AWS", "Figma"].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-4 py-2">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
