"use client"

import type React from "react"

import { useState, useEffect } from "react"
import "./globals.css"
import { NavBar } from "@/components/nav-bar"
import { BackgroundVideo } from "@/components/background-video"
import { Footer } from "@/components/footer"
import { SplashScreen } from "@/components/splash-screen"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Hide splash screen after animation completes (3s + 1s for fade out)
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Rusira Sandul | Portfolio</title>
        <meta name="description" content="Computer Science Portfolio with Batman Theme" />
      </head>
      <body className="bg-black text-white">
        {/* Show splash screen on initial load */}
        {showSplash && <SplashScreen />}

        {/* Main content */}
        <BackgroundVideo />
        <div className="flex flex-col min-h-dvh">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

