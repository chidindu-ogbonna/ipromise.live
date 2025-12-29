'use client';

import { motion } from 'framer-motion';

export default function ComplianceFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="lab" className="relative py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-space font-bold text-ghost-white">ProCo</span>
              <span className="text-data-green text-xs">®</span>
            </div>
            <p className="text-ghost-white/60 text-sm leading-relaxed mb-4">
              A Technology-First Enterprise specializing in advanced AI infrastructure and data processing solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, color: '#00FF41' }}
                href="#"
                className="text-ghost-white/60 hover:text-data-green transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#00FF41' }}
                href="#"
                className="text-ghost-white/60 hover:text-data-green transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, color: '#00FF41' }}
                href="#"
                className="text-ghost-white/60 hover:text-data-green transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-ghost-white font-space font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  fela.ai Platform
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Data Processing Engine
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Enterprise API
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-ghost-white font-space font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-ghost-white/60 hover:text-data-green transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-ghost-white/50 text-sm">
              <p>
                © {currentYear} ProCo Ltd. All rights reserved.
              </p>
              <p className="mt-1">
                Registered under the <span className="text-data-green">Nigeria Startup Act 2022</span>
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-ghost-white/40">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-data-green rounded-full animate-pulse" />
                <span>All Systems Operational</span>
              </span>
              <span>RC 1234567</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

