 import cellar from "@/assets/cellar.png"
 import finda from "@/assets/finda.png"
 import myPic from "@/assets/me.jpg"

 export const projects = [
    {
      title: "AI-Powered Habit Tracker",
      description:
        "Smart tracker that uses AI to suggest habit routines and improvements based on user history and goals. Built with React Native for cross-platform compatibility.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["React Native", "Supabase", "AI/ML", "TypeScript"],
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
      githubUrl: "https://github.com/KingDayveed357/Finda",
      featured: true,
    },
    {
      title: "Mpay - Crypto Wallet",
      description:
        "Engineered wallet features for sending, receiving, and managing crypto assets with real-time exchange rates and secure authentication.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["Laravel", "MySQL", "APIs", "Authentication"],
      githubUrl: "https://github.com/KingDayveed357",
      featured: false,
    },
  
    {
      title: "Smart Link Courier - Parcel Management System",
      description:
        "Website with admin panel that manages parcel shipments, promoting organization and retracement of parcels with real-time tracking.",
      image: "/placeholder.svg?height=300&width=500",
      tech: ["PHP", "MySQL", "Admin Panel", "Tracking API"],
      githubUrl: "https://github.com/KingDayveed357/smartlinkcourier",
      featured: false,
    },
  ]
