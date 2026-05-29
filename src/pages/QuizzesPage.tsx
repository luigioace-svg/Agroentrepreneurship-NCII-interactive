import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { quizCategories } from '@/data/quizData';
import { QuizModal } from '@/components/quizzes/QuizModal';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Sprout,
  BarChart3,
  Wheat,
  Coins,
  Megaphone,
  Shield,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  BarChart3,
  Wheat,
  Coins,
  Megaphone,
  Shield,
};

function DifficultyDots({ difficulty }: { difficulty: string }) {
  const dots =
    difficulty === 'easy' ? 1 : difficulty === 'medium' ? 3 : 5;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((d) => (
        <div
          key={d}
          className={`w-2 h-2 rounded-full ${
            d <= dots ? 'bg-gold' : 'bg-earth/20'
          }`}
        />
      ))}
    </div>
  );
}

export function QuizzesPage() {
  const { language, t } = useLanguage();
  const ref = useScrollReveal<HTMLElement>();
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="bg-forest py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
            {t('quizzes.title')}
          </h1>
          <p className="text-leaf text-base mb-5">
            {t('quizzes.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[t('quizzes.stats.questions'), t('quizzes.stats.levels'), t('quizzes.stats.categories')].map(
              (stat) => (
                <span
                  key={stat}
                  className="bg-white/10 text-white text-sm px-4 py-2 rounded-full"
                >
                  {stat}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Quiz Category Cards */}
      <section ref={ref} className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Sprout;
              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl shadow-sm p-8 card-hover"
                >
                  <div className="w-12 h-12 rounded-full bg-mist flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-forest font-semibold text-xl mb-2">
                    {language === 'tl' ? cat.titleTl : cat.title}
                  </h3>
                  <p className="text-earth/80 text-sm leading-relaxed mb-4">
                    {language === 'tl' ? cat.descriptionTl : cat.description}
                  </p>

                  <div className="flex items-center justify-between mb-5">
                    <span className="bg-mist text-sage text-xs font-medium px-3 py-1 rounded-full">
                      {cat.questions.length} {t('common.questions')}
                    </span>
                    <DifficultyDots
                      difficulty={
                        cat.questions[0]?.difficulty || 'medium'
                      }
                    />
                  </div>

                  <button
                    onClick={() => setActiveQuiz(cat.id)}
                    className="w-full bg-sage text-white font-medium py-2.5 rounded-lg hover:bg-forest transition-colors"
                  >
                    {t('common.start')}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {activeQuiz && (
        <QuizModal categoryId={activeQuiz} onClose={() => setActiveQuiz(null)} />
      )}
    </main>
  );
}
