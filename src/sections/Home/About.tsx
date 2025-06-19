import aboutD from "/Images/Home/aboutD.webp";
import aboutM from "/Images/Home/aboutM.webp";

import about1 from "/Images/Home/about1.png";
import about2 from "/Images/Home/about2.png";
import about3 from "/Images/Home/about3.png";
import about4 from "/Images/Home/about4.png";

import AboutD from "../../components/Home/CardAbout";
import { Link } from "react-router-dom";
import TextBadge from "../../components/About/TextBadge";

export default function About() {
  const values = [
    {
      image: about1,
      title: "Innovation with Purpose",
      description: "We build meaningful tech that solves real problems.",
    },
    {
      image: about2,
      title: "Engineering Excellence",
      description: "Quality, precision, and performance in every line of code.",
    },
    {
      image: about3,
      title: "Transparency and Trust",
      description: "We're open, honest, and reliable — always.",
    },
    {
      image: about4,
      title: "Growth Through Collaboration",
      description: "Great things happen when we build together.",
    },
  ];

  return (
    <div className="relative h-auto w-full bg-white xl:mt-[30px]">
      <div className="3xl:px-[120px] hidden w-full items-center justify-center px-[2%] py-[5vh] xl:flex xl:py-[80px]">
        <div className="flex w-full items-start justify-between gap-5">
          <div className="3xl:gap-0 flex w-[53%] flex-col items-start justify-between gap-[0.6vh]">
            <div className="rounded-lg bg-[#FFF2E7] p-1">
              <p className="font-Arial hmd:text-[6.5px] hlg:text-[8.5px] hxl:text-[11px] h2xl:text-[12.5px] h3xl:text-[14px]: tracking-widest sm:text-[5.5px] md:text-[14px] lg:text-[14px] xl:text-[12px] 2xl:text-[14px]">
                ABOUT US
              </p>
            </div>

            <div className="3xl:mt-[12px] w-full">
              <p className="font-Jakarta text-[32px] font-bold text-[#252525] md:text-[52px]">
                What We Do
              </p>
            </div>

            <div className="3xl:mt-[16px] w-full">
              <p className="font-Jakarta text-[14px] md:text-[18px] md:leading-[24px]">
                Quantum Labs is where innovation meets precision. We are a team of passionate
                engineers, researchers, and creators dedicated to building high-impact software
                solutions.
              </p>
            </div>

            <div className="3xl:mt-[20px] w-full">
              <p className="font-Jakarta text-[14px] md:text-[18px] md:leading-[24px]">
                From startups to enterprises, we help businesses unlock new opportunities through
                intelligent technology and tailored innovation. Driven by curiosity and grounded in
                expertise, we turn bold ideas into powerful realities.
              </p>
            </div>

            <div className="pt-[3%] pr-[6%]">
              <div className="grid grid-cols-2 grid-rows-2 gap-[3%]">
                {values.map((value, index) => (
                  <AboutD
                    key={index}
                    image={value.image}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-[693px] items-center justify-center overflow-hidden">
            <div
              className="3xl:min-h-[731px] relative h-full min-h-[631px] w-full min-w-[550px] overflow-hidden rounded-t-[18px] rounded-bl-[18px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${aboutD})` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 bottom-0"
                width="219"
                height="92"
                viewBox="0 0 219 92"
                fill="none"
              >
                <path
                  d="M219 91C219 91.5523 218.552 92 218 92H0C8.83656 92 16 84.8366 16 76V44C16 28.536 28.536 16 44 16H203C211.837 16 219 8.83656 219 0V91Z"
                  fill="white"
                />
              </svg>
              <Link to={"/aboutus"}>
                <div className="absolute right-0 bottom-0 flex h-[56px] max-h-[79px] w-[191px] cursor-pointer items-center justify-center rounded-[12px] bg-[#001779] transition-all duration-300 hover:bg-[#001999] hover:shadow-lg">
                  <p className="font-Jakarta text-[18px] leading-[24px] font-[700] text-nowrap text-white">
                    Discover More
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-between px-[16px] xl:hidden">
        <div className="flex w-full flex-col items-start justify-between gap-[1.5vh]">
          <div className="w-[104px]">
            {" "}
            <TextBadge text="ABOUT US" />
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-[32px] leading-[40px] font-[700]">What We Do</p>
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-[14px] leading-[20px]">
              Quantum Labs is where innovation meets precision. We are a team of passionate
              engineers, researchers, and creators dedicated to building high-impact software
              solutions.
            </p>
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-[14px] leading-[20px]">
              From startups to enterprises, we help businesses unlock new opportunities through
              intelligent technology and tailored innovation. Driven by curiosity and grounded in
              expertise, we turn bold ideas into powerful realities.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col">
          <div className="flex flex-col items-center justify-center py-[2vh] sm:grid sm:grid-cols-2 sm:gap-x-[2.42%] sm:gap-y-[1vh] 2xl:gap-y-[3vh]">
            {values.map((value, index) => (
              <AboutD
                key={index}
                image={value.image}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>

          <div className="flex items-center justify-center overflow-hidden">
            <div
              className="xxsm:min-w-[358px] relative h-full min-h-[394px] w-full overflow-hidden rounded-t-[18px] rounded-bl-[18px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${aboutM})` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 bottom-0"
                width="211"
                height="77"
                viewBox="0 0 211 77"
                fill="none"
              >
                <path
                  d="M211 77H0.820312C9.65687 77 16.8203 69.8366 16.8203 61V32C16.8203 23.1636 23.983 16.0003 32.8193 16H195C203.837 16 211 8.83656 211 0V77Z"
                  fill="white"
                />
              </svg>
              <Link to={"/aboutus"}>
                <div className="hover absolute right-0 bottom-0 flex h-[56px] max-h-[79px] w-[189px] cursor-pointer items-center justify-center rounded-[12px] bg-[#001779]">
                  <p className="font-Jakarta text-[18px] leading-[24px] font-[700] text-nowrap text-white">
                    Discover More
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
