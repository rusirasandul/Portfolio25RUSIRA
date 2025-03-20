"use client"

import { ReactNode } from "react"
import { BatmanBackground } from "./batman-background"

interface BatmanLayoutProps {
  children: ReactNode
}

export function BatmanLayout({ children }: BatmanLayoutProps) {
  return (
    <div className="relative min-h-screen">
      <BatmanBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 