import { GithubIcon, LinkedinIcon, InstagramIcon, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/hwrs_2249/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <InstagramIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rusira-sandul-b6bb87292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com/rusirasandul"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a href="mailto:rusira@example.com" className="text-gray-400 hover:text-yellow-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            <p className="flex items-center justify-center gap-1 mt-1">
              Made by Rusira Sandul with <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

