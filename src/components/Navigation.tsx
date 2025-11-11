import { Target, Goal, LandPlot, Handshake, Home } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';


interface NavigationProps {
  onNavigate: (section: string) => void;
  currentView?: string;
}

export function Navigation({ onNavigate, currentView }: NavigationProps) {
  const { t } = useLanguage();

  const menuItems = [
    { id: 'problem', icon: Target },
    { id: 'solution', icon: Goal },
    { id: 'results', icon: LandPlot },
    { id: 'differentials', icon: Handshake },
  ];

  return (
    <nav className="flex justify-center gap-12 md:gap-16">
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = currentView === item.id;
        const DisplayIcon = isActive ? Home : Icon;
        return (
          <button
            key={item.id}
            onClick={() => isActive ? onNavigate('home') : onNavigate(item.id)}
            className="group relative"
            title={isActive ? 'Home' : t(item.id)}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 rounded-full"
                 style={{
                   animation: 'ripple 2.5s ease-out infinite',
                   animationDelay: `${index * 0.3}s`
                 }}
            />
            <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 transform shadow-md flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-[#DF5D00] hover:scale-110 hover:shadow-lg ${
              isActive ? 'scale-110 shadow-lg' : ''
            }`}>
              <DisplayIcon
                size={22}
                className={`transition-colors duration-300 md:w-7 md:h-7 text-[#DF5D00] group-hover:text-white`}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
}
