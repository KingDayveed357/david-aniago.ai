import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "David Aniago - Full-Stack Developer",
  description: "Full-stack developer specializing in React, Laravel, and modern web technologies",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Laravel Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Portfolio",
    "David Aniago"
  ],
  authors: [{ name: "David Aniago", url: "" }],
  creator: "David Aniago",
  openGraph: {
    title: "David Aniago - Full-Stack Developer",
    description: "Full-stack developer specializing in React, Laravel, and modern web technologies",
    url: "https://davidaniago.com",
    siteName: "David Aniago Portfolio",
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
             <Toaster 
          position="top-right"
          richColors
          closeButton
          toastOptions={{
            style: {
              background: 'hsl(var(--background))',
              color: 'hsl(var(--foreground))',
              border: '1px solid hsl(var(--border))',
            },
          }}
        />
        </ThemeProvider>
      </body>
    </html>
  )
}
