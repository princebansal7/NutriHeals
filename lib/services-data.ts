export interface MealPlan {
  earlyMorning: string;
  breakfast: string;
  midMorning: string;
  lunch: string;
  eveningSnack: string;
  dinner: string;
  bedtime?: string;
}

export interface WeekPlan {
  weekNumber: number;
  theme: string;
  goals: string[];
  sampleDayMeals: MealPlan;
  foodsToEat: string[];
  foodsToAvoid: string[];
  followUp: string[];
}

export interface ServiceData {
  slug: string;
  name: string;
  icon: string;
  category: string;
  tagline: string;
  heroDescription: string;
  condition: {
    overview: string;
    symptoms: string[];
    causes: string[];
    whoAffected: string;
  };
  harms: {
    overview: string;
    risks: Array<{ icon: string; title: string; description: string }>;
  };
  nutritionBenefits: {
    overview: string;
    benefits: Array<{ icon: string; title: string; description: string }>;
  };
  monthPlan: WeekPlan[];
}

const services: ServiceData[] = [
  // ─── 1. WEIGHT LOSS ──────────────────────────────────────────────────────
  {
    slug: 'weight-loss',
    name: 'Weight Loss',
    icon: '⚖️',
    category: 'Weight Management',
    tagline: 'Sustainable fat loss through science-backed nutrition',
    heroDescription:
      'Lose weight the right way — no crash diets, no starvation. A personalised, clinically guided plan that creates a steady calorie deficit while keeping you nourished, energised, and satisfied.',
    condition: {
      overview:
        'Excess body weight occurs when calorie intake consistently exceeds calorie expenditure, leading to fat accumulation. It is classified by BMI: overweight (25–29.9) and obese (≥ 30). Weight gain is rarely just about "eating too much" — hormones, sleep, stress, and gut health all play major roles.',
      symptoms: [
        'Persistent fatigue and low energy',
        'Breathlessness with mild activity',
        'Joint pain especially in knees and lower back',
        'Increased sweating and skin chafing',
        'Poor sleep quality or sleep apnoea',
        'Low self-esteem and mood disturbances',
        'Irregular periods in women',
      ],
      causes: [
        'Excess calorie intake from processed, high-sugar, high-fat foods',
        'Sedentary lifestyle and reduced physical activity',
        'Hormonal imbalances (thyroid, insulin, cortisol)',
        'Chronic stress leading to emotional eating',
        'Poor sleep disrupting hunger hormones (ghrelin & leptin)',
        'Genetic predisposition',
        'Medications (steroids, antidepressants)',
      ],
      whoAffected:
        'Over 40 million Indians are classified as obese, with an additional 100 million categorised as overweight. It is increasingly common in urban populations aged 20–50, affecting both men and women due to desk jobs, processed food habits, and high-stress lifestyles.',
    },
    harms: {
      overview:
        'Untreated excess weight silently damages nearly every organ system. The risks compound over time — what starts as fatigue can progress into life-threatening chronic disease.',
      risks: [
        {
          icon: '❤️',
          title: 'Cardiovascular Disease',
          description:
            'Excess fat raises LDL cholesterol, triglycerides, and blood pressure, dramatically increasing the risk of heart attack and stroke.',
        },
        {
          icon: '🩺',
          title: 'Type 2 Diabetes',
          description:
            'Abdominal fat causes insulin resistance — the precursor to type 2 diabetes. Obese individuals are 7× more likely to develop it.',
        },
        {
          icon: '🦴',
          title: 'Joint Damage',
          description:
            'Every extra kg adds 4 kg of pressure on knee joints, causing premature cartilage wear, arthritis, and chronic pain.',
        },
        {
          icon: '😴',
          title: 'Sleep Apnoea',
          description:
            'Fat deposits around the neck and throat narrow airways, causing breathing interruptions during sleep and extreme daytime fatigue.',
        },
        {
          icon: '🧠',
          title: 'Mental Health',
          description:
            'Obesity is strongly linked to depression, anxiety, and low self-worth — creating a cycle where emotional stress drives further weight gain.',
        },
        {
          icon: '🫁',
          title: 'Fatty Liver (NAFLD)',
          description:
            'Excess dietary fat accumulates in the liver, leading to non-alcoholic fatty liver disease and, over time, cirrhosis.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'A well-structured nutrition plan is the most powerful and sustainable tool for weight loss. Unlike fad diets, clinical nutrition creates real, lasting change by addressing root causes — not just calories.',
      benefits: [
        {
          icon: '🔥',
          title: 'Controlled Calorie Deficit',
          description:
            'A 300–500 kcal/day deficit through whole foods triggers steady fat loss of 0.5–1 kg/week without muscle breakdown.',
        },
        {
          icon: '💪',
          title: 'Preserved Muscle Mass',
          description:
            'High-protein meals (legumes, eggs, dairy, lean meats) maintain lean muscle, keeping metabolism high as you lose fat.',
        },
        {
          icon: '🩸',
          title: 'Stable Blood Sugar',
          description:
            'Low-GI foods prevent insulin spikes, reduce hunger hormones, and eliminate the energy crashes that trigger cravings.',
        },
        {
          icon: '🌿',
          title: 'Reduced Inflammation',
          description:
            'Anti-inflammatory foods (turmeric, flaxseeds, vegetables) lower chronic inflammation that drives fat storage.',
        },
        {
          icon: '😊',
          title: 'Better Mood & Energy',
          description:
            'Balanced meals stabilise serotonin and dopamine, reducing emotional eating and improving motivation.',
        },
        {
          icon: '⏰',
          title: 'Long-Term Habit Building',
          description:
            'Structured meal timing and mindful eating retrain hunger cues, making healthy choices automatic over time.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Detox & Reset — Eliminating trigger foods',
        goals: [
          'Remove refined sugar, maida, and fried foods completely',
          'Drink 2.5–3 litres of water daily',
          'Establish 3 main meals + 2 snacks routine',
          'Record a food diary to identify hidden calories',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm detox drink with soaked nuts',
          breakfast: 'Wholegrain breakfast with plant-based or egg protein',
          midMorning: 'Seasonal fruit with a light dairy drink',
          lunch: 'Balanced meal with wholegrain roti, dal, sabzi and salad',
          eveningSnack: 'Light high-fibre snack with herbal tea',
          dinner: 'Light wholegrain dinner with vegetables and protein',
          bedtime: 'Warm soothing drink',
        },
        foodsToEat: [
          'Oats, daliya, millets (jowar, bajra)',
          'All seasonal vegetables (especially leafy greens)',
          'Moong dal, chana dal, masoor dal',
          'Low-fat curd, buttermilk, paneer (limited)',
          'Seasonal fruits (avoid mango, banana, grapes)',
          'Lemon water, green tea, herbal teas',
        ],
        foodsToAvoid: [
          'White rice, maida, bread, biscuits',
          'Fried snacks (samosa, pakora, chips)',
          'Cold drinks, packaged juices, sugar',
          'Full-fat dairy (cream, butter, ghee in excess)',
          'Processed meats and fast food',
        ],
        followUp: [
          'Weigh yourself on Day 1 and Day 7 (morning, empty stomach)',
          'Note energy levels and hunger patterns in food diary',
          'WhatsApp check-in with dietitian on Day 4',
          'Take measurements: waist, hips, thighs',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Macro Balance — Getting protein and fibre right',
        goals: [
          'Increase protein to 0.8–1g per kg body weight daily',
          'Add 1 portion of fibre-rich food to every meal',
          'Introduce 20–30 min daily walking',
          'Practice eating slowly (20 min per meal)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Infused water with soaked nuts',
          breakfast: 'Protein-rich savoury breakfast with curd',
          midMorning: 'Sprouted legume snack with a refreshing drink',
          lunch: 'Wholegrain meal with legumes and a cooling raita',
          eveningSnack: 'Light protein snack with green tea',
          dinner: 'Millet roti with a green vegetable and protein dish',
          bedtime: 'Warm spiced milk',
        },
        foodsToEat: [
          'Sprouts (moong, chana, matki)',
          'Brown rice, quinoa, bajra, jowar rotis',
          'Egg whites, paneer (low-fat), tofu',
          'Rajma, chole, lentils',
          'Flaxseeds, chia seeds (add to curd/smoothies)',
          'All green leafy vegetables',
        ],
        foodsToAvoid: [
          'Skipping meals — leads to overeating later',
          'Eating in front of screens',
          'Store-bought protein bars (often sugar-laden)',
          'Fruit juices — eat whole fruit instead',
          'Late-night eating after 9 PM',
        ],
        followUp: [
          'Mid-week weight check (Wednesday morning)',
          'Discuss protein sources that suit your preference/budget',
          'Review food diary with dietitian',
          'Adjust portion sizes based on hunger cues',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Metabolism Boost — Timing and smart swaps',
        goals: [
          'Practice intermittent eating window (7 AM – 8 PM)',
          'Add metabolism-boosting spices daily',
          'Increase water to 3 litres/day',
          'Reduce dinner portion by 20%',
        ],
        sampleDayMeals: {
          earlyMorning: 'Metabolism-boosting spiced water with soaked nuts',
          breakfast: 'Light wholegrain breakfast with a refreshing drink',
          midMorning: 'Fresh fruit with a small handful of nuts',
          lunch: 'Millet roti with mixed vegetables, dal and salad',
          eveningSnack: 'Light puffed snack with herbal tea',
          dinner: 'Light soup-based meal with a wholegrain option',
          bedtime: 'Calming herbal tea',
        },
        foodsToEat: [
          'Jeera, ajwain, methi, cinnamon (metabolism-boosting)',
          'Green tea, black coffee (unsweetened)',
          'Apple cider vinegar (1 tsp in water before meals)',
          'Chia seeds, flaxseeds',
          'Cucumber, lettuce, zucchini, bottle gourd',
          'Oats, quinoa',
        ],
        foodsToAvoid: [
          'Sugary snacks even in small amounts',
          'High-sodium foods (pickles, papad, packaged foods)',
          'Alcohol — empty calories and blocks fat burning',
          'Refined vegetable oils in excess',
        ],
        followUp: [
          'Full measurements review (waist, hips, weight)',
          'Discuss any plateaus — adjust calorie intake if needed',
          'Video/WhatsApp consultation to review progress',
          'Check sleep quality (poor sleep stalls weight loss)',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Maintenance Mode — Building habits for life',
        goals: [
          'Lock in 3 key eating habits that work for you',
          'Plan meals for the week every Sunday',
          'Learn to eat out healthily (restaurant guide)',
          'Set next month goal: maintain or continue losing',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with soaked nuts',
          breakfast: 'Protein-rich breakfast with wholegrain and healthy fat',
          midMorning: 'Mixed seasonal fruit bowl',
          lunch: 'Wholegrains with lean protein and stir-fried vegetables',
          eveningSnack: 'Plain protein snack or roasted legumes',
          dinner: 'Light Indian dinner with dal, vegetables and roti',
          bedtime: 'Warm turmeric milk',
        },
        foodsToEat: [
          'All the week 1–3 approved foods',
          'Home-cooked meals with minimal oil',
          'High-volume, low-calorie vegetables freely',
          'Protein at every meal',
        ],
        foodsToAvoid: [
          'Binging on weekends — consistency is key',
          'Going back to old habits',
          'Skipping the evening snack (causes dinner overeating)',
        ],
        followUp: [
          'End-of-month full review consultation',
          'Compare Day 1 vs Day 30 measurements and photos',
          'Plan Month 2 with adjusted targets',
          'Discuss maintenance vs continued weight loss strategy',
          'Blood tests if needed (thyroid, insulin, lipids)',
        ],
      },
    ],
  },
  // ─── 2. WEIGHT GAIN ──────────────────────────────────────────────────────
  {
    slug: 'weight-gain',
    name: 'Weight Gain',
    icon: '💪',
    category: 'Weight Management',
    tagline: 'Build healthy mass — muscle, not just fat',
    heroDescription:
      'Being underweight is just as harmful as being overweight. A clinically guided weight gain plan ensures you build lean muscle and healthy body mass through calorie-dense, nutrient-rich foods — not junk.',
    condition: {
      overview:
        'Underweight is defined as a BMI below 18.5. It means the body lacks sufficient fat, muscle, and bone density to function optimally. Unlike popular belief, gaining weight healthily is not about eating anything in excess — it requires a structured calorie surplus with the right macronutrient balance to build muscle and restore vital tissues.',
      symptoms: [
        'Persistent fatigue and weakness',
        'Frequent illness due to a weakened immune system',
        'Brittle hair, dry skin, and fragile nails',
        'Irregular or absent periods in women',
        'Poor concentration and brain fog',
        'Slow wound healing',
        'Feeling cold even in normal temperatures',
        'Visible bones, muscle loss, sunken appearance',
      ],
      causes: [
        'Insufficient calorie intake relative to energy expenditure',
        'Malabsorption conditions (IBS, celiac disease)',
        'Hyperthyroidism (overactive thyroid burns calories rapidly)',
        'Chronic stress, anxiety, or depression suppressing appetite',
        'Underlying illness (TB, cancer, diabetes)',
        'Genetic high metabolism',
        'Eating disorders (anorexia, restrictive eating)',
        'Poor appetite due to medications',
      ],
      whoAffected:
        'Around 15–20% of Indians are underweight, more common in rural areas, adolescents, and young women. Athletes and gym-goers also seek clinical guidance for lean muscle gain.',
    },
    harms: {
      overview:
        'Chronic underweight is a medical concern — it weakens immunity, compromises organ function, and increases mortality risk. The body begins breaking down its own muscle and organs for energy.',
      risks: [
        {
          icon: '🦠',
          title: 'Weakened Immunity',
          description:
            'Insufficient protein and micronutrients cripple the immune system, making you prone to frequent infections, slow recovery, and poor vaccine response.',
        },
        {
          icon: '🦴',
          title: 'Osteoporosis',
          description:
            'Low body weight correlates with low bone density, increasing the risk of fractures, stress injuries, and early-onset osteoporosis — especially in women.',
        },
        {
          icon: '🫀',
          title: 'Heart Complications',
          description:
            'Severe undernutrition causes the heart muscle to weaken (cardiac atrophy), leading to irregular heartbeat, low blood pressure, and in extreme cases, heart failure.',
        },
        {
          icon: '🌸',
          title: 'Hormonal Disruption',
          description:
            'Low body fat disrupts oestrogen production in women, causing irregular periods, infertility, and early menopause. Men experience low testosterone.',
        },
        {
          icon: '🧠',
          title: 'Cognitive Decline',
          description:
            'The brain is heavily fat-dependent. Chronic undernutrition impairs concentration, memory, mood, and decision-making — often mistaken for depression.',
        },
        {
          icon: '💊',
          title: 'Anaemia & Nutrient Deficiencies',
          description:
            'Iron, B12, folate, and zinc deficiencies are common, leading to anaemia, fatigue, hair loss, and poor skin health.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'A structured weight gain plan creates a calculated calorie surplus using whole, nutrient-dense foods. It prioritises protein for muscle synthesis, healthy fats for hormones, and complex carbs for energy — so you gain the right kind of weight.',
      benefits: [
        {
          icon: '🍗',
          title: 'Lean Muscle Building',
          description:
            'High-protein meals paired with strength cues promote muscle protein synthesis — building actual muscle mass rather than storing excess fat.',
        },
        {
          icon: '⚡',
          title: 'Sustained Energy',
          description:
            'Calorie-dense whole foods (nuts, avocado, whole grains, dairy) provide steady energy release, eliminating fatigue and improving daily performance.',
        },
        {
          icon: '🛡️',
          title: 'Stronger Immunity',
          description:
            'Adequate zinc, iron, B12, and vitamin D from a balanced plan rebuilds the immune system rapidly, reducing illness frequency.',
        },
        {
          icon: '🦴',
          title: 'Better Bone Density',
          description:
            'Calcium, vitamin D, and phosphorus-rich foods (milk, paneer, sesame seeds) strengthen bones and reduce fracture risk.',
        },
        {
          icon: '🌸',
          title: 'Hormonal Restoration',
          description:
            'Adequate healthy fats (ghee, nuts, seeds) restore oestrogen and testosterone to healthy levels, improving periods, libido, and mood.',
        },
        {
          icon: '✨',
          title: 'Better Skin, Hair & Nails',
          description:
            'Protein, biotin, and essential fatty acids repair brittle hair, dry skin, and weak nails — visibly improving appearance within weeks.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Calorie Foundation — Establishing a surplus',
        goals: [
          'Calculate your TDEE and add 300–500 kcal/day surplus',
          'Eat 5–6 small meals every 2.5–3 hours — never skip',
          'Aim for 1.2–1.5g protein per kg body weight daily',
          'Start a food diary to track calorie intake',
        ],
        sampleDayMeals: {
          earlyMorning: 'Full-fat milk with soaked nuts and dried fruit',
          breakfast: 'Calorie-dense breakfast with eggs or nut butter and wholegrains',
          midMorning: 'Calorie-rich fruit with full-fat dairy and mixed nuts',
          lunch: 'Generous wholegrain meal with legumes and a protein dish',
          eveningSnack: 'Wholesome snack with nut butter and full-fat milk',
          dinner: 'Hearty Indian dinner with wholegrains, dal and vegetables',
          bedtime: 'Warm nourishing milk with adaptogens',
        },
        foodsToEat: [
          'Full-fat dairy — milk, curd, paneer, cheese',
          'Nuts and nut butters — almonds, walnuts, peanut butter, cashews',
          'Eggs, chicken, fish (if non-vegetarian)',
          'Bananas, mangoes, avocado, dried fruits',
          'Rice, paratha with ghee, whole wheat bread',
          'Rajma, chole, dal makhani, moong dal',
        ],
        foodsToAvoid: [
          'Low-fat or diet versions of food products',
          'Excessive junk food — calories without nutrients',
          'Skipping meals or going 4+ hours without eating',
          'Excessive cardio exercise without resistance training',
          'Caffeine in excess (suppresses appetite)',
        ],
        followUp: [
          'Record body weight on Day 1 (morning, empty stomach)',
          'Note hunger levels — are you able to finish all meals?',
          'WhatsApp check-in Day 4 to adjust portion sizes',
          'Take body measurements: chest, arms, thighs, waist',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Protein Priority — Muscle-building nutrition',
        goals: [
          'Ensure protein is present at every single meal',
          'Add a post-workout protein snack if exercising',
          'Introduce calorie-boosting add-ons (ghee, seeds, nuts) to every meal',
          'Drink 2.5–3 litres of water but not before/during meals (reduces appetite)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Full-fat milk with soaked nuts and dates',
          breakfast: 'Protein-packed savoury breakfast with a calorie-rich drink',
          midMorning: 'Sprouted legumes with a calorie-dense fruit',
          lunch: 'Generous wholegrain meal with a rich protein curry and dal',
          eveningSnack: 'Calorie-dense protein smoothie or wholesome snack',
          dinner: 'Hearty roti-based dinner with rich dal and vegetables',
          bedtime: 'Warm spiced full-fat milk',
        },
        foodsToEat: [
          'Paneer, tofu, soya chunks',
          'Whole eggs (up to 3/day)',
          'Greek yoghurt, cottage cheese',
          'Rajma, black chana, lentils',
          'Pumpkin seeds, sunflower seeds, flaxseeds (add to everything)',
          'Avocado, olives, coconut milk',
        ],
        foodsToAvoid: [
          'Long gaps between meals',
          'Diet/zero-calorie drinks',
          'Excessive fibre (fills you up, reduces total calorie intake)',
          'Very spicy food that reduces appetite',
        ],
        followUp: [
          'Mid-week weight check — aiming for 0.3–0.5 kg gain',
          'Review food diary for protein gaps',
          'Discuss digestive comfort — is the volume manageable?',
          'Adjust meal timing if appetite is low',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Healthy Fats & Micronutrients — Quality mass',
        goals: [
          'Add 2 tbsp of healthy fat (ghee/olive oil/nut butter) to every meal',
          'Include iron and B12 sources daily for energy and haemoglobin',
          'Try calorie-boosting cooking methods: sautéing in ghee, adding cream to curries',
          'Get 7–8 hours of sleep — muscle repair and growth hormone release peak during deep sleep',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm milk with healthy fat and soaked dried fruit',
          breakfast: 'Protein-rich savoury pancake with a calorie-dense drink',
          midMorning: 'Nutrient-dense fruit and nut smoothie',
          lunch: 'Generous rice-based meal with egg or paneer curry and dal',
          eveningSnack: 'Nut butter snack with warm milk',
          dinner: 'Wholesome roti dinner with a rich dal and vegetables',
          bedtime: 'Warm golden milk with adaptogens',
        },
        foodsToEat: [
          'Ghee (1–2 tsp per meal)',
          'Avocado, coconut oil, olive oil',
          'Dried fruits — figs, raisins, apricots, dates',
          'Chicken liver, eggs (iron + B12)',
          'Sesame seeds, flaxseeds (calcium + omega-3)',
          'Sweet potato, banana, mango (healthy calorie-dense carbs)',
        ],
        foodsToAvoid: [
          'Processed oils — refined sunflower or palm oil',
          'Trans fats — margarine, vanaspati',
          'Excessive alcohol — disrupts protein synthesis',
          'Very high fibre foods before meals (psyllium husk etc.)',
        ],
        followUp: [
          'Full body measurements: compare to Week 1',
          'Discuss any digestive issues — gas, bloating',
          'Review sleep quality (critical for muscle repair)',
          'Adjust ghee/fat quantities based on digestion comfort',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Consolidation — Locking in the gains',
        goals: [
          'Standardise your 3 most effective meals from the month',
          'Create a weekly meal prep routine (Sundays)',
          'Learn calorie-dense restaurant options for social eating',
          'Set Month 2 target: continue gaining or shift to body recomposition',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm milk with soaked nuts and dried fruit',
          breakfast: 'Wholesome paratha-based breakfast or calorie-rich milkshake with savoury dish',
          midMorning: 'Calorie-dense mixed fruit bowl with nuts',
          lunch: 'Rice-based meal with rich dal and protein curry',
          eveningSnack: 'Homemade energy snack with full-fat milk',
          dinner: 'Hearty roti dinner with dal and vegetables',
          bedtime: 'Full-fat milk with nourishing adaptogens',
        },
        foodsToEat: [
          'All previously approved calorie-dense foods',
          'Homemade protein ladoos, energy balls',
          'Continue nuts, seeds, dairy consistently',
          'Seasonal fruits daily for micronutrients',
        ],
        foodsToAvoid: [
          'Reverting to low-calorie eating on busy days',
          'Skipping the bedtime milk (important for overnight recovery)',
          'Obsessing over the scale daily — weight fluctuates',
        ],
        followUp: [
          'End-of-month full review — weight, measurements, energy levels',
          'Reassess BMI and target weight',
          'Plan Month 2: same surplus or shift strategy',
          'Blood test if needed: haemoglobin, vitamin D, B12',
          'Discuss adding a resistance training routine if not already',
        ],
      },
    ],
  },

  // ─── 3. PMOS (formerly PCOS / PCOD) ─────────────────────────────────────
  {
    slug: 'pcos-pcod',
    name: 'PMOS Management',
    icon: '🌸',
    category: 'Hormonal Health',
    tagline: 'Balance your hormones naturally through food',
    heroDescription:
      'PMOS (Polyendocrine Metabolic Ovarian Syndrome, formerly PCOS/PCOD) is one of the most common yet most mismanaged hormonal disorders. A targeted anti-inflammatory, low-GI nutrition plan can regulate your cycle, reduce symptoms, and restore hormonal balance — without harsh medications.',
    condition: {
      overview:
        'Polyendocrine Metabolic Ovarian Syndrome (PMOS) — formerly known as PCOS/PCOD — is a hormonal and metabolic disorder where the ovaries produce excess androgens (male hormones), disrupting the normal ovulation cycle. The new name, adopted by global endocrine experts, better reflects the condition\'s complex metabolic reality beyond the ovaries. It is deeply linked to insulin resistance and chronic inflammation.',
      symptoms: [
        'Irregular, delayed, or absent menstrual periods',
        'Excessive facial and body hair (hirsutism)',
        'Acne and oily skin, especially on the jaw and chin',
        'Hair thinning or loss from the scalp (androgenic alopecia)',
        'Weight gain especially around the abdomen',
        'Darkening of skin in neck creases and underarms (acanthosis nigricans)',
        'Difficulty conceiving (reduced fertility)',
        'Mood swings, anxiety, and depression',
        'Fatigue after meals and sugar cravings',
      ],
      causes: [
        'Insulin resistance — cells ignore insulin, causing high circulating insulin levels',
        'Elevated androgens (testosterone) from overstimulated ovaries',
        'Chronic low-grade inflammation from poor diet',
        'High intake of refined carbohydrates and sugar',
        'Sedentary lifestyle',
        'Chronic stress elevating cortisol (which worsens insulin resistance)',
        'Genetic predisposition (mother or sister with PMOS)',
        'Endocrine-disrupting chemicals in environment or skincare',
      ],
      whoAffected:
        'PMOS (formerly PCOS/PCOD) affects 1 in 5 women of reproductive age in India — approximately 20% of Indian women. It is the leading cause of female infertility. Onset typically occurs in the late teens to early 30s.',
    },
    harms: {
      overview:
        'Left unmanaged, PMOS progresses far beyond irregular periods. Its metabolic roots mean it silently increases the risk of serious long-term diseases, making early dietary intervention critical.',
      risks: [
        {
          icon: '🩸',
          title: 'Type 2 Diabetes',
          description:
            'Up to 50% of women with PMOS develop type 2 diabetes or prediabetes by age 40 due to underlying insulin resistance that worsens without dietary intervention.',
        },
        {
          icon: '❤️',
          title: 'Cardiovascular Disease',
          description:
            'PMOS raises LDL cholesterol, triglycerides, and blood pressure — significantly increasing the risk of heart attack and stroke compared to women without PMOS.',
        },
        {
          icon: '🌸',
          title: 'Infertility',
          description:
            'Chronic anovulation (failure to release eggs) prevents conception. PMOS is responsible for up to 30% of all female infertility cases in India.',
        },
        {
          icon: '🫁',
          title: 'Endometrial Cancer',
          description:
            'Lack of regular ovulation means the uterine lining is never properly shed, increasing the risk of endometrial hyperplasia and cancer over time.',
        },
        {
          icon: '🧠',
          title: 'Mental Health Disorders',
          description:
            'Hormonal chaos combined with weight gain, acne, and hair loss significantly increases rates of depression, anxiety, and body dysmorphia in PMOS patients.',
        },
        {
          icon: '😴',
          title: 'Sleep Apnoea',
          description:
            'Women with PMOS are 5–10× more likely to have sleep apnoea due to elevated androgens affecting airway muscle tone, compounding fatigue and insulin resistance.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Nutrition is the most evidence-backed first-line treatment for PMOS. A low-GI, anti-inflammatory diet directly addresses insulin resistance — the metabolic root cause — and can restore menstrual regularity within 3 months.',
      benefits: [
        {
          icon: '🩸',
          title: 'Improved Insulin Sensitivity',
          description:
            'Low-GI foods (millets, oats, legumes) reduce insulin spikes, lowering circulating insulin and directly decreasing androgen production by the ovaries.',
        },
        {
          icon: '🌸',
          title: 'Regular Menstrual Cycles',
          description:
            'Correcting insulin resistance often restores ovulation within 8–12 weeks, regularising periods without hormonal medication.',
        },
        {
          icon: '⚖️',
          title: 'Weight Management',
          description:
            'Even a 5–10% reduction in body weight in overweight PMOS patients significantly reduces androgen levels and restores hormonal balance.',
        },
        {
          icon: '🌿',
          title: 'Reduced Inflammation',
          description:
            'Omega-3 fats, antioxidants, and turmeric reduce the chronic inflammation that drives androgen excess and worsens PMOS symptoms.',
        },
        {
          icon: '✨',
          title: 'Better Skin & Hair',
          description:
            'Reducing androgens through diet decreases acne, controls oiliness, and slows androgenic hair loss — with visible improvement in 6–8 weeks.',
        },
        {
          icon: '🧠',
          title: 'Mood & Energy Stability',
          description:
            'Balanced blood sugar eliminates energy crashes and mood swings, while adequate magnesium and B-vitamins support serotonin production.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Blood Sugar Reset — Eliminating insulin spikes',
        goals: [
          'Remove all refined sugar, white rice, maida, and packaged foods',
          'Eat every 3 hours — no meal longer than 3.5 hours apart',
          'Start every morning with warm methi or jeera water before any food',
          'Begin 30-min walk after lunch or dinner daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm hormone-balancing infused water',
          breakfast: 'Low-GI savoury breakfast with probiotic curd',
          midMorning: 'Low-GI fruit with soaked nuts',
          lunch: 'Millet-based meal with leafy green dal and vegetables',
          eveningSnack: 'Roasted legumes with anti-inflammatory herbal tea',
          dinner: 'Light millet roti dinner with sautéed vegetables',
          bedtime: 'Warm milk with blood-sugar-balancing spice',
        },
        foodsToEat: [
          'Millets — jowar, bajra, ragi, barnyard millet',
          'Moong dal, masoor dal, chana dal',
          'Methi (fenugreek) — seeds, leaves, in rotis',
          'Cinnamon, turmeric, ginger (anti-inflammatory)',
          'All green vegetables (spinach, broccoli, beans)',
          'Guava, apple, pomegranate (low-GI fruits)',
        ],
        foodsToAvoid: [
          'White rice, bread, maida, suji',
          'Sugar, jaggery in excess, honey in excess',
          'Packaged biscuits, namkeen, chips',
          'Cold drinks, fruit juices, energy drinks',
          'Full-fat dairy in excess (especially if acne-prone)',
          'Processed meats and trans fats',
        ],
        followUp: [
          'Note menstrual cycle date and any current symptoms',
          'Record fasting blood sugar if available',
          'WhatsApp check-in on Day 4',
          'Start symptom tracker: energy, bloating, mood, cravings',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Hormone-Healing Foods — Anti-inflammatory nutrition',
        goals: [
          'Add omega-3 rich foods every day (flaxseeds, walnuts, fish)',
          'Include inositol-rich foods (citrus fruits, whole grains, legumes)',
          'Reduce dairy if acne or skin oiliness is a concern',
          'Add 1 tbsp flaxseed powder to curd or smoothies daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with soaked nuts',
          breakfast: 'Seed and grain porridge with low-fat dairy or millet roti with curd',
          midMorning: 'Inositol-rich fruit with anti-inflammatory seeds',
          lunch: 'Wholegrains with mixed bean salad and fresh vegetables',
          eveningSnack: 'Hormone-supportive seeds with androgen-reducing herbal tea',
          dinner: 'Millet roti with leafy greens and plant or egg protein',
          bedtime: 'Calming herbal tea',
        },
        foodsToEat: [
          'Flaxseeds (1 tbsp/day ground) — phytoestrogens balance oestrogen',
          'Walnuts, chia seeds (omega-3)',
          'Spearmint tea (proven to lower testosterone)',
          'Turmeric milk — anti-inflammatory',
          'Soy (moderate) — isoflavones support hormone balance',
          'Dark leafy greens — magnesium for insulin sensitivity',
        ],
        foodsToAvoid: [
          'Excess dairy (milk, cheese) — can raise IGF-1 and androgens',
          'Red meat in excess',
          'Refined vegetable oils',
          'High-fructose foods (too much fruit at once)',
          'Alcohol — worsens liver oestrogen metabolism',
        ],
        followUp: [
          'Review skin and acne changes',
          'Check if bloating/constipation has reduced',
          'Assess energy levels after meals — are crashes reducing?',
          'Discuss spearmint tea if androgens are high',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Gut Health & Stress Reduction — The hormone-gut connection',
        goals: [
          'Add probiotic foods daily (curd, kefir, homemade kanji)',
          'Eat meals without screens — mindful eating reduces cortisol',
          'Practice 10-min deep breathing or yoga after dinner',
          'Prioritise 7–8 hours of sleep — poor sleep worsens cortisol and insulin',
        ],
        sampleDayMeals: {
          earlyMorning: 'Anti-inflammatory warm water with nuts',
          breakfast: 'Fermented grain breakfast with probiotic drink',
          midMorning: 'Low-GI fruit with hormone-supportive seeds',
          lunch: 'Probiotic-rich curd-based meal with vegetables',
          eveningSnack: 'Roasted legumes with anti-androgen herbal tea',
          dinner: 'Millet roti with dal and leafy greens',
          bedtime: 'Warm adaptogen milk to reduce cortisol',
        },
        foodsToEat: [
          'Probiotic foods: homemade curd, kanji (beetroot/carrot), kefir',
          'Prebiotic foods: onion, garlic, banana (in moderation)',
          'Magnesium-rich foods: spinach, pumpkin seeds, dark chocolate (small)',
          'Vitamin D sources: eggs, fortified milk, mushrooms',
          'Ashwagandha (adaptogen) — reduces cortisol naturally',
          'Berries — antioxidants reduce inflammation',
        ],
        foodsToAvoid: [
          'Ultra-processed foods (gut microbiome disruptors)',
          'Artificial sweeteners — disrupt gut bacteria',
          'Very spicy food if digestive sensitivity is present',
          'Late-night eating (raises cortisol and blood sugar)',
        ],
        followUp: [
          'Assess digestive comfort — bloating, regularity',
          'Has period arrived? Note any changes in flow or cramping',
          'Review sleep duration and quality',
          'Mid-month full consultation to assess progress',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Cycle Regulation — Sustaining the changes',
        goals: [
          'Maintain all dietary changes consistently — no "cheat week"',
          'Continue daily 30-min activity (yoga, walk, or light gym)',
          'Plan meals for the upcoming month in advance',
          'Establish a stress-management routine alongside the diet',
        ],
        sampleDayMeals: {
          earlyMorning: 'Hormone-balancing warm infused water with soaked nuts',
          breakfast: 'Millet-based savoury breakfast with probiotic curd',
          midMorning: 'Low-GI fruit with anti-inflammatory seeds in curd',
          lunch: 'Millet meal with legumes, vegetables and cooling raita',
          eveningSnack: 'Anti-androgen herbal tea with light puffed snack',
          dinner: 'Multigrain roti with dal and leafy green protein dish',
          bedtime: 'Calming herbal or adaptogen milk',
        },
        foodsToEat: [
          'All established PMOS-friendly foods from Weeks 1–3',
          'Continue flaxseeds, spearmint tea, turmeric daily',
          'Seasonal fruits and vegetables',
          'Probiotic foods regularly',
        ],
        foodsToAvoid: [
          'Any return to refined sugar or maida',
          'Skipping meals — destabilises blood sugar',
          'Excessive stress without management tools',
        ],
        followUp: [
          'End-of-month full review consultation',
          'Record any menstrual cycle changes over the month',
          'Compare symptom tracker (Week 1 vs Week 4): acne, energy, cravings',
          'Blood test review if available: fasting insulin, testosterone, AMH',
          'Plan Month 2 — continue anti-inflammatory diet with adjustments',
        ],
      },
    ],
  },

  // ─── 4. DIABETES MANAGEMENT ──────────────────────────────────────────────
  {
    slug: 'diabetes',
    name: 'Diabetes Management',
    icon: '🩺',
    category: 'Medical Conditions',
    tagline: 'Control your blood sugar through the power of food',
    heroDescription:
      'Diabetes cannot be cured, but it can be very effectively managed — and in prediabetes, even reversed — through clinical nutrition. The right foods, in the right portions, at the right times, can normalise blood sugar and reduce medication dependence.',
    condition: {
      overview:
        'Type 2 Diabetes Mellitus (T2DM) is a chronic metabolic disorder where the body either cannot produce enough insulin or cannot use it effectively (insulin resistance), resulting in persistently elevated blood glucose. Prediabetes — fasting glucose 100–125 mg/dL — is the warning stage. Unlike Type 1, Type 2 is largely driven by lifestyle and diet, making nutrition the most powerful management tool.',
      symptoms: [
        'Frequent urination, especially at night (polyuria)',
        'Excessive thirst (polydipsia)',
        'Unexplained fatigue and weakness',
        'Blurred vision',
        'Slow healing of cuts and wounds',
        'Frequent infections (skin, gums, urinary)',
        'Tingling or numbness in hands and feet',
        'Unexplained weight loss (in some cases)',
        'Dark patches on skin — neck, armpits (acanthosis nigricans)',
      ],
      causes: [
        'Insulin resistance from excess visceral/abdominal fat',
        'High intake of refined carbohydrates and sugary foods',
        'Sedentary lifestyle reducing insulin sensitivity',
        'Genetic predisposition — family history of T2DM',
        'Obesity and central adiposity',
        'Chronic stress raising cortisol, which elevates blood glucose',
        'Poor sleep disrupting glucose metabolism',
        'PMOS (in women) — associated insulin resistance',
      ],
      whoAffected:
        'India has over 101 million diabetics (2023 data), making it the diabetes capital of the world. Indians are genetically prone to insulin resistance at lower BMI levels. Indians develop diabetes 10 years younger than Western populations on average.',
    },
    harms: {
      overview:
        'Uncontrolled blood sugar is like rust — it slowly corrodes every blood vessel and nerve in the body. The complications of poorly managed diabetes are severe, disabling, and often irreversible.',
      risks: [
        {
          icon: '👁️',
          title: 'Diabetic Retinopathy',
          description:
            'High glucose damages the tiny blood vessels in the retina. It is the leading cause of new blindness in working-age adults in India, affecting over 30% of diabetics.',
        },
        {
          icon: '🫘',
          title: 'Diabetic Nephropathy',
          description:
            'Damaged kidney blood vessels lose their filtering ability, leading to protein in urine, chronic kidney disease, and eventually dialysis dependency.',
        },
        {
          icon: '⚡',
          title: 'Diabetic Neuropathy',
          description:
            'Nerve damage causes burning, tingling, and numbness in feet and hands. Severe cases lead to foot ulcers and amputation — diabetes accounts for 60% of non-traumatic lower limb amputations.',
        },
        {
          icon: '❤️',
          title: 'Cardiovascular Disease',
          description:
            'Diabetics have 2–4× higher risk of heart attack and stroke. High glucose accelerates atherosclerosis (plaque buildup) in arteries throughout the body.',
        },
        {
          icon: '🦶',
          title: 'Diabetic Foot & Gangrene',
          description:
            'Poor circulation and neuropathy make minor foot injuries fail to heal, progressing to ulcers, infections, and in severe cases, amputation.',
        },
        {
          icon: '🧠',
          title: 'Cognitive Decline',
          description:
            'Chronic high glucose damages brain blood vessels, doubling the risk of Alzheimer\'s disease and vascular dementia. Some researchers call Alzheimer\'s "Type 3 Diabetes."',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Food is the most direct lever you have on blood glucose. Clinical nutrition for diabetes is not about eating less — it is about choosing the right foods in the right combinations to keep glucose stable throughout the day, every day.',
      benefits: [
        {
          icon: '📉',
          title: 'Stable Blood Glucose',
          description:
            'Low-GI meals — millets, legumes, vegetables — produce a slow, gradual rise in blood sugar, avoiding the dangerous spikes that damage organs over time.',
        },
        {
          icon: '💊',
          title: 'Reduced Medication Dependence',
          description:
            'Studies show that structured dietary intervention can reduce HbA1c by 1–2%, potentially delaying or reducing the need for diabetes medication.',
        },
        {
          icon: '⚖️',
          title: 'Weight Reduction',
          description:
            'Even 5–7% body weight loss in overweight diabetics dramatically improves insulin sensitivity and blood glucose control.',
        },
        {
          icon: '🩸',
          title: 'Better HbA1c Over Time',
          description:
            'Consistent dietary discipline brings down the 3-month average blood glucose marker (HbA1c), the gold standard for diabetes control.',
        },
        {
          icon: '🛡️',
          title: 'Organ Protection',
          description:
            'Keeping glucose in range protects the kidneys, eyes, nerves, and heart from damage — preventing all major diabetic complications.',
        },
        {
          icon: '⚡',
          title: 'Steady Energy All Day',
          description:
            'Balanced meals eliminate the extreme highs and lows of blood sugar, providing consistent energy, better focus, and no afternoon crashes.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Carbohydrate Awareness — Understanding what raises sugar',
        goals: [
          'Learn which carbohydrates are high-GI vs low-GI',
          'Eliminate all simple sugars: sugar, jaggery, honey, fruit juice',
          'Replace white rice and maida with millets, oats, or brown rice',
          'Never eat carbohydrates alone — always pair with protein or fat',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm blood-sugar-lowering infused water with soaked nuts',
          breakfast: 'Low-GI wholegrain breakfast with protein',
          midMorning: 'Low-GI fruit with a handful of nuts',
          lunch: 'Millet roti with lentil dal and vegetables',
          eveningSnack: 'Roasted legumes with blood-sugar-friendly herbal tea',
          dinner: 'Low-GI grain-based light dinner with greens',
          bedtime: 'Warm unsweetened milk with spice',
        },
        foodsToEat: [
          'Millets: jowar, bajra, ragi, foxtail millet, barnyard millet',
          'Oats (rolled, not instant), daliya (broken wheat)',
          'All lentils and legumes (moong, masoor, chana, rajma)',
          'Non-starchy vegetables (leafy greens, cucumber, zucchini, capsicum)',
          'Low-GI fruits: guava, apple, pear, jamun, papaya',
          'Methi, karela, cinnamon (proven blood sugar-lowering foods)',
        ],
        foodsToAvoid: [
          'White rice, maida, bread, biscuits, pasta',
          'Sugar, jaggery, honey, maple syrup',
          'Fruit juices, cold drinks, coconut water (in large amounts)',
          'Potatoes, yam, corn, banana (high-GI)',
          'Fried snacks, deep-fried Indian snacks',
        ],
        followUp: [
          'Record fasting blood sugar on Day 1 and Day 7',
          'Note post-meal readings 2 hours after lunch and dinner if glucometer available',
          'Food diary: record every meal and corresponding glucose reading',
          'WhatsApp check-in Day 4 to discuss readings',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Portion Control & Meal Timing — The when matters as much as the what',
        goals: [
          'Use the Plate Method: ½ plate vegetables, ¼ protein, ¼ complex carbs',
          'Eat dinner before 8 PM — late eating raises fasting blood sugar',
          'Never skip breakfast — skipping raises lunchtime glucose spike',
          'Walk for 15–20 min after each main meal (proven to reduce post-meal spike)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Diabetic-supportive bitter or herbal water with soaked nuts',
          breakfast: 'Low-GI savoury breakfast with probiotic curd',
          midMorning: 'Low-GI fruit with healthy nuts',
          lunch: 'Small portion wholegrain with abundant vegetables and legumes',
          eveningSnack: 'Light puffed snack with blood-sugar-friendly tea',
          dinner: 'Millet roti with iron-rich dal and curd',
          bedtime: 'Warm water with anti-inflammatory spices',
        },
        foodsToEat: [
          'Karela (bitter gourd) — juice or sabzi, proven blood sugar reducer',
          'Jamun and jamun seeds (powdered) — insulin-like effect',
          'Fenugreek (methi) in all forms',
          'Amla (Indian gooseberry) — improves insulin response',
          'Flaxseeds (1 tbsp/day ground) — slow glucose absorption',
          'Vinegar before meals — reduces glucose spike by up to 30%',
        ],
        foodsToAvoid: [
          'White potatoes in any form',
          'Packaged "diabetic" foods (often high in hidden sugars)',
          'Large meal portions at once — split into smaller portions',
          'Rice at night (much higher impact on fasting sugar)',
          'Mango, chickoo, litchi (high-sugar fruits)',
        ],
        followUp: [
          'Review fasting and post-meal glucose trends',
          'Are fasting readings improving? Target below 100 mg/dL',
          'Discuss portion sizes — are you satisfied or still hungry?',
          'Review medication timing with doctor if glucose is dropping significantly',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Superfoods for Diabetes — Natural glucose regulators',
        goals: [
          'Incorporate karela, methi, and jamun into daily meals',
          'Add fibre-rich foods to every meal (slows glucose absorption)',
          'Reduce salt to under 2g/day (diabetes + hypertension commonly co-exist)',
          'Stay hydrated: 2.5–3 litres of water daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Hypoglycaemic vegetable juice or herbal infused water',
          breakfast: 'Low-GI millet or grain paratha with probiotic curd',
          midMorning: 'Sprouted legume snack with fresh vegetables',
          lunch: 'Millet roti with mixed vegetables, dal and salad',
          eveningSnack: 'Roasted legumes with calming herbal tea',
          dinner: 'Vegetable soup with millet roti and stir-fried greens',
          bedtime: 'Warm unsweetened milk with spice',
        },
        foodsToEat: [
          'Karela, methi, jamun, amla (proven hypoglycaemic foods)',
          'All cruciferous vegetables (broccoli, cauliflower, cabbage)',
          'Psyllium husk (isabgol) — 1 tsp before meals in water',
          'Chia seeds and flaxseeds',
          'Legumes at every meal if possible',
          'Cinnamon — ½ tsp daily in meals or water',
        ],
        foodsToAvoid: [
          'Any foods with glycaemic index above 70',
          'Excessive fruit (even low-GI fruits in large amounts)',
          'Packaged oats / instant oats (processed, high-GI)',
          'Sweet curd, flavoured yoghurts, sweetened lassi',
        ],
        followUp: [
          'Full glucose review: compare Week 1 fasting vs Week 3',
          'Check if HbA1c test due (every 3 months)',
          'Are post-meal readings below 140 mg/dL at 2 hours?',
          'Discuss with doctor if medication dose needs review due to improved control',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Long-Term Management — Making this a lifestyle',
        goals: [
          'Solidify 5 non-negotiable daily habits (morning water, walk after meals, etc.)',
          'Plan a dining-out strategy — what to order, what to avoid',
          'Learn to read food labels for hidden sugars',
          'Set HbA1c target with dietitian for Month 2 review',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm blood-sugar-supportive water or herbal infusion',
          breakfast: 'Low-GI grain or millet porridge with protein',
          midMorning: 'Low-GI fruit with soaked nuts',
          lunch: 'Millet roti with dal and abundant vegetable salad',
          eveningSnack: 'Roasted seeds or legumes with herbal tea',
          dinner: 'Small portion wholegrains with dal and leafy greens',
          bedtime: 'Plain warm water or unsweetened milk',
        },
        foodsToEat: [
          'All established low-GI, anti-diabetic foods from Weeks 1–3',
          'Consistent portions — do not increase suddenly',
          'Seasonal vegetables freely',
          'Continue karela, methi, and cinnamon daily',
        ],
        foodsToAvoid: [
          'Returning to old eating habits',
          'Skipping post-meal walks',
          'Any sugary "treats" without accounting for them',
        ],
        followUp: [
          'End-of-month full consultation: compare glucose logs',
          'Calculate estimated HbA1c improvement from glucose trends',
          'Discuss Month 2 meal plan adjustments',
          'Blood test: HbA1c, fasting insulin, kidney function (creatinine, urea)',
          'Review medication with your doctor based on dietary progress',
        ],
      },
    ],
  },
  // ─── 5. HYPERTENSION ─────────────────────────────────────────────────────
  {
    slug: 'hypertension',
    name: 'Hypertension',
    icon: '💓',
    category: 'Medical Conditions',
    tagline: 'Lower your blood pressure naturally through diet',
    heroDescription:
      'Hypertension — the "silent killer" — often has no symptoms until a heart attack or stroke strikes. A DASH-inspired, low-sodium clinical diet plan can lower blood pressure by 8–14 mmHg, comparable to one medication dose.',
    condition: {
      overview:
        'Hypertension (high blood pressure) is defined as a persistent systolic reading ≥ 140 mmHg or diastolic ≥ 90 mmHg per Indian and WHO guidelines. It forces the heart to work harder, stiffens arteries, and silently damages the heart, kidneys, brain, and eyes for years before any symptom appears. Diet is one of the most powerful and immediate levers for control.',
      symptoms: [
        'Often completely asymptomatic for years (hence "silent killer")',
        'Headaches, especially at the back of the head in the morning',
        'Dizziness or lightheadedness',
        'Palpitations or irregular heartbeat',
        'Nosebleeds (in severe hypertension)',
        'Blurred or double vision',
        'Shortness of breath with mild exertion',
        'Fatigue and difficulty concentrating',
      ],
      causes: [
        'High sodium intake — processed foods, pickles, excess salt',
        'Obesity and excess abdominal fat',
        'Sedentary lifestyle and lack of physical activity',
        'Chronic psychological stress',
        'Excess alcohol consumption',
        'Smoking and tobacco use',
        'Low potassium and magnesium intake',
        'Family history and genetics',
        'Underlying conditions: kidney disease, thyroid disorders, sleep apnoea',
      ],
      whoAffected:
        'An estimated 200 million Indians have hypertension; more than half are undiagnosed. Prevalence is rising rapidly in urban Indians aged 30–60 due to salt-heavy diets, chronic stress, and sedentary lifestyles.',
    },
    harms: {
      overview:
        'Every 20 mmHg rise in systolic pressure doubles the risk of cardiovascular death. Chronic hypertension silently destroys vital organs over years — damage that is often irreversible by the time symptoms appear.',
      risks: [
        {
          icon: '🫀',
          title: 'Heart Attack & Heart Failure',
          description:
            'Persistently high pressure forces the heart to hypertrophy (thicken). Over time the heart weakens, leading to heart failure. Hypertension causes 45% of all heart disease deaths.',
        },
        {
          icon: '🧠',
          title: 'Stroke',
          description:
            'High pressure can rupture or block cerebral blood vessels. Hypertension is the single biggest risk factor for stroke — responsible for over 50% of all strokes in India.',
        },
        {
          icon: '🫘',
          title: 'Kidney Damage',
          description:
            'High pressure damages the kidney\'s filtering vessels (glomeruli), leading to progressive chronic kidney disease and, eventually, dialysis dependency.',
        },
        {
          icon: '👁️',
          title: 'Hypertensive Retinopathy',
          description:
            'Damaged retinal blood vessels cause vision disturbances and can progress to permanent vision loss if blood pressure remains uncontrolled.',
        },
        {
          icon: '🩺',
          title: 'Metabolic Syndrome',
          description:
            'Hypertension rarely appears alone — it clusters with obesity, high cholesterol, and insulin resistance, creating a dangerous combination that multiplies cardiovascular risk.',
        },
        {
          icon: '🧬',
          title: 'Arterial Stiffening',
          description:
            'Chronic high pressure destroys the elasticity of arterial walls, causing widespread atherosclerosis that restricts blood flow to all major organs.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'The DASH (Dietary Approaches to Stop Hypertension) diet — adapted for Indian palates — is clinically proven to reduce blood pressure as effectively as medication in Stage 1 hypertension. Reducing sodium, increasing potassium, and cutting inflammation are the three pillars.',
      benefits: [
        {
          icon: '📉',
          title: 'Immediate BP Reduction',
          description:
            'Reducing sodium to under 2g/day can lower systolic BP by 5–6 mmHg within 1–2 weeks, often noticeable at the very first week.',
        },
        {
          icon: '🍌',
          title: 'Potassium Counterbalances Sodium',
          description:
            'Potassium-rich foods (banana, sweet potato, spinach) relax blood vessel walls and help kidneys excrete excess sodium, directly lowering pressure.',
        },
        {
          icon: '🫀',
          title: 'Heart Muscle Protection',
          description:
            'Magnesium and omega-3 fats reduce arterial inflammation and improve heart rhythm, protecting against arrhythmias and cardiac hypertrophy.',
        },
        {
          icon: '⚖️',
          title: 'Weight & BP Co-Reduction',
          description:
            'Every 1 kg of body weight lost reduces systolic BP by approximately 1 mmHg — making weight management through diet doubly effective.',
        },
        {
          icon: '🌿',
          title: 'Nitric Oxide Boost',
          description:
            'Beetroot, pomegranate, and leafy greens increase nitric oxide production, naturally dilating blood vessels and lowering resistance.',
        },
        {
          icon: '💊',
          title: 'Reduced Medication Dependence',
          description:
            'Consistently following the DASH-Indian diet plan has helped many Stage 1 hypertensives avoid or reduce antihypertensive medication with doctor guidance.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Sodium Purge — Eliminating the biggest trigger',
        goals: [
          'Cap sodium at 1.5–2g/day (about ¾ tsp of salt for all meals combined)',
          'Remove all pickles, papads, packaged namkeen, and sauces from the house',
          'Stop adding extra salt at the table',
          'Read labels: anything with >400 mg sodium per serving should be avoided',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with soaked nuts',
          breakfast: 'Unsalted wholegrain porridge with seeds and low-fat curd',
          midMorning: 'Potassium-rich fruit with omega-3 nuts',
          lunch: 'Low-sodium millet roti with dal and vegetables',
          eveningSnack: 'Unsalted roasted legumes with BP-lowering herbal tea',
          dinner: 'Homemade low-sodium vegetable soup with millet roti',
          bedtime: 'Warm low-fat milk',
        },
        foodsToEat: [
          'Fresh fruits and vegetables — all types, freely',
          'Bananas, sweet potato, spinach (potassium-rich)',
          'Unsalted nuts and seeds',
          'Oats, millets, whole grains',
          'Low-fat dairy (milk, curd — unsalted)',
          'Hibiscus tea, pomegranate juice (unsweetened)',
        ],
        foodsToAvoid: [
          'Table salt, rock salt, sendha namak in excess',
          'Pickles, chutneys, achaar',
          'Papads, khichiya, chips, namkeen',
          'Packaged sauces (soy sauce, ketchup are very high sodium)',
          'Processed meats, canned foods, instant noodles',
          'Bakery products (hidden salt)',
        ],
        followUp: [
          'Record BP morning and evening for 7 days (at the same time daily)',
          'WhatsApp readings to dietitian on Day 4 and Day 7',
          'Note any headaches or dizziness reducing',
          'Weigh yourself on Day 1 and Day 7',
        ],
      },
      {
        weekNumber: 2,
        theme: 'DASH Foods — Potassium, Magnesium & Calcium',
        goals: [
          'Target 4,700 mg potassium daily through food (not supplements)',
          'Add magnesium-rich foods to every meal',
          'Aim for 2–3 servings of low-fat dairy for calcium',
          'Begin 30 min daily brisk walking',
        ],
        sampleDayMeals: {
          earlyMorning: 'Fresh unsweetened beetroot or pomegranate juice',
          breakfast: 'DASH-friendly grain porridge with potassium-rich fruit and seeds',
          midMorning: 'Citrus fruit with unsalted nuts',
          lunch: 'Wholegrains with leafy dal and mixed vegetable salad',
          eveningSnack: 'Unsalted magnesium-rich seeds with green tea',
          dinner: 'Millet roti with low-salt legumes and leafy greens',
          bedtime: 'Warm low-fat milk with calming spice',
        },
        foodsToEat: [
          'Beetroot and beetroot juice (nitrate → nitric oxide → vasodilation)',
          'Pomegranate (proven 5–7 mmHg BP reduction in studies)',
          'Dark leafy greens: spinach, amaranth, kale',
          'Banana, avocado, sweet potato (potassium)',
          'Pumpkin seeds, dark chocolate ≥70% (magnesium)',
          'Low-fat curd, milk (calcium relaxes blood vessels)',
        ],
        foodsToAvoid: [
          'Excess caffeine (>2 cups/day)',
          'Coconut water in large amounts (high sodium)',
          'Fruit juices with added sugar or salt',
          'Very heavy dinner (post-meal BP spikes)',
        ],
        followUp: [
          'Compare BP readings: Week 1 average vs Week 2 average',
          'Has fasting BP improved? (Target: < 130/80)',
          'Discuss any BP medication dose changes with your doctor',
          'Review dietary sodium estimate — aim below 1500 mg/day',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Anti-Inflammatory Fats — Protecting arterial health',
        goals: [
          'Replace refined oils with olive oil or cold-pressed mustard oil',
          'Add omega-3 sources daily (walnuts, flaxseeds, fatty fish)',
          'Reduce saturated fat: limit full-fat dairy, ghee to 1 tsp/day max',
          'Eliminate all trans fats: vanaspati, margarine, bakery items',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with soaked omega-3 nuts',
          breakfast: 'Egg white or grain-based breakfast with healthy oil and vegetables',
          midMorning: 'Low-GI fruit with anti-inflammatory seeds',
          lunch: 'Roti with dal using heart-healthy oil and a large salad',
          eveningSnack: 'Unsalted mixed nuts with BP-lowering herbal tea',
          dinner: 'Light grain-based one-pot meal with garlic-sautéed greens',
          bedtime: 'Warm low-fat milk',
        },
        foodsToEat: [
          'Extra virgin olive oil for salads and light cooking',
          'Cold-pressed mustard oil for Indian cooking',
          'Walnuts, flaxseeds, chia seeds (plant omega-3)',
          'Garlic — allicin shown to reduce systolic BP by 4–8 mmHg',
          'Celery — phthalides relax arterial walls',
          'Oily fish (sardines, mackerel) if non-vegetarian',
        ],
        foodsToAvoid: [
          'Refined sunflower, soybean, rice bran oil in excess',
          'Vanaspati, margarine (trans fats)',
          'Full-fat dairy in excess',
          'Fried foods in any form',
          'Packaged biscuits, cakes, pastries',
        ],
        followUp: [
          'Full BP review: morning average over 7 days vs Day 1',
          'Discuss medication review with doctor if BP has significantly improved',
          'Check body weight — has it changed since Week 1?',
          'Any new symptoms or concerns?',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Sustainable DASH Lifestyle — Habits for life',
        goals: [
          'Consolidate your low-sodium, high-potassium eating as a permanent lifestyle',
          'Develop a "social eating strategy" for restaurants and events',
          'Learn to cook 3 key DASH-friendly Indian recipes from scratch',
          'Establish a daily 30-minute moderate exercise habit',
        ],
        sampleDayMeals: {
          earlyMorning: 'Vasodilating juice or warm lemon water with nuts',
          breakfast: 'Wholegrain porridge with probiotic curd',
          midMorning: 'Potassium-rich fruit with omega-3 nuts',
          lunch: 'Millet roti with dal, vegetables and large salad',
          eveningSnack: 'Unsalted nuts with BP-supportive herbal tea',
          dinner: 'Millet roti with legume dal and sabzi',
          bedtime: 'Warm low-fat milk',
        },
        foodsToEat: [
          'All established DASH-India foods from Weeks 1–3',
          'Continue beetroot and pomegranate regularly',
          'Garlic in cooking daily',
          'Continue unsalted nuts and seeds',
        ],
        foodsToAvoid: [
          'Reverting to high-salt cooking',
          'Any pickles or processed snacks',
          'Skipping the daily walk',
        ],
        followUp: [
          'End-of-month full consultation — BP log review',
          'Compare Day 1 BP vs Day 30 BP',
          'Blood test if not done in 6 months: kidney function, lipids, blood sugar',
          'Medication review with cardiologist/physician if BP is well-controlled',
          'Plan Month 2 with refined targets',
        ],
      },
    ],
  },

  // ─── 6. CARDIAC HEALTH ───────────────────────────────────────────────────
  {
    slug: 'cardiac-health',
    name: 'Cardiac Health',
    icon: '❤️',
    category: 'Medical Conditions',
    tagline: 'Nourish your heart with every bite you take',
    heroDescription:
      'Heart disease is largely preventable and even partially reversible through diet. A heart-healthy nutrition plan reduces cholesterol, controls blood pressure, fights inflammation, and protects your most vital organ — one meal at a time.',
    condition: {
      overview:
        'Cardiovascular disease (CVD) encompasses coronary artery disease, heart attack, heart failure, and stroke. The primary driver is atherosclerosis — the buildup of cholesterol-laden plaques inside arterial walls that restrict blood flow. In India, CVD now strikes a full decade earlier than in the West, with many heart attacks occurring in people under 50. Diet, cholesterol, blood pressure, blood sugar, and inflammation are all modifiable through nutrition.',
      symptoms: [
        'Chest pain, tightness, or pressure (angina) during exertion',
        'Shortness of breath during mild activity or at rest',
        'Palpitations or irregular heartbeat',
        'Unexplained fatigue that worsens over time',
        'Swelling in feet, ankles, and legs (heart failure)',
        'Dizziness or fainting spells',
        'Pain radiating to the left arm, jaw, or neck',
        'Excessive sweating at rest',
      ],
      causes: [
        'High LDL cholesterol and low HDL cholesterol',
        'Hypertension (high blood pressure)',
        'Type 2 diabetes and insulin resistance',
        'Smoking and tobacco use',
        'Obesity, especially central/abdominal fat',
        'Sedentary lifestyle',
        'Chronic psychological stress',
        'Diet high in saturated fats, trans fats, and refined carbohydrates',
        'Family history of heart disease',
        'Inflammation from poor gut health and processed food intake',
      ],
      whoAffected:
        'CVD is the leading cause of death in India, responsible for over 28% of all deaths. India accounts for nearly 60% of the world\'s cardiac disease burden. Alarmingly, Indians develop CVD 10–15 years earlier than Western populations.',
    },
    harms: {
      overview:
        'The heart cannot be replaced. Once arterial damage and plaque build up, the consequences are permanent and life-threatening. Prevention and early dietary intervention are vastly more effective than treating advanced disease.',
      risks: [
        {
          icon: '💔',
          title: 'Heart Attack (Myocardial Infarction)',
          description:
            'When a plaque ruptures and blocks a coronary artery, the heart muscle is starved of oxygen. Every 30 seconds, an Indian suffers a heart attack. Permanent muscle damage occurs within minutes.',
        },
        {
          icon: '🧠',
          title: 'Stroke',
          description:
            'Atherosclerotic plaques in cerebral arteries block blood flow to the brain, causing sudden paralysis, speech loss, and cognitive damage — often irreversible.',
        },
        {
          icon: '🫀',
          title: 'Heart Failure',
          description:
            'A weakened heart cannot pump enough blood. Fluid backs up into the lungs and limbs. Heart failure is chronic, progressive, and severely limits quality of life.',
        },
        {
          icon: '⚡',
          title: 'Arrhythmias',
          description:
            'Damaged heart tissue and electrolyte imbalances cause irregular heart rhythms. Atrial fibrillation significantly raises stroke risk and can cause sudden cardiac arrest.',
        },
        {
          icon: '🫘',
          title: 'Cardiorenal Syndrome',
          description:
            'Heart failure reduces blood flow to the kidneys, causing kidney damage. Kidney disease then worsens hypertension, creating a vicious loop of organ damage.',
        },
        {
          icon: '📉',
          title: 'Severely Reduced Life Quality',
          description:
            'Advanced heart disease limits every activity — climbing stairs, carrying groceries, playing with children. The physical and psychological toll is immense.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'A heart-protective diet — built around the Mediterranean and DASH principles adapted for Indian kitchens — directly reduces LDL cholesterol, lowers BP, fights arterial inflammation, and improves heart rhythm. It works on all CVD risk factors simultaneously.',
      benefits: [
        {
          icon: '📉',
          title: 'Lower LDL Cholesterol',
          description:
            'Soluble fibre (oats, legumes, vegetables) binds cholesterol in the gut and removes it. A high-fibre diet can lower LDL by 10–15% in 4–6 weeks.',
        },
        {
          icon: '⬆️',
          title: 'Raised HDL Cholesterol',
          description:
            'Healthy fats (olive oil, avocado, nuts, fish) raise protective HDL — the cholesterol that carries excess LDL out of arteries to the liver for excretion.',
        },
        {
          icon: '🌿',
          title: 'Reduced Arterial Inflammation',
          description:
            'Omega-3 fatty acids, polyphenols (from berries, tea, turmeric), and antioxidants directly reduce the inflammation that triggers plaque rupture.',
        },
        {
          icon: '💓',
          title: 'Improved Heart Rhythm',
          description:
            'Magnesium and potassium from vegetables, seeds, and fruits regulate the electrical signals controlling heartbeat, reducing arrhythmia risk.',
        },
        {
          icon: '🩸',
          title: 'Better Blood Pressure & Sugar',
          description:
            'A heart diet inherently also controls BP and blood glucose — the two biggest amplifiers of cardiovascular risk — creating a compounding protection effect.',
        },
        {
          icon: '🛡️',
          title: 'Plaque Stabilisation',
          description:
            'Anti-inflammatory nutrition cannot fully remove plaque, but it can stabilise existing plaques — making them less likely to rupture and cause a heart attack.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Heart-Damaging Foods Out — Clean slate for your arteries',
        goals: [
          'Eliminate all trans fats: vanaspati, margarine, and all packaged baked goods',
          'Reduce saturated fat: ghee to 1 tsp/day max, limit red meat to once a week',
          'Cut added sugar and refined carbohydrates completely',
          'Replace refined oil with extra virgin olive oil or cold-pressed mustard oil',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with anti-inflammatory soaked nuts',
          breakfast: 'Heart-protective oat-based porridge with seeds and low-fat milk',
          midMorning: 'Fibre-rich fruit with unsalted nuts',
          lunch: 'Wholegrains with legume dal in heart-healthy oil and salad',
          eveningSnack: 'Unsalted roasted seeds with green tea',
          dinner: 'Millet roti with leafy dal and heart-healthy stir-fry',
          bedtime: 'Warm low-fat milk with warming spice',
        },
        foodsToEat: [
          'Oats and oat bran (soluble beta-glucan fibre reduces LDL)',
          'Walnuts, almonds, flaxseeds (omega-3 and plant sterols)',
          'All vegetables and fruits freely',
          'Legumes at every meal (lentils, chickpeas, kidney beans)',
          'Extra virgin olive oil or cold-pressed mustard oil',
          'Green tea and black tea (catechins protect arteries)',
        ],
        foodsToAvoid: [
          'Vanaspati, dalda, margarine (trans fats)',
          'Ghee and butter in excess (saturated fat)',
          'Red meat, especially processed meats (salami, sausage)',
          'Full-fat dairy (cream, cheese, full-fat milk)',
          'White bread, biscuits, bakery items',
          'Coconut oil in excess',
        ],
        followUp: [
          'Record baseline cholesterol if recent blood test available (LDL, HDL, TG)',
          'Note baseline blood pressure and weight',
          'WhatsApp check-in on Day 4',
          'Begin food diary tracking fat sources',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Heart-Protective Foods In — Omega-3s, fibre, and antioxidants',
        goals: [
          'Eat oily fish twice a week (if non-vegetarian) — sardines, mackerel, rohu',
          'Have a handful of walnuts daily (proven LDL reduction)',
          'Add 1 tbsp ground flaxseeds to every breakfast',
          'Include a colourful salad at both lunch and dinner',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with omega-3 nuts',
          breakfast: 'Multigrain roti with vegetables and omega-3 seeds in curd',
          midMorning: 'Antioxidant-rich fruit with unsalted almonds',
          lunch: 'Wholegrains with grilled lean protein, large salad and dal',
          eveningSnack: 'Small portion dark chocolate with green tea',
          dinner: 'Millet roti with mixed bean curry and cruciferous vegetables',
          bedtime: 'Warm golden milk with turmeric',
        },
        foodsToEat: [
          'Fatty fish: sardines, mackerel, rohu, hilsa (omega-3)',
          'Berries (blueberries, strawberries, amla) — polyphenols',
          'Dark chocolate ≥70% (flavanols reduce BP and LDL)',
          'Pomegranate (artery-protecting ellagitannins)',
          'Broccoli, spinach, kale (vitamin K and fibre)',
          'Garlic (allicin reduces LDL and BP)',
        ],
        foodsToAvoid: [
          'Skipping salad — it is a non-negotiable cardiac habit',
          'Cooking vegetables until mushy (destroys antioxidants — lightly stir-fry)',
          'Vegetable oils high in omega-6 (refined sunflower oil in excess)',
          'High-sodium condiments',
        ],
        followUp: [
          'How is energy and breathlessness changing?',
          'Discuss any angina or chest discomfort with cardiologist',
          'Review food diary fat quality — are trans fats fully eliminated?',
          'Mid-week BP check',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Plant Sterols & Soluble Fibre — LDL-lowering power week',
        goals: [
          'Eat at least 5 servings of vegetables + 2 fruits every day',
          'Include psyllium husk (isabgol) 1 tsp in water before lunch (powerful LDL reducer)',
          'Make oats or barley the breakfast staple this week',
          'Practice stress-reduction: 10 minutes of deep breathing daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Soluble fibre drink before breakfast',
          breakfast: 'LDL-lowering grain porridge with fruit and seeds',
          midMorning: 'High vitamin-C fruit or juice with nuts',
          lunch: 'Millet roti with legume masala, large salad and raita',
          eveningSnack: 'High-plant-protein snack with hibiscus or green tea',
          dinner: 'Barley-based one-pot meal with stir-fried vegetables',
          bedtime: 'Warm anti-inflammatory golden milk',
        },
        foodsToEat: [
          'Psyllium husk (isabgol) — 1–2 tsp/day: clinically proven LDL reducer',
          'Oats and barley (beta-glucan soluble fibre)',
          'Amla — highest natural vitamin C source, potent heart protector',
          'Soy products: tofu, soy milk, edamame (plant sterols)',
          'Flaxseeds and chia seeds daily',
          'Green leafy vegetables at every meal',
        ],
        foodsToAvoid: [
          'High-sodium pickles or chutneys',
          'Any fried foods',
          'Excessive caffeine (>2 cups/day)',
          'Large meals at one time — split into smaller frequent meals',
        ],
        followUp: [
          'Full review: weight, BP, any symptom changes',
          'Estimate LDL impact — schedule repeat cholesterol test if due',
          'Discuss cardiologist review if chest symptoms are present',
          'Review sleep — poor sleep is an independent cardiac risk factor',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Heart-Healthy for Life — Making it permanent',
        goals: [
          'Identify your 5 permanent heart-healthy cooking habits',
          'Learn Mediterranean-Indian fusion recipes for social events',
          'Plan 150 min/week of moderate exercise going forward',
          'Schedule a quarterly lipid panel blood test with cardiologist',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm anti-inflammatory water with omega-3 nuts',
          breakfast: 'Heart-healthy grain porridge with seeds and seasonal fruit',
          midMorning: 'Fresh fruit with unsalted nuts',
          lunch: 'Wholegrains with legumes, large colourful salad and curd',
          eveningSnack: 'Unsalted seeds with heart-protective herbal tea',
          dinner: 'Multigrain roti with leafy dal and stir-fried vegetables',
          bedtime: 'Warm golden milk',
        },
        foodsToEat: [
          'All established heart-protective foods from Weeks 1–3',
          'Continue oats, flaxseeds, walnuts, garlic daily',
          'Colourful salad at every main meal',
          'Legumes as the protein foundation of every meal',
        ],
        foodsToAvoid: [
          'Any trans fats — permanently',
          'High-sodium processed foods',
          'Skipping meals or overeating at one sitting',
        ],
        followUp: [
          'End-of-month full consultation',
          'Lipid panel: compare LDL, HDL, TG to baseline',
          'Weight and BP vs Day 1',
          'Discuss cardiologist coordination for medication review',
          'Plan Month 2 — continue or intensify based on lipid results',
        ],
      },
    ],
  },

  // ─── 7. RENAL DISEASE ────────────────────────────────────────────────────
  {
    slug: 'renal-disease',
    name: 'Renal Disease',
    icon: '🫘',
    category: 'Medical Conditions',
    tagline: 'Protect your kidneys through precision nutrition',
    heroDescription:
      'Kidney disease demands the most precise nutritional management of any condition. The wrong food choices accelerate decline; the right ones dramatically slow it. A specialised renal diet controls potassium, phosphorus, sodium, and protein to protect your remaining kidney function for as long as possible.',
    condition: {
      overview:
        'Chronic Kidney Disease (CKD) is the gradual loss of kidney function over months or years, classified in 5 stages by eGFR (estimated glomerular filtration rate). Healthy kidneys filter ~180 litres of blood daily, regulating fluid, electrolytes, blood pressure, and waste removal. As kidney function declines, toxins and electrolytes accumulate in blood, affecting every organ. CKD is irreversible but can be slowed significantly through diet and lifestyle.',
      symptoms: [
        'Fatigue, weakness, and difficulty concentrating',
        'Reduced or foamy urine (protein in urine)',
        'Swelling in feet, ankles, and around the eyes (fluid retention)',
        'Persistent itching (uraemia — waste buildup)',
        'Nausea, vomiting, and loss of appetite',
        'Muscle cramps, especially at night',
        'Shortness of breath (fluid in lungs)',
        'High blood pressure that is difficult to control',
        'Pallor and anaemia',
      ],
      causes: [
        'Diabetes — the single leading cause of CKD (diabetic nephropathy)',
        'Hypertension — second leading cause, damages glomeruli',
        'Recurrent kidney infections (pyelonephritis)',
        'Autoimmune diseases (lupus nephritis, IgA nephropathy)',
        'Long-term overuse of painkillers (NSAIDs like ibuprofen)',
        'Polycystic kidney disease (genetic)',
        'Obstruction of the urinary tract (kidney stones, enlarged prostate)',
        'Family history of kidney disease',
      ],
      whoAffected:
        'India has over 17 crore CKD patients — 13% of the population. 1 lakh Indians develop end-stage renal disease (requiring dialysis or transplant) each year. Diabetes and hypertension account for over 60% of all CKD cases.',
    },
    harms: {
      overview:
        'CKD affects every body system as kidney function declines. Without dietary management, progression to dialysis or transplant is significantly faster — with severe impact on life quality and length.',
      risks: [
        {
          icon: '☣️',
          title: 'Uraemia & Toxin Buildup',
          description:
            'As kidneys fail, urea, creatinine, and other metabolic wastes accumulate in blood, causing nausea, confusion, seizures, and eventually coma (uraemic encephalopathy).',
        },
        {
          icon: '🫀',
          title: 'Cardiovascular Death',
          description:
            'CKD patients have a 10–20× higher cardiovascular risk. The combination of anaemia, hypertension, fluid overload, and electrolyte imbalance is directly lethal to the heart.',
        },
        {
          icon: '🦴',
          title: 'Renal Osteodystrophy',
          description:
            'Failing kidneys cannot activate vitamin D or excrete phosphorus, leading to severe bone disease, fractures, and calcium deposits in arteries and soft tissues.',
        },
        {
          icon: '🩸',
          title: 'Anaemia',
          description:
            'Diseased kidneys produce insufficient erythropoietin (EPO), the hormone that stimulates red blood cell production, causing severe anaemia, fatigue, and breathlessness.',
        },
        {
          icon: '⚡',
          title: 'Dangerous Potassium Levels',
          description:
            'Hyperkalaemia (high blood potassium) causes muscle paralysis and fatal cardiac arrhythmias — a leading cause of sudden death in CKD patients.',
        },
        {
          icon: '💊',
          title: 'Dialysis Dependency',
          description:
            'Without dietary management, CKD progresses to Stage 5 (eGFR < 15), requiring dialysis 3× weekly or kidney transplant — permanently altering life quality.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'A renal diet is the single most effective non-pharmacological intervention to slow CKD progression. It simultaneously reduces the kidney\'s workload, controls electrolytes, manages BP, and prevents complications.',
      benefits: [
        {
          icon: '🛡️',
          title: 'Slowed Disease Progression',
          description:
            'Restricting dietary protein reduces the kidney\'s filtration burden, significantly slowing the decline in eGFR and delaying dialysis by years.',
        },
        {
          icon: '⚡',
          title: 'Safe Potassium Control',
          description:
            'Identifying and restricting high-potassium foods prevents life-threatening hyperkalaemia, one of the most dangerous CKD complications.',
        },
        {
          icon: '🦴',
          title: 'Bone Protection',
          description:
            'Phosphorus restriction through food choices and cooking methods prevents renal bone disease, arterial calcification, and reduces cardiovascular risk.',
        },
        {
          icon: '🩺',
          title: 'Better Blood Pressure',
          description:
            'Sodium restriction directly reduces fluid retention, lowers BP, and reduces the strain on already-damaged kidney vessels.',
        },
        {
          icon: '💪',
          title: 'Maintained Nutrition',
          description:
            'CKD patients are at high risk of malnutrition. A carefully designed renal diet ensures adequate calories and essential nutrients while restricting harmful ones.',
        },
        {
          icon: '🏥',
          title: 'Delayed Dialysis',
          description:
            'Clinical studies consistently show that patients who follow a strict renal diet delay dialysis initiation by 1–3 years compared to those without dietary guidance.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Understanding Your Limits — Sodium & Fluid Control',
        goals: [
          'Restrict sodium to under 1.5g/day (stricter than hypertension)',
          'Monitor fluid intake as advised by nephrologist (typically 500ml + urine output)',
          'Eliminate all packaged, canned, and processed foods',
          'Record daily weight: sudden gain (>1 kg in a day) = fluid retention alert',
        ],
        sampleDayMeals: {
          earlyMorning: 'Small amount of water within fluid allowance with soaked nuts',
          breakfast: 'Rinsed low-potassium grain with egg white and kidney-friendly vegetable',
          midMorning: 'Small low-potassium fruit',
          lunch: 'Plain rice with rinsed low-potassium dal and low-potassium vegetable',
          eveningSnack: 'Low-sodium kidney-friendly biscuit with plain tea',
          dinner: 'Plain roti with low-potassium vegetable and egg white protein',
          bedtime: 'Small warm water if within fluid limit',
        },
        foodsToEat: [
          'Low-potassium vegetables: lauki, tinda, parwal, pumpkin, ridge gourd',
          'White rice (rinsed 2–3 times before cooking)',
          'White bread (low sodium) in moderation',
          'Egg whites (low phosphorus protein)',
          'Leaching technique: soak vegetables 4 hrs, discard water before cooking',
          'Apple, pear, pineapple (moderate-potassium fruits)',
        ],
        foodsToAvoid: [
          'High-potassium: banana, mango, kiwi, coconut water, tomato (in excess), potato',
          'High-phosphorus: dairy in excess, nuts, seeds, lentils (limit portion)',
          'Table salt, rock salt, and all salty condiments',
          'Packaged and processed foods',
          'Dark colas (very high phosphorus from phosphoric acid)',
        ],
        followUp: [
          'Share recent blood reports: creatinine, urea, potassium, eGFR',
          'Confirm current nephrologist-advised protein limit (g/day)',
          'Daily weight monitoring — report if >1 kg gain overnight',
          'WhatsApp check-in Day 4',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Protein Precision — Enough but not too much',
        goals: [
          'Adjust protein to nephrologist-advised level (typically 0.6–0.8g/kg/day for non-dialysis CKD)',
          'Prioritise high biological value (HBV) protein: egg whites, lean chicken/fish',
          'Spread protein evenly across all meals — never have large protein servings at once',
          'Avoid protein supplements unless specifically prescribed',
        ],
        sampleDayMeals: {
          earlyMorning: 'Small amount of warm water with a few soaked nuts',
          breakfast: 'Egg white with plain roti and kidney-friendly vegetable',
          midMorning: 'Very small low-potassium fruit portion',
          lunch: 'White rice with a small lean protein portion and leached vegetables',
          eveningSnack: 'Plain low-sodium biscuit with plain tea',
          dinner: 'Plain roti with leached low-potassium dal and vegetable',
          bedtime: 'Warm water within prescribed fluid limit',
        },
        foodsToEat: [
          'Egg whites — best HBV protein with low phosphorus',
          'Lean chicken or white fish (boiled/grilled, unsalted)',
          'Low-phosphorus, low-potassium dals (toor, moong) in leached small portions',
          'White rice and white bread (lower phosphorus than whole grain)',
          'Cauliflower, cabbage, green beans (low potassium, leached)',
        ],
        foodsToAvoid: [
          'Whole eggs (high phosphorus yolk)',
          'Full-fat dairy: milk, curd, paneer (high phosphorus)',
          'Nuts and seeds (high phosphorus)',
          'Protein powders and supplements (unless nephrologist-prescribed)',
          'Soy products in large amounts',
          'Dark coloured legumes in large amounts',
        ],
        followUp: [
          'Review protein intake against blood urea levels',
          'Discuss fluid allowance with nephrologist if swelling continues',
          'Energy levels: are you eating enough calories?',
          'Adjust plan if nausea or poor appetite — renal anorexia is common',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Phosphorus & Potassium — The critical electrolytes',
        goals: [
          'Learn the leaching technique for all vegetables (reduces potassium by 30–50%)',
          'Identify and eliminate all high-phosphorus foods',
          'Use phosphate binders with meals as prescribed by nephrologist',
          'Track daily fruit intake — stick to low-potassium choices only',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water within fluid allowance',
          breakfast: 'Plain roti with leached low-potassium vegetable and egg white',
          midMorning: 'Small piece of low-potassium fruit',
          lunch: 'White rice with leached vegetables and very small dal portion',
          eveningSnack: 'Plain low-sodium biscuit with weak tea',
          dinner: 'Roti with leached vegetable and small lean protein portion',
          bedtime: 'Small warm water if within fluid limit',
        },
        foodsToEat: [
          'Cauliflower (leached) — surprisingly versatile and low potassium when leached',
          'Cabbage, green beans, leeks, lettuce (low potassium even without leaching)',
          'White noodles or pasta (lower potassium/phosphorus than whole grain)',
          'Rice cakes and rice crackers (low phosphorus snacks)',
          'Egg whites, lean white fish',
          'Herbs for flavour instead of salt',
        ],
        foodsToAvoid: [
          'All nuts and seeds (phosphorus overload)',
          'Milk, curd, paneer in more than very small amounts',
          'Tomatoes, potatoes, spinach (high potassium)',
          'Brown rice, whole wheat flour (higher phosphorus than white varieties)',
          'Phosphate-containing processed foods (check labels for any "phosphate" additive)',
        ],
        followUp: [
          'Review blood results: potassium, phosphorus levels',
          'Any swelling or fluid retention changes?',
          'Are you managing the restricted diet comfortably?',
          'Discuss any supplementation needs: iron, EPO, vitamin D with nephrologist',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Long-Term Renal Diet — Protecting your remaining function',
        goals: [
          'Establish a consistent, sustainable weekly meal plan within renal limits',
          'Learn safe restaurant and social eating strategies',
          'Monitor monthly: weight, BP, and quarterly blood tests (creatinine, eGFR)',
          'Build an emergency food plan for sick days (when appetite drops but fluids are critical)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water within prescribed fluid limit',
          breakfast: 'Plain grain with leached vegetable and kidney-friendly protein',
          midMorning: 'Small low-potassium fruit',
          lunch: 'Plain grain with leached vegetables and small protein',
          eveningSnack: 'Plain low-sodium crackers or biscuit',
          dinner: 'Plain roti with leached vegetable and small lean protein',
          bedtime: 'Warm water if within fluid allowance',
        },
        foodsToEat: [
          'All Stage-appropriate foods identified in Weeks 1–3',
          'Herbs, lemon, and approved spices for flavour (no salt)',
          'Continue leaching technique consistently',
        ],
        foodsToAvoid: [
          'Any high-potassium or high-phosphorus food — no exceptions',
          'Excess fluid beyond prescribed limit',
          'High-sodium foods in any form',
        ],
        followUp: [
          'End-of-month full consultation with dietitian and nephrologist',
          'Compare creatinine and eGFR to admission baseline',
          'Review blood potassium, phosphorus, albumin levels',
          'Discuss progression: is CKD stable or progressing?',
          'Plan Month 2 — adjust protein and electrolyte targets based on latest blood reports',
        ],
      },
    ],
  },

  // ─── 8. FATTY LIVER ──────────────────────────────────────────────────────
  {
    slug: 'fatty-liver',
    name: 'Fatty Liver',
    icon: '🫁',
    category: 'Medical Conditions',
    tagline: 'Reverse fatty liver with the right foods',
    heroDescription:
      'Non-Alcoholic Fatty Liver Disease (NAFLD) is now India\'s most common liver condition — and it is almost entirely diet-driven. The excellent news is that it is also one of the most reversible chronic conditions when caught early and addressed with targeted nutrition.',
    condition: {
      overview:
        'Fatty liver (NAFLD) occurs when more than 5% of the liver\'s weight is made up of fat. In the early stage (simple steatosis), it is largely asymptomatic. In the progressive stage (NASH — Non-Alcoholic SteatoHepatitis), inflammation and cell damage occur. Without intervention, NASH can progress to cirrhosis and liver failure. The Indian vegetarian diet — high in refined carbohydrates and sugars — is a primary driver of NAFLD.',
      symptoms: [
        'Often completely silent — discovered incidentally on ultrasound',
        'Dull ache or heaviness in the upper right abdomen',
        'Persistent fatigue and weakness',
        'Unexplained weight gain, especially around the abdomen',
        'Elevated liver enzymes (SGOT/SGPT) on blood tests',
        'Nausea after fatty meals',
        'Abdominal bloating and discomfort',
        'Yellowing of skin or eyes (in advanced stages — jaundice)',
      ],
      causes: [
        'Excess refined carbohydrates and sugar — converted to fat in the liver (de novo lipogenesis)',
        'Fructose overconsumption (cold drinks, fruit juices, packaged foods)',
        'Obesity and metabolic syndrome',
        'Type 2 diabetes and insulin resistance',
        'Rapid weight loss or crash dieting (mobilises fat to the liver)',
        'Hypothyroidism (reduces liver fat metabolism)',
        'Certain medications (corticosteroids, tamoxifen)',
        'Sedentary lifestyle reducing liver fat oxidation',
      ],
      whoAffected:
        'NAFLD affects an estimated 9–32% of Indian adults overall, rising to 38–40% in urban populations. It is driven by high carbohydrate diets, rising obesity, and diabetes, and is increasingly seen in lean Indians too.',
    },
    harms: {
      overview:
        'NAFLD is not just a liver problem — it is the liver expression of metabolic dysfunction and is intimately connected to diabetes, heart disease, and kidney disease. Left untreated, it progresses silently to life-threatening liver failure.',
      risks: [
        {
          icon: '🔥',
          title: 'NASH & Liver Inflammation',
          description:
            'Simple fatty liver progresses to NASH in 15–20% of patients. Inflammation actively destroys liver cells, releasing scar-forming signals throughout the organ.',
        },
        {
          icon: '🪨',
          title: 'Cirrhosis',
          description:
            'Prolonged NASH leads to cirrhosis — permanent scarring that replaces functional liver tissue. Cirrhosis is irreversible and the liver loses its ability to regenerate.',
        },
        {
          icon: '☠️',
          title: 'Liver Failure & Cancer',
          description:
            'Advanced cirrhosis leads to liver failure (hepatic encephalopathy, bleeding varices) and sharply increases the risk of hepatocellular carcinoma (liver cancer).',
        },
        {
          icon: '🩺',
          title: 'Diabetes Amplification',
          description:
            'Fatty liver severely worsens insulin resistance, making blood sugar control nearly impossible and accelerating progression to Type 2 diabetes.',
        },
        {
          icon: '❤️',
          title: 'Cardiovascular Disease',
          description:
            'NAFLD independently doubles cardiovascular risk. Liver fat drives dyslipidaemia (high TG, low HDL), inflammation, and BP — a dangerous cardiac combination.',
        },
        {
          icon: '💊',
          title: 'Drug Sensitivity',
          description:
            'A damaged liver cannot metabolise medications properly, making many common drugs (even paracetamol) potentially toxic at standard doses.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'NAFLD is arguably the most nutrition-responsive chronic liver condition. Studies show that just 7–10% weight loss reduces liver fat by 40–80%. Targeted dietary changes can reverse early fatty liver within 3–6 months.',
      benefits: [
        {
          icon: '📉',
          title: 'Direct Liver Fat Reduction',
          description:
            'Eliminating fructose and refined carbs switches the liver from fat-making mode to fat-burning mode, visibly reducing fat on ultrasound within 8–12 weeks.',
        },
        {
          icon: '🌿',
          title: 'Reduced Liver Inflammation',
          description:
            'Omega-3 fats, coffee, turmeric, and antioxidant-rich foods directly reduce hepatic inflammation — slowing or reversing progression from NAFLD to NASH.',
        },
        {
          icon: '⚖️',
          title: 'Weight & Liver Fat Co-Reduction',
          description:
            'The liver benefits more proportionally from weight loss than any other organ. Even 3–5% body weight loss reduces liver enzyme levels significantly.',
        },
        {
          icon: '🩸',
          title: 'Improved Insulin Sensitivity',
          description:
            'Reducing liver fat directly improves insulin signalling in the liver, reducing fasting blood sugar and triglycerides simultaneously.',
        },
        {
          icon: '☕',
          title: 'Coffee as Medicine',
          description:
            'Multiple studies confirm that 2–3 cups of black coffee daily is hepatoprotective — reducing liver inflammation, fibrosis risk, and NASH progression.',
        },
        {
          icon: '🔄',
          title: 'Potential Full Reversal',
          description:
            'Unlike most chronic diseases, early-stage NAFLD (Grade 1–2) can be completely reversed through dietary change and weight loss — no medication required.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'The Great Sugar Purge — Cutting fructose and refined carbs',
        goals: [
          'Eliminate all fructose sources: cold drinks, fruit juice, packaged sweets, HFCS',
          'Remove all maida, white bread, biscuits, and refined snacks',
          'Limit fruit to 2 low-fructose pieces per day (avoid mango, grapes, litchi)',
          'Start 2 cups of black coffee daily (no sugar, no milk)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Black coffee or liver-supporting drink with soaked nuts',
          breakfast: 'Sugar-free wholegrain breakfast with protein',
          midMorning: 'Low-fructose fruit with omega-3 nuts',
          lunch: 'Millet roti with lentil dal, stir-fried vegetables and salad',
          eveningSnack: 'Black or green tea with roasted legumes',
          dinner: 'Light wholegrain one-pot meal with dal and greens',
          bedtime: 'Warm turmeric water with hepatoprotective spice',
        },
        foodsToEat: [
          'Black coffee (2 cups/day) — proven hepatoprotective',
          'Oats, daliya, millets (replace refined carbs)',
          'All non-starchy vegetables freely',
          'Moong dal, masoor dal, chana',
          'Walnuts, flaxseeds (omega-3 for liver)',
          'Apple, pear (low fructose fruits)',
        ],
        foodsToAvoid: [
          'All cold drinks — even "diet" versions',
          'Packaged fruit juices (extremely high fructose)',
          'White bread, maida, biscuits, rusks',
          'Sugar in any form',
          'Mango, grapes, litchi, banana (high fructose)',
          'Deep-fried foods and bakery items',
        ],
        followUp: [
          'Share recent liver ultrasound and blood tests (SGOT, SGPT, GGT)',
          'Note any fatigue or right-sided abdominal discomfort',
          'WhatsApp check-in Day 4',
          'Record weight on Day 1 and Day 7',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Liver-Healing Foods — Omega-3s, antioxidants, and fibre',
        goals: [
          'Add omega-3 rich foods every single day',
          'Increase dietary fibre to 30g/day (feeds gut bacteria that reduce liver fat)',
          'Include turmeric in at least 2 meals daily',
          'Begin 30–45 min of moderate exercise daily (aerobic exercise reduces liver fat directly)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Black coffee with omega-3 nuts',
          breakfast: 'Savoury grain-based breakfast with omega-3 seeds and curd',
          midMorning: 'Liver-supportive fruit with anti-inflammatory seeds',
          lunch: 'Wholegrains with legumes, turmeric-dressed salad and cruciferous vegetables',
          eveningSnack: 'Liver-supportive seeds with ginger-infused green tea',
          dinner: 'Millet roti with omega-3 fish or plant protein with turmeric and greens',
          bedtime: 'Warm hepatoprotective golden milk',
        },
        foodsToEat: [
          'Flaxseeds and chia seeds (1–2 tbsp/day)',
          'Walnuts and pumpkin seeds',
          'Fatty fish: sardines, mackerel (omega-3)',
          'Turmeric with black pepper at every meal',
          'Broccoli, cauliflower, Brussels sprouts (cruciferous — hepatoprotective)',
          'Garlic (allicin activates liver enzymes)',
        ],
        foodsToAvoid: [
          'Refined oils in large amounts',
          'Trans fats of any kind',
          'Saturated fat from full-fat dairy in excess',
          'Red meat more than once a week',
          'Alcohol — zero tolerance with fatty liver',
        ],
        followUp: [
          'SGPT/SGOT trend if re-tested (typical improvement begins Week 4–6)',
          'How is energy changing?',
          'Discuss exercise tolerance — any fatigue or breathlessness with walking?',
          'Review food diary for omega-3 consistency',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Gut-Liver Axis — Healing from the inside out',
        goals: [
          'Add probiotic and prebiotic foods daily (gut health directly affects liver health)',
          'Reduce red meat to maximum once a week',
          'Practice 12–14 hour overnight fasting (e.g., finish dinner by 8 PM, breakfast after 8 AM)',
          'Hydrate well: 2.5–3 litres of water with lemon daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Black coffee or warm lemon water with soaked nuts',
          breakfast: 'Grain-based porridge with omega-3 seeds or savoury cheela with probiotic curd',
          midMorning: 'Liver-supportive fruit with omega-3 nuts',
          lunch: 'Wholegrains with mixed dal and olive oil-dressed salad',
          eveningSnack: 'Ginger green tea with roasted legumes',
          dinner: 'Millet roti with leafy dal, probiotic curd and cucumber',
          bedtime: 'Warm hepatoprotective turmeric water',
        },
        foodsToEat: [
          'Homemade curd and kanji (probiotic)',
          'Prebiotic foods: garlic, onion, leeks, asparagus',
          'Beetroot (betaine reduces liver fat and inflammation)',
          'Green tea (catechins are clinically proven hepatoprotective)',
          'Papaya (papain enzyme aids liver detoxification)',
          'Amla — highest antioxidant density, liver-protective',
        ],
        foodsToAvoid: [
          'Artificial sweeteners (disrupt gut-liver axis)',
          'Ultra-processed foods',
          'Late-night eating (worsens overnight liver fat accumulation)',
          'High-fructose corn syrup (hidden in many packaged foods)',
        ],
        followUp: [
          'Full review: weight change since Week 1, energy levels',
          'Any change in abdominal discomfort or bloating?',
          'Schedule repeat ultrasound if 3 months have passed since last',
          'Review SGPT, SGOT if blood test due',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Consolidation — Sustaining the reversal',
        goals: [
          'Lock in 5 permanent dietary habits from this month',
          'Maintain the overnight fasting window (12–14 hrs) as a permanent practice',
          'Plan a sustainable exercise routine: 150 min/week minimum',
          'Set a 3-month target for repeat ultrasound to confirm improvement',
        ],
        sampleDayMeals: {
          earlyMorning: 'Black coffee with soaked nuts',
          breakfast: 'Grain-based porridge with omega-3 seeds and low-fructose fruit',
          midMorning: 'Low-fructose fruit with liver-supportive seeds',
          lunch: 'Millets or wholegrains with legumes and a large salad',
          eveningSnack: 'Green tea with roasted legumes or seeds',
          dinner: 'Millet roti with dal, stir-fried greens and probiotic curd',
          bedtime: 'Warm turmeric milk or turmeric water',
        },
        foodsToEat: [
          'All established liver-healing foods from Weeks 1–3',
          'Continue black coffee, turmeric, flaxseeds daily',
          'Keep fibre intake high through vegetables and legumes',
          'Probiotic foods (curd) regularly',
        ],
        foodsToAvoid: [
          'Any sugar, cold drinks, or fruit juice — permanently',
          'Alcohol — completely, indefinitely',
          'Refined grains as a staple',
        ],
        followUp: [
          'End-of-month full consultation',
          'Compare weight, abdominal symptoms, and energy to Day 1',
          'Blood tests: SGOT, SGPT, GGT, fasting insulin, lipid profile',
          'Schedule 3-month follow-up ultrasound to measure liver fat change',
          'Plan Month 2 — focus on further weight reduction if needed',
        ],
      },
    ],
  },
  // ─── 9. THYROID DISORDERS ────────────────────────────────────────────────
  {
    slug: 'thyroid-disorders',
    name: 'Thyroid Disorders',
    icon: '🦋',
    category: 'Medical Conditions',
    tagline: 'Balance your thyroid naturally through targeted nutrition',
    heroDescription:
      'Thyroid disorders — whether hypothyroidism or hyperthyroidism — profoundly affect metabolism, weight, energy, and mood. While medication is often necessary, a precisely targeted diet can dramatically improve thyroid function, reduce symptoms, and in some cases reduce medication dependence.',
    condition: {
      overview:
        'The thyroid gland produces two key hormones — T3 (triiodothyronine) and T4 (thyroxine) — that regulate the metabolic rate of every cell in the body. Hypothyroidism (underactive thyroid) slows everything down: weight gain, fatigue, hair loss. Hyperthyroidism (overactive thyroid) speeds everything up: weight loss, palpitations, anxiety. Hashimoto\'s (autoimmune hypothyroidism) and Graves\' disease (autoimmune hyperthyroidism) are the most common forms, both with strong dietary triggers.',
      symptoms: [
        'Hypothyroidism: unexplained weight gain, fatigue, constipation, hair loss, dry skin, cold intolerance, brain fog, depression',
        'Hyperthyroidism: unexplained weight loss, racing heart, heat intolerance, tremors, excessive sweating, anxiety, frequent bowel movements',
        'Both types: irregular periods in women, fertility issues',
        'Goitre (enlarged thyroid gland visible at the neck)',
        'Muscle weakness or cramps',
        'Puffy face, especially around eyes (hypothyroidism)',
        'Bulging eyes (Graves\' disease / hyperthyroidism)',
      ],
      causes: [
        'Autoimmune disease (Hashimoto\'s, Graves\') — most common cause',
        'Iodine deficiency (hypothyroidism) or excess (can trigger autoimmune thyroid disease)',
        'Selenium and zinc deficiency — essential for T4 to T3 conversion',
        'Chronic stress elevating cortisol, which suppresses thyroid function',
        'Gut dysbiosis — compromised gut converts less T4 to active T3',
        'Environmental toxins (fluoride, heavy metals, BPA) disrupting thyroid hormone production',
        'Gluten sensitivity — molecular mimicry triggers Hashimoto\'s in susceptible people',
        'Radiation exposure or thyroid surgery',
      ],
      whoAffected:
        'Over 4.2 crore Indians have thyroid disorders — making India the world\'s second-largest thyroid disease population. Women are 5–10× more affected than men. Hypothyroidism affects 1 in 10 urban Indian women; subclinical hypothyroidism (mildly elevated TSH) affects up to 32% in some studies.',
    },
    harms: {
      overview:
        'Untreated or poorly managed thyroid disease creates a cascade of metabolic, cardiovascular, and neurological complications. Because thyroid hormones regulate every body system, dysfunction affects the whole person.',
      risks: [
        {
          icon: '❤️',
          title: 'Cardiovascular Complications',
          description:
            'Hypothyroidism raises LDL cholesterol and homocysteine, increasing heart disease risk. Hyperthyroidism causes rapid heart rate, atrial fibrillation, and can lead to heart failure.',
        },
        {
          icon: '🧠',
          title: 'Cognitive Decline & Depression',
          description:
            'Thyroid hormones are critical for brain function. Chronic hypothyroidism causes memory loss, depression, and "brain fog." Severe cases can progress to myxoedema coma.',
        },
        {
          icon: '🌸',
          title: 'Infertility & Pregnancy Complications',
          description:
            'Both hypo- and hyperthyroidism disrupt the reproductive axis, causing irregular periods, failed conception, miscarriage, and — critically — foetal brain development problems in pregnancy.',
        },
        {
          icon: '🦴',
          title: 'Osteoporosis',
          description:
            'Hyperthyroidism accelerates bone turnover, causing significant bone loss and increasing fracture risk. Long-term suppressive thyroxine therapy also reduces bone density.',
        },
        {
          icon: '⚖️',
          title: 'Severe Metabolic Disruption',
          description:
            'Hypothyroidism slows metabolism by up to 40%, causing progressive weight gain that resists all conventional dieting and creates a demoralising cycle.',
        },
        {
          icon: '🫀',
          title: 'Myxoedema Crisis',
          description:
            'Severe untreated hypothyroidism can cause life-threatening myxoedema coma — an extreme slowing of all metabolic processes requiring emergency hospitalisation.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Nutrition cannot replace thyroid medication, but it powerfully supports thyroid hormone production, T4→T3 conversion, reduces autoimmune inflammation, and eliminates dietary triggers that worsen the condition.',
      benefits: [
        {
          icon: '🔬',
          title: 'Supports T4→T3 Conversion',
          description:
            'Selenium (from Brazil nuts, sunflower seeds) is essential for the enzyme that converts inactive T4 to active T3. Most hypothyroid patients are selenium-deficient.',
        },
        {
          icon: '🛡️',
          title: 'Reduces Autoimmune Inflammation',
          description:
            'An anti-inflammatory, gluten-aware diet reduces thyroid antibody levels (TPO antibodies) in Hashimoto\'s patients, slowing immune destruction of the gland.',
        },
        {
          icon: '🌿',
          title: 'Gut Healing',
          description:
            'Up to 20% of T4 is converted to T3 in the gut. Probiotics, prebiotics, and gut-healing foods restore this conversion, improving thyroid hormone availability.',
        },
        {
          icon: '⚖️',
          title: 'Weight Management',
          description:
            'A metabolism-supportive diet (iron, zinc, selenium, iodine adequacy) maximises thyroid function, making weight management possible even with a sluggish thyroid.',
        },
        {
          icon: '🧠',
          title: 'Mood & Energy Improvement',
          description:
            'Omega-3 fats and B-vitamins support neurotransmitter production, reducing the depression and brain fog common in hypothyroidism faster than medication alone.',
        },
        {
          icon: '💊',
          title: 'Optimised Medication Absorption',
          description:
            'Knowing which foods interfere with levothyroxine absorption (calcium, soy, fibre, coffee) and timing them correctly maximises the effectiveness of medication.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Thyroid-Essential Nutrients — Iodine, Selenium & Zinc',
        goals: [
          'Take levothyroxine on empty stomach 30–60 min before breakfast — consistently',
          'Do not take calcium, iron, or antacids within 4 hours of thyroid medication',
          'Ensure iodine adequacy through iodised salt (use only iodised salt, not rock salt for daily use)',
          'Add selenium and zinc-rich foods daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Medication window, then warm water with selenium-rich soaked nuts',
          breakfast: 'Wholegrain porridge with Brazil nuts and iodine-rich dairy',
          midMorning: 'Low-GI fruit with selenium-rich seeds',
          lunch: 'Millet roti with lentil dal, leafy greens and salad',
          eveningSnack: 'Zinc-rich seeds with green tea',
          dinner: 'Roti with iodine and selenium-rich fish or paneer and vegetables',
          bedtime: 'Warm iodine-rich milk with warming spice',
        },
        foodsToEat: [
          'Brazil nuts (1–2/day max — highest natural selenium source)',
          'Sunflower seeds and pumpkin seeds (selenium + zinc)',
          'Seafood: shrimp, fish, seaweed (iodine + selenium)',
          'Eggs (iodine, selenium, zinc)',
          'Low-fat dairy: milk, curd (iodine)',
          'Chicken and turkey (zinc and tyrosine for T4 production)',
        ],
        foodsToAvoid: [
          'Rock salt / sendha namak as daily salt (no iodine — use iodised salt)',
          'Soy in large amounts (interferes with thyroid hormone absorption)',
          'Coffee or calcium-rich food within 4 hours of thyroid medication',
          'Excess raw cruciferous vegetables (goitrogens — discuss with dietitian)',
          'Processed foods with artificial additives',
          'Fluoridated water in excess (fluoride competes with iodine)',
        ],
        followUp: [
          'Share current TSH, T3, T4 readings',
          'Confirm levothyroxine dose and timing with doctor',
          'Note current symptoms: fatigue level, weight, hair fall, constipation',
          'WhatsApp check-in Day 4',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Anti-Inflammatory & Anti-Autoimmune — Calming the immune attack',
        goals: [
          'Follow a gluten-reduced diet for 2 weeks to assess impact on symptoms (especially for Hashimoto\'s)',
          'Add omega-3 rich foods daily to reduce TPO antibody levels',
          'Include vitamin D sources (low vitamin D worsens autoimmune thyroid disease)',
          'Begin 20–30 min daily sunlight exposure for natural vitamin D',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with omega-3 nuts',
          breakfast: 'Gluten-reduced grain porridge or light savoury dish with egg',
          midMorning: 'Vitamin-C rich fruit to reduce antibodies with seeds',
          lunch: 'Wholegrains with anti-inflammatory fish or chicken curry and salad',
          eveningSnack: 'Roasted legumes with anti-inflammatory herbal tea',
          dinner: 'Gluten-reduced roti with dal and leafy greens',
          bedtime: 'Warm milk or calming herbal tea',
        },
        foodsToEat: [
          'Fatty fish (omega-3 reduces thyroid antibodies)',
          'Turmeric and ginger (anti-inflammatory, reduces autoimmune activity)',
          'Colourful vegetables and berries (antioxidants reduce oxidative stress on thyroid)',
          'Vitamin D-rich: egg yolk, fortified milk, mushrooms',
          'Fermented foods: curd, kanji (gut healing for T3 conversion)',
          'Zinc-rich: pumpkin seeds, chicken, legumes',
        ],
        foodsToAvoid: [
          'Gluten-heavy foods (wheat rotis, bread, pasta — for Hashimoto\'s trial)',
          'Soy milk, tofu, edamame in large amounts',
          'Excess cruciferous raw (broccoli, cabbage) — cook them instead',
          'Processed sugar (fuels autoimmune inflammation)',
          'Alcohol (disrupts thyroid hormone metabolism)',
        ],
        followUp: [
          'Document symptom changes on gluten-reduced diet',
          'Is fatigue, hair fall, or weight changing?',
          'Vitamin D test if not done in 6 months',
          'Discuss with endocrinologist if considering gluten-free long-term',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Metabolism Support — Helping a sluggish thyroid',
        goals: [
          'Eat small, regular meals every 3 hours — skipping meals crashes already slow metabolism',
          'Include iron-rich foods (iron deficiency impairs thyroid hormone production)',
          'Add metabolism-supportive spices: ginger, black pepper, cinnamon daily',
          'Ensure 7–8 hours sleep — poor sleep suppresses TSH and thyroid function',
        ],
        sampleDayMeals: {
          earlyMorning: 'Metabolism-boosting warm spiced water with soaked nuts',
          breakfast: 'Protein-rich savoury grain breakfast with probiotic curd',
          midMorning: 'Iron and vitamin-C rich fruit',
          lunch: 'Millet roti with iron-rich leafy dal and turmeric-seasoned sabzi',
          eveningSnack: 'Zinc-rich seeds with green tea',
          dinner: 'Millet roti with iron-rich protein curry and vegetables',
          bedtime: 'Warm TSH-supportive adaptogen milk',
        },
        foodsToEat: [
          'Iron-rich foods: spinach, amaranth, lentils, jaggery (with vitamin C for absorption)',
          'Ashwagandha — clinical trials show TSH improvement in subclinical hypothyroidism',
          'Coconut oil (medium-chain triglycerides support thyroid and metabolism)',
          'Black pepper and ginger (enhance metabolic rate)',
          'B12 sources: eggs, fish, dairy (B12 deficiency is common with hypothyroidism)',
          'Selenium-rich: Brazil nuts, sunflower seeds (continue from Week 1)',
        ],
        foodsToAvoid: [
          'Calcium supplements or calcium-rich food close to thyroid medication',
          'Iron supplements close to thyroid medication (take 4 hrs apart)',
          'Very low calorie diets — crash diets suppress T3 production',
          'Cold food and drinks in excess (impairs digestion in hypothyroid)',
        ],
        followUp: [
          'Any improvement in energy, hair fall, weight, bowel habits?',
          'Review medication timing compliance',
          'Check if constipation (common in hypothyroidism) is improving with diet',
          'Discuss ashwagandha supplementation with endocrinologist if interested',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Long-Term Thyroid Wellness — A lifestyle, not a diet',
        goals: [
          'Establish 5 permanent non-negotiable thyroid-supportive habits',
          'Schedule quarterly TSH, T3, T4 tests with endocrinologist',
          'Maintain consistent medication timing — set a daily alarm',
          'Manage stress actively: yoga, meditation, or breathing exercises daily',
        ],
        sampleDayMeals: {
          earlyMorning: 'Medication window, then warm lemon water with thyroid-supportive nuts',
          breakfast: 'Grain porridge with selenium-rich nuts and seeds',
          midMorning: 'Fresh seasonal fruit with selenium-rich seeds',
          lunch: 'Millet roti with dal, vegetables and salad',
          eveningSnack: 'Zinc-rich seeds with green tea',
          dinner: 'Millet roti with iron-rich dal or leafy greens and curd',
          bedtime: 'Warm adaptogen milk or calming herbal tea',
        },
        foodsToEat: [
          'All thyroid-supportive foods from Weeks 1–3',
          'Continue Brazil nuts (1–2/day), pumpkin seeds, sunflower seeds daily',
          'Iodised salt exclusively for daily cooking',
          'Fermented probiotic foods regularly',
        ],
        foodsToAvoid: [
          'Any food or supplement within 1 hour of thyroid medication',
          'Excess soy products',
          'High-stress, irregular mealtimes',
        ],
        followUp: [
          'End-of-month full consultation',
          'Compare TSH, T3, T4 vs initial readings (if blood test done)',
          'Symptom comparison: energy, weight, hair, mood vs Day 1',
          'Discuss medication dose review with endocrinologist based on progress',
          'Plan Month 2: continue or refine based on thyroid panel results',
        ],
      },
    ],
  },

  // ─── 10. CHOLESTEROL MANAGEMENT ──────────────────────────────────────────
  {
    slug: 'cholesterol',
    name: 'Cholesterol Management',
    icon: '🧬',
    category: 'Medical Conditions',
    tagline: 'Lower your cholesterol through food, not just pills',
    heroDescription:
      'High cholesterol is entirely manageable through diet — and in many cases, dietary intervention alone can bring levels into the healthy range without medication. A precisely designed lipid-lowering plan attacks LDL from multiple angles simultaneously.',
    condition: {
      overview:
        'Cholesterol is a fatty substance essential for cell membranes, hormones, and vitamin D synthesis. Problems arise when LDL ("bad") cholesterol is too high or HDL ("good") cholesterol is too low. Optimal levels: LDL < 100 mg/dL (< 70 for heart disease patients), HDL > 60 mg/dL, Total Cholesterol < 200 mg/dL, Triglycerides < 150 mg/dL. Dyslipidaemia (abnormal lipid levels) is driven primarily by diet, lifestyle, and genetics.',
      symptoms: [
        'High cholesterol itself has no symptoms — it is a "silent" risk factor',
        'Xanthelasma: yellowish deposits around the eyelids (sign of very high cholesterol)',
        'Xanthomas: fatty deposits on tendons, elbows, or knees',
        'Corneal arcus: grey/white ring around the cornea (in younger patients suggests familial hypercholesterolaemia)',
        'Symptoms only appear when complications arise: chest pain (angina), stroke, peripheral artery disease',
      ],
      causes: [
        'High intake of saturated fats (full-fat dairy, red meat, coconut oil)',
        'Trans fat consumption (vanaspati, margarine, fried foods, bakery)',
        'Low dietary fibre intake',
        'Sedentary lifestyle — physical activity raises HDL',
        'Obesity, especially abdominal fat',
        'Type 2 diabetes and insulin resistance',
        'Hypothyroidism',
        'Familial hypercholesterolaemia (genetic — LDL receptor defect)',
        'Chronic kidney or liver disease',
        'Certain medications (steroids, beta-blockers, oral contraceptives)',
      ],
      whoAffected:
        'Over 25–30% of Indian adults have dyslipidaemia. High triglycerides are particularly prevalent in Indians due to high carbohydrate diets. Indians also have genetically lower HDL levels on average, amplifying cardiovascular risk.',
    },
    harms: {
      overview:
        'Cholesterol itself does not cause symptoms — it kills silently by building plaques inside arteries over decades. By the time symptoms appear, significant damage has already occurred.',
      risks: [
        {
          icon: '🩺',
          title: 'Atherosclerosis',
          description:
            'LDL particles penetrate arterial walls, oxidise, and trigger plaque formation. These plaques slowly narrow arteries over years, reducing blood flow to vital organs.',
        },
        {
          icon: '💔',
          title: 'Heart Attack',
          description:
            'When a cholesterol plaque ruptures, it triggers a blood clot that completely blocks a coronary artery — causing myocardial infarction. High LDL is the primary driver.',
        },
        {
          icon: '🧠',
          title: 'Stroke',
          description:
            'Plaques in cerebral or carotid arteries cause ischaemic stroke. Every 1 mmol/L rise in LDL increases stroke risk by approximately 12%.',
        },
        {
          icon: '🦵',
          title: 'Peripheral Artery Disease',
          description:
            'Cholesterol buildup in leg arteries causes painful cramping while walking (claudication) and, in severe cases, gangrene requiring amputation.',
        },
        {
          icon: '🫘',
          title: 'Kidney & Liver Damage',
          description:
            'Cholesterol deposits in renal arteries reduce kidney function. Very high triglycerides can cause acute pancreatitis — a potentially life-threatening inflammation of the pancreas.',
        },
        {
          icon: '📈',
          title: 'Compounded Risk with Other Conditions',
          description:
            'High cholesterol rarely exists alone — it clusters with hypertension, diabetes, and obesity, multiplying cardiovascular risk many times over.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Diet directly controls LDL, HDL, and triglyceride levels through multiple mechanisms — reducing production, increasing clearance, and blocking reabsorption. Clinical nutrition alone can reduce LDL by 20–30% in 3 months.',
      benefits: [
        {
          icon: '📉',
          title: 'LDL Reduction via Soluble Fibre',
          description:
            'Soluble fibre (oats, psyllium, legumes) forms a gel in the gut that binds cholesterol and bile acids, removing them before absorption. 5–10g/day reduces LDL by up to 11%.',
        },
        {
          icon: '⬆️',
          title: 'HDL Elevation',
          description:
            'Monounsaturated fats (olive oil, avocado, almonds) and regular aerobic exercise raise protective HDL — the "cholesterol vacuum cleaner" that removes LDL from arteries.',
        },
        {
          icon: '📉',
          title: 'Triglyceride Reduction',
          description:
            'Cutting refined carbohydrates and sugar while adding omega-3 fats reduces triglycerides by 20–50% — often more effectively than diet changes to LDL.',
        },
        {
          icon: '🌿',
          title: 'Anti-Oxidation of LDL',
          description:
            'Antioxidants (vitamin C, E, polyphenols) prevent LDL oxidation — the step that makes it dangerous. Oxidised LDL is what actually forms plaques.',
        },
        {
          icon: '🧬',
          title: 'Plant Sterols',
          description:
            'Plant sterols in nuts, seeds, and vegetables structurally resemble cholesterol and compete for absorption, directly reducing LDL levels.',
        },
        {
          icon: '💊',
          title: 'Reduced Statin Dependence',
          description:
            'For borderline-high cholesterol, dietary intervention can achieve results comparable to low-dose statins — with no side effects and lasting benefits.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Eliminate LDL Drivers — Saturated and trans fats out',
        goals: [
          'Remove all trans fats permanently: vanaspati, margarine, all fried packaged foods',
          'Reduce saturated fat: ghee to ½ tsp/day, limit red meat to once a week',
          'Switch to extra virgin olive oil or cold-pressed mustard oil for all cooking',
          'Add 1 tbsp psyllium husk (isabgol) in water once daily before a meal',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with plant-sterol-rich soaked nuts',
          breakfast: 'LDL-lowering oat porridge with seeds and low-fat milk',
          midMorning: 'Soluble-fibre-rich fruit with unsalted nuts',
          lunch: 'Millet roti with legumes, stir-fried vegetables and large salad',
          eveningSnack: 'Soluble fibre drink with roasted legumes',
          dinner: 'Millet roti with leafy dal, stir-fried vegetables and raita',
          bedtime: 'Warm low-fat milk with cholesterol-balancing spice',
        },
        foodsToEat: [
          'Oats and oat bran every day (beta-glucan reduces LDL by up to 8%)',
          'Psyllium husk (1 tsp/day) — strong clinical evidence for LDL reduction',
          'Almonds and walnuts (plant sterols + healthy fats)',
          'All legumes: rajma, chana, moong, masoor (soluble fibre)',
          'Extra virgin olive oil exclusively',
          'Apples, oranges, pears (pectin soluble fibre)',
        ],
        foodsToAvoid: [
          'Vanaspati, dalda, margarine — permanently',
          'All deep-fried foods',
          'Full-fat dairy: cream, cheese, butter, full-cream milk',
          'Red meat more than once a week',
          'Coconut oil (high saturated fat)',
          'Packaged bakery products (hidden trans fats)',
        ],
        followUp: [
          'Share current lipid panel: LDL, HDL, TG, total cholesterol',
          'Record baseline weight and waist measurement',
          'WhatsApp check-in Day 4',
          'Food diary: track fat quality in every meal',
        ],
      },
      {
        weekNumber: 2,
        theme: 'LDL Fighters In — Sterols, omega-3s, and polyphenols',
        goals: [
          'Have a handful of walnuts daily (proven LDL reduction of 5–10%)',
          'Add 1–2 tbsp ground flaxseed to every breakfast',
          'Drink green or black tea twice daily (catechins reduce LDL oxidation)',
          'Replace white rice with oats, barley, or millets for at least 5 days this week',
        ],
        sampleDayMeals: {
          earlyMorning: 'Antioxidant coffee or green tea with LDL-fighting soaked nuts',
          breakfast: 'Beta-glucan grain breakfast with omega-3 seeds and curd',
          midMorning: 'Polyphenol-rich fruit with unsalted almonds',
          lunch: 'Beta-glucan grain meal with mixed bean curry and large salad',
          eveningSnack: 'Small portion dark chocolate with antioxidant green tea',
          dinner: 'Millet roti with legume dal and heart-healthy stir-fried vegetables',
          bedtime: 'Warm low-fat milk with warming spice',
        },
        foodsToEat: [
          'Walnuts — most evidence-backed nut for LDL reduction',
          'Flaxseeds: ground, 1–2 tbsp/day (omega-3 ALA + lignans)',
          'Barley (highest beta-glucan content of all grains)',
          'Dark chocolate ≥70% (flavanols reduce LDL oxidation)',
          'Green tea, hibiscus tea, pomegranate juice (polyphenols)',
          'Avocado if available (monounsaturated fats raise HDL)',
        ],
        foodsToAvoid: [
          'Refined sugar (raises triglycerides and lowers HDL)',
          'White rice as main staple (raises triglycerides)',
          'Instant oats (processed, less beta-glucan than rolled oats)',
          'Excess salt (co-manages BP alongside cholesterol)',
        ],
        followUp: [
          'How is digestion with psyllium husk and added fibre?',
          'Any significant dietary changes you are struggling with?',
          'Mid-week weight check',
          'Discuss statin vs dietary approach with cardiologist if LDL > 190 mg/dL',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Triglyceride Control — Cutting sugar and simple carbs',
        goals: [
          'Target triglycerides specifically: cut all sugar, fruit juice, and refined carbs',
          'Increase omega-3 intake: oily fish twice a week (if non-veg) or double flaxseed',
          'Limit fruit to 2 pieces/day of low-sugar varieties',
          'Reduce total carbohydrate to 40–45% of calories this week',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with omega-3 nuts',
          breakfast: 'Low-carb protein-led breakfast with heart-healthy oil',
          midMorning: 'Low-sugar fruit with anti-inflammatory seeds',
          lunch: 'Millet roti with omega-3-rich fish or paneer and large dressed salad',
          eveningSnack: 'Mixed unsalted nuts with green tea',
          dinner: 'Light grain-based one-pot meal with greens and low-fat curd',
          bedtime: 'Warm low-fat milk with spice',
        },
        foodsToEat: [
          'Oily fish: sardines, mackerel, rohu (omega-3 reduces triglycerides by 25–30%)',
          'Garlic: 2 cloves daily (allicin reduces both LDL and triglycerides)',
          'Amla — highest natural vitamin C, prevents LDL oxidation',
          'Chia seeds and flaxseeds',
          'Fenugreek seeds (methi) — saponins reduce cholesterol absorption',
          'Continue all Week 1 and 2 established foods',
        ],
        foodsToAvoid: [
          'All sugary foods — primary triglyceride driver',
          'Refined carbohydrates of any kind',
          'Mango, banana, grapes, litchi in excess (high sugar = raised TG)',
          'Coconut water in large amounts',
          'Fruit juices',
        ],
        followUp: [
          'Estimate expected LDL improvement based on dietary adherence',
          'Schedule repeat lipid panel (ideally 6–8 weeks after diet change)',
          'Review triglyceride-specific changes',
          'Discuss with cardiologist whether statin therapy is still needed based on progress',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Locking In the Lipid-Lowering Lifestyle',
        goals: [
          'Make a permanent list of your 5 daily cholesterol-fighting habits',
          'Plan 150 min of aerobic exercise weekly (raises HDL by 3–5 points)',
          'Schedule quarterly lipid panel monitoring',
          'Build a restaurant ordering strategy: what to eat when dining out',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with LDL-fighting soaked nuts',
          breakfast: 'Beta-glucan grain porridge with omega-3 seeds and low-fat milk',
          midMorning: 'Soluble-fibre fruit with unsalted almonds',
          lunch: 'Wholegrains with legumes, large salad and low-fat raita',
          eveningSnack: 'Antioxidant herbal tea with unsalted nuts or seeds',
          dinner: 'Multigrain roti with dal and vegetables in heart-healthy oil',
          bedtime: 'Warm low-fat milk',
        },
        foodsToEat: [
          'All established lipid-lowering foods from Weeks 1–3',
          'Continue oats, psyllium, walnuts, flaxseeds, legumes daily',
          'Olive oil for all cooking',
          'Green/hibiscus tea twice daily',
        ],
        foodsToAvoid: [
          'Trans fats — permanently, no exceptions',
          'Saturated fat in excess',
          'Sugar and refined carbohydrates as staples',
        ],
        followUp: [
          'End-of-month full consultation',
          'Lipid panel comparison: LDL, HDL, TG vs baseline',
          'Calculate 10-year cardiovascular risk score improvement',
          'Discuss statin dose review with cardiologist based on dietary progress',
          'Plan Month 2 — maintain or intensify based on blood results',
        ],
      },
    ],
  },

  // ─── 11. HORMONAL IMBALANCE ──────────────────────────────────────────────
  {
    slug: 'hormonal-imbalance',
    name: 'Hormonal Imbalance',
    icon: '⚖️',
    category: 'Medical Conditions',
    tagline: 'Restore your hormonal harmony through food',
    heroDescription:
      'Hormones govern everything — mood, weight, sleep, energy, libido, and metabolism. When they fall out of balance, the effects ripple through every aspect of life. A clinically targeted nutritional strategy can restore hormonal harmony naturally, addressing root causes rather than masking symptoms.',
    condition: {
      overview:
        'Hormonal imbalance refers to disruption in the levels or signalling of key hormones — oestrogen, progesterone, testosterone, cortisol, insulin, thyroid hormones, or growth hormone — that regulate bodily functions. The endocrine system is highly sensitive to diet, stress, sleep, and environmental toxins. Even small imbalances create wide-ranging symptoms across body systems, and multiple hormones are usually affected simultaneously.',
      symptoms: [
        'Irregular, heavy, or absent menstrual periods in women',
        'Unexplained weight gain or difficulty losing weight',
        'Persistent fatigue even after adequate sleep',
        'Mood swings, anxiety, depression, or irritability',
        'Acne, especially along the jawline and chin',
        'Hair thinning or excessive facial/body hair',
        'Low libido and reduced sexual function',
        'Hot flashes or night sweats (perimenopause or oestrogen imbalance)',
        'Bloating, constipation, or digestive issues',
        'Brain fog and poor concentration',
        'Sleep disturbances and insomnia',
      ],
      causes: [
        'Chronic stress dysregulating cortisol — the "master hormone disruptor"',
        'Poor sleep disrupting growth hormone, melatonin, cortisol, and insulin rhythms',
        'Insulin resistance affecting sex hormone binding globulin (SHBG)',
        'Nutrient deficiencies: magnesium, zinc, B6, D3, omega-3, iodine',
        'Gut dysbiosis impairing oestrogen metabolism and detoxification',
        'Environmental endocrine disruptors: BPA in plastics, pesticides, parabens',
        'Extreme dieting or very low-fat diet removing fat required for hormone synthesis',
        'Perimenopause, menopause, or andropause (age-related hormonal transitions)',
        'Thyroid dysfunction (affects all other hormone systems)',
        'Overtraining or under-eating in athletes',
      ],
      whoAffected:
        'Hormonal imbalance is extremely common but vastly under-diagnosed. In India, an estimated 43% of women aged 20–50 experience some form of hormonal disruption. Men over 35 increasingly face androgen deficiency. Urban lifestyle, chronic stress, and poor diet are the primary modern drivers.',
    },
    harms: {
      overview:
        'Hormones are the body\'s chemical messengers — when even one is out of balance, it disrupts the entire hormonal cascade. Untreated imbalances compound over time into serious metabolic and reproductive disease.',
      risks: [
        {
          icon: '🌸',
          title: 'Reproductive & Fertility Problems',
          description:
            'Oestrogen-progesterone imbalance causes irregular cycles, failed ovulation, endometriosis, fibroids, and infertility — affecting both immediate fertility and long-term reproductive health.',
        },
        {
          icon: '⚖️',
          title: 'Metabolic Syndrome',
          description:
            'Insulin resistance from hormonal disruption leads to central obesity, high triglycerides, low HDL, and high BP — a dangerous cluster that drastically raises cardiovascular risk.',
        },
        {
          icon: '🧠',
          title: 'Mental Health Deterioration',
          description:
            'Oestrogen, progesterone, testosterone, and cortisol all directly regulate serotonin and dopamine. Chronic imbalance causes treatment-resistant depression, anxiety, and mood instability.',
        },
        {
          icon: '🦴',
          title: 'Bone Loss',
          description:
            'Low oestrogen (in women) and low testosterone (in men) dramatically accelerate bone density loss, leading to osteoporosis and fractures at younger ages.',
        },
        {
          icon: '😴',
          title: 'Chronic Sleep Disruption',
          description:
            'Cortisol imbalance, progesterone deficiency, and melatonin disruption create persistent insomnia and non-restorative sleep — which then worsens all hormonal imbalances in a vicious cycle.',
        },
        {
          icon: '🩺',
          title: 'Increased Cancer Risk',
          description:
            'Oestrogen dominance (high oestrogen relative to progesterone) is linked to higher risk of breast, uterine, and ovarian cancers when sustained long-term without intervention.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Food provides the raw materials for hormone synthesis and the signals that regulate their release. A targeted nutritional plan removes dietary hormone disruptors, provides essential building blocks, and supports the liver and gut in metabolising hormones properly.',
      benefits: [
        {
          icon: '🔧',
          title: 'Hormone Building Blocks',
          description:
            'Healthy fats (cholesterol from whole food sources, omega-3, omega-6 in balance) are the literal raw material for sex hormones. A low-fat diet impairs oestrogen and testosterone synthesis.',
        },
        {
          icon: '🌿',
          title: 'Cortisol Regulation',
          description:
            'Anti-inflammatory foods, adequate protein, and stable blood sugar reduce chronic cortisol elevation — the single biggest disruptor of all other hormonal systems.',
        },
        {
          icon: '🦠',
          title: 'Oestrogen Detoxification via Gut',
          description:
            'A healthy gut microbiome (through probiotics and fibre) ensures excess oestrogen is excreted rather than recirculated, reducing oestrogen dominance symptoms.',
        },
        {
          icon: '💊',
          title: 'Micronutrient Sufficiency',
          description:
            'Magnesium (for cortisol), zinc (for testosterone), B6 (for progesterone), vitamin D (for almost all hormones) — replenishing these through diet restores hormonal function.',
        },
        {
          icon: '🍽️',
          title: 'Stable Blood Sugar = Stable Hormones',
          description:
            'Blood sugar spikes trigger insulin surges that disrupt testosterone in men and oestrogen/progesterone in women. Low-GI eating stabilises the entire hormonal cascade.',
        },
        {
          icon: '✨',
          title: 'Symptom Relief Within Weeks',
          description:
            'Mood stability, reduced bloating, better sleep, and improved energy often begin within 2–3 weeks of implementing targeted hormonal nutrition changes.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Blood Sugar Stability — The hormonal foundation',
        goals: [
          'Eat every 3 hours — blood sugar crashes spike cortisol and disrupt all hormones',
          'Eliminate all refined sugar and simple carbohydrates',
          'Include protein at every single meal and snack',
          'Begin a stress and sleep diary alongside food diary',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with hormone-supportive soaked nuts',
          breakfast: 'Protein-rich savoury breakfast with probiotic curd',
          midMorning: 'Low-GI fruit with healthy nuts or nut butter',
          lunch: 'Millet roti with dal, sabzi and fresh salad',
          eveningSnack: 'Hormone-supportive seeds with cortisol-calming herbal tea',
          dinner: 'Millet roti with plant or egg protein and stir-fried vegetables',
          bedtime: 'Warm cortisol-calming adaptogen milk',
        },
        foodsToEat: [
          'All legumes (protein + fibre for blood sugar stability)',
          'Eggs (cholesterol precursor for hormone synthesis)',
          'Nuts: almonds, walnuts, pumpkin seeds',
          'All green vegetables (magnesium)',
          'Low-GI fruits: apple, pear, pomegranate',
          'Spearmint tea (reduces androgens in women)',
        ],
        foodsToAvoid: [
          'All sugar and sweetened foods',
          'Refined carbohydrates (white rice, bread, biscuits)',
          'Caffeine after 2 PM (disrupts cortisol rhythm)',
          'Alcohol (disrupts oestrogen metabolism in the liver)',
          'Skipping meals — worst trigger for cortisol spike',
        ],
        followUp: [
          'Note current menstrual cycle phase and key symptoms',
          'Share any relevant blood tests: oestrogen, progesterone, testosterone, DHEA, cortisol',
          'Assess current stress and sleep levels (1–10 scale)',
          'WhatsApp check-in Day 4',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Hormone-Building Fats & Micronutrients',
        goals: [
          'Ensure adequate healthy fat at every meal (hormones are fat-made)',
          'Add magnesium-rich foods daily — many people do not meet their daily requirement',
          'Include zinc-rich foods for testosterone and progesterone',
          'Introduce seed cycling (see foods to eat) for natural cycle support',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with seed-cycling seeds for cycle phase',
          breakfast: 'Healthy-fat-rich breakfast with grain toast or porridge and protein',
          midMorning: 'Vitamin-C rich fruit for progesterone support with hormone-supportive seeds',
          lunch: 'Wholegrains with legumes, large salad and roasted vegetables',
          eveningSnack: 'Mixed nuts with calming herbal tea',
          dinner: 'Roti with protein curry using healthy fat and iron-rich greens',
          bedtime: 'Warm hormone-balancing adaptogen milk',
        },
        foodsToEat: [
          'Seed cycling: flaxseeds + pumpkin seeds (Days 1–14) for oestrogen; sesame + sunflower seeds (Days 15–28) for progesterone',
          'Avocado (monounsaturated fat for hormone synthesis)',
          'Ghee in moderation (cholesterol precursor for hormone production)',
          'Pumpkin seeds (highest zinc food — zinc essential for testosterone + progesterone)',
          'Dark leafy greens: spinach, amaranth (magnesium)',
          'Shatavari (Ayurvedic adaptogen for female hormonal balance — as milk/powder)',
        ],
        foodsToAvoid: [
          'Very low fat foods or fat-free diets (destroys hormone production)',
          'Excess soy in processed form (disrupts oestrogen balance)',
          'Plastic containers for hot food and drinks (BPA disrupts oestrogens)',
          'Conventional dairy with hormones if possible — prefer organic or A2',
        ],
        followUp: [
          'Any early changes in mood, sleep, or energy?',
          'Discuss seed cycling protocol in detail for menstrual cycle support',
          'Review magnesium and zinc adequacy',
          'Assess stress management practices',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Liver & Gut Detox — Clearing excess hormones',
        goals: [
          'Support liver oestrogen detoxification with cruciferous vegetables daily',
          'Add probiotic and prebiotic foods (gut microbiome metabolises excess oestrogen)',
          'Practice 12-hour overnight fast to reset insulin and cortisol rhythms',
          'Prioritise 8 hours of sleep — 80% of hormone regulation happens during sleep',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm liver-stimulating lemon-ginger water with soaked nuts',
          breakfast: 'Anti-inflammatory grain porridge with seeds and probiotic curd',
          midMorning: 'Liver-detox root vegetable juice or salad',
          lunch: 'Millet roti with dal and cruciferous vegetables stir-fried with garlic',
          eveningSnack: 'Oestrogen-supportive seeds with liver-tonic herbal tea',
          dinner: 'Light vegetable soup with millet roti and leafy green protein dish',
          bedtime: 'Warm adaptogen or calming herbal milk',
        },
        foodsToEat: [
          'Cruciferous vegetables: broccoli, cabbage, cauliflower, kale (DIM — supports oestrogen detox)',
          'Beetroot (betaine supports liver detoxification pathways)',
          'Garlic and onion (sulphur compounds support liver phase 2 detox)',
          'Homemade curd, kanji (probiotics regulate oestrogen recirculation)',
          'Flaxseeds daily (lignans bind excess oestrogen)',
          'Dandelion tea (gentle liver tonic)',
        ],
        foodsToAvoid: [
          'Alcohol — severely impairs liver oestrogen metabolism',
          'Excess caffeine',
          'Processed and packaged foods with additives',
          'Late-night meals after 9 PM',
        ],
        followUp: [
          'Assess bloating and digestive comfort',
          'Any improvement in skin, mood, or cycle regularity?',
          'Review sleep quality — is the 12-hour fast helping reset sleep?',
          'Consider testing: oestrogen, progesterone, testosterone mid-cycle if not recently done',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Hormonal Lifestyle Architecture — Building permanence',
        goals: [
          'Identify your 5 non-negotiable daily hormonal health habits',
          'Create a stress management routine that works for your life',
          'Plan meals around your menstrual cycle phase (follicular vs luteal eating)',
          'Schedule a 3-month review with endocrinologist alongside the diet plan',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm hormone-supportive water with soaked nuts',
          breakfast: 'Protein-rich balanced breakfast with hormone-supportive seeds',
          midMorning: 'Fresh seasonal fruit with nuts',
          lunch: 'Millets with legumes, cruciferous vegetables and salad',
          eveningSnack: 'Androgen-balancing herbal tea with seeds',
          dinner: 'Roti with dal, leafy greens and probiotic curd',
          bedtime: 'Warm adaptogen or calming herbal milk',
        },
        foodsToEat: [
          'All established hormone-supportive foods from Weeks 1–3',
          'Continue seed cycling',
          'Cruciferous vegetables daily',
          'Probiotic foods regularly',
          'Adaptogens: ashwagandha, shatavari as tolerated',
        ],
        foodsToAvoid: [
          'Processed sugar in any form',
          'Alcohol',
          'Stress-eating patterns',
        ],
        followUp: [
          'End-of-month full consultation',
          'Compare symptom tracker: mood, energy, cycle regularity, skin vs Week 1',
          'Blood test review if done: sex hormones, cortisol, thyroid panel',
          'Plan Month 2 — phase-specific nutrition and adaptogens',
          'Discuss referral to endocrinologist or gynaecologist if needed',
        ],
      },
    ],
  },

  // ─── 12. ACIDITY & GERD ──────────────────────────────────────────────────
  {
    slug: 'acidity-gerd',
    name: 'Acidity & GERD',
    icon: '🔥',
    category: 'Gastrointestinal',
    tagline: 'Heal your gut lining and end acid reflux through diet',
    heroDescription:
      'Acidity and GERD (Gastroesophageal Reflux Disease) are among the most common yet most diet-responsive conditions. The right foods reduce acid production, strengthen the oesophageal sphincter, and heal the gut lining — providing lasting relief without lifelong dependence on antacids.',
    condition: {
      overview:
        'GERD occurs when stomach acid and contents repeatedly flow back (reflux) into the oesophagus, irritating its lining. The lower oesophageal sphincter (LES) — a muscular valve between the oesophagus and stomach — weakens or relaxes inappropriately, allowing reflux. Simple acidity is occasional; GERD is chronic (occurring more than twice weekly). Left untreated, GERD erodes the oesophageal lining, causing Barrett\'s oesophagus and raising cancer risk.',
      symptoms: [
        'Burning sensation in the chest (heartburn), especially after meals or lying down',
        'Sour or bitter taste in the mouth (acid regurgitation)',
        'Difficulty or pain when swallowing',
        'Chronic dry cough or throat clearing',
        'Hoarseness or voice changes (laryngopharyngeal reflux)',
        'Feeling of a lump in the throat',
        'Bloating and belching after meals',
        'Nausea, especially in the morning',
        'Worsening symptoms when bending over or lying flat after eating',
      ],
      causes: [
        'Weak or relaxed lower oesophageal sphincter (LES)',
        'Trigger foods: spicy food, fried food, chocolate, caffeine, alcohol, mint, tomatoes, citrus',
        'Overeating and large meals distending the stomach',
        'Eating too close to bedtime (within 2–3 hours)',
        'Obesity — abdominal fat increases pressure on the stomach',
        'Smoking — weakens the LES and reduces saliva production',
        'Hiatal hernia (part of stomach pushing through diaphragm)',
        'Chronic stress increasing stomach acid secretion',
        'Long-term use of NSAIDs (aspirin, ibuprofen), calcium channel blockers',
        'Pregnancy — hormonal changes and baby pressure on stomach',
      ],
      whoAffected:
        'GERD affects 18–26% of Indian adults — nearly 25–30 crore people. Urban Indians are disproportionately affected due to spicy high-fat diets, stress, irregular eating times, and rising obesity. It is the most common gastrointestinal complaint in outpatient clinics across India.',
    },
    harms: {
      overview:
        'Chronic acid reflux is far more serious than just discomfort. Untreated GERD progressively damages the oesophagus and surrounding structures, with increasing cancer risk over years.',
      risks: [
        {
          icon: '🔥',
          title: 'Oesophagitis',
          description:
            'Chronic acid exposure inflames and erodes the oesophageal lining, causing painful swallowing, bleeding, and oesophageal ulcers that significantly impair quality of life.',
        },
        {
          icon: '🧬',
          title: 'Barrett\'s Oesophagus',
          description:
            'Repeated acid damage causes abnormal cell changes in the oesophageal lining. Barrett\'s oesophagus is a precancerous condition affecting 10–15% of chronic GERD patients.',
        },
        {
          icon: '☠️',
          title: 'Oesophageal Cancer',
          description:
            'Barrett\'s oesophagus can progress to oesophageal adenocarcinoma — one of the fastest-rising cancers globally. Chronic GERD increases this cancer risk by 40–125 times.',
        },
        {
          icon: '🫁',
          title: 'Respiratory Complications',
          description:
            'Acid microaspiration into the airways causes chronic cough, asthma exacerbations, recurrent pneumonia, and pulmonary fibrosis in severe cases.',
        },
        {
          icon: '🦷',
          title: 'Dental Erosion',
          description:
            'Repeated acid in the mouth erodes tooth enamel, causing sensitivity, cavities, and significant dental damage that is expensive and difficult to reverse.',
        },
        {
          icon: '💊',
          title: 'PPI Dependency',
          description:
            'Long-term proton pump inhibitor (PPI) use — while effective — is associated with magnesium deficiency, increased infection risk, bone loss, and rebound acid hypersecretion when stopped.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Dietary management is the most effective long-term strategy for GERD. By identifying and eliminating trigger foods, improving eating habits, and including healing foods, many patients can significantly reduce or eliminate symptoms without medication.',
      benefits: [
        {
          icon: '🛡️',
          title: 'Reduced Acid Production',
          description:
            'Alkaline and low-acid foods (vegetables, oats, bananas, melons) naturally reduce stomach acid levels and buffer existing acid, providing immediate and lasting relief.',
        },
        {
          icon: '💪',
          title: 'Strengthened LES',
          description:
            'Avoiding LES-weakening triggers (caffeine, alcohol, fried foods, mint) and maintaining a healthy weight directly strengthens the sphincter that prevents reflux.',
        },
        {
          icon: '🌿',
          title: 'Oesophageal Healing',
          description:
            'Aloe vera juice, slippery elm, and anti-inflammatory foods support healing of the irritated oesophageal lining, reducing pain and protecting against further erosion.',
        },
        {
          icon: '⚖️',
          title: 'Weight Reduction = Less Reflux',
          description:
            'Every 5 kg of weight loss reduces intra-abdominal pressure, significantly reducing reflux frequency — particularly in overweight patients.',
        },
        {
          icon: '⏰',
          title: 'Meal Timing Transforms Symptoms',
          description:
            'Eating small, frequent meals, finishing dinner 3 hours before bed, and avoiding lying down after eating dramatically reduces nocturnal reflux and morning symptoms.',
        },
        {
          icon: '💊',
          title: 'Reduced Antacid Need',
          description:
            'Patients who implement dietary changes consistently often reduce antacid use by 50–70% within 4–6 weeks, with improved long-term outcomes compared to medication alone.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Trigger Elimination — Removing what fires the acid',
        goals: [
          'Identify and completely remove your personal top 3 trigger foods this week',
          'Eat nothing for 3 hours before bedtime',
          'Switch from 3 large meals to 5 small meals per day',
          'Sleep with the head of your bed elevated 6–8 inches (left side position is best)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Room-temperature water or soothing aloe vera drink',
          breakfast: 'Plain mild-spiced wholegrain porridge with alkaline fruit',
          midMorning: 'Alkaline soothing fruit',
          lunch: 'Plain roti with mild dal and cooling vegetable with curd',
          eveningSnack: 'Light plain snack with mild ginger tea',
          dinner: 'Small plain wholesome meal eaten well before bedtime',
          bedtime: 'Nothing after dinner',
        },
        foodsToEat: [
          'Banana and melon (highly alkaline, soothe oesophagus)',
          'Oatmeal and daliya (absorb stomach acid)',
          'Bottle gourd, ash gourd, cucumber (cooling vegetables)',
          'Plain curd (probiotics heal gut lining)',
          'Aloe vera juice (30 ml before meals) — heals oesophageal irritation',
          'Coconut water — cooling and alkaline',
        ],
        foodsToAvoid: [
          'Spicy food, excess red and green chilli',
          'Tomatoes, tomato-based curries, and sauces',
          'Citrus fruits: lemon, orange, grapefruit',
          'Fried and fatty food',
          'Coffee, black tea, carbonated drinks',
          'Chocolate, mint, garlic in excess, raw onion',
          'Alcohol in any form',
        ],
        followUp: [
          'Keep a symptom-food diary: rate heartburn 1–10 after each meal',
          'Note time of last meal and bedtime daily',
          'WhatsApp check-in Day 4',
          'Record frequency and severity of reflux episodes',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Gut Healing Foods — Rebuilding the oesophageal lining',
        goals: [
          'Add aloe vera juice (30 ml) before every main meal',
          'Include probiotic foods at every meal (heals gut microbiome)',
          'Chew every bite 20–30 times — proper chewing reduces stomach acid demand',
          'Drink water between meals, not with meals (dilutes digestive enzymes)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Aloe vera juice with warm water',
          breakfast: 'Soothing fruit-oat drink or mild fermented grain breakfast',
          midMorning: 'Digestive enzyme-rich fruit like melon or papaya',
          lunch: 'Soft roti with plain dal and cooling vegetable with curd',
          eveningSnack: 'Plain light snack with calming herbal tea',
          dinner: 'Small plain one-pot meal with steamed vegetables and curd',
          bedtime: 'Nothing or plain warm water if needed',
        },
        foodsToEat: [
          'Aloe vera juice before meals (most evidence-backed GERD dietary remedy)',
          'Papaya (papain enzyme eases digestion, reduces acid)',
          'Homemade curd and buttermilk (probiotics heal gut lining)',
          'Fennel seeds (saunf) — chew after meals (natural antacid)',
          'Ginger in small amounts (anti-inflammatory for gut)',
          'Licorice root tea or DGL (deglycyrrhizinated licorice) — soothes oesophagus',
        ],
        foodsToAvoid: [
          'Very hot food and drinks (heat damages already irritated oesophagus)',
          'Eating too fast',
          'Drinking large amounts of water with meals',
          'Lying down within 3 hours of any meal',
          'Hard, dry, rough foods that scratch the oesophagus',
        ],
        followUp: [
          'Compare symptom frequency: Week 1 vs Week 2',
          'Are antacid use or PPI requirements reducing?',
          'Assess sleep quality — is nocturnal reflux improving?',
          'Discuss any alarm symptoms: blood in stool/vomit, difficulty swallowing — refer to gastroenterologist',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Alkaline Balance & Weight Management',
        goals: [
          'Follow an alkaline-leaning diet: 70% alkaline foods, 30% neutral',
          'Aim for 0.5 kg weight loss this week if overweight (each kg reduces reflux significantly)',
          'Practice diaphragmatic breathing after meals (strengthens LES)',
          'Raise head end of bed permanently if nocturnal reflux persists',
        ],
        sampleDayMeals: {
          earlyMorning: 'Aloe vera juice with warm water',
          breakfast: 'Alkaline grain porridge with soothing fruit and milk',
          midMorning: 'High-water-content alkaline fruit',
          lunch: 'Soft roti with mild dal and cooling vegetable with curd',
          eveningSnack: 'Calming herbal tea with plain rice snack',
          dinner: 'Light grain-based meal with steamed vegetables and curd, well before bed',
          bedtime: 'Nothing — gentle walk after dinner if helpful',
        },
        foodsToEat: [
          'All alkaline vegetables: cucumber, lauki, pumpkin, spinach (cooked)',
          'Watermelon, melon, banana, papaya',
          'Basil leaves — natural antacid and anti-spasmodic',
          'Fennel seed water (1 tsp seeds in warm water after meals)',
          'Cold-pressed coconut water (small amount)',
          'Slippery elm powder (if available) — coats and soothes oesophagus',
        ],
        foodsToAvoid: [
          'Any food that has triggered symptoms in Weeks 1–2',
          'Excess oil in cooking even with non-trigger foods',
          'Eating standing up or on the move',
          'Carbonated water (even plain sparkling water)',
          'Very cold food and drinks (triggers LES spasm)',
        ],
        followUp: [
          'Full symptom review — compare to Day 1 diary',
          'Weight check: loss from Week 1?',
          'Are you sleeping better? Review bed positioning',
          'Gastroenterology referral if symptoms persist despite diet for endoscopy',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Long-Term Reflux Management — Permanent habits',
        goals: [
          'Establish the 5 GERD-prevention habits you will follow permanently',
          'Develop a safe restaurant eating guide (what to order, what to avoid)',
          'Taper antacid/PPI use gradually under doctor guidance if symptoms are controlled',
          'Learn GERD-safe Indian cooking modifications (reduce oil, spice, tomato)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Aloe vera juice with warm water',
          breakfast: 'Mild wholegrain porridge with soothing alkaline fruit',
          midMorning: 'Digestive-supportive alkaline fruit',
          lunch: 'Soft roti with mild dal, cooling vegetable and curd',
          eveningSnack: 'Light plain snack with calming herbal tea',
          dinner: 'Small plain meal with steamed vegetables and curd, eaten early',
          bedtime: 'Nothing',
        },
        foodsToEat: [
          'All established GERD-healing foods from Weeks 1–3',
          'Continue aloe vera juice before main meals',
          'Fennel seeds after every meal as digestive',
          'Curd regularly for gut microbiome health',
        ],
        foodsToAvoid: [
          'All personal trigger foods identified in diary — permanently',
          'Large meals at any time',
          'Late-night eating',
          'Lying down after eating',
        ],
        followUp: [
          'End-of-month full consultation',
          'Compare symptom score: Day 1 vs Day 30',
          'Discuss PPI taper plan with gastroenterologist',
          'Endoscopy if not done in past year and symptoms are chronic',
          'Plan Month 2 — gradual reintroduction of mildly acidic foods to test tolerance',
        ],
      },
    ],
  },
  // ─── 13. CONSTIPATION ────────────────────────────────────────────────────
  {
    slug: 'constipation',
    name: 'Constipation',
    icon: '🚽',
    category: 'Gastrointestinal',
    tagline: 'Restore natural, effortless digestion through food',
    heroDescription:
      'Constipation is one of the most common yet most preventable digestive conditions. The right fibre, fluids, and gut-friendly foods can restore regular, comfortable bowel movements within days — without laxatives or long-term dependence on supplements.',
    condition: {
      overview:
        'Constipation is defined as fewer than 3 bowel movements per week, or stools that are hard, dry, lumpy, painful to pass, or require straining. It can be acute (short-term) or chronic (lasting more than 3 months). The colon absorbs water from waste as it passes through; if movement is too slow, stool becomes dry and hard. Diet — particularly inadequate fibre and fluid — is the most common and correctable cause.',
      symptoms: [
        'Fewer than 3 bowel movements per week',
        'Hard, dry, or lumpy stools (Bristol Stool Scale Type 1–2)',
        'Straining during bowel movements',
        'Feeling of incomplete evacuation after going',
        'Abdominal bloating, discomfort, and cramping',
        'Nausea and loss of appetite',
        'Feeling of a blockage in the rectum',
        'Needing to press on the abdomen to complete a bowel movement',
      ],
      causes: [
        'Insufficient dietary fibre (most common cause)',
        'Low fluid intake — dehydration dries out the stool',
        'Sedentary lifestyle — physical activity stimulates bowel motility',
        'Ignoring or suppressing the urge to defecate',
        'Low-fibre diet heavy in processed, refined foods',
        'Hypothyroidism (slows bowel motility)',
        'Diabetes with autonomic neuropathy',
        'Irritable Bowel Syndrome (IBS-C)',
        'Medications: iron supplements, opioid painkillers, antacids (calcium-based), antidepressants',
        'Pelvic floor dysfunction',
        'Chronic stress and anxiety',
      ],
      whoAffected:
        'Constipation affects 22% of Indians — over 30 crore people. It is more common in women (3:1 ratio), the elderly, and people following low-fibre, high-processed food diets. Urban Indians are significantly more affected due to sedentary lifestyles and refined food consumption.',
    },
    harms: {
      overview:
        'What seems like a minor inconvenience can become a serious health burden. Chronic constipation strains the entire digestive and cardiovascular system and significantly reduces quality of life.',
      risks: [
        {
          icon: '🩸',
          title: 'Haemorrhoids (Piles)',
          description:
            'Repeated straining engorges the veins around the rectum and anus, causing painful haemorrhoids. Chronic constipation is the leading cause of haemorrhoids in India.',
        },
        {
          icon: '🩻',
          title: 'Anal Fissures',
          description:
            'Hard stools tear the delicate anal lining, causing sharp pain, bleeding during defecation, and chronic fissures that require surgical intervention if untreated.',
        },
        {
          icon: '⚡',
          title: 'Rectal Prolapse',
          description:
            'Years of chronic straining weaken pelvic floor muscles, causing part of the rectum to protrude through the anus — a painful condition requiring surgery.',
        },
        {
          icon: '☠️',
          title: 'Faecal Impaction',
          description:
            'Severe constipation causes stool to harden into a mass (impaction) that cannot be passed naturally, sometimes requiring manual removal and hospitalisation.',
        },
        {
          icon: '🧠',
          title: 'Gut-Brain Disruption',
          description:
            'The gut produces 90% of serotonin. Chronic constipation disrupts gut-brain signalling, causing anxiety, depression, brain fog, and poor mood regulation.',
        },
        {
          icon: '🦠',
          title: 'Toxin Reabsorption',
          description:
            'Prolonged stool transit time allows bacterial toxins and waste products to be reabsorbed through the colon wall into the bloodstream, burdening the liver and immune system.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Dietary intervention resolves the vast majority of constipation cases without medication. Increasing fibre, hydration, and gut-friendly foods restores bowel regularity by addressing the root cause — not suppressing symptoms.',
      benefits: [
        {
          icon: '🌾',
          title: 'Bulk-Forming Fibre',
          description:
            'Insoluble fibre (whole grains, vegetables, bran) adds bulk to stool and speeds transit through the colon, producing soft, easy-to-pass stools within 24–48 hours of increased intake.',
        },
        {
          icon: '💧',
          title: 'Soluble Fibre Softens Stool',
          description:
            'Soluble fibre (oats, psyllium, flaxseeds) absorbs water to form a gel that softens stool and lubricates the colon, eliminating the need for straining.',
        },
        {
          icon: '🦠',
          title: 'Probiotic Restoration',
          description:
            'Probiotics (Lactobacillus, Bifidobacterium) from curd and fermented foods restore gut microbiome balance, reducing transit time and improving stool consistency.',
        },
        {
          icon: '💦',
          title: 'Hydration is Non-Negotiable',
          description:
            'Adequate water keeps stool hydrated and soft. Even mild dehydration (1–2% body water loss) significantly slows bowel transit and hardens stools.',
        },
        {
          icon: '⚡',
          title: 'Natural Gut Stimulants',
          description:
            'Certain foods — prunes, figs, kiwi, warm water with lemon, and coffee — naturally stimulate bowel motility through specific compounds without the harshness of laxatives.',
        },
        {
          icon: '🔄',
          title: 'Long-Term Regularity',
          description:
            'Building a high-fibre diet as a permanent lifestyle eliminates chronic constipation entirely — most patients see lasting relief within 2–3 weeks of consistent dietary change.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Hydration & Fibre Foundation — The two pillars',
        goals: [
          'Drink 3 litres of water daily — set hourly reminders if needed',
          'Start every morning with 2 glasses of warm water before any food',
          'Add 1 serving of high-fibre food to every meal',
          'Begin walking for 20–30 minutes after dinner daily (movement stimulates peristalsis)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water on waking with soaked natural laxative dried fruit',
          breakfast: 'High-fibre grain porridge with seeds and gut-stimulating fruit',
          midMorning: 'Naturally laxative fruit with warm water',
          lunch: 'Multigrain roti with high-fibre legumes, vegetables and curd',
          eveningSnack: 'Warm water with roasted legumes and gut-stimulating fruit',
          dinner: 'High-fibre grain-based meal with dal and greens',
          bedtime: 'Warm water with gentle fibre supplement if needed',
        },
        foodsToEat: [
          'Prunes and figs (soaked overnight) — most effective natural laxatives',
          'Kiwi fruit (2/day proven in randomised trials to relieve constipation)',
          'Psyllium husk (isabgol) — 1 tsp at bedtime in warm water',
          'Oats and whole grains (insoluble + soluble fibre combination)',
          'All legumes: rajma, chole, moong, masoor',
          'Pear, papaya, banana (sorbitol + fibre)',
        ],
        foodsToAvoid: [
          'Refined flour (maida) — slows gut motility',
          'White rice as a staple (low fibre)',
          'Processed, packaged snacks',
          'Excess dairy without fibre (milk, cheese alone can slow digestion)',
          'Fried foods — high fat slows gastric emptying',
          'Bananas when unripe (ripe banana is fine)',
        ],
        followUp: [
          'Record bowel movement frequency and stool type daily (Bristol Stool Scale)',
          'Note daily water intake',
          'WhatsApp check-in Day 4',
          'Report any blood in stool, severe pain, or sudden change — requires medical review',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Probiotic Power — Healing the gut microbiome',
        goals: [
          'Add at least 2 servings of probiotic food every day',
          'Introduce prebiotic foods to feed beneficial gut bacteria',
          'Increase psyllium husk to 2 tsp/day if stools are still hard',
          'Try squatting position for defecation (use a footstool) — most natural posture',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with soaked natural laxative dried fruit',
          breakfast: 'Probiotic fermented breakfast with curd and fibre seeds',
          midMorning: 'Gut-motility-boosting fruit with probiotic buttermilk',
          lunch: 'Roti with dal, vegetables, salad and probiotic curd',
          eveningSnack: 'Fermented probiotic drink or plain lassi',
          dinner: 'Millet roti with high-fibre dal and stir-fried vegetables',
          bedtime: 'Warm water with gentle fibre supplement',
        },
        foodsToEat: [
          'Homemade curd: 2–3 cups daily (live Lactobacillus cultures)',
          'Homemade kanji (beetroot/carrot fermented drink) — probiotic',
          'Buttermilk (chaas) — light, easy to digest probiotic',
          'Prebiotic foods: garlic, onion, leek, asparagus, banana',
          'Fermented foods: idli, dosa, dhokla (if no acidity)',
          'Flaxseeds (1–2 tbsp/day) — gel-forming fibre lubricates colon',
        ],
        foodsToAvoid: [
          'Antibiotics unless absolutely medically necessary (devastate gut flora)',
          'Artificial sweeteners (disrupt gut microbiome)',
          'Excess red meat (slows digestion significantly)',
          'High-fat fried foods',
          'Packaged probiotic yoghurts (often low live culture count — make homemade curd)',
        ],
        followUp: [
          'Bowel movement diary: are frequency and consistency improving?',
          'Stool now Type 3–4 on Bristol Scale? (ideal: Type 4 — smooth, sausage-shaped)',
          'Review psyllium husk dosage and timing',
          'Discuss any underlying cause if no improvement: thyroid, medications',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Natural Stimulants & Gut Motility Foods',
        goals: [
          'Use warm water with lemon as a morning gut stimulant every day',
          'Add 1 cup of black coffee in the morning if tolerated (stimulates colon)',
          'Reduce red meat to once a week maximum',
          'Establish a fixed daily toilet time (15–20 min after breakfast) — train the reflex',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with soaked gut-stimulating dried fruit',
          breakfast: 'Optional black coffee with high-fibre grain breakfast and fruit',
          midMorning: 'Proven gut-motility-boosting fruit',
          lunch: 'Multigrain roti with legumes, vegetables, salad and curd',
          eveningSnack: 'Roasted legumes with warm mineral water',
          dinner: 'Light grain-based meal with stir-fried greens and curd',
          bedtime: 'Warm water with gentle fibre supplement',
        },
        foodsToEat: [
          'Warm water with lemon on empty stomach (most reliable morning stimulant)',
          'Black coffee 1 cup morning (stimulates gastrocolic reflex)',
          'Triphala powder (Ayurvedic: 1 tsp in warm water at bedtime — gentle, effective)',
          'Castor oil (1 tsp at bedtime in warm milk for stubborn constipation — short term)',
          'All fruits with skin on (skin contains insoluble fibre)',
          'Fennel seeds after meals (reduces bloating and aids motility)',
        ],
        foodsToAvoid: [
          'Delaying or suppressing the urge to defecate',
          'Excess dairy products (milk, cheese, ice cream) without adequate fibre',
          'Iron supplements close to high-fibre meals (can worsen constipation — take with water)',
          'Excess calcium supplements (constipating — balance with magnesium)',
        ],
        followUp: [
          'Compare bowel frequency Week 1 vs Week 3',
          'Any straining, pain, or blood? Refer to gastroenterologist',
          'Is fixed toilet timing after breakfast working?',
          'Discuss triphala if dietary changes alone are insufficient',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Permanent Regularity — Building lifelong gut health',
        goals: [
          'Ensure minimum 25–30g dietary fibre every day as permanent practice',
          'Maintain 2.5–3 litres daily water intake always',
          'Make daily 20-min post-meal walk non-negotiable',
          'Gradually reduce psyllium husk if natural fibre intake is adequate',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with soaked gut-stimulating dried fruit',
          breakfast: 'High-fibre multigrain porridge with seeds and seasonal fruit',
          midMorning: 'Gut-motility fruit with probiotic buttermilk',
          lunch: 'Multigrain roti with dal, vegetable, large salad and curd',
          eveningSnack: 'High-fibre roasted snack with warm water',
          dinner: 'Wholesome one-pot meal with stir-fried greens and curd',
          bedtime: 'Warm water with fibre supplement if still needed',
        },
        foodsToEat: [
          'All high-fibre foods from Weeks 1–3 as daily staples',
          'Continue probiotic foods daily',
          'Fresh fruit with skin at every snack',
          'Legumes at every main meal',
        ],
        foodsToAvoid: [
          'Refined flour products as daily staples — permanently',
          'Dehydration — carry a water bottle always',
          'Sedentary days with no movement',
        ],
        followUp: [
          'End-of-month full consultation',
          'Target: daily bowel movements, Type 3–4 on Bristol Scale, no straining',
          'Any haemorrhoids or fissures — refer to proctologist',
          'If chronic constipation persists despite full dietary compliance: colonoscopy referral',
          'Plan Month 2: maintain fibre and hydration, taper psyllium supplement',
        ],
      },
    ],
  },

  // ─── 14. BLOATING ────────────────────────────────────────────────────────
  {
    slug: 'bloating',
    name: 'Bloating',
    icon: '🎈',
    category: 'Gastrointestinal',
    tagline: 'End the discomfort of bloating with targeted nutrition',
    heroDescription:
      'Bloating is one of the most widespread — and most misunderstood — digestive complaints. It is not simply "gas"; it signals an imbalance in gut bacteria, food intolerances, or digestive enzyme deficiency. A targeted elimination and gut-restoration diet can deliver dramatic relief within 1–2 weeks.',
    condition: {
      overview:
        'Bloating is the sensation of fullness, tightness, or swelling in the abdomen due to excess gas production or impaired gas movement through the digestive tract. It can be caused by fermentation of undigested food by gut bacteria, swallowed air, food intolerances (lactose, fructose, gluten), small intestinal bacterial overgrowth (SIBO), or slowed gut motility. It is distinct from ascites (fluid in the abdomen) which requires medical assessment.',
      symptoms: [
        'Visible abdominal distension and swelling after eating',
        'Tight, full, or pressured feeling in the abdomen',
        'Excessive belching and burping',
        'Flatulence (excess passing of gas)',
        'Rumbling or gurgling sounds from the abdomen',
        'Abdominal cramping and pain',
        'Nausea after eating',
        'Feeling prematurely full after small amounts of food',
        'Worsening symptoms towards the end of the day',
      ],
      causes: [
        'High intake of gas-producing foods (beans, cruciferous vegetables, carbonated drinks)',
        'Lactose intolerance — inability to digest milk sugar',
        'Fructose malabsorption — difficulty absorbing fructose in some fruits and foods',
        'Swallowing excess air (eating fast, drinking through straws, chewing gum)',
        'Small Intestinal Bacterial Overgrowth (SIBO)',
        'Irritable Bowel Syndrome (IBS)',
        'Coeliac disease or gluten sensitivity',
        'Constipation causing gas buildup',
        'Hormonal changes (oestrogen and progesterone fluctuations around menstruation)',
        'Stress and anxiety (gut-brain axis disruption slows motility)',
        'Low digestive enzyme production',
      ],
      whoAffected:
        'Bloating affects approximately 16–30% of the Indian population, with much higher rates in women. It is the most common gastrointestinal complaint after acidity. IBS — a major cause of bloating — affects around 4 crore Indians.',
    },
    harms: {
      overview:
        'While bloating is rarely dangerous on its own, persistent bloating signals underlying digestive dysfunction that worsens over time if ignored — and can be a symptom of serious conditions that require investigation.',
      risks: [
        {
          icon: '🦠',
          title: 'SIBO Progression',
          description:
            'Small Intestinal Bacterial Overgrowth causes chronic bloating, nutrient malabsorption, and progressive gut damage. Untreated SIBO leads to deficiencies of B12, iron, and fat-soluble vitamins.',
        },
        {
          icon: '😔',
          title: 'Severe Impact on Quality of Life',
          description:
            'Chronic bloating causes significant psychological distress, social anxiety around food and eating, and avoidance of social situations — severely impacting daily functioning.',
        },
        {
          icon: '⚠️',
          title: 'Missed Serious Diagnoses',
          description:
            'Persistent bloating can be an early symptom of ovarian cancer, colon cancer, or coeliac disease. Dismissing it as "normal gas" delays critical diagnosis.',
        },
        {
          icon: '🌾',
          title: 'Undiagnosed Gluten Sensitivity',
          description:
            'Bloating as a manifestation of undiagnosed coeliac disease leads to continued intestinal damage, nutrient deficiencies, anaemia, and long-term autoimmune complications.',
        },
        {
          icon: '🧠',
          title: 'Gut-Brain Axis Disruption',
          description:
            'Chronic gut dysfunction from persistent bloating disrupts the gut-brain connection, worsening anxiety, depression, and cognitive function through the microbiome-mood pathway.',
        },
        {
          icon: '⚡',
          title: 'Nutrient Malabsorption',
          description:
            'Gas production from undigested food means those nutrients are being fermented rather than absorbed — causing energy deficit, micronutrient deficiencies, and fatigue despite adequate eating.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'Dietary management is the most effective approach for bloating — often delivering noticeable results within 3–5 days of implementing changes. Identifying triggers, restoring gut bacteria, and improving digestion addresses root causes comprehensively.',
      benefits: [
        {
          icon: '🎯',
          title: 'Trigger Food Identification',
          description:
            'A structured elimination-reintroduction protocol precisely identifies your personal bloating triggers — whether lactose, fructose, gluten, or specific fermentable carbohydrates (FODMAPs).',
        },
        {
          icon: '🦠',
          title: 'Microbiome Restoration',
          description:
            'Probiotic foods and prebiotic fibres rebuild the beneficial bacterial population that digests food properly, producing less gas and more short-chain fatty acids that heal the gut lining.',
        },
        {
          icon: '⚗️',
          title: 'Enzyme Support',
          description:
            'Including natural digestive enzyme sources (papaya, pineapple, ginger, raw honey) and eating habits that maximise enzyme activity reduces undigested food reaching gas-producing bacteria.',
        },
        {
          icon: '🫧',
          title: 'Reduced Fermentation',
          description:
            'Properly preparing gas-producing foods (soaking legumes, cooking cruciferous vegetables, limiting high-FODMAP foods) dramatically reduces the fermentation that causes bloating.',
        },
        {
          icon: '💆',
          title: 'Gut-Brain Calming',
          description:
            'Mindful eating, stress reduction, and gut-supportive foods reduce visceral hypersensitivity — the heightened pain response in the gut that makes even normal gas feel painful.',
        },
        {
          icon: '✨',
          title: 'Rapid Symptom Relief',
          description:
            'Unlike most chronic conditions, dietary changes for bloating show results within days. Many patients report 50–70% reduction in bloating within the first 5–7 days of implementing changes.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Trigger Identification — The elimination phase',
        goals: [
          'Keep a detailed food-symptom diary: every meal, every bloating episode, timing',
          'Eliminate the most common triggers for 7 days: dairy, wheat, raw onion, beans, carbonated drinks',
          'Eat slowly — take 20 minutes per meal, chew every bite 20 times',
          'Stop drinking through straws and chewing gum (both cause excess air swallowing)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm carminative ginger water',
          breakfast: 'Easy-to-digest grain dish with mild chutney',
          midMorning: 'Digestive enzyme-rich fruit with warm water',
          lunch: 'Easy-to-digest grain with well-cooked mild dal and cooling vegetable',
          eveningSnack: 'Carminative herbal tea with plain light snack',
          dinner: 'Plain roti with mild dal soup and easy-to-digest vegetable',
          bedtime: 'Warm carminative herbal water',
        },
        foodsToEat: [
          'Moong dal and masoor dal (easiest legumes to digest)',
          'Well-cooked, peeled vegetables (raw veg is harder to digest)',
          'Ginger in cooking (reduces gas and nausea)',
          'Fennel seeds after every meal (natural carminative)',
          'Ajwain (carom seeds) in cooking or as tea',
          'Plain rice (easy to digest)',
        ],
        foodsToAvoid: [
          'All dairy (milk, curd, paneer) — test for lactose intolerance this week',
          'Wheat and wheat products (test for gluten sensitivity)',
          'Beans and lentils with skins (rajma, chole, whole moong) — switch to split varieties',
          'Raw cruciferous vegetables (cabbage, broccoli, cauliflower)',
          'All carbonated drinks including sparkling water',
          'Onion and garlic (high FODMAP)',
          'Chewing gum and straws',
        ],
        followUp: [
          'Bloating diary: rate severity 1–10 after each meal and each day',
          'Note which eliminations give the most relief',
          'WhatsApp check-in Day 4',
          'If severe bloating with pain, weight loss, or blood in stool — urgent medical review',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Gut Microbiome Restoration — Probiotics and prebiotics',
        goals: [
          'Slowly reintroduce curd (if lactose was not clearly a trigger)',
          'Add probiotic foods at every meal to restore beneficial bacteria',
          'Begin low-FODMAP eating approach for the week',
          'Introduce digestive enzyme-rich foods before main meals',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm carminative spiced water with soaked nuts',
          breakfast: 'Fermented grain breakfast with mild chutney and small probiotic curd',
          midMorning: 'Anti-bloating gut-motility fruit',
          lunch: 'Plain rice with mild dal and well-cooked low-FODMAP vegetable',
          eveningSnack: 'Probiotic fermented drink with carminative herbal tea',
          dinner: 'Plain roti with mild dal soup and gently cooked vegetables',
          bedtime: 'Warm carminative herbal water',
        },
        foodsToEat: [
          'Homemade curd (reintroduce slowly — 1 small cup, increase if no bloating)',
          'Kiwi fruit (proven in studies to reduce IBS and bloating)',
          'Homemade kanji / fermented rice water',
          'Low-FODMAP vegetables: zucchini, carrots, green beans, cucumber, spinach',
          'Low-FODMAP fruits: kiwi, grapes, blueberries, strawberries',
          'Ginger, cumin, fennel, ajwain in all cooking',
        ],
        foodsToAvoid: [
          'High-FODMAP foods: apples, pears, mango, watermelon (fructose)',
          'Wheat (continue avoidance to test)',
          'Garlic and onion (reintroduce only in Week 4 if symptoms resolved)',
          'Beans with skins (rajma, chole) — continue avoiding',
          'Excess fibre suddenly (gradual increase only)',
          'Artificial sweeteners: sorbitol, xylitol, mannitol (ferment rapidly)',
        ],
        followUp: [
          'Compare bloating scores: Week 1 vs Week 2',
          'When curd was reintroduced — did bloating return? (Lactose test)',
          'Note which specific foods eliminated bloating most',
          'Discuss SIBO testing if bloating persists despite eliminations',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Strategic Reintroduction — Finding your personal tolerance',
        goals: [
          'Reintroduce one eliminated food every 2–3 days and monitor symptoms',
          'Reintroduce wheat on Day 1 — note if bloating returns within 24 hours',
          'Reintroduce cooked onion and garlic (lower FODMAP than raw) by Day 5',
          'Soak all legumes for 8–12 hours before cooking, discard water (reduces gas by 40%)',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm ginger water with soaked nuts',
          breakfast: 'Reintroduction test meal with roti and curd — monitor symptoms',
          midMorning: 'Digestive fruit with carminative herbal tea',
          lunch: 'Plain rice with well-soaked cooked dal and cooked vegetables',
          eveningSnack: 'Light plain snack with carminative herbal tea',
          dinner: 'Light wholesome one-pot meal with dal and vegetables',
          bedtime: 'Warm carminative herbal water',
        },
        foodsToEat: [
          'Continue all Week 2 safe foods as base',
          'Reintroduce one food at a time: wheat, then dairy, then cooked onion',
          'Properly soaked and pressure-cooked legumes (soaking + cooking reduces gas compounds)',
          'Digestive spices: cumin, coriander, turmeric, asafoetida (hing) in cooking',
          'Asafoetida (hing) — most powerful carminative spice, add a pinch to every dal',
          'Apple cider vinegar (1 tsp before meals) — improves stomach acid and digestion',
        ],
        foodsToAvoid: [
          'If wheat caused bloating — continue wheat elimination and discuss with dietitian',
          'If dairy caused bloating — use lactase enzyme drops or switch to A2 milk',
          'Raw salads in large amounts (raw = more fermentation)',
          'Eating very large portions at one sitting',
        ],
        followUp: [
          'Reintroduction results: which foods are personal triggers?',
          'Is wheat a trigger? Consider coeliac screening if yes',
          'Is dairy a trigger? Consider lactose intolerance test',
          'Full symptom review vs Week 1 baseline',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Permanent Gut Harmony — A personalised anti-bloating diet',
        goals: [
          'Create your personalised "safe foods" and "trigger foods" list',
          'Establish 5 permanent eating habits: slow eating, no straws, ajwain water, meal timing',
          'Continue probiotics and digestive spices as permanent daily practice',
          'Learn restaurant safe eating: how to order to avoid bloating triggers',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm carminative ginger water with soaked nuts',
          breakfast: 'Personalised safe fermented or grain breakfast with curd if tolerated',
          midMorning: 'Anti-bloating fruit with carminative herbal tea',
          lunch: 'Safe grain or roti with well-soaked dal, cooked vegetables and curd',
          eveningSnack: 'Light plain snack with carminative herbal tea',
          dinner: 'Light easy-to-digest meal or dal soup with stir-fried vegetables',
          bedtime: 'Warm carminative or calming herbal water',
        },
        foodsToEat: [
          'All identified personal safe foods from Weeks 1–3',
          'Continue probiotic foods daily',
          'Ginger, fennel, ajwain, hing in all cooking permanently',
          'Properly soaked and cooked legumes',
        ],
        foodsToAvoid: [
          'All confirmed personal triggers — permanently',
          'Carbonated drinks of any kind',
          'Eating fast or while stressed',
          'Chewing gum',
        ],
        followUp: [
          'End-of-month full consultation',
          'Compare bloating severity and frequency: Day 1 vs Day 30',
          'Coeliac antibody test (tTG-IgA) if wheat was a confirmed trigger',
          'SIBO breath test if bloating persists despite full elimination',
          'Plan Month 2: introduce more diversity back to diet safely',
        ],
      },
    ],
  },

  // ─── 15. CELIAC DISEASE ──────────────────────────────────────────────────
  {
    slug: 'celiac-disease',
    name: 'Celiac Disease',
    icon: '🌾',
    category: 'Specialized',
    tagline: 'Heal your gut completely with a strict gluten-free diet',
    heroDescription:
      'Celiac disease is a serious autoimmune condition — but it is also uniquely manageable through diet alone. A strictly gluten-free diet is both the only treatment and the most powerful healing tool: it allows complete intestinal recovery, reversal of nutrient deficiencies, and restoration of full health.',
    condition: {
      overview:
        'Celiac disease is an autoimmune disorder in which ingestion of gluten — a protein found in wheat, barley, rye, and cross-contaminated oats — triggers an immune attack on the small intestinal lining. This destroys the villi (tiny finger-like projections that absorb nutrients), leading to malabsorption of virtually all nutrients. Even microscopic gluten exposure (as little as 20 parts per million) can trigger intestinal damage — making dietary precision the foundation of management.',
      symptoms: [
        'Chronic diarrhoea, often pale and fatty (steatorrhoea)',
        'Abdominal pain, cramping, and severe bloating',
        'Significant unintentional weight loss',
        'Fatigue and weakness from nutrient malabsorption',
        'Anaemia (iron and B12 deficiency)',
        'Bone pain and osteoporosis from calcium/vitamin D malabsorption',
        'Dermatitis herpetiformis — intensely itchy skin rash (skin manifestation of celiac)',
        'Mouth ulcers (aphthous stomatitis)',
        'Growth failure in children',
        'Many patients have "silent" celiac with no obvious digestive symptoms',
        'Neurological symptoms: ataxia, peripheral neuropathy, "gluten brain fog"',
      ],
      causes: [
        'Genetic predisposition (HLA-DQ2 or HLA-DQ8 gene variants — present in 99% of celiac patients)',
        'Gluten triggers in genetically susceptible individuals',
        'Environmental triggers that "switch on" the gene: gut infections, antibiotic overuse, early gluten introduction in infancy',
        'Leaky gut allowing gluten peptides to cross the intestinal barrier',
        'Gut microbiome dysbiosis that amplifies immune reaction to gluten',
        'Autoimmune cascade: tissue transglutaminase enzyme activates immune attack on villi',
      ],
      whoAffected:
        'Celiac disease affects approximately 1% of the global population, but Indian prevalence is estimated at 0.5–1%, with Punjab and Haryana having some of the highest rates in Asia due to wheat-heavy traditional diets. It is severely underdiagnosed — for every diagnosed case, 5–6 undiagnosed cases exist. First-degree relatives of celiac patients have a 10% chance of having the disease.',
    },
    harms: {
      overview:
        'Celiac disease is not a dietary preference — it is a serious autoimmune condition with severe, life-altering complications when gluten consumption continues. Even "cheat meals" cause intestinal damage.',
      risks: [
        {
          icon: '🫁',
          title: 'Severe Malnutrition',
          description:
            'Villous atrophy means virtually no nutrients are absorbed properly — iron, calcium, vitamin D, B12, folate, zinc, and fat-soluble vitamins A, E, K are all severely depleted, affecting every body system.',
        },
        {
          icon: '🦴',
          title: 'Severe Osteoporosis',
          description:
            'Calcium and vitamin D malabsorption causes progressive bone density loss from childhood. Untreated celiac patients have fracture rates 3× higher than the general population.',
        },
        {
          icon: '🌸',
          title: 'Infertility & Pregnancy Loss',
          description:
            'Untreated celiac disease causes unexplained infertility, recurrent miscarriages, preterm birth, and low birth weight babies due to folate and iron deficiency.',
        },
        {
          icon: '🧠',
          title: 'Neurological Damage',
          description:
            'Gluten ataxia and peripheral neuropathy can cause permanent nerve and brain damage. Cognitive impairment, depression, and epilepsy are significantly more common in unmanaged celiac disease.',
        },
        {
          icon: '☠️',
          title: 'Intestinal Lymphoma',
          description:
            'Long-term untreated celiac disease increases the risk of intestinal T-cell lymphoma — a rare but aggressive cancer — by 40–100×. A strict gluten-free diet returns cancer risk to near-normal.',
        },
        {
          icon: '🩺',
          title: 'Other Autoimmune Diseases',
          description:
            'Untreated celiac triggers other autoimmune conditions: type 1 diabetes, autoimmune thyroid disease (Hashimoto\'s, Graves\'), rheumatoid arthritis, and autoimmune liver disease.',
        },
      ],
    },
    nutritionBenefits: {
      overview:
        'A strict, lifelong gluten-free diet is the only treatment for celiac disease — and it is remarkably effective. The intestinal villi begin to heal within weeks of gluten removal, with most patients achieving full intestinal recovery within 1–2 years.',
      benefits: [
        {
          icon: '🔄',
          title: 'Intestinal Villi Regeneration',
          description:
            'Within 3–6 months of strict gluten elimination, villous atrophy reverses in most patients. Normal nutrient absorption is restored progressively, eliminating malnutrition.',
        },
        {
          icon: '💊',
          title: 'Nutrient Deficiency Correction',
          description:
            'As the gut heals, absorption of iron, calcium, B12, folate, and vitamin D normalises. A targeted nutritional plan accelerates deficiency correction through food-first and strategic supplementation.',
        },
        {
          icon: '🦴',
          title: 'Bone Density Recovery',
          description:
            'With adequate gluten-free calcium and vitamin D, bone density begins recovering within 1–2 years, reducing fracture risk substantially.',
        },
        {
          icon: '⚡',
          title: 'Dramatic Symptom Relief',
          description:
            'Diarrhoea, bloating, and abdominal pain typically resolve within 2–6 weeks of strict gluten removal. Energy, mood, and cognitive function improve significantly.',
        },
        {
          icon: '🌸',
          title: 'Restored Fertility',
          description:
            'Women with celiac-related infertility or recurrent miscarriage often achieve successful pregnancy within 1 year of strict gluten-free adherence as nutritional status normalises.',
        },
        {
          icon: '🛡️',
          title: 'Cancer Risk Normalisation',
          description:
            'Strictly following a gluten-free diet for more than 5 years reduces the elevated lymphoma risk in celiac patients to near that of the general population.',
        },
      ],
    },
    monthPlan: [
      {
        weekNumber: 1,
        theme: 'Complete Gluten Elimination — Zero tolerance, zero exceptions',
        goals: [
          'Remove ALL gluten sources from your kitchen: wheat flour (atta), maida, suji, bread, pasta, biscuits, barley, rye',
          'Audit all packaged foods in the house for hidden gluten (check labels for wheat starch, malt, modified starch)',
          'Buy certified gluten-free versions of staples: rice flour, jowar flour, bajra flour, besan, ragi flour',
          'Educate all family members and domestic help about cross-contamination',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with soaked nuts',
          breakfast: 'Naturally gluten-free grain porridge with fruit and protein',
          midMorning: 'Low-GI fruit with unsalted nuts',
          lunch: 'Plain rice with dal and stir-fried vegetables and curd',
          eveningSnack: 'Certified gluten-free roasted legumes with green tea',
          dinner: 'Gluten-free grain roti with dal and vegetable sabzi',
          bedtime: 'Warm milk',
        },
        foodsToEat: [
          'Rice, rice flour, poha, murmura (all gluten-free)',
          'Jowar (sorghum), bajra (pearl millet), ragi (finger millet) — naturally GF grains',
          'All lentils and legumes: dal, rajma, chole (in natural form)',
          'All fresh fruits and vegetables',
          'Eggs, fresh meat, fish (naturally GF)',
          'All nuts and seeds',
          'Besan (chickpea flour) — versatile GF flour',
        ],
        foodsToAvoid: [
          'Wheat in all forms: atta, maida, suji, dalia, wheat bran',
          'Barley (jau) and rye',
          'Regular oats (cross-contaminated — use only certified GF oats)',
          'All standard breads, biscuits, cookies, cakes, pasta, noodles',
          'Most packaged sauces and gravies (hidden wheat thickener)',
          'Most restaurant food — cross-contamination risk',
          'Communion wafers, beer, most malt-based drinks',
        ],
        followUp: [
          'Share recent blood tests: tTG-IgA antibodies, total IgA, villous atrophy grade if biopsy done',
          'Document current symptoms: diarrhoea frequency, bloating, energy level',
          'WhatsApp check-in Day 4',
          'List all packaged foods currently used — review for hidden gluten together',
        ],
      },
      {
        weekNumber: 2,
        theme: 'Nutrient Repletion — Correcting deficiencies caused by malabsorption',
        goals: [
          'Maximise iron and B12 intake through food (anaemia is the most common celiac complication)',
          'Prioritise calcium and vitamin D foods for bone recovery',
          'Begin prescribed supplements under doctor guidance: iron, B12, folate, vitamin D, zinc',
          'Include fermented foods to restore gut microbiome for better nutrient absorption',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm water with soaked gluten-free nuts and iron-rich dried fruit',
          breakfast: 'Calcium-rich GF grain breakfast with protein and probiotic curd',
          midMorning: 'Vitamin-C rich juice or fruit to boost iron absorption with nuts',
          lunch: 'Rice with iron and folate-rich leafy dal, vegetable sabzi and calcium-rich curd',
          eveningSnack: 'Zinc-rich seeds with gluten-free crackers',
          dinner: 'GF grain roti with iron-rich protein curry, leafy greens and curd',
          bedtime: 'Warm full-fat milk with calming spice',
        },
        foodsToEat: [
          'Ragi (highest calcium among all grains — 344 mg/100g)',
          'Spinach, amaranth leaves, moringa (iron + folate) with vitamin C for absorption',
          'Sesame seeds, sunflower seeds, chia seeds (calcium)',
          'Eggs, fish, chicken (B12) or B12-fortified rice milk for vegetarians',
          'Homemade curd (probiotic for gut healing)',
          'Fortified GF products: GF oat milk, GF cereals enriched with iron and B12',
        ],
        foodsToAvoid: [
          'Any accidental gluten exposure — this is the most important rule',
          'Calcium and iron supplements at the same time (compete for absorption)',
          'Excess tea/coffee with iron-rich meals (inhibits iron absorption)',
          'Raw spinach in excess (oxalates reduce calcium absorption — prefer cooked)',
        ],
        followUp: [
          'Check if diarrhoea and bloating are reducing (should begin improving by Week 2)',
          'Blood test due: full blood count (anaemia?), B12, vitamin D, folate, zinc',
          'Review supplement doses with doctor based on deficiency levels',
          'Skin symptoms (DH rash) — should begin improving with strict gluten elimination',
        ],
      },
      {
        weekNumber: 3,
        theme: 'Gut Healing & Microbiome Restoration',
        goals: [
          'Actively support villi regeneration with gut-healing foods',
          'Add L-glutamine-rich foods (supports intestinal cell repair)',
          'Practice "safe cooking" — dedicated GF cooking utensils, separate cutting boards',
          'Increase prebiotic foods to diversify and restore gut bacteria',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm anti-inflammatory turmeric water',
          breakfast: 'Naturally GF fermented grain breakfast with curd',
          midMorning: 'Digestive enzyme-rich fruit with seeds for gut recovery',
          lunch: 'Rice with GF dal, well-cooked vegetables, curd and salad',
          eveningSnack: 'Certified GF roasted snack with ginger herbal tea',
          dinner: 'GF millet roti with leafy green protein dish and dal',
          bedtime: 'Warm GF turmeric milk with anti-inflammatory spice',
        },
        foodsToEat: [
          'Bone broth or dal water (L-glutamine rich — heals intestinal wall)',
          'Turmeric in all cooking (curcumin accelerates intestinal healing)',
          'Papaya and pineapple (digestive enzymes for nutrient breakdown)',
          'Homemade curd and fermented rice (probiotic)',
          'Garlic, onion, leeks (prebiotic — feeds beneficial Lactobacillus)',
          'Colourful vegetables daily (antioxidants reduce gut inflammation)',
        ],
        foodsToAvoid: [
          'NSAIDs (ibuprofen, aspirin) — increase gut permeability, worsen celiac',
          'Alcohol — damages already compromised intestinal lining',
          'Processed GF products (often highly processed and low in nutrients)',
          'Cross-contamination from shared cooking utensils, pans, or toasters',
          'Medications with wheat starch as filler — ask pharmacist for GF versions',
        ],
        followUp: [
          'Diarrhoea and bloating comparison: Week 1 vs Week 3',
          'Energy and mood improvement?',
          'Skin rash (DH) — is it improving?',
          'Review cross-contamination sources at home and work',
        ],
      },
      {
        weekNumber: 4,
        theme: 'Lifelong Gluten-Free Living — Confidence and completeness',
        goals: [
          'Master GF Indian cooking: develop 10 go-to GF recipes for daily use',
          'Navigate social situations: eating at relatives\' homes, restaurants, travel, celebrations',
          'Understand labelling laws and how to identify hidden gluten on product labels',
          'Join a celiac support community for long-term adherence and emotional support',
        ],
        sampleDayMeals: {
          earlyMorning: 'Warm lemon water with soaked nuts',
          breakfast: 'Naturally GF grain porridge or cheela with protein and curd',
          midMorning: 'Fresh seasonal fruit with seeds',
          lunch: 'Rice with dal, GF vegetable sabzi, curd and salad',
          eveningSnack: 'Certified GF snack with green tea',
          dinner: 'GF millet roti with dal and curry with curd',
          bedtime: 'Warm GF milk or calming herbal tea',
        },
        foodsToEat: [
          'All confirmed safe GF staples from Weeks 1–3',
          'Continue ragi, jowar, bajra, rice, besan as flour alternatives',
          'All fresh whole foods — nature\'s foods are inherently gluten-free',
          'Continue iron, calcium, B12, vitamin D-rich foods indefinitely',
        ],
        foodsToAvoid: [
          'Gluten — for life, with zero exceptions, regardless of symptom absence',
          'Cross-contaminated packaged foods without certified GF labelling',
          'Restaurant meals without verifying GF preparation separately',
        ],
        followUp: [
          'End-of-month full consultation',
          'tTG-IgA antibody retest: levels should be falling (confirm gluten elimination is complete)',
          'Compare symptoms: diarrhoea, energy, weight, skin vs Day 1',
          'Bone density scan (DEXA) if not done recently — baseline for monitoring',
          'Plan Month 2: nutrient repletion monitoring, villi healing assessment, supplement tapering',
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return services;
}

export function getAllSlugs(): string[] {
  return services.map((s) => s.slug);
}
