"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasStarted = useRef(false)

  useEffect(() => {
    // Only start the animation once
    if (!hasStarted.current) {
      hasStarted.current = true

      // Start playing the video
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error)
          // If video fails to play, still proceed with the splash screen timing
          setIsVisible(false)
          setTimeout(() => {
            setShouldRender(false)
          }, 1000)
        })
      }

      // Hide splash screen after video duration or 3 seconds (whichever is longer)
      const timer = setTimeout(() => {
        setIsVisible(false)
        // Remove from DOM after fade out animation
        setTimeout(() => {
          setShouldRender(false)
        }, 1000)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent scrolling when splash screen is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isVisible])

  if (!shouldRender) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          onError={(e) => console.error("Video error:", e)}
          preload="auto"
        >
          <source 
            src="/batman-the-dark-knight-symbol-moewalls-com.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="absolute bottom-8 flex space-x-3">
        <div className="w-3 h-3 rounded-full bg-yellow-300 animate-bounce" style={{ animationDelay: "0ms" }}></div>
        <div className="w-3 h-3 rounded-full bg-yellow-300 animate-bounce" style={{ animationDelay: "150ms" }}></div>
        <div className="w-3 h-3 rounded-full bg-yellow-300 animate-bounce" style={{ animationDelay: "300ms" }}></div>
      </div>
    </div>
  )
}

