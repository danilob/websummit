import { Goal, Network, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';

interface SolutionSectionProps {
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

export function SolutionSection({ activeSubmenu }: SolutionSectionProps) {
  const { t } = useLanguage();
  const { isDarkMode } = useDarkMode();

  const content = {
    overview: {
      title: t('solutionTitle'),
      description: t('solutionDesc'),
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    platform: {
      title: t('solution_title'),
      features: t('solution_features'),
      keywords: t('solution_keywords'),
    },
    workflow: {
      title: 'Fluxo de Trabalho Otimizado',
      steps: t('workflow_steps'),
      keywords: t('workflow_keywords'),
    },
    technology: {
      title: 'Tecnologia de Ponta',
      techs: [
        { icon: Network, title: 'Cloud Computing', description: 'Infraestrutura escalável e segura' },
        { icon: Zap, title: 'IA & Machine Learning', description: 'Análise inteligente e triagem automatizada' },
        { icon: Shield, title: 'Segurança', description: 'Criptografia end-to-end e compliance total' },
      ],
      keywords: ['escalável', 'segura', 'inteligente', 'automatizada', 'Criptografia', 'compliance'],
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

  if (activeSubmenu === 'platform') {
    return (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {content.platform.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-[#DF5D00]"
            >
              <div className="w-8 h-8 rounded-full bg-[#DF5D00] text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={feature} keywords={content.platform.keywords} />
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeSubmenu === 'workflow') {
    return (
      
      <div className="space-y-2 relative">
  {/* Linha vertical */}
  <div className="absolute left-[30px] top-0 bottom-1 w-1 bg-[#DF5D00] z-0 hidden md:block"></div>

  {/* Passos */}
  <div className="space-y-8 relative z-10">
    {content.workflow.steps.map((item, index) => (
      <div key={index} className="flex items-start gap-6 relative">
        {/* Círculo com número */}
        <div className="w-16 h-16 rounded-full bg-[#DF5D00] text-white flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0 z-20 relative">
          {item.step}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 pt-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {item.title}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
            <HighlightedText text={item.description} keywords={content.workflow.keywords} />
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

    );
  }

  // if (activeSubmenu === 'technology') {
  //   return (
  //     <div className="space-y-8">
  //       <div className="grid md:grid-cols-3 gap-6">
  //         {content.technology.techs.map((tech, index) => {
  //           const Icon = tech.icon;
  //           return (
  //             <div
  //               key={index}
  //               className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-xl transition-shadow duration-300"
  //             >
  //               <div className="w-20 h-20 rounded-full bg-[#DF5D00] text-white flex items-center justify-center mx-auto mb-4">
  //                 <Icon size={40} />
  //               </div>
  //               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
  //                 {tech.title}
  //               </h3>
  //               <p className="text-gray-700 dark:text-gray-300 text-justify">
  //                 <HighlightedText text={tech.description} keywords={content.technology.keywords} />
  //               </p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </div>
  //   );
  // }

  return null;
}
