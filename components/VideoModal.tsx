'use client'

import { useEffect, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

// Full Endolift treatment video (16 minutes, portrait orientation)
const VIDEO_URL = 'https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/694522e00190af25cde42b4d.mp4'

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      // Don't autoplay - let user control the 16 min video
      if (videoRef.current) {
        videoRef.current.currentTime = 0
      }
    } else {
      document.body.style.overflow = 'unset'
      // Pause video when modal closes
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    // Close on ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Video Container - Portrait optimized */}
      <div className="relative w-full max-w-sm sm:max-w-md bg-black rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          aria-label="Close video"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base">Full Endolift Treatment</h3>
              <p className="text-white/80 text-xs sm:text-sm">Watch the complete procedure</p>
            </div>
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-white text-xs font-medium">16 mins</span>
            </div>
          </div>
        </div>

        {/* Video Player - Portrait aspect ratio */}
        <div className="relative w-full flex-1 min-h-0 bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="w-full h-full object-contain max-h-[60vh]"
            controls
            playsInline
            preload="metadata"
          >
            <source src={VIDEO_URL} type="video/mp4" />
            <p className="text-white text-center p-4">
              Your browser doesn&apos;t support video playback.
            </p>
          </video>
        </div>

        {/* Footer with CTA */}
        <div className="bg-neutral-900 px-4 py-3 flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-neutral-400 text-xs sm:text-sm text-center sm:text-left">
              Real procedure with a patient
            </p>
            <a
              href="#assessment"
              onClick={onClose}
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Check Suitability
              <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
