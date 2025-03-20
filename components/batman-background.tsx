"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function BatmanBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Background color
    scene.background = new THREE.Color(0x000000)
    scene.fog = new THREE.Fog(0x000000, 1, 1000)

    // Stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xFFD700,
      size: 0.1,
      transparent: true,
      opacity: 0.8
    })

    const starsVertices = []
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 2000
      const y = (Math.random() - 0.5) * 2000
      const z = (Math.random() - 0.5) * 2000
      starsVertices.push(x, y, z)
    }

    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3))
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Position camera
    camera.position.z = 5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      stars.rotation.y += 0.0001
      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      starsGeometry.dispose()
      starsMaterial.dispose()
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
} 