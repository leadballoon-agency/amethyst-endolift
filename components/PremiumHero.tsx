interface PremiumHeroProps {
  onBookingClick?: () => void
  onVideoClick?: () => void
}

export default function PremiumHero({ onBookingClick, onVideoClick }: PremiumHeroProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 animate-slide-up text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mx-auto lg:mx-0 shadow-lg">
              <span className="text-white font-semibold text-sm sm:text-base">Non-Surgical Laser Lift</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15]">
              A Tighter Jawline
              <span className="block gradient-text mt-1 sm:mt-2">Without Surgery</span>
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              Endolift uses a hair-thin laser fibre to tighten and contour from within. Perfect for jawline, jowls, and neck — when skincare isn't enough but you're not ready for surgery.
            </p>

            {/* Key Benefits Box */}
            <div className="bg-gradient-to-r from-primary-50 to-primary-100 border-2 border-primary-200 rounded-2xl p-5 sm:p-6 mx-auto lg:mx-0 max-w-xl">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <p className="text-lg sm:text-2xl font-bold text-primary-600 mb-1">1-2 Days</p>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">Downtime</p>
                </div>
                <div className="text-center bg-white rounded-xl p-3 sm:p-4 shadow-sm">
                  <p className="text-lg sm:text-2xl font-bold text-primary-600 mb-1">1-5 Years</p>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">Results Last</p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary-600">£1,200</p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1">Single treatment • Most need just one session</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
              <a
                href="#assessment"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Check Suitability
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <button
                onClick={onVideoClick}
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-full font-semibold text-base hover:bg-primary-50 transition-all duration-300 w-full sm:w-auto group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Meet Marianne
              </button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center lg:justify-start gap-4 sm:gap-6 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">FDA</p>
                <p className="text-xs text-neutral-600 whitespace-nowrap">Approved</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">10+</p>
                <p className="text-xs text-neutral-600 whitespace-nowrap">Years in Europe</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">1</p>
                <p className="text-xs text-neutral-600 whitespace-nowrap">Session Typically</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary-600">800+</p>
                <p className="text-xs text-neutral-600 whitespace-nowrap">Treatments</p>
              </div>
            </div>
          </div>

          {/* Mobile Video Section */}
          <div className="relative mt-8 lg:hidden">
            <div className="relative mx-auto max-w-[280px]">
              <div className="relative aspect-[9/16] rounded-2xl shadow-xl overflow-hidden bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/694522e00190af25cde42b4d.mp4" type="video/mp4" />
                </video>
                {/* Link to full treatment video */}
                <a
                  href="#treatment-video"
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="bg-white/90 backdrop-blur rounded-full p-3">
                    <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </a>
              </div>
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <p className="text-xs text-neutral-600 text-center">
                  Tap to watch full treatment
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Video Section */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative h-[600px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 rounded-3xl"></div>

              <div className="relative flex items-center justify-center h-full w-full">
                {/* Main Video - Portrait */}
                <div className="relative h-full max-h-[500px] aspect-[9/16]">
                  <div className="relative h-full rounded-2xl shadow-2xl overflow-hidden bg-black animate-float">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/694522e00190af25cde42b4d.mp4" type="video/mp4" />
                    </video>
                    {/* Link to full treatment video */}
                    <a
                      href="#treatment-video"
                      className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors group cursor-pointer"
                    >
                      <div className="bg-white/90 backdrop-blur rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                        <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </a>
                    {/* Treatment preview badge */}
                    <div className="absolute top-4 left-4 bg-primary-500/90 backdrop-blur text-white px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Treatment Preview
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Card - Desktop Only */}
              <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Award-Finalist Aesthetics Practitioner</h3>
                    <div className="flex justify-center items-center space-x-2 text-primary-600">
                      <span className="font-medium">4+ Years Experience</span>
                      <span className="text-primary-300">•</span>
                      <span className="font-medium">Marianne - 800+ Treatments</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float opacity-20 blur-2xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-xs text-neutral-500 mb-2">Scroll to explore</span>
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
