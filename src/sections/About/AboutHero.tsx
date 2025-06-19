import AboutMobile from "/Images/About/About-Head-Mobile.webp";
import AboutDesktop from "/Images/About/About-Head-Desktop.webp";
import AboutSub from "/Images/About/About-Sub.webp";

export default function AboutHero() {
  const MainText =
    "font-Jakarta mt-[16px] text-justify text-[14px] leading-[20px] text-[#252525] xl:w-[363px] xl:leading-[24px] 2xl:text-[18px] ";
  const Title = "font-Jakarta text-[24px] font-bold text-[#001984] 2xl:text-[32px]";
  return (
    <div className="mx-auto mt-[16px] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="mx-[16px] mb-5 flex flex-col items-center justify-between sm:mx-[2%] xl:mt-[3vh] 2xl:mx-[120px]">
        {/* Image and text */}
        <div className="relative w-full">
          <img src={AboutMobile} alt="mobile" className="flex sm:hidden" />
          <img src={AboutDesktop} alt="desktop" className="hidden sm:flex" />
          <div className="absolute bottom-0 mx-[26px] mb-[23px] hidden text-[#fff] sm:flex sm:flex-col">
            <h1 className="font-Jakarta font-bold sm:text-[32px] sm:leading-[38px] lg:text-[48px] lg:leading-[52px] xl:text-[57px] xl:leading-[72px] 2xl:text-[68px]">
              Pioneering Tomorrow’s <p></p> Digital Solutions
            </h1>
            <h2 className="font-Jakarta mt-[20px] sm:text-[14px] sm:leading-[20px] lg:text-[16px] 2xl:text-[18px] 2xl:leading-[24px]">
              Leading the way with visionary technology that empowers enterprises and transforms
              industries worldwide.
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-[20px] text-center sm:hidden">
          <h1 className="font-Jakarta mt-[20px] text-[32px] leading-[40px] font-bold">
            Pioneering Tomorrow’s Digital Solutions
          </h1>
          <h2 className="font-Jakarta text-[14px] leading-[20px] font-bold">
            Leading the way with visionary technology that empowers enterprises and transforms
            industries worldwide.
          </h2>
        </div>
        {/* Image and text */}
        {/* Other Conent */}
        <div className="mt-[60px] flex w-full flex-col items-center justify-between xl:mt-[80px] xl:flex-row">
          <div className="flex flex-col">
            <h1 className={Title}>Our Vision</h1>
            <h2 className={MainText}>
              At Quantum Labs, we strive to be at the forefront of technological innovation. Our
              vision is to harness the power of cutting-edge technologies to create smarter, more
              efficient solutions that will drive the future of industries worldwide. We aim to
              build solutions that not only solve today’s problems but also anticipate tomorrow's
              needs.
            </h2>
          </div>
          <div className="mt-[30px] xl:mt-0">
            <img
              src={AboutSub}
              alt="subcription"
              className="3xl:w-[614px] w-[307px] xl:w-[314px] 2xl:w-[520px]"
            />
          </div>
          <div className="mt-[30px] flex flex-col xl:mt-0">
            <h1 className={Title}>Our Mission</h1>
            <h2 className={MainText}>
              Our mission is simple: to deliver high-quality, customized software solutions that
              empower businesses to grow, scale, and succeed in an ever-evolving digital world.
              Through constant innovation and collaboration with our clients, we ensure that each
              product we develop enhances operational efficiency and fosters long-term growth.
            </h2>
          </div>
        </div>

        {/* Other Conent */}
      </div>
    </div>
  );
}
