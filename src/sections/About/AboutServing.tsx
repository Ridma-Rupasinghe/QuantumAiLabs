import TextBadge from "../../components/About/TextBadge";

import haret from "/Images/About/Haret.webp";
import finance from "/Images/About/Finance.webp";
import manufacture from "/Images/About/Manufacturing.webp";
import ResearchCard from "../../components/About/ResearchCard";

export default function AboutServing() {
  const values = [
    {
      image: haret,
      title: "Healthcare",
      description:
        "Developing cutting-edge healthcare applications, including patient management systems, telemedicine solutions, and AI-powered diagnostics tools to improve patient care and streamline operations.",
    },
    {
      image: finance,
      title: "Finance",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: manufacture,
      title: "Manufacturing",
      description:
        "Developing advanced manufacturing management software that supports predictive maintenance, real-time tracking, and workflow optimization, leading to higher productivity and reduced operational downtime.",
    },
  ];
  return (
    <div className="mx-[16px] mt-[60px] mb-[20px] sm:mx-[2%] xl:mt-[80px] xl:mb-[90px] 2xl:mx-[120px]">
      {/* text */}
      <div className="flex flex-col">
        <div className="w-[117px]">
          {" "}
          <TextBadge text="OUR REACH" />
        </div>
        <div className="mt-[12px]">
          <h1 className="font-Jakarta text-[33px] leading-[40px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
            Serving Diverse Industries Globally
          </h1>
        </div>

        <div className="mt-[20px] 2xl:mt-[16px]">
          <h1 className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[18px] 2xl:leading-[24px]">
            We serve a diverse array of industries, including healthcare, finance, logistics,
            education, and manufacturing, providing innovative software solutions that help our
            clients achieve operational excellence.
          </h1>
        </div>
      </div>
      {/* text */}

      {/* Card section */}
      <div className="mt-[30px] flex flex-col justify-between space-y-[30px] xl:mt-[40px] xl:flex-row xl:space-y-0 xl:space-x-[30px]">
        {values.map((value, index) => (
          <ResearchCard
            key={index}
            image={value.image}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
      {/* Card section */}
    </div>
  );
}
