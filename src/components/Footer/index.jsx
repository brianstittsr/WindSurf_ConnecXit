import { Text, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col pl-[188px] pr-14 py-[78px] lg:pl-8 lg:py-8 md:p-5 sm:p-4 bg-black-900 rounded-[12px]`}
    >
      <div className="mt-[46px] flex w-[76%] flex-col items-center gap-[118px] lg:w-full lg:gap-[118px] md:w-full md:gap-[88px] sm:gap-[59px]">
        <div className="container-3xl flex items-start justify-between gap-5 lg:px-5 md:flex-col md:px-5">
          <div className="flex w-[22%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">
              About Us
            </Heading>
            <ul className="flex flex-col items-start gap-0.5">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Company
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Careers
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    News
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-1 flex w-[28%] flex-col items-start gap-2.5 md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">
              Support
            </Heading>
            <ul className="flex flex-col items-start gap-0.5">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Contact Us
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Knowledge Base
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Product Help Center
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[30%] flex-col items-start gap-2.5 self-center md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">
              Become a Partner
            </Heading>
            <ul className="flex flex-col items-start gap-0.5">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Agencies
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Associations
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Francises
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Affilates
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Offers
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2.5">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700 lg:text-[15px]">
              Constant Contact Onairn
            </Heading>
            <ul className="flex flex-col items-start gap-0.5">
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    SharpSpring
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Retention Science
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-5xl h-[0.7px] bg-white-a700 lg:px-5 md:px-5" />
      </div>
    </footer>
  );
}
