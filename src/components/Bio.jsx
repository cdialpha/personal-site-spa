import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import missouri from "../assets/missouri.jpg";
import cameroon from "../assets/cameroon.png";
import mass from "../assets/mass.png";
import { useMediaQuery } from "react-responsive";
import { deviceSizes } from "../App";

const Container = styled.div`
  ${tw`  
    text-black
    ml-0
    mr-0
    lg:flex
    lg:flex-col
    lg:width[80vw]
    lg:ml-auto
    lg:mr-auto
    pl-10

`}
`;

const SectionContainer = styled.div`
  ${tw`
    lg:flex
    lg:justify-center
    lg:align-middle
    text-blue-900  
    mt-5
`}
`;

const SectionText = styled.h1`
  ${tw`
    text-black
    text-2xl
    xl:text-4xl
`}
`;

export const SectionTitle = styled.div`
  ${tw`
  text-6xl  
  text-center
  lg:text-align[left]
  font-weight[900]
  text-blue-900   
  mb-10 
`}
`;

const SubTitle = styled.h2`
  ${tw`
  font-weight[900]
  text-blue-900
  mt-5   
`}
`;

const Missouri = styled.img`
  ${tw`
  pt-10
  ml-auto
  mr-auto
  mt-auto
  mb-auto
  height[250px]
  width[200px]
  lg:margin-right[100px]
`}
`;

const Cameroon = styled.img`
  ${tw`
    height[300px]
    width[200px]
    ml-auto
    mr-auto
    lg:mt-auto
    lg:mb-auto
    lg:margin-left[100px]
`}
`;
const Mass = styled.img`
  ${tw`
    height[200px]
    width[300px]
    ml-auto
    mr-auto
    mb-10
    lg:mt-auto
    lg:mb-auto
    lg:margin-right[100px]
`}
`;

const BGImgContainer = styled.div`
  ${tw`
absolute
top[150px]
left[-400px]
`}
`;

const Bio = () => {
  const isLaptop = useMediaQuery({ maxWidth: deviceSizes.laptop });

  return (
    <Container id="bio">
      <SectionTitle>Bio</SectionTitle>

      <SectionContainer>
        <Missouri src={missouri} />
        <SectionText className="mt-5">
          <p>
            I have spent nearly my entire life in St. Louis in what I would
            consider a quitessential 90's suburban childhood. From the few other
            places around the world that I've been, I've come to appreciate the
            mid-west more than I used to. Previously, I had seen Missouri as
            ashamedly boring. But after seeing how some places struggle to find
            water in a dry dessert; have to ship goods deep into the mountains;
            lack timber to stoke a fire; amend exhuasted soils that are unkind
            to crops... It makes you see the midwest in a different light. Kind,
            forgiving, quiet.
          </p>
          <br />
          <p>
            Moreover, how lucky was I to be born in the suburbs. A stone's throw
            from the country side. Contiguous common ground wove through the
            suburbs, and only short distances separated the sprawling county
            parks.
          </p>
        </SectionText>
      </SectionContainer>
      <SectionContainer>
        {isLaptop ? <Cameroon src={cameroon} /> : null}
        <SectionText className="mt-20">
          <p>
            Between 2017 and 2019, I lived in different parts of Cameroon,
            teaching English and Computer Science in highschools and elementry
            schools. As time passes, chapters of your life dillute in
            significance. However, I believe that my few years in the Peace
            Corps will always define who I am.
          </p>
          <br />
          <p>
            My first post was in the highlands of the anglophone Northwest
            region, a small village called Ntumbaw. I was taught Pidgin &
            Fufulde, and desparately a few sentences of the local language,
            Limbum. I was told Ntumbaw literally meant "Ntu, Mountain" "Mbaw,
            plain", which was fitting, since it was on the shoulder of the
            mountain, peering over the vast Mbot plains. After only three
            months, I had to leave abruptly due to the escalating Anglophone
            crisis. Everything about leaving was terrible, but nothing compared
            to the malaise that the region would endure, til present day.
          </p>
          <br />
          <p>
            I would finish the rest of my service (2 more years) in the Adamawa
            region -- seemingly the polar opposite of the Northwest. The Adamawa
            was up on a plateau, mostly flat with a few ancient volcanic hills,
            poking randomly through the landscape. It was cattle country,
            francophone, very muslim. I stayed in the regional capital,
            Ngaoundere & continued to teach at the government highschool.
          </p>
          <br />
          <p>
            Since returning, I have invested in a few of my Cameroonian friends'
            agricultural projects, with a strong desire to do more in the
            future.
          </p>
        </SectionText>
        {isLaptop ? null : <Cameroon src={cameroon} />}
      </SectionContainer>
      <SectionContainer className="pt-10">
        <Mass src={mass} />
        <SectionText>
          <p>
            I recently moved to Boston to follow my partner, Maliza, for their
            residency program. Inspired by new beginings, In May, I quit my job
            for a desire to learn some hard technical skills and pivot into a
            more tech-based role. Becoming a developer was a particularly
            attractive option, because problem solving had a more creative
            element to it. Moreover, it could be accomplished with open source
            tools, little upfront capital, and reach anyone with a phone.
            Something that didn't seem as attainable with my background in
            biological and systems engineering.
          </p>
          <br />
          <p>
            In addition to employment, I am actively seeking volunteering
            opportunities that concern social justice, the immigrant community,
            and people experiencing homelessness.
          </p>
        </SectionText>
      </SectionContainer>
    </Container>
  );
};

export default Bio;
