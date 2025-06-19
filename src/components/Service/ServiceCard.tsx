export type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
};

export default function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="3xl:w-[544px] 3xl:h-[544px] flex h-[539px] w-[327px] flex-col rounded-[16px] bg-[#fff] p-[16px] sm:h-auto sm:w-auto">
      <img
        src={image}
        alt={title}
        className="3xl:h-[264px] h-[188px] rounded-[16px] object-cover"
      />
      <h1 className="font-Jakarta mt-[20px] text-[16px] leading-[24px] font-bold 2xl:text-[20px]">
        {title}
      </h1>
      <h1 className="font-Jakarta mt-[12px] text-justify text-[14px] leading-[20px] 2xl:text-[16px] 2xl:leading-[24px]">
        {description}
      </h1>
    </div>
  );
}
