import { useLanguage } from '../hooks/useLanguage';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'pt', flag: '🇵🇹', label: 'PT' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
    { code: 'en', flag: '🇬🇧', label: 'EN' },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
        <span className="text-2xl">{languages.find(l => l.code === language)?.flag}</span>
      </button>

      <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'pt' | 'es' | 'en')}
            className={`w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg flex items-center justify-center ${
              language === lang.code ? 'bg-gray-100 dark:bg-gray-700' : ''
            }`}
          >
            <span className="text-2xl">{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
