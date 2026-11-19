import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { AboutPreview } from '@/components/sections/about-preview';
import { FeaturedResources } from '@/components/sections/featured-resources';
import { LatestArticles } from '@/components/sections/latest-articles';
import { SpeakingPreview } from '@/components/sections/speaking-preview';
import { NewsletterSection } from '@/components/sections/newsletter';

export const metadata: Metadata = {
  title: 'Jake Avard — The Great Lock-In',
  description: 'A practical framework for young men to bring order to their careers, finances, health, relationships, habits, and purpose.',
  alternates: { canonical: 'https://jakeavard.com' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <FeaturedResources />
      <LatestArticles />
      <SpeakingPreview />
      <NewsletterSection />
    </>
  );
}
