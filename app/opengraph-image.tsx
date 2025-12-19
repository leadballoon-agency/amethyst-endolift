import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Endolift Somerset - Non-Surgical Laser Lift £1,200 | Amethyst Aesthetics Beauty'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Top Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 50,
            padding: '12px 28px',
            marginBottom: 24,
          }}
        >
          <span style={{ color: 'white', fontSize: 24, fontWeight: 600 }}>
            Non-Surgical Laser Lift
          </span>
        </div>

        {/* Main Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            A Tighter Jawline
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#bae6fd',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            Without Surgery
          </span>
        </div>

        {/* Price & Benefits Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 16,
              padding: '16px 32px',
            }}
          >
            <span style={{ color: 'white', fontSize: 48, fontWeight: 800 }}>£1,200</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 18 }}>Full Face Treatment</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 16,
              padding: '16px 32px',
            }}
          >
            <span style={{ color: 'white', fontSize: 48, fontWeight: 800 }}>1-2 Days</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 18 }}>Downtime</span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 16,
              padding: '16px 32px',
            }}
          >
            <span style={{ color: 'white', fontSize: 48, fontWeight: 800 }}>1-5 Years</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: 18 }}>Results Last</span>
          </div>
        </div>

        {/* Bottom Branding */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 12,
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 700,
              color: '#0284c7',
            }}
          >
            EL
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'white', fontSize: 28, fontWeight: 700 }}>
              Amethyst Aesthetics Beauty
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 18 }}>
              South Petherton, Somerset • endoliftsomerset.co.uk
            </span>
          </div>
        </div>

        {/* FDA Badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            right: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: 8,
            padding: '8px 16px',
          }}
        >
          <span style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>
            FDA Approved • 800+ Treatments
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
