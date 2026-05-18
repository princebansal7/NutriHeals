'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import type { ServiceData } from '@/lib/services-data';
import { WA_URL } from '@/lib/contact';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-primary font-medium uppercase tracking-wider text-sm">
      {children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
      {children}
    </h2>
  );
}

// ── Week accordion ────────────────────────────────────────────────────────────
function WeekAccordion({ week, defaultOpen }: { week: ServiceData['monthPlan'][0]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  const meals = [
    { label: 'Early Morning', value: week.sampleDayMeals.earlyMorning },
    { label: 'Breakfast', value: week.sampleDayMeals.breakfast },
    { label: 'Mid-Morning', value: week.sampleDayMeals.midMorning },
    { label: 'Lunch', value: week.sampleDayMeals.lunch },
    { label: 'Evening Snack', value: week.sampleDayMeals.eveningSnack },
    { label: 'Dinner', value: week.sampleDayMeals.dinner },
    ...(week.sampleDayMeals.bedtime
      ? [{ label: 'Bedtime', value: week.sampleDayMeals.bedtime }]
      : []),
  ];

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-(--gradient-start) transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-playfair font-bold text-lg">
            W{week.weekNumber}
          </div>
          <div>
            <p className="text-xs text-text-muted uppercase tracking-wide">
              Week {week.weekNumber}
            </p>
            <p className="font-playfair font-semibold text-text-primary">
              {week.theme}
            </p>
          </div>
        </div>
        <span className="text-primary text-xl">{open ? '−' : '+'}</span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6">
              {/* Goals */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">🎯 Weekly Goals</h4>
                <ul className="space-y-2">
                  {week.goals.map((g, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary mt-0.5">✓</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Daily Diet Guide */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">🍽️ Sample Daily Diet Guide</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {meals.map((meal) => (
                    <div key={meal.label} className="bg-(--gradient-start) rounded-xl p-3">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                        {meal.label}
                      </p>
                      <p className="text-sm text-text-secondary">{meal.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foods to eat / avoid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <h4 className="font-semibold text-green-800 mb-3">✅ Foods to Eat</h4>
                  <ul className="space-y-1">
                    {week.foodsToEat.map((f, i) => (
                      <li key={i} className="text-sm text-green-700 flex items-start gap-2">
                        <span>•</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <h4 className="font-semibold text-red-800 mb-3">❌ Foods to Avoid</h4>
                  <ul className="space-y-1">
                    {week.foodsToAvoid.map((f, i) => (
                      <li key={i} className="text-sm text-red-700 flex items-start gap-2">
                        <span>•</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Follow-up */}
              <div>
                <h4 className="font-semibold text-text-primary mb-3">📋 Follow-up Tasks</h4>
                <ul className="space-y-2">
                  {week.followUp.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-amber-500 mt-0.5">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ServicePageClient({ service }: { service: ServiceData }) {
  const router = useRouter();

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <button
                onClick={goBack}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mb-6"
              >
                ← Back to all services
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{service.icon}</span>
              <div>
                <SectionLabel>{service.category}</SectionLabel>
                <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-text-primary">
                  {service.name}
                </h1>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="text-xl text-primary font-medium italic mb-4">
              &ldquo;{service.tagline}&rdquo;
            </motion.p>

            <motion.p variants={fadeUp} className="text-text-secondary text-lg max-w-3xl mb-8">
              {service.heroDescription}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                Book a Consultation
              </button>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── What is this condition ── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <SectionLabel>Understanding the condition</SectionLabel>
              <SectionHeading>What is <span className="text-gradient">{service.name}</span>?</SectionHeading>
            </motion.div>

            <motion.p variants={fadeUp} className="text-text-secondary text-lg mb-8 text-center max-w-3xl mx-auto">
              {service.condition.overview}
            </motion.p>

            <motion.p variants={fadeUp} className="text-sm text-text-muted italic mb-10 text-center">
              {service.condition.whoAffected}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
                <h3 className="font-playfair font-semibold text-text-primary text-lg mb-4">
                  🔍 Common Symptoms
                </h3>
                <ul className="space-y-2">
                  {service.condition.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary mt-0.5">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6">
                <h3 className="font-playfair font-semibold text-text-primary text-lg mb-4">
                  🧬 Root Causes
                </h3>
                <ul className="space-y-2">
                  {service.condition.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-primary mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Harms ── */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <SectionLabel>Why act now</SectionLabel>
              <SectionHeading>Risks of leaving it <span className="text-gradient">untreated</span></SectionHeading>
              <p className="text-text-secondary max-w-2xl mx-auto">{service.harms.overview}</p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.harms.risks.map((risk, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="text-3xl mb-3">{risk.icon}</div>
                  <h3 className="font-playfair font-semibold text-text-primary mb-2">{risk.title}</h3>
                  <p className="text-sm text-text-secondary">{risk.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Nutrition Benefits ── */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <SectionLabel>The nutrition advantage</SectionLabel>
              <SectionHeading>How the right diet <span className="text-gradient">heals</span></SectionHeading>
              <p className="text-text-secondary max-w-2xl mx-auto">{service.nutritionBenefits.overview}</p>
            </motion.div>

            <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.nutritionBenefits.benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-5 border border-(--primary)/10"
                >
                  <div className="text-3xl mb-3">{b.icon}</div>
                  <h3 className="font-playfair font-semibold text-text-primary mb-2">{b.title}</h3>
                  <p className="text-sm text-text-secondary">{b.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 1 Month Plan ── */}
      <section className="py-16 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <SectionLabel>Your roadmap</SectionLabel>
              <SectionHeading>Initial <span className="text-gradient">1-Month Plan</span></SectionHeading>
              <p className="text-text-secondary max-w-2xl mx-auto">
                A week-by-week structured guide including daily meal plans, goals, and follow-up checkpoints personalised for {service.name}.
              </p>
              <div className="mt-6 mx-auto max-w-2xl bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 text-sm text-amber-800 text-left">
                <span className="font-semibold">⚠ Please note:</span> This is a sample high-level overview only. Your actual diet plan will be fully customised based on your individual health profile, medical history, body composition, lifestyle, and other personal factors during your consultation.
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-4">
              {service.monthPlan.map((week, i) => (
                <motion.div key={week.weekNumber} variants={fadeUp}>
                  <WeekAccordion week={week} defaultOpen={i === 0} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Plans ── */}
      <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="text-center mb-10">
                <SectionLabel>Choose your commitment</SectionLabel>
                <SectionHeading>Pick a <span className="text-gradient">Plan Duration</span></SectionHeading>
                <p className="text-text-secondary max-w-xl mx-auto">
                  All plans are fully personalised. Longer plans allow deeper habit change and better results.
                </p>
              </motion.div>

              <motion.div variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { duration: '1 Month', plans: 3, tagline: 'Beginners & short-term goals', popular: false },
                  { duration: '3 Months', plans: 9, tagline: 'Consistency & visible changes', popular: true },
                  { duration: '6 Months', plans: 18, tagline: 'Long-term transformation', popular: false, pause: 15 },
                  { duration: '9 Months', plans: 27, tagline: 'Deep habit building', popular: false, pause: 25 },
                  { duration: '12 Months', plans: 36, tagline: 'Complete lifestyle overhaul', popular: false, pause: 40 },
                ].map((plan) => (
                  <motion.div
                    key={plan.duration}
                    variants={fadeUp}
                    className={`glass-card rounded-2xl p-5 flex flex-col relative ${plan.popular ? 'border-2 border-primary' : ''}`}
                  >
                    {plan.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-playfair font-bold text-text-primary text-lg">{plan.duration}</h4>
                      <div className="text-right">
                        <span className="text-2xl font-playfair font-bold text-primary">{plan.plans}</span>
                        <span className="text-xs text-text-muted block">diet plans</span>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary mb-4 flex-1">{plan.tagline}</p>
                    {'pause' in plan && (
                      <p className="text-xs text-amber-600 mb-3">⏸ Up to {plan.pause}-day pause facility</p>
                    )}
                    <button
                      onClick={scrollToContact}
                      className={`w-full py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-primary text-white hover:opacity-90'
                          : 'border border-(--primary)/30 text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      Get Started
                    </button>
                  </motion.div>
                ))}

                {/* See all plans card */}
                <motion.div
                  variants={fadeUp}
                  className="glass-card rounded-2xl p-5 flex flex-col items-center justify-center text-center border border-dashed border-(--primary)/30"
                >
                  <p className="text-sm text-text-secondary mb-3">
                    Want to compare all plans in detail?
                  </p>
                  <Link
                    href="/#plans"
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    View Full Plan Details →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
              Ready to start your {service.name} journey?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 mb-8">
              Get a personalised plan tailored to your body, lifestyle, and health history — not a generic one-size-fits-all diet.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                Book a Free Consultation
              </button>
              <Link
                href="/#services"
                className="px-8 py-3 border border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
