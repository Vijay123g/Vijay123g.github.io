"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CyberCup.ai – AI Cybersecurity Competition Platform",
    description:
      "Built a full-stack platform using Next.js, React, and NestJS with integrated containerized JupyterLab environments. Implemented JWT authentication, CI/CD pipelines, and microservices architecture using Docker and Kubernetes.",
    tech: [
      "Next.js",
      "React",
      "NestJS",
      "Docker",
      "Kubernetes",
      "JWT",
      "JupyterLab",
    ],
    liveUrl: "https://cybercup.ai/",
    featured: true,
    category: "AI & Security",
  },
  {
    title: "AI Interview Assistant",
    description:
      "Developed an intelligent interview preparation tool using React and Node.js integrated with OpenAI API. Features include dynamic question generation, real-time answer evaluation, and comprehensive chat history storage for tracking progress.",
    tech: ["React", "Node.js", "Express", "OpenAI API", "MongoDB"],
    githubUrl: "#",
    category: "AI Application",
  },
  {
    title: "Inspire BPO Platform",
    description:
      "Built an intelligent solution platform for Accenture Operations using the MEAN stack. Designed comprehensive dashboard, developed RESTful APIs, and optimized database performance for efficient business process operations.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js", "REST API"],
    category: "Enterprise",
  },
  {
    title: "ERP for Education",
    description:
      "Comprehensive enterprise resource planning system designed specifically for educational institutions. Manages student records, attendance, grades, and administrative workflows with role-based access control.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Hibernate"],
    category: "Enterprise",
  },
  {
    title: "Poultry Management System",
    description:
      "Full-featured web application for managing poultry farm operations including inventory tracking, sales management, health monitoring, and comprehensive reporting for farm optimization.",
    tech: ["Java", "Spring Boot", "MySQL", "Bootstrap"],
    category: "Web Application",
  },
  {
    title: "Farmers Portal",
    description:
      "E-commerce platform enabling farmers to directly sell their produce to consumers and businesses. Features include product listings, order management, payment integration, and real-time inventory tracking.",
    tech: ["Java", "Spring Boot", "MySQL", "REST API"],
    category: "E-Commerce",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my technical projects and accomplishments
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative card-gradient rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                  project.featured
                    ? "lg:col-span-2 border-primary-500 dark:border-primary-500"
                    : ""
                }`}
              >
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
