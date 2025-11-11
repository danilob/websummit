import { Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-lg transition-all duration-300 ${
        isDark
          ? 'text-yellow-400 hover:bg-gray-800'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
      aria-label="Toggle dark mode"
    >
      <Moon size={24} className={isDark ? 'text-[#DF5D00]' : ''} />
    </button>
  );
}
