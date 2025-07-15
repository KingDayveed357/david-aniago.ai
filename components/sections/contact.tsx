// components/sections/contact.tsx
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { Calendar, ArrowRight } from "lucide-react"
import { toast } from "sonner"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        setFormData({
          name: "",
          email: "",
          budget: "",
          message: "",
        })
      } else {
        toast.error(data.error || "Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105 ${
                        errors.name ? "border-red-500 dark:border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105 ${
                        errors.email ? "border-red-500 dark:border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                    Project Budget
                  </label>
                  <Input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., $5,000 - $10,000"
                    className="bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white transition-colors">
                    Tell me about your project *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, and any specific requirements..."
                    rows={5}
                    className={`bg-white/50 dark:bg-slate-900/50 border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105 resize-none ${
                      errors.message ? "border-red-500 dark:border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="text-center mt-8">
              <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors">
                Prefer to schedule a call?
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 bg-transparent hover:scale-105 group"
                onClick={() =>
                  window.open("https://calendly.com/davidaniago/30min", "_blank")
                }
              >
                <Calendar className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Book a 30-minute consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  )
}

export default Contact