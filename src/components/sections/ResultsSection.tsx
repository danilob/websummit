import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';

interface ResultsSectionProps {
  activeSubmenu: string;
}

export function ResultsSection({ activeSubmenu }: ResultsSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const content = {
    costs: {
      title: 'Impacto nos Custos',
      stats: t('stats_results'),
    },
    
  };

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

  if (activeSubmenu === 'stats_results') {
    return (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          {content.costs.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <div className="text-4xl font-bold text-[#DF5D00] mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
