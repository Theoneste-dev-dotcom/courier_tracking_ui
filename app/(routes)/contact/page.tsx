import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
    <div className='flex flex-col justify-between bg-base-200'>
    <div className='overflow-hidden'>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
    </div>
  )
}

export default page
