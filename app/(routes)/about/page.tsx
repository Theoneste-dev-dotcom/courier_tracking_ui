import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div>
      <AboutSection/>
      </div>
      <Footer/>
    </div>
  )
}

export default page
