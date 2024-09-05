import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaLaptopCode, FaMicrochip } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs"; // For languages
import { MdMiscellaneousServices } from "react-icons/md"; // For Other skills
import matlabLogo from "../../Assets/matlabLogo.png";
import pythonLogo from "../../Assets/pythonLogo.png";
import gitLogo from "../../Assets/gitLogo.png";
import cppLogo from "../../Assets/cppLogo.png";
import linuxLogo from "../../Assets/linuxLogo.png";
import tcpipLogo from "../../Assets/tcpipLogo.png";
import sqlLogo from "../../Assets/sqlLogo.png";
import arduinoLogo from "../../Assets/arduinoLogo.png";
import stm32Logo from "../../Assets/stm32Logo.png";
import sysLogo from "../../Assets/sysvLogo.png";
import htmlLogo from "../../Assets/htmlLogo.png";
import cssLogo from "../../Assets/cssLogo.png";
import reactLogo from "../../Assets/reactLogo.png";
import nodeLogo from "../../Assets/nodeLogo.png";
import msLogo from "../../Assets/officeLogo.png";
import fusionLogo from "../../Assets/fs360Logo.png";
import canvaLogo from "../../Assets/canvaLogo.png";
import frenchLogo from "../../Assets/franceLogo.png";
import italianLogo from "../../Assets/italieLogo.png";
import englishLogo from "../../Assets/anglaisLogo.png";
import simulinkLogo from "../../Assets/simulinkLogo.png";
import proteusLogo from "../../Assets/proteusLogo.png";



const renderIcon = (iconSrc) => {
  return <img src={iconSrc} alt="tech logo" style={{ width: "24px", height: "24px" }} />;
};

const techCategories = [
  {
    category: "Informatics",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "Python", icon: renderIcon(pythonLogo) },
      { name: "C/C++", icon: renderIcon(cppLogo) },
      { name: "SQL", icon: renderIcon(sqlLogo) },
      { name: "Linux", icon: renderIcon(linuxLogo) },
      { name: "Git", icon: renderIcon(gitLogo) },
      { name: "TCP/IP", icon: renderIcon(tcpipLogo) },
      { name: "Matlab", icon: renderIcon(matlabLogo) },
    ],
  },
  {
    category: "Electronics",
    icon: <FaMicrochip />,
    technologies: [
      { name: "Arduino", icon: renderIcon(arduinoLogo) },
      { name: "STM32", icon: renderIcon(stm32Logo) },
      { name: "SystemVerilog", icon: renderIcon(sysLogo) },
      { name: "Proteus", icon: renderIcon(proteusLogo) },
      { name: "Simulink", icon: renderIcon(simulinkLogo) },
    ],
  },
  {
    category: "Web",
    icon: <AiFillHtml5 />,
    technologies: [
      { name: "HTML", icon: renderIcon(htmlLogo) },
      { name: "CSS", icon: renderIcon(cssLogo) },
      { name: "React", icon: renderIcon(reactLogo) },
      { name: "Node.js", icon: renderIcon(nodeLogo) },
    ],
  },
  {
    category: "Other",
    icon: <MdMiscellaneousServices />,
    technologies: [
      { name: "MS Office", icon: renderIcon(msLogo) },
      { name: "Fusion 360", icon: renderIcon(fusionLogo) },
      { name: "Canva", icon: renderIcon(canvaLogo) },
    ],
  },
  {
    category: "Languages",
    icon: <BsFillChatSquareTextFill />,
    technologies: [
      { name: "French", icon: renderIcon(frenchLogo) },
      { name: "English", icon: renderIcon(englishLogo) },
      { name: "Italian", icon: renderIcon(italianLogo) },
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
