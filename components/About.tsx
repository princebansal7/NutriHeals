'use client';

import { motion } from 'framer-motion';

export default function About() {
  const certifications = [
    { name: 'M.Sc. Dietetics & Nutrition', icon: '🎓' },
    { name: 'Qualified Clinical Dietitian', icon: '🏥' },
    { name: 'PMOS Specialist', icon: '💪' },
    { name: '2.5+ Years Experience', icon: '⭐' },
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
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-125 rounded-3xl overflow-hidden glass-card">
                <div className="w-full h-full flex flex-col justify-center bg-linear-to-br from-(--primary)/10 to-(--accent)/20 px-8 py-10">
                  {/* Compact profile header */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-white/70 border border-primary/20">
                      <span className="font-playfair font-bold text-primary text-xl">YB</span>
                    </div>
                    <div>
                      <p className="font-playfair font-bold text-text-primary text-xl leading-tight">Dt. Yogita Bansal</p>
                      <p className="text-primary text-[11px] font-semibold uppercase tracking-wider mt-0.5">Clinical Dietitian</p>
                    </div>
                  </div>
                  {/* Credentials list */}
                  {[
                    { label: 'Qualification', value: 'M.Sc. Dietetics & Nutrition' },
                    { label: 'Speciality', value: 'Clinical & Therapeutic Nutrition' },
                    { label: 'Experience', value: '2.5+ Years of Practice' },
                    { label: 'Location', value: 'Chandigarh, India' },
                    { label: 'Clients', value: '500+ Lives Transformed' },
                    { label: 'Approach', value: 'Evidence-Based & Personalised' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 border-b border-primary/10 py-2.5 last:border-0">
                      <p className="text-xs text-text-muted w-24 shrink-0 pt-0.5">{item.label}</p>
                      <p className="text-sm text-text-primary font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-(--primary)/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants}>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-6">
              Transforming Lives Through{' '}
              <span className="text-gradient">Evidence-Based Nutrition</span>
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hello! I am <strong className="text-text-primary">Dt. Yogita Bansal</strong>, a qualified Clinical Dietitian based in Chandigarh, dedicated to helping individuals achieve their health goals through personalized, evidence-based nutrition plans.
              </p>
              <p>
                My approach combines <strong className="text-text-primary">scientific research</strong> with practical lifestyle modifications. I believe in creating sustainable habits rather than imposing restrictions. Every individual is unique, and so is their path to wellness.
              </p>
              <p>
                Whether you are looking to <strong className="text-primary">lose weight</strong>, manage <strong className="text-primary">PMOS</strong>, or address other health concerns through proper nutrition, I am here to guide you every step of the way.
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
                  <span className="text-sm font-medium text-text-primary">
                    {cert.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Specializations */}
            <div className="mt-8">
              <h3 className="text-lg font-playfair font-semibold text-text-primary mb-4">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Weight Management',
                  'PMOS',
                  'Diabetes',
                  'Thyroid',
                  'Heart Health',
                  'Gut Health',
                ].map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-(--gradient-start) text-primary text-sm rounded-full"
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