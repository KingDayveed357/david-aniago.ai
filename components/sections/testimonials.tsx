// components/sections/testimonials.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { testimonials } from "@/utils/testimonials"

import { Star} from "lucide-react"
import Image from "next/image"

const Testimonials = () => {
  return (
        <AnimatedSection
        animation="fade-up"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm transition-all duration-300"
      >
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700 animate-bounce-gentle"
              >
                Testimonials
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                What clients say about working with me
              </h2>
            </div>
            <StaggeredGrid className="grid md:grid-cols-2 gap-8" staggerDelay={300}>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:scale-105 hover:-translate-y-2 group"
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-twinkle"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 italic transition-colors group-hover:text-slate-700 dark:group-hover:text-slate-200">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </StaggeredGrid>
          </div>
        </section>
      </AnimatedSection>

  )
}

export default Testimonials