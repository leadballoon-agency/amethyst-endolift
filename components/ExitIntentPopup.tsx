'use client'

import { useState, useEffect, useCallback } from 'react'

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)

  const whatsappNumber = '447366904007'
  const whatsappMessage = encodeURIComponent('Hi! I\'d like to find out more about becoming a model for Endolift treatment.')

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5 && !hasTriggered) {
      setIsOpen(true)
      setHasTriggered(true)
      sessionStorage.setItem('exitPopupShown', 'true')
    }
  }, [hasTriggered])

  useEffect(() => {
    if (sessionStorage.getItem('exitPopupShown') === 'true') {
      setHasTriggered(true)
      return
    }

    // Delay adding the listener so it doesn't fire immediately
    const timeout = setTimeout(() => {
      document.addEventListener('mouseout', handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timeout)
      document.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [handleMouseLeave])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#2d1b4e] via-[#4a2c6e] to-[#6b3fa0] px-6 py-8 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-white/15 rounded-full mb-3">
            <span className="text-[#f0d48a] font-medium text-xs sm:text-sm tracking-wide">Limited Places</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Wait — Before You Go</h2>
          <p className="text-white/80 text-sm sm:text-base">Have you seen our Model Programme?</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-neutral-600 text-sm sm:text-base mb-5">
            Get Endolift at exclusive model pricing in exchange for before &amp; after photos and video content.
          </p>

          {/* Pricing */}
          <div className="space-y-2 mb-5">
            <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-2.5">
              <span className="text-neutral-700 font-medium text-sm">Full Face &amp; Neck</span>
              <span className="text-primary-600 font-bold">£550</span>
            </div>
            <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-2.5">
              <span className="text-neutral-700 font-medium text-sm">Lower Face</span>
              <span className="text-primary-600 font-bold">£450</span>
            </div>
            <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-2.5">
              <span className="text-neutral-700 font-medium text-sm">Body Areas</span>
              <span className="text-primary-600 font-bold">£300</span>
            </div>
          </div>

          <p className="text-xs text-neutral-500 mb-5">
            Photos, filming for social media &amp; a 6-month follow-up visit required.
          </p>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Apply via WhatsApp
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-xs text-neutral-400 mt-3 hover:text-neutral-600 transition-colors"
          >
            No thanks, I&apos;ll continue browsing
          </button>
        </div>
      </div>
    </div>
  )
}
