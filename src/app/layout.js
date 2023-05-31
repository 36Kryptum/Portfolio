"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Marvin Steinborn Portfolio',
  description: 'hochwertiges Webdesign im Abomodell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={inter.className}>

        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
