import { Heading, Img } from "./..";
import React, { Suspense } from "react";

export default function InboxColumnrecommend({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start gap-[30px] md:ml-0 flex-1`}>
      <Heading size="heading2xl" as="h5" className="text-[20px] font-semibold tracking-[-0.80px] text-black-900_01">
        Recommended based on your projects
      </Heading>
      <div className="flex gap-[22px] self-stretch md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {[...Array(4)].map((d, index) => (
            <div key={"projectsList" + index} className="flex w-[24%] flex-col items-start gap-7 md:w-full">
              <Img
                src="images/img_rectangle_11.png"
                alt="Item Image"
                className="h-[326px] w-full rounded-[14px] object-cover md:h-auto"
              />
              <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                Sit amet, consectetur
              </Heading>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
