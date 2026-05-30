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
import { X, Clock, CheckCircle, XCircle } from 'lucide-react';

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
// MULTIPLE CHOICE MODAL
// ─────────────────────────────────────────────
function QuizModal({ categoryId, difficulty, onClose }: { categoryId: string; difficulty?: Difficulty; onClose: () => void }) {
  const { language } = useLanguage();
  const { saveQuizResult } = useProgress();
  // Map difficult/expert to hard since quizData only has easy/medium/hard
  const effectiveDifficulty = (difficulty === 'difficult' || difficulty === 'expert') ? 'hard' : difficulty;
  // Pull from ALL categories filtered by difficulty
  const [questions] = useState(() =>
  quizCategories
    .flatMap(c => c.questions)
    .filter((q: any) => !effectiveDifficulty || q.difficulty === effectiveDifficulty)
    .sort(() => Math.random() - 0.5)
);
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
  const questions = computationData.filter(c => c.difficulty === difficulty);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const { seconds, start, stop, format } = useTimer();
  useEffect(() => { start(); }, []);

  const current = questions[idx];

  const check = () => {
    setRevealed(true);
    const userVal = parseFloat(input.replace(/,/g, ''));
    if (Math.abs(userVal - current.answer) < 0.01) setScore(s => s + 1);
  };

  const next = () => {
    setRevealed(false);
    setInput('');
    if (idx < questions.length - 1) setIdx(idx + 1);
    else { setDone(true); stop(); }
  };

  const isCorrect = revealed && Math.abs(parseFloat(input.replace(/,/g, '')) - current?.answer) < 0.01;

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <span className="text-sage text-sm">Problem {idx + 1}/{questions.length}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-terracotta text-sm font-semibold"><Clock className="w-4 h-4" />{format(seconds)}</span>
            <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
          </div>
        </div>
        {!done ? (
          <div className="p-6">
            <div className="bg-mist rounded-xl p-5 mb-5">
              <p className="text-forest font-semibold text-base leading-relaxed">{current?.question}</p>
            </div>
            {current?.hint && <p className="text-earth/60 text-sm mb-4 italic">Hint: {current.hint}</p>}
            <div className="mb-5">
              <label className="block text-forest text-sm font-medium mb-2">Your Answer:</label>
              <input type="number" value={input} onChange={e => setInput(e.target.value)} disabled={revealed}
                placeholder="Enter your answer..."
                className={`w-full border-2 rounded-lg px-4 py-3 text-lg font-semibold outline-none transition-all ${
                  revealed ? isCorrect ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-400 bg-red-50 text-red-700' : 'border-mist focus:border-sage'
                }`} />
            </div>
            {revealed && (
              <div className={`p-4 rounded-lg mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center gap-2 mb-1">
                  {isCorrect ? <CheckCircle className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  <span className="font-semibold">{isCorrect ? 'Correct!' : `Correct answer: ${current?.answer} ${current?.unit || ''}`}</span>
                </div>
                <p className="text-sm text-earth/80">{current?.explanation}</p>
              </div>
            )}
            {!revealed ? (
              <button onClick={check} disabled={!input} className="w-full bg-sage text-white font-medium py-3 rounded-lg hover:bg-forest transition-colors disabled:opacity-50">Check Answer</button>
            ) : (
              <button onClick={next} className="w-full bg-gold text-forest font-medium py-3 rounded-lg hover:bg-gold/80 transition-colors">
                {idx < questions.length - 1 ? 'Next Problem →' : 'See Results'}
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
              <button onClick={() => { setIdx(0); setInput(''); setRevealed(false); setScore(0); setDone(false); }}
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
// MEMORY CARD GAME
// ─────────────────────────────────────────────
function MemoryGame({ difficulty, onClose }: { difficulty: Difficulty; onClose: () => void }) {
  const pairs = memoryData.filter(m => m.difficulty === difficulty).slice(0, 8);
  const [cards, setCards] = useState(() => {
    const deck = [...pairs.map(p => ({ ...p, type: 'term' as const })), ...pairs.map(p => ({ ...p, type: 'def' as const }))];
    return deck.sort(() => Math.random() - 0.5).map((c, i) => ({ ...c, id: i, flipped: false, matched: false }));
  });
  const [selected, setSelected] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [done, setDone] = useState(false);
  const { seconds, start, stop, format } = useTimer();
  useEffect(() => { start(); }, []);

  const flip = (id: number) => {
    if (selected.length === 2) return;
    const card = cards.find(c => c.id === id);
    if (!card || card.flipped || card.matched) return;
    const newCards = cards.map(c => c.id === id ? { ...c, flipped: true } : c);
    setCards(newCards);
    const newSelected = [...selected, id];
    setSelected(newSelected);
    if (newSelected.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = newSelected.map(sid => newCards.find(c => c.id === sid)!);
      if (a.term === b.term && a.type !== b.type) {
        const matched = newCards.map(c => newSelected.includes(c.id) ? { ...c, matched: true } : c);
        setCards(matched);
        setSelected([]);
        if (matched.every(c => c.matched)) { setDone(true); stop(); }
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c => newSelected.includes(c.id) ? { ...c, flipped: false } : c));
          setSelected([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-mist">
          <span className="text-sage text-sm">Moves: {moves} | Matched: {cards.filter(c => c.matched).length / 2}/{pairs.length}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-terracotta text-sm font-semibold"><Clock className="w-4 h-4" />{format(seconds)}</span>
            <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
          </div>
        </div>
        {!done ? (
          <div className="p-4 grid grid-cols-4 gap-3">
            {cards.map(card => (
              <button key={card.id} onClick={() => flip(card.id)}
                className={`aspect-square rounded-xl text-xs font-medium p-2 transition-all border-2 ${
                  card.matched ? 'bg-green-100 border-green-400 text-green-800' :
                  card.flipped ? 'bg-sage text-white border-sage' :
                  'bg-forest text-forest border-forest hover:border-gold'
                }`}>
                {card.flipped || card.matched ? (
                  <span className="text-center leading-tight">{card.type === 'term' ? card.term : card.definition}</span>
                ) : (
                  <span className="text-gold text-xl">🌾</span>
                )}
              </button>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-forest font-bold text-xl mb-2">All pairs found!</h3>
            <p className="text-earth mb-6">{moves} moves | Time: {format(seconds)}</p>
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
// DIFFICULTY SELECTOR
// ─────────────────────────────────────────────
const DIFFICULTIES: { key: Difficulty; label: string; color: string }[] = [
  { key: 'easy', label: 'Easy', color: 'bg-green-100 text-green-800 hover:bg-green-200' },
  { key: 'medium', label: 'Medium', color: 'bg-blue-100 text-blue-800 hover:bg-blue-200' },
  { key: 'hard', label: 'Hard', color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' },
  { key: 'difficult', label: 'Difficult', color: 'bg-orange-100 text-orange-800 hover:bg-orange-200' },
  { key: 'expert', label: 'Expert', color: 'bg-red-100 text-red-800 hover:bg-red-200' },
];

function DifficultySelector({ gameType, onSelect, onClose }: { gameType: GameType; onSelect: (d: Difficulty) => void; onClose: () => void }) {
  const labels: Record<GameType, string> = {
    quiz: 'Multiple Choice Quiz',
    flashcard: 'Flashcard Flip',
    matching: 'Matching Type',
    enumeration: 'Enumeration',
    computation: 'Computation',
    memory: 'Memory Card Game',
  };
  return (
    <div className="fixed inset-0 z-50 bg-forest/95 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-forest font-bold text-lg">{labels[gameType]}</h3>
          <button onClick={onClose}><X className="w-5 h-5 text-earth/60" /></button>
        </div>
        <p className="text-earth/70 text-sm mb-5">Select difficulty level:</p>
        <div className="space-y-3">
          {DIFFICULTIES.map(d => (
            <button key={d.key} onClick={() => onSelect(d.key)}
              className={`w-full py-3 px-5 rounded-xl font-semibold text-sm transition-all ${d.color}`}>
              {d.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// GAME TYPE CARDS CONFIG
// ─────────────────────────────────────────────
const GAME_TYPES: { type: GameType; title: string; description: string; icon: string; color: string }[] = [
  { type: 'quiz', title: 'Multiple Choice Quiz', description: 'Answer A/B/C/D questions about agroentrepreneurship topics', icon: '📝', color: 'bg-green-50 border-green-200' },
  { type: 'flashcard', title: 'Flashcard Flip', description: 'Review terms and definitions — tap to reveal the answer', icon: '🃏', color: 'bg-blue-50 border-blue-200' },
  { type: 'matching', title: 'Matching Type', description: 'Match agricultural terms to their correct definitions', icon: '🔗', color: 'bg-purple-50 border-purple-200' },
  { type: 'enumeration', title: 'Enumeration', description: 'Select all correct items that belong to a category', icon: '📋', color: 'bg-yellow-50 border-yellow-200' },
  { type: 'computation', title: 'Computation', description: 'Solve farming math problems — profit, yield, cost, and area', icon: '🧮', color: 'bg-orange-50 border-orange-200' },
  { type: 'memory', title: 'Memory Card Game', description: 'Flip and find matching pairs of terms and definitions', icon: '🧠', color: 'bg-pink-50 border-pink-200' },
];

// ─────────────────────────────────────────────
// MAIN QUIZZES PAGE
// ─────────────────────────────────────────────
export function QuizzesPage() {
  const ref = useScrollReveal<HTMLElement>();
  const [pendingGame, setPendingGame] = useState<GameType | null>(null);
  const [activeGame, setActiveGame] = useState<{ type: GameType; difficulty: Difficulty; categoryId?: string } | null>(null);

  const handleDifficultySelect = (difficulty: Difficulty) => {
    if (!pendingGame) return;
    if (pendingGame === 'quiz') {
      setActiveGame({ type: 'quiz', difficulty, categoryId: quizCategories[0]?.id });
    } else {
      setActiveGame({ type: pendingGame, difficulty });
    }
    setPendingGame(null);
  };

  const closeAll = () => { setActiveGame(null); setPendingGame(null); };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-forest py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">Quizzes & Games</h1>
          <p className="text-leaf text-base mb-5">Test your knowledge with interactive challenges across 5 difficulty levels</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['6 Game Types', '5 Difficulty Levels', 'Bilingual Support'].map(s => (
              <span key={s} className="bg-white/10 text-white text-sm px-4 py-2 rounded-full">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Game Type Cards */}
      <section ref={ref} className="bg-cream py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-forest font-display text-2xl font-bold text-center mb-8">Choose a Game Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GAME_TYPES.map(game => (
              <div key={game.type} className={`rounded-xl border-2 p-6 ${game.color} transition-all hover:shadow-md`}>
                <div className="text-4xl mb-4">{game.icon}</div>
                <h3 className="text-forest font-bold text-lg mb-2">{game.title}</h3>
                <p className="text-earth/80 text-sm leading-relaxed mb-5">{game.description}</p>
                <div className="flex flex-wrap gap-1 mb-5">
                  {DIFFICULTIES.map(d => (
                    <span key={d.key} className="text-xs px-2 py-0.5 rounded-full bg-white/60 text-earth/70">{d.label}</span>
                  ))}
                </div>
                <button onClick={() => setPendingGame(game.type)}
                  className="w-full bg-forest text-white font-medium py-2.5 rounded-lg hover:bg-sage transition-colors">
                  Start Game
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty Selector */}
      {pendingGame && (
        <DifficultySelector gameType={pendingGame} onSelect={handleDifficultySelect} onClose={() => setPendingGame(null)} />
      )}

      {/* Active Game Modals */}
      {activeGame?.type === 'quiz' && activeGame.categoryId && (
        <QuizModal categoryId={activeGame.categoryId} difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
      {activeGame?.type === 'flashcard' && (
        <FlashcardGame difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
      {activeGame?.type === 'matching' && (
        <MatchingGame difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
      {activeGame?.type === 'enumeration' && (
        <EnumerationGame difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
      {activeGame?.type === 'computation' && (
        <ComputationGame difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
      {activeGame?.type === 'memory' && (
        <MemoryGame difficulty={activeGame.difficulty} onClose={closeAll} />
      )}
    </main>
  );
}
