"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function StarsField() {
  const starsRef = useRef<THREE.Points>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001
    }
  })

  return (
    <Stars 
      ref={starsRef}
      radius={300}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
      color="#FFD700"
    />
  )
}

export function BatmanBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.1} />
        <StarsField />
      </Canvas>
    </div>
  )
} 