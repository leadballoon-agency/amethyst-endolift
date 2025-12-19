export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "MedicalBusiness"],
    "@id": "https://endoliftsomerset.co.uk/#organization",
    "name": "Amethyst Aesthetics Beauty",
    "alternateName": ["Amethyst Aesthetics", "Endolift Somerset"],
    "url": "https://endoliftsomerset.co.uk",
    "sameAs": [
      "https://www.amethystaestheticsbeauty.com/",
      "https://www.facebook.com/amethystaestheticsbeauty",
      "https://www.instagram.com/amethystaestheticsbeauty"
    ],
    "logo": {
      "@type": "ImageObject",
      "url": "https://endoliftsomerset.co.uk/images/logo.png",
      "width": 200,
      "height": 60
    },
    "image": "https://endoliftsomerset.co.uk/images/amethyst-clinic.avif",
    "description": "Award-finalist aesthetics clinic in Somerset specializing in Endolift laser treatments. Non-surgical face lifting, jawline tightening, and neck contouring led by Marianne with 800+ treatments completed.",
    "slogan": "A Tighter Jawline Without Surgery",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Marianne Ismay"
    },
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
      "latitude": 50.9581,
      "longitude": -2.8169
    },
    "telephone": "+447366904007",
    "email": "Ismaymarianne@gmail.com",
    "priceRange": "££",
    "currenciesAccepted": "GBP",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Clearpay"],
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
    "areaServed": [
      { "@type": "City", "name": "South Petherton" },
      { "@type": "City", "name": "Yeovil" },
      { "@type": "City", "name": "Taunton" },
      { "@type": "City", "name": "Crewkerne" },
      { "@type": "City", "name": "Ilminster" },
      { "@type": "City", "name": "Chard" },
      { "@type": "City", "name": "Bridgwater" },
      { "@type": "City", "name": "Glastonbury" },
      { "@type": "City", "name": "Wells" },
      { "@type": "AdministrativeArea", "name": "Somerset" }
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
            "description": "Complete facial Endolift treatment for jawline, jowls, and overall facial contouring using 1470nm laser technology"
          },
          "price": "1200",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Neck & Chin Endolift",
            "description": "Targeted Endolift treatment for neck and chin area tightening and contouring"
          },
          "price": "800",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Combination Endolift Package",
            "description": "Comprehensive Endolift treatment combining face, neck, and additional treatment areas"
          },
          "price": "1800",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2025-12-31"
        }
      ]
    },
    "medicalSpecialty": ["Dermatology", "PlasticSurgery"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Endolift Laser Treatment",
        "procedureType": "https://schema.org/NoninvasiveProcedure",
        "description": "Minimally invasive 1470nm laser treatment inserted under the skin to tighten and contour from within"
      }
    ],
    "knowsAbout": [
      "Endolift",
      "Non-surgical facelift",
      "Laser skin tightening",
      "Jawline contouring",
      "Neck lift",
      "Jowl treatment",
      "Skin laxity treatment"
    ]
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://endoliftsomerset.co.uk/#practitioner",
    "name": "Marianne Ismay",
    "alternateName": "Marianne",
    "jobTitle": "Aesthetics Practitioner",
    "description": "Award-finalist aesthetics practitioner with 4+ years experience and over 800 treatments completed. Specializing in Endolift, HIFU, CO2 Laser, and advanced facial aesthetics.",
    "image": "https://endoliftsomerset.co.uk/images/team/Marianne.png",
    "worksFor": {
      "@id": "https://endoliftsomerset.co.uk/#organization"
    },
    "knowsAbout": [
      "Endolift laser treatment",
      "Non-surgical facelift techniques",
      "Laser skin tightening",
      "Facial aesthetics",
      "HIFU treatment",
      "CO2 laser resurfacing"
    ],
    "award": "Professional Beauty Awards Finalist 2025",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional Certification",
      "name": "Advanced Aesthetics Practitioner"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": "https://endoliftsomerset.co.uk/#endolift-service",
    "name": "Endolift Treatment Somerset",
    "alternateName": ["Endolift", "Endolift Laser", "Non-Surgical Laser Lift"],
    "procedureType": "https://schema.org/NoninvasiveProcedure",
    "description": "Endolift is a minimally invasive laser treatment using a hair-thin 1470nm laser fibre inserted under the skin to tighten and contour the face, jawline, and neck from within. FDA approved with 10+ years proven results in Europe.",
    "howPerformed": "A hair-thin laser fibre is inserted under the skin through tiny entry points. The 1470nm wavelength targets fat cells and stimulates collagen production, creating immediate tightening with continued improvement over 3-6 months.",
    "preparation": "Consultation to assess suitability. Local anaesthetic applied for comfort. Treatment takes 45-60 minutes.",
    "followup": "1-2 days downtime with mild swelling. Results visible immediately, continuing to improve for 3-6 months. Results typically last 1-5 years.",
    "status": "https://schema.org/ActiveActionStatus",
    "bodyLocation": ["Face", "Jawline", "Neck", "Jowls", "Chin"],
    "provider": {
      "@id": "https://endoliftsomerset.co.uk/#organization"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://endoliftsomerset.co.uk/#assessment",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Endolift Consultation Booking"
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "800",
      "highPrice": "1800",
      "priceCurrency": "GBP",
      "offerCount": "3"
    }
  }

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Full Endolift Treatment Procedure",
    "description": "Watch a complete 16-minute Endolift laser treatment performed by Marianne at Amethyst Aesthetics Beauty. See the real procedure from preparation to completion.",
    "thumbnailUrl": "https://endoliftsomerset.co.uk/images/client-journey/before.jpg",
    "uploadDate": "2024-12-01",
    "duration": "PT16M",
    "contentUrl": "https://storage.googleapis.com/msgsndr/yE0ZTtTwqOwpiUubrP0k/media/694522e00190af25cde42b4d.mp4",
    "embedUrl": "https://endoliftsomerset.co.uk",
    "publisher": {
      "@id": "https://endoliftsomerset.co.uk/#organization"
    },
    "about": {
      "@id": "https://endoliftsomerset.co.uk/#endolift-service"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Endolift and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endolift is a minimally invasive laser treatment that uses a hair-thin 1470nm laser fibre inserted under the skin. The laser energy targets fat cells while stimulating collagen production, creating immediate skin tightening and contouring effects that continue to improve over 3-6 months."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Endolift cost in Somerset?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Amethyst Aesthetics Beauty, Endolift treatments start from £800 for neck and chin, £1,200 for full face, and £1,800 for combination packages. This is competitive pricing for the Somerset area, with finance options available through Clearpay."
        }
      },
      {
        "@type": "Question",
        "name": "Is Endolift painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endolift is performed under local anaesthetic, so you'll feel minimal discomfort during the procedure. Most patients describe feeling warmth and slight pressure. Any post-treatment discomfort is typically mild and manageable with over-the-counter painkillers."
        }
      },
      {
        "@type": "Question",
        "name": "How long do Endolift results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endolift results typically last between 1-5 years, depending on individual factors like skin quality, age, and lifestyle. Most patients only need one treatment session, though some may benefit from a top-up treatment after several years."
        }
      },
      {
        "@type": "Question",
        "name": "What is the downtime after Endolift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endolift has minimal downtime of just 1-2 days. You may experience mild swelling, bruising, and tenderness which typically resolves within a week. Most patients return to normal activities within 48 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Who is a good candidate for Endolift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideal candidates are those with mild to moderate skin laxity, jowling, or loss of jawline definition who want improvement without surgery. It's perfect for people who feel skincare isn't enough but aren't ready for a surgical facelift. A consultation will determine if Endolift is right for you."
        }
      },
      {
        "@type": "Question",
        "name": "How does Endolift compare to a surgical facelift?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Endolift offers a non-surgical alternative with minimal downtime (1-2 days vs weeks), lower cost, and no general anaesthesia required. While results are more subtle than surgery, Endolift is ideal for those wanting natural-looking improvement without the risks and recovery time of surgery."
        }
      },
      {
        "@type": "Question",
        "name": "Is Endolift FDA approved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Endolift technology is FDA approved and has been used successfully in Europe for over 10 years. It has an excellent safety profile when performed by trained practitioners like Marianne at Amethyst Aesthetics Beauty."
        }
      }
    ]
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Endolift Treatment Works",
    "description": "Step-by-step guide to what happens during an Endolift laser treatment at Amethyst Aesthetics Beauty",
    "totalTime": "PT90M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "GBP",
      "value": "1200"
    },
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Consultation & Assessment",
        "text": "Your journey begins with a thorough consultation where Marianne assesses your concerns, skin quality, and determines if Endolift is the right treatment for you.",
        "image": "https://endoliftsomerset.co.uk/images/amethyst-clinic.avif"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Preparation & Anaesthetic",
        "text": "On treatment day, the area is cleaned and local anaesthetic is applied to ensure your comfort throughout the procedure.",
        "image": "https://endoliftsomerset.co.uk/images/client-journey/before.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Laser Treatment",
        "text": "A hair-thin laser fibre is inserted through tiny entry points. The 1470nm laser energy targets fat cells and stimulates collagen production, tightening from within.",
        "image": "https://endoliftsomerset.co.uk/images/client-journey/before.jpg"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Immediate Results & Recovery",
        "text": "You'll see immediate tightening effects. Mild swelling is normal and resolves within days. Results continue improving over 3-6 months as collagen rebuilds.",
        "image": "https://endoliftsomerset.co.uk/images/client-journey/after.jpg"
      }
    ]
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://endoliftsomerset.co.uk/#reviews",
    "name": "Amethyst Aesthetics Beauty",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Margaret Thresher" },
        "datePublished": "2024-11-19",
        "reviewBody": "I have been going to Marianne for over a year. She is very friendly and makes me feel very relaxed, she is very professional and does a brilliant job.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Holly Henderson" },
        "datePublished": "2023-12-21",
        "reviewBody": "I've had many treatments with Marianne, all of which have been done to an extremely high standard and I've left feeling more confident in myself everytime. Marianne is kind, caring and an amazing listener. Wouldn't go anywhere else, she's one of a kind!",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Joanna Bowers" },
        "datePublished": "2023-12-21",
        "reviewBody": "Marianne is the best i would never go elsewhere, highly recommended and well worth the travel. She is kind, caring and attentive she gives you back confidence and uplift.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sheena Wye" },
        "datePublished": "2024-07-21",
        "reviewBody": "Wouldn't go anywhere else for my aesthetics this company has helped me find a new love for myself! One thing I pride them in if she don't think it's for you she will say and suggest alternatives! Amazing friendly service.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Tracey Groves" },
        "datePublished": "2022-11-21",
        "reviewBody": "Marianne is superb. She provides extensive knowledge of the treatment you are having, explaining everything including aftercare which in turn puts you at ease. She goes above and beyond to ensure your treatment is provided under the highest standard.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://endoliftsomerset.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Endolift Treatment",
        "item": "https://endoliftsomerset.co.uk/#treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Check Suitability",
        "item": "https://endoliftsomerset.co.uk/#assessment"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://endoliftsomerset.co.uk/#website",
    "name": "Endolift Somerset - Amethyst Aesthetics Beauty",
    "alternateName": "Endolift Somerset",
    "url": "https://endoliftsomerset.co.uk",
    "description": "Expert Endolift laser treatment for non-surgical face, jawline and neck tightening in Somerset. £1,200 full face treatment by award-finalist practitioner Marianne.",
    "publisher": {
      "@id": "https://endoliftsomerset.co.uk/#organization"
    },
    "inLanguage": "en-GB",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://endoliftsomerset.co.uk/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
