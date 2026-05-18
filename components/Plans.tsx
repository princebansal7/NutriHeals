'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    id: '1m',
    duration: '1 Month',
    dietPlans: 3,
    tagline: 'Best for Beginners & Short-Term Goals',
    popular: false,
    pauseDays: null,
    includedFrom: null,
    features: [
      '3 Customized Diet Plans',
      'Weekly Follow-ups & Progress Monitoring',
      'Complete Health & Nutritional Assessment',
      'WhatsApp Support During Working Hours',
      'Workout & Physical Activity Guidance',
      'Lifestyle & Healthy Habit Recommendations',
      'Blood Test Analysis & Dietary Guidance',
      'Easy Homemade Meal Planning',
      'Basic Portion Control & Meal Timing Guidance',
    ],
  },
  {
    id: '3m',
    duration: '3 Months',
    dietPlans: 9,
    tagline: 'Best for Consistency & Visible Lifestyle Changes',
    popular: true,
    pauseDays: null,
    includedFrom: '1 Month Plan',
    features: [
      '9 Customized Diet Plans',
      'Regular Diet Modifications According to Progress',
      'Detailed Habit Improvement Guidance',
      'Better Accountability & Continuous Motivation',
      'Festive & Travel Meal Adjustments',
      'Craving & Emotional Eating Management',
      'Deeper Focus on Sustainable Weight Loss & Inch Loss',
      'Improved Energy, Digestion & Daily Routine Support',
    ],
  },
  {
    id: '6m',
    duration: '6 Months',
    dietPlans: 18,
    tagline: 'Best for Long-Term Transformation & Health Improvement',
    popular: false,
    pauseDays: 15,
    includedFrom: '3 Month Plan',
    features: [
      '18 Customized Diet Plans',
      'Long-Term Lifestyle Transformation Approach',
      'Advanced Progress Monitoring & Body Response Tracking',
      'Metabolism & Eating Pattern Improvement',
      'PMOS / Thyroid / Diabetes / Fatty Liver Support (if applicable)',
      'Mindful Eating & Consistency Coaching',
      'Muscle Preservation & Strength Support Guidance',
      'Flexible Meal Planning for Real-Life Routine',
    ],
  },
  {
    id: '9m',
    duration: '9 Months',
    dietPlans: 27,
    tagline: 'Best for Deep Habit Building & Sustainable Results',
    popular: false,
    pauseDays: 25,
    includedFrom: '6 Month Plan',
    features: [
      '27 Customized Diet Plans',
      'Strong Focus on Habit Formation & Weight Maintenance',
      'Long-Term Accountability & Regular Monitoring',
      'Relapse Prevention & Consistency Support',
      'Advanced Lifestyle Correction Strategies',
      'Social Event & Eating-Out Guidance',
      'Improved Relationship with Food & Healthy Routine Building',
      'Personalized Adjustments According to Body Changes',
    ],
  },
  {
    id: '12m',
    duration: '12 Months',
    dietPlans: 36,
    tagline: 'Best for Complete Lifestyle Transformation & Long-Term Maintenance',
    popular: false,
    pauseDays: 40,
    includedFrom: '9 Month Plan',
    features: [
      '36 Customized Diet Plans',
      'Year-Long Personalized Nutrition Support',
      'Complete Lifestyle & Habit Transformation',
      'Long-Term Weight Maintenance Guidance',
      'Seasonal Diet Adjustments Throughout the Year',
      'Advanced Health & Wellness Monitoring',
      'Sustainable & Realistic Health Approach',
      'Ongoing Motivation, Accountability & Support',
      'Focus on Building Lifelong Healthy Eating Habits',
    ],
  },
];

const noteItems = [
  'Health condition',
  'Lifestyle & daily routine',
  'Food preferences',
  'Work schedule',
  'Goals & body requirements',
];

export default function Plans() {
  const [selected, setSelected] = useState('3m');

  const activePlan = plans.find((p) => p.id === selected)!;

  return (
    <section id="plans" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Nutrition Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            Choose Your <span className="text-gradient">Health Journey</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Every plan is fully personalised — no generic templates. Select the duration that matches your goals.
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                selected === plan.id
                  ? 'bg-primary text-white shadow-lg shadow-(--primary)/30'
                  : 'bg-(--gradient-start) text-text-secondary hover:text-primary'
              }`}
            >
              {plan.duration}
              {plan.popular && (
                <span className="absolute -top-2 -right-2 bg-amber-400 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  Popular
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Plan Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-3xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-primary px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                {activePlan.popular && (
                  <span className="inline-block bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-white">
                  {activePlan.duration} Plan
                </h3>
                <p className="text-white/75 mt-1 text-sm">{activePlan.tagline}</p>
              </div>
              <div className="text-center sm:text-right shrink-0">
                <p className="text-5xl font-playfair font-bold text-white">{activePlan.dietPlans}</p>
                <p className="text-white/70 text-sm mt-1">Customized Diet Plans</p>
              </div>
            </div>

            {/* Features */}
            <div className="px-8 py-6">
              {activePlan.includedFrom && (
                <div className="flex items-center gap-3 mb-5 p-3 bg-(--gradient-start) rounded-xl">
                  <span className="text-primary text-lg">✓</span>
                  <p className="text-sm font-medium text-text-secondary">
                    Everything included in the <span className="text-primary font-semibold">{activePlan.includedFrom}</span>, plus:
                  </p>
                </div>
              )}

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {activePlan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="text-primary mt-0.5 shrink-0">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pause facility */}
              {activePlan.pauseDays && (
                <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                  <span className="text-amber-500 text-lg shrink-0">⏸</span>
                  <div>
                    <p className="text-sm font-semibold text-amber-800">Plan Pause Facility</p>
                    <p className="text-sm text-amber-700 mt-0.5">
                      Pause your plan for up to <strong>{activePlan.pauseDays} days</strong> for travel, illness, exams, or other unavoidable situations — with prior notice and approval.
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full mt-6"
              >
                Book a Free Consultation
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Why long-term plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid sm:grid-cols-3 gap-4"
        >
          {[
            { icon: '📈', title: 'Better Results', desc: 'Longer plans allow your body to adapt and show lasting change.' },
            { icon: '🤝', title: 'More Support', desc: 'More time together means deeper adjustments and closer guidance.' },
            { icon: '🔄', title: 'Real Habit Change', desc: 'Sustainable habits take months to build — not weeks.' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-2xl p-5 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-playfair font-semibold text-text-primary mb-1">{item.title}</h4>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Personalisation note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-6 bg-(--gradient-start) rounded-2xl border border-(--primary)/10"
        >
          <p className="text-sm font-semibold text-primary mb-3">
            🎯 All plans are fully personalised according to your:
          </p>
          <div className="flex flex-wrap gap-2">
            {noteItems.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white text-text-secondary text-sm rounded-full border border-(--primary)/10"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
