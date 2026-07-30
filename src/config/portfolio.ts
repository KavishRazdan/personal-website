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
