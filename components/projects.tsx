"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useActiveSectionContext } from "@/context/active-section-context";

const Projects = () => {
  const { setActiveSection } = useActiveSectionContext();

  const { ref, inView } = useInView({ threshold: 0.18 });

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
