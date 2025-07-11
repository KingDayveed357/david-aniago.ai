"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400/20 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-5 h-5 bg-emerald-400/20 rounded-full animate-float-slow"></div>

      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-4 h-4 bg-orange-400/20 rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-cyan-400/20 rotate-45 animate-float-fast"></div>

      {/* Floating lines */}
      <div className="absolute top-1/3 right-10 w-12 h-0.5 bg-gradient-to-r from-blue-400/20 to-transparent animate-float-slow"></div>
      <div className="absolute bottom-1/3 left-10 w-16 h-0.5 bg-gradient-to-r from-purple-400/20 to-transparent animate-float-medium"></div>
    </div>
  )
}
