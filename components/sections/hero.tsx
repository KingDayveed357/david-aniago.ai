  import Image from "next/image"
  import Link from "next/link"
  import { ArrowRight, Github, Linkedin, Mail, Twitter} from "lucide-react"
  import { Badge } from "@/components/ui/badge"
  import { Button } from "@/components/ui/button"
  import myPic from "@/assets/me.jpg"

  const HeroSection = () => {
    return (  
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
                  { icon: Twitter, href: "https://x.com/@Davejs404" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/aniago-david-225746323" },
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

    )} 

    export default HeroSection