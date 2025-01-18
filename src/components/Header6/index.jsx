import { Img, Text, Button } from "./..";
import React from "react";

export default function Header6({ ...props }) {
  return (
    <header {...props} className={`${props.className} flex justify-center items-center bg-white-a700`}>
      <div className="flex w-[96%] items-center justify-between gap-5 md:w-full md:flex-col">
        <Img
          src="images/img_connecxit_logo.png"
          alt="Brand Logo"
          className="h-[90px] w-[16%] object-contain md:w-full"
        />
        <div className="flex w-[46%] items-center justify-center md:w-full md:flex-col">
          <Button shape="round" className="min-w-[194px] rounded-lg px-[26px] font-medium tracking-[-0.60px] sm:px-5">
            Join As An Event Pro
          </Button>
          <Button
            color="red_A700"
            shape="round"
            className="ml-2 min-w-[172px] rounded-lg px-[26px] font-medium tracking-[-0.60px] text-white-a700 md:ml-0 sm:px-5"
          >
            Join As A Vendor
          </Button>
          <div className="relative ml-5 h-[40px] flex-1 md:ml-0 md:w-full md:flex-none md:self-stretch">
            <ul className="absolute bottom-[7.18px] left-0 right-0 !m-auto flex flex-wrap gap-14 md:gap-5">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    Explore
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    Sign up
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_01">
                    Log in
                  </Text>
                </a>
              </li>
            </ul>
            <a href="#">
              <Img
                src="images/img_image_2.png"
                alt="Profile Image"
                className="absolute bottom-0 right-1/4 top-0 my-auto h-[40px] w-[40px] rounded-[20px] object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
