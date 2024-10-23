import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Testomonials = () => {
  return (
    <div className="container relative flex flex-col text-center items-center justify-center mx-auto p-8">
      <Image
        className="absolute top-6 left-2 rotate-45"
        src="/images/Group 2144 copy.png"
        width={98}
        height={71}
        alt="decorative element"
      />
      <div className=" space-y-10">
        <p className="text-[#377DFF] font-semibold">Testomonials</p>
        <h1 className="font-bold text-black text-5xl">People talk about us</h1>
      </div>

      <div className="mt-16 flex space-x-8">
        <Card className="p-8 w-[400px] rounded-lg shadow-lg text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Profile Image */}
            <Image
              src="/images/Ellipse 57.png"
              alt="Angel Rose"
              width={70}
              height={70}
              className="rounded-full"
            />

            {/* Name and Job Title */}
            <div className="text-left">
              <CardTitle className="text-[#377DFF] text-2xl font-bold">
                Angel Rose
              </CardTitle>
              <CardDescription className="text-[#b0b0b0] text-lg">
                Creative Manager
              </CardDescription>
            </div>
          </div>

          {/* Testimonial Content */}
          <CardContent>
            <p className="text-[#7a7a7a] text-md">
              There are many variations of passages of Lorem Ipsum majority,
              some by words which don't look right.
            </p>
          </CardContent>
        </Card>
        <Card className="p-8 w-[400px] rounded-lg shadow-lg text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Profile Image */}
            <Image
              src="/images/Ellipse 57.png"
              alt="Angel Rose"
              width={70}
              height={70}
              className="rounded-full"
            />

            {/* Name and Job Title */}
            <div className="text-left">
              <CardTitle className="text-[#377DFF] text-2xl font-bold">
                Angel Rose
              </CardTitle>
              <CardDescription className="text-[#b0b0b0] text-lg">
                Creative Manager
              </CardDescription>
            </div>
          </div>

          {/* Testimonial Content */}
          <CardContent>
            <p className="text-[#7a7a7a] text-md">
              There are many variations of passages of Lorem Ipsum majority,
              some by words which don't look right.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 w-[400px] rounded-lg shadow-lg text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {/* Profile Image */}
            <Image
              src="/images/Ellipse 57.png"
              alt="Angel Rose"
              width={70}
              height={70}
              className="rounded-full"
            />

            {/* Name and Job Title */}
            <div className="text-left">
              <CardTitle className="text-[#377DFF] text-2xl font-bold">
                Angel Rose
              </CardTitle>
              <CardDescription className="text-[#b0b0b0] text-lg">
                Creative Manager
              </CardDescription>
            </div>
          </div>

          {/* Testimonial Content */}
          <CardContent>
            <p className="text-[#7a7a7a] text-md">
              There are many variations of passages of Lorem Ipsum majority,
              some by words which don't look right.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Testomonials;
