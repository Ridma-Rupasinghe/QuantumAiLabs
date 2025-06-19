import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ValueItem {
  image: string[];
  name: string;
  title: string;
  description: string;
}

interface ValuesProps {
  values: ValueItem[];
  component: React.FC<{
    image: string[];
    name: string;
    title: string;
    description: string;
  }>;
}

const ImageSlider: React.FC<ValuesProps> = ({ values, component: Component }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          510: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          962: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        speed={1000}
        pagination={{
          clickable: true,
          horizontalClass: "swiper-pagination-horizontal",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        className="flex flex-col items-center"
      >
        {values.map((value, index) => (
          <SwiperSlide key={index}>
            <Component
              image={value.image}
              name={value.name}
              title={value.title}
              description={value.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper {
            padding-bottom: 30px !important;
          }
          
          .swiper-pagination {
            display: flex !important;
            align-items: center;
            justify-content: center;
            width: 100% !important;
            position: absolute;
            bottom: 0 !important;
            left: 0;
            padding: 0 20%;
          }

          .swiper-bullet {
            width: 40px;
            height: 4px;
            border-radius: 999px;
            background: #AFAFAF;
            cursor: pointer;
            display: inline-block;
            margin: 0 4px;
            opacity: 1;
          }

          @media (min-width: 1024px) {
            .swiper-bullet {
              width: 40px;
              height: 4px;
            }
          }

          .swiper-bullet-active {
            background: var(--Dark-Blue-blue-500, #001984) !important;
            opacity: 1 !important;
          }

          @media (min-width: 640px) {
            .swiper-pagination {
              padding: 0 25%;
            }
          }

          @media (min-width: 768px) {
            .swiper-pagination {
              padding: 0 30%;
            }
          }

          @media (min-width: 1024px) {
            .swiper-pagination {
              padding: 0 35%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ImageSlider;
