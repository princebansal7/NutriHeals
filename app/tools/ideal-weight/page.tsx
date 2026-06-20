import type { Metadata } from 'next';
import Link from 'next/link';
import IdealWeightCalculator from '@/components/IdealWeightCalculator';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ideal Weight Calculator | NutriHeals Tools',
  description: 'Find your healthy weight range based on height and gender using clinically validated formulas. Built by Dt. Yogita Bansal.',
};

export default function IdealWeightPage() {
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
      <IdealWeightCalculator />
      <Footer />
    </>
  );
}
