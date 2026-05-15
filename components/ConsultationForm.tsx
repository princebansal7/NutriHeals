'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { WA_URL } from '@/lib/contact';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.137.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const healthGoals = [
  'Weight Loss',
  'Weight Gain',
  'PCOS/PCOD Management',
  'Diabetes Management',
  'Thyroid Disorder',
  'High Blood Pressure',
  'Heart Health',
  'Gut Health',
  'Cholesterol Management',
  'Other',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    age: '',
    gender: '',
    healthGoal: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 1 || parseInt(formData.age) > 120) {
      newErrors.age = 'Enter a valid age';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    if (!formData.healthGoal) {
      newErrors.healthGoal = 'Please select a health goal';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: `New Consultation from ${formData.name}`,
          from_name: formData.name,
          mobile: formData.mobile,
          email: formData.email || 'Not provided',
          age: formData.age,
          gender: formData.gender,
          health_goal: formData.healthGoal,
          message: formData.message || 'No additional message',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', mobile: '', email: '', age: '', gender: '', healthGoal: '', message: '' });
      }, 4000);
    } catch {
      setSubmitError('Something went wrong. Please try WhatsApp or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[var(--primary)] font-medium uppercase tracking-wider text-sm">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-[var(--text-primary)] mt-2 mb-4">
              Start Your Health{' '}
              <span className="text-gradient">Transformation Today</span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8">
              Fill out the form and our team will get back to you within 24 hours to schedule your consultation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-xl">
                  📱
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">WhatsApp</p>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">Connect on WhatsApp</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Email</p>
                  <a href="mailto:contact@nutriheals.in" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">contact@nutriheals.in</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-xl">
                  📍
                </div>
                <div>
                  <p className="font-medium text-[var(--text-primary)]">Location</p>
                  <p className="text-sm text-[var(--text-muted)]">Chandigarh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center text-4xl">
                  ✓
                </div>
                <h3 className="text-2xl font-playfair font-bold text-[var(--primary)] mb-2">
                  Thank You!
                </h3>
                <p className="text-[var(--text-secondary)]">
                  We have received your request. Our team will contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-playfair font-semibold text-[var(--text-primary)] mb-4">
                  Book Your Consultation
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-[var(--primary)]/20'
                      } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Mobile *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.mobile ? 'border-red-500' : 'border-[var(--primary)]/20'
                      } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                      placeholder="10-digit mobile number"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                    Email (Optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-[var(--primary)]/20'
                    } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Age */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Age *
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.age ? 'border-red-500' : 'border-[var(--primary)]/20'
                      } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                      placeholder="Your age"
                    />
                    {errors.age && (
                      <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.gender ? 'border-red-500' : 'border-[var(--primary)]/20'
                      } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className="text-red-500 text-xs mt-1">{errors.gender}</p>
                    )}
                  </div>
                </div>

                {/* Health Goal */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                    Health Goal *
                  </label>
                  <select
                    name="healthGoal"
                    value={formData.healthGoal}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.healthGoal ? 'border-red-500' : 'border-[var(--primary)]/20'
                    } bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all`}
                  >
                    <option value="">Select your health goal</option>
                    {healthGoals.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                  {errors.healthGoal && (
                    <p className="text-red-500 text-xs mt-1">{errors.healthGoal}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--primary)]/20 bg-[var(--surface)] focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] outline-none transition-all resize-none"
                    placeholder="Tell us about your health concerns..."
                  />
                </div>

                {/* Submit error */}
                {submitError && (
                  <p className="text-red-500 text-sm text-center">{submitError}</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Book Consultation'
                  )}
                </button>

                {/* WhatsApp Quick Connect */}
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn w-full py-4 text-lg flex items-center justify-center gap-2 rounded-full"
                >
                  <WhatsAppIcon />
                  Connect on WhatsApp
                </a>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}