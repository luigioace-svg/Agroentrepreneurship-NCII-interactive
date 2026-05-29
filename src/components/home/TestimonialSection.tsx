import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function TestimonialSection() {
  const { t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-mist py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-10">
          {t('testimonial.title')}
        </h2>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-10 relative text-center">
          {/* Decorative quote */}
          <span
            className="absolute top-4 left-6 font-display text-7xl text-leaf/20 leading-none select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <blockquote className="font-display text-lg md:text-xl italic text-forest leading-relaxed relative z-10 pt-4">
            {t('testimonial.quote')}
          </blockquote>

          <p className="text-sage text-sm mt-6">{t('testimonial.attribution')}</p>

          {/* Decorative bottom border */}
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>
      </div>
    </section>
  );
}
