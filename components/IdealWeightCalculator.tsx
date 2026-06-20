'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

type Step = 'setup' | 'results';
type Gender = 'male' | 'female';
type HeightUnit = 'cm' | 'ft';
type WeightUnit = 'kg' | 'lbs';

interface Errors {
  name?: string;
  height?: string;
}

interface IdealRange {
  devine: number;
  bmiLow: number;
  bmiHigh: number;
  midpoint: number;
}

function calcIdeal(gender: Gender, heightCm: number): IdealRange {
  const heightInches = heightCm / 2.54;
  const over5Feet = Math.max(0, heightInches - 60);
  // Devine formula
  const devine = Math.round(gender === 'male' ? 50 + 2.3 * over5Feet : 45.5 + 2.3 * over5Feet);
  // BMI-based healthy range (18.5–24.9)
  const hm = heightCm / 100;
  const bmiLow = Math.round(18.5 * hm * hm);
  const bmiHigh = Math.round(24.9 * hm * hm);
  return { devine, bmiLow, bmiHigh, midpoint: Math.round((bmiLow + bmiHigh) / 2) };
}

function getStatus(currentKg: number, range: IdealRange) {
  if (currentKg < range.bmiLow) {
    const diff = range.bmiLow - currentKg;
    return { label: 'Underweight', color: '#3b82f6', plan: '3 Months', sessionGoal: 'Weight Gain', diff: `${diff.toFixed(1)} kg below healthy range` };
  }
  if (currentKg > range.bmiHigh) {
    const diff = currentKg - range.bmiHigh;
    if (diff > 15) return { label: 'Obese', color: '#ef4444', plan: '9 Months', sessionGoal: 'Weight Loss', diff: `${diff.toFixed(1)} kg above healthy range` };
    if (diff > 5) return { label: 'Overweight', color: '#f97316', plan: '6 Months', sessionGoal: 'Weight Loss', diff: `${diff.toFixed(1)} kg above healthy range` };
    return { label: 'Slightly Overweight', color: '#eab308', plan: '3 Months', sessionGoal: 'Weight Loss', diff: `${diff.toFixed(1)} kg above healthy range` };
  }
  return { label: 'Healthy Weight', color: '#2D5A3D', plan: '1 Month', sessionGoal: 'Maintenance', diff: 'You are within a healthy weight range' };
}

export default function IdealWeightCalculator() {
  const router = useRouter();
  const pathname = usePathname();

  const [step, setStep] = useState<Step>('setup');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>('female');
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('cm');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg');
  const [weightVal, setWeightVal] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const clearErr = (field: keyof Errors) =>
    setErrors((p) => ({ ...p, [field]: undefined }));

  const heightCmValue = useMemo(() => {
    if (heightUnit === 'cm') return parseFloat(heightCm) || 0;
    return ((parseFloat(heightFt) || 0) * 12 + (parseFloat(heightIn) || 0)) * 2.54;
  }, [heightUnit, heightCm, heightFt, heightIn]);

  const currentWeightKg = useMemo(() => {
    const v = parseFloat(weightVal);
    if (!v || v <= 0) return null;
    return weightUnit === 'kg' ? v : v / 2.205;
  }, [weightVal, weightUnit]);

  const idealRange = useMemo(
    () => heightCmValue >= 50 ? calcIdeal(gender, heightCmValue) : null,
    [gender, heightCmValue]
  );

  const status = useMemo(
    () => idealRange && currentWeightKg ? getStatus(currentWeightKg, idealRange) : null,
    [idealRange, currentWeightKg]
  );

  // Bar metrics: always keeps current weight visible inside the bar
  const barMetrics = useMemo(() => {
    if (!idealRange) return null;
    // Span from 65% of healthy-low to at least 155% of healthy-high (or 110% of current weight)
    const barMin = idealRange.bmiLow * 0.65;
    const barMax = Math.max(
      idealRange.bmiHigh * 1.55,
      currentWeightKg ? currentWeightKg * 1.1 : idealRange.bmiHigh * 1.55
    );
    const span = barMax - barMin;
    const healthyStart = ((idealRange.bmiLow - barMin) / span) * 100;
    const healthyWidth = ((idealRange.bmiHigh - idealRange.bmiLow) / span) * 100;
    const dotPct = currentWeightKg != null
      ? Math.min(96, Math.max(4, ((currentWeightKg - barMin) / span) * 100))
      : null;
    return { healthyStart, healthyWidth, dotPct };
  }, [idealRange, currentWeightKg]);

  function handleCalculate() {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (heightUnit === 'cm' && (!heightCm || parseFloat(heightCm) < 50)) e.height = 'Please enter a valid height';
    if (heightUnit === 'ft' && (!heightFt || parseFloat(heightFt) < 1)) e.height = 'Please enter a valid height';
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep('results');
  }

  function navigate(anchor: string) {
    if (pathname === '/') {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${anchor}`);
    }
  }

  return (
    <section id="ideal-weight-calculator" className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Know Your Numbers</span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            Ideal Weight <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Find your healthy weight range based on your height and gender — using clinically validated formulas, not generic charts.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-3xl overflow-hidden"
        >
          <AnimatePresence mode="wait">

            {/* ─── STEP 1: SETUP ─── */}
            {step === 'setup' && (
              <motion.div
                key="setup"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-8 lg:p-10"
              >
                <p className="text-text-muted text-sm mb-6 text-center">Step 1 of 2 — Your Details</p>
                <div className="max-w-xl mx-auto space-y-6">

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Priya"
                      value={name}
                      onChange={(e) => { setName(e.target.value); clearErr('name'); }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Gender</label>
                    <div className="inline-flex rounded-xl overflow-hidden border border-gray-200 bg-white w-full">
                      {(['female', 'male'] as Gender[]).map((g) => (
                        <button
                          key={g}
                          onClick={() => setGender(g)}
                          className={`flex-1 py-3 text-sm font-semibold transition-all ${gender === g ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'}`}
                        >
                          {g === 'female' ? '♀ Female' : '♂ Male'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Height */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-semibold text-text-primary">Height</label>
                      <div className="inline-flex rounded-lg overflow-hidden border border-gray-200 bg-white">
                        {(['cm', 'ft'] as HeightUnit[]).map((u) => (
                          <button
                            key={u}
                            onClick={() => { setHeightUnit(u); clearErr('height'); }}
                            className={`px-3 py-1 text-xs font-semibold transition-all ${heightUnit === u ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'}`}
                          >
                            {u}
                          </button>
                        ))}
                      </div>
                    </div>
                    {heightUnit === 'cm' ? (
                      <div className="relative">
                        <input
                          type="number" min="50" max="250"
                          placeholder="e.g. 163"
                          value={heightCm}
                          onChange={(e) => { setHeightCm(e.target.value); clearErr('height'); }}
                          className={`w-full px-4 py-3 pr-14 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.height ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">cm</span>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <div className="relative flex-1">
                          <input
                            type="number" min="1" max="8"
                            placeholder="5"
                            value={heightFt}
                            onChange={(e) => { setHeightFt(e.target.value); clearErr('height'); }}
                            className={`w-full px-4 py-3 pr-10 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.height ? 'border-red-400' : 'border-gray-200'}`}
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">ft</span>
                        </div>
                        <div className="relative flex-1">
                          <input
                            type="number" min="0" max="11"
                            placeholder="4"
                            value={heightIn}
                            onChange={(e) => { setHeightIn(e.target.value); clearErr('height'); }}
                            className={`w-full px-4 py-3 pr-10 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.height ? 'border-red-400' : 'border-gray-200'}`}
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">in</span>
                        </div>
                      </div>
                    )}
                    {errors.height && <p className="text-red-500 text-xs mt-1">{errors.height}</p>}
                  </div>

                  {/* Current Weight (optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">
                      Current Weight <span className="text-text-muted font-normal">(optional)</span>
                    </label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <input
                          type="number" min="20" max="300"
                          placeholder={weightUnit === 'kg' ? 'e.g. 72' : 'e.g. 158'}
                          value={weightVal}
                          onChange={(e) => setWeightVal(e.target.value)}
                          className="w-full px-4 py-3 pr-14 rounded-xl border border-gray-200 bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">{weightUnit}</span>
                      </div>
                      <div className="inline-flex rounded-xl overflow-hidden border border-gray-200 bg-white shrink-0">
                        {(['kg', 'lbs'] as WeightUnit[]).map((u) => (
                          <button key={u} onClick={() => setWeightUnit(u)}
                            className={`px-4 py-3 text-sm font-semibold transition-all ${weightUnit === u ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'}`}
                          >{u}</button>
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-text-muted mt-1.5">Add your weight to see where you stand and get a plan recommendation.</p>
                  </div>

                  <button onClick={handleCalculate} className="btn-primary w-full py-4 text-base">
                    Calculate My Ideal Weight →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 2: RESULTS ─── */}
            {step === 'results' && idealRange && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <p className="text-text-muted text-sm">Step 2 of 2 — Your Results</p>
                  <button onClick={() => setStep('setup')} className="text-sm text-primary hover:underline">← Edit details</button>
                </div>

                {/* Ideal range — hero card */}
                <div className="rounded-2xl p-6 text-center mb-6" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Healthy Weight Range for {name}</p>
                  <p className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                    {idealRange.bmiLow} – {idealRange.bmiHigh} <span className="text-2xl">kg</span>
                  </p>
                  <p className="text-sm text-text-muted">Healthy BMI 18.5–24.9 range for your height</p>
                </div>

                {/* Two formula cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="rounded-2xl bg-white border border-gray-100 p-4 text-center">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Devine Formula</p>
                    <p className="text-2xl font-bold text-text-primary">{idealRange.devine} kg</p>
                    <p className="text-xs text-text-muted mt-1">Clinical reference</p>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-100 p-4 text-center">
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-2">BMI Midpoint</p>
                    <p className="text-2xl font-bold text-text-primary">{idealRange.midpoint} kg</p>
                    <p className="text-xs text-text-muted mt-1">Centre of healthy range</p>
                  </div>
                </div>

                {/* Current weight comparison */}
                {currentWeightKg && status && barMetrics && barMetrics.dotPct !== null && (
                  <div
                    className="rounded-2xl p-5 mb-6 border"
                    style={{ borderColor: `${status.color}40`, background: `${status.color}0d` }}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-3 h-3 rounded-full shrink-0" style={{ background: status.color }} />
                      <p className="font-semibold text-text-primary">{status.label}</p>
                    </div>
                    <p className="text-sm text-text-secondary mb-5">{status.diff}</p>

                    {/* Visual range bar */}
                    <div className="px-1">
                      {/* Upper labels: pinned to green zone edges */}
                      <div className="relative h-5 mb-0.5">
                        <span
                          className="absolute text-xs font-semibold text-primary whitespace-nowrap -translate-x-1/2"
                          style={{ left: `${barMetrics.healthyStart}%` }}
                        >
                          {idealRange.bmiLow} kg
                        </span>
                        <span
                          className="absolute text-xs font-semibold text-primary whitespace-nowrap -translate-x-1/2"
                          style={{ left: `${barMetrics.healthyStart + barMetrics.healthyWidth}%` }}
                        >
                          {idealRange.bmiHigh} kg
                        </span>
                      </div>

                      {/* The bar track */}
                      <div className="relative h-4 rounded-full bg-gray-100" style={{ overflow: 'visible' }}>
                        {/* Green healthy zone */}
                        <div
                          className="absolute top-0 h-full rounded-full"
                          style={{
                            left: `${barMetrics.healthyStart}%`,
                            width: `${barMetrics.healthyWidth}%`,
                            background: 'linear-gradient(90deg, #4CAF5066, #2D5A3D88)',
                          }}
                        />
                        {/* Tick marks at green zone edges */}
                        <div
                          className="absolute top-0 w-0.5 h-full bg-primary/40"
                          style={{ left: `${barMetrics.healthyStart}%` }}
                        />
                        <div
                          className="absolute top-0 w-0.5 h-full bg-primary/40"
                          style={{ left: `${barMetrics.healthyStart + barMetrics.healthyWidth}%` }}
                        />
                        {/* Current weight dot */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white shadow-md"
                          style={{ left: `${barMetrics.dotPct}%`, background: status.color }}
                        />
                      </div>

                      {/* Lower label: pinned to dot */}
                      <div className="relative h-6 mt-1">
                        <span
                          className="absolute text-xs font-semibold whitespace-nowrap -translate-x-1/2"
                          style={{ left: `${barMetrics.dotPct}%`, color: status.color }}
                        >
                          You: {Math.round(currentWeightKg)} kg
                        </span>
                      </div>

                      {/* Bottom context labels */}
                      <div className="flex justify-between text-xs text-text-muted mt-0.5">
                        <span>Underweight</span>
                        <span className="text-primary font-medium">Healthy range</span>
                        <span>Overweight</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-5">
                      <div className="rounded-xl bg-white p-3 text-center border border-gray-100">
                        <p className="text-base font-bold text-text-primary">{Math.round(currentWeightKg)} kg</p>
                        <p className="text-xs text-text-muted">Your current weight</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 text-center border border-gray-100">
                        <p className="text-base font-bold text-primary">{status.plan}</p>
                        <p className="text-xs text-text-muted">Recommended plan</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
                  <p className="font-playfair font-bold text-text-primary text-lg mb-1">
                    {status && status.label !== 'Healthy Weight'
                      ? `${name}, let's get you to ${idealRange.bmiLow}–${idealRange.bmiHigh} kg`
                      : `Great news, ${name} — you're in a healthy range!`}
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    Let&apos;s build a personalised nutrition plan designed specifically for your body and goals.
                  </p>
                  <button
                    onClick={() => {
                      if (status) {
                        sessionStorage.setItem('preferredGoal', status.sessionGoal);
                        sessionStorage.setItem('preferredPlan', status.plan);
                      }
                      navigate('#contact');
                    }}
                    className="btn-primary w-full sm:w-auto px-8 py-3"
                  >
                    Book Free Consultation →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <p className="text-center text-xs text-text-muted mt-5 max-w-2xl mx-auto">
          Ideal weight ranges are estimates based on the Devine formula and BMI guidelines (18.5–24.9). Actual healthy weight may vary based on muscle mass, bone density, body frame, ethnicity, and health conditions. These figures are a general reference — consult a registered dietitian for a personalised assessment.
        </p>
      </div>
    </section>
  );
}
