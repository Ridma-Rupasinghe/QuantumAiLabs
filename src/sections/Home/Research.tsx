import rD1 from "/Images/Home/rD1.webp";
import rD2 from "/Images/Home/rD2.webp";
import rD3 from "/Images/Home/rD3.webp";

import rM1 from "/Images/Home/rM1.webp";
import rM2 from "/Images/Home/rM2.webp";
import rM3 from "/Images/Home/rM3.webp";

import ServiceD from "../../components/Home/CardService";

import ImageSlider from "../../components/Home/ImageSlider";
import { Link } from "react-router-dom";

export default function Reseach() {
  const values = [
    {
      image: [rD1, rM1],
      name: "",
      title: "Ethical AI for Responsible Automation",
      description: "Building transparent, fair, and accountable AI systems.",
      link: "/researches",
    },
    {
      image: [rD2, rM2],
      name: "",
      title: "Autonomous Cloud Optimization",
      description: "Improving cloud performance through self-learning models.",
      link: "/researches",
    },
    {
      image: [rD3, rM3],
      name: "",
      title: "Blockchain-Powered Data Integrity",
      description: "Enhancing trust and security with decentralized solutions.",
      link: "/researches",
    },
  ];

  return (
    <div className="relative h-auto w-full">
      <div
        className={`3xl:px-[120px] hidden w-full items-center justify-center px-[2%] py-[5vh] transition-all duration-1000 xl:flex xl:pt-[96px]`}
        style={{
          background:
            "var(--gradient, linear-gradient(to bottom right, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) bottom right / 50% 50% no-repeat, linear-gradient(to bottom left, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) bottom left / 50% 50% no-repeat, linear-gradient(to top left, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) top left / 50% 50% no-repeat, linear-gradient(to top right, #DFE4FF 0%, #FFF 11%, #FFF 16%, rgba(223, 228, 255, 0.50) 41%) top right / 50% 50% no-repeat)",
        }}
      >
        <div className="flex w-full flex-col items-start justify-between gap-5">
          <div className="flex w-[53%] flex-col items-start justify-between gap-[0.6vh]">
            <div className="rounded-lg bg-[#FFF2E7] p-1">
              <p className="font-Arial hmd:text-[6.5px] hlg:text-[8.5px] hxl:text-[11px] h2xl:text-[12.5px] h3xl:text-[14px] tracking-widest sm:text-[5.5px] md:text-[7px] lg:text-[9.5px] xl:text-[12px] 2xl:text-[13px]">
                OUR RESEARCH
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta hmd:text-[16.5px] hlg:text-[24px] hxl:text-[32px] h2xl:text-[40px] h3xl:text-[52px] font-bold text-[#252525] sm:text-[15px] md:text-[17px] lg:text-[28px] xl:text-[35px] 2xl:text-[43px]">
                Exploring the Next Frontier in Tech
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta hmd:text-[7.5px] hlg:text-[9.5px] hxl:text-[12.5px] h3xl:text-[18px] sm:text-[6.5px] md:text-[8px] lg:text-[11px] xl:text-[14.5px] 2xl:text-[16.5px]">
                We explore emerging technologies and transform bold ideas into practical innovation.
                Our research bridges technical insight with real-world application to shape what
                comes next.
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-3 grid-rows-1 gap-[1%] 2xl:gap-[24px]">
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

          <div className="flex w-full items-center justify-center">
            <Link to={"/researches"}>
              <div className="mt-[20px] flex aspect-[4.39] h-[56px] w-[191px] cursor-pointer items-center justify-center rounded-[12px] bg-[#001779] px-[32px] py-[16px] transition-all duration-300 hover:bg-[#001999] hover:shadow-lg">
                <p className="font-Jakarta text-[18px] leading-[24px] font-[700] text-nowrap text-white">
                  Discover More
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex w-full flex-col items-center justify-between bg-[#F3F3F3] px-[16px] py-[4vh] xl:hidden">
        <div className="flex w-full flex-col items-start justify-between gap-[12px]">
          <div className="rounded-lg bg-[#FFF2E7] p-1">
            <p className="font-Arial px-[8px] py-[4px] text-[14px] tracking-widest text-[#666]">
              OUR RESEARCH
            </p>
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-[32px] leading-[40px] font-[700] text-[#252525]">
              Exploring the <br /> Next Frontier in Tech
            </p>
          </div>

          <div className="mt-[6px] w-full">
            <p className="font-Jakarta text-[14px] leading-[20px]">
              We explore emerging technologies and transform bold ideas into practical innovation.
              Our research bridges technical insight with real-world application to shape what comes
              next.
            </p>
          </div>
        </div>

        <div className="mt-[30px] flex w-full items-center justify-center">
          <ImageSlider values={values} component={ServiceD} />
        </div>

        <Link to={"/researches"}>
          <div className="mt-[24px] flex aspect-[4.39%] h-[56px] w-[191px] items-center justify-center rounded-[12px] bg-[#001984] px-[32px] py-[16px] transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-[#001779] hover:shadow-lg">
            <p className="font-Jakarta px-[32px] py-[16px] text-[18px] leading-[24px] font-[700] text-nowrap text-white">
              Discover More
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
