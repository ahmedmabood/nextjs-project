import React from 'react'
import Hero from '@/components/Hero'
import Infoboxes from '@/components/Infoboxes'
import HomeProperties from '@/components/HomeProperties'
const HomePage = async () => {
  return (
    <div>
    <Hero />
    <Infoboxes />
    <HomeProperties />
    </div>
  )
}

export default HomePage