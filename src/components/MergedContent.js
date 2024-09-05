import React from "react";
import Home from "./Home/Home";
import FindMeOn from "./Home/FindMeOn"; // Import the new component
import About from "./About/About";
import Projects from "./Projects/Projects";
import Particle from "./Particle";
import HaloEffect from "./halloeffect";

function MergedContent() {
  return (
    <div className="allPages">
      <Particle />
      <HaloEffect />
      <Home />
      <About />
      <Projects />
      <FindMeOn />
    </div>
  );
}

export default MergedContent;