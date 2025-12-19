'use client'

import { useState } from 'react'
import ModelDayModal from './ModelDayModal'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [showModelDayModal, setShowModelDayModal] = useState(false)

  const results: Array<{
    beforeImage?: string
    afterImage?: string
    image?: string
    title: string
    description: string
    time: string
    isAvailable: boolean
    featured: boolean
    isAward?: boolean
    isModelDay?: boolean
    isBeforeAfter?: boolean
  }> = [
    {
      beforeImage: '/images/client-journey/before.jpg',
      afterImage: '/images/client-journey/after.jpg',
      title: 'Jawline & Jowl Tightening',
      description: 'Visible lift and contouring from a single Endolift session',
      time: 'Single Session',
      isAvailable: true,
      featured: true,
      isBeforeAfter: true
    },
    {
      beforeImage: '/images/client-journey/rhs-before.jpg',
      afterImage: '/images/client-journey/rhs-after.jpg',
      title: 'Right Side Profile',
      description: 'Improved jawline definition and reduced skin laxity',
      time: 'Results Vary',
      isAvailable: true,
      featured: false,
      isBeforeAfter: true
    },
    {
      image: '/images/client-journey/lhs-before.jpg',
      title: 'Left Side - Before',
      description: 'Starting point showing skin laxity in the lower face',
      time: 'Pre-Treatment',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/award-finalist-2025.avif',
      title: 'Award-Winning Excellence',
      description: 'Marianne - Professional Beauty Awards Finalist 2025',
      time: 'Recognised',
      isAvailable: true,
      featured: false,
      isAward: true
    },
    {
      image: '/images/model-day-tile.svg',
      title: 'Become a Model',
      description: 'Send your photos via WhatsApp to see if you qualify for preferential rates',
      time: 'Apply Now',
      isAvailable: true,
      featured: false,
      isModelDay: true
    }
  ]

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Endolift Transformations
            <span className="block gradient-text">That Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Real before and after results from our Endolift patients
          </p>
        </div>

        {/* Premium Results Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium transition-all duration-300 ${
                result.isAvailable ? 'sm:hover:shadow-premium-lg cursor-pointer' : 'opacity-90 cursor-not-allowed'
              } ${result.featured ? 'md:col-span-2' : ''} ${result.isAward ? 'ring-2 ring-amber-400/50' : ''} ${result.isModelDay ? 'ring-2 ring-primary-400/50' : ''}`}
              onClick={() => {
                if (!result.isAvailable) return
                if (result.isModelDay) {
                  setShowModelDayModal(true)
                } else {
                  setSelectedImage(index)
                }
              }}
            >
              {/* Before/After Label - Only show for before/after results */}
              {result.isBeforeAfter && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1.5 sm:gap-2">
                  <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    Before
                  </span>
                  <span className="bg-primary-500/90 backdrop-blur text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    After
                  </span>
                </div>
              )}

              {/* Model Day Badge */}
              {result.isModelDay && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Send Photos
                  </span>
                </div>
              )}

              {/* Award Badge */}
              {result.isAward && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10">
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Award Finalist
                  </span>
                </div>
              )}

              {/* Time Badge */}
              <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 z-10 backdrop-blur rounded-full px-2 sm:px-3 py-0.5 sm:py-1 ${
                result.isAvailable ? 'bg-white/90' : 'bg-red-500/90'
              }`}>
                <span className={`text-[10px] sm:text-xs font-medium ${
                  result.isAvailable ? 'text-neutral-700' : 'text-white'
                }`}>{result.time}</span>
              </div>

              {/* Image Container - Before/After Side by Side */}
              {result.isBeforeAfter ? (
                <div className={`relative overflow-hidden ${result.featured ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full relative">
                      <img
                        src={result.beforeImage}
                        alt={`${result.title} - Before`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>
                    <div className="w-1/2 h-full relative">
                      <img
                        src={result.afterImage}
                        alt={`${result.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-primary-500/80 text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                    {/* Center divider */}
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/80"></div>
                  </div>
                </div>
              ) : (
                <div className={`relative overflow-hidden ${result.featured ? 'aspect-video' : 'aspect-square'} ${result.isAward ? 'bg-gradient-to-br from-amber-50 to-white flex items-center justify-center' : ''}`}>
                  <img
                    src={result.image}
                    alt={result.title}
                    className={`${result.isAward ? 'w-1/2 h-auto object-contain' : 'w-full h-full object-cover'} sm:group-hover:scale-105 transition-transform duration-500`}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/50 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-600">{result.description}</p>

                <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                  <span>{result.isModelDay ? 'Learn More' : 'View Details'}</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Video Section - Portrait Video */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium">
            <div className="flex flex-col lg:flex-row">
              {/* Video - Portrait aspect ratio */}
              <div className="relative bg-black flex items-center justify-center lg:w-1/3">
                <div className="relative w-full max-w-[280px] mx-auto lg:max-w-none aspect-[9/16]">
                  <video
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/client-journey/before.jpg"
                  >
                    <source src="https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/694522e00190af25cde42b4d.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute top-3 left-3 bg-primary-500/90 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-medium">
                    16 mins
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center lg:w-2/3">
                <span className="text-primary-600 font-medium text-xs sm:text-sm uppercase tracking-wider mb-2">Watch the Procedure</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-800 mb-3 sm:mb-4">
                  See a Real Endolift Treatment
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Watch the complete 16-minute Endolift procedure performed by Marianne. See exactly what happens during treatment — from the initial preparation to the final results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hair-thin laser fibre technique
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Local anaesthetic for comfort
                  </li>
                  <li className="flex items-center text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Real patient, real results
                  </li>
                </ul>
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  Check Your Suitability
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Video Section */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
              poster="/images/amethyst-clinic.avif"
            >
              <source src="https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/692f2825a4526995d93a5156.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 sm:from-black/60 via-black/40 sm:via-transparent to-transparent flex items-center">
              <div className="p-6 sm:p-8 md:p-12 max-w-full sm:max-w-lg">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                  Welcome to Amethyst Aesthetics Beauty
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
                  Step into our award-finalist beauty salon in South Petherton, Somerset, designed for your comfort during your Endolift treatment journey.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '800+', label: 'Treatments Completed' },
            { number: '£1,200', label: 'Full Face Treatment' },
            { number: '1-5', label: 'Years Results Last' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              {results[selectedImage].isBeforeAfter ? (
                <div className="flex gap-2">
                  <img
                    src={results[selectedImage].beforeImage}
                    alt={`${results[selectedImage].title} - Before`}
                    className="w-1/2 rounded-lg"
                  />
                  <img
                    src={results[selectedImage].afterImage}
                    alt={`${results[selectedImage].title} - After`}
                    className="w-1/2 rounded-lg"
                  />
                </div>
              ) : (
                <img
                  src={results[selectedImage].image}
                  alt={results[selectedImage].title}
                  className="w-full rounded-lg"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full p-1.5 sm:p-2 hover:bg-white transition"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Model Day Modal */}
        <ModelDayModal
          isOpen={showModelDayModal}
          onClose={() => setShowModelDayModal(false)}
        />
      </div>
    </section>
  )
}
