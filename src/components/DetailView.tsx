import { LucideIcon, Home } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Navigation } from './Navigation';

interface Submenu {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface DetailViewProps {
  sectionId: string;
  title: string;
  icon: LucideIcon;
  submenus: Submenu[];
  activeSubmenu: string;
  onSubmenuChange: (submenuId: string) => void;
  onBack: () => void;
  onNavigate: (section: string) => void;
  currentView: string;
  children: React.ReactNode;
}

export function DetailView({
  sectionId,
  title,
  icon: Icon,
  submenus,
  activeSubmenu,
  onSubmenuChange,
  onBack,
  onNavigate,
  currentView,
  children,
}: DetailViewProps) {
  const { t } = useLanguage();

  return (
    <div className="h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col overflow-hidden relative">
      {sectionId === 'problem' && (
        <div className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none z-0 animate-slide-up">
          <img
            src="/Generatedimage_1761850462922.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {sectionId === 'solution' && (
        <div className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none z-0 animate-slide-up">
          <img
            src="/Generatedimage_1762397724530-removebg-preview.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {sectionId === 'results' && (
        <div className="fixed bottom-0 left-0 w-96 h-96 pointer-events-none z-0 animate-slide-up">
          <img
            src="/results-calendar.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      )}
      {sectionId === 'differentials' && (
        <div className="fixed bottom-0 left-0 w-[350px] h-[ pointer-events-none z-0 animate-slide-up">
          <img
            src="/differentials-tech.png"
            alt=""
            className="w-full h-full object-contain"
            style={{ objectPosition: 'left bottom' }}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        <div className="flex-shrink-0 px-4 pt-8 md:pt-12 pb-6 ml-auto" style={{ width: 'calc(100% - 420px)', paddingLeft: '2rem', paddingRight: '8rem' }}>
          <div className="flex items-center gap-4">
            <Icon size={40} className="text-[#DF5D00] flex-shrink-0" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-8 md:pb-12 ml-auto" style={{ width: 'calc(100% - 420px)', paddingLeft: '2rem', paddingRight: '6rem' }}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
            {children}
          </div>
        </div>

        <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-40">
          {submenus.map((submenu) => {
            const SubmenuIcon = submenu.icon;
            const isActive = activeSubmenu === submenu.id;

            return (
              <button
                key={submenu.id}
                onClick={() => onSubmenuChange(submenu.id)}
                className={`w-7 h-7 rounded-full border-2 transition-all duration-300 flex items-center justify-center group shadow-md ${
                  isActive
                    ? 'bg-[#DF5D00] border-[#DF5D00] scale-110'
                    : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 hover:border-[#DF5D00]'
                }`}
                title={submenu.label}
              >
                <SubmenuIcon
                  size={12}
                  className={`transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-300 group-hover:text-[#DF5D00]'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="py-12">
        <Navigation onNavigate={onNavigate} currentView={currentView} />
      </div>
    </div>
  );
}
