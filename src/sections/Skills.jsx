'use client'

import { motion } from 'framer-motion'
import { Code, Server, Tool, BarChart3, Database, Cloud } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { skillsData } from '@/data'

export const Skills = () => {
  const getIconComponent = (iconName) => {
    const icons = {
      Code,
      Server,
      Tool,
      BarChart3,
      Database,
      Cloud
    }
    return icons[iconName] || Code
  }

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Skills & Expertise</Badge>
          <h2 className="heading-lg mb-4">What I Bring To The Table</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A comprehensive skill set covering frontend, backend, and modern development tools
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillsData.categories.map((category, categoryIndex) => {
            const IconComponent = getIconComponent(category.icon)
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-primary-400" />
                  </div>
                  <h3 className="heading-md">{category.name}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card variant="dark" className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-semibold">{skill.name}</h4>
                          <span className="text-primary-400 font-medium">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="w-full bg-dark-accent/50 rounded-full h-2">
                            <motion.div
                              className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>

                        {/* Skill Level Indicator */}
                        <div className="flex justify-between text-xs text-muted">
                          <span>Beginner</span>
                          <span>Intermediate</span>
                          <span>Expert</span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="heading-md mb-4">Core Tech Stack</h3>
            <p className="text-muted">Technologies I use most frequently in my projects</p>
          </div>

          <Card variant="gradient" className="p-8">
            <div className="flex flex-wrap justify-center gap-4">
              {skillsData.techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="tech-stack-item">
                    <div className="w-8 h-8 rounded bg-primary-500/20 flex items-center justify-center mr-2">
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                    </div>
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Learning & Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card variant="dark" className="p-8">
            <h3 className="heading-md mb-4">Always Learning, Always Growing</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Technology is constantly evolving, and so am I. I'm always exploring new frameworks, 
              tools, and best practices to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="success">Currently Learning: Advanced TypeScript</Badge>
              <Badge variant="warning">Exploring: WebAssembly</Badge>
              <Badge variant="gradient">Interested: AI/ML Integration</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
