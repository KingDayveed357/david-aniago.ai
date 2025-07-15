// components/sections/experience.tsx
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { experienceData } from "@/utils/experience"

const Experience = () => {
  return (
        <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
        <section id="experience">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 animate-bounce-gentle"
              >
                Experience
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                My professional journey
              </h2>
            </div>
            <div className="space-y-8">
              { experienceData.map((job, index) => (
                <AnimatedSection key={index} animation="slide-left" delay={index * 200}>
                  <Card className="p-6 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:scale-105 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {job.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 transition-colors">{job.company}</p>
                      </div>
                      <Badge variant="outline" className={job.badgeColor}>
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default"
                          style={{ animationDelay: `${skillIndex * 50}ms` }}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
  )
}

export default Experience