import { useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { CourseOverviewSection } from '@/components/home/CourseOverviewSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { ModuleCategoriesSection } from '@/components/home/ModuleCategoriesSection';
import { StudyModesSection } from '@/components/home/StudyModesSection';
import { useNavigate } from 'react-router-dom';

// ─────────────────────────────────────────────
// INTERACTIVE PREVIEW SECTION
// ─────────────────────────────────────────────
function InteractivePreviewSection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'quiz' | 'flashcard'>('quiz');

  // Sample quiz question
  const [selected, setSelected] = useState<number | null>(null);
  const quizQuestion = {
    question: 'What is the primary goal of Agroentrepreneurship?',
    options: [
      'To generate profit while sustaining agricultural productivity',
      'To focus only on crop production',
      'To eliminate the need for market research',
      'To reduce the number of farm workers',
    ],
    correct: 0,
  };

  // Sample flashcard
  const [flipped, setFlipped] = useState(false);
  const flashcard = {
    front: 'What is Market Mapping?',
    back: 'A visual representation of all market players, their relationships, and the flow of products from producer to consumer.',
  };

  const handleQuizSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const resetQuiz = () => setSelected(null);
  const resetCard = () => setFlipped(false);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-gold/20 text-forest text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
            Try it now — no sign up needed
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-forest mb-3">
            See the Interactivity in Action
          </h2>
          <p className="text-earth/70 text-sm md:text-base max-w-xl mx-auto">
            Get a taste of what's inside — a real quiz question and a real flashcard from the course.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => { setActiveTab('quiz'); resetQuiz(); }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'quiz'
                ? 'bg-forest text-white shadow'
                : 'bg-mist text-earth hover:bg-sage/20'
            }`}
          >
            📝 Quiz Question
          </button>
          <button
            onClick={() => { setActiveTab('flashcard'); resetCard(); }}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeTab === 'flashcard'
                ? 'bg-forest text-white shadow'
                : 'bg-mist text-earth hover:bg-sage/20'
            }`}
          >
            🃏 Flashcard
          </button>
        </div>

        {/* Quiz Preview */}
        {activeTab === 'quiz' && (
          <div className="bg-cream rounded-2xl border border-sage/20 shadow-sm p-6 md:p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-semibold text-sage uppercase tracking-wide">Sample Question</span>
              {selected !== null && (
                <button onClick={resetQuiz} className="text-xs text-earth/60 hover:text-forest underline">
                  Reset
                </button>
              )}
            </div>
            <p className="text-forest font-semibold text-base md:text-lg mb-5 leading-relaxed">
              {quizQuestion.question}
            </p>
            <div className="space-y-3">
              {quizQuestion.options.map((opt, idx) => {
                let cls = 'bg-white border-2 border-transparent text-forest hover:border-sage cursor-pointer';
                if (selected !== null) {
                  if (idx === quizQuestion.correct) cls = 'bg-green-50 border-2 border-green-500 text-green-800 cursor-default';
                  else if (idx === selected) cls = 'bg-red-50 border-2 border-red-400 text-red-700 cursor-default';
                  else cls = 'bg-white border-2 border-transparent text-earth/40 cursor-default';
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizSelect(idx)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${cls}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <p className={`mt-4 text-sm font-medium ${selected === quizQuestion.correct ? 'text-green-600' : 'text-red-500'}`}>
                {selected === quizQuestion.correct ? '✅ Correct! Well done.' : '❌ Not quite — the correct answer is A.'}
              </p>
            )}
          </div>
        )}

        {/* Flashcard Preview */}
        {activeTab === 'flashcard' && (
          <div className="max-w-2xl mx-auto">
            <div
              onClick={() => setFlipped(!flipped)}
              className="cursor-pointer bg-cream rounded-2xl border-2 border-sage/20 shadow-sm p-8 md:p-12 text-center min-h-[200px] flex flex-col items-center justify-center transition-all hover:border-sage hover:shadow-md"
            >
              <span className="text-xs font-semibold text-sage uppercase tracking-wide mb-4">
                {flipped ? 'Answer' : 'Term — tap to flip'}
              </span>
              <p className="text-forest font-semibold text-lg md:text-xl leading-relaxed">
                {flipped ? flashcard.back : flashcard.front}
              </p>
              {!flipped && (
                <div className="mt-6 flex items-center gap-2 text-earth/40 text-xs">
                  <span>👆</span><span>Tap the card to reveal the answer</span>
                </div>
              )}
            </div>
            <div className="text-center mt-4">
              <button onClick={resetCard} className="text-xs text-earth/50 hover:text-forest underline">
                Reset card
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-10">
          <p className="text-earth/60 text-sm mb-4">Ready for the full experience?</p>
          <button
            onClick={() => navigate('/quizzes')}
            className="bg-forest text-white font-semibold px-8 py-3 rounded-xl hover:bg-sage transition-colors shadow"
          >
            Start Practicing Now →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// HOME PAGE
// ─────────────────────────────────────────────
export function HomePage() {
  return (
    <main>
      <HeroSection />
      <CourseOverviewSection />
      <InteractivePreviewSection />
      <TestimonialSection />
      <ModuleCategoriesSection />
      <StudyModesSection />
    </main>
  );
                                        }
