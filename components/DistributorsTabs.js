"use client"
import React,{useState} from 'react';
import { DistributorsTabsDetails } from '@/utils/RouterData'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

export const DistributorsTabs = () => {
  const [activeTab, setActiveTab] = useState("zotok")
  
  const handleSetActive = (to) => {
    setActiveTab(to);
  };
  return (
    <div className='shadow-lg bg-white p-3  h-screen  fixed'>
       <h1 className='font-bold text-[#091E42] w-[162px] h-[20px]'>I am a Distributors</h1>
       <div>
        <ul className='active p-1'>
          {DistributorsTabsDetails.map((eachTab)=>(
            <li className='nav-item' key={eachTab.id}>
              <Link 
              to={eachTab.id} 
              spy={true} 
              smooth={true} 
              offset={-150} 
              duration={500} key={eachTab.text} onSetActive={handleSetActive}  >
                <button type='button'  className={`flex flex-row italic my-2 mx-1 ${
                    activeTab === eachTab.id ? 'bg-blue-500 p-1 w-full rounded-lg text-white' : 'p-1 text-[#091E42]'
                  }`}><eachTab.icon className='mt-1 mr-1 ' width={30}/>
                <p>{eachTab.text}</p></button>
              </Link>
            </li>
          ))}
          </ul>
       </div>
    </div>
  )
}
