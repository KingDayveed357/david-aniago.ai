// components/sections/education.tsx
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Globe, CheckCircle } from "lucide-react"

const Education = () => {
    return (
        <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
            <section>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-4 mb-12">
                        <Badge
                            variant="outline"
                            className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700 animate-bounce-gentle">
                            Education & Certifications
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                            Academic Background & Professional Growth
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <AnimatedSection animation="slide-right" delay={200}>
                            <Card className="p-6 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:scale-105 group">
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                                                Federal University of Technology, Owerri
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-300">B. Eng., Mechatronics Engineering</p>
                                        </div>
                                    </div>
                                    <Badge
                                        variant="outline"
                                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">
                                        2022 - Present
                                    </Badge>
                                </div>
                            </Card>
                        </AnimatedSection>
                        <AnimatedSection animation="slide-left" delay={400}>
                            <Card className="p-6 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-slate-900/50 hover:scale-105 group">
                                <div className="space-y-4">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Professional Certifications</h3>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-slate-700 dark:text-slate-300">
                                                Full Stack Web Developer - Luzoma Microsystems
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-slate-700 dark:text-slate-300">React Developer - HackerRank</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    )
}

export default Education