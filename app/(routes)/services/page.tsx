import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import HeaderC from '@/components/services/Header'
import ServiceList from '@/components/services/ServiceList'
import CTA from '@/components/services/CTA'

const page = () => {
  return (
    <div>
      <Header/>
      <main className='min-w-screen px-40 bg-gray-800 flex flex-col gap-20'>
    <HeaderC/>
    <ServiceList/>
    <CTA/>
      </main>
      <Footer/>
    </div>
  )
}

export default page
