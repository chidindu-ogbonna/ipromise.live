'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function FeatureGrid() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="use-cases" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold text-ghost-white mb-6">
            Built for <span className="text-data-green">Performance</span>
          </h2>
          <p className="text-xl text-ghost-white/70">
            Enterprise-grade infrastructure powered by cutting-edge AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Predictive Modeling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-data-green/50 transition-all duration-300"
          >
            <div className="mb-6">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-16 bg-gradient-to-br from-data-green/20 to-blue-500/20 rounded-2xl flex items-center justify-center"
              >
                <svg className="w-8 h-8 text-data-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </motion.div>
            </div>
            <h3 className="text-2xl font-space font-bold text-ghost-white mb-4">
              Predictive Modeling
            </h3>
            <p className="text-ghost-white/70 leading-relaxed">
              Advanced machine learning algorithms that forecast trends and behaviors with unprecedented accuracy.
            </p>
            <div className="mt-6 flex items-center text-data-green text-sm font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Feature 2: Real-time Processing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-data-green/50 transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-data-green/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-data-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-space font-bold text-ghost-white mb-4">
              Real-time Processing
            </h3>
            <p className="text-ghost-white/70 leading-relaxed mb-6">
              Process millions of data points per second with sub-millisecond latency for instant insights.
            </p>

            {/* Progress Bar Animation */}
            <div className="space-y-3">
              <div className="flex justify-between text-xs text-ghost-white/50">
                <span>Processing Speed</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-data-green to-blue-400"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center text-data-green text-sm font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>

          {/* Feature 3: Enterprise Infrastructure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-data-green/50 transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-data-green/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <div className="relative">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="w-8 h-1 bg-data-green rounded-full mb-1"
                    />
                  ))}
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-space font-bold text-ghost-white mb-4">
              Enterprise Infrastructure
            </h3>
            <p className="text-ghost-white/70 leading-relaxed">
              Bank-grade security, 99.99% uptime, and scalable architecture designed for global operations.
            </p>
            <div className="mt-6 flex items-center text-data-green text-sm font-semibold">
              <span>Learn more</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

