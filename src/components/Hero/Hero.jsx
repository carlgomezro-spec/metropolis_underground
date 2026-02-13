import "./Hero.css";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <h1 id="hero-title">
          Move smarter through Metropolis
        </h1>

        <p>
          Real-time metro updates, balance tracking and smarter journeys — all in one app.
        </p>

        <a
          href="#download"
          className="btn-primary"
          aria-label="Download the Metropolis mobile app"
        >
          Download the app
        </a>
      </div>
    </section>
  );
}

export default Hero;
