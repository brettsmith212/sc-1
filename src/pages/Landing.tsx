import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import PersonasSection from '../components/PersonasSection';

function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section id="hero" className="py-16 lg:py-24 bg-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
          </div>
        </section>

        {/* Main Content Section - All sections between hero and footer */}
        <section className="bg-light">
          {/* Trusted Stats Section */}
          <div id="stats" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Stats content placeholder */}
            </div>
          </div>

          {/* Features Section 1 - Instant Discounts */}
          <div id="features-1" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeatureSection
                title="Instant Discounts on Every Shipment"
                bullets={[
                  "Access up to 89% savings on shipping rates through strategic partnerships",
                  "Automatically compare rates across multiple carriers in real-time",
                  "No membership fees or hidden costs - transparent pricing guaranteed",
                  "Bulk shipping discounts for businesses of all sizes"
                ]}
                imageColor="purple"
              />
            </div>
          </div>

          {/* Features Section 2 - AR Camera */}
          <div id="features-2" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeatureSection
                title="AR-Enhanced Package Sizing"
                bullets={[
                  "Use your phone's camera to instantly measure packages with AR technology",
                  "Eliminate guesswork and ensure accurate shipping calculations",
                  "Get optimal box recommendations to minimize shipping costs",
                  "Reduce oversized package fees with precise measurements"
                ]}
                imageColor="pink"
                reversed={true}
              />
            </div>
          </div>

          {/* Features Section 3 - QR Drop-off */}
          <div id="features-3" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeatureSection
                title="Seamless QR Code Drop-off"
                bullets={[
                  "Generate QR codes for contactless package drop-off at any location",
                  "Skip the lines with pre-paid shipping labels and instant tracking",
                  "Drop off at thousands of convenient locations nationwide",
                  "Receive real-time notifications and delivery confirmations"
                ]}
                imageColor="orange"
              />
            </div>
          </div>

          {/* Features Section 4 - Lean UX */}
          <div id="features-4" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeatureSection
                title="Streamlined User Experience"
                bullets={[
                  "Intuitive interface designed for speed and simplicity",
                  "Complete shipping workflows in under 60 seconds",
                  "Smart defaults and AI-powered recommendations",
                  "Minimal clicks from package to delivery confirmation"
                ]}
                imageColor="green"
                reversed={true}
              />
            </div>
          </div>

          {/* Community/Personas Section */}
          <PersonasSection />

          {/* About Section */}
          <div id="about" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* About content placeholder */}
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section id="footer" className="py-16 bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Footer content placeholder */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Landing;
