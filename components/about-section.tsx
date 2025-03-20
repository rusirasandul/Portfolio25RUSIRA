"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection({ registerSection }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("about", sectionRef.current)
    }
  }, [registerSection])

  return (
    <section id="about" ref={sectionRef} className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-yellow-300">ABOUT</span> ME
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden border-2 border-yellow-300/30">
            <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-yellow-300">Rusira Sandul</h3>
            <p className="text-gray-300">
              Computer Science undergraduate with a passion for web development, artificial intelligence, Machine Learning and
              cybersecurity. Just like Batman uses his intellect and technology to solve Gotham's problems, I use my
              programming skills to create solutions for real-world challenges.
            </p>
            <p className="text-gray-300">
              Currently pursuing my Bachelor's degree in Computer Science at Informatics Institute of Technology Afiiliated With University of Westminster and Bachlor of Science in Physical Science at University of Sri Jayewardenepura, with a focus on
              full-stack development and machine learning. I'm constantly learning new technologies and frameworks to
              expand my skill set.
            </p>
            <div className="pt-4">
              <Button
                variant="outline"
                className="bg-transparent border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black"
              >
                DOWNLOAD RESUME
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-yellow-300 font-bold mb-2">Education</h4>
                <p className="text-sm text-gray-300">BSc(Hons) in Computer Science (UG)</p>
                <p className="text-xs text-gray-400">University of Westminster, 2023-2027</p>
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
  )
}

