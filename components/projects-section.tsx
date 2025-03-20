"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GithubIcon, ExternalLink } from "lucide-react"

export function ProjectsSection({ registerSection }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("projects", sectionRef.current)
    }
  }, [registerSection])

  const projects = [
    {
      title: "Gotham Crime Tracker",
      description:
        "A full-stack application that visualizes crime data in Gotham City using React, Node.js, and MongoDB. Features interactive maps and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "MapBox"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Batcomputer AI",
      description:
        "An AI-powered assistant built with Python and TensorFlow. Implements natural language processing to answer questions and perform tasks.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "TensorFlow", "NLP", "Flask"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Arkham Patient Portal",
      description:
        "A secure patient management system for Arkham Asylum. Built with React, Express, and PostgreSQL with JWT authentication.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Express", "PostgreSQL", "JWT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Batmobile Route Optimizer",
      description:
        "A route optimization algorithm that finds the fastest path through Gotham City. Implements various graph algorithms.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "Algorithms", "Google Maps API"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          MY <span className="text-yellow-300">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-yellow-300 transition-colors"
                  >
                    <GithubIcon size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-400 hover:text-yellow-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            VIEW ALL PROJECTS
          </Button>
        </div>
      </div>
    </section>
  )
}

