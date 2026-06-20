'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

type Step = 'setup' | 'results';
type Gender = 'male' | 'female';
type HeightUnit = 'cm' | 'ft';
type WeightUnit = 'kg' | 'lbs';
type GoalId = 'lose_fast' | 'lose_slow' | 'maintain' | 'gain_slow' | 'gain_fast';

interface Errors {
  name?: string;
  age?: string;
  height?: string;
  weight?: string;
}

const ACTIVITY_LEVELS = [
  { id: 'sedentary', label: 'Sedentary', desc: 'Desk job, little or no exercise', icon: '🪑', multiplier: 1.2 },
  { id: 'light', label: 'Lightly Active', desc: 'Light exercise 1–3 days/week', icon: '🚶', multiplier: 1.375 },
  { id: 'moderate', label: 'Moderately Active', desc: 'Moderate exercise 3–5 days/week', icon: '🏃', multiplier: 1.55 },
  { id: 'very', label: 'Very Active', desc: 'Hard exercise 6–7 days/week', icon: '🏋️', multiplier: 1.725 },
  { id: 'extra', label: 'Super Active', desc: 'Physical job + intense daily training', icon: '⚡', multiplier: 1.9 },
];

const GOALS = [
  { id: 'lose_fast' as GoalId, label: 'Lose Weight Fast', delta: -500, tag: '≈ 0.5 kg/week', color: '#ef4444', plan: '6 Months', sessionGoal: 'Weight Loss' },
  { id: 'lose_slow' as GoalId, label: 'Lose Weight Gently', delta: -250, tag: '≈ 0.25 kg/week', color: '#f97316', plan: '3 Months', sessionGoal: 'Weight Loss' },
  { id: 'maintain' as GoalId, label: 'Maintain Weight', delta: 0, tag: 'Stay at current weight', color: '#2D5A3D', plan: '1 Month', sessionGoal: 'Maintenance' },
  { id: 'gain_slow' as GoalId, label: 'Gain Weight Gently', delta: 250, tag: '≈ 0.25 kg/week', color: '#3b82f6', plan: '3 Months', sessionGoal: 'Weight Gain' },
  { id: 'gain_fast' as GoalId, label: 'Build Muscle / Gain Weight', delta: 500, tag: '≈ 0.5 kg/week', color: '#8b5cf6', plan: '6 Months', sessionGoal: 'Weight Gain' },
];

// Protein%, Carbs%, Fat% per goal
const MACROS: Record<GoalId, [number, number, number]> = {
  lose_fast: [35, 40, 25],
  lose_slow: [30, 45, 25],
  maintain: [25, 50, 25],
  gain_slow: [25, 50, 25],
  gain_fast: [30, 50, 20],
};

function calcBMR(gender: Gender, weightKg: number, heightCm: number, age: number) {
  // Mifflin-St Jeor equation
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === 'male' ? base + 5 : base - 161;
}

export default function CalorieCalculator() {
  const router = useRouter();
  const pathname = usePathname();

  const [step, setStep] = useState<Step>('setup');
  const [name, setName] = useState('');
  const [gender, setGender] = useState<Gender>('female');
  const [age, setAge] = useState('');
  const [heightUnit, setHeightUnit] = useState<HeightUnit>('cm');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg');
  const [weightVal, setWeightVal] = useState('');
  const [activityId, setActivityId] = useState('moderate');
  const [selectedGoal, setSelectedGoal] = useState<GoalId>('lose_slow');
  const [errors, setErrors] = useState<Errors>({});

  const clearErr = (field: keyof Errors) =>
    setErrors((p) => ({ ...p, [field]: undefined }));

  const heightCmValue = useMemo(() => {
    if (heightUnit === 'cm') return parseFloat(heightCm) || 0;
    return ((parseFloat(heightFt) || 0) * 12 + (parseFloat(heightIn) || 0)) * 2.54;
  }, [heightUnit, heightCm, heightFt, heightIn]);

  const weightKg = useMemo(() => {
    const v = parseFloat(weightVal);
    if (!v || v <= 0) return 0;
    return weightUnit === 'kg' ? v : v / 2.205;
  }, [weightVal, weightUnit]);

  const ageNum = parseInt(age) || 0;
  const multiplier = ACTIVITY_LEVELS.find((a) => a.id === activityId)?.multiplier ?? 1.55;

  const bmr = useMemo(
    () => (weightKg > 0 && heightCmValue > 0 && ageNum > 0)
      ? Math.round(calcBMR(gender, weightKg, heightCmValue, ageNum))
      : 0,
    [gender, weightKg, heightCmValue, ageNum]
  );
  const tdee = Math.round(bmr * multiplier);

  function handleCalculate() {
    const e: Errors = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!age || ageNum < 10 || ageNum > 100) e.age = 'Please enter a valid age (10–100)';
    if (heightUnit === 'cm' && (!heightCm || parseFloat(heightCm) < 50)) e.height = 'Please enter a valid height';
    if (heightUnit === 'ft' && (!heightFt || parseFloat(heightFt) < 1)) e.height = 'Please enter a valid height';
    if (!weightVal || weightKg <= 0) e.weight = 'Please enter a valid weight';
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

  const goal = GOALS.find((g) => g.id === selectedGoal)!;
  const targetCalories = tdee + goal.delta;
  const [pPct, cPct, fPct] = MACROS[selectedGoal];
  const proteinG = Math.round((targetCalories * pPct / 100) / 4);
  const carbsG = Math.round((targetCalories * cPct / 100) / 4);
  const fatG = Math.round((targetCalories * fPct / 100) / 9);

  return (
    <section id="calorie-calculator" className="py-20 bg-surface">
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
            Daily Calorie <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Find out exactly how many calories your body burns each day — then pick a goal and get a personalised Indian meal plan.
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
                <p className="text-text-muted text-sm mb-6 text-center">Step 1 of 2 — Your Profile</p>
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

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Age</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="10" max="100"
                        placeholder="e.g. 28"
                        value={age}
                        onChange={(e) => { setAge(e.target.value); clearErr('age'); }}
                        className={`w-full px-4 py-3 pr-16 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.age ? 'border-red-400' : 'border-gray-200'}`}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">years</span>
                    </div>
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
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

                  {/* Weight */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Body Weight</label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <input
                          type="number" min="20" max="300"
                          placeholder={weightUnit === 'kg' ? 'e.g. 65' : 'e.g. 143'}
                          value={weightVal}
                          onChange={(e) => { setWeightVal(e.target.value); clearErr('weight'); }}
                          className={`w-full px-4 py-3 pr-14 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.weight ? 'border-red-400' : 'border-gray-200'}`}
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
                    {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
                  </div>

                  {/* Activity Level */}
                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-3">Activity Level</label>
                    <div className="space-y-2">
                      {ACTIVITY_LEVELS.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setActivityId(a.id)}
                          className={`flex items-center gap-3 w-full rounded-2xl border p-3.5 text-left transition-all ${activityId === a.id ? 'border-primary bg-green-50 shadow-sm' : 'border-gray-200 bg-white hover:border-primary/40'}`}
                        >
                          <span className="text-2xl shrink-0">{a.icon}</span>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-semibold ${activityId === a.id ? 'text-primary' : 'text-text-primary'}`}>{a.label}</p>
                            <p className="text-xs text-text-muted truncate">{a.desc}</p>
                          </div>
                          {activityId === a.id && (
                            <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button onClick={handleCalculate} className="btn-primary w-full py-4 text-base">
                    Calculate My Calories →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 2: RESULTS ─── */}
            {step === 'results' && (
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

                {/* BMR + TDEE */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="rounded-2xl p-5 text-center" style={{ background: 'var(--gradient-start)' }}>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Basal Metabolic Rate</p>
                    <p className="text-3xl font-bold text-text-primary">{bmr.toLocaleString()}</p>
                    <p className="text-xs text-text-muted mt-1">kcal at rest / day</p>
                  </div>
                  <div className="rounded-2xl p-5 text-center" style={{ background: 'linear-gradient(135deg, #C8E6C9, #A5D6A7)' }}>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Maintenance Calories</p>
                    <p className="text-3xl font-bold text-primary">{tdee.toLocaleString()}</p>
                    <p className="text-xs text-text-muted mt-1">kcal total / day (TDEE)</p>
                  </div>
                </div>

                {/* Goal Selection */}
                <p className="text-sm font-semibold text-text-primary mb-3">Choose Your Goal</p>
                <div className="space-y-2 mb-8">
                  {GOALS.map((g) => {
                    const cals = tdee + g.delta;
                    const isSelected = selectedGoal === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => setSelectedGoal(g.id)}
                        className={`flex items-center gap-4 w-full rounded-2xl border p-4 text-left transition-all ${isSelected ? 'border-primary bg-green-50 shadow-sm' : 'border-gray-200 bg-white hover:border-primary/40'}`}
                      >
                        <div className="w-3 h-3 rounded-full shrink-0" style={{ background: g.color }} />
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-semibold ${isSelected ? 'text-primary' : 'text-text-primary'}`}>{g.label}</p>
                          <p className="text-xs text-text-muted">{g.tag}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-base font-bold text-text-primary">{cals.toLocaleString()}</p>
                          <p className="text-xs text-text-muted">kcal / day</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Macro breakdown for selected goal */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedGoal}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl border border-primary/20 bg-green-50 p-6 mb-6"
                  >
                    <p className="text-sm font-semibold text-text-primary mb-4">
                      Daily Macros for <span className="text-primary">{goal.label}</span>
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {[
                        { label: 'Protein', g: proteinG, color: '#2D5A3D', pct: pPct },
                        { label: 'Carbs', g: carbsG, color: '#3b82f6', pct: cPct },
                        { label: 'Fat', g: fatG, color: '#f97316', pct: fPct },
                      ].map((m) => (
                        <div key={m.label} className="text-center rounded-xl bg-white p-3 border border-gray-100">
                          <p className="text-xl font-bold" style={{ color: m.color }}>{m.g}g</p>
                          <p className="text-xs text-text-secondary font-medium">{m.label}</p>
                          <p className="text-[10px] text-text-muted">{m.pct}%</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white p-3 text-center border border-gray-100">
                        <p className="text-base font-bold text-text-primary">{targetCalories.toLocaleString()} kcal</p>
                        <p className="text-xs text-text-muted">Your daily target</p>
                      </div>
                      <div className="rounded-xl bg-white p-3 text-center border border-gray-100">
                        <p className="text-base font-bold text-primary">{goal.plan}</p>
                        <p className="text-xs text-text-muted">Recommended plan</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CTA */}
                <div className="rounded-2xl p-6 text-center" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
                  <p className="font-playfair font-bold text-text-primary text-lg mb-1">
                    Ready to hit {targetCalories.toLocaleString()} kcal, {name}?
                  </p>
                  <p className="text-text-secondary text-sm mb-4">
                    Let&apos;s create a personalised Indian meal plan that fits your calorie target and food preferences.
                  </p>
                  <button
                    onClick={() => {
                      sessionStorage.setItem('preferredGoal', goal.sessionGoal);
                      sessionStorage.setItem('preferredPlan', goal.plan);
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
          Calorie estimates are based on the Mifflin-St Jeor equation and standard activity multipliers. Actual needs may vary based on individual metabolism, hormonal factors, sleep quality, health conditions, and lifestyle. Macronutrient splits are general guidelines — consult a registered dietitian for a personalised plan.
        </p>
      </div>
    </section>
  );
}
