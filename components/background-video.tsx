"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const mountedRef = useRef(true)

  useEffect(() => {
    // Set up cleanup function to track component mount status
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    let playPromise: Promise<void> | undefined

    const playVideo = async () => {
      if (videoRef.current && mountedRef.current) {
        try {
          // Store the play promise so we can handle it properly
          playPromise = videoRef.current.play()

          if (playPromise !== undefined) {
            await playPromise
            // Video playback started successfully
          }
        } catch (error) {
          // Only set error if component is still mounted
          if (mountedRef.current) {
            console.error("Error playing video:", error)
            setVideoError(true)
          }
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      playVideo()
    }, 100)

    return () => {
      clearTimeout(timeoutId)

      // If there's an ongoing play promise and the component unmounts,
      // we need to handle the promise to avoid the "interrupted" error
      if (playPromise !== undefined && videoRef.current) {
        playPromise
          .then(() => {
            if (videoRef.current && !mountedRef.current) {
              videoRef.current.pause()
            }
          })
          .catch(() => {
            // Ignore errors on cleanup
          })
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-1] bg-black">
      {!videoError ? (
        <div className="w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            playsInline
            muted
            loop
            onError={() => setVideoError(true)}
            poster="/placeholder.svg?height=1080&width=1920"
          >
            {/* Updated path to the user's video file */}
            <source src="/batman-the-dark-knight-symbol-moewalls-com.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black"></div>
      )}
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  )
}

