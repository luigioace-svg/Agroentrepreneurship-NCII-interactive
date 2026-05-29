import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.modules'), path: '/modules' },
    { label: t('nav.quizzes'), path: '/quizzes' },
    { label: t('nav.studyGuide'), path: '/study-guide' },
    { label: t('nav.progress'), path: '/progress' },
  ];

  const resources = [
    { label: 'TESDA Official', url: 'https://www.tesda.gov.ph' },
    { label: 'Training Regulations', url: 'https://www.tesda.gov.ph/TR' },
    { label: 'Competency Standards', url: 'https://www.tesda.gov.ph' },
  ];

  return (
    <footer className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="border-t border-sage/30 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-gold" />
                <span className="font-display font-bold text-base">
                  AgroEntrepreneurship NC II
                </span>
              </div>
              <p className="text-leaf text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-leaf text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="text-sm font-semibold mb-4">{t('footer.resources')}</h4>
              <ul className="space-y-2">
                {resources.map((res) => (
                  <li key={res.label}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-leaf text-sm hover:text-white transition-colors"
                    >
                      {res.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-sage/20 text-center">
            <p className="text-leaf/60 text-sm">{t('footer.credit')}</p>
            <p className="text-leaf/40 text-xs mt-2">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
