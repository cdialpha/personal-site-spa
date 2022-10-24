import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

const View = styled.div`
  ${tw`
    absolute 
    w-screen
    bg-white
    `}
  transform:translateY(${(props) => props.offset}px);
  transition: 10ms ease;
`;

const ScrollWrapper = ({ children }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [offset, setOffset] = useState(0);

  const altOffsetY = (offsetY) => {
    // for the first 600y pixels, I want the wrapper to move in the opposite direction.
    if (offsetY < 600) {
      setOffset(offsetY);
    }
    // after 600 pixels, I want no translation to occur.
    else {
      setOffset(600);
    }
  };

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    altOffsetY(offsetY);
    // console.log(offset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return <View offset={offset}>{children}</View>;
};

export default ScrollWrapper;

//
