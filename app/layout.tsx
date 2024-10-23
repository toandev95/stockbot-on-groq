import '@/app/globals.css'

import { Fira_Sans as FiraSans } from 'next/font/google'
import { Fira_Mono as FiraMono } from 'next/font/google'

import { Header } from '@/components/header'
import { Providers } from '@/components/providers'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'

const firaSans = FiraSans({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'vietnamese'],
  variable: '--fira-sans'
})

const firaMono = FiraMono({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--fira-mono'
})

export const metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'StockBot powered by ToanChat'
  },
  description:
    'Lightning Fast AI Chatbot that Responds With Live Interactive Stock Charts, Financials, News, Screeners, and More.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          firaSans.variable,
          firaMono.variable
        )}
      >
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1 bg-muted/50">{children}</main>
          </div>
          {/* <ThemeToggle /> */}
        </Providers>
      </body>
    </html>
  )
}
