import React from 'react'
import theo from '@/public/assets/images/theo.png'
import john from '@/public/assets/images/john.png'
import peter from '@/public/assets/images/peter.png'
import Image from 'next/image'
import Link from 'next/link'



const data = [
  {
    image: theo,
    name:"Theoneste",
    status: 'Tagged Problem for his lost package last week'
  },
  {
    image: peter,
    name:"Peter",
    status: 'Requested for Courier Driving '
  },
  {
    image: john,
    name:"John ",
    status: 'Thanked for the quality service provided '
  },

]

const ClientsStatus = () => {
  return (
    <div className='relative'>
      
       {
        data.map((driver, key)=> (
          <div key={key} className='flex gap-4 items-center bg-base-100  rounded-lg m-3 justify-start '>
              <div>
                <Image className='default w-12 h-12 object-fit-cover rounded-full' title='peter' src={driver.image} alt={`${driver.name }'s image`}  />
              </div>
              <h2 className='text-base-content'>{driver.name}</h2>
              <p className='text-base-content'>{driver.status}</p>
          </div>

        ))
       }
       <div>
        <Link href={'/'} className='text-teal-300 absolute right-6'>View All</Link>
       </div>
    </div>
  )
}

export default ClientsStatus
