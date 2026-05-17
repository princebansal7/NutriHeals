'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '🔬',
    title: 'Evidence-Based Nutrition',
    description: 'Scientifically proven approaches to diet and wellness',
  },
  {
    icon: '📋',
    title: 'Personalized Meal Planning',
    description: 'Custom plans tailored to your unique body and lifestyle',
  },
  {
    icon: '🚫',
    title: 'No Crash Dieting',
    description: 'Sustainable changes that work for the long term',
  },
  {
    icon: '🥗',
    title: 'Healthy Habits, Not Restrictions',
    description: 'Focus on adding nutrition, not eliminating foods',
  },
  {
    icon: '🤝',
    title: 'Continuous Support',
    description: 'Ongoing guidance and adjustments to your plan',
  },
  {
    icon: '🎯',
    title: 'Practical & Sustainable',
    description: 'Realistic plans that fit into your daily routine',
  },
  {
    icon: '🏠',
    title: 'Customized to Lifestyle',
    description: 'Plans that work with your schedule and preferences',
  },
  {
    icon: '💻',
    title: 'Online & Offline Consultations',
    description: 'Flexible options to suit your needs',
  },
];

export default function WhyChooseUs() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            The NutriHeals{' '}
            <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We go beyond typical diet plans to create lasting transformation
          </p>
        </motion.div>

        {/* Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-14 h-14 rounded-xl bg-(--primary)/10 flex items-center justify-center text-2xl flex-shrink-0"
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 className="text-lg font-playfair font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted mt-1">
                  {feature.description}
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm ml-auto"
              >
                ✓
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Traditional Dieting */}
              <div className="p-8 bg-red-50/50">
                <h3 className="text-lg font-semibold text-red-600 mb-4">
                  ❌ Traditional Dieting
                </h3>
                <ul className="space-y-3">
                  {[
                    'Crash diets that are unsustainable',
                    'Extreme calorie restrictions',
                    'Elimination of entire food groups',
                    'Quick fixes with no lasting results',
                    'One-size-fits-all approach',
                    'No professional guidance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="text-red-500">×</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NutriHeals Approach */}
              <div className="p-8 bg-green-50/50">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  ✅ The NutriHeals Approach
                </h3>
                <ul className="space-y-3">
                  {[
                    'Sustainable lifestyle changes',
                    'Balanced nutrition intake',
                    'Include all food groups in moderation',
                    'Long-term results with maintenance',
                    'Personalized to your body type',
                    'Expert dietitian guidance',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}