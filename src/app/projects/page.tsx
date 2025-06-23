"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module
import Image from "next/image";
import { useRef, useState } from "react"; // Import useRef and useEffect
import {
  FaCheckCircle,
  FaExternalLinkAlt,
  FaFlask,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaMobile, // Added for popup icon
  FaTimes, // Added for live link icon
  FaWindowMaximize,
} from "react-icons/fa";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const projects = [
  {
    title: "Ranktip",
    image: "/projects/perfomance.jpg",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Socket.io",
      "Django",
      "Real-time",
      "MUI",
      "Semrush",
      "Lighthouse",
      "Site Audit",
      "Performance",
    ],
    description: [
      { text: "Ranktip is a " },
      {
        text: "cutting-edge performance analytics platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed to help organizations optimize their workflows and drive better results. It provides ",
      },
      { text: "real-time insights", highlight: true, color: "green" },
      {
        text: " into team productivity, project progress, and resource allocation. The platform leverages ",
      },
      { text: "AI-powered recommendations", highlight: true, color: "purple" },
      {
        text: " to suggest actionable improvements and automate routine tasks. As a Fullstack Developer, I was responsible for both the ",
      },
      {
        text: "frontend and backend architecture",
        highlight: true,
        color: "orange",
      },
      { text: ", ensuring seamless integration and high performance." },
    ],
    meta: {
      productOwner: "Softylines",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "6 months",
      category: "SEO & Analytics",
      location: "Tunis",
    },
    link: "#",
    liveLink: "https://www.ostedhy.com",
    status: "Currently in Development",
    images: [
      "/projects/perfomance.jpg",
      "/projects/perfomance-1.jpg",
      "/projects/perfomance-2.jpg",
      "/projects/perfomance-3.jpg",
      "/projects/perfomance-4.jpg",
    ],
    tasks: [
      {
        title: "Project Planning and Scrum Management",
        description:
          "Defined the project roadmap, ensured sprint planning, and managed team activities to maintain smooth development cycles. Conducted regular standups and retrospectives to track progress and resolve blockers.",
        tags: ["Agile", "Scrum Master", "Project Management"],
      },
      {
        title: "Fullstack Architecture Setup",
        description:
          "Designed and implemented the architecture for the project, integrating a scalable backend with a responsive frontend. Ensured seamless API communication and optimized database design for efficient performance.",
        tags: ["React", "TypeScript", "Django", "PostgreSQL"],
      },
      {
        title: "Performance Audit and Optimization",
        description:
          "Conducted comprehensive performance audits using Lighthouse and implemented optimizations to achieve 90+ scores across all metrics. Optimized Core Web Vitals and reduced Time to Interactive by 40%.",
        tags: ["Lighthouse", "Core Web Vitals", "Performance Optimization"],
      },
      {
        title: "SEO and Keyword Research",
        description:
          "Performed detailed keyword research and implemented SEO best practices. Improved organic traffic by 60% through strategic meta tags, structured data, and content optimization.",
        tags: ["SEO", "Keyword Research", "Semrush", "Google Analytics"],
      },
      {
        title: "Site Audit and Technical SEO",
        description:
          "Conducted thorough technical SEO audits, identifying and fixing issues related to crawlability, indexing, and mobile responsiveness. Implemented structured data and improved site architecture.",
        tags: ["Technical SEO", "Site Audit", "Schema Markup"],
      },
      {
        title: "Real-Time Data Integration",
        description:
          "Developed and integrated real-time data features such as live course progress tracking, notifications, and activity logs to enhance user engagement.",
        tags: ["WebSocket", "API Integration", "React", "Node.js"],
      },
      {
        title: "Deployment and Continuous Integration",
        description:
          "Set up CI/CD pipelines to automate testing and deployment processes. Deployed the project to a scalable cloud environment, ensuring optimal performance and uptime.",
        tags: ["Docker", "Git - Gitlab", "CI/CD", "DevOps"],
      },
    ],
    technologies: [
      "React js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Docker",
      "SCSS",
      "MUI",
      "Redux",
      "Formik",
      "WebSocket",
      "SEO",
      "Git - Gitlab",
    ],
  },
  {
    title: "Takana",
    image: "/projects/takana.jpg",
    tags: ["React Js", "TypeScript", "Node Js", "Docker", "SCSS", "E-Learning"],
    description: [
      {
        text: "Takana is a ",
      },
      {
        text: "comprehensive Learning Management System (LMS)",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed specifically for the educational needs of Senegal. The platform provides an ",
      },
      {
        text: "intuitive interface",
        highlight: true,
        color: "green",
      },
      {
        text: " for students and educators to manage courses, track progress, and facilitate ",
      },
      {
        text: "interactive learning experiences",
        highlight: true,
        color: "purple",
      },
      {
        text: ". As a ",
      },
      {
        text: "Fullstack Developer",
        highlight: true,
        color: "orange",
      },
      {
        text: ", I was responsible for developing both the frontend and backend components, ensuring a ",
      },
      {
        text: "seamless and responsive user experience",
        highlight: true,
        color: "indigo",
      },
      {
        text: " while maintaining ",
      },
      {
        text: "high performance standards",
        highlight: true,
        color: "teal",
      },
      {
        text: ".",
      },
    ],
    meta: {
      productOwner: "Takana Academy",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "1 month",
      category: "E-Learning",
      location: "Senegal",
    },
    link: "#",
    liveLink: "https://takanaacademy.com",
    status: "Live",
    images: [
      "/projects/takana.jpg",
      "/projects/takana-1.png",
      "/projects/takana-2.png",
      "/projects/takana-3.png",
    ],
    tasks: [
      {
        title: "Project Planning and Scrum Management",
        description:
          "Led the development team through agile sprints, ensuring timely delivery of features while maintaining code quality. Conducted regular code reviews and team meetings to align development goals.",
        tags: ["Agile", "Scrum Master", "Project Management"],
      },
      {
        title: "Next.js and Strapi Integration",
        description:
          "Implemented a headless CMS architecture using Strapi as the backend and Next.js for the frontend. Set up efficient data fetching and state management for optimal performance.",
        tags: ["Next.js", "Strapi", "Headless CMS", "API Integration"],
      },
      {
        title: "UI/UX Development",
        description:
          "Created a modern and responsive user interface using Ant Design and Tailwind CSS. Implemented custom components and animations to enhance user experience across all devices.",
        tags: ["Ant Design", "Tailwind CSS", "UI/UX", "Responsive Design"],
      },
      {
        title: "SEO Optimization",
        description:
          "Implemented comprehensive SEO strategies including meta tags, structured data, and sitemap generation. Optimized content and performance for better search engine visibility.",
        tags: ["SEO", "Meta Tags", "Structured Data", "Performance"],
      },
      {
        title: "Data Management",
        description:
          "Developed efficient data fetching strategies using Next.js features like getStaticProps and getServerSideProps. Implemented caching mechanisms for improved performance.",
        tags: ["Data Fetching", "Caching", "Next.js", "Performance"],
      },
      {
        title: "Version Control and Deployment",
        description:
          "Managed codebase using Git and GitLab, implementing CI/CD pipelines for automated testing and deployment. Ensured code quality through pull requests and code reviews.",
        tags: ["Git", "GitLab", "CI/CD", "Code Review"],
      },
    ],
    technologies: [
      "Next.js",
      "Strapi",
      "Ant Design",
      "Tailwind CSS",
      "Git - GitLab",
      "SEO",
      "TypeScript",
      "SCSS",
      "Redux",
    ],
  },
  {
    title: "Alfehriya",
    image: "/projects/alfehriya.png",
    tags: ["React Js", "TypeScript", "Node Js", "Docker", "SCSS", "E-Learning"],
    description: [
      {
        text: "Alfehriya is a ",
      },
      {
        text: "comprehensive e-learning platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed for educational institutions in Morocco. The platform provides a ",
      },
      {
        text: "modern and intuitive interface",
        highlight: true,
        color: "green",
      },
      {
        text: " for managing courses, student progress, and educational content. As a Fullstack Developer, I was responsible for developing both the ",
      },
      {
        text: "frontend and backend components",
        highlight: true,
        color: "purple",
      },
      {
        text: ", ensuring seamless integration and optimal performance. The platform features ",
      },
      {
        text: "advanced course management",
        highlight: true,
        color: "orange",
      },
      {
        text: ", ",
      },
      {
        text: "real-time progress tracking",
        highlight: true,
        color: "pink",
      },
      {
        text: ", and ",
      },
      {
        text: "interactive learning tools",
        highlight: true,
        color: "indigo",
      },
      {
        text: " to enhance the educational experience.",
      },
    ],
    meta: {
      productOwner: "Alfehriya academy",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "1 months",
      category: "E-Learning",
      location: "Morocco",
    },
    link: "#",
    liveLink: "https://alfehriya.com",
    status: "Live",
    images: [
      "/projects/alfehriya.png",
      "/projects/alfehriya-2.jpg",
      "/projects/alfehriya-3.jpg",
      "/projects/alfehriya-4.jpg",
      "/projects/alfehriya-5.jpg",
    ],
    tasks: [
      {
        title: "Project Planning and Scrum Management",
        description:
          "Led the development team through agile sprints, ensuring timely delivery of features while maintaining code quality. Conducted regular code reviews and team meetings to align development goals.",
        tags: ["Agile", "Scrum Master", "Project Management"],
      },
      {
        title: "Fullstack Architecture Setup",
        description:
          "Designed and implemented the architecture for the project, integrating a scalable backend with a responsive frontend. Ensured seamless API communication and optimized database design for efficient performance.",
        tags: ["Node.js", "Express.js", "React", "Typescript"],
      },
      {
        title: "UI/UX Development",
        description:
          "Created a modern and responsive user interface using Material-UI and Tailwind CSS. Implemented custom components and animations to enhance user experience across all devices.",
        tags: ["Material-UI", "Tailwind CSS", "UI/UX", "Responsive Design"],
      },
      {
        title: "Course Management System",
        description:
          "Developed a comprehensive course management system with features for content creation, student enrollment, progress tracking, and assessment tools.",
        tags: ["Course Management", "Content Creation", "Progress Tracking"],
      },
      {
        title: "Real-Time Features",
        description:
          "Implemented real-time features including live progress tracking, notifications, and interactive learning tools to enhance student engagement.",
        tags: ["WebSockets", "Real-time Updates", "Interactive Learning"],
      },
      {
        title: "Testing and Quality Assurance",
        description:
          "Conducted thorough testing using Jest and Cypress to ensure platform stability and reliability. Implemented automated testing in the CI/CD pipeline.",
        tags: ["Jest", "Cypress", "QA", "Automated Testing"],
      },
      {
        title: "Deployment and DevOps",
        description:
          "Set up and managed CI/CD pipelines using GitLab CI. Deployed the application to a cloud environment with proper monitoring and scaling capabilities.",
        tags: ["CI/CD", "DevOps", "Cloud Deployment", "Monitoring"],
      },
    ],
    technologies: [
      "React js",
      "TypeScript",
      "Node Js",
      "Docker",
      "SCSS",
      "MUI",
      "Redux",
      "Formik",
      "Git - Gitlab",
    ],
  },
  {
    title: "Taki Academy",
    image: "/projects/takiacademy-2.png",
    tags: ["React Js", "TypeScript", "Node Js", "Docker", "SCSS", "E-Learning"],
    description: [
      { text: "Taki Academy is a " },
      {
        text: "pioneering Learning Management System",
        highlight: true,
        color: "blue",
      },
      { text: " in Tunisia, revolutionizing education for " },
      { text: "300,000+ active users", highlight: true, color: "green" },
      { text: ". As the " },
      {
        text: "first comprehensive e-learning platform",
        highlight: true,
        color: "purple",
      },
      { text: " in the country, it creates a vibrant ecosystem connecting " },
      {
        text: "educational institutions, teachers, and students",
        highlight: true,
        color: "orange",
      },
      { text: ". The platform delivers " },
      { text: "innovative features", highlight: true, color: "indigo" },
      {
        text: " including course management, live sessions, progress tracking, and interactive learning tools. As a ",
      },
      { text: "Fullstack Developer", highlight: true, color: "teal" },
      {
        text: ", I engineered both frontend and backend components, ensuring ",
      },
      {
        text: "high performance and scalability",
        highlight: true,
        color: "pink",
      },
      { text: " to support our rapidly growing community." },
    ],
    meta: {
      productOwner: "Taki Academy",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "12 months",
      category: "E-Learning",
      location: "Tunisia",
    },
    link: "#",
    liveLink: "https://takiacademy.com",
    status: "Live",
    images: [
      "/projects/takiacademy-2.png",
      "/projects/takiacademy-1.png",
      "/projects/takiacademy.png",
    ],
    tasks: [
      {
        title: "Project Planning and Scrum Management",
        description:
          "Led the development team through agile sprints, ensuring timely delivery of features while maintaining code quality. Conducted regular code reviews and team meetings to align development goals.",
        tags: ["Agile", "Scrum Master", "Project Management"],
      },
      {
        title: "Fullstack Architecture Setup",
        description:
          "Designed and implemented a scalable architecture to handle 300k+ users. Integrated a robust backend with a responsive frontend, ensuring seamless API communication and optimized database design.",
        tags: ["Node.js", "Express.js", "React", "Typescript"],
      },
      {
        title: "UI/UX Development",
        description:
          "Created a modern and responsive user interface using Material-UI and Tailwind CSS. Implemented custom components and animations to enhance user experience across all devices.",
        tags: ["Material-UI", "Tailwind CSS", "UI/UX", "Responsive Design"],
      },
      {
        title: "Course Management System",
        description:
          "Developed a comprehensive course management system with features for content creation, student enrollment, progress tracking, and assessment tools.",
        tags: ["Course Management", "Content Creation", "Progress Tracking"],
      },
      {
        title: "Real-Time Features",
        description:
          "Implemented real-time features including live progress tracking, notifications, and interactive learning tools to enhance student engagement.",
        tags: ["WebSockets", "Real-time Updates", "Interactive Learning"],
      },
      {
        title: "Testing and Quality Assurance",
        description:
          "Conducted thorough testing using Jest and Cypress to ensure platform stability and reliability. Implemented automated testing in the CI/CD pipeline.",
        tags: ["Jest", "Cypress", "QA", "Automated Testing"],
      },
      {
        title: "Deployment and DevOps",
        description:
          "Set up and managed CI/CD pipelines using GitLab CI. Deployed the application to a cloud environment with proper monitoring and scaling capabilities.",
        tags: ["CI/CD", "DevOps", "Cloud Deployment", "Monitoring"],
      },
    ],
    technologies: [
      "React js",
      "TypeScript",
      "Node Js",
      "Docker",
      "SCSS",
      "MUI",
      "Redux",
      "Formik",
      "Git - Gitlab",
    ],
  },
  {
    title: "Tresovista",
    image: "/projects/tresovista-1.jpg",
    tags: ["React Js", "TypeScript", "Node Js", "Docker", "SCSS", "Finance"],
    description: [
      {
        text: "Tresovista is a ",
      },
      {
        text: "comprehensive financial management platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed for French users to manage their banking accounts, savings, and investments. The platform provides ",
      },
      {
        text: "real-time financial insights",
        highlight: true,
        color: "green",
      },
      {
        text: " and ",
      },
      {
        text: "automated budget tracking",
        highlight: true,
        color: "purple",
      },
      {
        text: " to help users make informed financial decisions.",
      },
    ],
    meta: {
      productOwner: "Tresovista Finance",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "8 months",
      category: "Finance & Banking",
      location: "France",
    },
    liveLink: "https://www.tresovista.com",
    status: "Live",
    images: [
      "/projects/tresovista.png",
      "/projects/tresovista-1.jpg",
      "/projects/tresovista-2.jpg",
    ],
    tasks: [
      {
        title: "Large Data Management & Performance",
        description:
          "Implemented efficient data handling strategies for large financial datasets using virtualization techniques. Optimized data loading and rendering performance through pagination, infinite scrolling, and data windowing.",
        tags: ["Data Virtualization", "Performance", "Large Data Sets"],
      },
      {
        title: "Interactive Dashboard Development",
        description:
          "Created a high-performance dashboard with drag-and-drop functionality for customizing financial widgets. Implemented virtualized lists and grids for smooth scrolling through large datasets.",
        tags: ["Drag & Drop", "Virtualization", "Dashboard"],
      },
      {
        title: "Real-time Data Processing",
        description:
          "Developed efficient real-time data processing system using WebSocket connections and optimized state management. Implemented data batching and throttling for handling high-frequency updates.",
        tags: ["WebSocket", "Real-time", "Performance"],
      },
      {
        title: "Advanced Data Visualization",
        description:
          "Built performant financial charts and graphs using virtualization techniques for handling large datasets. Implemented lazy loading and progressive rendering for complex visualizations.",
        tags: ["Data Visualization", "Virtualization", "Performance"],
      },
      {
        title: "Optimized Data Fetching",
        description:
          "Implemented efficient data fetching strategies with request batching, caching, and prefetching. Used virtual scrolling for handling large lists of transactions and financial records.",
        tags: ["Data Fetching", "Caching", "Virtualization"],
      },
      {
        title: "Performance Monitoring & Optimization",
        description:
          "Set up comprehensive performance monitoring and implemented optimizations for handling large datasets. Achieved optimal performance through code splitting, lazy loading, and efficient memory management.",
        tags: ["Performance", "Monitoring", "Optimization"],
      },
    ],
    technologies: [
      "React js",
      "TypeScript",
      "Node Js",
      "Docker",
      "SCSS",
      "MUI",
      "Redux",
      "Formik",
      "Git - Gitlab",
      "Chart.js",
      "WebSocket",
    ],
  },
  {
    title: "Wataawanou",
    image: "/projects/wata3awanou.webp",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Docker",
      "SCSS",
      "Education",
    ],
    description: [
      {
        text: "Wataawanou is a ",
      },
      {
        text: "comprehensive educational support platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed to facilitate peer-to-peer learning under teacher supervision. The platform includes a ",
      },
      {
        text: "mobile app",
        highlight: true,
        color: "green",
      },
      {
        text: " for students, a ",
      },
      {
        text: "robust backend",
        highlight: true,
        color: "purple",
      },
      {
        text: ", and a ",
      },
      {
        text: "backoffice system",
        highlight: true,
        color: "orange",
      },
      {
        text: " for teachers to monitor and guide student interactions. With over ",
      },
      {
        text: "200+ downloads",
        highlight: true,
        color: "pink",
      },
      {
        text: " on the Play Store, it has become a valuable tool for collaborative learning.",
      },
    ],
    meta: {
      productOwner: "Landolsi Mohamed ali",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "6 months",
      category: "Education",
      location: "Tunisia",
    },
    liveLink: "https://play.google.com/store/apps/details?id=com.wataawanou",
    status: "Live",
    images: [
      "/projects/wata3awanou.webp",
      "/projects/wata3awanou.png",
      "/projects/wata3awanou-1.png",
    ],
    tasks: [
      {
        title: "Mobile App Development",
        description:
          "Developed a cross-platform mobile application using React Native, implementing features for student interaction, content sharing, and real-time communication.",
        tags: ["React Native", "Mobile Development", "Cross-platform"],
      },
      {
        title: "Backend Architecture",
        description:
          "Built a scalable backend system using Node.js and Express, handling user authentication, data management, and real-time communication between students and teachers.",
        tags: ["Node.js", "Express", "API Development"],
      },
      {
        title: "Backoffice System",
        description:
          "Created an administrative interface for teachers to monitor student activities, manage content, and provide guidance in the learning process.",
        tags: ["Admin Panel", "Dashboard", "User Management"],
      },
      {
        title: "Real-time Features",
        description:
          "Implemented real-time communication features using WebSocket, enabling instant messaging and notifications between students and teachers.",
        tags: ["WebSocket", "Real-time", "Notifications"],
      },
      {
        title: "Play Store Deployment",
        description:
          "Managed the app deployment process on Google Play Store, including store listing optimization and maintaining a high rating with 200+ downloads.",
        tags: ["App Store", "Deployment", "Store Optimization"],
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "Docker",
      "SCSS",
      "MUI",
      "Redux",
      "WebSocket",
      "Git - Gitlab",
    ],
  },
  {
    title: "Softylines",
    image: "/projects/softylines.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Landing Page",
    ],
    description: [
      {
        text: "Softylines is a ",
      },
      {
        text: "modern and elegant landing page",
        highlight: true,
        color: "blue",
      },
      {
        text: " designed for a software development company. The website features a ",
      },
      {
        text: "sleek and professional design",
        highlight: true,
        color: "green",
      },
      {
        text: " with smooth animations and transitions. As a ",
      },
      {
        text: "Frontend Developer",
        highlight: true,
        color: "purple",
      },
      {
        text: ", I implemented ",
      },
      {
        text: "responsive layouts",
        highlight: true,
        color: "orange",
      },
      {
        text: " and ",
      },
      {
        text: "interactive elements",
        highlight: true,
        color: "pink",
      },
      {
        text: " to create an engaging user experience.",
      },
    ],
    meta: {
      productOwner: "Softylines",
      performance: "95+ Lighthouse",
      compatibility: "All devices",
      duration: "2 weeks",
      category: "Landing Page",
      location: "Tunisia",
    },
    link: "#",
    liveLink: "https://softylines.com",
    status: "Live",
    images: [
      "/projects/softylines.png",
      "/projects/softylines-1.png",
      "/projects/softylines-2.jpg",
      "/projects/softylines3.png",
    ],
    tasks: [
      {
        title: "UI/UX Design Implementation",
        description:
          "Implemented a modern and responsive design using Tailwind CSS, ensuring optimal user experience across all devices. Created custom components and animations to enhance visual appeal.",
        tags: ["Tailwind CSS", "UI/UX", "Responsive Design"],
      },
      {
        title: "Animation and Interactivity",
        description:
          "Integrated Framer Motion for smooth animations and transitions, creating an engaging and interactive user experience throughout the website.",
        tags: ["Framer Motion", "Animations", "Interactivity"],
      },
      {
        title: "Performance Optimization",
        description:
          "Optimized website performance through code splitting, lazy loading, and image optimization. Achieved 95+ Lighthouse scores across all metrics.",
        tags: ["Performance", "Lighthouse", "Optimization"],
      },
      {
        title: "SEO Implementation",
        description:
          "Implemented SEO best practices including meta tags, structured data, and semantic HTML to improve search engine visibility and ranking.",
        tags: ["SEO", "Meta Tags", "Structured Data"],
      },
      {
        title: "Cross-browser Compatibility",
        description:
          "Ensured consistent appearance and functionality across different browsers and devices through thorough testing and optimization.",
        tags: ["Cross-browser", "Testing", "Compatibility"],
      },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "SEO",
      "Git - Gitlab",
    ],
  },
  {
    title: "RH Recruitment",
    image: "/projects/rh.jpg",
    tags: ["Next.js", "React", "Material-UI", "Node.js", "Full Stack"],
    description: [
      {
        text: "RH Recruitment is a ",
      },
      {
        text: "comprehensive recruitment platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " that enables companies to post jobs and internships while allowing candidates to submit their applications. As a ",
      },
      {
        text: "Frontend Code Reviewer",
        highlight: true,
        color: "purple",
      },
      {
        text: ", I ensured ",
      },
      {
        text: "code quality and best practices",
        highlight: true,
        color: "green",
      },
      {
        text: " across the frontend implementation.",
      },
    ],
    meta: {
      productOwner: "RH Recruitment",
      performance: "90+ Lighthouse",
      compatibility: "All devices",
      duration: "3 months",
      category: "Full Stack Application",
      location: "Tunisia",
    },
    link: "#",
    liveLink: "https://rh-recruitment.com",
    status: "Live",
    images: ["/projects/rh.jpg", "/projects/rh-1.png", "/projects/rh-2.png"],
    tasks: [
      {
        title: "Code Review and Quality Assurance",
        description:
          "Conducted thorough code reviews of frontend implementations, ensuring adherence to best practices, code quality standards, and optimal performance.",
        tags: ["Code Review", "Quality Assurance", "Best Practices"],
      },
      {
        title: "Frontend Architecture Review",
        description:
          "Reviewed and provided feedback on the frontend architecture, component structure, and state management implementation using React and Next.js.",
        tags: ["Architecture", "React", "Next.js"],
      },
      {
        title: "UI/UX Implementation Review",
        description:
          "Evaluated the implementation of Material-UI components and custom UI elements, ensuring consistent design patterns and responsive layouts.",
        tags: ["Material-UI", "UI/UX", "Responsive Design"],
      },
      {
        title: "Performance Optimization Review",
        description:
          "Reviewed and suggested optimizations for frontend performance, including code splitting, lazy loading, and bundle size optimization.",
        tags: ["Performance", "Optimization", "Bundle Size"],
      },
      {
        title: "Security and Best Practices",
        description:
          "Ensured implementation of security best practices and proper handling of sensitive data in the frontend application.",
        tags: ["Security", "Best Practices", "Data Handling"],
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "Material-UI",
      "Node.js",
      "TypeScript",
      "Git - GitHub",
    ],
  },
  {
    title: "Transcribe",
    image: "/projects/transcribe.png",
    tags: ["React", "FastAPI", "Supabase", "Whisper", "Vosk"],
    description: [
      {
        text: "Transcribe is an advanced ",
      },
      {
        text: "real-time speech-to-text and text-to-speech platform",
        highlight: true,
        color: "blue",
      },
      {
        text: " with comprehensive file and user management capabilities. As a ",
      },
      {
        text: "Technical Mentor",
        highlight: true,
        color: "purple",
      },
      {
        text: ", I guided the development team in implementing ",
      },
      {
        text: "real-time dictation and audio processing",
        highlight: true,
        color: "green",
      },
      {
        text: " features.",
      },
    ],
    meta: {
      productOwner: "Transcribe Team",
      performance: "Real-time Processing",
      compatibility: "All devices",
      duration: "4 months",
      category: "AI Application",
      location: "Remote",
    },
    link: "#",
    // liveLink: "#",
    status: "Completed",
    images: [
      "/projects/transcribe.png",
      "/projects/transcribe-1.png",
      "/projects/transcribe-2.png",
      "/projects/transcribe-3.png",
    ],
    tasks: [
      {
        title: "Real-time Speech Processing",
        description:
          "Guided the implementation of real-time speech-to-text and text-to-speech functionality using Whisper and Vosk for accurate transcription.",
        tags: ["Whisper", "Vosk", "Real-time Processing"],
      },
      {
        title: "Backend Architecture",
        description:
          "Mentored the team in designing and implementing a robust FastAPI backend with Supabase integration for data persistence and user management.",
        tags: ["FastAPI", "Supabase", "Architecture"],
      },
      {
        title: "Frontend Development",
        description:
          "Provided guidance on React implementation, focusing on real-time audio processing, file management, and user interface design using Figma.",
        tags: ["React", "Figma", "UI/UX"],
      },
      {
        title: "System Integration",
        description:
          "Oversaw the integration of various components including speech recognition, audio processing, and file management systems.",
        tags: ["Integration", "System Design", "Architecture"],
      },
      {
        title: "Performance Optimization",
        description:
          "Mentored the team in optimizing real-time processing performance and implementing efficient file management solutions.",
        tags: ["Performance", "Optimization", "File Management"],
      },
    ],
    technologies: [
      "React",
      "FastAPI",
      "Supabase",
      "Whisper",
      "Vosk",
      "Figma",
      "TypeScript",
      "Git - GitHub",
    ],
  },
  // {
  //   title: "Party Planner",
  //   image: "/projects/party-planner.png",
  //   tags: ["Next.js", "React", "TypeScript", "Supabase", "Full Stack"],
  //   description: [
  //     {
  //       text: "Party Planner is a ",
  //     },
  //     {
  //       text: "venue reservation management system",
  //       highlight: true,
  //       color: "blue",
  //     },
  //     {
  //       text: " that enables administrators to manage venue bookings and track business performance. As a ",
  //     },
  //     {
  //       text: "Full Stack Developer",
  //       highlight: true,
  //       color: "purple",
  //     },
  //     {
  //       text: ", I implemented ",
  //     },
  //     {
  //       text: "admin dashboard with reservation management and analytics",
  //       highlight: true,
  //       color: "green",
  //     },
  //     {
  //       text: " to streamline venue operations and track business metrics.",
  //     },
  //   ],
  //   meta: {
  //     productOwner: "Party Planner",
  //     performance: "95+ Lighthouse",
  //     compatibility: "All devices",
  //     duration: "4 months",
  //     category: "Full Stack Application",
  //     location: "Remote",
  //   },
  //   link: "#",
  //   // liveLink: "https://party-planner.com",
  //   status: "Live",
  //   images: [
  //     "/projects/party-planner.png",
  //     "/projects/party-planner-1.png",
  //     "/projects/party-planner-2.png",
  //     "/projects/party-planner-3.png",
  //   ],
  //   tasks: [
  //     {
  //       title: "Category Browsing System",
  //       description:
  //         "Mentored the team in developing a comprehensive category browsing system for venues and services, with advanced filtering and search capabilities.",
  //       tags: ["Category System", "Search", "Filtering"],
  //     },
  //     {
  //       title: "Venue Reservation System",
  //       description:
  //         "Guided the implementation of a robust venue reservation system with real-time availability checking and booking management.",
  //       tags: ["Reservations", "Real-time", "Booking System"],
  //     },
  //     {
  //       title: "Service Provider Integration",
  //       description:
  //         "Mentored the team in creating a system for service providers to list and manage their offerings, including venue details and availability.",
  //       tags: ["Service Management", "Integration", "UI/UX"],
  //     },
  //     {
  //       title: "Client-Service Provider Communication",
  //       description:
  //         "Oversaw the development of a communication system between clients and service providers for venue inquiries and bookings.",
  //       tags: ["Communication", "Messaging", "Supabase"],
  //     },
  //     {
  //       title: "Booking Management",
  //       description:
  //         "Guided the implementation of a comprehensive booking management system with automated notifications and status updates.",
  //       tags: ["Booking", "Automation", "Management"],
  //     },
  //   ],
  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Supabase",
  //     "Figma",
  //     "Discord",
  //     "Git - GitHub",
  //   ],
  // },
];

export default function ProjectsPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showIframePopup, setShowIframePopup] = useState(false); // New state for iframe popup

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const openIframePopup = () => {
    setShowIframePopup(true);
  };

  const closeIframePopup = () => {
    setShowIframePopup(false);
  };

  const projectCardRef = useRef<HTMLButtonElement>(null);

  const selectedProject = projects[selectedIdx];

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      breakpoints: {
        "(min-width: 320px)": {
          slides: { perView: 1, spacing: 10 },
        },
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 30 },
        },
        "(min-width: 1280px)": {
          slides: { perView: 5, spacing: 10 },
        },
      },
      slides: { perView: 1, spacing: 10 },
    },
    []
  );

  return (
    <section className="mx-auto available">
      <h2 className="text-3xl font-sm text-black mb-1">
        Projects I&apos;ve worked on
      </h2>
      <p className="text-1xl font-medium text-slate-400 mb-4">
        Explore my collection of projects. I have worked on a lot of projects,
        here are some of them.
      </p>

      <div className="mb-8">
        <div className="flex gap-4 overflow-x-hidden relative">
          <div className="keen-slider pb-3" ref={sliderRef}>
            {projects.map((project, idx) => (
              <button
                key={idx}
                ref={idx === 0 ? projectCardRef : null}
                onClick={() => {
                  setSelectedIdx(idx);
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={`min-w-[220px] mb-2 keen-slider__slide max-w-[220px] h-full rounded-xl border-2 flex-shrink-0 shadow-sm transition-all flex flex-col items-center p-2 bg-white relative ${
                  idx === selectedIdx
                    ? "border-blue-500 shadow-lg"
                    : "border-transparent hover:border-blue-200"
                }`}
              >
                <div className="h-28 w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center mb-2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={220}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                  {project.status && (
                    <span className="absolute top-2 left-2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded shadow">
                      {project.status}
                    </span>
                  )}
                </div>
                <div className="font-semibold text-black text-base mb-1 truncate w-full text-left">
                  {project.title}
                </div>
                <div className="flex flex-wrap gap-1 w-full">
                  {project.tags?.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project?.tags?.length > 3 && (
                    <span className="text-xs text-gray-400">
                      +{project?.tags?.length - 3}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons and Dots */}
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={() => {
              const newIdx = Math.max(0, selectedIdx - 1);
              setSelectedIdx(newIdx);
              instanceRef.current?.prev();
            }}
            disabled={selectedIdx === 0}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <button
            onClick={() => {
              const newIdx = Math.min(projects.length - 1, selectedIdx + 1);
              setSelectedIdx(newIdx);
              instanceRef.current?.next();
            }}
            disabled={selectedIdx === projects.length - 1}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Selected Project Details */}
      <div className="bg-white rounded-2xl shadow border border-gray-100 p-6 mb-10">
        {/* Project Header with Decorative Background */}
        <div className="mb-4 relative">
          {/* Decorative Points Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-2 right-8 w-2 h-2 bg-blue-300 rounded-full opacity-40"></div>
            <div className="absolute top-6 right-16 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50"></div>
            <div className="absolute top-12 right-4 w-1 h-1 bg-pink-300 rounded-full opacity-60"></div>
            <div className="absolute top-8 right-24 w-2.5 h-2.5 bg-green-300 rounded-full opacity-30"></div>
            <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-yellow-300 rounded-full opacity-45"></div>
            <div className="absolute top-4 right-32 w-1 h-1 bg-indigo-300 rounded-full opacity-55"></div>
            <div className="absolute top-14 right-20 w-2 h-2 bg-red-300 rounded-full opacity-35"></div>
          </div>

          <h1 className="text-3xl text-black font-medium relative z-10">
            {selectedProject.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-1 relative z-10">
            {" "}
            {/* Added flex-wrap */}
            <div className="flex items-center justify-center gap-2">
              <p className="text-gray-600">{selectedProject.meta.location}</p>
              <p className="text-sm text-gray-500">
                Product Owner - {selectedProject.meta.productOwner}
              </p>
            </div>
            {/* CTA Buttons */}
            {selectedProject.liveLink && (
              <div className="flex gap-3 ml-0 md:ml-auto mt-4 md:mt-0 w-full md:w-auto">
                {" "}
                {/* Adjusted for responsiveness */}
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium w-1/2 md:w-auto justify-center"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <button
                  onClick={openIframePopup}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-300 text-sm font-medium w-1/2 md:w-auto justify-center"
                >
                  <FaWindowMaximize /> Quick View
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4"></div>

        {/* Images Grid */}
        <h2 className="text-xl text-black font-bold mb-3">Preview</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          {/* Main large image */}
          <div className="lg:col-span-2">
            {selectedProject.images && selectedProject.images[0] && (
              <div
                className="rounded-xl overflow-hidden bg-gray-100 w-full h-64 md:h-80 flex items-center justify-center group relative cursor-pointer"
                onClick={() => openLightbox(0)}
              >
                <Image
                  src={selectedProject.images[0]}
                  alt={selectedProject.title + " main image"}
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg tracking-wide">
                    Preview
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Small images grid - 2x2 */}
          <div className="grid grid-cols-2 gap-4">
            {selectedProject.images &&
              selectedProject.images.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden bg-gray-100 w-full h-32 md:h-36 flex items-center justify-center group relative cursor-pointer"
                  onClick={() => openLightbox(i + 1)}
                >
                  <Image
                    src={img}
                    alt={selectedProject.title + " image " + (i + 2)}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <span className="text-white font-semibold text-sm md:text-base tracking-wide">
                      Preview
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3 text-black">Description</h2>
          <div className="text-gray-700 leading-8">
            {(Array.isArray(selectedProject.description)
              ? selectedProject.description
              : [{ text: selectedProject.description }]
            ).map(
              (
                part: { text: string; highlight?: boolean; color?: string },
                idx: number
              ) =>
                part.highlight ? (
                  <span
                    key={idx}
                    className={`border px-2 py-1 rounded text-sm font-medium mx-0.5 ${
                      part.color === "blue"
                        ? "border-blue-300 bg-blue-50 text-blue-800"
                        : part.color === "green"
                        ? "border-green-300 bg-green-50 text-green-800"
                        : part.color === "purple"
                        ? "border-purple-300 bg-purple-50 text-purple-800"
                        : part.color === "orange"
                        ? "border-orange-300 bg-orange-50 text-orange-800"
                        : part.color === "red"
                        ? "border-red-300 bg-red-50 text-red-800"
                        : part.color === "indigo"
                        ? "border-indigo-300 bg-indigo-50 text-indigo-800"
                        : part.color === "teal"
                        ? "border-teal-300 bg-teal-50 text-teal-800"
                        : "border-gray-300 bg-gray-50 text-gray-800"
                    }`}
                  >
                    {part.text}
                  </span>
                ) : (
                  <span key={idx}>{part.text}</span>
                )
            )}
          </div>
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          {selectedProject.meta && (
            <>
              <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-all duration-300 hover:border-blue-400 hover:shadow-md cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <FaFlask className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-medium text-black">Duration</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl  font-medium text-black">
                    {selectedProject.meta.duration}
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg transition-all duration-300 hover:border-blue-400 hover:shadow-md cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <FaLayerGroup className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-medium text-black">Category</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium text-black">
                    {selectedProject.meta.category}
                  </span>
                </div>
              </div>
              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg transition-all duration-300 hover:border-blue-400 hover:shadow-md cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <FaMobile className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-medium text-black">
                    Compatibility
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium text-black">
                    {selectedProject.meta.compatibility}
                  </span>
                </div>
              </div>

              <div className="p-4 border-2 border-dashed border-gray-200 rounded-lg transition-all duration-300 hover:border-blue-400 hover:shadow-md cursor-pointer">
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-medium text-black">Location</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-medium text-black">
                    {selectedProject.meta.location}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="space-y-6">
          {selectedProject.tasks && selectedProject.tasks.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mb-3 text-black">Tasks</h2>
              <div className="space-y-4">
                {selectedProject.tasks.map((task, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <FaCheckCircle className="text-green-500 text-lg" />
                      <h3 className="font-semibold text-black">{task.title}</h3>
                    </div>
                    <p className="text-gray-700 ml-7">{task.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3 ml-7">
                      {task.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedProject.technologies &&
            selectedProject.technologies.length > 0 && (
              <div>
                <h2 className="text-xl font-bold mb-3 text-black">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
        </div>
      </div>

      {/* Lightbox for images */}
      {lightboxOpen && selectedProject.images && (
        <Lightbox
          mainSrc={selectedProject.images[photoIndex]}
          nextSrc={
            selectedProject.images[
              (photoIndex + 1) % selectedProject.images.length
            ]
          }
          prevSrc={
            selectedProject.images[
              (photoIndex + selectedProject.images.length - 1) %
                selectedProject.images.length
            ]
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + selectedProject.images.length - 1) %
                selectedProject.images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % selectedProject.images.length)
          }
          imageTitle={selectedProject.title}
          imageCaption={`Image ${photoIndex + 1} of ${
            selectedProject.images.length
          }`}
        />
      )}

      {/* Iframe Popup Modal */}
      {showIframePopup && selectedProject.liveLink && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4058be5e] bg-opacity-75">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                {selectedProject.title} Live Demo
              </h2>
              <button
                onClick={closeIframePopup}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-grow">
              <iframe
                src={selectedProject.liveLink}
                title={`${selectedProject.title} Live Demo`}
                className="w-full h-full border-0"
                allowFullScreen // Allows the iframe content to go fullscreen
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation" // Recommended for security with untrusted content
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
