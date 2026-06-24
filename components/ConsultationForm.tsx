'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { WA_URL } from '@/lib/contact';

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.137.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const healthGoals = [
  'Weight Loss', 'Weight Gain', 'PMOS Management', 'Diabetes Management',
  'Hypertension', 'Cardiac Health', 'Renal Disease', 'Fatty Liver',
  'Thyroid Disorders', 'Cholesterol Management', 'Hormonal Imbalance',
  'Acidity & GERD', 'Constipation', 'Bloating', 'Celiac Disease', 'Other',
];

const planOptions = ['1 Month', '3 Months', '6 Months', '9 Months', '12 Months'];

const inputCls = (err?: string) =>
  `w-full px-4 py-2.5 rounded-xl border text-sm ${err ? 'border-red-400' : 'border-(--primary)/20'} bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all`;

export default function ConsultationForm() {
  const [formData, setFormData] = useState(() => {
    const savedPlan = typeof window !== 'undefined' ? sessionStorage.getItem('preferredPlan') : null;
    const savedGoal = typeof window !== 'undefined' ? sessionStorage.getItem('preferredGoal') : null;
    if (savedPlan) sessionStorage.removeItem('preferredPlan');
    if (savedGoal) sessionStorage.removeItem('preferredGoal');
    return { name: '', mobile: '', email: '', age: '', gender: '', healthGoal: savedGoal ?? '', plan: savedPlan ?? '', message: '' };
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.mobile.trim()) e.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) e.mobile = 'Enter a valid 10-digit number';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.age) e.age = 'Age is required';
    else if (parseInt(formData.age) < 1 || parseInt(formData.age) > 120) e.age = 'Enter a valid age';
    if (!formData.gender) e.gender = 'Please select a gender';
    if (!formData.healthGoal) e.healthGoal = 'Please select a health goal';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          title: `New Consultation from ${formData.name}`,
          from_name: formData.name, mobile: formData.mobile,
          email: formData.email || 'Not provided', age: formData.age,
          gender: formData.gender, health_goal: formData.healthGoal,
          preferred_plan: formData.plan || 'Not specified',
          message: formData.message || 'No additional message',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', mobile: '', email: '', age: '', gender: '', healthGoal: '', plan: '', message: '' });
      }, 4000);
    } catch {
      setSubmitError('Something went wrong. Please try WhatsApp or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const contactItems = [
    { icon: <WhatsAppIcon />, label: 'WhatsApp', sub: <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-primary transition-colors">Connect on WhatsApp</a> },
    { icon: <EmailIcon />, label: 'Email', sub: <a href="mailto:contact@nutriheals.in" className="text-sm text-text-muted hover:text-primary transition-colors">contact@nutriheals.in</a> },
    { icon: <LocationIcon />, label: 'Location', sub: <p className="text-sm text-text-muted">Chandigarh</p> },
  ];

  return (
    <section id="contact" className="py-14 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium uppercase tracking-wider text-sm">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-text-primary mt-2 mb-4">
              Start Your Health{' '}
              <span className="text-gradient">Transformation Today</span>
            </h2>
            <p className="text-text-secondary mb-8">
              Fill out the form and our team will get back to you within 24 hours to schedule your consultation.
            </p>
            <div className="space-y-4">
              {contactItems.map(({ icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-(--primary)/10 text-primary flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="font-medium text-text-primary text-sm">{label}</p>
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl"
          >
            {isSuccess ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-playfair font-bold text-primary mb-1">Thank You!</h3>
                <p className="text-text-secondary text-sm">We've received your request. Our team will contact you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold text-text-primary mb-2">Book Your Consultation</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputCls(errors.name)} placeholder="Your name" />
                    {errors.name && <p className="text-red-500 text-xs mt-0.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Mobile *</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} maxLength={10} className={inputCls(errors.mobile)} placeholder="10-digit mobile number" />
                    {errors.mobile && <p className="text-red-500 text-xs mt-0.5">{errors.mobile}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">Email <span className="text-text-muted font-normal">(Optional)</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls(errors.email)} placeholder="your@email.com" />
                  {errors.email && <p className="text-red-500 text-xs mt-0.5">{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Age *</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} className={inputCls(errors.age)} placeholder="Your age" />
                    {errors.age && <p className="text-red-500 text-xs mt-0.5">{errors.age}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Gender *</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className={inputCls(errors.gender)}>
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-0.5">{errors.gender}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Health Goal *</label>
                    <select name="healthGoal" value={formData.healthGoal} onChange={handleChange} className={inputCls(errors.healthGoal)}>
                      <option value="">Select health goal</option>
                      {healthGoals.map((g) => <option key={g} value={g}>{g}</option>)}
                    </select>
                    {errors.healthGoal && <p className="text-red-500 text-xs mt-0.5">{errors.healthGoal}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Preferred Plan <span className="text-text-muted font-normal">(Optional)</span></label>
                    <select name="plan" value={formData.plan} onChange={handleChange} className={inputCls()}>
                      <option value="">Decide after consultation</option>
                      {planOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-text-secondary mb-1.5">Message <span className="text-text-muted font-normal">(Optional)</span></label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputCls()} resize-none`} placeholder="Tell us about your health concerns..." />
                </div>

                {submitError && <p className="text-red-500 text-xs text-center">{submitError}</p>}

                <button type="submit" disabled={isSubmitting} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : 'Book Consultation'}
                </button>

                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn w-full justify-center">
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
