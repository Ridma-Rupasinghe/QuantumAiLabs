import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import ValueCard from "../Research/CardPartners";
import type { ValueCardProps } from "../Research/CardPartners";

interface SliderProps {
  items: ValueCardProps[];
}

const ValueCardSlider: React.FC<SliderProps> = ({ items }) => {
  return (
    <div className="mx-auto w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        className="custom-swiper overflow-hidden"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex w-full items-center justify-center">
            <ValueCard title={item.title} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ValueCardSlider;
