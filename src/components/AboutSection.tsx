import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-dark mb-6">
            About ShipComplete
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            ShipComplete revolutionizes shipping by democratizing access to enterprise-level discounts 
            for businesses of all sizes. We believe that cost-effective shipping shouldn't be a privilege 
            reserved for large corporations.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To lower the barrier for shipping by providing deep discounts, innovative technology, 
                and streamlined experiences that help businesses grow without the burden of high logistics costs.
              </p>
              <p className="text-gray-600">
                We focus on AR-enhanced package sizing, QR code drop-offs, and instant rate comparisons 
                to make shipping as simple as possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  No membership fees or hidden costs
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Transparent pricing with instant comparisons
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Cutting-edge technology for accuracy
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Support for businesses of all sizes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
