"use client"
import { DistributorDescription } from '@/components/DistributorDescription'
import { DistributorsNavBar } from '@/components/DistributorsNavBar'
import { DistributorsTabs } from '@/components/DistributorsTabs'
import React from 'react'

const Distributor = () => {
  return (
    <div className='flex flex-row '>
       <DistributorsTabs/>
       <div className='ml-[212px] bg-[#ECF0F6] w-[1070px] font-helvetica-neue '>
          <DistributorsNavBar/>
          <DistributorDescription/>
       </div>
    </div>
  )
}


export default Distributor