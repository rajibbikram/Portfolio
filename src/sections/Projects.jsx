'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Search } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { projectsData, projectCategories } from '@/data'

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'success'
      case 'in-progress':
        return 'warning'
      default:
        return 'default'
    }
  }

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Projects Showcase</Badge>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="text-muted max-w-2xl mx-auto">
            A collection of my recent work and personal projects that demonstrate my skills and expertise
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center space-x-2"
                >
                  {category === 'All' && <Filter className="w-4 h-4" />}
                  <span>{category}</span>
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-dark-accent/50 border border-dark-border rounded-lg text-white placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card variant="dark" className="project-card group">
                  {/* Project Image */}
                  <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">
                          {project.category === 'Full Stack' && '🌐'}
                          {project.category === 'Frontend' && '🎨'}
                          {project.category === 'Web App' && '⚡'}
                          {project.category === 'Data Analytics' && '📊'}
                        </div>
                        <div className="text-white font-medium">{project.title}</div>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant={getStatusColor(project.status)} size="sm">
                        {project.status === 'completed' ? '✓ Complete' : '🔄 In Progress'}
                      </Badge>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-muted text-sm line-clamp-3">{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" size="sm">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" size="sm">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 2).map((feature) => (
                          <li key={feature} className="text-xs text-muted flex items-center">
                            <span className="w-1 h-1 bg-primary-400 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 2 && (
                          <li className="text-xs text-muted">
                            +{project.features.length - 2} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      {project.liveUrl && (
                        <Button
                          variant="primary"
                          size="sm"
                          href={project.liveUrl}
                          external
                          className="flex-1"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        external
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Projects Found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-muted">
              Try adjusting your filters or search terms
            </p>
          </motion.div>
        )}

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="gradient" className="p-8">
            <h3 className="heading-md mb-4">Interested in seeing more?</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and open-source work
            </p>
            <Button
              variant="primary"
              size="lg"
              href="https://github.com/rajibbikram"
              external
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
