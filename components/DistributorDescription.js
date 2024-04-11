"use client"
import React from 'react'
import { StaticTabDescription } from '@/utils/DistributorData'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { ZotokTabDescription } from './ZotokTabDescription';
export const DistributorDescription = () => {
  return (
    <div>
        <Card className=' rounded-tl-none '>
            <CardBody >
                {StaticTabDescription.map((eachTabDes)=>(
                  <ZotokTabDescription TabDeatils={eachTabDes} key={eachTabDes.Heading}/>
                ))}
                
            </CardBody>
        </Card>
    </div>
  )
}
