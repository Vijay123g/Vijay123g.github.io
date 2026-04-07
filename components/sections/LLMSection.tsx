"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiLightningBolt,
  HiChip,
  HiCode,
  HiSparkles,
} from "react-icons/hi";

const llmFeatures = [
  {
    icon: HiChip,
    title: "LLM Integration in CyberCup",
    description:
      "Integrated large language models into the AI cybersecurity platform for intelligent code analysis, automated feedback generation, and real-time assistance for competition participants.",
    highlights: ["OpenAI API", "Custom Prompting", "Context Management"],
  },
  {
    icon: HiSparkles,
    title: "Prompt Engineering",
    description:
      "Developed sophisticated prompt engineering strategies for various AI applications, optimizing model outputs for technical accuracy and contextual relevance in educational and enterprise settings.",
    highlights: ["Chain-of-Thought", "Few-Shot Learning", "Template Design"],
  },
  {
    icon: HiCode,
    title: "AI-Assisted UI Workflows",
    description:
      "Built intelligent user interfaces that leverage AI to enhance user experience, including smart autocomplete, content generation, and personalized recommendations based on user behavior.",
    highlights: ["React Integration", "Real-time Responses", "UX Optimization"],
  },
  {
    icon: HiLightningBolt,
    title: "API-Based AI Features",
    description:
      "Architected scalable API services integrating multiple AI providers (OpenAI, Anthropic) for features like interview preparation, code review automation, and intelligent chatbots.",
    highlights: ["RESTful APIs", "Rate Limiting", "Error Handling"],
  },
];

export default function LLMSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="llm" className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50 dark:from-primary-950 dark:via-blue-950 dark:to-purple-950 opacity-50"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-full text-sm font-semibold">
                🤖 AI & Machine Learning
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              LLM & AI <span className="text-gradient">Applications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building intelligent systems with Large Language Models and
              cutting-edge AI technologies
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {llmFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group"
                >
                  <div className="h-full card-gradient rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                    {/* Hover Gradient Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-blue-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {feature.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-block card-gradient rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                AI Technologies & Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "OpenAI GPT-4",
                  "Anthropic Claude",
                  "LangChain",
                  "Vector Databases",
                  "RAG Systems",
                  "Fine-tuning",
                  "Embeddings",
                  "Semantic Search",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-blue-600 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
