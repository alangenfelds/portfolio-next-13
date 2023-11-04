import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import portalCMS from "@/public/portal-cms.jpg";
import web3cfndg from "@/public/web3-crowdfunding.jpg";
import filmpire from "@/public/filmpire.jpg";
import nftMrktplc from "@/public/nft-mrktplc.jpg";
import realEstate from "@/public/real-estate.jpg";
import ledger from "@/public/ledger.jpg";
import elieta from "@/public/elieta.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "QA Automation Engineer",
    location: "Riga, Latvia",
    description:
      "I have developed test framework using JAVA/Selenium and CodeceptJS. Was responsible for creation of automation test scripts.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Riga, Latvia",
    description: "Developed web application for Insurance Company using React.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Front-End Developer",
    location: "Riga, Latvia",
    description:
      "Developed multiple single-page applications for integration into the existing information system for the Latvian Government Institution.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Front-End Developer",
    location: "Riga, Latvia",
    description:
      "Developed multiple Fintech web applications, developing company portal using JAMStack and headless CMS. Participating in the development of internal web applications.",
    icon: React.createElement(FaReact),
    date: "2020 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Private Pension Fund management",
    description:
      "I worked as a frontend developer on this project for 1,5 years.",
    tags: ["React", "Formik", "Jest"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Government information platform",
    description:
      "Government information system UI. Developed GraphQL schemas. API integration with Apollo",
    tags: ["React", "TypeScript", "GraphQL", "Redux", "Formik"],
    imageUrl: elieta,
  },
  {
    title: "Trading app UI prototype",
    description: "Developed a prototype for a real-time trading platform.",
    tags: ["React", "TypeScript", "MeterialUI"],
    imageUrl: ledger,
  },
  {
    title: "Company portal with headless CMS",
    description:
      "A public web app with headless CMS as a backend. Also created a plugin in Vue.js to integrate CMS with Mailchimp.",
    tags: ["Next.js", "Vue.js", "Tailwind", "Storyblok CMS"],
    imageUrl: portalCMS,
  },
  {
    title: "Multiple Fintech wep applications",
    description:
      "Web applications to query and analyze trading data with dynamic data grids and charts",
    tags: ["React", "Redux", "Material UI", "antd", "Ag-Grid"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Web3 Crowdfunding app",
    description: "Crowdfunding dapp, powered by Thirdweb.",
    tags: ["React", "Solidity", "Tailwind", "Dev-extreeme"],
    imageUrl: web3cfndg,
  },
  {
    title: "Movie database with Сonversational AI",
    description:
      "Training project for displaying movie information from themoviedb.org with Conversational AI (Alan AI).",
    tags: ["React", "Tailwind", "TypeScript", "Alan AI"],
    imageUrl: filmpire,
  },
  {
    title: "NFT Drop Dapp",
    description: "Training project. Created NFT Drop Dapp with NEXT.JS",
    tags: ["Next.js", "Tailwind", "TypeScript", "Thirdweb", "MetaMask"],
    imageUrl: nftMrktplc,
  },
  {
    title: "Real Estate",
    description: "Full Stack Real Estate App with Dashboard.",
    tags: ["React.js", "Refine", "TypeScript", "Material Ui", "MongoDB"],
    imageUrl: realEstate,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Node.js",
  "Tailwind",
  "Web3",
  "MaterialUI",
  "antd",
  "Firebase",
  "Framer Motion",
  "Vue.js",
  "Svelte",
  "CSS",
  "HTML",
] as const;
