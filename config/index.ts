import {
  Database,
  Github,
  Globe,
  Linkedin,
  Mail,
  Server,
  Twitter,
} from "lucide-react";

export const tags = ["#FULLSTACK", "#REACT", "#NEXTJS", "#NODEJS"];

export const testimonials = [
  { text: "Clean code and fast delivery. Highly recommended!", stars: 5 },
  { text: "Transformed our vision into a polished product.", stars: 5 },
  { text: "Great communication throughout the project.", stars: 5 },
];

export const skills = [
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React / Next.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB / SQL", level: 80 },
  { name: "Tailwind CSS", level: 95 },
];

export const services = [
  {
    label: "Building User Interfaces",
    title: "UI/UX Design",
    description:
      "Creating intuitive and engaging digital solutions that put users first.",
  },
  {
    label: "Building Functional Solutions",
    title: "Web Development",
    description:
      "Full stack web applications with modern frameworks and best practices.",
  },
  {
    label: "Maintaining Visual Identities",
    title: "Branding",
    description:
      "Cohesive visual systems that communicate your unique brand story.",
  },
  {
    label: "Bringing Ideas Alive",
    title: "Animation Design",
    description: "Smooth, purposeful animations that enhance user engagement.",
  },
  {
    label: "Creating User-Centered Products",
    title: "Product Design",
    description: "End-to-end product development from concept to launch.",
  },
];

export const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

export const projects = [
  {
    title: "EzyRent",
    description:
      "A real estate rental platform for finding and renting properties easily.",
    tech: ["React.js", "Nextjs", "Nestjs", "PostgreSQL"],
    link: "https://ezyrent-web.vercel.app",
    image: {
      dark: "/images/ezyrent_dark.png",
      light: "/images/ezyrent_light.png",
    },
  },
  {
    title: "Restaurant Chat Bot",
    description:
      "A real-time chatbot built with Express and Socket.io for user interaction.",
    tech: ["Node.js", "Express", "Socket.io"],
    link: "https://bot.hostless.app",
    image: {
      dark: "/images/bot_dark.jpg",
      light: "/images/bot_light.png",
    },
  },
  {
    title: "Medical Imaging and Clinical Services Platform",
    description:
      "A platform that gives users access to remote booking of medical imaging and clinical services, from the convenience of their homes.",
    tech: ["Nextjs", "MongoDB", "Tailwind CSS"],
    link: "https://alheri.vercel.app",
    image: {
      dark: "/images/amics_dark.png",
      light: "/images/amics_light.png",
    },
  },
  {
    title: "Desktop Only Admin Dashboard",
    description:
      "A comprehensive dashboard with multiple pages and data visualization.",
    tech: ["React.js", "CSS"],
    link: "https://first-admin-dashboard.vercel.app/",
    image: {
      dark: "/images/adminD_dark.png",
      light: "/images/adminD_light.png",
    },
  },
  {
    title: "URL Shortener",
    description:
      "An app that creates short versions of long URLs for easy sharing.",
    tech: ["Node.js", "Express", "MongoDB"],
    link: "https://short-clicks-frontend.vercel.app/",
    image: {
      dark: "/images/url-shortener_dark.png",
      light: "/images/url-shortener_light.png",
    },
  },

  {
    title: "Game List App",
    description:
      "A website displaying trending games from the RAWG video games API.",
    tech: ["React", "CSS", "REST API"],
    link: "https://game-list-app.vercel.app/",
    image: {
      dark: "/images/game-list-app_dark.png",
      light: "/images/game-list-app_light.png",
    },
  },
];

export const stats = [
  { number: "10+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Technologies" },
];

export const expertise = [
  { icon: Globe, label: "Frontend" },
  { icon: Server, label: "Backend" },
  { icon: Database, label: "Database" },
];

export const socials = [
  {
    icon: Github,
    href: "https://github.com/mikkybeardless",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/michael-igashi-833914268/",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/IgashiMichael", label: "Twitter" },
  { icon: Mail, href: "mailto:igashimichael@gmail.com", label: "Email" },
];
