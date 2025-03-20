"use client"

import { useRef, useEffect } from "react"
import { Code2, Database, Server, Layers, GitBranch, Smartphone } from "lucide-react"

export function SkillsSection({ registerSection }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("skills", sectionRef.current)
    }
  }, [registerSection])

  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="w-6 h-6" />,
      items: ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript", "Three.js"],
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      items: ["Node.js", "Express", "Python", "Java", "C++"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    },
    {
      category: "DevOps",
      icon: <GitBranch className="w-6 h-6" />,
      items: ["Git", "Docker", "CI/CD", "AWS", "Vercel"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      items: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      category: "Other",
      icon: <Layers className="w-6 h-6" />,
      items: ["UI/UX Design", "RESTful APIs", "GraphQL", "WebSockets"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          MY <span className="text-yellow-300">ARSENAL</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-yellow-300/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-yellow-300">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-yellow-300 rounded-full"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">
            PROFICIENCY <span className="text-yellow-300">LEVELS</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "JavaScript", level: 90 },
              { name: "React", level: 85 },
              { name: "Node.js", level: 75 },
              { name: "Python", level: 80 },
              { name: "Three.js", level: 65 },
              { name: "Database Management", level: 70 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-yellow-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

