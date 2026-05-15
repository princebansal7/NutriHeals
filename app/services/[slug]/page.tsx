import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllSlugs } from '@/lib/services-data';
import ServicePageClient from './ServicePageClient';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} Diet Plan | NutriHeals – Dt. Yogita Bansal`,
    description: service.heroDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePageClient service={service} />;
}
