import React, { useState, useRef, useEffect } from "react";

// Import des images
import thalesLogo from "../../Assets/thales-logo.png";
import navalGroupLogo from "../../Assets/naval-group-logo.webp";

const experiences = [
    {
        title: "Thales",
        description: `During my internship at Thales, I was tasked with developing a project management application aimed at improving the efficiency of handling project data from multiple sources, including Confluence, Jira, and the Project Management Cube (PMC).\n\nOne of the primary challenges I faced was the inconsistency in project identifiers across these platforms. To address this, I designed and implemented a system that could match and retrieve relevant project data using only the project code as the initial input. This approach streamlined the data extraction process, reducing the need for manual input and minimizing errors.\n\nIn addition to the core functionality, I developed a database using SQLite to store and manage the project data efficiently. This database served as the backbone of the application, enabling quick access and retrieval of project information, which was crucial for the application’s performance and reliability.\n\nThe application itself was structured around three main sections: Project Tracking, Add a Project, and Statistics. The Project Tracking section provided detailed overviews of selected projects, including general information, financial data, risk analysis, Jira issue tracking, and key performance indicators (KPIs). These KPIs, which I adapted and implemented during my internship, were essential for monitoring project progress and health.\n\nThe Add a Project section simplified the process of integrating new projects into the system by automating the retrieval of data from various sources, including Confluence, Jira, and the PMC. This automation not only saved significant time but also reduced the risk of human error in the data integration process.\n\nFurthermore, I took responsibility for documenting the entire project using Sphinx. This documentation included detailed instructions on the application’s functionality, database structure, and codebase, ensuring that future developers could easily understand and maintain the system.\n\nOverall, this internship allowed me to develop practical solutions to complex data management challenges while enhancing my skills in software development, database management, and technical documentation.`,
        logo: thalesLogo,
        role: "Data scientist / Python developer Intern",
        date: "April 2024 - July 2024",
    },
    {
        title: "Naval Group",
        description: `During my internship at Naval Group, I was deeply involved in the maintenance and development of electronic systems on surface ships.\n\n
      
      My primary responsibility was the maintenance of electronic equipment, particularly in the area of power electronics. This involved routine inspections, troubleshooting, and repairs to ensure that all systems were functioning optimally. My work was crucial for maintaining the reliability of these systems, which are vital for the operation and safety of the vessels.\n\n
      
      In addition to maintenance tasks, I also contributed to the development of an automated test bench equipped with a user-friendly interface. This test bench was designed to streamline the testing process for various electronic components, reducing the time required for diagnostics and improving the accuracy of the tests.\n\n
      
      Furthermore, I played a key role in developing a system for monitoring the operational status of onboard radar systems. This system included the integration of an embedded oscilloscope, which allowed for real-time diagnostics and monitoring of radar performance. This innovation significantly improved the ability to detect and address potential issues with the radar systems before they could affect the ship's operations.\n\n
      
      Throughout this internship, I gained valuable hands-on experience in both maintenance and development tasks, working with advanced electronic systems in a high-stakes environment. My contributions not only enhanced the reliability and efficiency of the equipment but also provided me with a deep understanding of the complex electronic systems used in naval applications.`,
        logo: navalGroupLogo, // Utilisation de l'import
        role: "Electronic Systems Maintenance Engineer",
        date: "January 2023",
      }
];

function ExperienceTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const [showDescription, setShowDescription] = useState(false);
    const [descriptionHeight, setDescriptionHeight] = useState("0px");
    const descriptionRef = useRef(null);

    const toggleDescription = () => {
        setShowDescription((prev) => !prev);
    };

    useEffect(() => {
        if (showDescription) {
        setDescriptionHeight(`${descriptionRef.current.scrollHeight}px`);
        } else {
        setDescriptionHeight("0px");
        }
    }, [showDescription, activeTab]);

    return (
        <div className="experience-tabs">
        <div className="tab-list">
            {experiences.map((exp, index) => (
            <div
                key={index}
                className={`tab-item ${activeTab === index ? "active" : ""}`}
                onClick={() => {
                setActiveTab(index);
                setShowDescription(false); // Hide description when switching tabs
                }}
            >
                <img src={exp.logo} alt={`${exp.title} logo`} className="tab-logo" />
                {exp.title}
            </div>
            ))}
        </div>
        <div className="tab-content">
            <h3>{experiences[activeTab].title}</h3>
            <h4 className="role">{experiences[activeTab].role}</h4>
            <p className="date">{experiences[activeTab].date}</p>
            <div
            className="description-container"
            style={{ height: descriptionHeight }}
            ref={descriptionRef}
            >
            {experiences[activeTab].description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="description">{paragraph}</p>
            ))}
            </div>
            <button className="more-button" onClick={toggleDescription}>
            {showDescription ? "Show Less" : "More"}
            </button>
        </div>
        </div>
    );
    }

export default ExperienceTabs;
