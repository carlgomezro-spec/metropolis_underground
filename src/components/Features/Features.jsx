import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Features.css";

import feature1 from "../../assets/feature1.jpg";
import feature1Mobile from "../../assets/feature_1_mobile.jpg";

import feature2 from "../../assets/feature2.jpg";
import feature2Mobile from "../../assets/feature_2_mobile.jpg";

import feature3 from "../../assets/feature3.jpg";
import feature3Mobile from "../../assets/feature_3_mobile.jpg";

function Features() {
  return (
    <section id="features" className="features">
      
      <span className="features-eyebrow">New Features</span>
      <h2 className="features-title">Why travel with us?</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="features-swiper"
      >
        {/* SLIDE 1 */}
        <SwiperSlide>
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature1Mobile} />
              <img src={feature1} alt="Plan your trip" />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                All your journeys in one place
              </h3>
              <p className="feature-text">
                Plan, pay, and travel with the #1 mobility app
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature2Mobile} />
              <img src={feature2} alt="Real-time arrivals" />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                Real-time insights
              </h3>
              <p className="feature-text">
                See arrivals in real time and choose the best route for you
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature3Mobile} />
              <img src={feature3} alt="Service alerts" />
            </picture>

            <div className="feature-overlay">
              <h3 className="feature-headline">
                Stay ahead of disruptions
              </h3>
              <p className="feature-text">
                Stay updated about incidents or unexpected changes
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default Features;
