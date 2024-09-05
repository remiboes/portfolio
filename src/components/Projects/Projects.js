import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import HaloEffect from "../halloeffect";
import isaProject from "../../Assets/Projects/isa.jpg"; // Placeholder image for ISA project
import robotProject from "../../Assets/Projects/robot.png"; // Placeholder image for Robot project
import tipeEvacuation from "../../Assets/Projects/evacuation.png"; // Placeholder image for TIPE Evacuation
import pagerank from "../../Assets/Projects/pagerk.png"; // Placeholder image for PageRank project
import { AiFillHtml5 } from "react-icons/ai";
import { DiReact, DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiMarkdown } from "react-icons/si";

const projects = [
  {
    id: 1,
    name: "ISA Project: Electrified Models on Pollinators",
    image: isaProject,
    skills: [
      { name: "Arduino", icon: <DiReact /> },
      { name: "Sustainability ", icon: <AiFillHtml5 /> },
      { name: "Teamwork", icon: <DiCss3 /> }
    ],
    description: "Collaborative project with elementary students to create electrified models of pollinators.",
    details: `As part of my engineering studies, I participated in a captivating solidarity engineering project titled "Science and Arts: Creating an Electrified Artwork on the Theme of Pollinators." Our team collaborated with Claire Dauphin Primary School in Auriol to carry out this project, which aimed to introduce children to technology through an artistic approach.

  \n\nThe project was initiated by Mrs. Ruiz, a primary school teacher, who invited us to work with her CE2 class. Later, the project was extended to include a CM1 class. Our objective was to create two artistic models that featured electronic systems, such as LEDs and servomotors, to pique the children's interest and make them more aware of technology. These models also needed to align with the theme of pollinators, which tied into the curriculum being taught at the time. To promote sustainability, we emphasized the use of recycled materials as much as possible in the construction of the models.

  \n\nWe began the project by designing the models in 3D, in collaboration with the students. Their ideas were collected and integrated into the creative process. Once we had gathered all their suggestions, we transformed them into prototype diagrams. We decided to use LEDs to illuminate the sun and servomotors to animate the bees. The flexibility of our organization allowed us to work efficiently in teams, ensuring that the workload was fairly distributed among the group.

  \n\nAt the final presentation, we displayed the models to the students, showing the results that closely resembled the designs created together. Although we faced some wiring challenges that caused short circuits, we managed to fix one model and successfully light up the sun on the second. The children were excited and proud of their contributions to the project.

  \n\nThis experience allowed me to develop my engineering skills, collaborate effectively within a team, and share my enthusiasm for technology with younger students. It was a rewarding experience, combining innovation and creativity with education and sustainability. It also served as a valuable reminder of the importance of preparation and foresight when managing complex projects.`,
    ghLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    name: "Robot Project",
    image: robotProject,
    skills: [
      { name: "STM32", icon: <DiReact /> },
      { name: "C embedded", icon: <AiFillHtml5 /> },
      { name: "Communication protocols", icon: <DiCss3 /> }
    ],
    description: `A collaborative robot project with advanced functionalities including navigation, communication, and interaction.`,
    details: `Lexane Cassaing and I collaborated on a complex robot project, equipped with multiple interconnected functionalities. This robot was designed to accomplish a variety of tasks, including navigation, interaction with its environment, and communication with the user.

    \n\nThe robot’s human-machine interface is rich in features. The system includes eight LEDs that encode and display visual information for the user. It is also equipped with a remote control, allowing for the robot to be operated at a distance. Additionally, a reset button is integrated to restart the microcontroller if necessary.
    
    \n\nIn terms of mobility, the robot is equipped with motors whose speed is controlled using a PWM (Pulse Width Modulation) signal. This functionality allows for the adjustment of motor rotational speed, providing better maneuverability. Furthermore, the robot can change direction by reversing the motor rotation using a switching mechanism.
    
    \n\nThe project integrates sensors that facilitate navigation and interaction with the environment. Infrared sensors measure the distance between the robot and nearby obstacles. Meanwhile, a sonar emits ultrasonic waves to calculate distance based on the time difference.
    
    \n\nCommunication is also a central aspect of the project. An OOK (On-Off Keying) signal is used to establish wireless communication between the remote control and the robot. Additionally, the I2C bus is employed to allow different components to communicate with the microcontroller. To power the entire system, a voltage regulation mechanism ensures a consistent power supply.
    
    \n\nIn conclusion, this robot project illustrates a diverse set of skills, ranging from electronics to motor control, from wireless communication to circuit design. This robot is capable of moving, detecting its environment, and interacting with the user via the remote control.`,
    ghLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    name: "Crowd Evacuation Optimization",
    image: tipeEvacuation,
    skills: [
      { name: "Python", icon: <SiTailwindcss /> },
      { name: "Computational Simulation", icon: <SiMarkdown /> },
      { name: "Practical Computing", icon: <AiFillHtml5 /> }
    ],
    description: "Optimizing room configurations for crowd evacuation using mathematical models.",
    details: `I worked on a project focused on optimizing room configurations for crowd evacuation, aiming to improve the efficiency and safety of mass evacuations by using advanced modeling techniques.

    \n\nThe first step involved developing a model based on cellular automata to represent crowd movement. The study space was discretized into a grid of uniform cells, with each cell having a local state determined by a set of rules that described individual behaviors. This approach provided a discrete representation of crowd evolution while considering the interactions between individuals.

    \n\nThe second phase focused on using a gradient flow model. In this model, the space was treated as continuous, with the primary goal being to minimize the geodesic distances of individuals to the exit while avoiding congestion. To calculate these distances, the Fast Marching algorithm, similar to Dijkstra’s algorithm, was applied. Additionally, the Uzawa constraint optimization algorithm was used to project individual velocities while preventing overlaps.

    \n\nIn the final phase, I analyzed and compared the results from both models. The objective was to determine which room configuration, particularly with the addition of obstacles, allowed for faster and more efficient evacuations. The models were tested under various room configurations to assess their respective performances.

    \n\nOverall, this project was an exciting exploration of crowd modeling and computational simulation methods. It highlighted the critical importance of prevention and safety in mass evacuation scenarios, while also developing valuable skills in mathematical modeling, practical computing, and data analysis.`,
    ghLink: "#",
    demoLink: "#"
  },
  {
    id: 4,
    name: "PageRank Simulation",
    image: pagerank,
    skills: [
      { name: "Python", icon: <DiReact /> },
      { name: "Graph Theory", icon: <DiReact /> },
      { name: "Numerical Methods", icon: <SiTailwindcss /> },
    ],
    description: "Understanding and simulating the PageRank algorithm for web search optimization.",
    details: `The PageRank algorithm is central to search engines and plays a crucial role in ranking web pages. Understanding this model is key to optimizing search algorithms and ensuring relevant results for users. During this project, I delved into the complex model of PageRank by implementing a series of rigorous technical and analytical activities.

    \n\nThe project began with a deep exploration of the concept of PageRank. I represented the World Wide Web as a graph, with each webpage as a node and the links between them as edges. I utilized a stochastic transition matrix to formalize the relationships between pages, which enabled me to calculate the stationary value, known as the PageRank.

    \n\nIn terms of computation methods, I studied and implemented various iterative techniques to solve the complex linear system that resulted from the PageRank model. This included the power method, Gauss-Seidel, and Jacobi methods, as well as extrapolation techniques to speed up convergence.

    \n\nI then analyzed the performance of these methods by applying them to graphs of different sizes, assessing both spatial and temporal complexity. This allowed me to compare the efficiency and accuracy of each method.

    \n\nThis project showcased my proficiency in applied mathematics, computer science, and advanced numerical methods for solving complex problems, demonstrating my ability to tackle both theoretical and practical challenges in algorithm optimization.`,
    ghLink: "#",
    demoLink: "#"
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
    <Container fluid className="project-section" id ="projects">
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
                  <p className="modal-description">
                    {selectedProject.details.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="description">{paragraph}</p>
                  ))}

                  </p>
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
