import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute  top-60 left-20 ">
        <Image
          src="/images/Ellipse 90.png"
          width={60}
          height={60}
          alt={"banner"}
        />
      </div>
      <div className="absolute  top-80 right-20 ">
        <Image
          src="/images/Ellipse 90.png"
          width={60}
          height={60}
          alt={"banner"}
        />
      </div>

      <div className="absolute top-10 right-0">
        <Image
          src="/images/Ellipse 89.png"
          width={60}
          height={60}
          alt={"banner"}
        />
      </div>
      <div className="relative container flex flex-col items-center justify-center text-center gap-8 mx-auto p-8">
        <div className="">
          <h1 className="text-black drop-shadow-lg text-6xl font-extrabold ">
            Make your dream{" "}
          </h1>
          <h1 className="text-black shadow-sm text-6xl font-extrabold mt-6">
            business goal come true
          </h1>

          <p className="text-[#464646] text-xl mt-6">
            when you need us for improve your business,{" "}
          </p>
          <p className="text-[#464646] text-xl ">
            then come with us to help your business have reach it, you just sit
            and feel that goal
          </p>

          <Button className="bg-[#377DFF] rounded-full mt-4 w-[201px] h-[48px]">
            Start Project
          </Button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/banner.png"
            width={985.25}
            height={615.91}
            alt={"banner"}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
