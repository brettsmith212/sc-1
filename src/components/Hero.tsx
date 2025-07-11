function Hero() {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-buffer-text mb-6 leading-tight">
          Lower the barrier for shipping with deep discounts
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-buffer-text mb-8 max-w-2xl mx-auto leading-relaxed">
          ShipComplete connects users with discounted shipping rates through strategic partnerships, 
          AR-enhanced packaging, and seamless drop-off experiences that make shipping affordable and effortless.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-buffer-button hover:bg-buffer-button-hover text-buffer-text px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 w-full sm:w-auto">
            Get Started for Free
          </button>
          <button className="text-buffer-text hover:bg-buffer-navbar px-8 py-4 rounded-lg text-lg font-medium border border-buffer-text transition-colors duration-200 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
