import React from 'react'

export const CardItem = ({eachCardDetails,handleImage,isActive}) => {
  const {paragraph,subtext,fontIcon,id} =eachCardDetails
  const onClickEvent=()=>{
    
    handleImage(id)
  }
  console.log(isActive,"active result with id",id)
  return (
    <li>
      <button type='button' className={`shadow-lg  p-2  w-[300px] m-2 rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'bg-white'}`} onClick={onClickEvent}>
          <div>
              <p>{paragraph}</p>
              <p>{subtext}</p>
          </div>
          
      </button>
    </li>
  )
}
