"use client"
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Subscription Module",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Redux", "Tailwind CSS", "ASP.NET", "LLM", "Stripe", "Material UI"],
    description: "End-to-end implementation of a Subscription Module using React, Redux, and ASP.NET, featuring dynamic plan-based UI restrictions and Role-Based Access Control (RBAC) for granular user permissions.",
    image: "./images/subscription.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 2,
    title: "Notifications Module",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Redux", "Tailwind CSS", "ASP.NET", "CRUD", "Web API", "ElasticSearch", "Material UI"],
    description: "Delivered a full-stack In-App Notification system (ASP.NET & React), creating API triggers for task completion and designing the entire user interface for real-time alerts.",
    image: "./images/notifications.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 3,
    title: "Sales Agent",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Tailwind CSS", "ASP.NET", "LLM", "Material UI"],
    description: "Implemented an interactive Sales Agent UI to automate product inquiries and guide users through Reccopilot’s subscription plans and features, driving informed purchasing decisions.",
    image: "./images/sales-agent.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 4,
    title: "HireHub",
    category: "personal",
    role: "Designer & Developer",
    technologies: [
      "Next",
      "React",
      "Node.js",
      "PostgreSQL",
      "Apache Kafka",
      "Redis",
      "Gemini AI",
      "Docker",
      "Microservices",
      "Cloudinary",
    ],
    description: "Architected microservices recruitment system with Gemini AI and Kafka, enabling async workflows and boosting throughput by 40%.",
    image: "./images/hire-hub.png",
    githubUrl: "https://github.com/Afreen4115/JOB-SEARCH-APP",
  },
  {
    id: 5,
    title: "Email Integration Module",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "ASP.NET", "HTML"],
    description: "Architected a comprehensive email notification system comprising 50+ integrated email templates to automate critical workflows like assessment reminders and interview scheduling.",
    image: "./images/email-designing.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 6,
    title: "Settings Module",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Redux", "Tailwind CSS", "ASP.NET", "CRUD", "Web API", "ElasticSearch", "Material UI"],
    description: "Led redesign of Settings module, built team management backend and dynamic onboarding workflows that auto-configure applicant experiences based on admin settings.",
    image: "./images/settings-flow.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 7,
    title: "Analytics Dashboard",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Tailwind CSS", "Material UI"],
    description: "Integrated data-intensive backend APIs into a React/Redux Analytics Dashboard, utilizing Material UI (Fuse) to visualize critical business metrics.",
    image: "./images/analytics.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 8,
    title: "Explainable AI",
    category: "team",
    role: "Researcher & Developer",
    technologies: ["Python", "CNN", "GradCAM", "TensorFlow"],
    description: "Built this Explainable AI project using Grad-CAM to visualize deep learning decisions for pneumonia prediction on chest X-rays. It leverages transfer learning with MobileNet V2 to achieve 89.67% accuracy.",
    image: "./images/explainable-ai.png",
    githubUrl: "https://github.com/Afreen4115/ExplainableAI",
  },
  {
    id: 9,
    title: "ChatterBox",
    category: "personal",
    role: "Backend & Infrastructure Lead",
    technologies: [
      "Next",
      "React",
      "Node.js",
      "Socket.io",
      "RabbitMQ",
      "Redis",
      "Docker",
      "AWS",
      "MongoDB",
      "Microservices",
      "Cloudinary",
    ],
    description: "Engineered a high-performance messaging platform utilizing Socket.io for real-time communication. Reduced latency by 35% through Redis caching and RabbitMQ asynchronous message queues.",
    image: "./images/chat-app.png",
    githubUrl: "https://github.com/Afreen4115/Realtime-Messaging-App",
  },
  {
    id: 10,
    title: "Library Management System",
    category: "team",
    role: "Designer & Developer",
    technologies: ["Java", "JDBC", "MySQL", "OOP"],
    description: "Developed a Library Management System using Java and MySQL, applying OOP principles for efficient book search and CRUD operations.",
    image: "./images/library.png",
    githubUrl: "https://github.com/Afreen4115/Library-Management",
  },
  {
    id: 11,
    title: "FizziShop",
    category: "personal",
    role: "Designer & Developer",
    technologies: ["Next", "React", "GSAP", "Prismic", "Three.js"],
    description: "Created a scroll-animated 3D landing page for the fictional soda brand Fizzi using Next.js 14, GSAP, Prismic, and Three.js. This project features interactive 3D models and engaging animations tailored for a unique e-commerce experience.",
    image: "./images/fizzi-shop.png",
    liveUrl: "https://fizzishop.vercel.app/",
    githubUrl: "https://github.com/Afreen4115/Fizzi",
  },
  {
    id: 12,
    title: "AI Mock-Interviewer",
    category: "personal",
    role: "Designer & Developer",
    technologies: ["Next", "React", "Drizzle ORM", "Clerk", "Gemini", "Postgres"],
    description: "Designed and developed a full-stack AI mock interview application using Next.js and React, featuring AI-driven interview simulations, robust data handling with Drizzle ORM, and secure authentication via Clerk.",
    image: "./images/ai-interview-mocker.png",
    liveUrl: "https://ai-interview-mocker-jade.vercel.app/",
    githubUrl: "https://github.com/Afreen4115/Ai-interview-mocker",
  },
  {
    id: 13,
    title: "QuickEats",
    category: "personal",
    role: "Designer & Developer",
    technologies: ["Express", "React", "MongoDB", "JWT", "Multer"],
    description: "Developed QuickEats, a full-stack MERN food delivery platform featuring vendor dashboards, customer browsing, JWT authentication, image uploads, and scalable RESTful APIs.",
    image: "./images/quick-eats.png",
    liveUrl: "https://quickeats-frontend.vercel.app/",
    githubUrl: "https://github.com/Afreen4115/QuickEats",
  },
  {
    id: 14,
    title: "Bone Marrow Donation",
    category: "team",
    role: "Designer & Developer",
    technologies: [
      "Express",
      "React",
      "MongoDB",
      "JWT",
      "Multer",
      "Stripe",
      "Docker",
    ],
    description: "Developed a MERN-based web application connecting patients and hospitals with bone marrow donors, with secure authentication.",
    image: "./images/bone-marrow.png",
    liveUrl: "https://main--keen-rabanadas-dd964b.netlify.app/",
    githubUrl: "https://github.com/Afreen4115/Bone-Marrow-Donation",
  },
  {
    id: 15,
    title: "Travel Tour",
    category: "personal",
    role: "Designer & Developer",
    technologies: ["React", "AOS Library"],
    description: "Created a travel tour UI landing page using React, featuring a dynamic layout with AOS animations for smooth scrolling.",
    image: "./images/travel-tour.png",
    liveUrl: "https://traveltour-ui-eta.vercel.app/",
    githubUrl: "https://github.com/Afreen4115/traveltour_ui",
  },
  {
    id: 16,
    title: "Brick Breaker Game",
    category: "team",
    role: "Designer & Developer",
    technologies: ["Python", "Pygame"],
    description: "Created a classic brick breaker game using Python and Pygame, featuring selectable difficulty levels and real-time score display.",
    image: "./images/brick-breaker.png",
    githubUrl: "https://github.com/Afreen4115/Brick-Breaker-Game",
  },
  {
    id: 17,
    title: "Help Center Guides",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Redux", "Tailwind CSS", "ASP.NET", "LLM", "HTML", "Material UI"],
    description: "Established a 50+ article Help Center and enhanced the Chat Assistant UI to provide context-aware redirections, instantly guiding users to relevant documentation based on their queries.",
    image: "./images/guides.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  },
  {
    id: 18,
    title: "Quality Assurance & Feature Delivery",
    category: "professional",
    role: "Software Development Engineer I",
    technologies: ["React", "Redux", "Tailwind CSS", "ASP.NET", "LLM", "ElasticSearch", "Material UI"],
    description: "I ensured platform stability by resolving over 250 bugs (50+ critical) and delivering 20+ complex user stories. I modernized the user experience by implementing Dark Mode, designing 20+ custom empty states, and optimizing 50% of the website for fully responsive mobile accessibility.",
    image: "./images/all-features.jpeg",
    liveUrl: "https://www.reccopilot.com/"
  }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-surface/5 to-surface/[0.02] backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#0d9488] backdrop-blur-sm rounded-full border border-white/10 text-sm text-white">
            {project.category === "professional" ? "Professional" : "Personal"}
          </span>
        </div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="absolute top-4 left-4 flex gap-2"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1e293b] backdrop-blur-sm rounded-lg border border-white/10 hover:bg-[#1e293b]/90 transition-colors"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#1e293b] backdrop-blur-sm rounded-lg border border-white/10 hover:bg-[#1e293b]/90 transition-colors"
            >
              <Github className="w-5 h-5 text-white" />
            </a>
          )}

        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-accent text-sm mb-3">{project.role}</p>
        <p className="text-foreground/80 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-foreground/5 border border-border rounded-full text-sm text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 3D Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 pointer-events-none"
        style={{
          background: "var(--primary)",
          opacity: isHovered ? 0.1 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}


export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [filter, setFilter] = useState<"all" | "professional" | "personal" | "team">(
    "all"
  );

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative py-32 bg-gradient-to-b from-background to-surface overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(var(--primary)/0.1_1px,transparent_1px),linear-gradient(90deg,var(--primary)/0.1_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            style={{ fontSize: "3.5rem", fontWeight: 700 }}
          >
            Portfolio
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            A showcase of professional engineering, distributed systems, and creative full-stack experiments.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Filter className="w-5 h-5 text-muted-foreground" />
          {(["all", "professional", "personal", "team"] as const).map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg transition-all ${filter === category
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "bg-foreground/5 text-muted-foreground hover:text-foreground border border-border hover:border-foreground/20"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
