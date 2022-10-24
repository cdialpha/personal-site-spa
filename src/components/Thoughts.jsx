import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
  flex
  flex-col 
  text-black
    width[80%]
    ml-auto
    mr-auto
    pl-10
`}
`;

const ConnectWithMe = () => {
  return <div id="coonnect">Thoughts</div>;
};

export default ConnectWithMe;
