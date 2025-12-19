interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  const practitioners = [
    {
      name: 'Marianne',
      title: 'Founder & Advanced Aesthetics Practitioner',
      image: '/images/team/Marianne.png',
      bio: 'As the founder of Amethyst Aesthetics Beauty, I bring over 4 years of dedicated expertise in advanced aesthetic treatments. With 800+ successful treatments completed, I specialise in non-surgical facial rejuvenation including Endolift, HIFU, and CO2 laser. Our clinic has been recognised as a finalist for Best Beauty Salon in Yeovil, reflecting our commitment to exceptional care and honest advice for every client.',
      qualifications: [
        'Advanced Endolift Practitioner',
        'Non-Surgical Facelift Specialist',
        '800+ Successful Treatments',
        'Award-Finalist Beauty Salon',
        '4+ Years Aesthetic Medicine'
      ]
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Meet Your Practitioner</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Expert Care,
            <span className="block gradient-text">Honest Advice</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Small clinic care, not conveyor belt aesthetics
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-primary-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300">
              {/* Practitioner Image */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6">
                <div className="aspect-[4/5] relative">
                  <img
                    src={practitioner.image}
                    alt={`${practitioner.name} - ${practitioner.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
                </div>
              </div>

              {/* Practitioner Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    {practitioner.name}
                  </h3>
                  <p className="text-base sm:text-lg text-primary-600 font-medium mt-1">
                    {practitioner.title}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {practitioner.bio}
                </p>

                {/* Promise Box */}
                <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                  <p className="text-sm text-primary-800 italic">
                    "I'll always give you honest advice. If Endolift isn't right for you, I'll tell you — and recommend what will actually work for your concerns."
                  </p>
                </div>

                {/* Qualifications */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-base sm:text-lg">Qualifications & Expertise</h4>
                  <ul className="space-y-2">
                    {practitioner.qualifications.map((item, qIndex) => (
                      <li key={qIndex} className="flex items-start text-neutral-700">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onBookingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
