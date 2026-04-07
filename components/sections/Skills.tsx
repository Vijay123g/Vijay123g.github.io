"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSpring,
  SiAngular,
  SiDocker,
  SiGit,
  SiKubernetes,
  SiGooglecloud,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { HiCode, HiServer, HiCloud } from "react-icons/hi";
import { FaDatabase } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Material-UI", icon: HiCode, color: "#007FFF" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: HiServer, color: "#E0234E" },
      { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: HiCode, color: "#007396" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Azure", icon: HiCloud, color: "#0089D6" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "BigQuery", icon: FaDatabase, color: "#4285F4" },
    ],
  },
];

export default function Skills() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
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
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technical proficiency across multiple programming languages,
              frameworks, and tools
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card-gradient rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={
                          isInView
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0, opacity: 0 }
                        }
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 cursor-pointer">
                          <Icon
                            className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110"
                            style={{
                              color:
                                skill.color ||
                                "currentColor",
                            }}
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
