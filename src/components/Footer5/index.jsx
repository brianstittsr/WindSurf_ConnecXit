import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer5({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex flex-col p-7 sm:p-5 bg-black-900 rounded-[12px]`}>
      <div className="container-4xl flex flex-col items-center gap-[84px] md:gap-[63px] sm:gap-[42px]">
        <Img src="images/img_connecxit_logo.png" alt="Logo" className="h-[150px] w-[26%] self-end object-contain" />
        <div className="ml-[42px] mr-[38px] flex w-full items-start justify-between gap-5 md:mx-0 md:flex-col">
          <div className="flex w-[22%] flex-col items-start gap-1 md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
              About Us
            </Heading>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a href="Company" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Company
                  </Text>
                </a>
              </li>
              <li>
                <a href="Careers" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Careers
                  </Text>
                </a>
              </li>
              <li>
                <a href="News" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    News
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex w-[28%] flex-col items-start gap-1 md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
              Support
            </Heading>
            <ul className="flex flex-col items-start gap-2">
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
          <div className="flex w-[30%] flex-col items-start gap-1 self-center md:w-full">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
              Become a Partner
            </Heading>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a href="Associations" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Associations
                  </Text>
                </a>
              </li>
              <li>
                <a href="Francises" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Francises
                  </Text>
                </a>
              </li>
              <li>
                <a href="Affilates" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Affilates
                  </Text>
                </a>
              </li>
              <li>
                <a href="Offers" target="_blank" rel="noreferrer">
                  <Text as="p" className="text-[15px] font-normal text-white-a700">
                    Offers
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
              Constant Contact Onairn
            </Heading>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a href="SharpSpring" target="_blank" rel="noreferrer">
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
        <div className="h-[0.7px] w-full self-stretch bg-white-a700" />
      </div>
    </footer>
  );
}
