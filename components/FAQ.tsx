'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'How does online consultation work?',
    answer:
      'Our online consultation is simple and convenient. After you book an appointment, we will send you a link for a video call or WhatsApp consultation. During the session, we will discuss your health concerns, current diet, lifestyle, and goals. Based on this, we create a personalized diet plan tailored to your needs.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Results vary depending on your health condition and goals. Generally, clients start noticing positive changes within 2-4 weeks. For sustainable weight loss, we recommend following the plan for at least 3 months for lasting results. PCOS management typically shows improvements in 3-6 months.',
  },
  {
    question: 'Is the PCOS diet plan effective?',
    answer:
      'Yes! Our PCOS/PCOD management program has helped many women regulate their cycles, manage weight, and reduce symptoms. We focus on low glycemic index foods, anti-inflammatory foods, and balanced macronutrients to support hormonal balance.',
  },
  {
    question: 'Will I need to follow strict meal timings?',
    answer:
      'We understand that lifestyle varies. Our diet plans are flexible and designed to fit your daily schedule. We provide multiple options and meal timings that work with your routine rather than forcing unrealistic schedules.',
  },
  {
    question: 'Do you provide diet plans for medical conditions?',
    answer:
      'Yes, we specialize in medical nutrition therapy for conditions like diabetes, thyroid, hypertension, heart disease, fatty liver, kidney disease, gut issues, and more. We work in coordination with your doctor when needed.',
  },
  {
    question: 'Are follow-up consultations included?',
    answer:
      'Yes, our programs include regular follow-up consultations to track progress, make necessary adjustments, and provide ongoing support. We are committed to your success and are available for queries between consultations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--primary)] font-medium uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[var(--text-primary)] mt-2 mb-4">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-playfair font-semibold text-[var(--text-primary)]">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] font-bold"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[var(--text-secondary)]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Still have questions?
          </p>
          <a
            href="https://wa.me/918168233617"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.137.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}