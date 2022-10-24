import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import Connect from "./components/Thoughts";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DevJourney from "./components/DevJourney";
import Intro from "./components/Intro";
import Branches from "./components/Branches";
import ScrollWrapper from "./components/ScrollWrapper";
import SideBranches from "./components/SideBranches";
import tw from "twin.macro";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

export const deviceSizes = {
  mobile: 640,
  tablet: 786,
  laptop: 1024,
  desktop: 1280,
  widescreen: 1536,
};

const Container = styled.div`
  ${tw`
w-screen
bg-white
overflow-x-hidden
ml-auto
mr-auto
`}
`;

function App() {
  const isMobile = useMediaQuery({ maxWidth: deviceSizes.mobile });

  return (
    <Container>
      <Navbar />
      <Branches />
      {isMobile ? (
        <>
          <Intro />
          <Bio />
          <DevJourney />
          <Skills />
          <Projects />
        </>
      ) : (
        <ScrollWrapper>
          <Intro />
          <SideBranches />
          <Bio />
          <DevJourney />
          <Skills />
          <Projects />
        </ScrollWrapper>
      )}
    </Container>
  );
}

export default App;
