'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ExternalLink } from 'lucide-react'
import { Card } from '@/components/Card'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { experienceData, educationData } from '@/data'

export const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const timelineData = activeTab === 'experience' ? experienceData : educationData

  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="gradient" className="mb-4">Journey & Growth</Badge>
          <h2 className="heading-lg mb-4">Experience & Education</h2>
          <p className="text-muted max-w-2xl mx-auto">
            My professional journey and academic background that shaped my skills and expertise
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-lg bg-dark-accent/50 p-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-primary-500 text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4 inline mr-2" />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-primary-500 text-white'
                  : 'text-muted hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 inline mr-2" />
              Education
            </button>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12">
            <AnimatePresence mode="wait">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="timeline-dot hidden md:block" />

                  <div className={`md:ml-20 ${index % 2 === 0 ? 'md:mr-20' : 'md:ml-auto md:mr-20'}`}>
                    <Card variant="dark" className="relative overflow-hidden">
                      {/* Status Indicator */}
                      <div className={`absolute top-0 right-0 w-2 h-full ${
                        item.type === 'work' ? 'bg-primary-500' : 'bg-purple-500'
                      }`} />

                      <div className="p-6">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">
                              {item.title}
                            </h3>
                            <div className="flex items-center text-muted text-sm">
                              {item.type === 'work' ? (
                                <Briefcase className="w-4 h-4 mr-1" />
                              ) : (
                                <GraduationCap className="w-4 h-4 mr-1" />
                              )}
                              <span className="font-medium">{item.company || item.institution}</span>
                            </div>
                          </div>
                          <div className="flex items-center text-muted text-sm mt-2 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{item.period}</span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center text-muted text-sm mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{item.location}</span>
                        </div>

                        {/* Description */}
                        <p className="text-muted mb-4">{item.description}</p>

                        {/* Achievements/Coursework */}
                        {item.achievements && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                              <Award className="w-4 h-4 mr-1" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="text-sm text-muted flex items-start">
                                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.coursework && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-white mb-2">Relevant Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.coursework.map((course) => (
                                <Badge key={course} variant="secondary" size="sm">
                                  {course}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Technologies */}
                        {item.technologies && (
                          <div>
                            <h4 className="text-sm font-medium text-white mb-2">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" size="sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Additional Info */}
                        {item.type === 'education' && item.achievements && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted">
                                GPA: {item.achievements[0]?.match(/GPA: ([\d.]+)/)?.[1] || 'N/A'}
                              </div>
                              {item.achievements.some(a => a.includes('Best Project')) && (
                                <Badge variant="success" size="sm">
                                  🏆 Best Project
                                </Badge>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card variant="gradient" className="p-8">
            <h3 className="heading-md mb-4">Let's Work Together</h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#contact"
              >
                Get In Touch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://linkedin.com/in/rajibbikram"
                external
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
