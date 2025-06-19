import TextBadge from "../../components/About/TextBadge";
import ImageSlider from "../../components/Home/ImageSlider";
import ValueCard from "../../components/News/CardNews";

import n1 from "/Images/News/n1.webp";
import n2 from "/Images/News/n2.webp";
import n3 from "/Images/News/n3.webp";
import n4 from "/Images/News/n4.webp";
import n5 from "/Images/News/n5.webp";
import n6 from "/Images/News/n6.webp";

export default function Latest() {
  const values = [
    {
      image: [n1],
      name: "News 1",
      title: "How To Build Innovative  Solutions.",
      description:
        "Discover our most recent innovations, product launches, and expert insights that are shaping the future of technology.",
    },
    {
      image: [n2],
      name: "News 2",
      title: "Digital Transformation: Adapting to the Future of Business.",
      description:
        "Explore how businesses leverage technology for efficiency, productivity, and sustainability in the digital age.",
    },
    {
      image: [n3],
      name: "News 3",
      title: "Emerging Trends in AI and Machine Learning.",
      description:
        "Stay informed with the latest advancements in AI, ML, and how they’re redefining industries worldwide.",
    },
    {
      image: [n4],
      name: "News 4",
      title: "Why Cloud Computing Matters Now More Than Ever.",
      description:
        "Cloud technologies are revolutionizing business models. Learn about their impact and strategic value.",
    },
    {
      image: [n5],
      name: "News 5",
      title: "Cybersecurity Essentials: Staying Ahead of Threats.",
      description:
        "Protecting your digital assets is critical. Understand the tools and strategies to build cyber resilience.",
    },
    {
      image: [n6],
      name: "News 6",
      title: "Sustainable Tech: Innovation with a Green Focus.",
      description:
        "See how technology companies are driving eco-conscious solutions and sustainable product design.",
    },
  ];

  return (
    <div className="relative h-auto w-full bg-white">
      {/* Desktop View */}
      <div className="hidden w-full items-center justify-center px-[16px] py-[5vh] lg:flex lg:px-[2%]">
        <div className="flex w-full flex-col items-center">
          <div className="w-[65px]">
            <TextBadge text="NEWS" />
          </div>
          <p className="font-Jakarta mt-[12px] text-center text-[36px] font-bold text-[#252525] xl:text-[43px] 2xl:text-[52px]">
            Insights and Innovations
          </p>
          <p className="font-Jakarta mt-[20px] max-w-[1200px] text-center text-[14px] text-[#252525] xl:text-[16px] 2xl:text-[18px]">
            Our Research & News section is your trusted resource for the latest updates,
            groundbreaking research, and company milestones. Discover our most recent innovations,
            product launches, and expert insights that are shaping the future of technology.
          </p>

          <div className="3xl:grid 3xl:grid-cols-3 hidden w-full gap-[40px] py-[2vh]">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                image={value.image}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          <div className="3xl:hidden mt-[30px] flex w-full">
            <ImageSlider values={values} component={ValueCard} />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex w-full flex-col items-center justify-between px-[3.72%] py-[4vh] lg:hidden">
        <div className="flex w-full flex-col items-center gap-[20px]">
          <div className="w-[65px]">
            <TextBadge text="NEWS" />
          </div>
          <p className="font-Jakarta text-center text-[24px] font-bold text-[#252525]">
            Insights and Innovations
          </p>
          <p className="font-Jakarta text-center text-[16px] text-[#252525]">
            Our Research & News section is your trusted resource for the latest updates,
            groundbreaking research, and company milestones. Discover our most recent innovations,
            product launches, and expert insights that are shaping the future of technology.
          </p>
        </div>

        <div className="mt-[30px] w-full">
          <ImageSlider values={values} component={ValueCard} />
        </div>
      </div>
    </div>
  );
}
