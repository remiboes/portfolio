import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "./Techstack";
import Particle from "../Particle";
import HaloEffect from "../halloeffect";
import ExperienceTabs from "./ExperienceTabs";
import EducationSection from "./EducationSection";


function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <HaloEffect />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">experiences </strong>
        </h1>
        <ExperienceTabs />
        <h1 className="project-heading2">
          <strong className="purple">Education </strong> Story
        </h1>
        <EducationSection />
        <h1 className="project-heading2">
          My <strong className="orange">Superpowers </strong>
        </h1>

        <Techstack />

        {/*<h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />*/}
      </Container>
    </Container>
  );
}

export default About;
