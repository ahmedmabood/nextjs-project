import React from 'react'
import '@/assets/styles/global.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata={
  title:'PropertyPulse',
  description:'Find your dream rental property',
  keywords:'rental,find rentals'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>    
      <html lang='en'><body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </body>
    </html>
    </AuthProvider>

  
  )
}

export default MainLayout