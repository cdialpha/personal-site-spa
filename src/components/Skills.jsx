import React from "react";
import ux from "../assets/ux-design.png";
import pm from "../assets/manager.png";
import db from "../assets/db.png";
import be from "../assets/be.png";
import devops from "../assets/devops.png";
import gd from "../assets/gd.png";
import tw from "twin.macro";
import styled from "styled-components";
import "../cardflip.css";

const View = styled.div`
  ${tw`

    text-black
    width[90%]
    md:width[80%]
    ml-auto
    mr-auto
    margin-top[1000px]
`}
`;

const Grid = styled.div`
  ${tw`
  mt-10
  grid  
  grid-cols-1
  grid-rows-6
  md:grid-cols-2
  md:grid-rows-3
  xl:grid-cols-3
  xl:grid-rows-2
  xl:grid-template-rows[300px]
  grid-row-gap[100px]
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
  font-weight[900]
  text-blue-900
  mt-5   
  mb-5
`}
`;

const SectionText = styled.ul`
  ${tw`
    text-black
    width[80%]
    text-2xl
    mt-auto
    mb-auto
`}
`;

const SkillImage = styled.img`
  ${tw`
  width[175px]
  height[175px]
  ml-auto
  mr-auto
`}
`;

const Skills = () => {
  return (
    <View id="skills" className="mt-20 height[1000px]">
      <SectionTitle>Skills</SectionTitle>
      <Grid>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> Project Management </SubTitle>
              <SkillImage src={pm} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText>
                <li> Risk Analysis </li>
                <li> Schedule Management </li>
                <li> Stakeholder Analysis & Management </li>
              </SectionText>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> Front End </SubTitle>
              <SkillImage src={ux} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText>
                <li> React </li>
                <li> TypeScript </li>
                <li>
                  State Management Libraries: (React Query, Redux, RTK, Zustand,
                  Jotai)
                </li>
                <li>Form Management (Formik, React Hook Forms)</li>
              </SectionText>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> Back End End </SubTitle>
              <SkillImage src={be} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText>
                <li> Node, Express </li>
                <li> tRPC </li>
                <li> NextJS </li>
                <li> Django </li>
              </SectionText>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> Databases </SubTitle>
              <SkillImage src={db} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText>
                <li> MongoDB, DocumentDB </li>
                <li> MySQL, Postgres </li>
                <li> Prisma </li>
              </SectionText>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> Graphic Design </SubTitle>
              <SkillImage src={gd} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText>
                <li> Figma </li>
                <li> Gimp </li>
                <li> Inkscpae </li>
              </SectionText>
            </div>
          </div>
        </div>

        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <SubTitle className="text-2xl"> DevOps </SubTitle>
              <SkillImage src={devops} alt="ui/ux graphic" />
            </div>
            <div className="flip-card-back">
              <SectionText> Git, Github </SectionText>
              <SectionText> Azure DeveOps (ADO) </SectionText>
              <SectionText> Docker </SectionText>
              <SectionText> AWS DevOps tools </SectionText>
            </div>
          </div>
        </div>
      </Grid>
    </View>
  );
};

export default Skills;

// UX design
//freepik

//DB techs
// phatplus
// <a href="https://www.flaticon.com/free-icons/database" title="database icons">
//   Database icons created by phatplus - Flaticon
// </a>;

// stakeholder mgmt
//Eucalyp

// prjct mgmt
// juicy_fish
{
  /* <a href="https://www.flaticon.com/free-icons/manager" title="manager icons">Manager icons created by juicy_fish - Flaticon</a> */
}

// devops
// Freepik
//<a href="https://www.flaticon.com/free-icons/devops" title="devops icons">Devops icons created by Freepik - Flaticon</a>

//graphic design
// LAFS
//<a href="https://www.flaticon.com/free-icons/design" title="design icons">Design icons created by LAFS - Flaticon</a>
