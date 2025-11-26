import React from 'react'
import '@/assets/styles/global.css'

export const metadata={
  title:'PropertyPulse',
  description:'Find your dream rental property',
  keywords:'rental,find rentals'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'><body>
        <div>{children}</div>
    </body></html>
  
  )
}

export default MainLayout