"use client"

import { useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export function ContactSection({ registerSection }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerSection("contact", sectionRef.current)
    }
  }, [registerSection])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted")
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="text-yellow-300">CONTACT</span> ME
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p className="text-gray-300">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open
              to new challenges and collaborations.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-gray-400">Gotham City, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-400">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-800 p-3 rounded-full text-yellow-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6">Send Me A Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    className="bg-gray-700 border-gray-600 focus:border-yellow-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-700 border-gray-600 focus:border-yellow-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-gray-700 border-gray-600 focus:border-yellow-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  className="bg-gray-700 border-gray-600 focus:border-yellow-300"
                />
              </div>

              <Button type="submit" className="w-full bg-yellow-300 text-black hover:bg-yellow-400">
                <Send className="w-4 h-4 mr-2" />
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

