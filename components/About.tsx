'use client';

import { motion } from 'framer-motion';

export default function About() {
  const certifications = [
    { name: 'M.Sc. Dietetics & Nutrition', icon: '🎓' },
    { name: 'Clinical Dietitian', icon: '🏥' },
    { name: 'PCOS/PCOD Specialist', icon: '💪' },
    { name: '3+ Years Experience', icon: '⭐' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-[500px] rounded-3xl overflow-hidden glass-card">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/20">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-[var(--primary)]/20 flex items-center justify-center">
                      <span className="text-7xl">👩‍⚕️</span>
                    </div>
                    <p className="text-[var(--text-secondary)] font-playfair text-xl">
                      Dt. Yogita Bansal
                    </p>
                    <p className="text-[var(--text-muted)] mt-2">
                      Clinical Dietitian
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-[var(--primary)]/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <span className="text-[var(--primary)] font-medium uppercase tracking-wider text-sm">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[var(--text-primary)] mt-2 mb-6">
              Transforming Lives Through{' '}
              <span className="text-gradient">Evidence-Based Nutrition</span>
            </h2>

            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Hello! I am <strong className="text-[var(--text-primary)]">Dt. Yogita Bansal</strong>, a certified Clinical Dietitian based in Pinjore, Haryana, dedicated to helping individuals achieve their health goals through personalized, evidence-based nutrition plans.
              </p>
              <p>
                My approach combines <strong className="text-[var(--text-primary)]">scientific research</strong> with practical lifestyle modifications. I believe in creating sustainable habits rather than imposing restrictions. Every individual is unique, and so is their path to wellness.
              </p>
              <p>
                Whether you are looking to <strong className="text-[var(--primary)]">lose weight</strong>, manage <strong className="text-[var(--primary)]">PCOS/PCOD</strong>, or address other health concerns through proper nutrition, I am here to guide you every step of the way.
              </p>
            </div>

            {/* Certifications */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 rounded-xl flex items-center gap-3"
                >
                  <span className="text-2xl">{cert.icon}</span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Specializations */}
            <div className="mt-8">
              <h3 className="text-lg font-playfair font-semibold text-[var(--text-primary)] mb-4">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Weight Management',
                  'PCOS/PCOD',
                  'Diabetes',
                  'Thyroid',
                  'Heart Health',
                  'Gut Health',
                ].map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[var(--gradient-start)] text-[var(--primary)] text-sm rounded-full"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary mt-8"
            >
              Book a Consultation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}