import { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { quizCategories, type QuizQuestion } from '@/data/quizData';
import { X, Clock } from 'lucide-react';

interface QuizModalProps {
  categoryId: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'difficult' | 'expert';
  onClose: () => void;
}

export function QuizModal({ categoryId, difficulty, onClose }: QuizModalProps) {
  const { language, t } = useLanguage();
  const { saveQuizResult } = useProgress();

  // Collect ALL questions from ALL categories, filtered by difficulty
  const allQuestions: QuizQuestion[] = quizCategories
    .flatMap((c) => c.questions)
    .filter((q) => !difficulty || q.difficulty === difficulty);

  // Shuffle so it's not always the same order
  const shuffled = useRef<QuizQuestion[]>(
    [...allQuestions].sort(() => Math.random() - 0.5)
  );
  const questions = shuffled.current;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    if (percentage >= 90) return language === 'tl' ? 'Napakahusay!' : 'Excellent!';
    if (percentage >= 70) return language === 'tl' ? 'Magaling!' : 'Great job!';
    if (percentage >= 50) return language === 'tl' ? 'Magpatuloy!' : 'Keep it up!';
    return language === 'tl' ? 'Mag-aral pa!' : 'Keep practicing!';
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const restartQuiz = () => {
    shuffled.current = [...allQuestions].sort(() => Math.random() - 0.5);
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

  if (questions.length === 0) {
    return (
      <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8 text-center">
          <p className="text-forest font-semibold text-lg mb-4">
            No questions available for this difficulty level yet.
          </p>
          <button onClick={onClose} className="bg-sage text-white px-6 py-2.5 rounded-lg">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion && !showResult) return null;

  const difficultyLabel = difficulty
    ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
    : 'All';

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-sage/20 text-sage">
              {difficultyLabel}
            </span>
            <div className="w-24 h-2 bg-mist rounded-full overflow-hidden">
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
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!showResult ? (
          <div className="px-6 py-6">
            <h3 className="text-forest font-semibold text-lg mb-6 leading-relaxed">
              {language === 'tl' ? currentQuestion?.questionTl : currentQuestion?.question}
            </h3>

            <div className="space-y-3">
              {(language === 'tl' ? currentQuestion?.optionsTl : currentQuestion?.options)?.map(
                (option, idx) => {
                  let cls = 'bg-mist text-forest hover:bg-leaf/30 border-transparent';
                  if (revealed) {
                    if (idx === currentQuestion?.correctAnswer) {
                      cls = 'bg-green-100 border-2 border-green-500 text-green-800';
                    } else if (idx === selectedAnswer) {
                      cls = 'bg-red-100 border-2 border-red-400 text-red-700';
                    } else {
                      cls = 'bg-mist/50 text-earth/50 border-transparent';
                    }
                  } else if (idx === selectedAnswer) {
                    cls = 'bg-gold/30 border-2 border-gold text-forest';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={revealed}
                      className={`w-full text-left px-5 py-4 rounded-lg transition-all border-2 text-sm sm:text-base ${cls}`}
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

            {revealed && (
              <div className="mt-4 p-4 bg-mist rounded-lg">
                <p className="text-forest text-sm">
                  <span className="font-semibold">
                    {language === 'tl' ? 'Paliwanag: ' : 'Explanation: '}
                  </span>
                  {language === 'tl'
                    ? currentQuestion?.explanationTl
                    : currentQuestion?.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="px-6 py-8 text-center">
            <div className="w-28 h-28 rounded-full border-4 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-3xl font-bold text-forest">
                {score}/{questions.length}
              </span>
            </div>
            <p className="text-sage text-sm mb-2">Correct answers</p>
            <p className="text-earth text-base mb-4">
              Time: {formatTime(timeElapsed)}
            </p>
            <p className="text-forest text-lg font-medium mb-6">{getPerformanceMessage()}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={restartQuiz}
                className="bg-sage text-white font-medium px-6 py-2.5 rounded-lg hover:bg-forest transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="border border-earth/30 text-earth font-medium px-6 py-2.5 rounded-lg hover:bg-earth/5 transition-colors"
              >
                Back to Quizzes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
