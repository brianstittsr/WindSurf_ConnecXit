import { Text, Heading, Img } from "./..";
import React from "react";

export default function Footer1({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex self-stretch items-center`}>
      <div className="w-full rounded-[12px] bg-black-900 py-7 sm:py-5">
        <ul className="flex px-14 md:px-5">
          <li>
            <div className="container-4xl flex flex-col gap-[84px] md:gap-[63px] sm:gap-[42px]">
              <div className="ml-[42px] flex items-end justify-between gap-5 md:ml-0 md:flex-col">
                <div className="mb-14 flex w-[8%] flex-col items-start gap-1 md:w-full">
                  <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                    About Us
                  </Heading>
                  <ul className="flex flex-col items-center gap-1 self-stretch">
                    <li>
                      <a href="Company" target="_blank" rel="noreferrer" className="leading-[27px]">
                        <Text as="p" className="text-[15px] font-normal text-white-a700">
                          Company
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Careers" target="_blank" rel="noreferrer" className="leading-[27px]">
                        <Text as="p" className="text-[15px] font-normal text-white-a700">
                          Careers
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="News" target="_blank" rel="noreferrer" className="leading-[27px]">
                        <Text as="p" className="text-[15px] font-normal text-white-a700">
                          News
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mb-14 flex w-[12%] flex-col gap-1 md:w-full">
                  <div className="flex flex-col items-start gap-1">
                    <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                      Support
                    </Heading>
                    <a href="#" className="leading-[27px]">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Contact Us
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    <a href="Knowledge" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Knowledge
                      </Text>
                    </a>
                    <a href="Base" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Base
                      </Text>
                    </a>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    <a href="Product" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Product
                      </Text>
                    </a>
                    <a href="Help" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Help
                      </Text>
                    </a>
                    <a href="Center" target="_blank" rel="noreferrer">
                      <Text as="p" className="text-[15px] font-normal text-white-a700">
                        Center
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex w-[50%] flex-col items-start gap-[84px] self-center md:w-full md:gap-[63px] sm:gap-[42px]">
                  <Img
                    src="images/img_connecxit_logo.png"
                    alt="Logo Image"
                    className="h-[150px] w-[56%] self-end object-contain"
                  />
                  <div className="flex w-[94%] items-start justify-between gap-5 md:w-full sm:flex-col">
                    <div className="flex w-[30%] flex-col items-start gap-2.5 self-center sm:w-full">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        Become a Partner
                      </Heading>
                      <Text as="p" className="text-[15px] font-normal leading-[27px] text-white-a700">
                        Associations
                      </Text>
                      <Text as="p" className="text-[15px] font-normal leading-[27px] text-white-a700">
                        Francises
                      </Text>
                      <Text as="p" className="text-[15px] font-normal leading-[27px] text-white-a700">
                        Affilates
                      </Text>
                      <Text as="p" className="text-[15px] font-normal leading-[27px] text-white-a700">
                        Offers
                      </Text>
                    </div>
                    <div className="flex w-[38%] flex-col items-center gap-1.5 sm:w-full">
                      <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                        Constant Contact Onairn
                      </Heading>
                      <Text as="p" className="text-[15px] font-normal leading-[27px] text-white-a700">
                        SharpSpring
                      </Text>
                      <ul className="flex flex-wrap justify-center gap-2.5 self-stretch">
                        <li>
                          <a href="Retention" target="_blank" rel="noreferrer">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Retention
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a href="Science" target="_blank" rel="noreferrer">
                            <Text as="p" className="text-[15px] font-normal text-white-a700">
                              Science
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[0.7px] bg-white-a700" />
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
}
