import { Helmet } from "react-helmet";
import { Img } from "../../components";
import React, { Suspense } from "react";

export default function FramePage() {
  return (
    <>
      <Helmet>
        <title>Frame - Enhance Your Projects</title>
        <meta
          name="description"
          content="Discover the power of framing to elevate your projects. Our Frame feature offers a blank canvas to bring your creative and professional visions to life."
        />
      </Helmet>
      <div className="flex w-full justify-center border border-solid border-black-900_02 py-[148px] shadow-lg lg:py-8 md:py-5 sm:py-4">
        <div className="container-6xl flex justify-center px-14 lg:px-5 md:px-5">
          <div className="flex w-[68%] justify-center border border-solid border-black-900_02 bg-white-a700 shadow-lg lg:w-full md:w-full">
            <div className="flex w-full gap-[22px] md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {[...Array(4)].map((d, index) => (
                  <Img
                    key={"imageList" + index}
                    src="images/img_rectangle_11.png"
                    alt="First Image"
                    className="h-[326px] w-[24%] rounded-[14px] object-contain md:w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
