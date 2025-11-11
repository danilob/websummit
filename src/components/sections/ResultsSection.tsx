import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';

interface ResultsSectionProps {
  activeSubmenu: string;
}

export function ResultsSection({ activeSubmenu }: ResultsSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  if (activeSubmenu === 'overview') {
    const desc = t('resultsDesc');
    return (
      <div className="space-y-8">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {typeof desc === 'string' ? desc : (
            <>
              {desc.text}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight}</span>
              {desc.text2}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight2}</span>
              {desc.text3}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight3}</span>
              {desc.text4}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight4}</span>
              {desc.text5}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight5}</span>
              {desc.text6}
              <span className="text-[#DF5D00] font-semibold">{desc.highlight6}</span>
              {desc.text7}
            </>
          )}
        </p>
      </div>
    );
  }

  return null;
}
