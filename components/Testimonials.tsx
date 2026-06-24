'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mohali',
    rating: 5.0,
    image: '👩',
    text: "Lost 15kg in 4 months with Dt. Yogita's guidance. The PMOS diet plan was a game changer!",
    result: '-15kg in 4 months',
  },
  {
    name: 'Ankit Mehra',
    location: 'Gurgaon',
    rating: 4.5,
    image: '👨',
    text: 'Best decision was to consult her for my diabetes. Blood sugar is now under control without medicines!',
    result: 'Sugar Normalized',
  },
  {
    name: 'Riya Gupta',
    location: 'Chandigarh',
    rating: 5.0,
    image: '👩',
    text: 'Struggled with weight gain for years. Finally found a sustainable approach that actually works!',
    result: '-20kg Transformation',
  },
  {
    name: 'Sanjay Patel',
    location: 'Faridabad',
    rating: 4.5,
    image: '👨',
    text: 'Thyroid levels are now normal! The customized diet plan was easy to follow and effective.',
    result: 'Thyroid Normalized',
  },
  {
    name: 'Meera Kapoor',
    location: 'Delhi',
    rating: 5.0,
    image: '👩',
    text: 'Gut health improved dramatically. No more bloating or acidity issues after following the plan!',
    result: 'Digestion Fixed',
  },
];

const STAR_PATH = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z";

function StarRating({ rating, size, uid }: { rating: number; size: 'sm' | 'lg'; uid: string }) {
  const dim = size === 'lg' ? 'w-6 h-6' : 'w-3.5 h-3.5';
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => {
        const fill = Math.min(1, Math.max(0, rating - (star - 1)));
        const clipW = fill * 24;
        const id = `clip-${uid}-${star}`;
        return (
          <svg key={star} className={dim} viewBox="0 0 24 24">
            <defs>
              <clipPath id={id}>
                <rect x="0" y="0" width={clipW} height="24" />
              </clipPath>
            </defs>
            <path d={STAR_PATH} fill="rgba(45,90,61,0.15)" />
            <path d={STAR_PATH} fill="var(--primary)" clipPath={`url(#${id})`} />
          </svg>
        );
      })}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
            Success Stories from{' '}
            <span className="text-gradient">Happy Clients</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Real results from real people who transformed their lives with NutriHeals
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 sm:p-12 rounded-3xl"
              >
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  <StarRating rating={testimonials[current].rating} size="lg" uid={`carousel-${current}`} />
                </div>
                <p className="text-center text-xs text-text-muted mb-4 font-medium">{testimonials[current].rating.toFixed(1)} / 5</p>

                {/* Quote */}
                <blockquote className="text-center">
                  <p className="text-lg sm:text-xl text-text-secondary italic mb-8">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-(--primary)/20 flex items-center justify-center text-3xl">
                    {testimonials[current].image}
                  </div>
                  <div className="text-center">
                    <p className="font-playfair font-semibold text-text-primary">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-text-muted">
                      {testimonials[current].location}
                    </p>
                  </div>
                </div>

                {/* Result Tag */}
                <div className="mt-6 text-center">
                  <span className="inline-block px-4 py-2 bg-(--primary)/10 text-primary font-semibold rounded-full">
                    {testimonials[current].result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-primary w-8'
                    : 'bg-(--primary)/30 hover:bg-(--primary)/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* More Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-(--primary)/20 flex items-center justify-center text-xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-medium text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {testimonial.location}
                  </p>
                </div>
                <div className="ml-auto flex flex-col items-end gap-0.5">
                  <StarRating rating={testimonial.rating} size="sm" uid={`card-${index}`} />
                  <span className="text-[10px] text-text-muted">{testimonial.rating.toFixed(1)}</span>
                </div>
              </div>
              <p className="text-sm text-text-secondary line-clamp-2">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <p className="mt-3 text-sm font-medium text-primary">
                {testimonial.result}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}