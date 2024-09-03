import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 6,
            density: {
              enable: true,
              value_area: 150,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.3,
          },
          move: {
            direction: "right",
            speed: 0.2,
          },
          size: {
            value: 2, // Ajuste la taille ici
          },
          color: {
            value: "#3497a8", // Couleur bleue
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
