import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SubtractA from "/Images/About/Subtract-A.webp";
import SubtractB from "/Images/About/Subtract-B.webp";
import SubtractC from "/Images/About/Subtract-C.webp";
import SubtractD from "/Images/About/Subtract-D.webp";
import "swiper/swiper-bundle.css";

const images = [SubtractB, SubtractA, SubtractC, SubtractD];

const ImageSlider: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="custom-swiper overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex w-full items-center justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="h-[264px] w-full rounded-[16px] object-cover md:h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
