import {
  MapPin,
  Code2,
  FileCode,
  Atom,
  Zap,
  Paintbrush,
  Wind,
  GitBranch,
  Github,
  Smartphone,
  Palette,
  Box,
  CheckCircle,
  TestTube2,
  Gauge,
  Timer,
  Globe,
  Database,
  Cloud,
  MessageSquare,
  Folder,
  Puzzle,
  Users,
  Linkedin,
  Instagram,
  type LucideIcon,
  MessageCircle,
  Mail,
} from "lucide-react";
import idr from "../assets/idr.png";
import screener from "../assets/screener.png";
import mm from "../assets/mm.png";
import adlob from "../assets/adlob.png";
import funpark from "../assets/funpark.png";
import ecommerce from "../assets/ecommerce.png";
import spotify from "../assets/spotify.png";
import screenr_long from "../assets/screenr_long.png";
import portfolio from "../assets/kavish-portfolio.png";
// Personal Information
export const personalInfo = {
  name: "Md Kavish",
  displayName: "Md Kavish", // For navbar/logo
  title: "Frontend Developer",
  tagline: "a Frontend Developer",
  location: "Indore, India",
  email: "razdankavish67@gmail.com",
  phone: "+91 8983791881",
  copyright: `© ${new Date().getFullYear()} Md Kavish`,
  careerStartDate: "2023-08-01", // Format: YYYY-MM-DD
};

// Social Links
export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/kavish-razdan/",
  github: "https://github.com/KavishRazdan/",
  instagram: "#",
};

// About Me
export const aboutMe = {
  intro: `Passionate Frontend Developer Focused on Responsive Web Applications`,

  background: `Frontend Developer with a strong focus on building responsive and interactive web applications. Skilled in HTML, CSS, Tailwind CSS, JavaScript, and React.js, with a passion for creating clean, user-friendly interfaces. Adept at applying design thinking and problem-solving to deliver high-quality, scalable frontend solutions.`,

  philosophy: ``,

  yearOfExperience: "1+",
  projectsCompleted: "10+",
  happyClients: "5+",
};

// Skills
export const skills = {
  frontend: [
    { name: "React.js", icon: Atom },
    { name: "Next.js", icon: Zap },
    { name: "JavaScript (ES6+)", icon: Code2 },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML", icon: FileCode },
    { name: "CSS", icon: Paintbrush },
    { name: "SCSS", icon: Paintbrush },
    { name: "Tailwind CSS", icon: Wind },
    { name: "Material UI", icon: Palette },
    { name: "Bootstrap", icon: Palette },
  ],
  stateManagement: [
    { name: "Context API", icon: Box },
    { name: "Zustand", icon: Box },
  ],
  testing: [
    { name: "Jest", icon: CheckCircle },
    { name: "React Testing Library", icon: TestTube2 },
    { name: "Unit Testing", icon: CheckCircle },
  ],
  performance: [
    { name: "SSR", icon: Zap },
    { name: "SSG", icon: Zap },
    { name: "Component Reusability", icon: Puzzle },
    { name: "UI Optimization", icon: Gauge },
    { name: "Load Time Reduction", icon: Timer },
    { name: "Accessibility Improvements", icon: Users },
  ],
  api: [
    { name: "RESTful APIs", icon: Globe },
    { name: "GraphQL", icon: Database },
  ],
  tools: [
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github },
    { name: "Azure", icon: Cloud },
    { name: "GitLab", icon: GitBranch },
    { name: "Bitbucket", icon: GitBranch },
    { name: "Jira", icon: Folder },
    { name: "Slack", icon: MessageSquare },
  ],
};

// Work Experience
export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "SimplifyNote",
    location: "Remote",
    period: "Summer 2024 (3 Months)",
    responsibilities: [
      "Built and improved UI of internal dashboards and landing pages.",
      "Collaborated with team using Git and version control workflows.",
      "Gained experience in responsive web design, debugging, and optimization.",
    ],
  },
];

// Education
export const education = [
  {
    id: 1,
    institution: "Dr. A.P.J. Abdul Kalam University, Indore",
    degree: "B.E. in Computer Science",
    period: "2023 - 2026 (Ongoing)",
  },
  {
    id: 2,
    institution: "Dr. A.P.J. Abdul Kalam University, Indore",
    degree: "Diploma in Computer Science",
    period: "2020 - 2023",
  },
];

// Notable Projects
export const notableProjects = [
  {
    id: 1,
    title: "Screener - Zamzam Capital",
    role: "Frontend Developer",
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
    achievements: [
      "Developed a dedicated Halal stock screening platform enabling investors to evaluate companies based on Shariah-compliant financial criteria.",
      "Implemented advanced filtering and screening logic to assess stocks across multiple compliance parameters, providing a streamlined and user-friendly interface for Islamic investment research.",
      "Created responsive dashboards with intuitive UI/UX for seamless user experience across devices.",
    ],
  },
  {
    id: 2,
    title: "IDR - Institute of Digital Risk",
    role: "Lead Frontend Engineer",
    techStack: ["javascript", "html", "css"],
    year: "2026",
    src: idr,
    url: "https://idr-kavish.netlify.app/",
    achievements: [
      "Designed and developed a modern, responsive website for an industry-led training institute focused on digital and AI risk.",
      "Built using HTML, Tailwind CSS, and React.js, the platform features a clean UI, modular component structure, and optimized user experience.",
      "Implemented sections like program offerings, service models, community highlights, and a dynamic contact form to effectively communicate the institute’s value proposition and drive user engagement.",
    ],
  }
];

// Personal Projects
export const personalProjects = [
  {
    id: 1,
    title: "Portfolio",
    url: "https://kavish.netlify.app/",
    src: portfolio,
  },
  {
    id: 2,
    title: "Amusement Park",
    url: "https://amusement-park-new.netlify.app",
    src: funpark,
  },
  {
    id: 3,
    title: "Memorable Mumbai",
    url: "https://memorablemumbai.com",
    src: mm,
  },
  {
    id: 4,
    title: "E-commerce clone",
    url: "https://shoppe-aquib-yazdani.netlify.app",
    src: ecommerce,
  },
  {
    id: 5,
    title: "Spotify clone",
    url: "https://spotify-yazdani.netlify.app",
    src: spotify,
  },
  {
    id: 6,
    title: "Screener",
    url: "https://screener.zamzam-capital.com",
    src: screener,
  },
];

// Awards
export const awards = [];

// Achievements
export const achievements = [
  "Completed multiple web development challenges and personal projects to strengthen frontend skills.",
  "Recognized for creative UI implementation and clean designs.",
  "Active learner in modern web frameworks and JavaScript ecosystems.",
];

// References
export const references = [];

// Featured Projects
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "ecommerce platform",
    year: "2023",
    role: "Full Stack Developer",
    client: "ShopFast Inc.",
    tag: "Featured",
    links: {
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/username/ecommerce",
    },
  },
  {
    id: 2,
    title: "Task Management App",
    category: "Mobile App",
    description:
      "Cross-platform mobile app for task and project management with real-time sync.",
    technologies: ["Firebase"],
    image: "task management app",
    year: "2023",
    role: "Mobile Developer",
    client: "ProductivePro",
    links: {
      demo: "https://taskapp-demo.com",
      github: "https://github.com/username/taskapp",
    },
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "Modern, responsive portfolio website with smooth animations and dark mode.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "portfolio website design",
    year: "2022",
    role: "Front-end Developer",
    links: {
      demo: "https://portfolio-demo.com",
      github: "https://github.com/username/portfolio",
    },
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive dashboard for visualizing complex data with charts and graphs.",
    technologies: ["React", "D3.js", "TypeScript"],
    image: "analytics dashboard",
    year: "2022",
    role: "Front-end Developer",
    client: "DataViz Corp.",
    links: {
      demo: "https://analytics-demo.com",
      github: "https://github.com/username/analytics",
    },
  },
  {
    id: 5,
    title: "Social Media App",
    category: "Full Stack",
    description:
      "Social networking platform with posts, comments, and real-time messaging.",
    technologies: ["React", "GraphQL", "PostgreSQL"],
    image: "social media interface",
    year: "2021",
    role: "Full Stack Developer",
    client: "ConnectHub",
    links: {
      demo: "https://socialmedia-demo.com",
      github: "https://github.com/username/social",
    },
  },
  {
    id: 6,
    title: "Weather Application",
    category: "API Integration",
    description:
      "Beautiful weather app with location-based forecasts and interactive maps.",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    image: "weather app interface",
    year: "2021",
    role: "Front-end Developer",
    links: {
      demo: "https://weather-demo.com",
      github: "https://github.com/username/weather",
    },
  },
];

// Contact Information for Footer
export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  // {
  //   icon: Phone,
  //   label: "Phone",
  //   value: personalInfo.phone,
  //   href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  // },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

// Social Media
export const socialMedia = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: socialLinks.linkedin,
  },
  {
    name: "GitHub",
    icon: Github,
    url: socialLinks.github,
  },
  // {
  //   name: "Instagram",
  //   icon: Instagram,
  //   url: socialLinks.instagram,
  // },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/+918983791881",
  },
   {
    icon: Mail,
    url: `mailto:${personalInfo.email}`,
  },
];

// Navigation Items
export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Resume", path: "/resume" },
];
