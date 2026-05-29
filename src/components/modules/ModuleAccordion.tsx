import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProgress } from '@/contexts/ProgressContext';
import { modules } from '@/data/moduleContent';
import {
  Sprout,
  BarChart3,
  Wheat,
  Coins,
  Megaphone,
  Shield,
  ChevronDown,
  Lightbulb,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  BarChart3,
  Wheat,
  Coins,
  Megaphone,
  Shield,
};

export function ModuleAccordion() {
  const { language } = useLanguage();
  const { markSectionRead } = useProgress();
  const [openModule, setOpenModule] = useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const handleModuleToggle = (moduleId: string) => {
    setOpenModule((prev) => (prev === moduleId ? null : moduleId));
    setOpenSection(null);
  };

  const handleSectionToggle = (moduleId: string, sectionIdx: number, totalSections: number) => {
    const key = `${moduleId}-${sectionIdx}`;
    setOpenSection((prev) => (prev === key ? null : key));
    markSectionRead(moduleId, sectionIdx, totalSections);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-3">
      {modules.map((mod) => {
        const Icon = iconMap[mod.icon] || Sprout;
        const isOpen = openModule === mod.id;

        return (
          <div key={mod.id} className="rounded-lg">
            {/* Module Header */}
            <button
              onClick={() => handleModuleToggle(mod.id)}
              className={`w-full flex items-center justify-between bg-white shadow-sm hover:shadow-md rounded-lg px-5 py-4 transition-all ${
                isOpen ? 'rounded-b-none' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-mist flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-sage" />
                </div>
                <span className="text-forest font-semibold text-base text-left">
                  {language === 'tl' ? mod.titleTl : mod.title}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-sage shrink-0 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Module Content */}
            <div
              className={`overflow-hidden transition-all duration-400 ${
                isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-white rounded-b-lg px-5 pb-5 pt-2 space-y-3">
                <p className="text-earth/80 text-sm px-1">
                  {language === 'tl' ? mod.descriptionTl : mod.description}
                </p>

                {/* Sections */}
                {mod.sections.map((section, sIdx) => {
                  const sectionKey = `${mod.id}-${sIdx}`;
                  const isSectionOpen = openSection === sectionKey;

                  return (
                    <div key={sectionKey} className="border border-mist rounded-lg overflow-hidden">
                      <button
                        onClick={() => handleSectionToggle(mod.id, sIdx, mod.sections.length)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-mist/50 hover:bg-mist transition-colors text-left"
                      >
                        <span className="text-forest font-medium text-sm">
                          {language === 'tl' ? section.titleTl : section.title}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-sage shrink-0 transition-transform ${
                            isSectionOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isSectionOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 py-4 space-y-3">
                          {(language === 'tl' ? section.contentTl : section.content).map(
                            (paragraph, pIdx) => (
                              <p key={pIdx} className="text-earth text-sm leading-relaxed">
                                {paragraph}
                              </p>
                            )
                          )}

                          {/* Exam Tips */}
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
