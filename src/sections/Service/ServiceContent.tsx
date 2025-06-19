import ServiceCard from "../../components/Service/ServiceCard";
import ImgA from "/Images/Service/Service-A.webp";
import ImgB from "/Images/Service/Service-B.webp";
import ImgC from "/Images/Service/Service-C.webp";
import ImgD from "/Images/Service/Service-D.webp";
import ImgE from "/Images/Service/Service-E.webp";
import ImgF from "/Images/Service/Service-F.webp";
import ImageSlider from "../../components/Service/ImageSlider";

export default function ServiceContent() {
  const services = [
    {
      image: ImgA,
      title: "Custom Software Development",
      description:
        "At Quantum Labs, we specialize in building custom software solutions that are designed specifically for your business. Whether you need an enterprise-grade application, a customer-facing platform, or a business automation tool, our team works with you from ideation to deployment, ensuring that the solution aligns with your goals. Our development process integrates the latest technologies and methodologies to deliver scalable, secure, and high-performance applications.",
    },
    {
      image: ImgB,
      title: "AI & Machine Learning",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgC,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgD,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgE,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgF,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgF,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
    {
      image: ImgF,
      title: "Cloud Infrastructure Services",
      description:
        "Harness the power of Artificial Intelligence and Machine Learning to drive business efficiency and gain a competitive edge. We specialize in building intelligent systems that can automate tasks, predict outcomes, and enhance user experiences. Whether it's natural language processing (NLP), predictive analytics, or deep learning, our team uses cutting-edge algorithms and frameworks to deliver solutions that transform data into actionable insights, making your business smarter and more agile.",
    },
  ];
  return (
    <div className="overflow-hidden bg-[#E6E8F3]">
      <div className="mx-[16px] py-[40px] sm:mx-[2%] 2xl:mx-[120px]">
        <div className="hidden gap-[24px] lg:grid lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="flex w-full items-center justify-center lg:hidden">
          <ImageSlider values={services} component={ServiceCard} />
        </div>
        <div className="mt-[40px] flex w-full items-center justify-center lg:hidden">
          <ImageSlider values={services} component={ServiceCard} />
        </div>
      </div>
    </div>
  );
}
