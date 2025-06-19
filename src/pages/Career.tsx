import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import CareerHero from "../sections/Career/CareerHero";
import CareerService from "../sections/Career/CareerService";

export default function Career() {
  const sections = [
    { section: "aboutcareer", Component: CareerHero },
    { section: "servicecareer", Component: CareerService },
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
