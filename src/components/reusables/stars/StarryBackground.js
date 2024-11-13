// components/StarryBackground.js
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { ButtonTwo } from '../buttons/Buttons';
import { FaQrcode } from 'react-icons/fa6';



// Keyframes for star animation
const animStar = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
`;

// Styled components for stars and title
const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  border-radius: 50px;
  background: transparent;
  box-shadow: ${(props) => props.shadows};
  animation: ${animStar} ${(props) => props.duration}s linear infinite;

  &:after {
    content: ' ';
    position: absolute;
    top: 600px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    background: transparent;
    box-shadow: ${(props) => props.shadows};
  }
`;

const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
//   color: #fff;
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-size: 50px;
  margin-top: -60px;
  padding-left: 10px;

  span {
    letter-spacing: 10px;
    background: linear-gradient(white, #38495a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Container = styled.div`
  overflow: hidden;
  height: 100dvh;
  background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 90%);
`;
const StarryBackground = ({fill}) => {
    // Utility function for generating multiple box-shadow values
    const generateBoxShadows = (n) => {
      let shadows = [];
      for (let i = 0; i < n; i++) {
        shadows.push(`${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px ${fill}`);
      }
      return shadows.join(', ');
    };
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Container>
        <Stars shadows={generateBoxShadows(700)} duration={50} size={1} />
        <Stars shadows={generateBoxShadows(200)} duration={100} size={2} />
        <Stars shadows={generateBoxShadows(100)} duration={150} size={3} />
        <Title className='flex flex-col justify-center items-center'>
          <span>iSANS ORIGINAL</span>
          <br />
          {/* <span>PARALLAX PIXEL STARS</span> */}
          <p className='-translate-y-20 z-20'>
        <ButtonTwo buttonValue={'Verify Authenticty'} iconValue={(<FaQrcode size={20}/>)}/>
          </p>
        </Title>
      </Container>
    </>
  );
};

export default StarryBackground;
