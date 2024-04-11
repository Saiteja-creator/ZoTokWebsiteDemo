"use client"
import React from 'react';
import { DistributorsTabsDetails } from '@/utils/RouterData'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

export const DistributorsTabs = () => {
  
  return (
    <div className='shadow-lg bg-white p-2 h-screen  fixed'>
       <h1 className='font-bold'>I am Distributors</h1>
       <div>
          {DistributorsTabsDetails.map((eachTab)=>(
            <Link activeClass="active" 
            to={eachTab.id} 
            spy={true} 
            smooth={true} 
            offset={-150} 
            duration={500} key={eachTab.text}  >
              <button type='button' className='flex flex-row italic my-2 mx-1'><eachTab.icon className='mt-1 mr-1'/>
              <p>{eachTab.text}</p></button>
            </Link>
          ))}
       </div>
    </div>
  )
}
