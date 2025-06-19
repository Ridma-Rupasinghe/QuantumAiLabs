import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import type { ServiceCardProps } from "../Service/ServiceCard";

interface ValueItem extends ServiceCardProps {
  description: any;
  title: any;
  image: any;
}

interface ValuesProps {
  values: ValueItem[];
  component: React.FC<ServiceCardProps>;
}

const ImageSlider: React.FC<ValuesProps> = ({ values, component: Component }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          355: { slidesPerView: 1.05, centeredSlides: true, spaceBetween: 24 },
          385: { slidesPerView: 1.09, centeredSlides: true, spaceBetween: 24 },
          400: { slidesPerView: 1.15, centeredSlides: false, spaceBetween: 24 },
          430: { slidesPerView: 1.2, centeredSlides: false, spaceBetween: 24 },
          440: { slidesPerView: 1.25, centeredSlides: false, spaceBetween: 24 },
          470: { slidesPerView: 1.3, centeredSlides: false, spaceBetween: 24 },
          500: { slidesPerView: 1.4, centeredSlides: false, spaceBetween: 24 },
          510: { slidesPerView: 1.45, centeredSlides: false, spaceBetween: 24 },
          520: { slidesPerView: 1.5, centeredSlides: false, spaceBetween: 24 },
          550: { slidesPerView: 1.55, centeredSlides: false, spaceBetween: 24 },
          600: { slidesPerView: 1.7, centeredSlides: false, spaceBetween: 24 },
          700: { slidesPerView: 2, centeredSlides: false, spaceBetween: 24 },
          800: { slidesPerView: 2.5, centeredSlides: false, spaceBetween: 24 },
          1024: { slidesPerView: 3, centeredSlides: false, spaceBetween: 24 },
        }}
        speed={1000}
        className="flex flex-col items-center justify-center"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <Component image={value.image} title={value.title} description={value.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
