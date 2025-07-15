// components/sections/tech-stack.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Code2, Database, Smartphone, Globe } from "lucide-react"
import { techStack } from "@/utils/techStack"

const TechStack = () => {
  return (
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8 relative">
            <section>
              <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                  <Badge
                    variant="outline"
                    className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700 animate-bounce-gentle"
                  >
                    My Toolbox
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                    Technologies I work with
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
                    I stay current with the latest technologies to deliver cutting-edge solutions
                  </p>
                </div>
                <StaggeredGrid className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" staggerDelay={50}>
                  {techStack.map((tech, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-lg dark:hover:shadow-slate-900/50 transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group"
                    >
                      <CardContent className="p-0 text-center space-y-2">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                          {tech.category === "Frontend" && <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                          {tech.category === "Backend" && (
                            <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
                          )}
                          {tech.category === "Mobile" && (
                            <Smartphone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          )}
                          {tech.category === "Database" && (
                            <Database className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                          )}
                          {tech.category === "Language" && <Code2 className="w-6 h-6 text-red-600 dark:text-red-400" />}
                          {tech.category === "Styling" && <Globe className="w-6 h-6 text-pink-600 dark:text-pink-400" />}
                          {tech.category === "State Management" && (
                            <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                          )}
                          {tech.category === "Tools" && <Globe className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />}
                          {tech.category === "DevOps" && <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                          {tech.category === "Cloud" && <Globe className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />}
                        </div>
                        <div className="font-semibold text-slate-900 dark:text-white transition-colors">{tech.name}</div>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                          {tech.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </StaggeredGrid>
              </div>
            </section>
          </AnimatedSection>
  )
}

export default TechStack