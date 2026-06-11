'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
    category: 'PMOS',
    items: [
      { name: 'PMOS Management', icon: '🌸', description: 'Formerly PCOS/PCOD, Hormonal balance through targeted nutrition', slug: 'pcos-pcod' },
    ],
  },
  {
    category: 'Medical Conditions',
    items: [
      { name: 'Diabetes Management', icon: '🍬', description: 'Blood sugar control through diet planning', slug: 'diabetes' },
      { name: 'Hypertension', icon: '💓', description: 'Blood pressure management diet plans', slug: 'hypertension' },
      { name: 'Cardiac Health', icon: '🫀', description: 'Heart-friendly diet for cardiovascular wellness', slug: 'cardiac-health' },
      { name: 'Renal Disease', icon: '🫘', description: 'Kidney-friendly diet management', slug: 'renal-disease' },
      { name: 'Fatty Liver', icon: '🩺', description: 'Liver health restoration through nutrition', slug: 'fatty-liver' },
      { name: 'Thyroid Disorders', icon: '🦋', description: 'Thyroid balancing diet plans', slug: 'thyroid-disorders' },
      { name: 'Cholesterol Management', icon: '🧬', description: 'Healthy cholesterol levels through diet', slug: 'cholesterol' },
      { name: 'Hormonal Imbalance', icon: '🔄', description: 'Balance hormones naturally through diet', slug: 'hormonal-imbalance' },
    ],
  },
  {
    category: 'Gastrointestinal',
    items: [
      { name: 'Acidity & GERD', icon: '🔥', description: 'Acid reflux management through diet', slug: 'acidity-gerd' },
      { name: 'Constipation', icon: '🌿', description: 'Fibre-rich diet for healthy digestion', slug: 'constipation' },
      { name: 'Bloating', icon: '🫧', description: 'Reduce bloating with proper nutrition', slug: 'bloating' },
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
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const allPlans = dietPlans.flatMap((cat) => cat.items);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            Customized Diet Plans for{' '}
            <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Comprehensive nutrition solutions tailored to your specific health requirements and lifestyle
          </p>
        </motion.div>

        {/* Diet Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPlans.map((plan, index) => (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass-card p-6 rounded-2xl cursor-pointer group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-(--primary)/10 flex items-center justify-center text-2xl group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    {plan.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-playfair font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-text-muted mt-1">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  {plan.slug ? (
                    <Link
                      href={`/services/${plan.slug}`}
                      className="flex-1 py-2 text-sm font-medium text-center text-primary border border-(--primary)/30 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                    >
                      Learn More
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                  ) : (
                    <button
                      onClick={scrollToContact}
                      className="flex-1 py-2 text-sm font-medium text-primary border border-(--primary)/30 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                    >
                      Get Plan
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary mb-4">
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