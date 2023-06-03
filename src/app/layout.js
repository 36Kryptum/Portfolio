
import './globals.css'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from '@/components/Providers';

export const metadata = {
  title: 'Marvin Steinborn Portfolio',
  description: 'hochwertiges Webdesign im Abomodell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className='bg-white text-accent dark:bg-background-dark dark:text-white'>

        <Providers>
          <NavBar/>
          <div className='relative'>
          {children}
          </div>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
