import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Move smarter through Metropolis</h1>
          <p>
            Real-time metro updates, balance tracking and smarter journeys — all in one app.
          </p>
          <a href="#" className="btn-primary">
            Download the app
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
