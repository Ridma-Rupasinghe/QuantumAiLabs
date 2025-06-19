import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import ServiceContent from "../sections/Service/ServiceContent";
import ServiceFooter from "../sections/Service/ServiceFooter";
import ServiceHero from "../sections/Service/ServiceHero";

export default function Service() {
  const sections = [
    { section: "servicehero", Component: ServiceHero },
    { section: "serviceconetnet", Component: ServiceContent },
    { section: "servicefooter", Component: ServiceFooter },
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
