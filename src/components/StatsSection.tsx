import React from 'react';

interface Stat {
  value: string;
  label: string;
  cardColor: string;
}

const StatsSection: React.FC = () => {
  const stats: Stat[] = [
    {
      value: "Up to 89%",
      label: "Average Savings",
      cardColor: "bg-purple",
    },
    {
      value: "500k+",
      label: "Potential Users",
      cardColor: "bg-pink",
    },
    {
      value: "60 sec",
      label: "Average Ship Time",
      cardColor: "bg-orange",
    },
    {
      value: "24/7",
      label: "Drop-off Locations",
      cardColor: "bg-green",
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of businesses saving money and time with ShipComplete's shipping platform.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.cardColor} rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl md:text-3xl font-bold text-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            * Savings based on comparison with standard shipping rates. Individual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
