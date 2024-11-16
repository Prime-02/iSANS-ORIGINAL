'use client'

import Image from "next/image";
import Curve from '../../public/svg/curve-1.svg';
import Curve2 from '../../public/svg/curve-2.svg';
import DynamicSVG from "@/components/reusables/blob/DynamicSVG";
import StarryBackground from "@/components/reusables/stars/StarryBackground";
import { motion } from "framer-motion";
import { Wwa } from "@/components/index";
import { useState } from "react";
import BentoBox from "@/components/bento/BentoBox";
import { FaPlus, FaShirt } from "react-icons/fa6";

export default function Home() {
  const [seeMore, setSeeMore] = useState()

  return (
    <div className="w-full h-auto relative ">
      <span className="absolute bg-gray-500 h-full w-[0.2px] right-3"></span>
      <span className="absolute bg-gray-500 h-full w-[0.2px] left-3"></span>
      <div className="relative h-screen w-[100%]  overflow-hidden">
        {/* Background SVGs and other content */}
        <DynamicSVG
      gradient={{ start: '#A9A9A9', end: '#808080' }} // Customize gradient
      size={{ width: 900, height: 600 }} // Set size
      className="absolute z-10 right-0 translate-x-80 -translate-y-64 top-0 -rotate-45 transition"
    />
    <DynamicSVG
      gradient={{ start: '#808080', end: '#A9A9A9' }} // Customize gradient
      size={{ width: 900, height: 600 }} // Set size
      className="absolute z-10 left-0 bottom-0 -translate-x-24 translate-y-64 w-1/4 -rotate-45 transition"
    />
    <StarryBackground fill={"#ededed"}/>
      <Image src={Curve} alt="lines" className="absolute hidden md:flex left-0 top-1/2"/>
      <Image src={Curve} alt="lines" className="absolute hidden md:flex right-0 top-1/2"/>
      <Image src={Curve} alt="lines" className="absolute hidden md:flex left-0 top-1/4 "/>
      <Image src={Curve} alt="lines" className="absolute hidden md:flex right-0 top-1/4 "/>

      <Image src={Curve2} alt="lines" className="absolute flex md:hidden left-0 top-1/2 "/>
      <Image src={Curve2} alt="lines" className="absolute flex md:hidden right-0 top-1/2"/>
      <Image src={Curve2} alt="lines" className="absolute flex md:hidden left-0 top-1/4 "/>
      <Image src={Curve2} alt="lines" className="absolute flex md:hidden right-0 top-1/4 "/>

    <div className="absolute w-full h-[30dvh] sm:h-[40dvh] bottom-0 flex items-center justify-center gap-5">
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 top-5"></span></span>
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 top-32"></span></span>
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 top-16"></span></span>
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 top-44"></span></span>
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 top-3"></span></span>
      <span className="h-full w-[0.5px] bg-gray-700 relative"><span className="bg-gradient-to-t from-white w-[2px] h-14 rounded-full absolute left-0 right-0 bottom-5"></span></span>
    </div>
      </div>
      <div className="py-20 md:py-0 relative ">
        <span className="absolute w-full"></span>
      <section id="sectionRef1" className="w-full h-auto md:h-screen flex flex-col md:flex-row md:justify-center items-center px-5 gap-x-10 relative">
      <span className="absolute bg-gray-500 w-full h-[0.2px] left-3 bottom-0"></span>
      <span className="absolute flex items-center justify-center  w-6 h-6 left-3 rounded-full -translate-x-3 translate-y-3 bottom-0"><FaPlus/></span>
      <span className="absolute  flex items-center justify-center w-6 h-6 right-3 rounded-full translate-x-3  translate-y-3 bottom-0"><FaPlus/></span>
        <motion.p className="text-2xl md:text-4xl font-semibold w-[1/3]  py-12 md:py-0 "
            whileInView={{opacity: 1, y:-80}}
            initial={{opacity:0, y:0}}
            transition={{duration: 1.5}}>
          {Wwa.title}
        </motion.p>
        <motion.article className="md:w-1/2 "
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1.5}}
        >
            <p className="">
            {Wwa.first}
            </p>
           {
            seeMore && (
              <>
            <p className="my-2">
            {Wwa.second}
            </p>
            <p className="">
            {Wwa.third}
            </p>
              </>
            )
           }
            <span className=" cursor-pointer" onClick={()=>setSeeMore(!seeMore)}> See {!seeMore ? 'More...': 'Less'}</span>
        </motion.article>
      </section>
      </div>
      <div className="">
        <h1 className="text-center text-3xl  py-12">
           Our Products 
        </h1>
        <BentoBox/>
      </div>
    </div>
  );
}
