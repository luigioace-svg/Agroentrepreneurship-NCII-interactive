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
import { SignInPage } from '@/pages/SignInPage';
import { useAuth } from '@/contexts/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Protects the Quizzes route — shows sign-in page if not logged in
function ProtectedQuizzesRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-forest flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl mb-4">🌾</div>
          <p className="text-white/70 text-sm">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <SignInPage />;
  }

  return <QuizzesPage />;
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
              <Route path="/quizzes" element={<ProtectedQuizzesRoute />} />
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
