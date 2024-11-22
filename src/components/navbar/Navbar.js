'use client'

import React from 'react';
import Link from 'next/link';
import { ButtonOne } from '../reusables/buttons/Buttons';
import { IoMdCart } from 'react-icons/io';

const Navbar = ({ scrollToSection }) => {
  return (
    <div className='fixed top-0 w-full pt-6 flex flex-row justify-between z-20 text-gray-500 font-semibold backdrop-blur-lg px-10 items-center'>
      <span className='hover:text-neutral-500 cursor-pointer transition'>logo</span>
      <span
        className='hover:text-neutral-600 cursor-pointer transition capitalize'
        onClick={() => scrollToSection('sectionRef1')}
      >
        Who we are
      </span>
      <span>
      <Link href="https://sub-domain-two.vercel.app" target="_blank" rel="noopener noreferrer">
    <ButtonOne buttonValue={'Shop'} iconValue={<IoMdCart size={18} />} />
</Link>

      </span>
    </div>
  );
};

export default Navbar;
