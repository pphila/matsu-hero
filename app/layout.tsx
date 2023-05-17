import './globals.css'
import { Koulen, Noto_Sans_JP } from 'next/font/google'

const koulen = Koulen({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-koulen',
})

const notoJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-notoJP',
})

export const metadata = {
  title: 'MATSU | dot | MOTO',
  description: 'Rising PDX DJ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${koulen.variable} ${notoJP.variable}`}>
      <body>{children}</body>
    </html>
  )
}
