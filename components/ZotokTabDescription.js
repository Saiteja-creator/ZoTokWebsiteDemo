"use client"
import React,{useState} from 'react'
import {extendVariants, Button} from "@nextui-org/react";
import { AiOutlineRise } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { Link, Element } from 'react-scroll';
import { CardItem } from './CardItem';
import Image from 'next/image';

export const ZotokTabDescription = ({TabDeatils}) => {
   
   const {Heading,Paragraph,cartDetails,id} = TabDeatils
   const [img,setimg] = useState(cartDetails.cardPics[0].image)
   
   const handleImage=(id)=>{
      const filterData= cartDetails.cardPics.filter((each)=>each.id===id)
      console.log(filterData,"filterData")
      setimg(filterData[0].image)
   }
   console.log(img,"return the Image data ")
   
  return (
    <Element className='flex' id={id}>
        <div className='pt-10 pl-2 pb-[150px] space-y-3'>
            <div className='space-y-2'>
                <h1 className='text-bold text-3xl text-[#091E42]'>{Heading}</h1>
                <p className=' break-words w-[600px] text-[#091E42]'>{Paragraph}</p>
                
            </div>
            <ul>
              {cartDetails.cardDesc.map((eachCard)=>
              <CardItem eachCardDetails={eachCard} key={eachCard.id} handleImage={handleImage}/>
              )}
            </ul>
        </div>
        {/* <Image src={img.image} alt="My Image" width={300} height={200} /> */}
        <img src={img} alt="imagess" className='w-[300px] h-[300px]'/>
        
    </Element>
  )
}