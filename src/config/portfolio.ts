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

// Personal Information
export const personalInfo = {
  name: "Md Kavish",
  displayName: "Md Kavish", // For navbar/logo
  title: "AI Web Developer and Robotics",
  tagline: "an AI Web Developer & Robotics Specialist",
  location: "Bangalore, India",
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
  intro: `Passionate Developer Specializing in AI Web Development, Robotics, and Scalable Applications`,

  background: `Developer working at the forefront of AI Web Development and Robotics, focused on building intelligent web applications, modern responsive interfaces, and robotics control systems. Skilled in integrating AI/ML models with web frontends, developing real-time interactive dashboards, and engineering robust software architectures. Passionate about applying problem-solving and innovation to deliver cutting-edge digital experiences.`,

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
    title: "AI Web Developer and Robotics",
    company: "Adsafe Solutions",
    location: "Bangalore, India",
    period: "November 2026 - Present",
    responsibilities: [
      "Architecting and developing AI-powered web applications and integrating intelligent models into responsive interfaces.",
      "Building robotics control dashboards, real-time telemetry systems, and interactive hardware-software monitoring tools.",
      "Optimizing performance, reducing latency in API and real-time data streams, and enhancing cross-platform responsiveness.",
      "Collaborating in multidisciplinary engineering workflows, driving innovation across AI, robotics, and modern web frameworks.",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "SimplifyNote",
    location: "Remote",
    period: "July 2024 - August 2025",
    responsibilities: [
      "Engineered scalable and responsive UI components using React.js and Tailwind CSS, improving page load performance by 30%",
      "Optimized API integration and state management, reducing data-fetch latency by 25%",
      "Collaborated in an Agile environment using Git workflows, reducing UI defects by 40% across releases",
      "Enhanced cross-browser and cross-device compatibility, supporting 10+ screen sizes with consistent UX",
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

export * from "./projects";

// Awards
export const awards: any[] = [];

// Achievements
export const achievements = [
  "Completed multiple web development challenges and personal projects to strengthen frontend skills.",
  "Recognized for creative UI implementation and clean designs.",
  "Active learner in modern web frameworks and JavaScript ecosystems.",
];

// References
export const references: any[] = [];

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
