// components/StarryBackground.js
import Head from 'next/head';
import { useMemo } from 'react';
import { ButtonTwo } from '../buttons/Buttons';
import { FaQrcode } from 'react-icons/fa6';

// Utility function for generating multiple box-shadow values
const generateBoxShadows = (n, fill) => {
  let shadows = [];
  for (let i = 0; i < n; i++) {
    shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${fill}`);
  }
  return shadows.join(', ');
};

// Star component with diagonal downward animation
const Star = ({ shadows, duration, size }) => (
  <div
    className={`absolute top-0 left-0 rounded-full bg-transparent`}
    style={{
      width: '1px',
      height: '1px',
      boxShadow: shadows,
      animation: `diagonalDownward ${duration}s linear infinite`,
    }}
  >
    <div
      style={{
        content: "''",
        position: 'absolute',
        top: '600px',
        width: `${size}px`,
        height: `${size}px`,
        background: 'transparent',
        boxShadow: shadows,
      }}
    />
  </div>
);

const StarryBackground = ({ fill }) => {
  const starShadows1 = useMemo(() => generateBoxShadows(700, fill), [fill]);
  const starShadows2 = useMemo(() => generateBoxShadows(200, fill), [fill]);
  const starShadows3 = useMemo(() => generateBoxShadows(100, fill), [fill]);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
        <style>
          {`
            @keyframes diagonalDownward {
              0% { transform: translateY(0) translateX(0); }
              100% { transform: translateY(2000px) translateX(2000px); }
            }
          `}
        </style>
      </Head>
      <div className="relative overflow-hidden h-[100vh] bg-gradient-to-b from-[#1b2735] to-[#090a0f]">
        <Star shadows={starShadows1} duration={50} size={1} />
        <Star shadows={starShadows2} duration={100} size={2} />
        <Star shadows={starShadows3} duration={150} size={3} />
        <div className="absolute top-1/2 left-0 right-0 text-center font-light text-[50px] transform -translate-y-1/2 px-2">
          <span className="bg-gradient-to-b from-white to-[#38495a] bg-clip-text text-transparent tracking-[10px]">
            iSANS ORIGINAL
          </span>
          <p className='text-white text-sm text-center pb-5'>
          Shop the latest trends with confidence. Every item is 100% authentic,
          <br />
           verified by our trusted process. Discover style you can trust—elevate your wardrobe today.
          </p>
          <p className="z-20 flex justify-center">
            <ButtonTwo buttonValue="Verify Authenticity" iconValue={<FaQrcode size={20} />} />
          </p>
        </div>
      </div>
    </>
  );
};

export default StarryBackground;
