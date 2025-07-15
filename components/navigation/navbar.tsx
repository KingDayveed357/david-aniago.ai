// components/navbar.tsx
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

const Navbar = () => {
  return (
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
  )
}

export default Navbar