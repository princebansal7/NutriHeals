import type { Metadata } from 'next';
import Link from 'next/link';
import BMICalculator from '@/components/BMICalculator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BMI Calculator | NutriHeals Tools',
  description: 'Calculate your Body Mass Index (BMI) instantly and get a personalised nutrition plan recommendation from Dt. Yogita Bansal.',
};

export default function BMIPage() {
  return (
    <>
      <div className="pt-24 pb-2 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Home
        </Link>
      </div>
      <BMICalculator />
      <Footer />
    </>
  );
}
