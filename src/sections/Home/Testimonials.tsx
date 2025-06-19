import t1 from "/Images/Home/t1.png";
import t2 from "/Images/Home/t2.png";
import t3 from "/Images/Home/t3.png";

import CardTestimonials from "../../components/Home/CardTestimonials";

import ImageSlider from "../../components/Home/ImageSlider";
import TextBadge from "../../components/About/TextBadge";

export default function Testimonials() {
  const values = [
    {
      image: [t1],
      name: "Aarav Fernando",
      title: "CTO, NextCore Systems",
      description:
        "Quantum Labs delivered a custom solution that scaled perfectly with our startup's growth. Their team felt like an extension of ours — fast, focused, and genuinely invested.",
    },
    {
      image: [t2],
      name: "Meera Liyanage",
      title: "Head of Product, DataNova AI",
      description:
        "Their engineering quality is top-tier. We needed a machine learning model integrated into our platform, and they nailed it with precision and speed.",
    },
    {
      image: [t3],
      name: "Daniel Reyes",
      title: "Co-founder, CloudGrid.io",
      description:
        "From the first call to post-launch support, Quantum Labs exceeded expectations. Clear communication, strong tech, and total reliability.",
    },
    {
      image: [t1],
      name: "Aarav Fernando",
      title: "CTO, NextCore Systems",
      description:
        "Quantum Labs delivered a custom solution that scaled perfectly with our startup's growth. Their team felt like an extension of ours      — fast, focused, and genuinely invested.",
    },
    {
      image: [t2],
      name: "Meera Liyanage",
      title: "Head of Product, DataNova AI",
      description:
        "Their engineering quality is top-tier. We needed a machine learning model integrated into our platform, and they nailed it with precision and speed.",
    },
    {
      image: [t3],
      name: "Daniel Reyes",
      title: "Co-founder, CloudGrid.io",
      description:
        "From the first call to post-launch support, Quantum Labs exceeded expectations. Clear communication, strong tech, and total reliability.",
    },
    {
      image: [t1],
      name: "Aarav Fernando",
      title: "CTO, NextCore Systems",
      description:
        "Quantum Labs delivered a custom solution that scaled perfectly with our startup's growth. Their team felt like an extension of ours — fast, focused, and genuinely invested.",
    },
    {
      image: [t2],
      name: "Meera Liyanage",
      title: "Head of Product, DataNova AI",
      description:
        "Their engineering quality is top-tier. We needed a machine learning model integrated into our platform, and they nailed it with precision and speed.",
    },
    {
      image: [t3],
      name: "Daniel Reyes",
      title: "Co-founder, CloudGrid.io",
      description:
        "From the first call to post-launch support, Quantum Labs exceeded expectations. Clear communication, strong tech, and total reliability.",
    },
  ];

  return (
    <div className="relative h-auto w-full">
      <div
        className={`3xl:px-[120px] hidden w-full items-center justify-center px-[2%] py-[5vh] xl:flex xl:pt-[96px]`}
      >
        <div className="flex w-full flex-col items-start justify-between lg:gap-[2vh]">
          <div className="flex w-full flex-col items-center justify-between gap-[0.6vh]">
            <div className="rounded-lg bg-[#FFF2E7] p-1">
              <p className="font-Arial hmd:text-[6.5px] hlg:text-[8.5px] hxl:text-[11px] h2xl:text-[12.5px] h3xl:text-[14px] text-center tracking-widest sm:text-[5.5px] md:text-[7px] lg:text-[9.5px] xl:text-[12px] 2xl:text-[13px]">
                TESTIMONIALS
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta text-center text-[43px] font-[700] text-[#252525]">
                What Our Clients Say
              </p>
            </div>

            <div className="w-full">
              <p className="font-Jakarta text-center text-[16.5px]">
                Insights from our clients on how our work helped them scale smarter, move faster,
                and build better.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center py-[2vh]">
            <ImageSlider values={values} component={CardTestimonials} />
          </div>
        </div>
      </div>

      <div className="mt-[60px] flex w-full flex-col items-center justify-between px-[16px] xl:hidden">
        <div className="flex w-full flex-col items-center justify-between gap-[12px]">
          <div className="w-[144px]">
            {" "}
            <TextBadge text="TESTIMONIALS" />
          </div>

          <div className="w-full">
            <p className="font-Jakarta text-center text-[32px] leading-[40px] font-[700] text-[#252525]">
              What Our Clients Say
            </p>
          </div>

          <div className="mt-[6px] w-full">
            <p className="font-Jakarta text-center text-[14px]">
              Insights from our clients on how our work helped them scale smarter, move faster, and
              build better.
            </p>
          </div>
        </div>

        <div className="mt-[40px] flex w-full items-center justify-center">
          <ImageSlider values={values} component={CardTestimonials} />
        </div>
      </div>
    </div>
  );
}
