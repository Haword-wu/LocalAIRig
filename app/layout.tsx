import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://localairig.com'),
  title: {
    default: 'LLM Rig – Local AI Hardware Guides & Model Deployment',
    template: '%s | LLM Rig',
  },
  description:
    'Hardware configuration guides, GPU recommendations, and step-by-step deployment tutorials for running large language models locally on your own PC.',
  keywords: [
    'local LLM',
    'run AI locally',
    'local AI hardware',
    'best GPU for LLM',
    'run LLM locally',
    'local AI setup',
    'LLaMA hardware',
    'Qwen local deployment',
    'AI PC build',
    'self-hosted AI',
  ],
  authors: [{ name: 'LLM Rig' }],
  creator: 'LLM Rig',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://localairig.com',
    siteName: 'LLM Rig',
    title: 'LLM Rig – Local AI Hardware Guides & Model Deployment',
    description:
      'Hardware configuration guides and deployment tutorials for running large language models on your own PC.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LLM Rig',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LLM Rig – Local AI Hardware Guides',
    description:
      'Hardware guides and deployment tutorials for running LLMs locally.',
    images: ['/og-image.png'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
