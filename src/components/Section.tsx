import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: Array<{ title: string; description: string; icon: LucideIcon }>;
  image?: string;
}

export function Section({ title, description, icon: Icon, features, image }: SectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 animate-fade-in">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-[#DF5D00] mb-6 bg-white dark:bg-gray-800 hover:rotate-[360deg] transition-transform duration-700">
            <Icon size={48} className="text-[#DF5D00]" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {image && (
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#DF5D00] hover:scale-[1.02] transition-transform duration-500">
            <img
              src={image}
              alt={title}
              className="w-full h-96 object-cover"
            />
          </div>
        )}

        {features && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl border-2 border-[#DF5D00] bg-white dark:bg-gray-800 hover:bg-[#DF5D00] hover:scale-105 hover:-rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[#DF5D00] flex items-center justify-center mb-4 group-hover:border-white group-hover:scale-110 transition-all duration-300">
                    <FeatureIcon
                      size={32}
                      className="text-[#DF5D00] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
