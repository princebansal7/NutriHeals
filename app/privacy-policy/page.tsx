import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | NutriHeals',
  description: 'Privacy Policy for NutriHeals — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-playfair text-4xl font-bold text-text-primary mb-2">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-secondary">

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">1. Information We Collect</h2>
            <p>
              When you use our consultation form or contact us, we may collect personal information including your name, mobile number, email address, age, gender, and health-related details you choose to share (health goals, preferred plan, and any messages).
            </p>
            <p className="mt-2">
              We do not collect any payment information directly on this website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">2. How We Use Your Information</h2>
            <p>The information you provide is used solely to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Contact you regarding your consultation request</li>
              <li>Understand your health goals and recommend suitable plans</li>
              <li>Send relevant dietary guidance and follow-up communications</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information to any third parties.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">3. Data Security</h2>
            <p>
              We take reasonable precautions to protect your personal information. All form submissions are transmitted securely and stored only as long as necessary to provide our services.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">4. Cookies</h2>
            <p>
              This website may use session storage to improve your experience (for example, pre-filling form fields based on your previous selections on the same visit). No persistent tracking cookies are used for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">5. Third-Party Services</h2>
            <p>
              We use WhatsApp (Meta) for communication purposes. When you click &quot;WhatsApp Us,&quot; you will be redirected to WhatsApp&apos;s platform and subject to their privacy policy. We also link to Instagram, which has its own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">6. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of any personal data we hold about you. To make such a request, please contact us at{' '}
              <a href="mailto:contact@nutriheals.in" className="text-primary hover:underline">
                contact@nutriheals.in
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">8. Contact</h2>
            <p>
              For any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:contact@nutriheals.in" className="text-primary hover:underline">
                contact@nutriheals.in
              </a>{' '}
              or via WhatsApp.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
