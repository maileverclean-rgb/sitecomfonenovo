import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Everclean Multi-services | Professional Cleaning Services in Maryland & Virginia',
  description: 'Everclean Multi-services provides professional residential and commercial cleaning services in Frederick, Hagerstown, Columbia MD and Northern Virginia. General cleaning, deep cleaning, move in/out, post construction, carpet and upholstery cleaning.',
  keywords: 'cleaning services, house cleaning, commercial cleaning, carpet cleaning, deep cleaning, move in out cleaning, post construction cleaning, Maryland, Virginia, Frederick, Hagerstown, Columbia, Northern Virginia',
  authors: [{ name: 'Everclean Multi-services' }],
  creator: 'Everclean Multi-services',
  publisher: 'Everclean Multi-services',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://evercleanmultiservices.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Everclean Multi-services | Professional Cleaning Services',
    description: 'Professional residential and commercial cleaning services in Maryland & Northern Virginia. Trusted, reliable, and thorough cleaning.',
    url: 'https://evercleanmultiservices.com',
    siteName: 'Everclean Multi-services',
    locale: 'en_US',
    type: 'website',
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
}

export const viewport = {
  themeColor: '#0d9488',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CEV37S6SPS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CEV37S6SPS');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
