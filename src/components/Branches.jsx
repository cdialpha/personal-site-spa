import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import treetopright from "../assets/treetopright.png";
import treetopleft from "../assets/treetopleft.png";

const View = styled.div`
  ${tw`
    absolute    
    z-10
    margin-top[75px]
    flex
    justify-center
`}
`;

const LeftBranch = styled.img`
  ${tw`
  width[80vw]
`}
  transform:translateX(${(props) => props.translatex}px);
`;

const RightBranch = styled.img`
  ${tw`
  width[80vw]
`}
  transform:translateX(${(props) => props.translatex}px);
`;

const Branches = () => {
  const [windowX, setWindowX] = useState(0);
  const [windowY, setWindowY] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const initialWindowHeight = window.innerHeight;
    const initialWindowWidth = window.innerWidth;
    setWindowX(initialWindowWidth);
    setWindowY(initialWindowHeight);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  const handleResize = () => {
    setWindowX(window.innerWidth);
    setWindowY(window.innerHeight);
    console.log("x", windowX, "y", windowY);
  };

  return (
    <View>
      <LeftBranch src={treetopleft} alt="treebranch" translatex={-offsetY} />
      <RightBranch src={treetopright} alt="treebranch" translatex={offsetY} />
    </View>
  );
};

export default Branches;
