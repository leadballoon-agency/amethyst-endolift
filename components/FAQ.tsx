'use client'

import { useState } from 'react'

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Endolift and how does it work?",
      answer: "Endolift is a minimally invasive laser treatment that uses a hair-thin optical fibre (just 0.2-0.4mm) inserted under the skin. The 1470nm laser energy targets water and fat in the subdermal layer, causing immediate skin contraction while stimulating collagen production for continued improvement over 3-6 months."
    },
    {
      question: "Is Endolift painful?",
      answer: "The treatment is performed under local anaesthetic, so most patients experience minimal discomfort. Some describe a gentle warmth during the procedure. Any post-treatment tenderness is typically mild and resolves within a couple of days."
    },
    {
      question: "How long does the treatment take?",
      answer: "A typical Endolift session takes around 1 hour, including preparation and the treatment itself. You can return home the same day."
    },
    {
      question: "What's the downtime?",
      answer: "Endolift has surprisingly short downtime for such effective results. Most patients experience mild swelling and slight redness for 1-2 days. You may have some tenderness for a few days. Most people return to normal activities within 48 hours."
    },
    {
      question: "When will I see results?",
      answer: "You'll notice some immediate tightening effect right after treatment. However, the best results develop over 3-6 months as collagen remodelling occurs in the deeper layers of your skin. This gradual improvement means changes look natural, not 'done'."
    },
    {
      question: "How long do results last?",
      answer: "Results typically last 1-5 years, depending on individual factors like age, skin quality, and lifestyle. The collagen stimulation effects continue to benefit your skin even as natural ageing progresses."
    },
    {
      question: "How many sessions do I need?",
      answer: "Most patients achieve their desired results with just one session. Depending on your goals and the degree of laxity, some may benefit from a second treatment after 6-12 months."
    },
    {
      question: "Who is Endolift suitable for?",
      answer: "Endolift is ideal for those with mild to moderate skin laxity who want more than non-invasive treatments can offer, but aren't ready for surgery. It's particularly effective for jawline softening, jowls, under-chin fullness, and neck laxity. It works on all skin types."
    },
    {
      question: "Who is NOT suitable for Endolift?",
      answer: "Endolift may not be the best option if you have very significant skin laxity (where surgery would be more appropriate), active skin infections, or certain medical conditions. We'll assess your suitability during your consultation and give you honest advice about what will work best for you."
    },
    {
      question: "How does Endolift compare to HIFU or Morpheus8?",
      answer: "Endolift works at the subdermal layer where laxity actually occurs, making it more targeted than surface treatments. HIFU is completely non-invasive with zero downtime but typically produces subtler results. Morpheus8 combines RF with microneedling for texture and tightening. We'll help you choose the right treatment for your specific concerns during your consultation."
    },
    {
      question: "Is Endolift safe?",
      answer: "Endolift is FDA approved and has been used in Europe for over 10 years. Like any procedure, there are potential side effects including swelling, bruising, and tenderness. Rare complications can occur, which is why proper technique and practitioner skill are essential. We'll discuss all aspects during your consultation."
    },
    {
      question: "What should I expect at my consultation?",
      answer: "Your consultation includes a thorough assessment of your concerns, skin quality, and goals. We'll examine the treatment areas, explain exactly how Endolift works, discuss realistic expectations, and give you honest advice about whether it's the right treatment for you. There's no pressure — just clear information to help you decide."
    }
  ]

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Questions Answered</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about Endolift treatment
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary-200 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg text-neutral-800 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-neutral-600 mb-4">Still have questions?</p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
