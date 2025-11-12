import { Check, Network, Zap, Shield } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useDarkMode } from '../../hooks/useDarkMode';
import { useState, useEffect } from 'react';

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
        <div className="grid md:grid-cols-2 gap-2">
          {content.platform.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-[#DF5D00]"
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
  <div className="space-y-4 relative z-10">
    {content.workflow.steps.map((item, index) => (
      <div key={index} className="flex items-start gap-2 relative">
        {/* Círculo com número */}
        <div className="w-16 h-16 rounded-full bg-[#DF5D00] text-white flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0 z-20 relative">
          {item.step}
        </div>

        {/* Conteúdo */}
        <div className="flex-1 pt-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
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


  if (activeSubmenu === 'modalities') {
    const [expandedImage, setExpandedImage] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const modalityImages = [
      {src:'/report/7.png', type: 'image'},
      {src:'/report/8.png', type: 'image'},
      {src:'/report/9.png', type: 'image'},
      {src:'/report/10.png', type: 'image'},
      {src:'/report/1.png', type: 'image'},
      {src:'/report/2.png', type: 'image'},
      {src:'/report/3.png', type: 'image'},
      {src:'/report/4.png', type: 'image'},
      {src:'/report/5.png', type: 'image'},
      {src:'/report/6.png', type: 'image'},
      {src: '/report/fluxo_mamo.mp4', type: 'video'},
     
    ];

    

    const content = {
      
      report: {
        title: t('report_title'),
        points: t('report_points'),
        keywords: t('report_keywords'),
      },
      
      
    };
  const handleImageExpand = (src: string, index: number) => {
      setExpandedImage(src);
      setCurrentIndex(index);
      setIsAnimating(true);
    };

    const handleImageClose = () => {
      setIsAnimating(false);
      setTimeout(() => setExpandedImage(null), 300);
    };

    const handleNextImage = () => {
      const nextIndex = (currentIndex + 1) % modalityImages.length;
      setCurrentIndex(nextIndex);
      setExpandedImage(modalityImages[nextIndex].src);
    };

    const handlePreviousImage = () => {
      const previousIndex = ((currentIndex - 1<0)?(modalityImages.length - 1):(currentIndex - 1)) % modalityImages.length;
      setCurrentIndex(previousIndex);
      setExpandedImage(modalityImages[previousIndex].src);
    };

    const isVideo = (src: string) => {
      return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    };

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'z' || e.key === 'Z') {
          if (!expandedImage) {
            handleImageExpand(modalityImages[0].src, 0);
          } 
        } else if (e.key === 'n' || e.key === 'N') {
         
            handleNextImage();
          
        }else if (e.key === 'p' || e.key === 'P') {
          
            handlePreviousImage();
          
        } else if (e.key === 'Escape') {
          if (expandedImage) {
            handleImageClose();
          }
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [expandedImage, currentIndex]);

    return (
      <div className="space-y-8">
        <div className="text-xl text-[#DF5D00] font-bold">{content.report.title}</div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-4 gap-4">
              {modalityImages.map((media, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
                  onClick={() => handleImageExpand(media.src, index)}
                >
                  {media.type === 'video' ? (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={`Modalidade ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#DF5D00] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid md:grid-cols-1 gap-4">
            {content.report.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <Check className="text-[#DF5D00] flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={point} keywords={content.report.keywords} />
              </p>
            </div>
          ))}
          </div>
        </div>

        {expandedImage && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black p-8 cursor-pointer transition-opacity duration-300 ${
              isAnimating ? 'bg-opacity-80' : 'bg-opacity-0'
            }`}
            onClick={handleImageClose}
          >
            <div
              className={`relative w-[80vw] h-[80vh] transition-all duration-500 ease-out ${
                isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            >
              {isVideo(expandedImage) ? (
                <video
                  src={expandedImage}
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={expandedImage}
                  alt="Imagem expandida"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              )}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                Pressione <span className="font-bold">Z</span> para próxima imagem | <span className="font-bold">ESC</span> para sair
              </div> */}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (activeSubmenu === 'care') {
    const [expandedImageV, setExpandedImageV] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndexV, setCurrentIndexV] = useState(0);
    
    const modalityImagesV = [
      {src:'/care/1.png', type: 'image'},
      {src:'/care/2.png', type: 'image'},
      {src:'/care/3.png', type: 'image'},
      {src:'/care/4.png', type: 'image'},
      {src:'/care/5.png', type: 'image'},
      {src:'/care/6.png', type: 'image'},
      {src: '/care/video.mp4', type: 'video'},
    ];

    

    const content = {
      care: {
        title: t('care_title'),
        points: t('care_points'),
        keywords: t('care_keywords'),
      },
      
    };
  const handleImageExpand = (src: string, index: number) => {
      setExpandedImageV(src);
      setCurrentIndexV(index);
      setIsAnimating(true);
    };

    const handleImageClose = () => {
      setIsAnimating(false);
      setTimeout(() => setExpandedImageV(null), 300);
    };

    const handleNextImage = () => {
      const nextIndex = (currentIndexV + 1) % modalityImagesV.length;
      setCurrentIndexV(nextIndex);
      setExpandedImageV(modalityImagesV[nextIndex].src);
    };

    const handlePreviousImage = () => {
      const previousIndex = ((currentIndexV - 1<0)?(modalityImagesV.length - 1):(currentIndexV - 1)) % modalityImagesV.length;
      setCurrentIndexV(previousIndex);
      setExpandedImageV(modalityImagesV[previousIndex].src);
    };

    const isVideo = (src: string) => {
      return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    };

    useEffect(() => {
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'z' || e.key === 'Z') {
          if (!expandedImageV) {
            handleImageExpand(modalityImagesV[0].src, 0);
          } 
        } else if (e.key === 'n' || e.key === 'N') {
         
            handleNextImage();
          
        }else if (e.key === 'p' || e.key === 'P') {
          
            handlePreviousImage();
          
        } else if (e.key === 'Escape') {
          if (expandedImageV) {
            handleImageClose();
          }
        }
      };

      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }, [expandedImageV, currentIndexV]);

    return (
      <div className="space-y-8">
        <div className="text-xl text-[#DF5D00] font-bold">{content.care.title}</div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <div className="grid grid-cols-4 gap-4">
              {modalityImagesV.map((media, index) => (
                <div
                  key={index}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
                  onClick={() => handleImageExpand(media.src, index)}
                >
                  {media.type === 'video' ? (
                    <video
                      src={media.src}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={media.src}
                      alt={`Care ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#DF5D00] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid md:grid-cols-1 gap-4">
            {content.care.points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-2 bg-gray-50 dark:bg-gray-700 rounded-xl"
            >
              <Check className="text-[#DF5D00] flex-shrink-0 mt-1" size={24} />
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                <HighlightedText text={point} keywords={content.care.keywords} />
              </p>
            </div>
          ))}
          </div>
        </div>

        {expandedImageV && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black p-8 cursor-pointer transition-opacity duration-300 ${
              isAnimating ? 'bg-opacity-80' : 'bg-opacity-0'
            }`}
            onClick={handleImageClose}
          >
            <div
              className={`relative w-[80vw] h-[80vh] transition-all duration-500 ease-out ${
                isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
            >
              {isVideo(expandedImageV) ? (
                <video
                  src={expandedImageV}
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={expandedImageV}
                  alt="Imagem expandida"
                  className="w-full h-full object-contain rounded-lg shadow-2xl"
                />
              )}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                Pressione <span className="font-bold">Z</span> para próxima imagem | <span className="font-bold">ESC</span> para sair
              </div> */}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
}
