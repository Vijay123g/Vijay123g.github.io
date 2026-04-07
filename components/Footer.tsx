"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Vijay Guntuku. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Vijay123g"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-guntuku-2739431a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vgunt003@odu.edu"
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-all duration-300"
              aria-label="Email"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
