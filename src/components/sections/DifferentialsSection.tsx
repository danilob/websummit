import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';

interface DifferentialsSectionProps {
  activeSubmenu: string;
}

export function DifferentialsSection({ activeSubmenu }: DifferentialsSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

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
