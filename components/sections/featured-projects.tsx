// components/sections/featured-projects.tsx
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import { projects } from "@/utils/projects"


const FeaturedProjects = () => {
  return (
     <AnimatedSection
        animation="fade-up"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
      >
        <section id="projects">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700 animate-bounce-gentle"
              >
                Featured Work
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                Projects that make an impact
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
                Here are some of my recent projects that showcase my skills and problem-solving approach
              </p>
            </div>
            <StaggeredGrid className="grid lg:grid-cols-2 gap-8" staggerDelay={200}>
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-500 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:scale-105 hover:-translate-y-2 group"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 flex space-x-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    { project.liveUrl ? <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm hover:scale-110"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                       >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      : ""
                      }  
                      {
                        project.githubUrl ? 
                         <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm hover:scale-110"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button> : ""
                      }
                     
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 transition-colors">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredGrid>
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent hover:scale-105 group"
                >
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>
  )
}

export default FeaturedProjects