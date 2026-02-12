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
      <span >New Features</span>
      <h2>Why travel with us?</h2>

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
              <p>Plan, pay, and travel with the #1 mobility app</p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 2 */}
        <SwiperSlide>
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature2Mobile} />
              <img src={feature2} alt="Incidents alerts" />
            </picture>

            <div className="feature-overlay">
              <p>See arrivals in real time and choose the best route for you</p>
            </div>
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <div className="feature-slide">
            <picture>
              <source media="(max-width: 768px)" srcSet={feature3Mobile} />
              <img src={feature3} alt="Recharge balance" />
            </picture>

            <div className="feature-overlay">
              <p>Stay updated about incident or unexpected changes</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Features;
