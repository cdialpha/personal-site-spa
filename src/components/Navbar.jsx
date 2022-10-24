import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-scroll";

const View = styled.div`
  ${tw`
    z-50
    fixed
    height[75px]
    width[100vw]
    bg-blue-300
`}
`;

const Container = styled.div`
  ${tw`
    flex
    justify-between
    max-width[350px]
    lg:max-width[1000px]
    ml-auto
    mr-auto
    align-self[center]
    mt-5
  `}
`;

const NavItem = styled(Link)`
  ${tw`
  text-blue-900
  font-weight[900]
  text-xl
  md:text-2xl
  hover:text-blue-200
  hover:cursor-pointer
  ml-0
  mr-0
  md:ml-5
  md:mr-5
  mt-auto
  mb-auto
`}
`;

const Navbar = () => {
  return (
    <View>
      <Container>
        <NavItem to="bio" spy={true} smooth={true} offset={10} duration={500}>
          bio
        </NavItem>
        <NavItem to="dev" spy={true} smooth={true} offset={-90} duration={500}>
          journey
        </NavItem>
        <NavItem
          to="skills"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          skills
        </NavItem>
        <NavItem
          to="projects"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          projects
        </NavItem>
      </Container>
    </View>
  );
};

export default Navbar;
