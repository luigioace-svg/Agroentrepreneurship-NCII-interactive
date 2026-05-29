import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/shared/LanguageToggle';
import { ModuleAccordion } from '@/components/modules/ModuleAccordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function ModulesPage() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="bg-mist py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
            {t('modulePage.title')}
          </h1>
          <p className="text-earth text-base mb-4">{t('modulePage.subtitle')}</p>
          <div className="flex justify-center">
            <LanguageToggle />
          </div>
        </div>
      </section>

      {/* Module Content */}
      <section ref={ref} className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ModuleAccordion />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-mist py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-5">
            Ready to Test Your Knowledge?
          </h2>
          <Link
            to="/quizzes"
            className="inline-flex items-center bg-gold text-forest font-semibold px-8 py-3.5 rounded-lg hover:shadow-glow transition-shadow"
          >
            Take a Practice Quiz
          </Link>
        </div>
      </section>
    </main>
  );
}
