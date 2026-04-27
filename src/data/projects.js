import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Chatley",
    image: "./chatley.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "AI Calling/Chat and scheduling system with GHL and n8n integartions.",
    demo: "https://chatley.ai",
  },
  {
    id: "2",
    name: "Kapture",
    image: "./kapture.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "Enterprise customer support platform that uses AI to help companies handle customer service faster and more efficiently.",
    demo: "https://kapture.cx",
  },
  {
    id: "3",
    name: "Ringly",
    image: "./ringly.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "AI voice platform handling live calls, appointment scheduling, and end-to-end customer interactions.",
    demo: "https://www.ringly.io/",
  },
  {
    id: "4",
    name: "Peeker",
    image: "./peeker.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "B2B SaaS platform designed to automate and optimize cold email outreach using AI, data enrichment, and email infrastructure management.",
    demo: "https://peeker.ai",
  },
  {
    id: "5",
    name: "VOXR AI",
    image: "./voxrai.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "AI multi-agent platform automating inbound/outbound calls, lead generation, bookings, and customer queries across voice, chat, SMS, e mail, and social channels",
    demo: "https://www.voxr.ai/",
  },
  {
    id: "8",
    name: "Medianest AI",
    image: "./medianest.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "End-to-end AI automation for media agencies and news channels covering content creation, posting, avatar news, and multi-channel publishing",
    demo: "https://themedianest.ai/",
  },
];

export default ProjectsData;
