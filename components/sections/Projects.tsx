"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink } from "react-icons/hi";

const projects = [
  {
    title: "CyberCup.ai – AI Cybersecurity Competition Platform",
    description:
      "Developed a scalable full-stack AI cybersecurity competition platform using React, Next.js, Apollo Client, and NestJS microservices. Designed and deployed Docker-based containerized environments, integrated REST APIs for real-time data flow, and built responsive UI components with Material-UI, improving system reliability by ~40%.",
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "Docker",
      "Apollo Client",
      "Material-UI",
      "REST API",
    ],
    liveUrl: "https://cybercup.ai/",
    featured: true,
    category: "Production Platform",
  },
  {
    title: "Inspire BPO – Enterprise Platform",
    description:
      "Built and maintained a production MEAN stack application for Accenture's Inspire BPO platform. Designed optimized MongoDB schemas improving data retrieval efficiency by ~25%, developed RESTful APIs for scalable backend services, and implemented Angular UI components serving enterprise operations.",
    tech: ["MongoDB", "Express.js", "Angular", "Node.js", "REST API"],
    category: "Enterprise Production",
  },
  {
    title: "Enterprise Resource Planning for Education",
    description:
      "Designed and developed a comprehensive ERP system for educational institutions with role-based dashboards, student management, attendance tracking, and reporting modules. Published research work in Mukt Shabd Journal showcasing the system architecture and implementation.",
    tech: ["Java", "Spring Boot", "MySQL", "Hibernate", "Thymeleaf"],
    category: "Full-Stack Application",
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
              Production-grade applications demonstrating full-stack expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className={`group relative card-gradient rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${
                  project.featured
                    ? "border-primary-500 dark:border-primary-500"
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
                {project.liveUrl && (
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <HiExternalLink className="w-4 h-4" />
                      <span>View Live</span>
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
