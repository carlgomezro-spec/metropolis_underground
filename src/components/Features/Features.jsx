import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Features.css";

import feature1 from "../../assets/feature1.jpg";
import feature2 from "../../assets/feature2.jpg";
import feature3 from "../../assets/feature3.jpg";

function Features() {
  return (
    <section id="features" className="features">
      <span className="features-label">New Features</span>
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
        <SwiperSlide>
          <div className="feature-slide">
            <img src={feature1} alt="Plan your trip" />

            <div className="feature-overlay">
              <h3>Plan your trip in real time</h3>
              <p>Know exactly when your train arrives.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="feature-slide">
            <img src={feature2} alt="Incidents alerts" />

            <div className="feature-overlay">
              <h3>Get incidents in real time</h3>
              <p>Receive alerts about service changes.</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="feature-slide">
            <img src={feature3} alt="Recharge balance" />

            <div className="feature-overlay">
              <h3>Recharge and track balance</h3>
              <p>Manage your metro card easily.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Features;