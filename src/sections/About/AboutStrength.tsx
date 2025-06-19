import ImageSlider from "../../components/About/ImageSlider";
import TextBadge from "../../components/About/TextBadge";
import SubtractA from "/Images/About/Subtract-A.webp";
import SubtractB from "/Images/About/Subtract-B.webp";
import SubtractC from "/Images/About/Subtract-C.webp";
import SubtractD from "/Images/About/Subtract-D.webp";

export default function AboutStrength() {
  return (
    <div className="mx-[16px] mt-[60px] mb-[20px] sm:mx-[2%] 2xl:mx-[120px]">
      {/* Mobile */}
      <div className="flex flex-col xl:hidden">
        <div className="w-[153px]">
          <TextBadge text="OUR STRENGTH" />
        </div>

        <div className="mt-[12px]">
          <h1 className="font-Jakarta text-[33px] leading-[40px] font-bold text-[#252525]">
            Empowering Talent, Driving Progress
          </h1>
        </div>

        <div className="mx-[16px] mt-[36px]">
          <ImageSlider />
        </div>

        <div className="font-Jakarta mt-[20px] text-justify text-[14px] leading-[20px]">
          <p>
            Attracting and nurturing top talent is at the heart of Quantum Labs. We collaborate
            closely with universities, offer internships, and provide research opportunities to
            ensure the next generation of talent is ready to innovate.
          </p>
          <p className="mt-[20px]">
            Our team is composed of passionate, skilled individuals who are committed to creating
            cutting-edge solutions. We also invest in continuous learning and professional
            development, offering training programs and certifications to ensure our team remains at
            the forefront of technological advancements.
          </p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden w-full xl:flex">
        <div className="flex w-full items-center justify-between">
          {/* Left Side - 2x2 Image Grid using absolute positioning */}
          <div className="3xl:w-[831px] 3xl:h-[879px] relative my-[74px] flex xl:h-[579px] xl:w-[550px] 2xl:h-[679px] 2xl:w-[631px]">
            <div className="absolute top-0 ml-[32px]">
              <img
                src={SubtractD}
                alt=""
                className="3xl:w-[441px] 3xl:h-[392px] h-auto xl:w-[300px] 2xl:w-[341px]"
              />
            </div>
            <div className="absolute bottom-0 xl:mb-[70px] 2xl:mb-[135px]">
              <img
                src={SubtractC}
                alt=""
                className="3xl:w-[315px] 3xl:h-[321px] h-auto xl:w-[195px] 2xl:w-[215px]"
              />
            </div>
            <div className="absolute right-0 bottom-0 mr-[52px]">
              <img
                src={SubtractB}
                alt=""
                className="3xl:w-[412px] 3xl:h-[392px] h-auto xl:w-[272px] 2xl:w-[312px]"
              />
            </div>
            <div className="absolute right-0 xl:mt-[70px] 2xl:mt-[138px]">
              <img
                src={SubtractA}
                alt=""
                className="3xl:w-[315px] 3xl:h-[321px] h-auto xl:w-[175px] 2xl:w-[215px]"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="ml-8 flex flex-col justify-center xl:max-w-[500px] 2xl:max-w-[541px]">
            <div className="mb-4">
              <div className="w-[153px]">
                <TextBadge text="OUR STRENGTH" />
              </div>
            </div>

            <h1 className="font-Jakarta mb-4 text-[40px] leading-[60px] font-bold 2xl:text-[52px]">
              Empowering Talent, Driving Progress
            </h1>

            <p className="font-Jakarta mb-4 text-[14px] leading-[20px] 2xl:text-[18px] 2xl:leading-[24px]">
              Attracting and nurturing top talent is at the heart of Quantum Labs. We collaborate
              closely with universities, offer internships, and provide research opportunities to
              ensure the next generation of talent is ready to innovate.
            </p>

            <p className="font-Jakarta text-[14px] leading-[20px] 2xl:text-[18px] 2xl:leading-[24px]">
              Our team is composed of passionate, skilled individuals who are committed to creating
              cutting-edge solutions. We also invest in continuous learning and professional
              development, offering training programs and certifications to ensure our team remains
              at the forefront of technological advancements.
            </p>
          </div>
        </div>
      </div>
      {/* End Desktop */}
    </div>
  );
}
