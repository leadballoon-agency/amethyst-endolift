import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'
import ConvertBox from '@/components/ConvertBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Endolift Somerset £1,200 - Non-Surgical Laser Lift | Amethyst Aesthetics Beauty',
  description: 'Endolift treatment at Amethyst Aesthetics Beauty, South Petherton. £1,200 for jawline, jowls & neck tightening. Minimally invasive laser lift with 1-2 days downtime. FDA approved, results last 1-5 years. Award-finalist clinic with 800+ treatments.',
  keywords: 'Endolift Somerset, Endolift Yeovil, non-surgical facelift Somerset, jawline tightening, jowl treatment, neck lift without surgery, laser face lift, Amethyst Aesthetics Beauty, Marianne aesthetics, South Petherton aesthetics, Endolift UK, laser skin tightening Somerset',
  authors: [{ name: 'Amethyst Aesthetics Beauty' }],
  creator: 'Amethyst Aesthetics Beauty',
  publisher: 'Amethyst Aesthetics Beauty',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://endoliftsomerset.co.uk'),
  alternates: {
    canonical: 'https://endoliftsomerset.co.uk',
  },
  openGraph: {
    title: 'Endolift Somerset £1,200 - Non-Surgical Laser Lift | Amethyst Aesthetics Beauty',
    description: 'Tighter jawline without surgery. Endolift uses a hair-thin laser fibre to tighten and contour. £1,200 for full face treatment. 1-2 days downtime, results last 1-5 years. Award-finalist Somerset clinic.',
    url: 'https://endoliftsomerset.co.uk',
    siteName: 'Amethyst Aesthetics Beauty - Endolift Somerset',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/endolift-og.jpg',
        width: 1200,
        height: 675,
        alt: 'Endolift Non-Surgical Laser Lift - Jawline & Neck Tightening - Amethyst Aesthetics Beauty Somerset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endolift Somerset £1,200 - Non-Surgical Laser Lift | Amethyst Aesthetics Beauty',
    description: 'Tighter jawline without surgery. Endolift laser tightening for jawline, jowls & neck. £1,200. 1-2 days downtime. Results last 1-5 years.',
    images: ['/images/endolift-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'geo.region': 'GB-SOM',
    'geo.placename': 'South Petherton',
    'geo.position': '50.9581;-2.8169',
    'ICBM': '50.9581, -2.8169',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
          <ConvertBox />
        </Suspense>
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
