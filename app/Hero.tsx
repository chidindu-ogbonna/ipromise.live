'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import RequestAccessModal from './RequestAccessModal';

export default function Hero() {
  const ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ position: 'relative' }}>
      {/* Glowing gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-data-green/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-space font-bold text-ghost-white mb-6 tracking-tight"
        >
          Intelligence <br />
          <span className="bg-gradient-to-r from-data-green to-blue-400 bg-clip-text text-transparent">
            Re-engineered
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-ghost-white/70 mb-4 max-w-3xl mx-auto"
        >
          Empowering the next generation of digital decisions with{' '}
          <span className="text-data-green font-semibold">fela.ai</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-ghost-white/50 mb-12 text-sm"
        >
          Where predictive modeling meets real-time processing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center"
        >
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-data-green text-deep-space font-semibold rounded-lg hover:bg-data-green/90 transition-all duration-300"
          >
            Request Access
          </motion.button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent z-10" />
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transform perspective-1000 rotate-x-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-white/10 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.1s' }} />
                <div className="h-4 bg-data-green/20 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <RequestAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

