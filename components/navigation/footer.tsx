// components/navigation/footer.tsx'
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

const Footer = () => {
  return (
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
  )
}

export default Footer