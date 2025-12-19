'use client'

import { useState } from 'react'
import { trackAssessmentStart, trackAssessmentComplete } from './FacebookPixel'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      id: 1,
      question: "What's your primary concern?",
      subtext: "Select the issue that bothers you most",
      options: [
        { value: 'laxity', label: 'Sagging or loose skin', icon: '📉', desc: 'Loss of firmness, drooping' },
        { value: 'contour', label: 'Lost definition', icon: '💎', desc: 'Jawline, jowls, double chin' },
        { value: 'texture', label: 'Skin texture issues', icon: '✨', desc: 'Scars, pores, roughness' },
        { value: 'lines', label: 'Lines & wrinkles', icon: '🔍', desc: 'Fine lines, deep wrinkles' },
        { value: 'volume', label: 'Volume loss', icon: '💧', desc: 'Hollow cheeks, thin lips' },
        { value: 'pigment', label: 'Pigmentation', icon: '☀️', desc: 'Sun damage, dark spots' }
      ]
    },
    {
      id: 2,
      question: "Where is your main area of concern?",
      subtext: "Select the area that bothers you most",
      options: [
        { value: 'jawline', label: 'Jawline & jowls', icon: '🔷' },
        { value: 'underchin', label: 'Under chin / neck', icon: '⬇️' },
        { value: 'midface', label: 'Cheeks & midface', icon: '🔘' },
        { value: 'eyes', label: 'Around the eyes', icon: '👁️' },
        { value: 'forehead', label: 'Forehead & brows', icon: '⬆️' },
        { value: 'fullface', label: 'Full face', icon: '🌟' }
      ]
    },
    {
      id: 3,
      question: "How noticeable is the concern?",
      subtext: "Be honest - this helps us recommend the right treatment",
      options: [
        { value: 'mild', label: 'Just starting to notice', icon: '🌱', desc: 'Early signs, preventative' },
        { value: 'moderate', label: 'Noticeable in photos', icon: '📸', desc: 'Bothers me sometimes' },
        { value: 'significant', label: 'Quite noticeable', icon: '🪞', desc: 'I see it daily' },
        { value: 'severe', label: 'Very noticeable', icon: '⚡', desc: 'Major concern for me' }
      ]
    },
    {
      id: 4,
      question: "What's your approach to downtime?",
      subtext: "This helps us match you with the right treatment intensity",
      options: [
        { value: 'none', label: 'Zero downtime', icon: '✈️', desc: 'Back to normal immediately' },
        { value: 'minimal', label: 'A day or two is fine', icon: '🏠', desc: 'Can work from home' },
        { value: 'moderate', label: 'Up to a week is okay', icon: '📅', desc: 'Can plan around it' },
        { value: 'flexible', label: 'Whatever works best', icon: '🎯', desc: 'Results matter most' }
      ]
    }
  ]

  const totalSteps = questions.length
  const currentQuestion = questions[step - 1]

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)

    if (step === 1) {
      trackAssessmentStart()
    }

    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      setStep(step + 1)
      const recommendation = getRecommendation(newAnswers)
      trackAssessmentComplete(recommendation.treatment)
      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: Record<number, string> = answers) => {
    const concern = assessmentAnswers[1]
    const area = assessmentAnswers[2]
    const severity = assessmentAnswers[3]
    const downtime = assessmentAnswers[4]

    // ENDOLIFT - Best for laxity/contour in jawline, underchin, neck with moderate downtime tolerance
    if ((concern === 'laxity' || concern === 'contour') &&
        (area === 'jawline' || area === 'underchin' || area === 'midface' || area === 'fullface') &&
        (severity === 'mild' || severity === 'moderate' || severity === 'significant') &&
        (downtime !== 'none')) {
      return {
        treatment: 'Endolift',
        price: '£1,200',
        description: 'Perfect match. Endolift uses a hair-thin laser fibre under the skin to tighten and contour. Ideal for your jawline and neck concerns with natural-looking results.',
        whyThisWorks: 'Targets the exact layer where laxity occurs. More effective than surface treatments, less invasive than surgery.',
        downtime: '1-2 days mild swelling',
        results: 'Immediate tightening + continued improvement over 3-6 months',
        link: null, // Current page
        isIdeal: true
      }
    }

    // HIFU - For those wanting zero downtime or milder laxity
    if ((concern === 'laxity' || concern === 'contour' || concern === 'lines') &&
        (downtime === 'none' || severity === 'mild')) {
      return {
        treatment: 'HIFU Skin Tightening',
        price: 'From £300',
        description: 'Great option for lifting and tightening with zero downtime. Uses focused ultrasound to stimulate collagen deep in the skin.',
        whyThisWorks: 'Non-invasive ultrasound reaches the same deep layers as a facelift, without any incisions.',
        downtime: 'None - return to normal immediately',
        results: 'Gradual improvement over 2-3 months',
        link: 'https://hifusomerset.co.uk',
        isIdeal: false
      }
    }

    // CO2 LASER - For texture, scars, pigmentation, surface concerns
    if (concern === 'texture' || concern === 'pigment' ||
        (concern === 'lines' && (area === 'eyes' || area === 'fullface'))) {
      return {
        treatment: 'CO2 Laser Resurfacing',
        price: 'From £395',
        description: 'The gold standard for skin texture, scars, and pigmentation. Removes damaged surface skin and stimulates fresh collagen.',
        whyThisWorks: 'Ablative laser precisely removes damaged skin layers while triggering deep collagen remodelling.',
        downtime: '5-7 days healing',
        results: '70-80% improvement in scars and texture',
        link: 'https://co2lasersomerset.co.uk',
        isIdeal: false
      }
    }

    // DERMAL FILLERS - For volume loss
    if (concern === 'volume') {
      return {
        treatment: 'Dermal Fillers',
        price: 'From £200',
        description: 'Restore lost volume instantly with hyaluronic acid fillers. Perfect for hollow cheeks, thin lips, and facial contouring.',
        whyThisWorks: 'Replaces volume exactly where it\'s been lost, with immediate visible results.',
        downtime: 'Minimal - possible bruising for a few days',
        results: 'Immediate, lasting 9-18 months',
        link: 'https://www.amethystaestheticsbeauty.com/dermal-fillers',
        isIdeal: false
      }
    }

    // ANTI-WRINKLE - For dynamic lines (forehead, frown, crow's feet)
    if (concern === 'lines' && (area === 'forehead' || area === 'eyes')) {
      return {
        treatment: 'Anti-Wrinkle Injections',
        price: 'From £180',
        description: 'Relax the muscles that cause expression lines. Ideal for forehead lines, frown lines, and crow\'s feet.',
        whyThisWorks: 'Targets the muscle movement causing the wrinkles, preventing them from forming.',
        downtime: 'None',
        results: 'Visible in 7-14 days, lasting 3-4 months',
        link: 'https://www.amethystaestheticsbeauty.com/anti-wrinkle-injections',
        isIdeal: false
      }
    }

    // SEVERE LAXITY - Honest recommendation
    if (severity === 'severe' && (concern === 'laxity' || concern === 'contour')) {
      return {
        treatment: 'Consultation Recommended',
        price: 'Free consultation',
        description: 'For significant laxity, we\'d recommend a proper in-person assessment. Endolift may help, but we want to give you honest advice about what\'s achievable.',
        whyThisWorks: 'We believe in honest recommendations. We\'ll assess whether Endolift, a combination approach, or a surgical referral would serve you best.',
        downtime: 'Depends on recommended treatment',
        results: 'We\'ll discuss realistic expectations',
        link: null,
        isIdeal: false,
        needsConsultation: true
      }
    }

    // DEFAULT - Endolift as we're on the Endolift page
    return {
      treatment: 'Endolift',
      price: '£1,200',
      description: 'Based on your answers, Endolift could be a good option. Book a consultation so we can assess your specific concerns in person.',
      whyThisWorks: 'Minimally invasive laser tightening that targets skin laxity from within.',
      downtime: '1-2 days mild swelling',
      results: 'Immediate tightening + continued improvement over 3-6 months',
      link: null,
      isIdeal: false
    }
  }

  const recommendation = getRecommendation()

  return (
    <section id="assessment" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-xs sm:text-sm">Smart Treatment Finder</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Find Your Perfect
            <span className="gradient-text"> Treatment</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Answer 4 quick questions and we'll match you with the ideal treatment from our range
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-6 sm:p-8 md:p-12">
          {step <= totalSteps && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-neutral-600">Step {step} of {totalSteps}</span>
                  <span className="text-xs sm:text-sm text-neutral-600">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{currentQuestion.question}</h3>
                {currentQuestion.subtext && (
                  <p className="text-sm text-neutral-500">{currentQuestion.subtext}</p>
                )}
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-102 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-2xl sm:text-3xl flex-shrink-0">{option.icon}</div>
                      <div>
                        <p className="font-semibold text-sm sm:text-base text-neutral-800 group-hover:text-primary-600">
                          {option.label}
                        </p>
                        {'desc' in option && option.desc && (
                          <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">{option.desc}</p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Back Button */}
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="mt-6 text-sm text-neutral-500 hover:text-primary-600 transition-colors"
                >
                  ← Back to previous question
                </button>
              )}
            </>
          ) : (
            /* Results */
            <div className="animate-slide-up">
              <div className="text-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl sm:text-4xl">{recommendation.isIdeal ? '🎯' : '💡'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {recommendation.isIdeal ? 'Perfect Match Found' : 'Our Recommendation'}
                </h3>
                <p className="text-sm text-neutral-600">Based on your answers, here's what we recommend</p>
              </div>

              {/* Recommendation Card */}
              <div className={`rounded-2xl p-6 sm:p-8 mb-6 border-2 ${
                recommendation.isIdeal
                  ? 'bg-gradient-to-br from-primary-50 to-white border-primary-200'
                  : 'bg-gradient-to-br from-neutral-50 to-white border-neutral-200'
              }`}>
                {recommendation.isIdeal && (
                  <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-4">
                    ✓ Ideal for your concerns
                  </div>
                )}

                <h4 className="text-xl sm:text-2xl font-bold text-neutral-800 mb-2">
                  {recommendation.treatment}
                </h4>
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
                  {recommendation.price}
                </p>
                <p className="text-neutral-600 mb-4">
                  {recommendation.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-xl p-4 border border-neutral-100">
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Downtime</p>
                    <p className="font-medium text-neutral-800">{recommendation.downtime}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-neutral-100">
                    <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Results</p>
                    <p className="font-medium text-neutral-800">{recommendation.results}</p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                  <p className="text-xs text-primary-600 uppercase tracking-wide mb-1">Why this works for you</p>
                  <p className="text-sm text-primary-800">{recommendation.whyThisWorks}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={onBookingClick}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book {recommendation.treatment} Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {recommendation.link && (
                  <a
                    href={recommendation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-full font-medium hover:bg-primary-50 transition-all duration-300"
                  >
                    Learn more about {recommendation.treatment}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}

                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="w-full inline-flex items-center justify-center text-neutral-500 text-sm font-medium hover:text-primary-600 transition-colors py-2"
                >
                  ← Start over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
