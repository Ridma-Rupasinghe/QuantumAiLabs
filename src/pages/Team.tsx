import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import TeamContent from "../sections/Team/TeamContent";
import TeamFooter from "../sections/Team/TeamFooter";
import TeamHero from "../sections/Team/TeamHero";

export default function Team() {
  const sections = [
    { section: "teamhero", Component: TeamHero },
    { section: "teamcontent", Component: TeamContent },
    { section: "teamfooter", Component: TeamFooter },
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
