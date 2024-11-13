import React from 'react'
import { ButtonOne } from '../reusables/buttons/Buttons'
import { IoMdCart } from 'react-icons/io'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full pt-6  flex flex-row justify-between z-50 text-white px-10 items-center'>
        <span className='hover:text-neutral-500 cursor-pointer transition'>logo</span>
        <span className='hover:text-neutral-500 cursor-pointer transition capitalize'>
            Who we are
        </span>
        <span>
            <ButtonOne buttonValue={'Shop'} iconValue={(<IoMdCart size={18}/>)}/>
        </span>
    </div>
  )
}

export default Navbar