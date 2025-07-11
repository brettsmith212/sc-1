function Hero() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight fade-in">
          Lower the barrier for shipping with deep discounts
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl lg:text-2xl text-text-primary mb-8 max-w-3xl mx-auto leading-relaxed fade-in-delay-1">
          ShipComplete connects users with discounted shipping rates through strategic partnerships, 
          AR-enhanced packaging, and seamless drop-off experiences that make shipping affordable and effortless.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2">
          <button className="bg-primary hover:bg-primary-hover text-text-primary px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 w-full sm:w-auto hover-lift shadow-lg hover:shadow-xl">
            Get Started for Free
          </button>
          <button className="text-text-primary hover:bg-warm px-8 py-4 rounded-lg text-lg font-medium border border-text-primary transition-all duration-200 w-full sm:w-auto hover-lift">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
