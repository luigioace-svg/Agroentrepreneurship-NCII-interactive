import { useState, useEffect, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { quizCategories } from '@/data/quizData';
import { flashcardData } from '@/data/flashcardData';
import { matchingData } from '@/data/matchingData';
import { enumerationData } from '@/data/enumerationData';
import { computationData } from '@/data/computationData';
import { memoryData } from '@/data/memoryData';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X, Clock, RotateCcw, CheckCircle, XCircle } from 'lucide-react';

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
type GameType = 'quiz' | 'flashcard' | 'matching' | 'enumeration' | 'computation' | 'memory';
type Difficulty = 'easy' | 'medium' | 'hard' | 'difficult' | 'expert';

// ─────────────────────────────────────────────
// TIMER HOOK
// ─────────────────────────────────────────────
function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);
  const start = () => {
    ref.current = setInterval(() => setSeconds(s => s + 1), 1000);
  };
  const stop = () => { if (ref.current) clearInterval(ref.current); };
  const reset = () => { stop(); setSeconds(0); };
  const format = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  useEffect(() => () => stop(), []);
  return { seconds, start, stop, reset, format };
}

// ─────────────────────────────────────────────
// MULTIPLE CHOICE MODAL (existing, kept intact)
// ─────────────────────────────────────────────
function QuizModal({ categoryId, onClose }: { categoryId: string; onClose: () => void }) {
  const { language, t } = useLanguage();
  const { saveQuizResult } = useProgress();
  const category = quizCategories.find(c => c.id === categoryId);
  const questions = category?.questions || [];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const { seconds, start, stop, format } = useTimer();

  useEffect(() => { start(); }, []);

  const currentQuestion = questions[currentIdx];

  const handleSelect = useCallback((optionIdx: number) => {
    if (revealed || selectedAnswer !== null) return;
    setSelectedAnswer(optionIdx);
    setAnswers(prev => ({ ...prev, [currentIdx]: optionIdx }));
    setRevealed(true);
    setTimeout(() => {
      if (currentIdx < questions.length - 1) {
        setCurrentIdx(prev => prev + 1);
        setSelectedAnswer(null);
        setRevealed(false);
      } else {
        setShowResult(true);
        stop();
        const correct = Object.entries({ ...answers, [currentIdx]: optionIdx })
          .filter(([idx, ans]) => questions[Number(idx)].correctAnswer === ans).length;
        saveQuizResult({ category: categoryId, score: correct, total: questions.length, time: seconds, date: new Date().toISOString() });
      }
    }, 1800);
  }, [revealed, selectedAnswer, currentIdx, questions, answers, categoryId, seconds]);

  const score = Object.entries(answers).filter(([idx, ans]) => questions[Number(idx)].correctAnswer === ans).length;

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <div className="flex items-center gap-3">
            <div className="w-32 h-2 bg-mist rounded-full overflow-hidden">
              <div className="h-full bg-gold rounded-full transition-all duration-300"
                style={{ width: showResult ? '100%' : `${((currentIdx + 1) / questions.length) * 100}%` }} />
            </div>
            <span className="text-sage text-sm">{showResult ? questions.length : currentIdx + 1}/{questions.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-terracotta text-sm font-semibold">
              <Clock className="w-4 h-4" />{format(seconds)}
            </div>
            <button onClick={onClose} className="text-earth/60 hover:text-forest transition-colors"><X className="w-5 h-5" /></button>
          </div>
        </div>
        {!showResult ? (
          <div className="px-6 py-6">
            <h3 className="text-forest font-semibold text-lg mb-6 leading-relaxed">
              {language === 'tl' ? currentQuestion?.questionTl : currentQuestion?.question}
            </h3>
            <div className="space-y-3">
              {(language === 'tl' ? currentQuestion?.optionsTl : currentQuestion?.options)?.map((option, idx) => {
                let cls = 'bg-mist text-forest hover:bg-leaf/30';
                if (revealed) {
                  if (idx === currentQuestion?.correctAnswer) cls = 'bg-green-100 border-2 border-green-500 text-green-800';
                  else if (idx === selectedAnswer) cls = 'bg-red-100 border-2 border-red-400 text-red-700';
                  else cls = 'bg-mist/50 text-earth/50';
                } else if (idx === selectedAnswer) cls = 'bg-gold/30 border-2 border-gold text-forest';
                return (
                  <button key={idx} onClick={() => handleSelect(idx)} disabled={revealed}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all text-sm sm:text-base ${cls}`}>
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + idx)}.</span>{option}
                  </button>
                );
              })}
            </div>
            {revealed && (
              <div className="mt-4 p-4 bg-mist rounded-lg">
                <p className="text-forest text-sm">
                  <span className="font-semibold">Explanation: </span>
                  {language === 'tl' ? currentQuestion?.explanationTl : currentQuestion?.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="px-6 py-8 text-center">
            <div className="w-28 h-28 rounded-full border-4 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-3xl font-bold text-forest">{score}/{questions.length}</span>
            </div>
            <p className="text-earth text-base mb-4">Time: {format(seconds)}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={() => { setCurrentIdx(0); setSelectedAnswer(null); setAnswers({}); setShowResult(false); setRevealed(false); }}
                className="bg-sage text-white font-medium px-6 py-2.5 rounded-lg hover:bg-forest transition-colors">Try Again</button>
              <button onClick={onClose} className="border border-earth/30 text-earth font-medium px-6 py-2.5 rounded-lg hover:bg-earth/5 transition-colors">Back</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// FLASHCARD GAME
// ─────────────────────────────────────────────
function FlashcardGame({ difficulty, onClose }: { difficulty: Difficulty; onClose: () => void }) {
  const cards = flashcardData.filter(c => c.difficulty === difficulty);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(false);
  const { seconds, start, stop, format } = useTimer();
  useEffect(() => { start(); }, []);

  const next = () => {
    setFlipped(false);
    setTimeout(() => {
      if (idx < cards.length - 1) setIdx(idx + 1);
      else { setDone(true); stop(); }
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <span className="text-sage text-sm font-medium">Flashcard {idx + 1}/{cards.length}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-terracotta text-sm font-semibold"><Clock className="w-4 h-4" />{format(seconds)}</span>
            <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
          </div>
        </div>
        {!done ? (
          <div className="p-6">
            <div className="w-full h-2 bg-mist rounded-full mb-6">
              <div className="h-full bg-gold rounded-full transition-all" style={{ width: `${((idx + 1) / cards.length) * 100}%` }} />
            </div>
            <div onClick={() => setFlipped(!flipped)} className="cursor-pointer min-h-[180px] rounded-xl border-2 border-mist flex flex-col items-center justify-center p-6 transition-all hover:border-sage">
              <span className="text-xs text-earth/50 mb-3 uppercase tracking-wide">{flipped ? 'Answer' : 'Term'}</span>
              <p className="text-forest font-semibold text-center text-lg">{flipped ? cards[idx]?.back : cards[idx]?.front}</p>
              {!flipped && <p className="text-earth/40 text-xs mt-4">Tap to reveal answer</p>}
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={next} className="flex-1 bg-sage text-white font-medium py-3 rounded-lg hover:bg-forest transition-colors">
                {idx < cards.length - 1 ? 'Next Card →' : 'Finish'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-forest font-bold text-xl mb-2">All cards reviewed!</h3>
            <p className="text-earth mb-6">Time: {format(seconds)}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => { setIdx(0); setFlipped(false); setDone(false); }} className="bg-sage text-white px-6 py-2.5 rounded-lg hover:bg-forest transition-colors">Restart</button>
              <button onClick={onClose} className="border border-earth/30 text-earth px-6 py-2.5 rounded-lg">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MATCHING GAME
// ─────────────────────────────────────────────
function MatchingGame({ difficulty, onClose }: { difficulty: Difficulty; onClose: () => void }) {
  const allPairs = matchingData.filter(m => m.difficulty === difficulty).slice(0, 8);
  const [selected, setSelected] = useState<{ side: 'left' | 'right'; idx: number } | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [wrong, setWrong] = useState<{ left?: number; right?: number }>({});
  const [done, setDone] = useState(false);
  const { seconds, start, stop, format } = useTimer();
  useEffect(() => { start(); }, []);

  const rights = useRef([...allPairs].sort(() => Math.random() - 0.5));

  const handleLeft = (idx: number) => {
    if (matched.includes(idx)) return;
    setSelected({ side: 'left', idx });
  };

  const handleRight = (idx: number) => {
    if (!selected || selected.side !== 'left') { setSelected({ side: 'right', idx }); return; }
    const leftItem = allPairs[selected.idx];
    const rightItem = rights.current[idx];
    if (leftItem.term === rightItem.term) {
      const newMatched = [...matched, selected.idx];
      setMatched(newMatched);
      setSelected(null);
      if (newMatched.length === allPairs.length) { setDone(true); stop(); }
    } else {
      setWrong({ left: selected.idx, right: idx });
      setTimeout(() => { setWrong({}); setSelected(null); }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <span className="text-forest font-semibold">Matching — {matched.length}/{allPairs.length} matched</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-terracotta text-sm font-semibold"><Clock className="w-4 h-4" />{format(seconds)}</span>
            <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
          </div>
        </div>
        {!done ? (
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-xs font-semibold text-earth/60 uppercase tracking-wide mb-2">Terms</p>
                {allPairs.map((pair, idx) => (
                  <button key={idx} onClick={() => handleLeft(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all border-2 ${
                      matched.includes(idx) ? 'bg-green-100 border-green-400 text-green-800' :
                      wrong.left === idx ? 'bg-red-100 border-red-400 text-red-700' :
                      selected?.side === 'left' && selected.idx === idx ? 'bg-gold/30 border-gold text-forest' :
                      'bg-mist border-transparent text-forest hover:border-sage'
                    }`}>
                    {pair.term}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-xs font-semibold text-earth/60 uppercase tracking-wide mb-2">Definitions</p>
                {rights.current.map((pair, idx) => {
                  const isMatched = matched.includes(allPairs.findIndex(p => p.term === pair.term));
                  return (
                    <button key={idx} onClick={() => handleRight(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all border-2 ${
                        isMatched ? 'bg-green-100 border-green-400 text-green-800' :
                        wrong.right === idx ? 'bg-red-100 border-red-400 text-red-700' :
                        'bg-mist border-transparent text-forest hover:border-sage'
                      }`}>
                      {pair.definition}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-forest font-bold text-xl mb-2">All matched!</h3>
            <p className="text-earth mb-6">Time: {format(seconds)}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={onClose} className="bg-sage text-white px-6 py-2.5 rounded-lg hover:bg-forest transition-colors">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// ENUMERATION GAME
// ─────────────────────────────────────────────
function EnumerationGame({ difficulty, onClose }: { difficulty: Difficulty; onClose: () => void }) {
  const questions = enumerationData.filter(e => e.difficulty === difficulty);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const { seconds, start, stop, format } = useTimer();
  useEffect(() => { start(); }, []);

  const current = questions[idx];

  const toggleOption = (opt: string) => {
    if (revealed) return;
    setSelected(prev => prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]);
  };

  const check = () => {
    setRevealed(true);
    const correct = current.answers.every(a => selected.includes(a)) && selected.length === current.answers.length;
    if (correct) setScore(s => s + 1);
  };

  const next = () => {
    setRevealed(false);
    setSelected([]);
    if (idx < questions.length - 1) setIdx(idx + 1);
    else { setDone(true); stop(); }
  };

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <span className="text-sage text-sm">Question {idx + 1}/{questions.length}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-terracotta text-sm font-semibold"><Clock className="w-4 h-4" />{format(seconds)}</span>
            <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
          </div>
        </div>
        {!done ? (
          <div className="p-6">
            <p className="text-forest font-semibold text-lg mb-2">{current?.question}</p>
            <p className="text-earth/60 text-sm mb-5">Select all correct answers ({current?.answers.length} items)</p>
            <div className="space-y-2 mb-6">
              {current?.options.map((opt, i) => {
                let cls = 'bg-mist text-forest hover:bg-leaf/30 border-transparent';
                if (revealed) {
                  if (current.answers.includes(opt)) cls = 'bg-green-100 border-green-500 text-green-800';
                  else if (selected.includes(opt)) cls = 'bg-red-100 border-red-400 text-red-700';
                  else cls = 'bg-mist/50 text-earth/50 border-transparent';
                } else if (selected.includes(opt)) cls = 'bg-gold/30 border-gold text-forest';
                return (
                  <button key={i} onClick={() => toggleOption(opt)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm border-2 transition-all ${cls}`}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {!revealed ? (
              <button onClick={check} className="w-full bg-sage text-white font-medium py-3 rounded-lg hover:bg-forest transition-colors">Check Answers</button>
            ) : (
              <button onClick={next} className="w-full bg-gold text-forest font-medium py-3 rounded-lg hover:bg-gold/80 transition-colors">
                {idx < questions.length - 1 ? 'Next →' : 'See Results'}
              </button>
            )}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="w-24 h-24 rounded-full border-4 border-gold flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-2xl font-bold text-forest">{score}/{questions.length}</span>
            </div>
            <p className="text-earth mb-6">Time: {format(seconds)}</p>
            <div className="flex gap-3 justify-center">
              <button onClick={() => { setIdx(0); setSelected([]); setRevealed(false); setScore(0); setDone(false); }}
                className="bg-sage text-white px-6 py-2.5 rounded-lg hover:bg-forest transition-colors">Restart</button>
              <button onClick={onClose} className="border border-earth/30 text-earth px-6 py-2.5 rounded-lg">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPUTATION GAME
// ─────────────────────────────────────────────
function ComputationGame({ difficulty, onClose }: { difficulty: Difficulty; onClose: () => void }) {
  const questions = computationData.filter(c => c.difficulty 
