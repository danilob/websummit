import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Star } from 'lucide-react';


interface DifferentialsSectionProps {
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

export function DifferentialsSection({ activeSubmenu }: DifferentialsSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const content = {
    
    diferrentials_company: {
      title: 'Impacto nos Pacientes',
      issues: t('company_issues'),
      keywords: t('company_keywords'),
    },
  };

  if (activeSubmenu === 'overview') {
    const desc = t('differentialsDesc');
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

  if (activeSubmenu === 'main') {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-1 gap-4">
          {content.diferrentials_company.issues.map((issue, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <Star className="text-[#DF5D00] flex-shrink-0" size={24} />
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={issue} keywords={content.diferrentials_company.keywords} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSubmenu === 'team') {
    const desc = t('teamDesc');
    return (
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="/WhatsApp Image 2025-11-09 at 18.48.27.jpeg"
              alt="Equipe H9IA"
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
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
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
