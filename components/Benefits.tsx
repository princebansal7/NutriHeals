'use client';

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const benefits = [
  {
    icon: '⚡',
    title: 'Better Energy',
    description: 'Feel more energized throughout the day with balanced nutrition',
    stat: 95,
    suffix: '%',
  },
  {
    icon: '⚖️',
    title: 'Sustainable Weight Loss',
    description: 'Lose weight in a healthy, maintainable way without crash diets',
    stat: 30,
    suffix: 'kg',
  },
  {
    icon: '🌿',
    title: 'Better Lifestyle',
    description: 'Develop healthy habits that last a lifetime',
    stat: 100,
    suffix: '%',
  },
  {
    icon: '🌸',
    title: 'Hormonal Balance',
    description: 'Regulate hormones naturally through proper nutrition',
    stat: 85,
    suffix: '%',
  },
  {
    icon: '🛡️',
    title: 'Improved Immunity',
    description: "Strengthen your body's natural defences",
    stat: 90,
    suffix: '%',
  },
  {
    icon: '🥗',
    title: 'Healthy Eating Habits',
    description: 'Transform your relationship with food',
    stat: 500,
    suffix: '+',
  },
  {
    icon: '🦠',
    title: 'Better Gut Health',
    description: 'Improve digestion and reduce digestive issues',
    stat: 80,
    suffix: '%',
  },
  {
    icon: '🔬',
    title: 'Scientific Guidance',
    description: 'Evidence-based nutrition backed by research',
    stat: 10,
    suffix: '+ yrs',
  },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] font-medium uppercase tracking-wider text-sm">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[var(--text-primary)] mt-2 mb-4">
            Transform Your Health with{' '}
            <span className="text-gradient">Proven Results</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Experience the life-changing benefits of personalized nutrition guidance
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6 rounded-2xl text-center group"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-playfair font-semibold text-[var(--text-primary)] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-4">
                {benefit.description}
              </p>
              <div className="text-3xl font-playfair font-bold text-[var(--primary)]">
                <AnimatedCounter
                  value={benefit.stat}
                  suffix={benefit.suffix}
                  isInView={isInView}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}