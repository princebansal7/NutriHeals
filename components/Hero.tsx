'use client';

import { motion, type Variants } from 'framer-motion';

const WHATSAPP_SVG = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.137.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-64 h-64 bg-[var(--accent)]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--primary-light)]/10 rounded-full blur-3xl"
        />

        {/* Floating Nutrition Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-32 right-32 text-6xl opacity-20"
        >
          🥗
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-40 left-40 text-5xl opacity-20"
        >
          🥑
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/2 right-1/4 text-4xl opacity-20"
        >
          🥦
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4 flex flex-wrap gap-2 justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--surface)]/80 rounded-full text-sm text-[var(--primary)] font-medium shadow-sm">
                <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse-gentle" />
                Registered Dietitian
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 rounded-full text-sm text-[var(--primary)] font-medium">
                📍 Pinjore, Haryana
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-[var(--text-primary)] leading-tight mb-4"
            >
              Your Path to{' '}
              <span className="text-gradient">Healthy Living</span>{' '}
              Starts Here
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Personalized diet plans for weight loss, PCOS/PCOD, diabetes & more — crafted by{' '}
              <strong className="text-[var(--primary)]">Dt. Yogita Bansal</strong>, Clinical Dietitian.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary text-lg px-8 py-4"
              >
                Book Consultation
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary text-lg px-8 py-4"
              >
                View Diet Plans
              </button>
              <a
                href="https://wa.me/918168233617"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-lg px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all duration-300"
              >
                {WHATSAPP_SVG}
                WhatsApp
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-3xl font-playfair font-bold text-[var(--primary)]">3+</span>
                <span className="text-sm text-[var(--text-muted)]">Years<br />Experience</span>
              </div>
              <div className="w-px h-12 bg-[var(--text-muted)]/30" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-playfair font-bold text-[var(--primary)]">5000+</span>
                <span className="text-sm text-[var(--text-muted)]">Happy<br />Clients</span>
              </div>
              <div className="w-px h-12 bg-[var(--text-muted)]/30" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-playfair font-bold text-[var(--primary)]">4.9</span>
                <span className="text-sm text-[var(--text-muted)]">Rating<br />⭐⭐⭐⭐⭐</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="w-full h-[500px] rounded-3xl overflow-hidden glass-card">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--gradient-start)] to-[var(--gradient-end)]">
                  <div className="text-center">
                    <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-[var(--primary)]/15 flex items-center justify-center">
                      <span className="text-8xl">👩‍⚕️</span>
                    </div>
                    <p className="text-[var(--text-primary)] font-playfair text-2xl font-semibold">
                      Dt. Yogita Bansal
                    </p>
                    <p className="text-[var(--text-secondary)] mt-1 text-base">
                      Clinical Dietitian &amp; Nutritionist
                    </p>
                    <div className="flex justify-center gap-2 mt-4">
                      {['🥗', '🥑', '🫐', '🥦'].map((emoji, i) => (
                        <span key={i} className="text-2xl">{emoji}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-xl">
                    ✅
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">100%</p>
                    <p className="text-xs text-[var(--text-muted)]">Personalized Plans</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent)]/30 flex items-center justify-center text-xl">
                    🔬
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--text-primary)]">Evidence-Based</p>
                    <p className="text-xs text-[var(--text-muted)]">Clinical Approach</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-[var(--primary)]/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
