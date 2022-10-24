import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import pointme from "../assets/pointme.png";
import partner from "../assets/partner.png";
import wedding from "../assets/wedding.png";
import { useMediaQuery } from "react-responsive";
import { deviceSizes } from "../App";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";

const Container = styled.div`
  ${tw`
    flex
    flex-col
    align-items[center]
    text-black
    ml-auto
    mr-auto
    w-screen
    height[1500px]
    padding-top[200px]
`}
`;

const Wedding = styled.img`
  ${tw`
  width[350px]
  md:width[500px]
  align-self[center]
`}
`;

const HitBoxCalvin = styled.div`
  ${tw`
    width[150px]
    height[500px]
    z-50
    // border-2
    // border-gray-200
`}
`;

const HitBoxMaliza = styled.div`
  ${tw`
    width[150px]
    height[400px]
    z-50
    // border-2
    // border-gray-200
`}
`;

const HitBoxes = styled.div`
  ${tw`
  absolute
  flex
`}
`;

const PointMe = styled.div`
  ${tw`
  relative
  invisible
  group-hover:visible
  z-10
  top[100px]
  left[-200px]
  height[150px]
  width[300px]
`}
`;

const PointNotMe = styled.div`
  ${tw`
  relative
  invisible
  group-hover:visible
  top[100px]
  left[200px]
  height[150px]
  width[300px]
 `}
`;

const Ope = styled.div`
  ${tw`
  text-2xl  
  font-weight[900]
  text-blue-900
  margin-top[200px]
  md:margin-top[100px]  
`}
`;

const Greeting = styled.div`
  ${tw`
  text-2xl
  font-weight[900]
  text-blue-900
  ml-10
  mr-10
  text-center
  md:text-4xl
  md:mt-10
  md:ml-0
  md:mr-0
`}
  opacity:${({ display }) => (display ? "1" : "0")};
  transition-duration: 1000ms;
  transition-timing-function: linear;
`;

const BestViewed = styled.div`
  ${tw`
text-2xl
text-gray-200
mt-10
pb-10
text-center
max-width[300px]

`}
`;

const Intro = () => {
  const [display, setDisplay] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 600) setDisplay(true);
    if (window.pageYOffset <= 600) setDisplay(false);
    console.log(display);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const isMobile = useMediaQuery({ maxWidth: deviceSizes.mobile });

  const sendEmail = () => {
    window.location = "mailto:cdialpha@gmail.com";
  };

  return (
    <Container>
      {isMobile ? null : (
        <HitBoxes>
          <HitBoxCalvin className="group">
            <PointMe>
              <img src={pointme} />
            </PointMe>
          </HitBoxCalvin>
          <HitBoxMaliza className="group">
            <PointNotMe>
              <img src={partner} alt="partner" />
            </PointNotMe>
          </HitBoxMaliza>
        </HitBoxes>
      )}
      <Wedding src={wedding} alt="wedding" />

      <Ope> Ope, hey there. </Ope>
      <Greeting display={isMobile ? true : display}>
        I'm Calvin, pleasure to meet you.
        <div className="flex justify-center mt-5">
          <a href="https://github.com/cdialpha">
            <AiFillGithub className="ml-5 mr-5" />
          </a>
          <a href="https://www.linkedin.com/in/cdirwin/">
            <AiFillLinkedin className="ml-5  mr-5" />
          </a>
          <a onClick={sendEmail}>
            <AiOutlineMail className="ml-5  mr-5 cursor-pointer" />
          </a>
        </div>
      </Greeting>

      {isMobile ? (
        <BestViewed>
          {" "}
          ** While mobile is supported, Recommended to view on desktop to get
          full effect
        </BestViewed>
      ) : null}
    </Container>
  );
};

export default Intro;
