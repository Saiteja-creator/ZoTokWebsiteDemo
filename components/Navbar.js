"use client"

import React from 'react'
import { RoutersPagesData } from '@/utils/RouterData'
import {Button } from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
export const Navbar = () => {
  const currentPath = usePathname()

  const isActive =(path)=>{
   return currentPath === path 
  }
  return (
    <nav className='flex flex-col h-full rounded-lg justify-between fixed  shadow-lg  bg-[#132C45] z-20  w-[67px] font-helvetica-neue'>
      <div className='-ml-2'>
        {RoutersPagesData.map((eachRouter)=>(
          <div className='my-2 ' key={eachRouter.page}>
              <Button className='bg-opacity-0 p-0  border-none' size="small">
                <Link  href={eachRouter.RoutePath} className='flex  flex-col justify-center items-center'>
                  <div className={isActive(eachRouter.RoutePath)? 'rounded-full text-white  p-1 bg-gradient-to-r from-red-700 via-purple-700 to-blue-700  ' : 'rounded-full p-1  bg-[#9BA4B3]'}>
                  <eachRouter.Icon/>
                  </div>
                  <p className={isActive(eachRouter.RoutePath)?'text-white text-dxs ':'text-gray-400 text-dxs '}>{eachRouter.page}</p>
                </Link>
              </Button>
              
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-1 pl-1 mb-3'>
        <div className='w-[20px] h-[20px]'>
          <Image src="/ZonoWeb.png" alt="Example External Image" width={50} height={50} className='text-white mb-2' />
        </div>
        <div>
          <p className='text-ddxs text-[#CFD3D8]'>Powered by</p>
          <p className='text-dxs text-white'>Zono</p>
        </div>
      </div>
    </nav>
  )
}


        