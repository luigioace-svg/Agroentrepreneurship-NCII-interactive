import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { quizCategories, type QuizQuestion } from '@/data/quizData';
import { X, Clock } from 'lucide-react';

interface QuizModalProps {
  categoryId: string;
  onClose: () => void;
}

export function QuizModal({ categoryId, onClose }: QuizModalProps) {
  const { language, t } = useLanguage();
  const { saveQuizResult } = useProgress();
  const category = quizCategories.find((c) => c.id === categoryId);
  const questions = category?.questions || [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentQuestion: QuizQuestion | undefined = questions[currentIdx];

  const handleSelect = useCallback(
    (optionIdx: number) => {
      if (revealed || selectedAnswer !== null) return;
      setSelectedAnswer(optionIdx);
      setAnswers((prev) => ({ ...prev, [currentIdx]: optionIdx }));
      setRevealed(true);

      // Auto advance after delay
      setTimeout(() => {
        if (currentIdx < questions.length - 1) {
          setCurrentIdx((prev) => prev + 1);
          setSelectedAnswer(null);
          setRevealed(false);
        } else {
          setShowResult(true);
          if (timerRef.current) clearInterval(timerRef.current);

          const correct = Object.entries({ ...answers, [currentIdx]: optionIdx }).filter(
            ([idx, ans]) => questions[Number(idx)].correctAnswer === ans
          ).length;

          saveQuizResult({
            category: categoryId,
            score: correct,
            total: questions.length,
            time: timeElapsed,
            date: new Date().toISOString(),
          });
        }
      }, 1800);
    },
    [revealed, selectedAnswer, currentIdx, questions, answers, categoryId, timeElapsed, saveQuizResult]
  );

  const score = Object.entries(answers).filter(
    ([idx, ans]) => questions[Number(idx)].correctAnswer === ans
  ).length;

  const percentage = questions.length > 0 ? (score / questions.length) * 100 : 0;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return t('quiz.excellent');
    if (percentage >= 70) return t('quiz.great');
    if (percentage >= 50) return t('quiz.good');
    return t('quiz.keepPracticing');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const restartQuiz = () => {
    setCurrentIdx(0);
    setSelectedAnswer(null);
    setAnswers({});
    setShowResult(false);
    setTimeElapsed(0);
    setRevealed(false);
    timerRef.current = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);
  };

  if (!currentQuestion && !showResult) return null;

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <div className="flex items-center gap-3">
            {/* Progress bar */}
            <div className="w-32 h-2 bg-mist rounded-full overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-300"
                style={{
                  width: showResult
                    ? '100%'
                    : `${((currentIdx + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
            <span className="text-sage text-sm">
              {showResult ? questions.length : currentIdx + 1}/{questions.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-terracotta text-sm font-semibold">
              <Clock className="w-4 h-4" />
              {formatTime(timeElapsed)}
            </div>
            <button
              onClick={onClose}
              className="text-earth/60 hover:text-forest transition-colors"
              aria-label={t('common.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!showResult ? (
          <div className="px-6 py-6">
            {/* Question */}
            <h3 className="text-forest font-semibold text-lg mb-6 leading-relaxed">
              {language === 'tl' ? currentQuestion?.questionTl : currentQuestion?.question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {(language === 'tl' ? currentQuestion?.optionsTl : currentQuestion?.options)?.map(
                (option, idx) => {
                  let optionClass = 'bg-mist text-forest hover:bg-leaf/30';
                  if (revealed) {
                    if (idx === currentQuestion?.correctAnswer) {
                      optionClass = 'correct';
                    } else if (idx === selectedAnswer) {
                      optionClass = 'incorrect';
                    } else {
                      optionClass = 'bg-mist/50 text-earth/50';
                    }
                  } else if (idx === selectedAnswer) {
                    optionClass = 'selected';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={revealed}
                      className={`w-full text-left px-5 py-4 rounded-lg quiz-option disabled ${optionClass} text-sm sm:text-base`}
                    >
                      <span className="font-semibold mr-2">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {option}
                    </button>
                  );
                }
              )}
            </div>

            {/* Explanation */}
            {revealed && (
              <div className="mt-4 p-4 bg-mist rounded-lg">
                <p className="text-forest text-sm">
                  <span className="font-semibold">{language === 'tl' ? 'Paliwanag:' : 'Explanation:'}</span>{' '}
                  {language === 'tl'
                    ? currentQuestion?.explanationTl
                    : currentQuestion?.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Results Screen */
          <div className="px-6 py-8 text-center">
            {/* Score Circle */}
            <div className="w-28 h-28 rounded-full border-4 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-3xl font-bold text-forest">
                {score}/{questions.length}
              </span>
            </div>
            <p className="text-sage text-sm mb-2">{t('quiz.correct')}</p>
            <p className="text-earth text-base mb-4">
              {t('quiz.timeTaken')}: {formatTime(timeElapsed)}
            </p>
            <p className="text-forest text-lg font-medium mb-6">{getPerformanceMessage()}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={restartQuiz}
                className="bg-sage text-white font-medium px-6 py-2.5 rounded-lg hover:bg-forest transition-colors"
              >
                {t('quiz.tryAgain')}
              </button>
              <button
                onClick={onClose}
                className="border border-earth/30 text-earth font-medium px-6 py-2.5 rounded-lg hover:bg-earth/5 transition-colors"
              >
                {t('quiz.backToQuizzes')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
