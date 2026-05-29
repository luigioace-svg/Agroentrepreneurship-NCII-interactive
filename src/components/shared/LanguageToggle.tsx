import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggle = () => {
    setLanguage(language === 'en' ? 'tl' : 'en');
  };

  return (
    <button
      onClick={toggle}
      className="relative flex items-center w-20 h-8 rounded-full bg-mist border border-leaf/50 cursor-pointer transition-colors"
      aria-label="Toggle language"
    >
      <span
        className="absolute left-1 top-1 w-7 h-6 rounded-full bg-gold shadow-sm transition-transform duration-300 ease-in-out"
        style={{
          transform: language === 'tl' ? 'translateX(40px)' : 'translateX(0)',
        }}
      />
      <span
        className={`absolute left-2 text-xs font-semibold z-10 transition-colors ${
          language === 'en' ? 'text-forest' : 'text-forest/50'
        }`}
      >
        EN
      </span>
      <span
        className={`absolute right-2 text-xs font-semibold z-10 transition-colors ${
          language === 'tl' ? 'text-forest' : 'text-forest/50'
        }`}
      >
        TL
      </span>
    </button>
  );
}
