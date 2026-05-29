import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/shared/LanguageToggle';
import { Menu, X, Leaf } from 'lucide-react';

const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.modules', path: '/modules' },
  { key: 'nav.quizzes', path: '/quizzes' },
  { key: 'nav.studyGuide', path: '/study-guide' },
  { key: 'nav.progress', path: '/progress' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled
            ? 'bg-forest/95 backdrop-blur-md shadow-md'
            : 'bg-forest/95'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <Leaf className="w-6 h-6 text-gold" />
            <span className="font-display font-bold text-white text-lg">
              AgroEntrepreneurship NCII
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-white/90 hover:text-gold'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <LanguageToggle />
            </div>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-forest flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'text-gold'
                  : 'text-white hover:text-gold'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
          <div className="mt-4">
            <LanguageToggle />
          </div>
        </div>
      )}
    </>
  );
}
