import Contact from "./Contact";

export default function ContactForm() {
  return (
    <div className="mb-[39px] md:mb-[54px]">
      <div className="3xl:px-[120px] bg-[#F2F2F2] px-[16px] py-[12px] sm:px-[2%] lg:py-[60px]">
        <div className="flex flex-col 2xl:flex-row 2xl:justify-between">
          {/*Start Description */}
          <div className="flex flex-col 2xl:w-[470px]">
            <div className="">
              <h1 className="font-Jakarta text-[24px] leading-[32px] font-bold 2xl:text-[32px] 2xl:leading-[40px]">
                Unlock the power of Quantum AI Labs' cutting- edge solutions
              </h1>
            </div>

            <div className="mt-[20px] 2xl:mt-[40px]">
              <h1 className="font-Jakarta text-[14px] leading-[20px] font-bold 2xl:text-[16px] 2xl:leading-[24px]">
                Request a demo and explore how Quantum AI Labs can help you:
              </h1>
            </div>

            <div className="mt-[20px] 2xl:mt-[40px]">
              <ul className="font-Jakarta list-disc space-y-[16px] pl-5 text-base text-[14px] leading-[20px] 2xl:space-y-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
                <li>
                  Empower your organization with the flexibility to swiftly adapt to dynamic
                  environments.
                </li>
                <li>
                  Optimize workflows and enhance visibility across operations to eliminate
                  inefficiencies.
                </li>
                <li>
                  Uncover value at every stage to boost performance and elevate customer loyalty.
                </li>
              </ul>
            </div>

            <div className="mt-[20px] 2xl:mt-[40px]">
              <h1 className="font-Jakarta text-[14px] leading-[20px]">
                Harness the strength of advanced technology with scalable solutions across
                Artificial Intelligence (AI), Machine Learning (ML), Data Analytics, Predictive
                Modeling, Automation, Natural Language Processing (NLP), and Quantum Computing, all
                designed to accelerate growth and innovation.
              </h1>
            </div>
          </div>
          {/*End Description */}

          {/* Apply Now */}
          <div className="mt-[20px] md:mt-0">
            <Contact />
          </div>

          {/* Apply Now */}
        </div>
      </div>
    </div>
  );
}
