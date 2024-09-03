import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import HaloEffect from "../halloeffect";
import chatify from "../../Assets/pagerk.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiReact, DiCss3, DiFirebase } from "react-icons/di";
import { SiTailwindcss, SiMarkdown } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "Chatify",
    image: chatify,
    skills: [
      { name: "React.js", icon: <DiReact /> },
      { name: "Material-UI", icon: <DiFirebase /> },
      { name: "Firebase", icon: <DiFirebase /> }
    ],
    description: "Personal Chat Room or Workspace to share resources and hangout with friends.",
    details: "Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.Chatify is a personal chat room or workspace built with React.js, Material-UI, and Firebase. It features real-time messaging, image sharing, and message reactions.",
    ghLink: "https://github.com/soumyajit4419/Chatify",
    demoLink: "https://chatify-49.web.app/"
  },
  {
    id: 2,
    name: "Bits-0f-C0de",
    image: bitsOfCode,
    skills: [
      { name: "Next.js", icon: <DiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Markdown", icon: <SiMarkdown /> }
    ],
    description: "My personal blog page built with Next.js and Tailwind CSS.",
    details: "Bits-0f-C0de is my personal blog page built with Next.js and Tailwind CSS. It takes content from markdown files and renders it using Next.js. The site supports dark mode and is easy to maintain.",
    ghLink: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoLink: "https://blogs.soumya-jit.tech/"
  },
  {
    id: 3,
    name: "Editor.io",
    image: editor,
    skills: [
      { name: "React.js", icon: <DiReact /> },
      { name: "HTML", icon: <AiFillHtml5 /> },
      { name: "CSS", icon: <DiCss3 /> }
    ],
    description: "Online code and markdown editor built with React.js.",
    details: "Editor.io is an online code and markdown editor built with React.js. It supports HTML, CSS, and JS code with instant preview. The markdown editor allows building README files with GFM and custom HTML tags.",
    ghLink: "https://github.com/soumyajit4419/Editor.io",
    demoLink: "https://editor.soumya-jit.tech/"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    // Désactive le défilement de la page principale
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Réactive le défilement de la page principale
    document.body.style.overflow = "auto";
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <HaloEffect />
      <Container>
        <h1 className="project-heading">
          All my <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <div className="project-cards-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <img src={project.image} alt={project.name} className="project-image" />
              <h4 className="project-name">{project.name}</h4>
              <div className="project-skills">
                {project.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="skill-separator"></div>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeModal}>×</button>
              <h2 className="modal-title">{selectedProject.name}</h2>
              <div class="modal-body">
                <div class="modal-image-container">
                  <img src={selectedProject.image} alt={selectedProject.name} className="modal-image" />
                </div>
                <div class="modal-text">
                  <div className="modal-skills">
                    {selectedProject.skills.map((skill, index) => (
                      <span key={index} className="modal-skill-badge">
                        {skill.icon}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                  <p className="modal-description">{selectedProject.details}</p>
                  <div className="modal-links">
                    <a href={selectedProject.ghLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
