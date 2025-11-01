import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Mail, Phone } from 'lucide-react'

const Education = () => {
  const ref = useRef(null)

  const education = {
    degree: "BS Computer Application",
    major: "Delhi Skill & Entrepreneurship University",
    institution: "2024-2028",
    location: "Delhi, India",
    duration: "2024 - 2028",
    status: "Currently Pursuing"
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="education" className="py-12 md:py-20 px-4 bg-background-secondary relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="text-xl md:text-2xl font-bold font-mono text-text-accent text-center mb-12"
          >
            <div className="flex items-center justify-center gap-0">
              {"Education".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.3,
                  delay: "Education".length * 0.1 + 0.3
                }}
                className="text-text-accent ml-1"
              >
                |
              </motion.span>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mb-12 md:mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-background-primary border border-background-tertiary rounded-xl md:rounded-2xl p-6 md:p-8 shadow-glow"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-text-accent/20 to-primary-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-text-accent sm:w-8 sm:h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-lg sm:text-xl text-text-accent font-semibold mb-2">
                        {education.major}
                      </p>
                      <p className="text-base sm:text-lg text-text-secondary">
                        {education.institution}
                      </p>
                    </div>
                    <div className="bg-text-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg inline-block w-fit">
                      <span className="text-sm sm:text-base text-text-accent font-mono font-semibold">
                        {education.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm sm:text-base text-text-secondary">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-text-accent sm:w-[18px] sm:h-[18px]" />
                      <span>{education.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-text-accent sm:w-[18px] sm:h-[18px]" />
                      <span>{education.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact & Hobbies Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Section */}
            <motion.div
              variants={itemVariants}
              className="bg-background-primary border border-background-tertiary rounded-xl md:rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <Mail className="text-text-accent" size={24} />
                Contact
              </h3>
              <div className="space-y-4 text-text-secondary">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-text-accent" />
                  <span>jafrinshajan2005@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-text-accent" />
                  <span>+91 9625217468</span>
                </div>
              </div>
            </motion.div>

            {/* Hobbies Section */}
            <motion.div
              variants={itemVariants}
              className="bg-background-primary border border-background-tertiary rounded-xl md:rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-6">
                Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎤", name: "Singing" },
                  { icon: "🎨", name: "Drawing" },
                  { icon: "🏏", name: "Cricket" },
                  { icon: "💻", name: "Coding" },
                  { icon: "🎮", name: "Games" }
                ].map((hobby) => (
                  <motion.div
                    key={hobby.name}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="flex items-center gap-3 bg-background-secondary border border-background-tertiary hover:border-text-accent rounded-lg p-3 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-2xl">{hobby.icon}</span>
                    <span className="text-text-primary font-medium">{hobby.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
