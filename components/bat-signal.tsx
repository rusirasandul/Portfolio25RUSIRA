"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Cylinder, Cone } from "@react-three/drei"
import * as THREE from "three"

export function BatSignal(props) {
  const groupRef = useRef()
  const lightConeRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
    }

    if (lightConeRef.current) {
      lightConeRef.current.material.opacity = 0.3 + Math.sin(time * 2) * 0.1
    }
  })

  return (
    <group ref={groupRef} {...props}>
      {/* Base of the bat signal */}
      <Cylinder args={[0.7, 0.9, 0.2, 32]} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#333333" />
      </Cylinder>

      {/* Middle part */}
      <Cylinder args={[0.5, 0.5, 0.8, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#222222" />
      </Cylinder>

      {/* Light source */}
      <mesh position={[0, 0.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#FDE047" emissive="#FDE047" emissiveIntensity={2} />
      </mesh>

      {/* Light cone */}
      <Cone ref={lightConeRef} args={[3, 6, 32, 1, true]} position={[0, 3.5, 0]} rotation={[Math.PI, 0, 0]}>
        <meshBasicMaterial color="#FDE047" transparent opacity={0.3} side={THREE.DoubleSide} />
      </Cone>

      {/* Bat symbol */}
      <group position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.5, 1.5]}>
        <mesh>
          <planeGeometry args={[2, 1]} />
          <meshBasicMaterial color="black" />
        </mesh>
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[1.8, 0.9]} />
          <meshBasicMaterial color="#FDE047" />
        </mesh>
        <mesh position={[0, 0, 0.02]}>
          <planeGeometry args={[1, 0.5]} />
          <meshBasicMaterial color="black" />
        </mesh>
      </group>
    </group>
  )
}

