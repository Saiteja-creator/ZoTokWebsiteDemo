"use client"
import { DistributorDescription } from '@/components/DistributorDescription'
import { DistributorsNavBar } from '@/components/DistributorsNavBar'
import { DistributorsTabs } from '@/components/DistributorsTabs'
import React from 'react'

const Distributor = () => {
  return (
    <div className='flex flex-row '>
       <DistributorsTabs/>
       <div className='mx-1 ml-[190px] w-[1085px] '>
          <DistributorsNavBar/>
          <DistributorDescription/>
       </div>
    </div>
  )
}


export default Distributor