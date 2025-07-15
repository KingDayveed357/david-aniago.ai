"use client"
import { FloatingElements } from "@/components/floating-elements"
import AnimatedBackground from "@/components/animated-background"

// Navigation
import Navbar from "@/components/navigation/navbar"
import Footer from "@/components/navigation/footer"

// Sections
 import HeroSection from "@/components/sections/hero"
import About from "@/components/sections/about"
import TechStack from "@/components/sections/tech-stack"
import Contact from "@/components/sections/contact"
import Testimonials from "@/components/sections/testimonials"
import Education from "@/components/sections/education"
import Experience from "@/components/sections/experience"
import FeaturedProjects from "@/components/sections/featured-projects"


export default function Portfolio() {
  return (
    <div className="min-h-screen transition-all duration-500 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-x-hidden">
      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated Background Elements */}
     <AnimatedBackground />

      {/* Navigation */}
       <Navbar />
         
      {/* Hero Section */}
       <HeroSection />

      {/* About Section */}
      <About />

      {/* Tech Stack Section */}
      <TechStack />

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Experience Section */}
      <Experience />

      {/* education section*/}
      <Education />

      {/* Testimonials Section */}
      <Testimonials/>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  )
}