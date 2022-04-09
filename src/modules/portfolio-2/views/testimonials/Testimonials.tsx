import React from "react";
import "./testimonials.scss";
import AVT1 from "../../../../assets/template-2/avatar1.jpg";
import AVT2 from "../../../../assets/template-2/avatar2.jpg";
import AVT3 from "../../../../assets/template-2/avatar3.jpg";
import AVT4 from "../../../../assets/template-2/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const testimonial_data = [
  {
    name: "aaaaaaa",
    avatar: AVT1,
    review: "aksdjfklasdhjkladsjklfasdjklfjads",
  },
  {
    name: "aaaaaaa",
    avatar: AVT2,
    review: "aksdjfklasdhjkladsjklfasdjklfjads",
  },
  {
    name: "aaaaaaa",
    avatar: AVT3,
    review: "aksdjfklasdhjkladsjklfasdjklfjads",
  },
  {
    name: "aaaaaaa",
    avatar: AVT4,
    review: "aksdjfklasdhjkladsjklfasdjklfjads",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonals</h2>

      <Swiper
        className="container_2 testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {testimonial_data.map((item, key) => (
          <SwiperSlide key={key} className="testimonial">
            <div className="client__avatar">
              <img src={item.avatar} alt="avatar" />
            </div>
            <h5 className="client__name">{item.name}</h5>
            <small className="client__review">{item.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
