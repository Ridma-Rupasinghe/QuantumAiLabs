import ResearchMobile from "/Images/Research/homeM.webp";
import ResearchDesktop from "/Images/Research/homeD.webp";

export default function ResearchHero() {
  return (
    <div className="mx-auto mt-[16px] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="mx-[16px] mb-5 flex flex-col items-center justify-between sm:mx-[2%] xl:mt-[3vh] 2xl:mx-[120px]">
        {/* Image and text */}
        <div className="relative w-full">
          <img src={ResearchMobile} alt="mobile" className="flex w-full sm:hidden" />
          <img src={ResearchDesktop} alt="desktop" className="hidden rounded-[32px] sm:flex" />
          <div className="absolute bottom-0 mx-[26px] mb-[23px] hidden text-[#fff] sm:flex sm:flex-col">
            <h1 className="font-Jakarta font-bold sm:text-[32px] sm:leading-[38px] lg:text-[48px] lg:leading-[52px] xl:text-[57px] xl:leading-[72px] 2xl:text-[68px]">
              Innovating for <p></p>Tomorrow’s Solutions
            </h1>
            <h2 className="font-Jakarta mt-[20px] sm:text-[14px] sm:leading-[20px] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
              Transforming data into actionable insights through advanced machine learning
              algorithms and AI-driven solutions.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-[20px] text-center sm:hidden">
          <h1 className="font-Jakarta mt-[20px] text-[32px] leading-[40px] font-bold">
            Innovating for Tomorrow’s Solutions
          </h1>
          <h2 className="font-Jakarta text-[14px] leading-[20px] font-bold text-[#252525]">
            Transforming data into actionable insights through advanced machine learning algorithms
            and AI-driven solutions.
          </h2>
        </div>
      </div>
    </div>
  );
}
