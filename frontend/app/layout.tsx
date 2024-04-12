import type { Metadata } from 'next';
import { inter } from '../constants/fonts'
import './globals.css'
import Footer from '@/components/Footer';
import NavbarClientComponent from '@/components/client/Client-navBar';
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: 'HilinkApp',
  description: 'Travel UI/UX App for Airlines',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter?.className || ''} antialiased`}>
        <Toaster/>
        <NavbarClientComponent/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
