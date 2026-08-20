import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bhojrajchavan.netlify.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bhojraj Chavan | Full Stack Developer',
    template: '%s | Bhojraj Chavan',
  },
  description:
    'Portfolio of Bhojraj Chavan — Full Stack Developer specializing in React, TypeScript, Node.js, and AI-powered SaaS applications.',
  keywords: [
    'Bhojraj Chavan',
    'Full Stack Developer',
    'React Developer',
    'Node.js',
    'TypeScript',
    'SaaS',
    'Portfolio',
    'AI Integration',
  ],
  authors: [{ name: 'Bhojraj Chavan', url: siteUrl }],
  creator: 'Bhojraj Chavan',
  icons: {
    icon: [
      { url: '/brand/logo-mark.png', type: 'image/png' },
      { url: '/brand/logo-mark.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/brand/logo-mark.png',
    apple: '/brand/logo-mark.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Bhojraj Chavan Portfolio',
    title: 'Bhojraj Chavan | Full Stack Developer',
    description:
      'Building high-performance SaaS applications with React, TypeScript, Node.js, and AI.',
    images: [{ url: '/profile.png', width: 800, height: 800, alt: 'Bhojraj Chavan' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhojraj Chavan | Full Stack Developer',
    description: 'Building high-performance SaaS applications with React, TypeScript, and AI.',
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Bhojraj Chavan',
              jobTitle: 'Full Stack Developer',
              url: siteUrl,
              sameAs: ['https://github.com/Bhojraj27', 'https://linkedin.com/in/bhojraj-chavan'],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
