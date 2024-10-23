import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div>
      <div className="container  mx-auto flex flex-col items-center justify-center text-center space-y-8 p-8">
        <div>
          <p className="  font-semibold text-2xl text-[#377DFF]">About us</p>
          <h1 className="text-black font-bold text-5xl">Our Teammate</h1>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          <div className="relative col-span-7">
            {/* Main Image */}
            <Image
              src="/images/Rectangle 832.jpg"
              alt="aboutus"
              width={600}
              height={402}
            />

            {/* Decorative element in the top-left corner */}
            <div className="absolute top-0 left-0 z-10">
              <Image
                src="/images/Group 2144 copy.png"
                width={60}
                height={60}
                alt="decorative element"
              />
            </div>
          </div>

          <div className="col-span-5 space-y-6 text-left py-6">
            <p className="text-black ">
              We move with make a Creative Strategy for help your business goal,
              we help to improve your income by a services we have. make your
              content look interesting and make people look for your business
            </p>
            <p className="text-black">
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
