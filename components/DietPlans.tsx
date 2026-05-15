'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const dietPlans = [
  {
    category: 'Weight Management',
    items: [
      { name: 'Weight Loss', icon: '⚖️', description: 'Sustainable fat loss with healthy eating habits', slug: 'weight-loss' },
      { name: 'Weight Gain', icon: '💪', description: 'Healthy muscle building and weight gain plans', slug: 'weight-gain' },
    ],
  },
  {
    category: 'PCOS / PCOD',
    items: [
      { name: 'PCOS/PCOD Management', icon: '🌸', description: 'Hormonal balance through targeted nutrition', slug: 'pcos-pcod' },
    ],
  },
  {
    category: 'Medical Conditions',
    items: [
      { name: 'Diabetes Management', icon: '🩺', description: 'Blood sugar control through diet planning', slug: 'diabetes' },
      { name: 'Hypertension', icon: '💓', description: 'Blood pressure management diet plans', slug: 'hypertension' },
      { name: 'Cardiac Health', icon: '❤️', description: 'Heart-friendly diet for cardiovascular wellness', slug: 'cardiac-health' },
      { name: 'Renal Disease', icon: '🫘', description: 'Kidney-friendly diet management', slug: 'renal-disease' },
      { name: 'Fatty Liver', icon: '🫁', description: 'Liver health restoration through nutrition', slug: 'fatty-liver' },
      { name: 'Thyroid Disorders', icon: '🦋', description: 'Thyroid balancing diet plans', slug: 'thyroid-disorders' },
      { name: 'Cholesterol Management', icon: '🧬', description: 'Healthy cholesterol levels through diet', slug: 'cholesterol' },
      { name: 'Hormonal Imbalance', icon: '⚖️', description: 'Balance hormones naturally through diet', slug: 'hormonal-imbalance' },
    ],
  },
  {
    category: 'Gastrointestinal',
    items: [
      { name: 'Acidity & GERD', icon: '🔥', description: 'Acid reflux management through diet', slug: 'acidity-gerd' },
      { name: 'Constipation', icon: '🚽', description: 'Fibre-rich diet for healthy digestion', slug: 'constipation' },
      { name: 'Bloating', icon: '🎈', description: 'Reduce bloating with proper nutrition', slug: 'bloating' },
    ],
  },
  {
    category: 'Specialized',
    items: [
      { name: 'Celiac Disease', icon: '🌾', description: 'Gluten-free diet plans for celiac patients', slug: 'celiac-disease' },
    ],
  },
];

export default function DietPlans() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 gradient-bg">
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[var(--text-primary)] mt-2 mb-4">
            Customized Diet Plans for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Comprehensive nutrition solutions tailored to your specific health requirements and lifestyle
          </p>
        </motion.div>

        {/* Diet Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {dietPlans.map((category, catIndex) =>
            category.items.map((plan, planIndex) => (
              <motion.div
                key={`${catIndex}-${planIndex}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-semibold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {plan.slug ? (
                    <Link
                      href={`/services/${plan.slug}`}
                      className="flex-1 py-2 text-sm font-medium text-center text-[var(--primary)] border border-[var(--primary)]/30 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      Learn More →
                    </Link>
                  ) : (
                    <button
                      onClick={scrollToContact}
                      className="flex-1 py-2 text-sm font-medium text-[var(--primary)] border border-[var(--primary)]/30 rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      Get Plan →
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Don&apos;t see your condition listed?
          </p>
          <button
            onClick={scrollToContact}
            className="btn-secondary"
          >
            Discuss Your Specific Needs
          </button>
        </motion.div>
      </div>
    </section>
  );
}