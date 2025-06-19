import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import ResearchFocus from "../sections/Research/ResearchFocus";
import ResearchHero from "../sections/Research/ResearchHero";
import ResearchImg from "../sections/Research/ResearchImg";
import ResearchPartners from "../sections/Research/ResearchPartners";

export default function research() {
  const sections = [
    { section: "researchhero", Component: ResearchHero },
    { section: "researchfocus", Component: ResearchFocus },
    { section: "researchimg", Component: ResearchImg },
    { section: "researchpartners", Component: ResearchPartners },
  ];

  return (
    <div className="w-full overflow-hidden scroll-smooth">
      {sections.map(({ section, Component }, index) => (
        <div key={section} id={section}>
          <ScrollSectionWrapper index={index}>
            <Component />
          </ScrollSectionWrapper>
        </div>
      ))}
    </div>
  );
}
