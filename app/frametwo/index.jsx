import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import React from "react";

export default function FrameTwoPage() {
  return (
    <>
      <Helmet>
        <title>Live Entertainment & Talent - Book the Best DJs and Performers</title>
        <meta
          name="description"
          content="Elevate your event with top-notch live entertainment. Find and book the best talent, DJs, and performers for an unforgettable experience."
        />
      </Helmet>
      <div className="flex w-full flex-col overflow-auto">
        <header className="flex w-full items-center justify-center gap-5">
          <div className="flex w-full rounded-lg bg-deep_orange-500 p-3.5">
            <div className="mx-auto flex w-full max-w-[336px] flex-col items-start gap-2.5">
              <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                Talent
              </Heading>
              <div className="flex items-start gap-2.5 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Talent Image" className="h-[20px]" />
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
          <div className="flex w-full rounded-lg bg-deep_orange-500 p-3.5">
            <div className="container-xs flex flex-col items-start gap-2.5">
              <Heading as="h6" className="text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                Live Entertainment
              </Heading>
              <div className="flex items-start gap-2.5 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Live Image" className="h-[20px] w-[20px]" />
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
            <div className="flex flex-col items-start justify-center gap-2.5 rounded-lg bg-deep_orange-500 px-[22px] py-3.5 sm:px-5">
              <Heading as="h6" className="mt-1 text-[18px] font-semibold tracking-[-0.72px] text-gray-900">
                Disc Jockeys (DJ’s)
              </Heading>
              <div className="container-xs flex items-start gap-2 self-stretch">
                <a href="#">
                  <Img src="images/img_star_svgrepo_com.svg" alt="Dj Image" className="h-[20px] w-[20px]" />
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
        </header>
      </div>
    </>
  );
}
