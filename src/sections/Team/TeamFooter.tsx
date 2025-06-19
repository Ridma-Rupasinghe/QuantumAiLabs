import Teamfooter from "/Images/Team/TeamFooter.webp";

export default function TeamFooter() {
  return (
    <div className="mx-auto mt-[2vh] max-w-[1920px] overflow-hidden xl:mt-0">
      <div className="mx-[16px] mb-10 flex flex-col items-center justify-between sm:mx-[2%] xl:mt-[32px] xl:flex-row xl:py-[80px] 2xl:mx-[120px]">
        <div className="order-2 mt-[40px] flex items-center justify-center xl:order-1 xl:mt-0">
          <img
            src={Teamfooter}
            alt="Team Footer"
            className="h2xl:w-[550px] 2sxl:w-[752px] w-[334px] xl:w-[500px] 2xl:w-[560px]"
          />
        </div>
        <div className="3xl:w-[852px] order-1 flex flex-col xl:order-2 xl:w-[600px]">
          <h1 className="font-Jakarta text-[32px] font-bold text-[#252525] xl:text-[40px] xl:leading-[60px] 2xl:text-[52px]">
            Together we build
          </h1>
          <div className="font-Jakarta mt-[16px] text-[14px] leading-[20px] text-[#252525] 2xl:text-[18px] 2xl:leading-[24px]">
            <h1>
              Attracting and nurturing top talent is at the heart of Quantum Labs. We collaborate
              closely with universities, offer internships, and provide research opportunities to
              ensure the next generation of talent is ready to innovate.
            </h1>
            <h1 className="mt-[24px]">
              Our team is composed of passionate, skilled individuals who are committed to creating
              cutting-edge solutions. We also invest in continuous learning and professional
              development, offering training programs and certifications to ensure our team remains
              at the forefront of technological advancements.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
