import React from "react";
import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="blue">skills</span>
        </h4>
        <h1>Tools and Languages I've used the most</h1>
      </Slide>
      <Cards>
        <Slide direction="down">
          <Card
            Icon={SiCplusplus}
            title={"C++"}
            disc={`4+ years`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiPython}
            title={"Python"}
            disc={`3+ years`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiUnity}
            title={"Unity"}
            disc={`2+ years`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiVisualstudiocode}
            title={"VSCode"}
            disc={`4+ years  `}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiMysql}
            title={"MySQL"}
            disc={'2+ years'}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={SiGithub}
            title={"Github"}
            disc={'4+ years'}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
