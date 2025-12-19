export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "Amethyst Aesthetics",
    "url": "https://endoliftsomerset.co.uk",
    "sameAs": [
      "https://endoliftsomerset.co.uk",
      "https://www.amethystaestheticsbeauty.com/"
    ],
    "logo": "https://endoliftsomerset.co.uk/images/logo.png",
    "image": "https://endoliftsomerset.co.uk/images/endolift-hero.jpg",
    "description": "Award-finalist beauty salon in Somerset specializing in expert Endolift laser treatments led by Marianne. Over 800+ treatments completed. Non-surgical laser lift for jawline, neck, and face tightening.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Endolift Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full Face Endolift",
            "description": "Complete facial Endolift treatment for jawline, jowls, and overall facial contouring"
          },
          "price": "1200",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neck & Chin Endolift",
            "description": "Endolift treatment targeting the neck and chin area for tightening and contouring"
          },
          "price": "800",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Combination Endolift Package",
            "description": "Comprehensive Endolift treatment for face, neck, and additional areas"
          },
          "price": "1800",
          "priceCurrency": "GBP"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Laser Therapy"
    ],
    "availableService": [
      {
        "@type": "Service",
        "name": "Endolift Laser Treatment",
        "description": "Minimally invasive 1470nm laser treatment for skin tightening and contouring from within"
      },
      {
        "@type": "Service",
        "name": "Jawline Tightening",
        "description": "Endolift treatment for jawline definition and jowl reduction"
      },
      {
        "@type": "Service",
        "name": "Neck Tightening",
        "description": "Non-surgical neck lift using Endolift laser technology"
      },
      {
        "@type": "Service",
        "name": "Face Contouring",
        "description": "Endolift treatment for facial contouring and skin laxity"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amethyst Aesthetics Beauty - Endolift Somerset",
    "alternateName": "Endolift Somerset",
    "url": "https://endoliftsomerset.co.uk",
    "description": "Expert Endolift laser treatment for non-surgical face, jawline and neck tightening in Somerset by award-finalist practitioner Marianne",
    "publisher": {
      "@type": "Organization",
      "name": "Amethyst Aesthetics Beauty"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://endoliftsomerset.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": "Endolift Somerset",
    "image": "https://endoliftsomerset.co.uk/images/amethyst-clinic.avif",
    "description": "Award-finalist beauty salon in South Petherton, Somerset. Specializing in Endolift laser treatments for non-surgical face lifting, jawline tightening, and neck contouring. Led by Marianne with 800+ treatments completed.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
      "addressLocality": "South Petherton",
      "addressRegion": "Somerset",
      "postalCode": "TA13 5HV",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.9581",
      "longitude": "-2.8169"
    },
    "url": "https://endoliftsomerset.co.uk",
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "GBP",
    "areaServed": [
      {
        "@type": "City",
        "name": "South Petherton"
      },
      {
        "@type": "City",
        "name": "Yeovil"
      },
      {
        "@type": "City",
        "name": "Crewkerne"
      },
      {
        "@type": "City",
        "name": "Ilminster"
      },
      {
        "@type": "City",
        "name": "Chard"
      },
      {
        "@type": "City",
        "name": "Taunton"
      }
    ],
    "hasMap": "https://maps.google.com/?q=Unit+2,+Old+Apple+Store,+New+Cross+Hill,+South+Petherton,+TA13+5HV",
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Cosmetic Dermatology"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Endolift Treatment Somerset",
    "description": "Expert Endolift laser treatment for non-surgical face lifting, jawline tightening, and neck contouring led by award-finalist practitioner Marianne",
    "provider": {
      "@type": "BeautySalon",
      "name": "Amethyst Aesthetics Beauty",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Unit 2, Old Apple Store, New Cross Hill",
        "addressLocality": "South Petherton",
        "addressRegion": "Somerset",
        "postalCode": "TA13 5HV",
        "addressCountry": "GB"
      },
      "telephone": "+447366904007"
    },
    "areaServed": [
      "South Petherton",
      "Yeovil",
      "Crewkerne",
      "Ilminster",
      "Chard",
      "Taunton",
      "Martock",
      "Langport",
      "Somerton",
      "Somerset"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://endoliftsomerset.co.uk",
      "serviceSmsNumber": "+447366904007"
    },
    "category": "Beauty Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Endolift Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Full Face Endolift",
          "price": "1200",
          "priceCurrency": "GBP",
          "description": "Complete facial Endolift treatment for jawline, jowls, and overall facial contouring"
        },
        {
          "@type": "Offer",
          "name": "Neck & Chin Endolift",
          "price": "800",
          "priceCurrency": "GBP",
          "description": "Endolift treatment targeting the neck and chin area"
        },
        {
          "@type": "Offer",
          "name": "Combination Endolift Package",
          "price": "1800",
          "priceCurrency": "GBP",
          "description": "Comprehensive Endolift treatment for face, neck, and additional areas"
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Amethyst Aesthetics Beauty",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Margaret Thresher"
        },
        "datePublished": "2024-11-19",
        "reviewBody": "I have been going to Marianne for over a year. She is very friendly and makes me feel very relaxed, she is very professional and does a brilliant job.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Holly Henderson"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "I've had many treatments with Marianne, all of which have been done to an extremely high standard and I've left feeling more confident in myself everytime. Marianne is kind, caring and an amazing listener. It's like having my lips done and therapy all at the same time. Wouldn't go anywhere else, she's one of a kind!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Joanna Bowers"
        },
        "datePublished": "2023-12-21",
        "reviewBody": "Marianne is the best i would never go elsewhere, highly recommended and well worth the travel. She is kind, caring and attentive she gives you back confidence and uplift she makes you feel welcome on every visit never short on making you feel special.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sheena Wye"
        },
        "datePublished": "2024-07-21",
        "reviewBody": "Wouldn't go anywhere else for my aesthetics this company has helped me find a new love for myself! One thing I pride them in if she don't think it's for you she will say and suggest alternatives! Amazing friendly service.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Shannon Reason"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "I went to Marianne to get my lips done for the first time. I was really scared I have a phobia of needles. Marianne assured me I'd be fine. She was super patient with me, kept checking in with me while my numbing stuff was on. She explained everything clearly and made the whole experience comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Tracey Groves"
        },
        "datePublished": "2022-11-21",
        "reviewBody": "Marianne is superb. She provides extensive knowledge of the treatment you are having, explaining everything including aftercare which in turn puts you at ease. She goes above and beyond to ensure your treatment is provided under the highest standard.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  )
}
