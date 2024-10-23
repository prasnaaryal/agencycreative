import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div>
      <div className="container  mx-auto flex flex-col items-center justify-center text-center space-y-8 p-8">
        <div>
          <p className="  font-semibold text-2xl text-[#377DFF] mb-6">About us</p>
          <h1 className="text-black font-bold text-5xl">Our Teammate</h1>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          <div className="relative col-span-7">
            {/* Main Image */}
            <Image
              className="relative z-20"
              src="/images/Rectangle 832.jpg"
              alt="aboutus"
              width={600}
              height={402}
            />

            {/* Decorative element in the top-left corner */}

            <Image
              className="absolute -top-3 -left-5 z-10 "
              src="/images/Group 2144 copy.png"
              width={98}
              height={60}
              alt="decorative element"
            />

            <Image
              className="absolute -bottom-3 right-14 z-10 "
              src="/images/Group 2144 copy.png"
              width={98}
              height={71}
              alt="decorative element"
            />
          </div>

          <div className="col-span-5 space-y-6 text-left py-6">
            <p className="text-black text-xl ">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p className="text-black text-xl mt-8">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>

            <div className="flex gap-4">
              <Button className="bg-[#377DFF] rounded-full w-[171px] h-[48px] font-bold">
                About us
              </Button>
              <Button
                variant="outline"
                className="border-[#377DFF] text-[#377DFF] rounded-full w-[171px] h-[48px] font-semibold "
              >
                <IoPlayCircleOutline />
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
