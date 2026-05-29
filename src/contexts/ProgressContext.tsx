import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

export interface QuizResult {
  category: string;
  score: number;
  total: number;
  time: number;
  date: string;
}

export interface ModuleProgress {
  moduleId: string;
  sectionsRead: number;
  totalSections: number;
}

interface ProgressContextType {
  quizResults: QuizResult[];
  moduleProgress: ModuleProgress[];
  studyTime: number;
  saveQuizResult: (result: QuizResult) => void;
  markSectionRead: (moduleId: string, sectionIndex: number, totalSections: number) => void;
  addStudyTime: (seconds: number) => void;
  getModuleProgress: (moduleId: string) => ModuleProgress | undefined;
}

const STORAGE_KEY = 'agro-ncii-progress';

interface StoredProgress {
  quizResults: QuizResult[];
  moduleProgress: ModuleProgress[];
  studyTime: number;
}

function loadProgress(): StoredProgress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore
  }
  return { quizResults: [], moduleProgress: [], studyTime: 0 };
}

function saveProgress(data: StoredProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}

const ProgressContext = createContext<ProgressContextType>({
  quizResults: [],
  moduleProgress: [],
  studyTime: 0,
  saveQuizResult: () => {},
  markSectionRead: () => {},
  addStudyTime: () => {},
  getModuleProgress: () => undefined,
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);
  const [moduleProgress, setModuleProgress] = useState<ModuleProgress[]>([]);
  const [studyTime, setStudyTime] = useState(0);

  useEffect(() => {
    const data = loadProgress();
    setQuizResults(data.quizResults);
    setModuleProgress(data.moduleProgress);
    setStudyTime(data.studyTime);
  }, []);

  const persist = useCallback(
    (newQuizResults?: QuizResult[], newModuleProgress?: ModuleProgress[], newStudyTime?: number) => {
      const data: StoredProgress = {
        quizResults: newQuizResults ?? quizResults,
        moduleProgress: newModuleProgress ?? moduleProgress,
        studyTime: newStudyTime ?? studyTime,
      };
      saveProgress(data);
    },
    [quizResults, moduleProgress, studyTime]
  );

  const saveQuizResult = useCallback(
    (result: QuizResult) => {
      const updated = [...quizResults, result];
      setQuizResults(updated);
      persist(updated, undefined, undefined);
    },
    [quizResults, persist]
  );

  const markSectionRead = useCallback(
    (moduleId: string, sectionIndex: number, totalSections: number) => {
      setModuleProgress((prev) => {
        const existing = prev.find((m) => m.moduleId === moduleId);
        let updated: ModuleProgress[];
        if (existing) {
          const maxRead = Math.max(existing.sectionsRead, sectionIndex + 1);
          updated = prev.map((m) =>
            m.moduleId === moduleId ? { ...m, sectionsRead: maxRead } : m
          );
        } else {
          updated = [...prev, { moduleId, sectionsRead: sectionIndex + 1, totalSections }];
        }
        persist(undefined, updated, undefined);
        return updated;
      });
    },
    [persist]
  );

  const addStudyTime = useCallback(
    (seconds: number) => {
      const updated = studyTime + seconds;
      setStudyTime(updated);
      persist(undefined, undefined, updated);
    },
    [studyTime, persist]
  );

  const getModuleProgress = useCallback(
    (moduleId: string) => {
      return moduleProgress.find((m) => m.moduleId === moduleId);
    },
    [moduleProgress]
  );

  return (
    <ProgressContext.Provider
      value={{
        quizResults,
        moduleProgress,
        studyTime,
        saveQuizResult,
        markSectionRead,
        addStudyTime,
        getModuleProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  return useContext(ProgressContext);
}
