import React from 'react'

export const CardItem = ({eachCardDetails,handleImage}) => {
  const {paragraph,subtext,fontIcon,id} =eachCardDetails
  const onClickEvent=()=>{
    console.log("onClick event cardItem",id)
    handleImage(id)
  }
  return (
    <li>
      <button type='button' className='shadow-lg bg-white m-2' onClick={onClickEvent}>
          <div>
              <p>{paragraph}</p>
              <p>{subtext}</p>
          </div>
          
      </button>
    </li>
  )
}
