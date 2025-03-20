"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { Text, useTexture, OrbitControls } from "@react-three/drei"
import { cn } from "@/lib/utils"
import * as THREE from "three"

// Batman logo floating in 3D space
function BatSymbol() {
  const texture = useTexture("/batman_logo5.jpg")
  const [rotation, setRotation] = useState(0)
  
  useEffect(() => {
    const animate = () => {
      setRotation((prev) => prev + 0.01)
      requestAnimationFrame(animate)
    }
    animate()
    
    return () => {
      // Clean up animation frame
      cancelAnimationFrame(animate as unknown as number)
    }
  }, [])
  
  return (
    <mesh rotation={[0, rotation, 0]} position={[0, 1, -2]}>
      <planeGeometry args={[3, 1.5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  )
}

// Welcome text with glow effect
function WelcomeText() {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="#FFD700"
      // Commenting out the font until you have the actual font file
      // font="/fonts/Batman-Forever.ttf"
      anchorX="center"
      anchorY="middle"
    >
      Welcome To Bat Den
    </Text>
  )
}

// Particles for background effect
function BatParticles() {
  const count = 500
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FFD700" />
    </points>
  )
}

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [shouldRender, setShouldRender] = useState(true)
  const [showWelcome, setShowWelcome] = useState(false)
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
            setShowWelcome(true)
            setTimeout(() => {
              setShouldRender(false)
            }, 3000) // Show welcome for 3 seconds
          }, 1000)
        })
      }

      // Hide splash screen after video duration or 3 seconds (whichever is longer)
      const timer = setTimeout(() => {
        setIsVisible(false)
        // Show welcome screen after fade out animation
        setTimeout(() => {
          setShowWelcome(true)
          // Remove from DOM after welcome screen is shown
          setTimeout(() => {
            setShouldRender(false)
          }, 3000) // Show welcome for 3 seconds
        }, 1000)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Prevent scrolling when splash screen is visible
  useEffect(() => {
    if (isVisible || showWelcome) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isVisible, showWelcome])

  if (!shouldRender) return null

  return (
    <>
      {/* Splash screen with video */}
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

      {/* Welcome screen with Three.js animation */}
      {showWelcome && (
        <div
          className={cn(
            "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000",
            showWelcome ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <BatSymbol />
              <WelcomeText />
              <BatParticles />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      )}
    </>
  )
}

