import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Features.css";

import feature1 from "../../assets/feature1_dt.webp";
import feature1Mobile from "../../assets/feature1_mb.webp";

import feature2 from "../../assets/feature2_dt.webp";
import feature2Mobile from "../../assets/feature2_mb.webp";

import feature3 from "../../assets/feature3_dt.webp";
import feature3Mobile from "../../assets/feature3_mb.webp";

function Features() {
  return (
    <section id="features" className="features" aria-labelledby="features-title">
      <span className="features-eyebrow">New Features</span>
      <h2 id="features-title" className="features-title">Why travel with us?</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="features-swiper"
        aria-label="Features carousel"
      >
        {/* SLIDE 1 */}
        <SwiperSlide aria-label="Feature 1 of 3">
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature1Mobile} />
              <img
                src={feature1}
                alt="Mobile app interface showing trip planning, ticket payment and journey overview in one screen"
                loading="lazy"
              />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                All your journeys in one place
              </h3>
              <p className="feature-text">
                Plan, pay, and travel with the #1 mobility app
              </p>
            </div>

            <a href="#download" className="btn btn-dark feature-btn" aria-label="Learn more about journey planning features">
              Know More
            </a>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide aria-label="Feature 2 of 3">
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature2Mobile} />
              <img
                src={feature2}
                alt="Mobile screen displaying real-time public transport arrivals and route options"
                loading="lazy"
              />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                Real-time insights
              </h3>
              <p className="feature-text">
                See arrivals in real time and choose the best route for you
              </p>
            </div>

            <a href="#download" className="btn btn-dark feature-btn" aria-label="Learn more about real-time insights">
              Know More
            </a>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide aria-label="Feature 3 of 3">
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature3Mobile} />
              <img
                src={feature3}
                alt="App interface showing service alerts and disruption notifications for transport lines"
                loading="lazy"
              />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                Stay ahead of disruptions
              </h3>
              <p className="feature-text">
                Stay updated about incidents or unexpected changes
              </p>
            </div>

            <a href="#download" className="btn btn-dark feature-btn" aria-label="Learn more about disruption alerts">
              Know More
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Features;