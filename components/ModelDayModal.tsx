'use client'

import { useEffect } from 'react'

interface ModelDayModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ModelDayModal({ isOpen, onClose }: ModelDayModalProps) {
  const whatsappNumber = '447309137314'
  const whatsappMessage = encodeURIComponent('Hi! I\'d like to send my photos to see if I could be a suitable model for Endolift treatment.')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-all duration-300"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-8 text-center">
          <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full mb-3">
            <svg className="w-4 h-4 text-white mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white/90 font-medium text-xs sm:text-sm">Photo Submission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Become a Model</h2>
          <p className="text-white/90 text-sm sm:text-base">Send your photos for assessment</p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-neutral-600 text-sm sm:text-base mb-6">
            We're always looking for new models to showcase the incredible results of Endolift treatment. Send us your photos via WhatsApp and we'll assess if you'd be a good fit.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-1">Send Your Photos</h4>
                <p className="text-sm text-neutral-600">Message us on WhatsApp with clear photos of the areas you'd like to treat (jawline, neck, jowls).</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-1">We'll Assess Suitability</h4>
                <p className="text-sm text-neutral-600">Our practitioner will review your photos and let you know if you'd be a suitable candidate for our model programme.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-1">Preferential Rates</h4>
                <p className="text-sm text-neutral-600">If selected, you'll receive preferential rates in exchange for allowing us to use your before & after photos.</p>
              </div>
            </div>
          </div>

          {/* Info note */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-primary-700">Your privacy is respected - we only photograph the treatment area and your face won't be shown unless you specifically consent.</p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Send Photos via WhatsApp
          </a>

          <p className="text-center text-xs text-neutral-500 mt-4">
            We'll review your photos and get back to you promptly
          </p>
        </div>
      </div>
    </div>
  )
}
