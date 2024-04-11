"use client"

import React from 'react'
import { RoutersPagesData } from '@/utils/RouterData'
import {Button, } from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const currentPath = usePathname()

  const isActive =(path)=>{
   return currentPath === path
  }
  return (
    <nav className='flex flex-col py-1 h-full rounded-lg fixed text-xs px-1 shadow-lg  bg-gray-800 '>
        {RoutersPagesData.map((eachRouter)=>(
          <div className='my-3' key={eachRouter.page}>
              <Button className='bg-opacity-0 p-0 italic border-none'>
                <Link  href={eachRouter.RoutePath} className='flex  flex-col justify-center items-center'>
                  <div className={isActive(eachRouter.RoutePath)? 'rounded-lg p-1 bg-gradient-to-r from-pink-500 to-blue-500' : 'rounded-lg p-1 bg-gray-300'}>
                  <eachRouter.Icon/>
                  </div>
                  <p className={isActive(eachRouter.RoutePath)?'text-white ':'text-gray-400 '}>{eachRouter.page}</p>
                </Link>
              </Button>
              
          </div>
        ))}
    </nav>
  )
}
