import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap } from 'lucide-react';

export function CourseOverviewSection() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left: Text (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-forest leading-tight">
              {t('overview.title')}
            </h2>
            <p className="text-earth text-base leading-relaxed">{t('overview.p1')}</p>
            <p className="text-earth text-base leading-relaxed">{t('overview.p2')}</p>
            <p className="text-sage text-base italic leading-relaxed">{t('overview.p3')}</p>
            <Link
              to="/modules"
              className="inline-flex items-center bg-sage text-white font-medium px-7 py-3 rounded-lg hover:bg-forest transition-colors mt-2"
            >
              {t('overview.cta')}
            </Link>
          </div>

          {/* Right: Image (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/course-farm.jpg"
                alt="Filipino farm landscape"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="bg-mist rounded-lg p-4 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-sage shrink-0" />
              <p className="text-forest text-sm">{t('overview.caption')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
