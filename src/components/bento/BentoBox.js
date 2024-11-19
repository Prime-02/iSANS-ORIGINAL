import React, { useState } from 'react'
import { BentoImg } from '../index'
import Image from 'next/image'
import { ButtonTwo } from '../reusables/buttons/Buttons'

const BentoBox = () => {
    const [seeMore, setSeeMore] = useState(false)
  return (
    <div className={` ${seeMore ? 'h-screen' : 'h-auto'} overflow-hidden transition duration-500 relative`} >
      <div>
        {
          BentoImg.map((img, ind) => (
            <div className={` overflow-hidden rounded-xl`} key={ind}>
              <Image src={img.img} className={` hover:scale-110 transition duration-300`} alt={`image ${ind + 1}`} loading='lazy'/> 
            </div>
          ))
        }
      </div>
      <span className='absolute bottom-0 flex  w-full pb-2 pt-16 items-center justify-center bg-gradient-to-t from-gray-500'>
        <ButtonTwo Clicked={()=>setSeeMore(!seeMore)} buttonValue={`See ${seeMore ? 'More' : 'Less'}`}/>
      </span>
    </div>
  )
}

export default BentoBox
