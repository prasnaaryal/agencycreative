import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const OurPortfolio = () => {
  return (
    <div className="container flex flex-col text-center items-center justify-center mx-auto">
      <div className=" relative space-y-10">
        <p className="text-[#377DFF] font-semibold">Our Portfolio</p>
        <h1 className="font-bold text-black text-5xl">What do we do</h1>
        <p className="text-[#464646]">
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>

        <Image
          className="absolute top-6 -right-14 invert "
          src="/images/Group 2144 copy.png"
          width={98}
          height={71}
          alt="decorative element"
        />
      </div>

      <div className="mt-16 ">
        <div className=" flex space-x-20">
          <div className="relative">
            <Image
              src="/images/Rectangle 834.png"
              alt="designbyteapp"
              width={350}
              height={350}
              className="mt-10"
              objectFit="cover"
            />
            <p className="absolute bottom-8 left-4 text-white font-semibold text-2xl">
              Design byte App
            </p>
          </div>

          <div className="relative">
            <Image
              src="/images/Rectangle 834.png"
              alt="cloudapp"
              width={400}
              height={400}
              objectFit="cover"
              className="relative z-20"
            />
            <p className="absolute z-30 bottom-8 left-4  text-white font-semibold text-2xl">
              Cloud App
            </p>

            <Image
              className="absolute top-20 -left-8 z-10 "
              src="/images/Group 2144 copy.png"
              width={98}
              height={71}
              alt="decorative element"
            />
          </div>

          <div className="relative">
            <Image
              src="/images/Rectangle 834.png"
              alt=""
              width={350}
              height={350}
              className="mt-10"
              objectFit="cover"
            />
            <p className="absolute bottom-8 left-4 text-white font-semibold text-2xl">
              Design Furniture App
            </p>
          </div>
        </div>

        <Button
          variant={"outline"}
          className="text-[#377DFF] mt-10 rounded-full w-[226px] h-[48px] border-[#377DFF]  "
        >
          See All Portfolio
        </Button>
      </div>
    </div>
  );
};

export default OurPortfolio;
