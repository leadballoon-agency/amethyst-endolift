interface BodySectionProps {
  onBookingClick?: () => void
}

export default function BodySection({ onBookingClick }: BodySectionProps) {
  return (
    <section id="body" className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-premium">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">
            Not Just for the Face
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Endolift Body
            <span className="block gradient-text mt-1">Contouring</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-3 max-w-2xl mx-auto">
            The same 1470nm laser technology that transforms the face and neck also delivers
            remarkable fat reduction and skin tightening results across the body.
          </p>
        </div>

        {/* Main Content — Image + Copy */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-10">
          {/* Before & After Image */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-premium">
            <img
              src="/images/endolift-results-gallery/stomach.JPG"
              alt="Endolift body contouring before and after — stomach area tightening and fat reduction"
              className="w-full h-auto"
            />
          </div>

          {/* Copy + Benefits */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">
                Tighten, Contour &amp; Reduce
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Endolift&apos;s minimally invasive laser fibre targets stubborn fat deposits while simultaneously
                tightening loose skin — all without surgery or general anaesthetic. The 1470nm wavelength
                melts fat cells and triggers collagen production for a firmer, more contoured result that
                continues to improve over months.
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Small Areas */}
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 sm:p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <h4 className="font-bold text-base sm:text-lg">Small</h4>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">&pound;450</p>
                </div>
                <p className="text-[10px] sm:text-xs text-neutral-400 mb-3">10x10cm</p>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Targeted areas
                  </li>
                </ul>
              </div>

              {/* Medium Areas */}
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 sm:p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-bold text-base sm:text-lg">Medium</h4>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">&pound;650</p>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Arms
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Stomach
                  </li>
                </ul>
              </div>

              {/* Large Areas */}
              <div className="bg-primary-50 border-2 border-primary-500/30 rounded-xl p-4 sm:p-5">
                <div className="flex items-baseline justify-between mb-3">
                  <h4 className="font-bold text-base sm:text-lg">Large</h4>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">&pound;850</p>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    Thighs (inner or outer)
                  </li>
                </ul>
                <p className="text-xs text-primary-600 font-medium mt-3">+£100 to include eyes</p>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-lg sm:text-xl font-bold text-primary-600">1 Session</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Usually all you need</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-primary-600">Minimal</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Downtime</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-primary-600">3-6 Months</p>
                  <p className="text-xs text-neutral-500 mt-0.5">Full results develop</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onBookingClick}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Book Body Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
