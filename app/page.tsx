"use client"

import { Suspense, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { BatSignal } from "@/components/bat-signal"
import { GithubIcon, LinkedinIcon, InstagramIcon, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Fallback component for when Three.js fails to load
function BatSignalFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-yellow-300 text-6xl font-bold mb-4">Rusira Sandul</div>
      <div className="text-white text-xl">COMPUTER SCIENCE UNDERGRADUATE</div>
    </div>
  )
}

export default function Home() {
  const [canvasError, setCanvasError] = useState(false)

  const featuredProjects = [
    {
      title: "Gotham Crime Tracker",
      description:
        "A full-stack application that visualizes crime data in Gotham City using React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/projects",
    },
    {
      title: "Batcomputer AI",
      description: "An AI-powered assistant built with Python and TensorFlow. Implements natural language processing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "NLP"],
      link: "/projects",
    },
  ]

  return (
    <>
      {/* Hero Section with 3D Bat Signal */}
      <section className="w-full h-screen relative">
        <div className="absolute inset-0 z-10">
          {!canvasError ? (
            <Suspense fallback={<BatSignalFallback />}>
              <ErrorBoundary onError={() => setCanvasError(true)}>
                <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <BatSignal position={[0, 0, 0]} scale={2} />
                  <Text
                    position={[0, -2, 0]}
                    fontSize={0.5}
                    color="#FDE047"
                    font="/fonts/Geist_Bold.json"
                    anchorX="center"
                    anchorY="middle"
                  >
                    RUSIRA SANDUL
                  </Text>
                  <Text
                    position={[0, -3, 0]}
                    fontSize={0.3}
                    color="white"
                    font="/fonts/Geist_Regular.json"
                    anchorX="center"
                    anchorY="middle"
                  >
                    COMPUTER SCIENCE UNDERGRADUATE
                  </Text>
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                  <Environment preset="night" />
                </Canvas>
              </ErrorBoundary>
            </Suspense>
          ) : (
            <BatSignalFallback />
          )}
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <Link href="#about">
            <Button
              variant="outline"
              className="bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
            >
              EXPLORE
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-10 right-10 z-20 flex gap-4">
          <a
            href="https://github.com/rusirasandul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-300"
          >
            <InstagramIcon size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-400 hover:text-yellow-300">
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-black to-gray-900/70">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-yellow-300">ABOUT</span> ME
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-2 border-yellow-300/30">
              <Image src="/1695635302496.jpeg" alt="Profile" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-300">Rusira Sandul</h3>
              <p className="text-gray-300">
                Computer Science undergraduate with a passion for web development, artificial intelligence, and
                cybersecurity. Just like Batman uses his intellect and technology to solve Gotham's problems, I use my
                programming skills to create solutions for real-world challenges.
              </p>
              <p className="text-gray-300">
                Currently pursuing my Bachelor's degree in Computer Science at Gotham University, with a focus on
                full-stack development and machine learning. I'm constantly learning new technologies and frameworks to
                expand my skill set.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
                  >
                    MORE ABOUT ME
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Education</h4>
                  <p className="text-sm text-gray-300">BS in Computer Science</p>
                  <p className="text-xs text-gray-400">Gotham University, 2020-2024</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">Web Developer Intern</p>
                  <p className="text-xs text-gray-400">Wayne Enterprises, Summer 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 bg-gradient-to-b from-gray-900/70 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">
            FEATURED <span className="text-yellow-300">PROJECTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-lg overflow-hidden hover:border-yellow-300/50 transition-all duration-300"
              >
                <div className="relative h-[200px] w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    className="flex items-center gap-1 text-gray-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>View Details</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button
                variant="outline"
                className="bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
              >
                VIEW ALL PROJECTS
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

// Simple error boundary component
function ErrorBoundary({ children, onError }) {
  try {
    return children
  } catch (error) {
    console.error("Error in ErrorBoundary:", error)
    onError()
    return null
  }
}

