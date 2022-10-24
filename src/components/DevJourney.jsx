import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
  ${tw`
  flex
  flex-col
    relative
    text-black
    width[80%]
    ml-auto
    mr-auto
    margin-top[1000px]
`}
`;

const SectionContainer = styled.div`
  ${tw`
    flex
    text-blue-900  
    mt-5

`}
`;

const SectionText = styled.h1`
  ${tw`
    text-black
    text-2xl
    xl:text-4xl
    xl:mb-10
`}
`;

const SectionTitle = styled.div`
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

const DevJourney = () => {
  return (
    <Container id="dev" className="mt-20 ml-auto mr-auto">
      <SectionTitle>My Dev Journey </SectionTitle>
      <SubTitle className="text-4xl">Context</SubTitle>
      <SectionText>
        This section is less for employers and more for other newbie devs who
        struggled in their pivoting journey.
      </SectionText>
      <SubTitle className="text-4xl">Beginings</SubTitle>
      <SectionText>
        Javascript was the most obvious starting point for me. I think if I had
        started anywhere else, I would have given up by blocking frustrations
        too quickly. Javascript had a massive educational commmunity and a
        langauge where you could immediately see it's real world applications. I
        doubt I would have felt the same impact if I would have tried to pivot
        into data science or ML.
      </SectionText>
      <SectionText>
        A friend had mentioned The Odin Project (TOP), and like any
        dopamine-loving-organism, I enjoyed the gamification of checking off
        concepts and seeing how other learners approached the problem. Honestly,
        it was a bit refreshing seeing other unpolished pieces. This was
        important for quelling the imposter syndrom in me.
      </SectionText>
      <SubTitle className="text-4xl">
        Degree vs. Bootcamp vs. Self-taught
      </SubTitle>
      <SectionText>
        Hands down I wish that I had double majored in Computer Science or
        Electrical Engineering, regarless of what my main degree would have been
        (for me it was Biomedical). I remember for an extraciricular medical
        design competition which I participated in, our entire proposition
        ultimately relied on arduino coding, and one classmate carried the team.
        Our degree program only briefly taught us Matlab, and I deeply regret
        not learning some languages in my free time.
      </SectionText>
      <SectionText>
        As far as bootcamp vs. self taught, If I had to do it again, it may be
        too soon to say. I have very few data points for how much more knowledge
        other Bootcamp grads may have. The frugal engineer in me, thought that
        self-taught would be easy. While this may or may not have been true, I
        now think that the bootcamp networking and career pipeline would be well
        worth the price tag.
      </SectionText>
      <SubTitle className="text-4xl">Thank you to all the Educators</SubTitle>
      <SectionText>
        I do wish there were more vocational or philanthropic programs out
        there, but I know that not everything cannot be free and educators
        deserve to be paid. Despite this, the amount of free educational content
        out there on the web is truly incredible. It definitely makes me want to
        give back in that regard. Regardless I want to give a huge thank you to
        some of the Youtubers who helped me along the way.
      </SectionText>
      <SectionText className="mt-5">
        FreeCodeCamp. Codevolution. Traversy Media. Sam Meech-Ward. Fireship.
        WebDevSimplified. NetworkChuck. Theo-ping.GG Steve Griffith. Jack
        Herrington. Zach Gollwitzer. MonsterLessons. Hussein Nasser.
        BeABetterDev. .... & many more.
      </SectionText>
    </Container>
  );
};

export default DevJourney;
