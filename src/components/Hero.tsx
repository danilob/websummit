import { useLanguage } from '../hooks/useLanguage';
import { useDarkMode } from '../hooks/useDarkMode';

export function Hero() {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  return (
    <div className="text-center w-full max-w-3xl mx-auto px-4">
      <div className="mb-6">
        <img
          src={isDarkMode ? "/darkmode-higia.png" : "/g192.png"}
          alt="Higia Logo"
          className="w-full max-w-md md:max-w-lg h-auto mx-auto"
        />
      </div>

      <div className="relative max-w-xl mx-auto">
        <div className="absolute -left-3 md:-left-6 -top-1 md:-top-2 text-3xl md:text-5xl text-[#DF5D00] opacity-50 leading-none">"</div>
        <div className="absolute -right-3 md:-right-6 -bottom-1 md:-bottom-2 text-3xl md:text-5xl text-[#DF5D00] opacity-50 leading-none">"</div>

        <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 px-5 md:px-6 py-3 md:py-4 border-2 border-[#DF5D00] rounded-lg md:rounded-xl bg-white dark:bg-gray-800">
          {t('tagline')}
        </p>
      </div>
    </div>
  );
}
