import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bs1 from "../assets/Boston_Spread_screenshot.png";
import bs2 from "../assets/Boston_Spread_screenshot_2.png";
import bs3 from "../assets/Boston_Spread_screenshot_3.png";
import ospi1 from "../assets/ospi-screenshot-1.png";
import ospi2 from "../assets/ospi-screenshot-2.png";
import ospi3 from "../assets/ospi-screenshot-3.png";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Container = styled.div`
  ${tw`
flex flex-col
height[1000px]
width[80%]
ml-auto
mr-auto
margin-top[1000px]
`}
`;

const SectionTitle = styled.div`
  ${tw`
  text-6xl  
  font-weight[900]
    text-blue-900    
`}
`;

const SubTitle = styled.h2`
  ${tw`
  text-4xl
  font-weight[900]
  text-blue-900
  mt-5   
`}
`;

const SectionText = styled.h1`
  ${tw`
    text-black
    width[80%]
    text-2xl
`}
`;

const CaroselContainer = styled.div`
  ${tw` 
    width[80vw]
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
    `}
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}
  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = styled.p`
  ${tw` 
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`}
`;

const Projects = () => {
  return (
    <Container id="projects">
      <SectionTitle> Projects </SectionTitle>
      <SectionText className="mt-5">
        For me, projects are extra exciting when they can solve a problem in the
        real world. Below I have three projects that highlight some of the
        skills I have been learning over the past few months. In each case,
        there is very little borrowed code and these are projects that I have
        invested many months of original code into.
      </SectionText>
      <SubTitle>
        <div className="flex">
          <h3> Boston Spread </h3>
          <a href="https://github.com/cdialpha/homespread_v2">
            <AiFillGithub className="ml-5 mb-5" />
          </a>
        </div>
      </SubTitle>
      <SectionText>
        Boston Spread is a concept for an online marketplace with aspirations to
        be a food delivery service, specifically for the immigrant community.
        The goal is to make revenue streams more accessible to newly arrived
        families and spouses who spend the majority of their time at the home.
        The site intends to help aspiring entreupreurs work through the
        complicated start up and regulatory procedures. This single page
        application (SPA) features the MERN stack, S3 image upload, and
        showcasing foundational react libraries (Formik, React Query, and Redux
        Toolkit). Originally hosted on Linode nginx servers, but has since been
        removed.
        <p className="mt-5 mb-5">
          Some features include user credential authentication, role based
          access (User / Chef), CRUD recipie, Edit Bio, Shopping Cart, and more.
        </p>
      </SectionText>
      <CaroselContainer>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={bs1} alt="a person cooking" />
          </Item>
          <Item>
            <img src={bs2} alt="a person cooking" />
          </Item>
          <Item>
            <img src={bs3} alt="a person cooking" />
          </Item>
        </Carousel>
      </CaroselContainer>

      <SubTitle>
        <div className="flex">
          <h3> Open Source Poultry Initiative (OSPI) </h3>

          <a href="https://github.com/cdialpha/ospi">
            <AiFillGithub className="ml-5 mb-5" />
          </a>
        </div>
      </SubTitle>
      <SectionText>
        This app uses the T3 stack that has recently been popularized
        (Typescript, tRPC, Prisma, Next). OSPI is a Stack Overflow inspired
        forum dedicated to West African poultry farmers. OSPI has aspirations to
        grow into an educational platform, implementing a simple Learning
        Management System (LMS). Poultry Farmers in under resourced areas, rely
        heavily on social media (i.e. poultry facebook groups) to exchange
        knowledge. Questions repeat themselves on a daily and weekly basis, are
        rarely moderated, and are often left unresolved. Knowledge Capture is
        ellusive on these platforms.
      </SectionText>
      <CaroselContainer>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={ospi1} alt="screenshot 1" />
          </Item>
          <Item>
            <img src={ospi2} alt="screenshot 1" />
          </Item>
          <Item>
            <img src={ospi3} alt="screenshot 1" />
          </Item>
        </Carousel>
      </CaroselContainer>
    </Container>
  );
};

export default Projects;
