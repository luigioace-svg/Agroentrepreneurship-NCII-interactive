import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { modules } from '@/data/moduleContent';
import { Search, Lightbulb, Printer, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

// Build flashcards from module content
const flashcards = modules.flatMap((mod) =>
  mod.sections.flatMap((section) => {
    const cards: { term: string; definition: string; termTl: string; definitionTl: string }[] = [];
    // Use the first paragraph as definition
    if (section.content[0]) {
      cards.push({
        term: section.title,
        definition: section.content[0],
        termTl: section.titleTl,
        definitionTl: section.contentTl[0],
      });
    }
    // Add key terms from exam tips
    if (section.examTips) {
      section.examTips.forEach((tip, i) => {
        const tl = section.examTipsTl?.[i];
        // Extract a key concept from the tip
        const shortTip = tip.length > 80 ? tip.substring(0, 80) + '...' : tip;
        cards.push({
          term: section.title + ` (Tip ${i + 1})`,
          definition: shortTip,
          termTl: section.titleTl + ` (Tip ${i + 1})`,
          definitionTl: tl ? (tl.length > 80 ? tl.substring(0, 80) + '...' : tl) : shortTip,
        });
      });
    }
    return cards;
  })
);

const tocItems = [
  { id: 'intro', label: 'Introduction', labelTl: 'Pagpapakilala' },
  { id: 'market', label: 'Market Opportunities', labelTl: 'Mga Oportunidad sa Merkado' },
  { id: 'production', label: 'Farm Production', labelTl: 'Produksyon sa Bukid' },
  { id: 'finance', label: 'Financial Management', labelTl: 'Pamamahala ng Pananalapi' },
  { id: 'marketing', label: 'Marketing Produce', labelTl: 'Pagmemerkado ng Produktong Agrikultural' },
  { id: 'safety', label: 'Safety & Competencies', labelTl: 'Kaligtasan at Kasanayan' },
];

export function StudyGuidePage() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // Check URL param for flashcard mode
  useEffect(() => {
    const mode = searchParams.get('mode');
    setFlashcardMode(mode === 'flashcards');
  }, [searchParams]);

  const toggleFlashcardMode = () => {
    if (flashcardMode) {
      setSearchParams({});
    } else {
      setSearchParams({ mode: 'flashcards' });
    }
    setFlashcardMode(!flashcardMode);
    setCurrentCard(0);
    setFlipped(false);
  };

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return modules;
    const q = searchQuery.toLowerCase();
    return modules
      .map((mod) => ({
        ...mod,
        sections: mod.sections.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.content.some((c) => c.toLowerCase().includes(q)) ||
            s.titleTl.toLowerCase().includes(q) ||
            s.contentTl.some((c) => c.toLowerCase().includes(q))
        ),
      }))
      .filter((mod) => mod.sections.length > 0);
  }, [searchQuery]);

  const nextCard = () => {
    setFlipped(false);
    setTimeout(() => setCurrentCard((prev) => (prev + 1) % flashcards.length), 200);
  };

  const prevCard = () => {
    setFlipped(false);
    setTimeout(
      () => setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length),
      200
    );
  };

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="bg-mist py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-forest mb-3">
            {t('studyGuide.title')}
          </h1>
          <p className="text-earth text-base mb-5">{t('studyGuide.subtitle')}</p>
          <div className="max-w-md mx-auto relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sage" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('studyGuide.search')}
              className="w-full pl-10 pr-4 py-3 bg-white border border-leaf/50 rounded-lg text-forest placeholder:text-earth/50 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={toggleFlashcardMode}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                flashcardMode
                  ? 'bg-gold text-forest'
                  : 'bg-white text-forest border border-leaf/50 hover:bg-mist'
              }`}
            >
              <RotateCcw className="w-4 h-4" />
              {flashcardMode ? 'Study Guide View' : 'Flashcard Mode'}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-white text-forest border border-leaf/50 hover:bg-mist transition-colors no-print"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {flashcardMode ? (
            /* Flashcard Mode */
            <div className="max-w-lg mx-auto text-center">
              <p className="text-sage text-sm mb-4">
                Card {currentCard + 1} of {flashcards.length}
              </p>

              <div
                className={`flip-card cursor-pointer mx-auto ${flipped ? 'flipped' : ''}`}
                style={{ width: '100%', maxWidth: '500px', height: '280px' }}
                onClick={() => setFlipped(!flipped)}
              >
                <div className="flip-card-inner relative w-full h-full">
                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 bg-white rounded-xl shadow-md flex items-center justify-center p-6">
                    <h3 className="font-display text-xl font-semibold text-forest text-center">
                      {language === 'tl'
                        ? flashcards[currentCard]?.termTl
                        : flashcards[currentCard]?.term}
                    </h3>
                  </div>
                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 bg-mist rounded-xl shadow-md flex items-center justify-center p-6">
                    <p className="text-earth text-base leading-relaxed text-center">
                      {language === 'tl'
                        ? flashcards[currentCard]?.definitionTl
                        : flashcards[currentCard]?.definition}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-earth/60 text-xs mt-3 mb-5">Tap card to flip</p>

              <div className="flex justify-center gap-4">
                <button
                  onClick={prevCard}
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-sage text-white rounded-lg hover:bg-forest transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  onClick={nextCard}
                  className="inline-flex items-center gap-1 px-5 py-2.5 bg-sage text-white rounded-lg hover:bg-forest transition-colors"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Study Guide View */
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar TOC */}
              <aside className="lg:w-64 shrink-0">
                <div className="lg:sticky lg:top-20 bg-white rounded-xl shadow-sm p-5">
                  <h3 className="text-forest font-semibold mb-3">Contents</h3>
                  <ul className="space-y-1">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveSection(item.id);
                            document
                              .getElementById(`module-${item.id}`)
                              ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }}
                          className={`w-full text-left text-sm py-2 px-2 rounded transition-colors ${
                            activeSection === item.id
                              ? 'text-sage font-semibold bg-mist border-l-3 border-sage'
                              : 'text-earth hover:text-sage hover:pl-3'
                          }`}
                        >
                          {language === 'tl' ? item.labelTl : item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-8">
                {filteredModules.map((mod) => (
                  <div key={mod.id} id={`module-${mod.id}`}>
                    <h2 className="font-display text-2xl font-bold text-forest mb-4">
                      {language === 'tl' ? mod.titleTl : mod.title}
                    </h2>

                    {mod.sections.map((section, sIdx) => (
                      <div key={sIdx} className="mb-6">
                        <h3 className="text-forest font-semibold text-lg mb-2">
                          {language === 'tl' ? section.titleTl : section.title}
                        </h3>

                        {(language === 'tl' ? section.contentTl : section.content).map(
                          (para, pIdx) => (
                            <p key={pIdx} className="text-earth text-[15px] leading-relaxed mb-2">
                              {para}
                            </p>
                          )
                        )}

                        {section.examTips && section.examTips.length > 0 && (
                          <div className="bg-mist border-l-4 border-gold rounded-r-lg p-4 mt-3">
                            <div className="flex items-center gap-2 mb-2">
                              <Lightbulb className="w-4 h-4 text-gold" />
                              <span className="text-gold text-xs font-semibold uppercase tracking-wide">
                                Exam Tip
                              </span>
                            </div>
                            <ul className="space-y-1.5">
                              {(language === 'tl' ? section.examTipsTl : section.examTips)?.map(
                                (tip, tIdx) => (
                                  <li
                                    key={tIdx}
                                    className="text-forest text-sm leading-relaxed flex gap-2"
                                  >
                                    <span className="text-gold shrink-0">•</span>
                                    {tip}
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}

                    {mod !== filteredModules[filteredModules.length - 1] && (
                      <hr className="border-mist my-6" />
                    )}
                  </div>
                ))}

                {filteredModules.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-earth/60 text-lg">
                      No results found for &ldquo;{searchQuery}&rdquo;
                    </p>
                    <p className="text-earth/40 text-sm mt-1">Try different keywords</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
