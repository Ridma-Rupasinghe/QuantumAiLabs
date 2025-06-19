import TextBadge from "../../components/About/TextBadge";
import ValueCardSlider from "../../components/Research/ValueCardSlider";

const values = [
  {
    title: "University Research Collaborations",
    description:
      "We collaborate closely with leading universities to drive forward-thinking research in areas such as Artificial Intelligence (AI), quantum computing, and sustainable technologies. By partnering with academic institutions, we gain access to the latest research, scientific insights, and technological advancements.",
  },
  {
    title: "Tech Industry Alliances",
    description:
      "At Quantum Labs, we value our strategic partnerships with top technology giants. These alliances enable us to leverage their platforms, tools, and infrastructure to create scalable, secure, and future-ready solutions. By working with the best in the tech industry, we gain access to advanced technologies, development frameworks, and cutting-edge resources.",
  },
  {
    title: "Government and Research Institutions",
    description:
      "Our engagement with governmental bodies and research institutions plays a crucial role in shaping policies, standards, and technological innovations that affect industries worldwide. We collaborate on research projects that influence global technology trends, support innovation, and guide industry standards.",
  },
  {
    title: "University Research Collaborations",
    description:
      "We collaborate closely with leading universities to drive forward-thinking research in areas such as Artificial Intelligence (AI), quantum computing, and sustainable technologies. By partnering with academic institutions, we gain access to the latest research, scientific insights, and technological advancements.",
  },
  {
    title: "Tech Industry Alliances",
    description:
      "At Quantum Labs, we value our strategic partnerships with top technology giants. These alliances enable us to leverage their platforms, tools, and infrastructure to create scalable, secure, and future-ready solutions. By working with the best in the tech industry, we gain access to advanced technologies, development frameworks, and cutting-edge resources.",
  },
  {
    title: "Government and Research Institutions",
    description:
      "Our engagement with governmental bodies and research institutions plays a crucial role in shaping policies, standards, and technological innovations that affect industries worldwide. We collaborate on research projects that influence global technology trends, support innovation, and guide industry standards.",
  },
];

export default function ResearchPartners() {
  return (
    <div className="mt-[44px] xl:mt-0">
      <div className="m-[16px] flex flex-col sm:mx-[2%] 2xl:mx-[120px] 2xl:my-[96px]">
        <div className="w-[107px]">
          <TextBadge text="PARTNERS" />
        </div>
        <div className="mt-[12px]">
          <h1 className="font-Jakarta text-[33px] leading-[40px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
            Collaborations & Partnerships
          </h1>
        </div>
        <div className="mt-[20px] 2xl:mt-[16px]">
          <h1 className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[18px] 2xl:leading-[24px]">
            Accelerating Innovation through Strategic Alliances
          </h1>
        </div>

        <div className="mt-[40px] mb-[10px] flex md:mb-0">
          <ValueCardSlider items={values} />
        </div>
      </div>
    </div>
  );
}
