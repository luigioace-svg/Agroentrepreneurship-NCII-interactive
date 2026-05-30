import { useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { modules } from '@/data/moduleContent';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Trophy, Clock, BookOpen, Target } from 'lucide-react';

export function ProgressPage() {
  const { t } = useLanguage();
  const { quizResults, moduleProgress, studyTime } = useProgress();
  const ref = useScrollReveal<HTMLElement>();

  const stats = useMemo(() => {
    const totalQuizzes = quizResults.length;
    const totalCorrect = quizResults.reduce((sum, r) => sum + r.score, 0);
    const totalQuestions = quizResults.reduce((sum, r) => sum + r.total, 0);
    const avgScore =
      totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

    const totalSectionsRead = moduleProgress.reduce((sum, m) => sum + m.sectionsRead, 0);
    const totalSections = modules.reduce((sum, m) => sum + m.sections.length, 0);
    const modulePercent =
      totalSections > 0 ? Math.round((totalSectionsRead / totalSections) * 100) : 0;

    const studyHours = Math.floor(studyTime / 3600);
    const studyMinutes = Math.floor((studyTime % 3600) / 60);

    return { totalQuizzes, avgScore, modulePercent, studyHours, studyMinutes };
  }, [quizResults, moduleProgress, studyTime]);

  const recentResults = [...quizResults].reverse().slice(0, 10);

  const getCategoryName = (catId: string) => {
    const catMap: Record<string, string> = {
      intro: 'Introduction & Concepts',
      market: 'Market Opportunities',
      production: 'Farm Production Planning',
      finance: 'Financial Management',
      'marketing-sell': 'Marketing & Selling',
      safety: 'Safety & Common Competencies',
    };
    return catMap[catId] || catId;
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-mist py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
            {t('progress.title')}
          </h1>
          <p className="text-earth text-base">{t('progress.subtitle')}</p>
        </div>
      </section>

      {/* Stats Cards */}
      <section ref={ref} className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* Quizzes Taken */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-gold" />
                </div>
                <span className="text-earth text-sm">Quizzes Taken</span>
              </div>
              <p className="font-display text-3xl font-bold text-forest">{stats.totalQuizzes}</p>
            </div>

            {/* Average Score */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">
                  <Target className="w-5 h-5 text-sage" />
                </div>
                <span className="text-earth text-sm">Average Score</span>
              </div>
              <p className="font-display text-3xl font-bold text-forest">{stats.avgScore}%</p>
            </div>

            {/* Modules Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-sage" />
                </div>
                <span className="text-earth text-sm">Modules Read</span>
              </div>
              <p className="font-display text-3xl font-bold text-forest">{stats.modulePercent}%</p>
            </div>

            {/* Study Time */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sage" />
                </div>
                <span className="text-earth text-sm">Study Time</span>
              </div>
              <p className="font-sans text-3xl font-bold text-forest"
                {stats.studyHours}h {String(stats.studyMinutes).padStart(2, '0')}m
              </p>
            </div>
          </div>

          {/* Module Progress Bars */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-display text-xl font-bold text-forest mb-5">
              Module Progress
            </h2>
            <div className="space-y-4">
              {modules.map((mod) => {
                const progress = moduleProgress.find((p) => p.moduleId === mod.id);
                const pct = progress
                  ? Math.round((progress.sectionsRead / mod.sections.length) * 100)
                  : 0;

                return (
                  <div key={mod.id}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-forest text-sm font-medium">{mod.title}</span>
                      <span className="text-earth text-sm">{pct}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-mist rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gold rounded-full transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Quiz Results */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="font-display text-xl font-bold text-forest mb-5">
              Recent Quiz Results
            </h2>

            {recentResults.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-earth/60 text-base">
                  No quiz results yet. Start taking quizzes to track your progress!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-mist">
                      <th className="text-forest text-sm font-semibold pb-3 pr-4">Category</th>
                      <th className="text-forest text-sm font-semibold pb-3 pr-4">Score</th>
                      <th className="text-forest text-sm font-semibold pb-3 pr-4">Percentage</th>
                      <th className="text-forest text-sm font-semibold pb-3">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentResults.map((result, idx) => {
                      const pct = Math.round((result.score / result.total) * 100);
                      return (
                        <tr key={idx} className="border-b border-mist/50 last:border-0">
                          <td className="py-3 pr-4 text-earth text-sm">
                            {getCategoryName(result.category)}
                          </td>
                          <td className="py-3 pr-4 text-earth text-sm">
                            {result.score}/{result.total}
                          </td>
                          <td className="py-3 pr-4">
                            <span
                              className={`inline-block text-sm font-medium px-2.5 py-0.5 rounded-full ${
                                pct >= 70
                                  ? 'bg-green-100 text-green-700'
                                  : pct >= 50
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-red-100 text-red-700'
                              }`}
                            >
                              {pct}%
                            </span>
                          </td>
                          <td className="py-3 text-earth/70 text-sm">
                            {new Date(result.date).toLocaleDateString()}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
