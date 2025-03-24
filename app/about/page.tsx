import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BatmanLayout } from "@/components/batman-layout"
import { BackgroundVideo } from "@/components/background-video"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <BatmanLayout>
      {/* Background Video */}
      <BackgroundVideo />
      
      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen bg-gradient-to-b from-black/70 to-gray-900/70 py-20 pt-32">
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
                Computer Science undergraduate with a passion for web development, artificial intelligence,Machine Learning and
                cybersecurity. Just like Batman uses his intellect and technology to solve Gotham's problems, I use my
                programming skills to create solutions for real-world challenges.
              </p>
              <p className="text-gray-300">
                Currently pursuing my Bachelor's degree in Computer Science at Informatics Institute of Technology Affiliated with University of Westminster and Also Pursuing a Bathlers Degree in Physical Science at University of Sri Jayewardenepura, with a focus on
                full-stack development and machine learning. I'm constantly learning new technologies and frameworks to
                expand my skill set.
              </p>
              <div className="pt-4">
                <a
                  href="/Resume2025.pdf"
                  download
                  className="inline-block bg-transparent border border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-black px-4 py-2 rounded"
                >
                  DOWNLOAD RESUME
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Education</h4>
                  <p className="text-sm text-gray-300">BSc in Computer Science</p>
                  <p className="text-xs text-gray-400">University of Westminster, 2023-2027</p>
                </div>
              
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Education</h4>
                  <p className="text-sm text-gray-300">BSc in Physical Science</p>
                  <p className="text-xs text-gray-400">University of Sri Jayewardenepura, 2024-2028</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">IEEE Computer Society</p>
                  <p className="text-xs text-gray-400">IEEE CS Beauty of Cloud Project Chair / Industry Realation committee Member</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">IEEE Computer Society</p>
                  <p className="text-xs text-gray-400">Japura Extreme OC Member </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">IEEE Computer Society</p>
                  <p className="text-xs text-gray-400">Japura Extreme OC Member </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-300 font-bold mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">IEEE Computer Society</p>
                  <p className="text-xs text-gray-400">Japura Extreme OC Member </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </BatmanLayout>
  )
}

