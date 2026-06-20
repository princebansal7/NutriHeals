'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';

type Step = 'setup' | 'build' | 'results';
type DietFilter = 'all' | 'veg';
type WeightUnit = 'kg' | 'lbs';

interface Food {
  id: string;
  emoji: string;
  name: string;
  servingDesc: string;
  protein: number;
  unit: string;
  isVeg: boolean;
}

const ALL_FOODS: Food[] = [
  // Grains & Staples
  { id: 'roti', emoji: '🫓', name: 'Roti', servingDesc: 'per roti (~40g)', protein: 3, unit: 'roti', isVeg: true },
  { id: 'rice', emoji: '🍚', name: 'Rice', servingDesc: '1 cup cooked (~200g)', protein: 5, unit: 'cup', isVeg: true },
  { id: 'paratha', emoji: '🫓', name: 'Paratha', servingDesc: '1 paratha (~80g)', protein: 5, unit: 'paratha', isVeg: true },
  { id: 'oats', emoji: '🌾', name: 'Oats', servingDesc: '1 cup cooked (~240g)', protein: 6, unit: 'cup', isVeg: true },
  { id: 'poha', emoji: '🍛', name: 'Poha', servingDesc: '1 serving (~200g)', protein: 5, unit: 'serving', isVeg: true },
  { id: 'upma', emoji: '🍜', name: 'Upma', servingDesc: '1 serving (~200g)', protein: 5, unit: 'serving', isVeg: true },
  { id: 'idli', emoji: '🍲', name: 'Idli', servingDesc: '2 idlis (~120g)', protein: 2, unit: 'serving', isVeg: true },
  // Dairy
  { id: 'milk', emoji: '🍼', name: 'Milk', servingDesc: '1 glass (~200ml)', protein: 6, unit: 'glass', isVeg: true },
  { id: 'dahi', emoji: '🫙', name: 'Dahi / Curd', servingDesc: '1 cup (~200g)', protein: 6, unit: 'cup', isVeg: true },
  { id: 'chaas', emoji: '🥛', name: 'Chaas / Buttermilk', servingDesc: '1 glass (~200ml)', protein: 3, unit: 'glass', isVeg: true },
  { id: 'greek_yogurt', emoji: '🥣', name: 'Greek Yogurt', servingDesc: '1 cup (~200g)', protein: 18, unit: 'cup', isVeg: true },
  { id: 'paneer', emoji: '🧀', name: 'Paneer', servingDesc: '1 piece (~100g)', protein: 18, unit: 'piece', isVeg: true },
  { id: 'paneer_tikka', emoji: '🧀', name: 'Paneer Tikka', servingDesc: '1 serving (~150g)', protein: 24, unit: 'serving', isVeg: true },
  { id: 'chai', emoji: '☕', name: 'Chai (with milk)', servingDesc: '1 cup (~150ml)', protein: 2, unit: 'cup', isVeg: true },
  // Eggs
  { id: 'eggs', emoji: '🥚', name: 'Eggs', servingDesc: 'per whole egg (~50g)', protein: 6, unit: 'egg', isVeg: false },
  { id: 'egg_bhurji', emoji: '🍳', name: 'Egg Bhurji', servingDesc: '2 eggs worth (~150g)', protein: 15, unit: 'serving', isVeg: false },
  // Legumes
  { id: 'dal', emoji: '🫘', name: 'Dal', servingDesc: '1 cup cooked (~200g)', protein: 14, unit: 'cup', isVeg: true },
  { id: 'rajma', emoji: '🫘', name: 'Rajma', servingDesc: '1 cup cooked (~200g)', protein: 16, unit: 'cup', isVeg: true },
  { id: 'chole', emoji: '🍛', name: 'Chole / Chana', servingDesc: '1 cup (~200g)', protein: 10, unit: 'cup', isVeg: true },
  { id: 'dal_makhani', emoji: '🥘', name: 'Dal Makhani', servingDesc: '1 cup (~200g)', protein: 10, unit: 'cup', isVeg: true },
  { id: 'sambhar', emoji: '🍲', name: 'Sambhar', servingDesc: '1 cup (~234g)', protein: 5, unit: 'cup', isVeg: true },
  { id: 'khichdi', emoji: '🍚', name: 'Khichdi', servingDesc: '1 serving (~250g)', protein: 9, unit: 'serving', isVeg: true },
  // Plant protein
  { id: 'soya_chunks', emoji: '🌱', name: 'Soya Chunks', servingDesc: '1 serving dry (~30g)', protein: 15, unit: 'serving', isVeg: true },
  { id: 'tofu', emoji: '🟨', name: 'Tofu', servingDesc: '1 serving (~100g)', protein: 8, unit: 'serving', isVeg: true },
  // Nuts
  { id: 'peanut_butter', emoji: '🥜', name: 'Peanut Butter', servingDesc: '1 tbsp (~16g)', protein: 4, unit: 'tbsp', isVeg: true },
  // Supplements
  { id: 'protein_powder', emoji: '💪', name: 'Protein Powder', servingDesc: '1 scoop (~30g)', protein: 24, unit: 'scoop', isVeg: true },
  { id: 'protein_bar', emoji: '🍫', name: 'Protein Bar', servingDesc: '1 bar', protein: 10, unit: 'bar', isVeg: true },
  // Non-veg
  { id: 'chicken_breast', emoji: '🍗', name: 'Chicken Breast', servingDesc: '1 serving cooked (~150g)', protein: 38, unit: 'serving', isVeg: false },
  { id: 'tandoori_chicken', emoji: '🍗', name: 'Tandoori Chicken', servingDesc: '1 serving (~200g)', protein: 44, unit: 'serving', isVeg: false },
  { id: 'butter_chicken', emoji: '🍗', name: 'Butter Chicken', servingDesc: '1 serving (~250g)', protein: 20, unit: 'serving', isVeg: false },
  { id: 'chicken_biryani', emoji: '🍗', name: 'Chicken Biryani', servingDesc: '1 serving (~300g)', protein: 21, unit: 'serving', isVeg: false },
  { id: 'mutton', emoji: '🥩', name: 'Mutton / Goat', servingDesc: '1 serving cooked (~150g)', protein: 39, unit: 'serving', isVeg: false },
  { id: 'fish', emoji: '🐟', name: 'Fish Fillet', servingDesc: '1 fillet (~120g)', protein: 24, unit: 'fillet', isVeg: false },
  { id: 'prawns', emoji: '🍤', name: 'Prawns', servingDesc: '1 serving (~100g)', protein: 20, unit: 'serving', isVeg: false },
];

const ACTIVITY_LEVELS = [
  { id: 'sedentary', emoji: '🪑', label: 'Sedentary', desc: 'Desk job, little/no exercise', multiplier: 0.8 },
  { id: 'moderate', emoji: '🚶', label: 'Moderate', desc: 'Light exercise 3–4 days/week', multiplier: 1.2 },
  { id: 'active', emoji: '🏃', label: 'Active', desc: 'Intense exercise 5–6 days/week', multiplier: 1.6 },
  { id: 'athlete', emoji: '🏋️', label: 'Very Active', desc: 'Hard daily training / athlete', multiplier: 2.0 },
];

const RING_R = 52;
const RING_C = 2 * Math.PI * RING_R;

// Indian-standard veg/non-veg indicator: square border + filled circle inside
function VegDot({ isVeg }: { isVeg: boolean }) {
  const color = isVeg ? '#2E7D32' : '#C62828';
  return (
    <div
      className="w-3.5 h-3.5 rounded-sm border-[1.5px] flex items-center justify-center shrink-0"
      style={{ borderColor: color }}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

function ProgressRing({ percent, added, goal }: { percent: number; added: number; goal: number }) {
  const offset = RING_C - (Math.min(percent, 100) / 100) * RING_C;
  const color = percent >= 100 ? '#2D5A3D' : percent >= 70 ? '#F59E0B' : '#EF4444';
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" className="shrink-0">
      <circle cx="65" cy="65" r={RING_R} fill="none" stroke="#E8F5E9" strokeWidth="11" />
      <motion.circle
        cx="65" cy="65" r={RING_R}
        fill="none" stroke={color} strokeWidth="11" strokeLinecap="round"
        strokeDasharray={RING_C}
        animate={{ strokeDashoffset: offset }}
        initial={false}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        transform="rotate(-90 65 65)"
      />
      <text x="65" y="59" textAnchor="middle" fontSize="22" fontWeight="700" fill="#1A1A1A" fontFamily="inherit">{added}g</text>
      <text x="65" y="78" textAnchor="middle" fontSize="11" fill="#8A8A8A" fontFamily="inherit">of {goal}g</text>
    </svg>
  );
}

function Stepper({ value, onChange }: { value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        disabled={value === 0}
        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        style={{ background: 'var(--gradient-start)', color: 'var(--primary)' }}
      >
        −
      </button>
      <span className="w-5 text-center font-semibold text-text-primary text-sm tabular-nums">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg text-white transition-all hover:opacity-90"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        +
      </button>
    </div>
  );
}

function FoodCard({ food, qty, onChange }: { food: Food; qty: number; onChange: (v: number) => void }) {
  const active = qty > 0;
  return (
    <motion.div
      layout
      className={`rounded-2xl p-4 border transition-all ${active ? 'border-primary/30 bg-green-50/70' : 'border-gray-100 bg-white'}`}
    >
      <div className="flex items-start justify-between mb-2">
        <span className="text-2xl">{food.emoji}</span>
        {/* Always-visible veg/non-veg indicator */}
        <VegDot isVeg={food.isVeg} />
      </div>
      <p className="font-semibold text-text-primary text-sm leading-tight mb-0.5">{food.name}</p>
      <p className="text-[11px] text-text-muted mb-2 leading-tight">{food.servingDesc}</p>
      <span
        className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mb-3"
        style={{ background: 'var(--gradient-start)', color: 'var(--primary)' }}
      >
        +{food.protein}g / {food.unit}
      </span>
      <Stepper value={qty} onChange={onChange} />
    </motion.div>
  );
}

function VegOnlyToggle({ value, onChange }: { value: DietFilter; onChange: (v: DietFilter) => void }) {
  const isVegOnly = value === 'veg';
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <VegDot isVeg={true} />
      <span className="text-sm font-medium text-text-secondary">Veg Only</span>
      <button
        role="switch"
        aria-checked={isVegOnly}
        onClick={() => onChange(isVegOnly ? 'all' : 'veg')}
        className={`relative w-10 h-5 rounded-full transition-colors duration-200 outline-none ${isVegOnly ? 'bg-primary' : 'bg-gray-300'}`}
      >
        <div className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${isVegOnly ? 'translate-x-5' : 'translate-x-0'}`} />
      </button>
    </label>
  );
}

export default function ProteinCalculator() {
  const router = useRouter();
  const pathname = usePathname();

  const [step, setStep] = useState<Step>('setup');
  const [name, setName] = useState('');
  const [weightVal, setWeightVal] = useState('');
  const [weightUnit, setWeightUnit] = useState<WeightUnit>('kg');
  const [activityId, setActivityId] = useState('moderate');
  // Default: show ALL foods (both veg and non-veg)
  const [dietFilter, setDietFilter] = useState<DietFilter>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [errors, setErrors] = useState<{ name?: string; weight?: string }>({});

  const weightKg = useMemo(() => {
    const v = parseFloat(weightVal);
    if (!v || v <= 0) return 0;
    return weightUnit === 'kg' ? v : v / 2.205;
  }, [weightVal, weightUnit]);

  const multiplier = ACTIVITY_LEVELS.find((a) => a.id === activityId)?.multiplier ?? 1.2;
  const dailyGoal = Math.round(weightKg * multiplier);

  const addedProtein = useMemo(
    () => Object.entries(quantities).reduce((sum, [id, qty]) => {
      const food = ALL_FOODS.find((f) => f.id === id);
      return sum + (food ? food.protein * qty : 0);
    }, 0),
    [quantities]
  );

  const stillNeeded = Math.max(0, dailyGoal - addedProtein);
  const progressPercent = dailyGoal > 0 ? (addedProtein / dailyGoal) * 100 : 0;

  // Show all foods by default; filter to veg-only when toggled
  const visibleFoods = useMemo(
    () => dietFilter === 'veg' ? ALL_FOODS.filter((f) => f.isVeg) : ALL_FOODS,
    [dietFilter]
  );

  const addedFoods = useMemo(
    () => Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => ({ food: ALL_FOODS.find((f) => f.id === id)!, qty }))
      .filter(({ food }) => !!food),
    [quantities]
  );

  const suggestions = useMemo(() => {
    if (addedProtein >= dailyGoal) return [];
    return ALL_FOODS
      .filter((f) => (dietFilter === 'veg' ? f.isVeg : true) && (!quantities[f.id] || quantities[f.id] === 0))
      .sort((a, b) => b.protein - a.protein)
      .slice(0, 6);
  }, [addedProtein, dailyGoal, dietFilter, quantities]);

  function setQty(id: string, v: number) {
    setQuantities((prev) => ({ ...prev, [id]: v }));
  }

  function handleSetup() {
    const e: typeof errors = {};
    if (!name.trim()) e.name = 'Please enter your name';
    if (!weightVal || parseFloat(weightVal) <= 0) e.weight = 'Please enter a valid weight';
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep('build');
  }

  function navigate(anchor: string) {
    if (pathname === '/') {
      document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(`/${anchor}`);
    }
  }

  function handleBookConsultation() {
    sessionStorage.setItem('preferredGoal', 'Weight Loss');
    navigate('#contact');
  }

  return (
    <section id="protein-calculator" className="py-20 bg-surface">
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
            Daily Protein <span className="text-gradient">Intake Calculator</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Enter your details, pick the Indian foods you eat every day, and instantly see how much protein you&apos;re getting — and what&apos;s missing.
          </p>
          {/* Legend */}
          <div className="flex items-center justify-center gap-5 mt-4">
            <div className="flex items-center gap-1.5">
              <VegDot isVeg={true} />
              <span className="text-xs text-text-muted">Vegetarian</span>
            </div>
            <div className="flex items-center gap-1.5">
              <VegDot isVeg={false} />
              <span className="text-xs text-text-muted">Non-Vegetarian</span>
            </div>
          </div>
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
                <p className="text-text-muted text-sm mb-6 text-center">Step 1 of 3 — Your Profile</p>
                <div className="max-w-xl mx-auto space-y-6">

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Priya"
                      value={name}
                      onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-2">Body Weight</label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <input
                          type="number"
                          min="20" max="300"
                          placeholder={weightUnit === 'kg' ? 'e.g. 65' : 'e.g. 143'}
                          value={weightVal}
                          onChange={(e) => { setWeightVal(e.target.value); setErrors((prev) => ({ ...prev, weight: undefined })); }}
                          className={`w-full px-4 py-3 pr-14 rounded-xl border bg-white text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all ${errors.weight ? 'border-red-400' : 'border-gray-200'}`}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted text-sm font-medium">{weightUnit}</span>
                      </div>
                      <div className="inline-flex rounded-xl overflow-hidden border border-gray-200 bg-white shrink-0">
                        {(['kg', 'lbs'] as WeightUnit[]).map((u) => (
                          <button
                            key={u}
                            onClick={() => setWeightUnit(u)}
                            className={`px-4 py-3 text-sm font-semibold transition-all ${weightUnit === u ? 'bg-primary text-white' : 'text-text-secondary hover:text-primary'}`}
                          >
                            {u}
                          </button>
                        ))}
                      </div>
                    </div>
                    {errors.weight && <p className="text-red-500 text-xs mt-1">{errors.weight}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-primary mb-3">Activity Level</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {ACTIVITY_LEVELS.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setActivityId(a.id)}
                          className={`flex flex-col items-start gap-1 rounded-2xl border p-3.5 text-left transition-all ${activityId === a.id ? 'border-primary bg-green-50 shadow-sm' : 'border-gray-200 bg-white hover:border-primary/40'}`}
                        >
                          <span className="text-xl">{a.emoji}</span>
                          <span className={`text-sm font-semibold ${activityId === a.id ? 'text-primary' : 'text-text-primary'}`}>{a.label}</span>
                          <span className="text-[11px] text-text-muted leading-tight">{a.desc}</span>
                          <span
                            className="mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: activityId === a.id ? 'var(--primary)' : 'var(--gradient-start)', color: activityId === a.id ? '#fff' : 'var(--primary)' }}
                          >
                            {a.multiplier}g / kg
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {weightKg > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-2xl p-4 flex items-center gap-4"
                      style={{ background: 'var(--gradient-start)' }}
                    >
                      <span className="text-3xl">🎯</span>
                      <div>
                        <p className="text-sm text-text-secondary">Your estimated daily protein goal</p>
                        <p className="text-2xl font-playfair font-bold text-primary">{dailyGoal}g / day</p>
                      </div>
                    </motion.div>
                  )}

                  <button onClick={handleSetup} className="btn-primary w-full py-3.5 text-base">
                    Build my plate →
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 2: BUILD ─── */}
            {step === 'build' && (
              <motion.div
                key="build"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                {/* Tracker header */}
                <div className="p-5 sm:p-6 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
                  <div className="flex items-center gap-5 flex-wrap">
                    <ProgressRing percent={progressPercent} added={addedProtein} goal={dailyGoal} />
                    <div className="flex-1 min-w-0 space-y-2">
                      <p className="font-playfair font-bold text-text-primary text-lg">{name}&apos;s protein plate</p>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-text-muted text-xs">Daily Goal</p>
                          <p className="font-bold text-text-primary">{dailyGoal}g</p>
                        </div>
                        <div>
                          <p className="text-text-muted text-xs">Added</p>
                          <p className="font-bold" style={{ color: 'var(--primary)' }}>{addedProtein}g</p>
                        </div>
                        <div>
                          <p className="text-text-muted text-xs">Still Need</p>
                          <p className="font-bold text-orange-500">{stillNeeded}g</p>
                        </div>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: progressPercent >= 100 ? 'var(--primary)' : progressPercent >= 70 ? '#F59E0B' : '#EF4444' }}
                          animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                          initial={false}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Food list */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                    <p className="text-sm font-semibold text-text-primary">What do you typically eat in a day?</p>
                    <VegOnlyToggle value={dietFilter} onChange={setDietFilter} />
                  </div>

                  <div className="overflow-y-auto pr-1" style={{ maxHeight: '420px' }}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {visibleFoods.map((food) => (
                        <FoodCard
                          key={food.id}
                          food={food}
                          qty={quantities[food.id] ?? 0}
                          onChange={(v) => setQty(food.id, v)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button onClick={() => setStep('setup')} className="btn-secondary px-5 py-3 text-sm">← Back</button>
                    <button onClick={() => setStep('results')} className="btn-primary flex-1 py-3 text-sm">Check my intake →</button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── STEP 3: RESULTS ─── */}
            {step === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="p-6 sm:p-8 lg:p-10"
              >
                <div className="mb-8">
                  <span className="text-4xl">{progressPercent >= 100 ? '🎉' : progressPercent >= 70 ? '👍' : '🎯'}</span>
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-text-primary mt-3">
                    {name}, you&apos;re at{' '}
                    <span style={{ color: progressPercent >= 100 ? 'var(--primary)' : progressPercent >= 70 ? '#F59E0B' : '#EF4444' }}>
                      {addedProtein}g
                    </span>
                  </h3>
                  <p className="text-text-secondary mt-1">
                    {progressPercent >= 100
                      ? `You've hit your ${dailyGoal}g goal — great work!`
                      : `You need ${stillNeeded}g more to hit your ${dailyGoal}g daily goal.`}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between text-xs text-text-muted mb-1.5">
                    <span>0g</span>
                    <span>{dailyGoal}g goal</span>
                  </div>
                  <div className="h-4 rounded-full bg-gray-100 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: progressPercent >= 100 ? 'var(--primary)' : progressPercent >= 70 ? '#F59E0B' : '#EF4444' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(progressPercent, 100)}%` }}
                      transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                    />
                  </div>
                  <p className="text-right text-xs text-text-muted mt-1">{Math.round(progressPercent)}% of daily goal</p>
                </div>

                {addedFoods.length > 0 ? (
                  <div className="mb-8 rounded-2xl border border-gray-100 overflow-hidden">
                    <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
                      <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">Your Protein Plate</p>
                    </div>
                    <div className="divide-y divide-gray-50">
                      {addedFoods.map(({ food, qty }) => (
                        <div key={food.id} className="flex items-center justify-between px-4 py-2.5">
                          <div className="flex items-center gap-2.5">
                            <span>{food.emoji}</span>
                            <VegDot isVeg={food.isVeg} />
                            <span className="text-sm text-text-primary">
                              {food.name}
                              <span className="text-text-muted text-xs ml-1">×{qty}</span>
                            </span>
                          </div>
                          <span className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>{food.protein * qty}g</span>
                        </div>
                      ))}
                      <div className="flex items-center justify-between px-4 py-3 bg-green-50/60">
                        <span className="text-sm font-semibold text-text-primary">Total protein</span>
                        <span className="font-bold text-primary">{addedProtein}g / {dailyGoal}g goal</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8 rounded-2xl border border-dashed border-gray-200 p-6 text-center text-text-muted text-sm">
                    No foods added yet. Go back and build your plate.
                  </div>
                )}

                {suggestions.length > 0 && stillNeeded > 0 && (
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-text-primary mb-3">Ways to close the gap</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {suggestions.map((food) => {
                        const servingsNeeded = Math.ceil(stillNeeded / food.protein);
                        return (
                          <div key={food.id} className="rounded-2xl border border-gray-100 bg-white p-3">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xl">{food.emoji}</span>
                              <VegDot isVeg={food.isVeg} />
                            </div>
                            <p className="text-sm font-semibold text-text-primary leading-tight">{food.name}</p>
                            <p className="text-[11px]" style={{ color: 'var(--primary)' }}>+{food.protein}g / {food.unit}</p>
                            <p className="text-[11px] text-text-muted mt-0.5">
                              Try {servingsNeeded} {servingsNeeded === 1 ? food.unit : food.unit + 's'}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Consultation CTA */}
                <div className="rounded-2xl p-6 mb-6" style={{ background: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))' }}>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <p className="font-playfair font-bold text-text-primary text-lg">Want a personalised protein plan?</p>
                      <p className="text-text-secondary text-sm mt-1">
                        Let&apos;s create a diet plan tailored to your goal, lifestyle, and food preferences — not a generic chart.
                      </p>
                    </div>
                    <button onClick={handleBookConsultation} className="btn-primary px-6 py-3 text-sm shrink-0">
                      Book Free Consultation
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep('build')} className="btn-secondary px-5 py-2.5 text-sm">← Edit plate</button>
                  <button
                    onClick={() => { setStep('setup'); setQuantities({}); setName(''); setWeightVal(''); setActivityId('moderate'); }}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors ml-auto"
                  >
                    Start over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <p className="text-center text-xs text-text-muted mt-5">
          Protein values are approximate and based on standard serving sizes. Individual needs may vary based on age, health conditions, activity level, and specific fitness goals. These estimates are a general guide — consult a registered dietitian for a personalised plan.
        </p>
      </div>
    </section>
  );
}
