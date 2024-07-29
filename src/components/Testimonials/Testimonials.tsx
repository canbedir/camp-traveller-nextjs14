import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { TESTIMONIALDATA } from "@/constans";
import TestimonialsItem from "./TestimonialsItem";

const Testimonials = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-28 h-1">
          <h1
            className="text-3xl lg:text-5xl font-semibold font-poppins"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="100"
          >
            Testimonials
          </h1>
          <div className="flex mt-5 justify-center">
            <div className="mb-6 h-1 w-full max-w-xl bg-orange-500"></div>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {TESTIMONIALDATA.map((testimon) => (
            <SwiperSlide key={testimon.id}>
              <TestimonialsItem
                name={testimon.name}
                aosDelay={testimon.aosDelay}
                desc={testimon.description}
                img={testimon.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
