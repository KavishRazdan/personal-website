import idr from "../assets/idr.png";
import csv from "../assets/csv-plot.png";
import vectorshift from "../assets/vectorshift.png";
import screener from "../assets/screener.png";
import mm from "../assets/mm.png";
import adlob from "../assets/adlob.png";
import funpark from "../assets/funpark.png";
import ecommerce from "../assets/ecommerce.png";
import spotify from "../assets/spotify.png";
import screenr_long from "../assets/screenr_long.png";
import portfolio from "../assets/kavish-portfolio.png";

export interface Project {
  id: number;
  title: string;
  type: string[];
  role?: string;
  client?: string;
  techStack?: string[];
  year?: string;
  src?: string;
  url?: string;
  github?: string;
  description?: string;
  achievements?: string[];
  category?: string;
}

// Single Source of Truth for Projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Screener - Zamzam Capital",
    type: ["featured", "notable"],
    role: "Frontend Developer",
    client: "Zamzam Capital",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "REST APIs",
    ],
    year: "2025",
    src: screenr_long,
    url: "https://screener.zamzam-capital.com/",
    description:
      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria. Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
    achievements: [
      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
      "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
      "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
    ],
  },
  {
    id: 2,
    title: "Vector-shift",
    type: ["notable", "featured"],
    role: "Frontend Engineer",
    client: "Personal Project",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    year: "2026",
    src: vectorshift,
    url: "https://vectorshiftpipeline.netlify.app/",
    description:
      "An interactive visual workflow & pipeline builder web application designed for constructing, configuring, and connecting modular nodes into execution graphs.",
    achievements: [
      "Architected a visual AI pipeline builder application that allows users to construct, connect, and configure node-based workflow graphs interactively.",
      "Developed modular custom node components and dynamic state handlers in React.js & TypeScript for seamless node linking and canvas interactions.",
      "Implemented intuitive user feedback, smooth UI animations, and structured graph state serialization to ensure scalable pipeline configuration.",
    ],
  },
   {
    id: 3,
    title: "CSV - Plot Studio",
    type: ["notable", "featured"],
    role: "Frontend Engineer",
    client: "Personal Project",
    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "JavaScript",
    ],
    year: "2026",
    src: csv,
    url: "https://csv-plot.netlify.app/",
    description:
      "An interactive web-based data visualization platform that allows users to upload CSV datasets, parse tabular data instantly, and generate customizable charts and analytical plots in real time.",
    achievements: [
      "Engineered an interactive CSV visualization studio enabling instant parsing, filtering, and real-time chart generation for complex tabular datasets.",
      "Integrated Chart.js and dynamic data transformation pipelines with React.js & TypeScript, allowing users to customize plot axes, chart types, and visual themes.",
      "Designed a responsive, low-latency UI using Tailwind CSS, optimizing client-side memory usage and render performance when processing large CSV files.",
    ],
  },
  {
    id: 4,
    title: "IDR - Institute of Digital Risk",
    type: ["featured", "notable"],
    role: "Lead Frontend Engineer",
    client: "Personal Project",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    year: "2026",
    src: idr,
    url: "https://idr-kavish.netlify.app/",
    description:
      "Designed and developed a modern, responsive website for an industry-led training institute focused on digital and AI risk. Developed and maintained high-performance platform features with modular component structure.",
    achievements: [
      "Designed and developed a modern, responsive website for an industry-led training institute focused on digital and AI risk.",
      "Built using HTML, Tailwind CSS, and React.js, the platform features a clean UI, modular component structure, and optimized user experience.",
      "Implemented sections like program offerings, service models, community highlights, and a dynamic contact form to effectively communicate the institute’s value proposition and drive user engagement.",
    ],
  },
  
 
  {
    id: 5,
    title: "Memorable Mumbai",
    type: ["featured", "personal"],
    role: "Frontend Developer",
    client: "Personal Project",
    techStack: ["HTML", "CSS", "JavaScript", "React.js"],
    year: "2025",
    src: mm,
    url: "https://memorablemumbai.com",
    description:
      "A comprehensive travel and tourism website showcasing the vibrant culture, iconic landmarks, and hidden gems of Mumbai. Features an intuitive interface with responsive design, interactive maps, and detailed guides to help visitors explore and experience the city's rich heritage.",
    achievements: [
      "A comprehensive travel and tourism website showcasing the vibrant culture, iconic landmarks, and hidden gems of Mumbai.",
    ],
  },
  
 
  {
    id: 6,
    title: "Portfolio",
    type: ["personal"],
    role: "Frontend Developer",
    client: "Personal Project",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "GSAP"],
    year: "2024",
    src: portfolio,
    url: "https://kavish.netlify.app/",
    description:
      "Modern responsive portfolio website showcasing developer projects and skills.",
  },
  {
    id: 7,
    title: "Amusement Park",
    type: ["personal"],
    role: "Frontend Developer",
    client: "Personal Project",
    techStack: ["React.js", "Tailwind CSS"],
    year: "2024",
    src: funpark,
    url: "https://amusementbooking.netlify.app/",
    description:
      "Ticket booking and attraction web application for amusement park visitors.",
  },
  {
    id: 8,
    title: "E-commerce clone",
    type: ["personal"],
    role: "Frontend Developer",
    client: "Personal Project",
    techStack: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    src: ecommerce,
    url: "https://kavishrazdan.github.io/lakshya-ply/",
    description:
      "Responsive e-commerce store clone with product catalog and shopping cart UI.",
  },
  {
    id: 9,
    title: "Spotify clone",
    type: ["personal"],
    role: "Frontend Developer",
    client: "Personal Project",
    techStack: ["React.js", "CSS"],
    year: "2023",
    src: spotify,
    url: "https://spotify-kavish.netlify.app/",
    description:
      "Spotify music player UI clone with custom playback interfaces and playlist views.",
  },
  {
    id: 10,
    title: "Screener",
    type: ["personal"],
    role: "Frontend Developer",
    client: "Zamzam Capital",
    techStack: ["React.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    src: screener,
    url: "https://screener.zamzam-capital.com",
    description: "Halal stock screening platform.",
  },
];

// Helper exports for section views
export const notableProjects = projects.filter((p) =>
  p.type.includes("notable")
);
export const personalProjects = projects.filter((p) =>
  p.type.includes("personal")
);
export const featuredProjects = projects.filter((p) =>
  p.type.includes("featured")
);
