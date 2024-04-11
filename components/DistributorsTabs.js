"use client"
import React,{useState} from 'react';
import { DistributorsTabsDetails } from '@/utils/RouterData'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

export const DistributorsTabs = () => {
  const [activeTab, setActiveTab] = useState("zotok")
  console.log(activeTab)
  const handleSetActive = (to) => {
    setActiveTab(to);
  };
  return (
    <div className='shadow-lg bg-white p-2 h-screen  fixed'>
       <h1 className='font-bold'>I am Distributors</h1>
       <div>
        <ul className='active'>
          {DistributorsTabsDetails.map((eachTab)=>(
            <li className='nav-item'>
              <Link 
              to={eachTab.id} 
              spy={true} 
              smooth={true} 
              offset={-150} 
              duration={500} key={eachTab.text} onSetActive={handleSetActive}  >
                <button type='button'  className={`flex flex-row italic my-2 mx-1 ${
                    activeTab === eachTab.id ? 'bg-blue-500 w-full rounded-lg text-white' : ''
                  }`}><eachTab.icon className='mt-1 mr-1'/>
                <p>{eachTab.text}</p></button>
              </Link>
            </li>
          ))}
          </ul>
       </div>
    </div>
  )
}
