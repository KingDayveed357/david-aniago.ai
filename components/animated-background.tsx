// components/animated-background.tsx

const AnimatedBackground = () => {
  return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Dark mode background elements */}
        <div className="absolute top-20 right-20 w-60 h-60 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mix-blend-screen filter blur-xl opacity-10 dark:opacity-20 animate-pulse animation-delay-1000"></div>
      </div>
  )
}

export default AnimatedBackground