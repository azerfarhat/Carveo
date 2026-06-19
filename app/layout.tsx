import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '@/components/scroll-progress'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Carveo | Gestion de Flotte Intelligente',
  description: 'Carveo est la solution complète de gestion de flotte pour les agences de location de véhicules. Optimisez vos opérations, suivez vos véhicules en temps réel.',
  keywords: ['gestion de flotte', 'location de véhicules', 'fleet management', 'rental agency', 'tracking'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ScrollProgress />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
