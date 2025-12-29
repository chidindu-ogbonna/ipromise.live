'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Products() {
  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold text-ghost-white mb-6">
            Our <span className="text-data-green">Products</span>
          </h2>
          <p className="text-xl text-ghost-white/70">
            AI-powered solutions transforming industries
          </p>
        </motion.div>

        {/* fela.ai Product Card */}
        <motion.a
          href="https://fela.ai"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="block max-w-5xl mx-auto bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-data-green/50 transition-all duration-300 group"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Images */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-data-green/10 to-blue-500/10" />

              {/* Image Carousel Effect */}
              <div className="relative h-full">
                <motion.div
                  animate={{
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[70%]"
                >
                  <Image
                    src="/content/media/felaai-1.png"
                    alt="fela.ai prediction dashboard"
                    fill
                    className="object-contain rounded-lg shadow-2xl"
                  />
                </motion.div>

                {/* Floating secondary images */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-8 right-8 w-32 h-32 opacity-40 group-hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/content/media/felaai-2.png"
                    alt="fela.ai interface"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    rotate: [0, -2, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-8 left-8 w-32 h-32 opacity-40 group-hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/content/media/felaai-3.png"
                    alt="fela.ai predictions"
                    fill
                    className="object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
              </div>

              {/* Glowing effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-data-green/20 to-blue-500/20 blur-3xl"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 mb-6">
                  <span className="px-3 py-1 bg-data-green/10 border border-data-green/30 rounded-full text-data-green text-sm font-semibold">
                    Sports Prediction Platform
                  </span>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="w-2 h-2 bg-data-green rounded-full"
                  />
                </div>

                {/* Logo/Title */}
                <h3 className="text-4xl md:text-5xl font-space font-bold text-ghost-white mb-4 group-hover:text-data-green transition-colors duration-300">
                  fela.ai
                </h3>

                {/* Description */}
                <p className="text-ghost-white/70 leading-relaxed text-lg mb-6">
                  AI-powered sports prediction platform that generates accurate predictions using advanced machine learning algorithms. Analyze teams, track performance, and make data-driven decisions.
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'Real-time match predictions',
                    'Advanced statistical analysis',
                    'Historical data insights',
                    'Multiple sports coverage'
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-1.5 h-1.5 bg-data-green rounded-full" />
                      <span className="text-ghost-white/60">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-data-green text-lg font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Visit fela.ai</span>
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}

