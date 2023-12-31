import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { Rubik } from 'next/font/google'

import './globals.css'

const font = Rubik({ subsets: ["arabic"]})

export const metadata: Metadata = {
  title: 'ABC Academy',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: any }
}) {
  
  return (
    <html lang={locale}>
      <body className={font.className}>{children}</body>
    </html>
  )
}
