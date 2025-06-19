import Hero from "../sections/Home/Hero";
import About from "../sections/Home/About";
import Services from "../sections/Home/Services";
import Testimonials from "../sections/Home/Testimonials";
import Research from "../sections/Home/Research";
import ScrollSectionWrapper from "../components/Common/ScrollFadeWrapper";

export default function Home() {
  const sections = [
    { section: "home", Component: Hero },
    { section: "about", Component: About },
    { section: "services", Component: Services },
    { section: "testimonials", Component: Testimonials },
    { section: "research", Component: Research },
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
