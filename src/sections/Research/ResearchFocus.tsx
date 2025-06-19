import TextBadge from "../../components/About/TextBadge";

import F1 from "/Images/Research/f1.webp";
import F2 from "/Images/Research/f2.webp";
import F3 from "/Images/Research/f3.webp";
import F4 from "/Images/Research/f4.webp";
import F5 from "/Images/Research/f5.webp";
import F6 from "/Images/Research/f6.webp";
import ResearchCard from "../../components/About/ResearchCard";

export default function ResearchFocus() {
  const values = [
    {
      image: F1,
      title: "Artificial Intelligence and Machine Learning",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: F2,
      title: "Blockchain and Distributed Ledger Technologies",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: F3,
      title: "Cloud Computing and Edge Technologies",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: F4,
      title: "Quantum Computing",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: F5,
      title: "IoT (Internet of Things)",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
    {
      image: F6,
      title: "Sustainability and Green Technologies",
      description:
        "Delivering robust financial software solutions, such as real-time trading platforms, secure payment gateways, and data-driven analytics tools, empowering financial institutions to stay ahead in a competitive market.",
    },
  ];
  return (
    <div className="mx-[16px] mt-[60px] mb-[20px] sm:mx-[2%] xl:mt-[80px] xl:mb-[90px] 2xl:mx-[120px]">
      {/* text */}
      <div className="flex flex-col">
        <div className="w-[127px]">
          {" "}
          <TextBadge text="FOCUS AREA" />
        </div>
        <div className="mt-[12px]">
          <h1 className="font-Jakarta text-[33px] leading-[40px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
            Shaping the Future of Scalable Systems
          </h1>
        </div>

        <div className="mt-[20px] 2xl:mt-[16px]">
          <h1 className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[18px] 2xl:leading-[24px]">
            At Quantum Labs, research is at the core of everything we do. We explore cutting-edge
            technologies to uncover new solutions and push the boundaries of what’s possible. Our
            research teams are dedicated to identifying trends, solving complex problems, and
            advancing the technology landscape through practical application.
          </h1>
        </div>
      </div>
      {/* text */}

      {/* Card section */}
      <div className="3xl:gap-x-[70px] mt-[30px] grid grid-cols-1 gap-[30px] xl:mt-[40px] xl:grid-cols-3">
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
