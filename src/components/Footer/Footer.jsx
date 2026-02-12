import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content container">

        <div className="footer-brand">
          <h3 className="footer-title">Metropolis Underground</h3>
          <p className="footer-tagline">
            Move smarter through the city.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
        </div>

        <div className="footer-download">
          <button className="store-btn">App Store</button>
          <button className="store-btn secondary">Google Play</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Metropolis Underground. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
