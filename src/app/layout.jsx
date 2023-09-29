import './globals.css'
import { Inter, Roboto_Mono } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono'
});

export const metadata = {
  title: 'Globeia - Blogs App',
  description: 'Next.js Blogging App with CRUD Functionality',
  alternates: {
    canonical: 'https://globeia-blogs-app.vercel.app/'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className={`min-h-screen bg-slate-50 ${robotoMono.variable} font-roboto-mono`}>
            <div className='max-w-screen-sm mx-auto'>
              {children}
            </div>
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
