import m1 from "/Images/Home/AWS.webp";
import m2 from "/Images/Home/Binance.webp";
import m3 from "/Images/Home/CertiK.webp";
import m4 from "/Images/Home/Digitalocean.webp";
import m5 from "/Images/Home/Firebase.webp";
import m6 from "/Images/Home/GateIO.webp";
import m7 from "/Images/Home/Hostinger.webp";
import m8 from "/Images/Home/Kucoin.webp";
import m9 from "/Images/Home/MongoDB.webp";
import m10 from "/Images/Home/rubic.webp";
import m11 from "/Images/Home/Namecheap.webp";
import m12 from "/Images/Home/OpenAI.webp";
import m13 from "/Images/Home/Uniswap.webp";
import m14 from "/Images/Home/unity.webp";
import m15 from "/Images/Home/unreal.webp";
import m16 from "/Images/Home/redis.webp";

import Marquee from "react-fast-marquee";

export default function MarqueeComp() {
  const images = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16];

  return (
    <Marquee speed={50} gradient={false} direction="left" pauseOnHover>
      {images.map((src, index) => (
        <div
          key={index}
          className="flex items-center justify-center px-2 md:px-5 lg:px-7 xl:px-9 2xl:px-11"
        >
          <img
            src={src}
            className="w-[140px] object-contain md:w-[110px] lg:w-[130px] xl:w-[165px] 2xl:w-[200px]"
          />
        </div>
      ))}
    </Marquee>
  );
}
