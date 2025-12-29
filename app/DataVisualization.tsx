'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DataVisualization() {
  const [dataPoints, setDataPoints] = useState<Array<{ id: number; value: number; x: number; y: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const generateDataPoints = () => {
      const points = [];
      for (let i = 0; i < 50; i++) {
        points.push({
          id: i,
          value: Math.floor(Math.random() * 1000),
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
      }
      setDataPoints(points);
    };

    generateDataPoints();
    const interval = setInterval(generateDataPoints, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="technology" className="relative py-32 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-space font-bold text-ghost-white mb-6">
            The Architecture of <span className="text-data-green">ProCo</span>
          </h2>
          <p className="text-xl text-ghost-white/70 max-w-3xl mx-auto">
            ProCo provides the infrastructure. <span className="text-data-green">fela.ai</span> provides the insight.
            Together, they redefine how businesses interact with massive data streams.
          </p>
        </motion.div>

        {/* Data Stream Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl p-12 min-h-[500px]"
        >
          {/* Floating Data Points */}
          <div className="relative w-full h-full">
            {dataPoints.map((point) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, 1, 1, 0],
                  x: `${point.x}%`,
                  y: `${point.y}%`,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: point.id * 0.05,
                }}
                className="absolute"
              >
                <div className="text-data-green/50 font-mono text-xs">
                  {point.value}
                </div>
              </motion.div>
            ))}

            {/* Center Stats */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-space font-bold text-data-green mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      99.9%
                    </motion.span>
                  </div>
                  <div className="text-ghost-white/70">Processing Accuracy</div>
                </motion.div>

                <div className="grid grid-cols-3 gap-8 mt-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-space font-bold text-ghost-white mb-1">
                      <CountUp end={247} />ms
                    </div>
                    <div className="text-ghost-white/50 text-sm">Avg Response</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-space font-bold text-ghost-white mb-1">
                      <CountUp end={1.2} decimal={1} />B
                    </div>
                    <div className="text-ghost-white/50 text-sm">Data Points/Day</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-space font-bold text-ghost-white mb-1">
                      <CountUp end={24} />/7
                    </div>
                    <div className="text-ghost-white/50 text-sm">Uptime</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CountUp({ end, decimal = 0 }: { end: number; decimal?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count.toFixed(decimal)}</>;
}

