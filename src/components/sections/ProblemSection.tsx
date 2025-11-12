import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';

interface ProblemSectionProps {
  activeSubmenu: string;
}

const HighlightedText = ({ text, keywords }: { text: string; keywords: string[] }) => {
  const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));

  return (
    <>
      {parts.map((part, index) => {
        const isKeyword = keywords.some(kw => kw.toLowerCase() === part.toLowerCase());
        return isKeyword ? (
          <span key={index} className="text-[#DF5D00] font-semibold">{part}</span>
        ) : (
          <span key={index}>{part}</span>
        );
      })}
    </>
  );
};

export function ProblemSection({ activeSubmenu }: ProblemSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const content = {
    overview: {
      title: t('problemTitle'),
      description: t('problemDesc'),
      image: 'https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    inefficiency: {
      title: 'Ineficiências no Fluxo',
      points: t('points'),
      keywords: t('keywords_points'),
    },
    costs: {
      title: 'Impacto nos Custos',
      stats: t('stats'),
    },
    patients: {
      title: 'Impacto nos Pacientes',
      issues: t('patient_issues'),
      keywords: t('patient_keywords'),
    },
  };

  if (activeSubmenu === 'overview') {
    const desc = content.overview.description;
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
            </>
          )}
        </p>
      </div>
    );
  }

  if (activeSubmenu === 'inefficiency') {
    return (
      <div className="space-y-6">
        <div className="grid gap-4">
          {content.inefficiency.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <AlertCircle className="text-[#DF5D00] flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={point} keywords={content.inefficiency.keywords} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSubmenu === 'costs') {
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

  if (activeSubmenu === 'patients') {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-1 gap-6">
          {content.patients.issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              {/* <FlagTriangleRight className="text-[#DF5D00] flex-shrink-0" size={28} /> */}
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={issue} keywords={content.patients.keywords} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}
