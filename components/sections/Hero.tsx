"use client";

import { motion } from "framer-motion";
import { HiDownload, HiMail, HiCode } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const handleDownloadResume = () => {
    // Link to your resume PDF
    window.open("/assets/pdf/Vijay_Guntuku_Resume.pdf", "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container-custom"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Picture */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src="/assets/img/profile.JPG"
                alt="Vijay Guntuku"
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm{" "}
            <span className="text-gradient">Vijay Guntuku</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          >
            Full-Stack Developer specializing in scalable web applications and microservices
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            2+ years of experience building production-grade applications with React, Node.js, and Docker.
            Currently developing AI cybersecurity platforms at Old Dominion University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <HiCode className="w-5 h-5" />
              <span>View Projects</span>
            </a>

            <button
              onClick={handleDownloadResume}
              className="group px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <HiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="group px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              <HiMail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Vijay123g"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub"
            >
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-guntuku-2739431a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn"
            >
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </div>
            </a>
            <a
              href="mailto:vijayguntuku10@gmail.com"
              className="group"
              aria-label="Email"
            >
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                <HiMail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
