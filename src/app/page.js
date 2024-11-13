'use client'

import Image from "next/image";
import Curve from '../../public/svg/curve-1.svg';
import Curve2 from '../../public/svg/curve-2.svg';
import DynamicSVG from "@/components/reusables/blob/DynamicSVG";
import StarryBackground from "@/components/reusables/stars/StarryBackground";


export default function Home() {
  return (
    <>
    <div className="w-full h-auto overflow-hidden">
  <div className="relative h-auto w-[100%]  overflow-x-hidden">
     <DynamicSVG
      gradient={{ start: '#A9A9A9', end: '#808080' }} // Customize gradient
      size={{ width: 900, height: 600 }} // Set size
      className="absolute right-0 translate-x-80 -translate-y-64 top-0 -rotate-45 transition"
    />
    <DynamicSVG
      gradient={{ start: '#808080', end: '#A9A9A9' }} // Customize gradient
      size={{ width: 900, height: 600 }} // Set size
      className="absolute left-0 bottom-0 -translate-x-24 translate-y-64 w-1/4 -rotate-45 transition"
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
    </div>
    </>
  );
}
