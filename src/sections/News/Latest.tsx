import TextBadge from "../../components/About/TextBadge";
import CardFocus from "../../components/News/CardLatest";

import l1 from "/Images/News/l1.webp";
import l2 from "/Images/News/l2.webp";
import l3 from "/Images/News/l3.webp";

export default function Latest() {
  const values = [
    {
      image: l1,
      title: "Ethical AI for Responsible Automation",
      description: "Building transparent, fair, and accountable AI systems.",
    },
    {
      image: l2,
      title: "Ethical AI for Responsible Automation",
      description: "Building transparent, fair, and accountable AI systems.",
    },
    {
      image: l3,
      title: "Ethical AI for Responsible Automation",
      description: "Building transparent, fair, and accountable AI systems.",
    },
  ];
  return (
    <div className="relative h-auto w-full bg-white">
      <div className="hidden w-full items-center justify-center px-[16px] py-[3vh] lg:flex lg:px-[2%]">
        <div className="flex w-full flex-col items-start justify-between gap-[0.6vh]">
          <div className="w-[80px]">
            {" "}
            <TextBadge text="LATEST" />
          </div>

          <div className="grid w-full grid-rows-2 gap-[40px] py-[2vh] lg:grid-cols-2 2xl:mt-[40px] 2xl:grid-cols-3 2xl:grid-rows-1">
            {values.map((value, index) => (
              <CardFocus
                key={index}
                image={value.image}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hlg:px-[6.25%] flex w-full flex-col items-center justify-between px-[3.72%] lg:hidden">
        <div className="flex w-full flex-col items-start justify-between gap-[1.5vh]">
          <div className="w-[80px]">
            {" "}
            <TextBadge text="LATEST" />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 grid-rows-1 gap-[16px] py-[2vh] sm:grid-cols-2 sm:grid-rows-2">
          {values.map((value, index) => (
            <CardFocus
              key={index}
              image={value.image}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
