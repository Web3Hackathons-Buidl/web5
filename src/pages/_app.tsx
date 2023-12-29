import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Montserrat } from 'next/font/google'

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  display: 'swap',
})

const druk = localFont({
  src: '../lib/fonts/Druk/Druk Wide-Super-Web.woff2',
  display: 'swap',
  variable: '--font-druk'
})
const gilroy = localFont({
  src: '../lib/fonts/Gilroy/GilroyExtraBold/font.woff2',
  display: 'swap',
  variable: '--font-gilroy'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${druk.variable} ${gilroy.variable} ${mont.className}`}>

      <Component {...pageProps} />
    </main>
  )
}
