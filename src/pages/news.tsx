import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";
import Hero from "../sections/News/Hero";
import Image from "../sections/News/Image";
import Latest from "../sections/News/Latest";
import News from "../sections/News/News";

export default function ResearchPage() {
  const sections = [
    { section: "hero", Component: Hero },
    { section: "latest", Component: Latest },
    { section: "image", Component: Image },
    { section: "news", Component: News },
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
