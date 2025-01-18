import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";
import Header6 from "../../components/Header6";
import React from "react";

export default function CXTSignUpProfileInfoOnePage() {
  return (
    <>
      <Helmet>
        <title>Complete Your Sign Up for Exclusive Event Opportunities</title>
        <meta
          name="description"
          content="Step 2 in your account setup. Tell us how you found us and finalize your profile. Join our network and discover the benefits of being a part of our Event Pro community."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-a700">
        <Header6 className="self-stretch" />
        <div className="mt-[202px] flex w-[36%] flex-col items-center md:w-full md:px-5">
          <Heading
            size="heading3xl"
            as="h1"
            className="text-[30px] font-semibold tracking-[-1.20px] text-black-900_02 md:text-[28px] sm:text-[26px]"
          >
            <span className="text-black-900_02">Step 2: Account Setup&nbsp;</span>
            <span className="text-deep_orange-500">Wizard&nbsp;</span>
          </Heading>
          <div className="mt-3.5 self-stretch rounded-[10px] border border-solid border-gray-600_01 bg-white-a700 px-[22px] py-[42px] md:py-5 sm:p-5">
            <div className="flex flex-col items-start gap-1">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                How did you Hear about us?
              </Text>
              <Input shape="square" name="Referral Input" className="self-stretch !border px-3.5" />
            </div>
            <div className="mt-1.5 flex gap-2 sm:flex-col">
              <div className="flex flex-1 flex-col items-start gap-0.5 sm:self-stretch">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  City
                </Text>
                <Input shape="square" name="City Input" className="self-stretch !border px-3.5" />
              </div>
              <div className="flex w-[16%] flex-col items-start gap-0.5 sm:w-full">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  State
                </Text>
                <Input shape="square" name="State Input" className="self-stretch !border px-3.5" />
              </div>
              <div className="flex w-[32%] flex-col items-start gap-0.5 sm:w-full">
                <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                  ZipCode
                </Text>
                <Input shape="square" name="ZipCode Input" className="self-stretch !border px-3.5" />
              </div>
            </div>
            <div className="mt-11 flex flex-col items-start gap-1">
              <Text as="p" className="text-[15px] font-normal tracking-[-0.60px] text-black-900_02">
                Password
              </Text>
              <Input shape="square" name="Password Input" className="self-stretch !border px-3.5" />
            </div>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                size="lg"
                shape="round"
                className="mb-6 mt-[42px] self-stretch rounded-lg px-[34px] font-semibold tracking-[-0.56px] sm:px-5"
              >
                FInish
              </Button>
            </a>
          </div>
          <a href="#" className="mt-[82px]">
            <Heading size="headings" as="h2" className="text-[14px] font-semibold tracking-[-0.56px] text-white-a700">
              Create Account
            </Heading>
          </a>
        </div>
        <footer className="mt-[70px] flex self-stretch">
          <div className="flex w-full flex-col items-center rounded-[12px] bg-black-900 p-7 sm:p-5">
            <div className="container-4xl flex flex-col items-center gap-[84px] md:gap-[63px] sm:gap-[42px]">
              <Img
                src="images/img_connecxit_logo.png"
                alt="Brand Logo"
                className="h-[150px] w-[26%] self-end object-contain"
              />
              <div className="ml-[42px] mr-[38px] flex w-full items-start justify-between gap-5 md:mx-0 md:flex-col">
                <div className="flex w-[22%] flex-col items-start gap-1 md:w-full">
                  <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                    About Us
                  </Heading>
                  <ul className="flex flex-col items-start gap-2">
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
                <div className="flex flex-col items-start gap-1">
                  <Heading as="h6" className="text-[18px] font-semibold text-white-a700">
                    Constant Contact Onairn
                  </Heading>
                  <ul className="flex flex-col items-start gap-2">
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
              <div className="h-[0.7px] w-full self-stretch bg-white-a700" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
