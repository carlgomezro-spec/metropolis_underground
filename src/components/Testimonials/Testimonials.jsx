import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What our customers say</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “Now I know exactly when to leave home. I haven’t missed a train in weeks.”
            </p>
            <span className="testimonial-author">— Daily commuter</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Real-time alerts make my journey predictable and stress-free.”
            </p>
            <span className="testimonial-author">— University student</span>
          </div>

          <div className="testimonial-card">
            <p>
              “Tracking my balance and travel history has never been easier.”
            </p>
            <span className="testimonial-author">— Regular passenger</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
