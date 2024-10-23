import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LuMonitor } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { CiPen } from "react-icons/ci";
import { FiTv } from "react-icons/fi";

const OurServices = () => {
  return (
    <div className="container grid grid-cols-12 items-center justify-center gap-14 p-8 mx-auto ">
      <div className="col-span-6 text-left">
        <p className="text-[#377DFF] mb-8">Our Services</p>
        <h1 className="text-black font-semibold text-5xl">
          Perfect and Fast Movement
        </h1>
        <p className="text-[#464646] m-4">
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your acontent
          look interesting and make people look for your business
        </p>
        <div className="w-full flex justify-end ">
          <Button variant={"link"} className="text-[#377DFF]">
            Read more <HiArrowRight className="text-right" />
          </Button>
        </div>
      </div>

      <div className="col-span-6">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6 flex flex-col items-center justify-center hover:drop-shadow-md hover:bg-white border rounded-xl w-full h-[250px] p-6 ">
            {/* Monitor Icon with circular background */}
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#377DFF] rounded-full">
              <LuMonitor className="w-[42px] h-[42px] text-white" />
            </div>

            <p className="text-center font-semibold text-black text-lg mt-4">
              Social Media Management
            </p>
          </div>

          <div className="col-span-6 flex flex-col items-center justify-center hover:drop-shadow-md border rounded-xl w-full h-[250px] p-6 space-y-4">
            {/* Monitor Icon with circular background */}
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#FF2D2D] rounded-full">
              <CiSettings className="w-[42px] h-[42px] text-white" />
            </div>

            <p className="text-center font-semibold text-black text-lg mt-4">
              Search Engine Opimization
            </p>
          </div>

          <div className="col-span-6 flex flex-col items-center justify-center hover:drop-shadow-md border rounded-xl w-full h-[250px] p-6 space-y-4">
            {/* Monitor Icon with circular background */}
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#7CE761] rounded-full">
              <CiPen className="w-[42px] h-[42px] text-white" />
            </div>

            <p className="text-center font-semibold text-black text-lg mt-4">
              Design
            </p>
          </div>

          <div className="col-span-6 flex flex-col items-center justify-center hover:drop-shadow-md border rounded-xl w-full h-[250px] p-6 space-y-4">
            {/* Monitor Icon with circular background */}
            <div className="flex items-center justify-center w-[100px] h-[100px] bg-[#FFA800] rounded-full">
              <FiTv className="w-[42px] h-[42px] text-white" />
            </div>

            <p className="text-center font-semibold text-black text-lg mt-4">
              Ads
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
