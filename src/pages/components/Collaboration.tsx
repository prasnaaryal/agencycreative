import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Collaboration = () => {
  return (
    <div className="container relative grid grid-cols-12 mx-auto p-8">
      <Image
        className=" absolute left-2/4 top-20"
        src="/images/Group 2137.png"
        alt=""
        width={100}
        height={75}
      />
      <Image
        className=" absolute right-44 bottom-10"
        src="/images/Group 2140.png"
        alt=""
        width={200}
        height={50}
      />
      <div className="col-span-6 space-y-8">
        <h1 className="text-black text-6xl font-bold ">
          Interesting Collaboration With Us?
        </h1>
        <p className="text-[#464646] text-xl  ">
          Help you to reach your business goal
        </p>
        <Button className="rounded-full bg-[#377DFF] w-[193px] h-[48px] text-white">
          Get Started
        </Button>
      </div>
      <div className="col-span-6 flex relative space-x-2">
        <Image
          className=" absolute right-8"
          src="/images/Rectangle 840.png"
          alt=""
          width={325}
          height={288}
        />

        <Image
          className="relative  mt-28"
          src="/images/Rectangle 839.png"
          alt=""
          width={325}
          height={288}
        />
      </div>
    </div>
  );
};

export default Collaboration;
