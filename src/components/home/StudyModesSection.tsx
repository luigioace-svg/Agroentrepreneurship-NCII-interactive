import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { BookOpen, CircleHelp, Layers, Brain, ArrowRight } from 'lucide-react';

const modes = [
  {
    icon: BookOpen,
    title: 'Study Guide',
    titleTl: 'Gabay sa Pag-aaral',
    desc: 'Browse all topics with definitions, lists, and exam tips',
    descTl: 'Mag-browse ng lahat ng paksa na may mga kahulugan, listahan, at exam tips',
    link: '/study-guide',
  },
  {
    icon: CircleHelp,
    title: 'Practice Quiz',
    titleTl: 'Pagsasanay na Pagsusulit',
    desc: 'Test your knowledge with multiple choice and true/false questions',
    descTl: 'Subukan ang iyong kaalaman sa pamamagitan ng multiple choice at true/false na tanong',
    link: '/quizzes',
  },
  {
    icon: Layers,
    title: 'Flashcards',
    titleTl: 'Flashcards',
    desc: 'Memorize key terms and definitions with flip cards',
    descTl: 'Mag-memorize ng mga key term at kahulugan gamit ang flip cards',
    link: '/study-guide?mode=flashcards',
  },
  {
    icon: Brain,
    title: 'Enumeration',
    titleTl: 'Enumeration',
    desc: 'Challenge yourself with list-recall exercises',
    descTl: 'Hamunin ang iyong sarili sa mga list-recall exercise',
    link: '/quizzes',
  },
];

export function StudyModesSection() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="bg-forest py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {t('studyModes.title')}
          </h2>
          <p className="text-leaf text-base max-w-xl mx-auto">
            {t('studyModes.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modes.map((mode) => {
            const Icon = mode.icon;
            return (
              <Link
                key={mode.title}
                to={mode.link}
                className="bg-white/[0.08] border border-white/15 rounded-xl p-7 hover:bg-white/[0.12] hover:border-gold transition-all group"
              >
                <Icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">
                  {language === 'tl' ? mode.titleTl : mode.title}
                </h3>
                <p className="text-leaf text-sm leading-relaxed mb-4">
                  {language === 'tl' ? mode.descTl : mode.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-gold text-sm font-medium group-hover:underline">
                  {t('common.start')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
