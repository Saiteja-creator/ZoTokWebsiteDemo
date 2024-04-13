"use client"
import React from 'react'
import { StaticTabDescription } from '@/utils/DistributorData'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { ZotokTabDescription } from './ZotokTabDescription';
export const DistributorDescription = () => {
  return (
    <div>
        <Card className='rounded-tl-none bg-opacity-10 bg-purple-200'>
            <CardBody >
                {StaticTabDescription.map((eachTabDes)=>(
                  <ZotokTabDescription TabDeatils={eachTabDes} key={eachTabDes.Heading}/>
                ))}
                
            </CardBody>
        </Card>
    </div>
  )
}
