interface FeatureSectionProps {
  title: string;
  bullets: string[];
  imageColor: 'purple' | 'pink' | 'orange' | 'green' | 'blue';
  reversed?: boolean;
}

function FeatureSection({ title, bullets, imageColor, reversed = false }: FeatureSectionProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
      {/* Content Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-6">
          {title}
        </h2>
        <ul className="space-y-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-text-primary text-lg leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Placeholder */}
      <div className="flex-1 flex justify-center">
        <div 
          className={`w-full max-w-md h-64 md:h-80 lg:h-96 rounded-2xl flex items-center justify-center shadow-lg ${
            imageColor === 'purple' ? 'bg-purple' :
            imageColor === 'pink' ? 'bg-pink' :
            imageColor === 'orange' ? 'bg-orange' :
            imageColor === 'green' ? 'bg-green' :
            'bg-blue'
          }`}
        >
          <div className="text-text-primary text-opacity-60 text-center">
            <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm font-medium">Screenshot Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
