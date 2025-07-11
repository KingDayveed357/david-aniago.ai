"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredGrid } from "@/components/staggered-grid"
import { FloatingElements } from "@/components/floating-elements"
import cellar from "@/assets/cellar.png"
import finda from "@/assets/finda.png"
import myPic from "@/assets/me.jpg"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Globe,
  Star,
  Calendar,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const techStack = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "Laravel", category: "Backend" },
    { name: "PHP", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MySQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Bootstrap", category: "Styling" },
    { name: "Redux", category: "State Management" },
    { name: "Zustand", category: "State Management" },
    { name: "Git", category: "Tools" },
  ]

  const projects = [
    {
      title: "AI-Powered Habit Tracker",
      description:
        "Smart tracker that uses AI to suggest habit routines and improvements based on user history and goals. Built with React Native for cross-platform compatibility.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Supabase", "AI/ML", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/KingDayveed357/Habitron",
      featured: true,
    },
    {
      title: "Cellar - Team Collaboration Platform",
      description:
        "Memo-based platform like Slack that enables professionals and teams to organize, tag, and access documents easily. Full MERN stack implementation.",
      image: cellar,
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      liveUrl: "https://cellarps.vercel.app/",
      githubUrl: "https://github.com/KingDayveed357",
      featured: true,
    },
    {
      title: "Finda",
      description:
        "An AI powered e-commerce platform that connects vendors with customers, simplifying commercial activities and promoting transparency. Currently in development.",
      image: finda,
      tech: ["Next.js", "TypeScript", "Laravel", "MySQL"],
      liveUrl: "https://finda-six.vercel.app/",
      githubUrl: "https://github.com/KingDayveed357",
      featured: true,
    },
    {
      title: "Crypto Wallet Web App",
      description:
        "Engineered wallet features for sending, receiving, and managing crypto assets with real-time exchange rates and secure authentication.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Laravel", "MySQL", "APIs", "Authentication"],
      liveUrl: "#",
      githubUrl: "https://github.com/KingDayveed357",
      featured: false,
    },
    {
      title: "E-Learning Platform",
      description:
        "Course management web application that allows students to buy courses uploaded by instructors with comprehensive admin panel oversight.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["PHP", "MySQL", "Dashboard", "Payment Integration"],
      liveUrl: "#",
      githubUrl: "https://github.com/KingDayveed357",
      featured: false,
    },
    {
      title: "Parcel Tracking System",
      description:
        "Website with admin panel that manages parcel shipments, promoting organization and retracement of parcels with real-time tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["PHP", "MySQL", "Admin Panel", "Tracking API"],
      liveUrl: "#",
      githubUrl: "https://github.com/KingDayveed357",
      featured: false,
    },
  ]

  const testimonials = [
    {
      name: "Chibueze",
      role: "CEO at Learn Factory",
      content:
        "David delivered exceptional work on our e-commerce platform. His attention to detail and ability to solve complex problems made him invaluable to our team.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Steven Elefiku",
      role: "CTO at Luzoma Microsystems",
      content:
        "Working with David was a game-changer. He not only built what we asked for but suggested improvements that significantly enhanced our product.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-x-hidden">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Dark mode background elements */}
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-pulse animation-delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 transition-all duration-300 animate-slide-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-900 dark:text-white transition-colors animate-fade-in">
              David Aniago
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Experience", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <ThemeToggle />
              <Button
                size="sm"
                className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("https://calendly.com/davidaniago/30min", "_blank")}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="outline"
                  className="w-fit bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700 animate-bounce-gentle"
                >
                  Available for new projects
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight transition-colors animate-fade-up">
                  I build scalable apps for brands and startups
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed transition-colors animate-fade-up animation-delay-200">
                  Versatile Full Stack Developer with 3+ years of experience building scalable, user-focused web and
                  mobile applications using Laravel, PHP, React, Next.js, and React Native. Passionate about writing
                  clean, maintainable code and delivering high-performance solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Work with Me
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent hover:scale-105"
                >
                  View Projects
                </Button>
              </div>
              <div className="flex items-center space-x-6 animate-fade-up animation-delay-600">
                {[
                  { icon: Github, href: "https://github.com/KingDayveed357" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:davidaniago@gmail.com" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-300">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 dark:opacity-50 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl blur-xl opacity-20 dark:opacity-30 animate-pulse animation-delay-1000"></div>
                <div className="relative transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src={myPic}
                    alt="David Aniago"
                    width={400}
                    height={500}
                    className="relative rounded-3xl shadow-2xl dark:shadow-slate-900/50 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Tech Stack Section */}
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

      {/* Featured Projects Section */}
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
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-sm hover:scale-110"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
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

      {/* Experience Section */}
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
              {[
                {
                  title: "React Developer (Freelancer)",
                  company: "Self-Employed • Remote",
                  period: "Oct 2024 - Present",
                  description:
                    "Leading development of responsive and high-performance web applications using React.js, React Native, TypeScript and TailwindCSS. Collaborating with backend teams to integrate RESTful and GraphQL APIs, refactoring legacy codebases and improving maintainability by over 30%.",
                  skills: ["React.js", "React Native", "TypeScript", "TailwindCSS", "Redux", "Zustand"],
                  badgeColor:
                    "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700",
                },
                {
                  title: "Frontend Developer",
                  company: "Learn Factory Tech Discipleship • Remote",
                  period: "Apr 2023 - Aug 2024",
                  description:
                    "Built modular, reusable UI components in React to streamline development processes. Integrated RESTful APIs for dynamic data rendering and ensured cross-browser compatibility through performance optimization.",
                  skills: ["React", "RESTful APIs", "UI Components", "Performance Optimization"],
                  badgeColor:
                    "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700",
                },
                {
                  title: "Full Stack Developer",
                  company: "Luzoma Microsystems • Port Harcourt, Nigeria",
                  period: "Feb 2023 - Jun 2024",
                  description:
                    "Delivered full-stack applications for SMEs and startups. Integrated RESTful APIs, optimized backend logic, and enhanced page load speed by 30% through performance optimization while managing databases and schema updates.",
                  skills: ["Full Stack", "Laravel", "PHP", "Database Management", "API Integration"],
                  badgeColor:
                    "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-700",
                },
              ].map((job, index) => (
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

      {/* Add education section after experience */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
        <section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700 animate-bounce-gentle"
              >
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
                      className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                    >
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

      {/* Testimonials Section */}
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

      {/* Contact Section */}
      <AnimatedSection animation="fade-up" className="py-16 px-4 sm:px-6 lg:px-8">
        <section id="contact">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700 animate-bounce-gentle"
              >
                Let's Work Together
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white transition-colors">
                Ready to build something amazing?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors">
                I'm always excited to take on new challenges and help bring your ideas to life. Let's discuss your
                project and see how I can help.
              </p>
            </div>
            <AnimatedSection animation="scale-up" delay={200}>
              <Card className="p-8 border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 shadow-xl dark:shadow-slate-900/50 hover:shadow-2xl hover:scale-105">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                      Project Budget
                    </label>
                    <Input
                      placeholder="e.g., $5,000 - $10,000"
                      className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                      Tell me about your project
                    </label>
                    <Textarea
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      rows={5}
                      className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105 resize-none"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="text-center mt-8">
                <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors">Prefer to schedule a call?</p>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent hover:scale-105 group"
                  onClick={() => window.open("https://calendly.com/davidaniago/consultation", "_blank")}
                >
                  <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                  Book a 30-minute consultation
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection animation="fade-up">
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <div className="font-bold text-xl mb-2 animate-fade-in">David Aniago</div>
                <p className="text-slate-400 animate-fade-in animation-delay-200">Full-Stack Developer</p>
                <p className="text-slate-400 text-sm animate-fade-in animation-delay-300">
                  Port Harcourt, Rivers State
                </p>
              </div>
              <div className="flex items-center space-x-6">
                {[
                  { icon: Github, href: "https://github.com/KingDayveed357" },
                  { icon: Linkedin, href: "#" },
                  { icon: Mail, href: "mailto:davidaniago@gmail.com" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-slate-400 hover:text-white transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-6 h-6" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 animate-fade-in animation-delay-600">
              <p>&copy; {new Date().getFullYear()} David Aniago. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  )
}
