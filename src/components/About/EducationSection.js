import React, { useRef, useEffect, useState} from "react";
import EducationCard from "./EducationCard";

// Import des logos
import bergenLogo from "../../Assets/bergenLogo.png";
import minesLogo from "../../Assets/minesLogo.png";
import ibmLogo from "../../Assets/ibmLogo.png";
import thiersLogo from "../../Assets/thiersLogo.svg";
import joliotCurieLogo from "../../Assets/joliotcurieLogo.png";
import next from "../../Assets/next1.png";
import prev from "../../Assets/prev1.png";

const educationData = [
  {
    logo: bergenLogo,
    date: "Autumn 2024",
    school: "University of Bergen (Norway)",
    degree: "Semester of study in Data, Computer Science, and Mathematics",
    achievements: "",
  },
  {
    logo: minesLogo,
    date: "2022 ~ 2025",
    school: "Mines St Etienne - ISMIN",
    degree: "Engineering School specializing in Microelectronics and Computer Science",
    achievements: "",
  },
  {
    logo: ibmLogo,
    date: "2023",
    school: "IBM AI Engineering",
    degree: "Training in AI, Python Tools (SciPy, ScikitLearn, Keras, PyTorch, TensorFlow), Real-world Projects",
    achievements: "",
  },
  {
    logo: thiersLogo,
    date: "2019 ~ 2022",
    school: "Lycée Thiers - CPGE MP",
    degree: "Preparatory Class for Engineering Schools, specializing in Mathematics and Physics",
    achievements: "",
  },
  {
    logo: joliotCurieLogo,
    date: "2016 ~ 2019",
    school: "Lycée Joliot-Curie - BAC S",
    degree: "General Scientific Baccalaureate - Italian European Option",
    achievements: "",
  },
];

function EducationSection() {
  const timelineRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const maxProgress = 0.55; // Maximum progress limit (80% of the total timeline)
  const rewindLimit = -0.1; // 20% further to the left
  const [progress, setProgress] = useState(rewindLimit); // Start at -20%
  const animationFrameRef = useRef(null);
  const startTimestampRef = useRef(null);
  const duration = 65000; // 35 seconds for a full loop

  const updateTimelinePosition = (progressValue) => {
    const translateX = -progressValue * (timelineRef.current.scrollWidth / 2);
    timelineRef.current.style.transform = `translateX(${2 * translateX}px)`;
  };

  const resetAnimation = () => {
    cancelAnimationFrame(animationFrameRef.current); // Stop the current animation
    setIsPaused(true); // Pause the animation
    setProgress(rewindLimit); // Reset progress to the starting position
    updateTimelinePosition(rewindLimit); // Immediately apply the reset position
    startTimestampRef.current = null; // Clear the timestamp to restart cleanly
    setTimeout(() => setIsPaused(false), 100); // Resume the animation after a short delay
  };

  const animate = (timestamp) => {
    if (!startTimestampRef.current) {
      startTimestampRef.current = timestamp;
    }
    const elapsed = timestamp - startTimestampRef.current;
    let newProgress = (progress + elapsed / duration);

    // Check if we've reached or exceeded maxProgress
    if (newProgress >= maxProgress) {
      resetAnimation(); // Reset and restart animation at the start position
      return; // Exit the current animation loop
    }

    setProgress(newProgress);
    updateTimelinePosition(newProgress);

    if (!isPaused) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startTimestampRef.current = null; // Reset start time to sync with progress
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animationFrameRef.current);
    }

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [isPaused]);

  const advanceTimeline = () => {
    const newProgress = Math.min(progress + 0.1, maxProgress);
    setProgress(newProgress);
    updateTimelinePosition(newProgress);
    startTimestampRef.current = null; // Reset timestamp to ensure animation continues smoothly
  };

  const rewindTimeline = () => {
    const newProgress = Math.max(progress - 0.1, rewindLimit);
    setProgress(newProgress);
    updateTimelinePosition(newProgress);
    startTimestampRef.current = null; // Reset timestamp to ensure animation continues smoothly
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="timeline-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="advance-button" onClick={advanceTimeline}>
        <img src={next} alt="Next" />
      </button>
      <button className="rewind-button" onClick={rewindTimeline}>
        <img src={prev} alt="Previous" />
      </button>
      <div className="timeline" ref={timelineRef}>
        <div className="event-line"></div> {/* Ligne centrale de la timeline */}
        {educationData.map((education, index) => (
          <div className="timeline-event" key={index}>
            <div className="event-marker"></div>
            <div className="event-content">
              <EducationCard
                logo={education.logo}
                date={education.date}
                school={education.school}
                degree={education.degree}
                percentage={education.percentage}
                achievements={education.achievements}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
