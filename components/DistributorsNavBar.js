import React from 'react'
import { BsChevronCompactDown } from "react-icons/bs";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Image from 'next/image';

export const DistributorsNavBar = () => {
  return (
    <div className='  flex flex-col '>
        
        <nav className='flex justify-between items-center p-2 shadow-lg bg-white fixed z-20 w-screen'>
            <img src='https://www.zonoapp.com/img/zono-logo.svg' alt="imageZono" className='w-[100px]'/>
            <div className='flex flex-row '>
                <p>English</p>
                <BsChevronCompactDown  className='mt-1 mx-1'/>
            </div>
        </nav>
        <Card className='rounded-none flex justify-center items-center bg-gradient-to-r from-white to-blue-300 mt-10'>
            <CardBody >
                <div className='flex  flex-row justify-between item-center align-middle'>
                    <div className='flex flex-col mt-5'>
                        <h1 className='text-3xl font-semibold'>I am a Distributor</h1>
                        <p className='font-medium'>How does a Distributor get benefit of using the ZONO Platform?</p>
                    </div>
                    <Image src="https://www.zonoapp.com/img/credit-zono-home.png" alt="zonoImage"  width={200} height={100} className='h-full mr-2' />
                </div>
                
            </CardBody>
        </Card>



    </div>
  )
}
