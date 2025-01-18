import { Text, Img, Heading } from "./..";
import React from "react";

export default function Header41({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center w-full gap-[22px]`}>
      <div className="w-full rounded-lg bg-deep_orange-500_16 p-3.5 shadow-xs">
        <div className="flex flex-col items-start gap-2.5">
          <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
            Event Planners
          </Heading>
          <div className="flex items-start gap-2.5 self-stretch">
            <a href="#">
              <Img src="images/img_star_svgrepo_com.svg" alt="Star Rating" className="h-[20px]" />
            </a>
            <Text
              as="p"
              className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full rounded-lg bg-deep_orange-500_16 p-3.5">
        <div className="mt-1.5 flex flex-col items-start gap-2">
          <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
            Photographers
          </Heading>
          <div className="flex items-start gap-2.5 self-stretch">
            <a href="#">
              <Img src="images/img_star_svgrepo_com.svg" alt="Star Rating" className="h-[20px] w-[20px]" />
            </a>
            <Text
              as="p"
              className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="rounded-lg bg-deep_orange-500_16 p-3.5">
          <div className="flex flex-col items-start gap-2.5">
            <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
              Caterers
            </Heading>
            <div className="flex items-start gap-2 self-stretch">
              <a href="#">
                <Img src="images/img_star_svgrepo_com.svg" alt="Star Rating" className="h-[20px] w-[20px]" />
              </a>
              <Text
                as="p"
                className="w-[94%] self-center text-[15px] font-normal leading-[144.7%] tracking-[-0.60px] text-gray-700"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </Text>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
