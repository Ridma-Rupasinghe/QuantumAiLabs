import sD1 from "/Images/Home/sD1.webp";
import sD2 from "/Images/Home/sD2.webp";
import sD3 from "/Images/Home/sD3.webp";
import sD4 from "/Images/Home/sD4.webp";
import sD5 from "/Images/Home/sD5.webp";

import sM1 from "/Images/Home/sM1.webp";
import sM2 from "/Images/Home/sM2.webp";
import sM3 from "/Images/Home/sM3.webp";
import sM4 from "/Images/Home/sM4.webp";
import sM5 from "/Images/Home/sM5.webp";

import ServiceD from "../../components/Home/CardService";

import ImageSlider from "../../components/Home/ImageSlider";
import { Link } from "react-router-dom";

export default function Services() {
  const values = [
    {
      image: [sD1, sM1],
      name: "",
      title: "Custom Software Development",
      description: "Tailored systems built around your business.",
      link: "/services",
    },
    {
      image: [sD2, sM2],
      name: "",
      title: "AI & Machine Learning",
      description: "End-to-end construction solutions, from concept to completion.",
      link: "/services",
    },
    {
      image: [sD3, sM3],
      name: "",
      title: "Cloud Engineering",
      description: "Scalable, secure infrastructure built for growth.",
      link: "/services",
    },
    {
      image: [sD4, sM4],
      name: "",
      title: "Mobile & Web Applications",
      description: "Delivering a consistent user experience everywhere.",
      link: "/services",
    },
    {
      image: [sD5, sM5],
      name: "",
      title: "Data Analytics & Insights",
      description: "Help you make better decisions with real-time analytics",
      link: "/services",
    },
    {
      image: [sD1, sM1],
      name: "",
      title: "Custom Software Development",
      description: "Tailored systems built around your business.",
      link: "/services",
    },
  ];

  return (
    <div className="relative h-auto w-full">
      <div
        className={`3xl:px-[120px] hidden w-full flex-col items-center justify-center px-[2%] py-[5vh] transition-all duration-1000 xl:flex xl:pt-[96px]`}
        style={{
          background:
            "var(--gradient, linear-gradient(to bottom right, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) top left / 50% 50% no-repeat, linear-gradient(to top right, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) top right / 50% 50% no-repeat)",
        }}
      >
        <div className="flex w-full flex-col items-start justify-between gap-5">
          <div className="flex w-[53%] flex-col items-start justify-between gap-[0.7vh]">
            <div className="rounded-lg bg-[#FFF2E7] p-1">
              <p className="font-Arial hmd:text-[6.5px] hlg:text-[8.5px] hxl:text-[11px] h2xl:text-[12.5px] h3xl:text-[14px] tracking-widest sm:text-[5.5px] md:text-[7px] lg:text-[9.5px] xl:text-[12px] 2xl:text-[13px]">
                OUR SERVICES
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta hmd:text-[16.5px] hlg:text-[24px] hxl:text-[32px] h2xl:text-[40px] h3xl:text-[52px] font-bold text-[#252525] sm:text-[15px] md:text-[17px] lg:text-[28px] xl:text-[35px] 2xl:text-[43px]">
                Exploring the Next Frontier in Tech
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta hmd:text-[7.5px] hlg:text-[9.5px] hxl:text-[12.5px] h3xl:text-[18px] sm:text-[6.5px] md:text-[8px] lg:text-[11px] xl:text-[14.5px] 2xl:text-[16.5px]">
                We offer a full range of construction services tailored to New Zealand's diverse
                needs. From urban development and infrastructure to custom commercial buildings, we
                deliver excellence at every stage.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 grid-rows-2 gap-x-[1.42%] gap-y-[1vh] 2xl:gap-y-[3vh]">
            {values.map((value, index) => (
              <ServiceD
                key={index}
                image={value.image}
                title={value.title}
                name={value.name}
                description={value.description}
                link={value.link}
              />
            ))}
          </div>
        </div>
        <Link to={"/services"}>
          <div className="mt-[40px] flex w-full items-center justify-center">
            <div className="flex aspect-[4.392] h-[56px] w-[246px] cursor-pointer items-center justify-center bg-[#001779] px-[32px] py-[16px] transition-all duration-300 hover:border-[#001779] hover:bg-[#001999] hover:shadow-lg sm:rounded-[5px] md:rounded-[6.5px] lg:rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px]">
              <p className="font-Jakarta text-[18px] text-nowrap text-white">
                Discover All Services
              </p>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-[60px] flex w-full flex-col items-center justify-between bg-[#F3F3F3] px-[16px] py-[2vh] xl:hidden">
        <div className="flex w-full flex-col items-start justify-between gap-[12px]">
          <div className="rounded-lg bg-[#FFF2E7] p-1">
            <p className="font-Arial px-[8px] py-[4px] text-[14px] tracking-widest text-[#666]">
              OUR SERVICES
            </p>
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-[32px] leading-[40px] font-[700] text-[#252525]">
              Exploring the <br /> Next Frontier in Tech
            </p>
          </div>

          <div className="w-full">
            <p className="font-Jakarta mt-[8px] text-[14px]">
              We offer a full range of construction services tailored to New Zealand's diverse
              needs. From urban development and infrastructure to custom commercial buildings, we
              deliver excellence at every stage.
            </p>
          </div>
        </div>

        <div className="mt-[30px] flex w-full items-center justify-center">
          <ImageSlider values={values} component={ServiceD} />
        </div>

        <Link to={"/services"}>
          <div className="mt-[20px] flex aspect-[4.39] h-[56px] w-[246px] cursor-pointer items-center justify-center rounded-[12px] bg-[#001779] px-[32px] py-[16px] transition-all duration-300 hover:border-[#001779] hover:bg-[#001999] hover:shadow-lg">
            <p className="font-Jakarta text-[18px] leading-[24px] font-[700] text-nowrap text-white">
              Discover All Services
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
