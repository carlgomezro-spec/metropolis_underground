import { useState } from "react";
import "./Testimonials.css";
import { LuUser } from "react-icons/lu";

function Testimonials() {
  const testimonials = [
    {
      text: "All schedules are up to date and I rarely have a problem with late buses or trains.",
      name: "Rebeca",
      surname: "Suarez",
    },
    {
      text: "Real-time alerts make my daily commute much easier and stress-free.",
      name: "Miguel",
      surname: "Llamas",
    },
    {
      text: "Tracking my balance and travel history has never been easier.",
      name: "Claudia",
      surname: "López",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <span className="testimonials-label">Testimonials</span>
        <h2>What’s our customer says?</h2>

        {/* MOBILE SLIDER */}
        <div className="testimonial-wrapper mobile">
          <button className="arrow left" onClick={prevTestimonial}>
            ←
          </button>

          <div className="testimonial-card">
            <p className="testimonial-text">
              {testimonials[current].text}
            </p>

            <div className="testimonial-author">
              <LuUser className="author-icon" />
              <div className="author-name">
                <span>{testimonials[current].name}</span>
                <span>{testimonials[current].surname}</span>
              </div>
            </div>
          </div>

          <button className="arrow right" onClick={nextTestimonial}>
            →
          </button>
        </div>

        {/* DESKTOP GRID */}
        <div className="testimonial-wrapper desktop">
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-author">
                <LuUser className="author-icon" />
                <div className="author-name">
                  <span>{item.name}</span>
                  <span>{item.surname}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
