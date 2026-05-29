import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { NavBar } from '@/components/layout/NavBar';
import { Footer } from '@/components/layout/Footer';
import { HomePage } from '@/pages/HomePage';
import { ModulesPage } from '@/pages/ModulesPage';
import { QuizzesPage } from '@/pages/QuizzesPage';
import { StudyGuidePage } from '@/pages/StudyGuidePage';
import { ProgressPage } from '@/pages/ProgressPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <div className="min-h-[100dvh] flex flex-col bg-cream">
          <ScrollToTop />
          <NavBar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/modules" element={<ModulesPage />} />
              <Route path="/quizzes" element={<QuizzesPage />} />
              <Route path="/study-guide" element={<StudyGuidePage />} />
              <Route path="/progress" element={<ProgressPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ProgressProvider>
    </LanguageProvider>
  );
}

export default App;
