import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import AboutHero from "../sections/About/AboutHero";
import AboutInnovation from "../sections/About/AboutInnovation";
import AboutServing from "../sections/About/AboutServing";
import AboutStrength from "../sections/About/AboutStrength";

export default function About() {
  const sections = [
    { section: "aboutus", Component: AboutHero },
    { section: "innovation", Component: AboutInnovation },
    { section: "serving", Component: AboutServing },
    { section: "strength", Component: AboutStrength },
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
