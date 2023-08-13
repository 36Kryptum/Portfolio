
import './globals.css'
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Marvin Steinborn Portfolio',
  description: 'hochwertiges Webdesign im Abomodell',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className='bg-cool-grey-050 text-cool-grey-500 dark:bg-background-dark dark:text-white'>
          <NavBar/>
          <div className='relative'>
          {children}
          </div>
          <Footer/>
      </body>
    </html>
  )
}
