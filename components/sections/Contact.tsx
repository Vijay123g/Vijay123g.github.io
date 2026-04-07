"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { HiMail, HiLocationMarker, HiPhone, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your email service)
    const mailtoLink = `mailto:vijayguntuku10@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const contactInfo = [
    {
      icon: HiMail,
      title: "Email",
      value: "vijayguntuku10@gmail.com",
      link: "mailto:vijayguntuku10@gmail.com",
    },
    {
      icon: HiLocationMarker,
      title: "Location",
      value: "Norfolk, Virginia, USA",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/vijay-guntuku-2739431a4/",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "@Vijay123g",
      link: "https://github.com/Vijay123g",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Let's connect and discuss how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Feel free to reach out through any of these channels. I'm
                  always open to discussing new projects, opportunities, or
                  collaborations.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      whileHover={{ x: 5 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={
                              info.link.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.link.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-primary-600 dark:text-primary-400 hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 dark:text-gray-400">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Resume Download */}
              <div className="pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Resume
                </h4>
                <a
                  href="/assets/pdf/Vijay_Guntuku_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <HiDownload className="w-5 h-5" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Connect on Social Media
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Vijay123g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300">
                      <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vijay-guntuku-2739431a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-primary-600 dark:group-hover:bg-primary-600 transition-all duration-300">
                      <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-gradient rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
