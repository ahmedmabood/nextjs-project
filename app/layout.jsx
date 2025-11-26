import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'

export const metadata={
  title:'PropertyPulse',
  description:'Find your dream rental property',
  keywords:'rental,find rentals'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'><body>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </body>
    </html>
  
  )
}

export default MainLayout