"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiAcademicCap } from "react-icons/hi";

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Old Dominion University",
    location: "Norfolk, VA",
    period: "May 2025 - Present",
    type: "Research",
    points: [
      "Develop and maintain secure competition platform AIC²: AI Cybersecurity Competition Portal using Next.js, React, Apollo Client, and NestJS microservices",
      "Troubleshoot and resolve containerization and dependency issues in Docker environment",
      "Assist in front-end development with React.js and Material-UI to prototype research interfaces",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Accenture",
    location: "Hyderabad, India",
    period: "Dec 2022 - July 2024",
    type: "Full-time",
    points: [
      "Completed comprehensive training in MEAN stack development, specializing in MongoDB, Express.js, Angular, and Node.js",
      "Developed Inspire BPO - an intelligent solution platform for Accenture Operations Estimator",
      "Designed and administered database infrastructure, optimizing data storage and retrieval for efficient application performance",
    ],
  },
  {
    title: "Java Full Stack Developer Intern",
    company: "Pramati",
    location: "Hyderabad, India",
    period: "Jul 2022 - Sep 2022",
    type: "Internship",
    points: [
      "Developed two projects: Portal for farmers to sell produce and Poultry management system",
      "Utilized Java technologies, including Spring Boot, for back-end development",
      "Conducted unit testing and resolved bugs to ensure project quality",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional journey and contributions
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500"></div>

              {/* Timeline Items */}
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg z-10"
                    ></motion.div>
                  </div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="card-gradient rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                          {exp.period}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {exp.type}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                        <HiBriefcase className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {exp.location}
                      </p>

                      {/* Responsibilities */}
                      <ul className="space-y-2">
                        {exp.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-primary-500 mr-2 mt-1">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center mb-10">
              <HiAcademicCap className="inline-block w-8 h-8 mr-2 text-primary-500" />
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                    2024 - Present
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Master of Computer Science
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                  Old Dominion University
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Norfolk, Virginia
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  GPA: 3.54/4.0
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card-gradient rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
                    2018 - 2022
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  B.Tech in Computer Science
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-1">
                  CMR Technical Campus, JNTU
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Hyderabad, India
                </p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  GPA: 7.21/10.0
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
