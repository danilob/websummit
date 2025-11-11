import { useState, useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { DarkModeProvider, useDarkMode } from './hooks/useDarkMode';
import { useLanguage } from './hooks/useLanguage';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { DarkModeToggle } from './components/DarkModeToggle';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { DetailView } from './components/DetailView';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { ResultsSection } from './components/sections/ResultsSection';
import { DifferentialsSection } from './components/sections/DifferentialsSection';
import {
  Target,
  Goal,
  LandPlot,
  Handshake,
  FileText,
  TrendingDown,
  Users,
  AlertCircle,
  Network,
  Zap,
  Shield,
  UsersRound,
} from 'lucide-react';

function AppContent() {
  const { t, language, setLanguage } = useLanguage();
  const { isDark: isDarkMode, toggleDarkMode } = useDarkMode();
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeSubmenu, setActiveSubmenu] = useState<string>('overview');

  const handleNavigate = (section: string) => {
    setCurrentView(section);
    setActiveSubmenu('overview');
  };

  const handleBack = () => {
    setCurrentView('home');
    setActiveSubmenu('overview');
  };

  const sections = {
    problem: {
      id: 'problem',
      title: t('problemTitle'),
      icon: Target,
      submenus: [
        { id: 'overview', icon: FileText, label: 'Visão Geral' },
        { id: 'inefficiency', icon: AlertCircle, label: 'Ineficiências' },
        { id: 'costs', icon: TrendingDown, label: 'Custos' },
        { id: 'patients', icon: Users, label: 'Pacientes' },
      ],
    },
    solution: {
      id: 'solution',
      title: t('solutionTitle'),
      icon: Goal,
      submenus: [
        { id: 'overview', icon: FileText, label: 'Visão Geral' },
        { id: 'platform', icon: Network, label: 'Plataforma' },
        { id: 'workflow', icon: Zap, label: 'Fluxo' },
        // { id: 'technology', icon: Shield, label: 'Tecnologia' },
      ],
    },
    results: {
      id: 'results',
      title: t('resultsTitle'),
      icon: LandPlot,
      submenus: [
        { id: 'overview', icon: FileText, label: 'Visão Geral' },
      ],
    },
    differentials: {
      id: 'differentials',
      title: t('differentialsTitle'),
      icon: Handshake,
      submenus: [
        { id: 'overview', icon: FileText, label: 'Visão Geral' },
        { id: 'team', icon: UsersRound, label: 'Equipe Especializada' },
      ],
    },
  };

  const menuOrder = ['home', 'problem', 'solution', 'results', 'differentials'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'm' || e.key === 'M') {
        toggleDarkMode();
      } else if (e.key === 'l' || e.key === 'L') {
        const languages: Array<'pt' | 'es' | 'en'> = ['pt', 'es', 'en'];
        const currentIndex = languages.indexOf(language);
        const nextIndex = (currentIndex + 1) % languages.length;
        setLanguage(languages[nextIndex]);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const currentIndex = menuOrder.indexOf(currentView);
        let newIndex: number;

        if (e.key === 'ArrowLeft') {
          newIndex = currentIndex > 0 ? currentIndex - 1 : menuOrder.length - 1;
        } else {
          newIndex = currentIndex < menuOrder.length - 1 ? currentIndex + 1 : 0;
        }

        const newView = menuOrder[newIndex];
        if (newView === 'home') {
          handleBack();
        } else {
          handleNavigate(newView);
        }
      } else if ((e.key === 'ArrowUp' || e.key === 'ArrowDown') && currentView !== 'home') {
        const currentSection = sections[currentView as keyof typeof sections];
        if (!currentSection) return;

        const submenus = currentSection.submenus;
        const currentSubmenuIndex = submenus.findIndex(sub => sub.id === activeSubmenu);

        if (e.key === 'ArrowUp') {
          const newIndex = currentSubmenuIndex > 0 ? currentSubmenuIndex - 1 : submenus.length - 1;
          setActiveSubmenu(submenus[newIndex].id);
        } else {
          const newIndex = currentSubmenuIndex < submenus.length - 1 ? currentSubmenuIndex + 1 : 0;
          setActiveSubmenu(submenus[newIndex].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentView, activeSubmenu, language, toggleDarkMode, setLanguage]);

  if (currentView !== 'home') {
    const section = sections[currentView as keyof typeof sections];
    if (section) {
      return (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 p-6 flex items-center justify-between">
            <img
              src={isDarkMode ? "/darkmode-higia.png" : "/g192.png"}
              alt="Higia Logo"
              className="w-24 h-auto"
            />
            <div className="flex items-center gap-3">
              <DarkModeToggle />
              <LanguageSwitcher />
            </div>
          </header>
          <DetailView
            sectionId={section.id}
            title={section.title}
            icon={section.icon}
            submenus={section.submenus}
            activeSubmenu={activeSubmenu}
            onSubmenuChange={setActiveSubmenu}
            onBack={handleBack}
            onNavigate={handleNavigate}
            currentView={currentView}
          >
            {currentView === 'problem' && <ProblemSection activeSubmenu={activeSubmenu} />}
            {currentView === 'solution' && <SolutionSection activeSubmenu={activeSubmenu} />}
            {currentView === 'results' && <ResultsSection activeSubmenu={activeSubmenu} />}
            {currentView === 'differentials' && <DifferentialsSection activeSubmenu={activeSubmenu} />}
          </DetailView>
        </>
      );
    }
  }

  return (
    <div className="h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden relative">
      <div className="fixed bottom-0 left-0 w-[350px] pointer-events-none z-0 animate-slide-up">
        <img
          src="/differentials-tech.png"
          alt=""
          className="w-full h-full object-contain"
          style={{ objectPosition: 'left bottom' }}
        />
      </div>

      <header className="fixed top-0 right-0 z-50 p-6">
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
      </header>

      <main className="h-screen flex flex-col overflow-hidden relative z-10">
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <Hero />
        </div>
        <div className="py-12  flex-shrink-0">
          <Navigation onNavigate={handleNavigate} />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </DarkModeProvider>
  );
}

export default App;
