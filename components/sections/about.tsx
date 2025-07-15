//components/sections/about.tsx
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle } from "lucide-react"

const About = () => {
  return (
      <AnimatedSection
            animation="fade-up"
            className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
          >
            <section id="about">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <AnimatedSection animation="slide-right" delay={200}>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                        >
                          About Me
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                          Blending creativity with engineering precision
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                          I'm a passionate full-stack developer who loves turning complex problems into simple, beautiful
                          solutions. With a background in both frontend artistry and backend architecture, I bring a unique
                          perspective to every project.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
                          When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
                          mentoring aspiring developers. I believe in writing clean, maintainable code that stands the test
                          of time.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div
                            className="text-3xl font-bold text-slate-900 dark:text-white animate-counter"
                            data-target="15"
                          >
                            15+
                          </div>
                          <div className="text-slate-600 dark:text-slate-300">Projects Completed</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <div
                            className="text-3xl font-bold text-slate-900 dark:text-white animate-counter"
                            data-target="3"
                          >
                            3+
                          </div>
                          <div className="text-slate-600 dark:text-slate-300">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slide-left" delay={400}>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                        What I'm like to work with
                      </h3>
                      <div className="space-y-4">
                        {[
                          {
                            title: "Clear Communication",
                            description: "I keep you updated every step of the way with regular progress reports",
                            bg: "bg-green-50 dark:bg-green-900/20",
                          },
                          {
                            title: "Problem Solver",
                            description: "I don't just build what you ask for—I suggest improvements that add value",
                            bg: "bg-blue-50 dark:bg-blue-900/20",
                          },
                          {
                            title: "Quality Focused",
                            description: "Every line of code is written with performance and maintainability in mind",
                            bg: "bg-purple-50 dark:bg-purple-900/20",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`flex items-start space-x-3 p-4 ${item.bg} rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 animate-bounce-gentle" />
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                              <div className="text-slate-600 dark:text-slate-300">{item.description}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </section>
          </AnimatedSection>
  )
}

export default About