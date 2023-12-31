"use client";

import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView({ sectionName: "About", threshold: 0.75 });

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span>, I decided to
        pursue my passion for programming. I completed a lot of development
        courses and learned{" "}
        <span className="font-medium">frontend web development</span> before
        applying my first developer job.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">React, Next.js, TypeScript, Node.js</span>
        . I am also familiar with MERN Stack. I am always looking to learn new
        technologies. I am opened for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend or
        Full Stack developer (React/Node.js).
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and going to hiking trips. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        preparing for <span className="font-medium">AWS</span> certification.
      </p>
    </motion.section>
  );
};

export default About;
