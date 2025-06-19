import Card from "../../components/About/Card";
import TextBadge from "../../components/About/TextBadge";
import Laptop from "/Images/About/Laptop.webp";
import Lightbulb from "/Images/About/Lightbulb.webp";
import Structure from "/Images/About/Structure.webp";
import Chart from "/Images/About/Chart.webp";
import Innovation from "/Images/About/About-Innovation.webp";

export default function AboutInnovation() {
  const cardData = [
    {
      iconSrc: Laptop,
      title: "Expertise Across Industries",
      description:
        "We serve industries like healthcare, finance, logistics, education, and e-commerce, developing tailored software solutions that meet their unique needs.",
    },
    {
      iconSrc: Lightbulb,
      title: "Global Reach with Local Expertise",
      description:
        "Our team combines local technical talent with global business knowledge, allowing us to provide world-class services and support for clients worldwide.",
    },
    {
      iconSrc: Structure,
      title: "Collaborative Innovation",
      description:
        "We actively engage with clients at every step, turning innovative ideas into practical, user-centric solutions that drive business success.",
    },
    {
      iconSrc: Chart,
      title: "Dedicated Teams for Long-Term Partnerships",
      description:
        "Our highly skilled, dedicated teams work closely with clients to understand their challenges, ensuring the creation of custom software that adds value and facilitates long-term growth.",
    },
  ];

  return (
    <div className="mt-[60px] bg-[#F3F3F3] xl:mt-0">
      <div className="mx-[16px] sm:mx-[2%] 2xl:mx-[120px]">
        {/* Frist Content  */}
        <div className="flex flex-col items-center justify-between py-[20px] xl:flex-row xl:py-[80px]">
          <div className="flex flex-col xl:w-[600px] 2xl:w-[828px]">
            {/* text content */}
            <div className="flex flex-col">
              <div className="w-[117px]">
                {" "}
                <TextBadge text="OUR STORY" />
              </div>
              <div className="mt-[12px]">
                <h1 className="font-Jakarta text-[32px] leading-[40px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
                  Building the Future with Innovation
                </h1>
              </div>
              <div className="font-Jakarta mt-[16px] text-[14px] leading-[20px] text-[#252525] 2xl:text-[18px] 2xl:leading-[24px]">
                <h1>
                  At Quantum Labs, we blend the technical prowess of Sri Lanka with innovative
                  thinking to drive progress in the global tech landscape.
                </h1>
                <h1 className="mt-[24px]">
                  Our expertise spans across various industries, and we specialize in building and
                  managing dedicated, high-performance software development teams capable of
                  delivering end-to-end solutions for complex challenges.
                </h1>
              </div>
            </div>
            {/* text content */}
            {/* Card section */}
            <div className="mt-[30px] flex flex-col items-center space-y-[16px] 2xl:mt-[40px]">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  iconSrc={card.iconSrc}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>

            {/* Card section */}
          </div>
          {/* Frist Content  */}
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src={Innovation}
              alt="Innovation"
              className="3xl:w-[753px] 2sxl:w-[550px] h2xl:w-[650px] w-[398px] xl:w-[500px] 2xl:w-[430px]"
            />
          </div>

          {/* Image */}
        </div>
      </div>
    </div>
  );
}
