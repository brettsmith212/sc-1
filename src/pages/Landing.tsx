import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

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

          {/* Features Section 1 */}
          <div id="features-1" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Features content placeholder */}
            </div>
          </div>

          {/* Features Section 2 */}
          <div id="features-2" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Features content placeholder */}
            </div>
          </div>

          {/* Features Section 3 */}
          <div id="features-3" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Features content placeholder */}
            </div>
          </div>

          {/* Community/Personas Section */}
          <div id="personas" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Personas content placeholder */}
            </div>
          </div>

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
