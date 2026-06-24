'use client';

import { motion, type Variants } from 'framer-motion';
import { WA_URL } from '@/lib/contact';

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
          className="absolute top-20 right-20 w-64 h-64 bg-(--accent)/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-(--primary-light)/10 rounded-full blur-3xl"
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
              {/* Clinical Dietitian badge */}
              <motion.span
                whileHover="hovered"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { y: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' },
                  hovered: { y: -4, boxShadow: '0 8px 22px rgba(45,90,61,0.18)' },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-sm text-primary font-medium cursor-default select-none overflow-hidden"
              >
                {/* shimmer sweep */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -skew-x-12 pointer-events-none"
                  variants={{ rest: { x: '-160%' }, hovered: { x: '260%', transition: { duration: 0.75, ease: 'easeInOut' } } }}
                />
                <motion.span
                  variants={{ rest: { scale: 1 }, hovered: { scale: 1.4 } }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 w-2 h-2 bg-primary rounded-full animate-pulse-gentle"
                />
                <span className="relative z-10">Clinical Dietitian</span>
              </motion.span>

              {/* Chandigarh badge */}
              <motion.span
                whileHover="hovered"
                initial="rest"
                animate="rest"
                variants={{
                  rest: { y: 0, boxShadow: '0 0px 0px rgba(45,90,61,0)' },
                  hovered: { y: -4, boxShadow: '0 8px 22px rgba(45,90,61,0.18)' },
                }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="relative inline-flex items-center gap-2 px-4 py-2 bg-(--primary)/10 rounded-full text-sm text-primary font-medium cursor-default select-none overflow-hidden"
              >
                {/* shimmer sweep */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent -skew-x-12 pointer-events-none"
                  variants={{ rest: { x: '-160%' }, hovered: { x: '260%', transition: { duration: 0.75, ease: 'easeInOut' } } }}
                />
                <motion.span
                  variants={{ rest: { y: 0 }, hovered: { y: [0, -5, 1, 0], transition: { duration: 0.55, times: [0, 0.35, 0.75, 1] } } }}
                  className="relative z-10 leading-none"
                >
                  📍
                </motion.span>
                <span className="relative z-10">Chandigarh</span>
              </motion.span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-text-primary leading-tight mb-4"
            >
              Your Path to{' '}
              <span className="text-gradient">Healthy Living</span>{' '}
              Starts Here
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Personalized diet plans for weight loss, PMOS, diabetes & more - crafted by{' '}
              <strong className="text-primary">Dt. Yogita Bansal</strong>, Qualified Clinical Dietitian.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary whitespace-nowrap"
              >
                Book Consultation
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary whitespace-nowrap"
              >
                View Diet Plans
              </button>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn whitespace-nowrap"
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
                <span className="text-3xl font-playfair font-bold text-primary">2.5+</span>
                <span className="text-sm text-text-muted">Years<br />Experience</span>
              </div>
              <div className="w-px h-12 bg-(--text-muted)/30" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-playfair font-bold text-primary">500+</span>
                <span className="text-sm text-text-muted">Happy<br />Clients</span>
              </div>
              <div className="w-px h-12 bg-(--text-muted)/30" />
              <div className="flex items-center gap-2">
                <span className="text-3xl font-playfair font-bold text-primary">4.9</span>
                <div>
                  <span className="text-sm text-text-muted block mb-1">Rating</span>
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star) => {
                      const fill = Math.min(1, Math.max(0, 4.9 - (star - 1)));
                      const clipW = fill * 24;
                      const id = `hero-star-${star}`;
                      const path = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";
                      return (
                        <svg key={star} className="w-4 h-4" viewBox="0 0 24 24">
                          <defs><clipPath id={id}><rect x="0" y="0" width={clipW} height="24" /></clipPath></defs>
                          <path d={path} fill="rgba(45,90,61,0.15)" />
                          <path d={path} fill="var(--primary)" clipPath={`url(#${id})`} />
                        </svg>
                      );
                    })}
                  </div>
                </div>
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
              <div className="w-full h-125 rounded-3xl overflow-hidden glass-card">
                <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-(--gradient-start) to-(--gradient-end) px-8">
                  <div className="text-center w-full">
                    {/* Monogram */}
                    <div className="relative w-28 h-28 mx-auto mb-7">
                      <div className="w-28 h-28 rounded-full flex items-center justify-center bg-white/60 border border-primary/20">
                        <span className="font-playfair font-bold text-primary" style={{ fontSize: '2.4rem' }}>YB</span>
                      </div>
                      <motion.div
                        initial={{ scale: 1.18, rotate: 0 }}
                        animate={{ scale: 1.18, rotate: 360 }}
                        transition={{ rotate: { duration: 35, repeat: Infinity, ease: 'linear' }, scale: { duration: 0 } }}
                        className="absolute inset-0 rounded-full border-2 border-dashed border-primary/25"
                      />
                    </div>
                    {/* Name — large & bold */}
                    <p className="font-playfair font-bold text-text-primary leading-tight mb-1" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)' }}>
                      Dt. Yogita Bansal
                    </p>
                    {/* Title badge */}
                    <p className="text-primary font-semibold uppercase tracking-widest text-xs mb-4">
                      Qualified Clinical Dietitian
                    </p>
                    {/* Floating veggies */}
                    <div className="flex justify-center gap-3 mb-5">
                      {(['🥗', '🥑', '🫐', '🥦'] as const).map((emoji, i) => (
                        <span
                          key={i}
                          className="text-2xl inline-block"
                          style={{ animation: `float-gentle ${[2.1, 3.0, 2.6, 3.5][i]}s ease-in-out ${[0, 0.75, 1.4, 2.1][i]}s infinite` }}
                        >
                          {emoji}
                        </span>
                      ))}
                    </div>
                    {/* Divider */}
                    <div className="w-10 h-px bg-primary/30 mx-auto mb-5" />
                    {/* Credentials */}
                    <div className="space-y-2">
                      {[
                        'M.Sc. Dietetics & Nutrition',
                        'Clinical Nutrition Specialist',
                        '2.5+ Years of Practice',
                      ].map((c) => (
                        <p key={c} className="flex items-center justify-center gap-2 text-text-secondary text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                          {c}
                        </p>
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
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">100%</p>
                    <p className="text-xs text-text-muted">Personalized Plans</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-(--accent)/30 flex items-center justify-center text-xl">
                    🔬
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Evidence-Based</p>
                    <p className="text-xs text-text-muted">Clinical Approach</p>
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
          className="w-6 h-10 rounded-full border-2 border-(--primary)/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
