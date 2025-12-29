'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import RequestAccessModal from './RequestAccessModal';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-deep-space/50 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-space font-bold text-ghost-white">ProCo</span>
            <span className="text-data-green text-xs">®</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#technology"
              className="text-ghost-white/80 hover:text-data-green transition-colors duration-300"
            >
              Technology
            </a>
            <a
              href="#use-cases"
              className="text-ghost-white/80 hover:text-data-green transition-colors duration-300"
            >
              Use Cases
            </a>
            <a
              href="#lab"
              className="text-ghost-white/80 hover:text-data-green transition-colors duration-300"
            >
              The Lab
            </a>
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-data-green/10 border border-data-green text-data-green rounded-lg hover:bg-data-green/20 transition-all duration-300"
          >
            Request Access
          </motion.button>
        </div>
      </motion.nav>

      <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

