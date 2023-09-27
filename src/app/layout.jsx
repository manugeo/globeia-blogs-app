import ThemeProvider from '@/components/theme-provider'
import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: 'Globeia - Blogs App',
  description: 'Next.js Blogging App with CRUD Functionality',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className={`min-h-screen bg-slate-50 ${robotoMono.variable} font-roboto-mono`}>
            <div className='max-w-screen-sm mx-auto'>
              {children}
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
