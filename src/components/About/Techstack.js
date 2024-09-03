import React from "react";
import { AiFillHtml5, AiFillGithub, AiFillCrown } from "react-icons/ai";
import { DiReact, DiCss3, DiNodejsSmall, DiPython, DiSqllite } from "react-icons/di";
import { FaLaptopCode, FaMicrochip } from "react-icons/fa";
import { SiArduino, SiStmicroelectronics, SiCplusplus } from "react-icons/si";

const techCategories = [
  {
    category: "Informatics",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "Python", icon: <DiPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <DiSqllite /> },
    ],
  },
  {
    category: "Informatics",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "Python", icon: <DiPython /> },
      { name: "C/C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <DiSqllite /> },
    ],
  },
  {
    category: "Electronics",
    icon: <FaMicrochip />,
    technologies: [
      { name: "Arduino", icon: <SiArduino /> },
      { name: "STM32", icon: <SiStmicroelectronics /> },
    ],
  },
  {
    category: "Web",
    icon: <AiFillHtml5 />,
    technologies: [
      { name: "HTML", icon: <AiFillHtml5 /> },
      { name: "CSS", icon: <DiCss3 /> },
      { name: "React", icon: <DiReact /> },
      { name: "Node.js", icon: <DiNodejsSmall /> },
    ],
  },
];

function TechStack() {
  return (
    <div className="techstack-container">
      {techCategories.map((category, index) => (
        <div key={index} className="category-container">
          <div className="category-header">
            {category.icon}
            <span className="category-title">{category.category}</span>
          </div>
          <div className="technology-list">
            {category.technologies.map((tech, techIndex) => (
              <div key={techIndex} className="technology-item">
                {tech.icon}
                <span className="technology-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechStack;