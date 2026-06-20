'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

type Unit = 'metric' | 'imperial';

interface BMICategory {
  label: string;
  color: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  description: string;
  recommendedGoal: string;
  recommendedPlan: string;
  planRationale: string;
}

const BMI_MIN = 10;
const BMI_MAX = 45;

const GAUGE_ZONES = [
  { label: 'Underweight', upTo: 18.5, color: '#60A5FA' },
  { label: 'Normal', upTo: 25, color: '#2D5A3D' },
  { label: 'Overweight', upTo: 30, color: '#F59E0B' },
  { label: 'Obese I', upTo: 35, color: '#F97316' },
  { label: 'Obese II+', upTo: 45, color: '#EF4444' },
];

function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) {
    return {
      label: 'Underweight',
      color: '#60A5FA',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      description: 'Your BMI indicates you are below a healthy weight range. A structured nutrition plan can help you gain weight safely and build lean mass.',
      recommendedGoal: 'Weight Gain',
      recommendedPlan: '3 Months',
      planRationale: 'A 3-month plan gives enough time to build healthy eating habits and achieve gradual, sustainable weight gain.',
    };
  }
  if (bmi < 25) {
    return {
      label: 'Normal Weight',
      color: '#2D5A3D',
      textColor: 'text-primary',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Your BMI is in the healthy range. Maintaining this with balanced nutrition and lifestyle habits sets a strong foundation for long-term wellness.',
      recommendedGoal: 'Maintenance',
      recommendedPlan: '1 Month',
      planRationale: 'A 1-month plan is ideal for a nutrition tune-up, building sustainable habits, and optimising your dietary baseline.',
    };
  }
  if (bmi < 30) {
    return {
      label: 'Overweight',
      color: '#F59E0B',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: 'Your BMI suggests you could benefit from a focused nutrition plan. Small, consistent changes over 3 months can produce lasting results.',
      recommendedGoal: 'Weight Loss',
      recommendedPlan: '3 Months',
      planRationale: 'A 3-month plan allows for consistent monitoring, diet modifications, and visible lifestyle transformation.',
    };
  }
  if (bmi < 35) {
    return {
      label: 'Obese (Class I)',
      color: '#F97316',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      description: 'A dedicated 6-month nutrition programme can help you achieve meaningful, sustained weight loss alongside better metabolic health.',
      recommendedGoal: 'Weight Loss',
      recommendedPlan: '6 Months',
      planRationale: 'A 6-month plan provides the depth needed for long-term transformation with regular progress tracking and metabolism support.',
    };
  }
  return {
    label: 'Obese (Class II+)',
    color: '#EF4444',
    textColor: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'A comprehensive 9-month personalised nutrition plan with close clinical monitoring is the most effective approach for your health goals.',
    recommendedGoal: 'Weight Loss',
    recommendedPlan: '9 Months',
    planRationale: 'A 9-month plan delivers deep habit formation, relapse prevention, and advanced lifestyle correction for significant, lasting results.',
  };
}

function getGaugePercent(bmi: number): number {
  return Math.min(100, Math.max(0, ((bmi - BMI_MIN) / (BMI_MAX - BMI_MIN)) * 100));
}

export default function BMICalculator() {
  const router = useRouter();
  const pathname = usePathname();
  const [unit, setUnit] = useState<Unit>('metric');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [weightLbs, setWeightLbs] = useState('');

  const bmi = useMemo(() => {
    if (unit === 'metric') {
      const h = parseFloat(heightCm) / 100;
      const w = parseFloat(weightKg);
      if (!h || !w || h <= 0 || w <= 0) return null;
      return w / (h * h);
    } else {
      const totalIn = parseFloat(heightFt) * 12 + (parseFloat(heightIn) || 0);
      const w = parseFloat(weightLbs);
      if (!totalIn || !w || totalIn <= 0 || w <= 0) return null;
      return (w * 703) / (totalIn * totalIn);
    }
  }, [unit, heightCm, heightFt, heightIn, weightKg, weightLbs]);

  const validBmi = bmi && bmi >= 10 && bmi <= 60 ? bmi : null;
  const category = validBmi ? getBMICategory(validBmi) : null;
  const gaugePercent = validBmi ? getGaugePercent(validBmi) : null;

  function navigate(anchor: string) {
    if (pathname === '/') {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${anchor}`);
    }
  }

  function handleGetPlan() {
    if (!category) return;
    sessionStorage.setItem('preferredPlan', category.recommendedPlan);
    sessionStorage.setItem('preferredGoal', category.recommendedGoal);
    navigate('#contact');
  }

  function handleViewPlans() {
    navigate('#plans');
  }

  return (
    <section id="bmi-calculator" className="py-20" style={{ background: 'var(--gradient-start)' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Know Your Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            BMI Calculator & <span className="text-gradient">Plan Finder</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Enter your height and weight to instantly calculate your BMI and discover the nutrition plan best suited for your goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

              {/* ── Left: Inputs ── */}
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-3">Unit System</p>
                  <div className="inline-flex rounded-xl overflow-hidden border border-gray-200 bg-white">
                    {(['metric', 'imperial'] as Unit[]).map((u) => (
                      <button
                        key={u}
                        onClick={() => setUnit(u)}
                        className={`px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                          unit === u
                            ? 'bg-primary text-white'
                            : 'text-text-secondary hover:text-primary'
                        }`}
                      >
                        {u === 'metric' ? 'Metric (cm / kg)' : 'Imperial (ft / lbs)'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Height */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Height
                  </label>
                  {unit === 'metric' ? (
                    <div className="relative">
                      <input
                        type="number"
                        min="50"
                        max="250"
                        placeholder="e.g. 165"
                        value={heightCm}
                        onChange={(e) => setHeightCm(e.target.value)}
                        className="w-full px-4 py-3 pr-14 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">cm</span>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min="1"
                          max="8"
                          placeholder="5"
                          value={heightFt}
                          onChange={(e) => setHeightFt(e.target.value)}
                          className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">ft</span>
                      </div>
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min="0"
                          max="11"
                          placeholder="6"
                          value={heightIn}
                          onChange={(e) => setHeightIn(e.target.value)}
                          className="w-full px-4 py-3 pr-10 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">in</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Weight */}
                <div>
                  <label className="block text-sm font-semibold text-text-primary mb-2">
                    Weight
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="20"
                      max="300"
                      placeholder={unit === 'metric' ? 'e.g. 70' : 'e.g. 154'}
                      value={unit === 'metric' ? weightKg : weightLbs}
                      onChange={(e) =>
                        unit === 'metric' ? setWeightKg(e.target.value) : setWeightLbs(e.target.value)
                      }
                      className="w-full px-4 py-3 pr-14 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">
                      {unit === 'metric' ? 'kg' : 'lbs'}
                    </span>
                  </div>
                </div>

                {/* BMI reference table */}
                <div className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
                  <p className="text-xs font-semibold text-text-secondary px-4 pt-3 pb-2 uppercase tracking-wider">
                    BMI Reference
                  </p>
                  {[
                    { range: '< 18.5', label: 'Underweight', color: '#60A5FA' },
                    { range: '18.5 – 24.9', label: 'Normal Weight', color: '#2D5A3D' },
                    { range: '25 – 29.9', label: 'Overweight', color: '#F59E0B' },
                    { range: '30 – 34.9', label: 'Obese Class I', color: '#F97316' },
                    { range: '≥ 35', label: 'Obese Class II+', color: '#EF4444' },
                  ].map((row) => (
                    <div key={row.range} className="flex items-center justify-between px-4 py-2 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: row.color }} />
                        <span className="text-xs text-text-secondary">{row.label}</span>
                      </div>
                      <span className="text-xs font-medium text-text-primary">{row.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: Result ── */}
              <div className="flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {validBmi && category ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-6"
                    >
                      {/* BMI number */}
                      <div className="text-center">
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-7xl font-playfair font-bold"
                          style={{ color: category.color }}
                        >
                          {validBmi.toFixed(1)}
                        </motion.p>
                        <p className="text-text-muted text-sm mt-1">Your BMI Score</p>
                        <span
                          className={`inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-semibold border ${category.bgColor} ${category.borderColor} ${category.textColor}`}
                        >
                          {category.label}
                        </span>
                      </div>

                      {/* Gauge bar */}
                      <div>
                        <div className="relative h-4 rounded-full overflow-hidden flex">
                          {GAUGE_ZONES.map((zone, i) => {
                            const start = i === 0 ? BMI_MIN : GAUGE_ZONES[i - 1].upTo;
                            const width = ((zone.upTo - start) / (BMI_MAX - BMI_MIN)) * 100;
                            return (
                              <div
                                key={zone.label}
                                style={{ width: `${width}%`, backgroundColor: zone.color, opacity: 0.85 }}
                              />
                            );
                          })}
                          {/* Indicator */}
                          <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-lg border-2"
                            style={{ borderColor: category.color }}
                            initial={{ left: `${gaugePercent}%` }}
                            animate={{ left: `calc(${gaugePercent}% - 10px)` }}
                            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                          />
                        </div>
                        {/* Zone labels */}
                        <div className="flex justify-between mt-2">
                          {['10', '18.5', '25', '30', '35', '45+'].map((v) => (
                            <span key={v} className="text-[10px] text-text-muted">{v}</span>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {category.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center text-center py-10 gap-4"
                    >
                      <div
                        className="w-28 h-28 rounded-full flex items-center justify-center text-5xl"
                        style={{ background: 'var(--gradient-start)' }}
                      >
                        ⚖️
                      </div>
                      <div>
                        <p className="text-text-primary font-semibold">Enter your details</p>
                        <p className="text-text-muted text-sm mt-1">
                          Your BMI and recommended plan will appear here.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Recommendation Banner ── */}
            <AnimatePresence>
              {validBmi && category && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.45, delay: 0.15 }}
                  className={`mt-8 pt-8 border-t border-gray-100`}
                >
                  <div className={`rounded-2xl border p-6 ${category.bgColor} ${category.borderColor}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-1">
                          Recommended for you
                        </p>
                        <h3 className="text-xl font-playfair font-bold text-text-primary">
                          {category.recommendedPlan} Plan
                          <span className={`ml-2 text-sm font-sans font-medium ${category.textColor}`}>
                            · {category.recommendedGoal}
                          </span>
                        </h3>
                        <p className="text-sm text-text-secondary mt-1.5">
                          {category.planRationale}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                        <button
                          onClick={handleViewPlans}
                          className="btn-secondary px-5 py-2.5 text-sm"
                        >
                          View Plans
                        </button>
                        <button
                          onClick={handleGetPlan}
                          className="btn-primary px-5 py-2.5 text-sm"
                        >
                          Book Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-text-muted mt-5">
          BMI is a screening tool, not a diagnostic measure. It does not account for muscle mass, bone density, or fat distribution. Results may vary based on age, ethnicity, and individual body composition. Always consult a qualified dietitian for personalised guidance.
        </p>
      </div>
    </section>
  );
}
