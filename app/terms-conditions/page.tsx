import type { Metadata } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NutriHeals',
  description: 'Terms and Conditions for using NutriHeals services provided by Dt. Yogita Bansal.',
};

export default function TermsConditionsPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-playfair text-4xl font-bold text-text-primary mb-2">Terms &amp; Conditions</h1>
        <p className="text-text-muted text-sm mb-10">Last updated: June 2025</p>

        <div className="prose prose-slate max-w-none space-y-8 text-text-secondary">

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the NutriHeals website and services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">2. Services Provided</h2>
            <p>
              NutriHeals provides personalised dietary consultation and nutrition planning services under the supervision of Dt. Yogita Bansal (M.Sc. Dietetics &amp; Nutrition). The services are intended for general wellness and do not substitute medical diagnosis or treatment.
            </p>
            <p className="mt-2">
              Always consult a qualified medical professional for any medical conditions. Dietary guidance from NutriHeals is complementary to, not a replacement for, medical advice.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">3. Consultations &amp; Plans</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Consultation bookings made through this website are subject to availability and confirmation.</li>
              <li>Diet plans are personalised and may change based on progress and health updates.</li>
              <li>Results vary from person to person and are not guaranteed.</li>
              <li>Plans are intended for the individual client only and may not be shared or redistributed.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">4. Payments &amp; Refunds</h2>
            <p>
              Payment terms, fees, and refund policies are communicated during the consultation process. In general, fees paid for completed consultations or delivered diet plans are non-refundable unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">5. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and diet plans — is the property of NutriHeals / Dt. Yogita Bansal and may not be reproduced, distributed, or used without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">6. Limitation of Liability</h2>
            <p>
              NutriHeals and Dt. Yogita Bansal shall not be held liable for any adverse outcomes resulting from failure to follow professional advice, pre-existing conditions not disclosed during consultation, or self-modification of recommended plans.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">7. Privacy</h2>
            <p>
              Your use of this website is also governed by our{' '}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms &amp; Conditions at any time. Continued use of our services after changes are posted constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold text-text-primary mb-3">9. Contact</h2>
            <p>
              For any questions regarding these Terms, please reach out at{' '}
              <a href="mailto:contact@nutriheals.in" className="text-primary hover:underline">
                contact@nutriheals.in
              </a>.
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
}
