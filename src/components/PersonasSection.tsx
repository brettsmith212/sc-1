import React from 'react';

interface Persona {
  name: string;
  description: string;
  stats: string[];
  cardColor: string;
}

const PersonasSection: React.FC = () => {
  const personas: Persona[] = [
    {
      name: "Missionary Family",
      description: "Families shipping supplies and care packages to overseas missions need reliable, affordable shipping solutions.",
      stats: ["5-10 packages per month", "International shipping priority", "Budget-conscious"],
      cardColor: "bg-purple",
    },
    {
      name: "Occasional Reseller",
      description: "Side-hustle entrepreneurs selling products online who need cost-effective shipping to maintain margins.",
      stats: ["20-50 shipments per month", "Multiple marketplace presence", "Profit margin focused"],
      cardColor: "bg-pink",
    },
    {
      name: "Micro-Brand Founder",
      description: "Small business owners launching new products who need affordable shipping to compete with larger brands.",
      stats: ["10-30 packages per month", "Direct-to-consumer model", "Growth-oriented"],
      cardColor: "bg-orange",
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Who Benefits from ShipComplete?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform serves diverse shipping needs across different user types and volume requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <div
              key={index}
              className={`${persona.cardColor} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1`}
            >
              <div className="bg-white rounded-lg p-6 h-full">
                <h3 className="text-xl font-bold text-dark mb-4">
                  {persona.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {persona.description}
                </p>
                <div className="space-y-2">
                  {persona.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
