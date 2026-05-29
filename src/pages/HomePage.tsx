import { HeroSection } from '@/components/home/HeroSection';
import { CourseOverviewSection } from '@/components/home/CourseOverviewSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { ModuleCategoriesSection } from '@/components/home/ModuleCategoriesSection';
import { StudyModesSection } from '@/components/home/StudyModesSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <CourseOverviewSection />
      <TestimonialSection />
      <ModuleCategoriesSection />
      <StudyModesSection />
    </main>
  );
}
