import Navbar from '../components/Navbar';

function Landing() {
  return (
    <div className="min-h-screen bg-buffer-hero">
      <Navbar />
      <h1 className="text-buffer-text text-4xl font-bold p-8">
        Welcome to ShipComplete
      </h1>
      <div className="p-8">
        <button className="bg-buffer-button hover:bg-buffer-button-hover text-buffer-text px-6 py-3 rounded-lg font-semibold transition-colors">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default Landing;
