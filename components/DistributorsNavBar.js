import React from 'react'
import { BsChevronCompactDown } from "react-icons/bs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Image from 'next/image';

export const DistributorsNavBar = () => {
  return (
    <div className='flex flex-col'>
        
        <nav className='flex justify-between items-center p-2 shadow-lg rounded-lg bg-white fixed z-20 -mt-2 w-[1070px]'>
            <img src='https://www.zonoapp.com/img/zono-logo.svg' alt="imageZono" className='w-[100px]'/>
            <div className='flex flex-row '>
                <p className='text-[#172B4D]'>English</p>
                <BsChevronCompactDown  className='mt-1 mx-1'/>
            </div>
        </nav>
        <Card className='rounded-none flex justify-center items-center bg-[#E2E2FF] mt-10 w-full h-[200px] p-2'>
            <CardBody >
                <div className='flex  flex-row justify-between item-center align-middle'>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-3xl font-semibold'>I am a Distributor</h1>
                        <p className='font-medium'>How does a Distributor get benefit of using the ZONO Platform?</p>
                    </div>
                    
                </div>
                
            </CardBody>
        </Card>
    </div>
  )
}
